/* eslint-disable @typescript-eslint/no-require-imports */

require('./register-ts.cjs');

const fs = require('fs');
const path = require('path');
const { createClient } = require('@supabase/supabase-js');
const { ecosystemRegistry } = require('../src/content/ecosystem-registry');
const { ecosystemSeeds } = require('../src/content/ecosystems');
const {
  validateAllEcosystemSeeds,
} = require('../src/content/validation');

const tableColumns = {
  ecosystems:
    'id,title,featured_pathways,intended_difficulty_distribution,age_bands,tags',
  careers: 'id,slug,title',
  explorations:
    'id,slug,title,featured_career_id,clue_ids,reflection_prompt_ids,recommended_next',
  clues: 'id,exploration_id,career_id,display_order',
  reflections: 'id,exploration_id',
};

function loadLocalEnv() {
  for (const filename of ['.env.local', '.env']) {
    const filePath = path.resolve(__dirname, '..', filename);

    if (!fs.existsSync(filePath)) {
      continue;
    }

    const lines = fs.readFileSync(filePath, 'utf8').split(/\r?\n/);

    lines.forEach((line) => {
      const trimmedLine = line.trim();

      if (
        trimmedLine.length === 0 ||
        trimmedLine.startsWith('#')
      ) {
        return;
      }

      const separatorIndex = trimmedLine.indexOf('=');

      if (separatorIndex === -1) {
        return;
      }

      const key = trimmedLine.slice(0, separatorIndex).trim();
      let value = trimmedLine.slice(separatorIndex + 1).trim();

      if (
        (value.startsWith('"') && value.endsWith('"')) ||
        (value.startsWith("'") && value.endsWith("'"))
      ) {
        value = value.slice(1, -1);
      }

      if (!process.env[key]) {
        process.env[key] = value;
      }
    });
  }
}

function createSupabaseClient() {
  const supabaseUrl =
    process.env.SUPABASE_URL ||
    process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey =
    process.env.SUPABASE_SERVICE_ROLE_KEY ||
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseKey) {
    throw new Error(
      'Seed verification requires SUPABASE_URL or NEXT_PUBLIC_SUPABASE_URL plus SUPABASE_SERVICE_ROLE_KEY or NEXT_PUBLIC_SUPABASE_ANON_KEY.'
    );
  }

  const authMode = process.env.SUPABASE_SERVICE_ROLE_KEY
    ? 'service-role'
    : 'anon-read';

  return {
    authMode,
    client: createClient(supabaseUrl, supabaseKey, {
      auth: {
        persistSession: false,
      },
    }),
  };
}

function printAuthMode(authMode) {
  console.log(`Auth mode: ${authMode}`);

  if (authMode === 'anon-read') {
    console.log(
      'Warning: verification is using the anon key, so row counts depend on public read policies.'
    );
  }
}

function expectedRows() {
  return {
    ecosystems: ecosystemSeeds.map((seed) => seed.metadata),
    careers: ecosystemSeeds.flatMap((seed) => seed.careers),
    explorations: ecosystemSeeds.flatMap(
      (seed) => seed.explorations
    ),
    clues: ecosystemSeeds.flatMap((seed) => seed.clues),
    reflections: ecosystemSeeds.flatMap(
      (seed) => seed.reflections
    ),
  };
}

function byId(rows) {
  return new Map(rows.map((row) => [row.id, row]));
}

function groupSeedExplorations() {
  return new Map(
    ecosystemSeeds.map((seed) => [
      seed.metadata.id,
      new Set(
        seed.explorations.map((exploration) => exploration.id)
      ),
    ])
  );
}

function findDuplicateValues(rows, field) {
  const seen = new Map();
  const duplicates = [];

  rows.forEach((row) => {
    const value = row[field];

    if (!value) {
      return;
    }

    const normalized = String(value).trim().toLowerCase();
    const previous = seen.get(normalized);

    if (previous) {
      duplicates.push({
        value,
        ids: [previous.id, row.id],
      });
      return;
    }

    seen.set(normalized, row);
  });

  return duplicates;
}

async function fetchTable(supabase, table) {
  const { data, error, count } = await supabase
    .from(table)
    .select(tableColumns[table], {
      count: 'exact',
    });

  if (error) {
    return {
      rows: [],
      count: 0,
      error,
    };
  }

  return {
    rows: data ?? [],
    count: count ?? data?.length ?? 0,
    error: null,
  };
}

function addIssue(issues, severity, code, message) {
  issues.push({
    severity,
    code,
    message,
  });
}

function verifyExpectedPresence(issues, table, expected, actual) {
  const missingIds = expected
    .filter((row) => !actual.has(row.id))
    .map((row) => row.id);

  if (missingIds.length === 0) {
    return;
  }

  addIssue(
    issues,
    'error',
    `missing-${table}-rows`,
    `${table} is missing ${missingIds.length} expected rows. Examples: ${missingIds.slice(0, 5).join(', ')}.`
  );
}

function verifyRelationships(issues, actual) {
  const careers = byId(actual.careers.rows);
  const explorations = byId(actual.explorations.rows);
  const clues = byId(actual.clues.rows);
  const reflections = byId(actual.reflections.rows);
  const explorationSlugs = new Set(
    actual.explorations.rows.map((row) => row.slug)
  );

  actual.explorations.rows.forEach((exploration) => {
    if (!careers.has(exploration.featured_career_id)) {
      addIssue(
        issues,
        'error',
        'missing-featured-career',
        `Exploration ${exploration.id} references missing featured career ${exploration.featured_career_id}.`
      );
    }

    (exploration.clue_ids ?? []).forEach((clueId) => {
      const clue = clues.get(clueId);

      if (!clue) {
        addIssue(
          issues,
          'error',
          'missing-exploration-clue',
          `Exploration ${exploration.id} references missing clue ${clueId}.`
        );
        return;
      }

      if (clue.exploration_id !== exploration.id) {
        addIssue(
          issues,
          'error',
          'mismatched-exploration-clue',
          `Exploration ${exploration.id} references clue ${clueId}, but that clue belongs to ${clue.exploration_id}.`
        );
      }
    });

    (exploration.reflection_prompt_ids ?? []).forEach(
      (reflectionId) => {
        const reflection = reflections.get(reflectionId);

        if (!reflection) {
          addIssue(
            issues,
            'error',
            'missing-exploration-reflection',
            `Exploration ${exploration.id} references missing reflection ${reflectionId}.`
          );
          return;
        }

        if (reflection.exploration_id !== exploration.id) {
          addIssue(
            issues,
            'error',
            'mismatched-exploration-reflection',
            `Exploration ${exploration.id} references reflection ${reflectionId}, but that reflection belongs to ${reflection.exploration_id}.`
          );
        }
      }
    );

    (exploration.recommended_next ?? []).forEach((slug) => {
      if (!explorationSlugs.has(slug)) {
        addIssue(
          issues,
          'warning',
          'missing-recommended-exploration',
          `Exploration ${exploration.id} recommends missing exploration slug ${slug}.`
        );
      }
    });
  });

  actual.clues.rows.forEach((clue) => {
    if (!explorations.has(clue.exploration_id)) {
      addIssue(
        issues,
        'error',
        'orphaned-clue-exploration',
        `Clue ${clue.id} references missing exploration ${clue.exploration_id}.`
      );
    }

    if (!careers.has(clue.career_id)) {
      addIssue(
        issues,
        'error',
        'orphaned-clue-career',
        `Clue ${clue.id} references missing career ${clue.career_id}.`
      );
    }
  });

  actual.reflections.rows.forEach((reflection) => {
    if (!explorations.has(reflection.exploration_id)) {
      addIssue(
        issues,
        'error',
        'orphaned-reflection-exploration',
        `Reflection ${reflection.id} references missing exploration ${reflection.exploration_id}.`
      );
    }
  });
}

function verifyDuplicateSlugs(issues, actual) {
  for (const table of ['careers', 'explorations']) {
    findDuplicateValues(actual[table].rows, 'slug').forEach(
      (duplicate) => {
        addIssue(
          issues,
          'error',
          `duplicate-${table}-slug`,
          `${table} slug ${duplicate.value} is used by ${duplicate.ids.join(', ')}.`
        );
      }
    );
  }
}

function verifyClueOrdering(issues, actual) {
  const cluesByExploration = new Map();

  actual.clues.rows.forEach((clue) => {
    const clues =
      cluesByExploration.get(clue.exploration_id) ?? [];
    clues.push(clue);
    cluesByExploration.set(clue.exploration_id, clues);
  });

  cluesByExploration.forEach((clues, explorationId) => {
    const sortedOrders = clues
      .map((clue) => clue.display_order)
      .sort((left, right) => left - right);

    sortedOrders.forEach((order, index) => {
      if (order !== index + 1) {
        addIssue(
          issues,
          'warning',
          'nonsequential-clue-order',
          `Exploration ${explorationId} has clue order ${sortedOrders.join(', ')}.`
        );
      }
    });
  });
}

function verifyEcosystemGrouping(issues, actual) {
  const ecosystemIds = new Set(
    actual.ecosystems.rows.map((row) => row.id)
  );
  const registryIds = new Set(
    ecosystemRegistry.map((entry) => entry.id)
  );
  const seededGroups = groupSeedExplorations();

  ecosystemSeeds.forEach((seed) => {
    if (!ecosystemIds.has(seed.metadata.id)) {
      addIssue(
        issues,
        'error',
        'missing-ecosystem-group',
        `Ecosystem ${seed.metadata.id} is missing from Supabase.`
      );
    }

    if (!registryIds.has(seed.metadata.id)) {
      addIssue(
        issues,
        'error',
        'ecosystem-not-in-registry',
        `Seed ecosystem ${seed.metadata.id} is not in the registry.`
      );
    }

    const expectedExplorations = seededGroups.get(seed.metadata.id);
    const missingExplorations = [...expectedExplorations].filter(
      (id) =>
        !actual.explorations.rows.some(
          (exploration) => exploration.id === id
        )
    );

    if (missingExplorations.length > 0) {
      addIssue(
        issues,
        'error',
        'ecosystem-missing-explorations',
        `Ecosystem ${seed.metadata.id} is missing ${missingExplorations.length} explorations. Examples: ${missingExplorations.slice(0, 5).join(', ')}.`
      );
    }
  });
}

function printCountSummary(expected, actual) {
  console.log('\nRow counts');

  Object.keys(expected).forEach((table) => {
    console.log(
      `- ${table}: ${actual[table].count} Supabase rows, ` +
        `${expected[table].length} expected seed rows`
    );
  });
}

function printIssues(issues) {
  const errors = issues.filter(
    (issue) => issue.severity === 'error'
  );
  const warnings = issues.filter(
    (issue) => issue.severity === 'warning'
  );

  if (errors.length > 0) {
    console.log('\nErrors');
    errors.forEach((issue) => {
      console.log(`- [${issue.code}] ${issue.message}`);
    });
  }

  if (warnings.length > 0) {
    console.log('\nWarnings');
    warnings.forEach((issue) => {
      console.log(`- [${issue.code}] ${issue.message}`);
    });
  }

  console.log(
    `\nVerification summary: ${errors.length} errors, ${warnings.length} warnings.`
  );

  return {
    errors,
    warnings,
  };
}

async function run() {
  loadLocalEnv();

  const { authMode, client: supabase } = createSupabaseClient();
  const expected = expectedRows();
  const actual = {};
  const issues = validateAllEcosystemSeeds(ecosystemSeeds);

  console.log('\nMedQuest Seed Verification');
  printAuthMode(authMode);

  for (const table of Object.keys(tableColumns)) {
    actual[table] = await fetchTable(supabase, table);

    if (actual[table].error) {
      addIssue(
        issues,
        'error',
        `unreadable-${table}`,
        `Could not read ${table}: ${actual[table].error.message}`
      );
    }
  }

  printCountSummary(expected, actual);

  Object.keys(expected).forEach((table) => {
    verifyExpectedPresence(
      issues,
      table,
      expected[table],
      byId(actual[table].rows)
    );
  });

  verifyRelationships(issues, actual);
  verifyDuplicateSlugs(issues, actual);
  verifyClueOrdering(issues, actual);
  verifyEcosystemGrouping(issues, actual);

  const { errors } = printIssues(issues);

  if (errors.length > 0) {
    process.exitCode = 1;
  }
}

run().catch((error) => {
  console.error('\nSeed verification failed.');
  console.error(error);
  process.exitCode = 1;
});
