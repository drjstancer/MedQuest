# MedQuest Content Seed Architecture

This directory is the canonical home for scalable MedQuest educational seed content. It keeps educational content separate from Supabase row formatting and frontend rendering.

## Folder Structure

```text
src/content/
  README.md
  index.ts
  seed-types.ts
  ecosystem-registry.ts
  db-mappers.ts
  validation.ts
  seed-utils.ts
  ecosystems/
    index.ts
    emergency-urgent-care/
      index.ts
      careers.ts
      explorations.ts
      clues.ts
      reflections.ts
```

Add future ecosystems with the same four content files:

```text
src/content/ecosystems/{ecosystem-id}/
  index.ts
  careers.ts
  explorations.ts
  clues.ts
  reflections.ts
```

Recommended ecosystem ids:

- `emergency-urgent-care`
- `primary-longitudinal-care`
- `rehabilitation-movement`
- `mental-behavioral-health`
- `diagnostics-laboratory`
- `imaging-medical-technology`
- `public-community-health`
- `pharmacy-medication-safety`
- `surgical-procedural-care`
- `healthcare-operations-informatics`

## Separation Of Responsibilities

- Database schema: Supabase tables and snake_case columns.
- Educational content: canonical camelCase `Career`, `Exploration`, `Clue`, and `ReflectionPrompt` objects in ecosystem folders.
- Frontend display formatting: React pages and components under `src/app` and `src/components`.
- Database mapping: `db-mappers.ts` converts canonical content into Supabase row shapes.
- Bulk insertion: `seed-utils.ts` accepts a Supabase client and upserts mapped rows.
- Validation: `validation.ts` checks IDs, slugs, relationships, and recommended-next references.
- Master registry: `ecosystem-registry.ts` tracks ecosystem ids, titles, descriptions, featured pathways, intended difficulty distributions, supported age bands, and future capabilities.

The frontend should continue reading through `src/lib/data/*`. Seed files should not become a runtime data dependency for public pages unless intentionally added later.

## Seed File Pattern

Careers:

```ts
import type { Career } from '@/types/exploration';

export const ecosystemCareers: Career[] = [
  {
    id: 'career-example',
    slug: 'example-career',
    title: 'Example Career',
    shortDescription: 'Student-friendly one sentence summary.',
    pathway: 'Emergency & Urgent Care',
    overview: 'Clear overview of what this professional does.',
    education: 'Typical education or training pathway.',
    salaryRange: 'Use source-aware general language.',
    jobOutlook: 'Use source-aware general language.',
    whatSurprisedMe: 'A student-friendly insight.',
    whatIWishIKnew: 'A confidence-building pathway insight.',
    misconception: 'Respectfully correct a common misconception.',
    dayInTheLife: 'Concrete but non-clinical daily work description.',
    blsUrl: 'https://www.bls.gov/...',
    tags: ['emergency-response', 'teamwork'],
  },
];
```

Explorations:

```ts
import type { Exploration } from '@/types/exploration';

export const ecosystemExplorations: Exploration[] = [
  {
    id: 'exploration-example',
    slug: 'example-story',
    title: 'Example Story',
    cinematicIntro: 'Cinematic, age-appropriate setup.',
    difficulty: 'Easy',
    archetype: 'emergency-response',
    estimatedDurationSeconds: 60,
    featuredCareerId: 'career-example',
    clueIds: ['clue-example-1', 'clue-example-2'],
    reflectionPromptIds: ['reflection-example-1'],
    revealTitle: 'Example Career',
    revealNarrative:
      'Explain why the career matters in the healthcare ecosystem.',
    recommendedNext: ['another-example-story'],
    tags: ['teamwork', 'career-exposure'],
  },
];
```

Clues:

```ts
import type { Clue } from '@/types/exploration';

export const ecosystemClues: Clue[] = [
  {
    id: 'clue-example-1',
    explorationId: 'exploration-example',
    careerId: 'career-example',
    order: 1,
    clueText:
      'This clue teaches role understanding without asking students to diagnose or treat.',
    timePenaltySeconds: 5,
    category: 'teamwork',
  },
];
```

Reflections:

```ts
import type { ReflectionPrompt } from '@/types/exploration';

export const ecosystemReflections: ReflectionPrompt[] = [
  {
    id: 'reflection-example-1',
    explorationId: 'exploration-example',
    prompt:
      'What part of this healthcare role would make you curious to learn more?',
  },
];
```

## Supabase Seeding

Use the npm scripts for normal validation and seeding:

```bash
npm run seed:validate
npm run seed:dry-run
npm run seed:prod
```

`seed:validate` checks all registered ecosystem content without creating a Supabase client.

`seed:dry-run` validates content and prints the rows that would be written. It does not write to Supabase.

`seed:prod` requires `SUPABASE_URL` or `NEXT_PUBLIC_SUPABASE_URL` plus `SUPABASE_SERVICE_ROLE_KEY`. Use it only from a trusted server-side environment. Do not expose service role credentials to frontend code.

Insert order is handled sequentially as careers, explorations, clues, and reflections to preserve relational integrity. All upserts default to `onConflict: 'id'`.

The seeding pipeline outputs a console summary with ecosystem counts, difficulty distribution, validation errors, validation warnings, and per-table upsert or dry-run totals.

## AI-Generated Batch Safety

For large AI-generated batches, use this workflow:

1. Generate one ecosystem at a time.
2. Generate careers before explorations.
3. Generate explorations with stable IDs and slugs.
4. Generate clues and reflections in separate files.
5. Run `validateEcosystemSeed` before any database write.
6. Review warnings for recommended-next links outside the current batch.
7. Run `seedEcosystem` with `dryRun: true`.
8. Spot-check student appropriateness, tone, and career accuracy.
9. Seed only after review.

Validation should check:

- duplicate IDs
- duplicate titles
- duplicate exploration slugs
- missing featured careers
- missing clue references
- missing reflection references
- orphan clues
- orphan reflections
- recommended-next references outside the current batch
- duplicate tags
- minimum clue count
- minimum reflection length
- minimum cinematic intro and reveal narrative length
- career field completeness

Content review should check:

- no clinical simulation or treatment decisions
- no medical advice
- no graphic or fear-based writing
- clues progress from broad to specific
- reflections support curiosity, belonging, strengths, and self-efficacy
- visible and overlooked professions are both represented
- all career and exploration relationships use IDs, not slugs

Do not generate all 80 explorations in one pass. Build and validate content in small ecosystem batches so relationship errors and tone drift are easy to catch.

The architecture is intended to scale to 100+ careers, 300+ explorations, multiple educational age bands, future multimedia fields, and educator dashboard workflows without mixing database schema, frontend display formatting, and educational content authoring.
