/* eslint-disable @typescript-eslint/no-require-imports */

require('./register-ts.cjs');

const { createClient } = require('@supabase/supabase-js');
const { ecosystemRegistry } = require('../src/content/ecosystem-registry');
const { ecosystemSeeds } = require('../src/content/ecosystems');
const { seedEcosystem } = require('../src/content/seed-utils');
const {
  validateAllEcosystemSeeds,
} = require('../src/content/validation');

const validModes = new Set(['validate', 'dry-run', 'seed']);

function getMode() {
  const modeArgument = process.argv.find((argument) =>
    argument.startsWith('--mode=')
  );
  const mode = modeArgument
    ? modeArgument.replace('--mode=', '')
    : 'validate';

  if (!validModes.has(mode)) {
    throw new Error(
      `Invalid mode "${mode}". Use validate, dry-run, or seed.`
    );
  }

  return mode;
}

function countRows(seeds) {
  return seeds.reduce(
    (totals, seed) => ({
      careers: totals.careers + seed.careers.length,
      explorations:
        totals.explorations + seed.explorations.length,
      clues: totals.clues + seed.clues.length,
      reflections:
        totals.reflections + seed.reflections.length,
    }),
    {
      careers: 0,
      explorations: 0,
      clues: 0,
      reflections: 0,
    }
  );
}

function validateRegistryCoverage() {
  const registryIds = new Set(
    ecosystemRegistry.map((entry) => entry.id)
  );
  const seedIds = new Set(
    ecosystemSeeds.map((seed) => seed.metadata.id)
  );
  const issues = [];

  ecosystemSeeds.forEach((seed) => {
    if (!registryIds.has(seed.metadata.id)) {
      issues.push({
        code: 'seed-missing-registry-entry',
        message:
          `Seed ${seed.metadata.id} has no ecosystem registry entry.`,
        severity: 'error',
        entityId: seed.metadata.id,
      });
    }
  });

  ecosystemRegistry.forEach((entry) => {
    if (!seedIds.has(entry.id)) {
      issues.push({
        code: 'registry-missing-seed',
        message:
          `Registry entry ${entry.id} has no seed content yet.`,
        severity: 'warning',
        entityId: entry.id,
      });
    }
  });

  return issues;
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

  return {
    errors,
    warnings,
  };
}

function printContentSummary(mode, issues) {
  const totals = countRows(ecosystemSeeds);

  console.log('\nMedQuest Seed Pipeline');
  console.log(`Mode: ${mode}`);
  console.log(`Ecosystems: ${ecosystemSeeds.length}`);
  console.log(`Careers: ${totals.careers}`);
  console.log(`Explorations: ${totals.explorations}`);
  console.log(`Clues: ${totals.clues}`);
  console.log(`Reflections: ${totals.reflections}`);
  console.log(
    'Positioning: educational healthcare career exploration, not clinical simulation.'
  );

  ecosystemSeeds.forEach((seed) => {
    const distribution = seed.explorations.reduce(
      (counts, exploration) => ({
        ...counts,
        [exploration.difficulty]:
          counts[exploration.difficulty] + 1,
      }),
      {
        Easy: 0,
        Medium: 0,
        Hard: 0,
      }
    );

    console.log(
      `- ${seed.metadata.title}: ` +
        `${seed.careers.length} careers, ` +
        `${seed.explorations.length} explorations ` +
        `(Easy ${distribution.Easy}, ` +
        `Medium ${distribution.Medium}, ` +
        `Hard ${distribution.Hard})`
    );
  });

  const { errors, warnings } = printIssues(issues);

  console.log(
    `\nValidation summary: ${errors.length} errors, ` +
      `${warnings.length} warnings.`
  );

  return {
    errors,
    warnings,
  };
}

function createSupabaseClient() {
  const supabaseUrl =
    process.env.SUPABASE_URL ||
    process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceRoleKey =
    process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !serviceRoleKey) {
    throw new Error(
      'Production seeding requires SUPABASE_URL or NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY.'
    );
  }

  return createClient(supabaseUrl, serviceRoleKey, {
    auth: {
      persistSession: false,
    },
  });
}

async function run() {
  const mode = getMode();
  const validationIssues = [
    ...validateAllEcosystemSeeds(ecosystemSeeds),
    ...validateRegistryCoverage(),
  ];
  const { errors } = printContentSummary(
    mode,
    validationIssues
  );

  if (errors.length > 0) {
    process.exitCode = 1;
    return;
  }

  if (mode === 'validate') {
    console.log('\nNo Supabase writes requested.');
    return;
  }

  if (mode === 'dry-run') {
    for (const seed of ecosystemSeeds) {
      const result = await seedEcosystem({}, seed, {
        dryRun: true,
      });

      console.log(`\nDry run: ${seed.metadata.title}`);
      result.results.forEach((tableResult) => {
        console.log(
          `- ${tableResult.table}: ` +
            `${tableResult.rows} rows previewed`
        );
      });
    }

    console.log('\nDry run complete. No Supabase writes made.');
    return;
  }

  const supabase = createSupabaseClient();

  for (const seed of ecosystemSeeds) {
    const result = await seedEcosystem(supabase, seed, {
      dryRun: false,
      onConflict: 'id',
    });

    console.log(`\nSeeded: ${seed.metadata.title}`);
    result.results.forEach((tableResult) => {
      console.log(
        `- ${tableResult.table}: ${tableResult.rows} rows upserted`
      );
    });
  }

  console.log('\nProduction seeding complete.');
}

run().catch((error) => {
  console.error('\nSeed pipeline failed.');
  console.error(error);
  process.exitCode = 1;
});
