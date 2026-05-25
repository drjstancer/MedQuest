import type {
  PostgrestError,
  SupabaseClient,
} from '@supabase/supabase-js';

import {
  toCareerRow,
  toClueRow,
  toExplorationRow,
  toReflectionRow,
  type CareerRow,
  type ClueRow,
  type ExplorationRow,
  type ReflectionRow,
} from './db-mappers';
import type { EcosystemSeed } from './seed-types';
import { assertValidEcosystemSeed } from './validation';

type SeedTable =
  | 'careers'
  | 'explorations'
  | 'clues'
  | 'reflections';

export interface BulkSeedOptions {
  dryRun?: boolean;
  onConflict?: string;
}

export interface BulkSeedResult {
  table: SeedTable;
  rows: number;
  skipped: boolean;
  error: PostgrestError | null;
}

type SeedRow =
  | CareerRow
  | ExplorationRow
  | ClueRow
  | ReflectionRow;

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
    skipped: false,
    error,
  };
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
    options
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
    options
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
    options
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
    options
  );
}

export async function seedEcosystem(
  supabase: SupabaseClient,
  seed: EcosystemSeed,
  options: BulkSeedOptions = {}
) {
  const validationIssues = assertValidEcosystemSeed(seed);

  const results: BulkSeedResult[] = [];

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
