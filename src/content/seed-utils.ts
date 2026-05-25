import type {
  PostgrestError,
  SupabaseClient,
} from '@supabase/supabase-js';

import {
  toEcosystemRow,
  toCareerRow,
  toClueRow,
  toExplorationEcosystemRows,
  toExplorationRow,
  toReflectionRow,
  type EcosystemRow,
  type CareerRow,
  type ClueRow,
  type ExplorationEcosystemRow,
  type ExplorationRow,
  type ReflectionRow,
} from './db-mappers';
import type {
  EcosystemRegistryEntry,
  EcosystemSeed,
} from './seed-types';
import { assertValidEcosystemSeed } from './validation';

type SeedTable =
  | 'ecosystems'
  | 'careers'
  | 'explorations'
  | 'clues'
  | 'reflections'
  | 'exploration_ecosystems';

export interface BulkSeedOptions {
  dryRun?: boolean;
  onConflict?: string;
}

export interface BulkSeedResult {
  table: SeedTable;
  rows: number;
  inserted: number;
  updated: number;
  skippedCount: number;
  skipped: boolean;
  error: PostgrestError | null;
}

type SeedRow =
  | EcosystemRow
  | CareerRow
  | ExplorationRow
  | ClueRow
  | ExplorationEcosystemRow
  | ReflectionRow;

function normalizeValue(value: unknown): unknown {
  if (value === undefined || value === null) {
    return null;
  }

  if (Array.isArray(value)) {
    return value.map(normalizeValue);
  }

  if (typeof value === 'object') {
    return Object.fromEntries(
      Object.entries(value as Record<string, unknown>)
        .sort(([leftKey], [rightKey]) =>
          leftKey.localeCompare(rightKey)
        )
        .map(([key, entryValue]) => [
          key,
          normalizeValue(entryValue),
        ])
    );
  }

  return value;
}

function comparableRow(row: Record<string, unknown>) {
  return JSON.stringify(normalizeValue(row));
}

function pickComparableColumns(
  row: Record<string, unknown>,
  columns: string[]
) {
  return Object.fromEntries(
    columns.map((column) => [column, row[column] ?? null])
  );
}

async function countRowChanges(
  supabase: SupabaseClient,
  table: SeedTable,
  rows: SeedRow[],
  onConflict: string
) {
  if (rows.length === 0) {
    return {
      inserted: 0,
      updated: 0,
      skippedCount: 0,
      error: null,
    };
  }

  const columns = Object.keys(rows[0]);
  const conflictColumns = onConflict
    .split(',')
    .map((column) => column.trim())
    .filter(Boolean);
  const conflictLookupColumn = conflictColumns[0];

  const { data, error } = await supabase
    .from(table)
    .select(columns.join(','))
    .in(
      conflictLookupColumn,
      rows.map((row) =>
        (row as unknown as Record<string, unknown>)[
          conflictLookupColumn
        ]
      )
    );

  if (error) {
    return {
      inserted: 0,
      updated: 0,
      skippedCount: 0,
      error,
    };
  }

  const existingRows = new Map(
    ((data ?? []) as unknown as Array<Record<string, unknown>>).map((row) => [
      comparableRow(pickComparableColumns(row, conflictColumns)),
      comparableRow(
        pickComparableColumns(
          row,
          columns
        )
      ),
    ])
  );

  return rows.reduce(
    (counts, row) => {
      const existingRow = existingRows.get(
        comparableRow(
          pickComparableColumns(
            row as unknown as Record<string, unknown>,
            conflictColumns
          )
        )
      );

      if (!existingRow) {
        counts.inserted += 1;
        return counts;
      }

      if (
        existingRow ===
        comparableRow(row as unknown as Record<string, unknown>)
      ) {
        counts.skippedCount += 1;
        return counts;
      }

      counts.updated += 1;
      return counts;
    },
    {
      inserted: 0,
      updated: 0,
      skippedCount: 0,
      error: null as PostgrestError | null,
    }
  );
}

async function bulkUpsert(
  supabase: SupabaseClient,
  table: SeedTable,
  rows: SeedRow[],
  options: BulkSeedOptions = {}
): Promise<BulkSeedResult> {
  if (options.dryRun || rows.length === 0) {
    return {
      table,
      rows: rows.length,
      inserted: options.dryRun ? rows.length : 0,
      updated: 0,
      skippedCount: rows.length === 0 ? 0 : 0,
      skipped: true,
      error: null,
    };
  }

  const changeCounts = await countRowChanges(
    supabase,
    table,
    rows,
    options.onConflict ?? 'id'
  );

  if (changeCounts.error) {
    return {
      table,
      rows: rows.length,
      inserted: 0,
      updated: 0,
      skippedCount: 0,
      skipped: false,
      error: changeCounts.error,
    };
  }

  if (
    changeCounts.inserted === 0 &&
    changeCounts.updated === 0
  ) {
    return {
      table,
      rows: rows.length,
      inserted: 0,
      updated: 0,
      skippedCount: changeCounts.skippedCount,
      skipped: true,
      error: null,
    };
  }

  const { error } = await supabase
    .from(table)
    .upsert(rows, {
      onConflict: options.onConflict ?? 'id',
    });

  return {
    table,
    rows: rows.length,
    inserted: changeCounts.inserted,
    updated: changeCounts.updated,
    skippedCount: changeCounts.skippedCount,
    skipped: false,
    error,
  };
}

export async function seedEcosystemMetadata(
  supabase: SupabaseClient,
  metadata: EcosystemSeed['metadata'],
  registryEntry?: EcosystemRegistryEntry,
  options?: BulkSeedOptions
) {
  return bulkUpsert(
    supabase,
    'ecosystems',
    [toEcosystemRow(metadata, registryEntry)],
    {
      ...options,
      onConflict: 'slug',
    }
  );
}

export async function seedCareers(
  supabase: SupabaseClient,
  careers: EcosystemSeed['careers'],
  options?: BulkSeedOptions
) {
  return bulkUpsert(
    supabase,
    'careers',
    careers.map(toCareerRow),
    {
      ...options,
      onConflict: 'slug',
    }
  );
}

export async function seedExplorations(
  supabase: SupabaseClient,
  explorations: EcosystemSeed['explorations'],
  options?: BulkSeedOptions
) {
  return bulkUpsert(
    supabase,
    'explorations',
    explorations.map(toExplorationRow),
    {
      ...options,
      onConflict: 'slug',
    }
  );
}

export async function seedClues(
  supabase: SupabaseClient,
  clues: EcosystemSeed['clues'],
  options?: BulkSeedOptions
) {
  return bulkUpsert(
    supabase,
    'clues',
    clues.map(toClueRow),
    {
      ...options,
      onConflict: 'id',
    }
  );
}

export async function seedReflections(
  supabase: SupabaseClient,
  reflections: EcosystemSeed['reflections'],
  options?: BulkSeedOptions
) {
  return bulkUpsert(
    supabase,
    'reflections',
    reflections.map(toReflectionRow),
    {
      ...options,
      onConflict: 'id',
    }
  );
}

export async function seedExplorationEcosystems(
  supabase: SupabaseClient,
  seed: EcosystemSeed,
  options?: BulkSeedOptions
) {
  return bulkUpsert(
    supabase,
    'exploration_ecosystems',
    toExplorationEcosystemRows(
      seed.metadata.id,
      seed.explorations
    ),
    {
      ...options,
      onConflict: 'exploration_id,ecosystem_id',
    }
  );
}

export async function seedEcosystem(
  supabase: SupabaseClient,
  seed: EcosystemSeed,
  options: BulkSeedOptions = {},
  registryEntry?: EcosystemRegistryEntry
) {
  const validationIssues = assertValidEcosystemSeed(seed);

  const results: BulkSeedResult[] = [];

  results.push(
    await seedEcosystemMetadata(
      supabase,
      seed.metadata,
      registryEntry,
      options
    )
  );
  results.push(
    await seedCareers(supabase, seed.careers, options)
  );
  results.push(
    await seedExplorations(
      supabase,
      seed.explorations,
      options
    )
  );
  results.push(
    await seedExplorationEcosystems(supabase, seed, options)
  );
  results.push(
    await seedClues(supabase, seed.clues, options)
  );
  results.push(
    await seedReflections(
      supabase,
      seed.reflections,
      options
    )
  );

  const failedResult = results.find((result) => result.error);

  if (failedResult?.error) {
    throw new Error(
      `Failed to seed ${failedResult.table}: ` +
        failedResult.error.message
    );
  }

  return {
    validationIssues,
    results,
  };
}
