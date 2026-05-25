import type {
  Career,
  Exploration,
} from '@/types/exploration';

import type {
  EcosystemSeed,
  SeedValidationIssue,
} from './seed-types';

const MIN_EXPLORATION_CLUES = 4;
const MIN_REFLECTION_LENGTH = 45;
const MIN_REVEAL_NARRATIVE_LENGTH = 140;
const MIN_CINEMATIC_INTRO_LENGTH = 120;

function findDuplicates(values: string[]) {
  const seen = new Set<string>();
  const duplicates = new Set<string>();

  values.forEach((value) => {
    const normalized = value.trim().toLowerCase();

    if (seen.has(normalized)) {
      duplicates.add(value);
      return;
    }

    seen.add(normalized);
  });

  return [...duplicates];
}

function hasDuplicateValues(values: string[]) {
  return findDuplicates(values).length > 0;
}

function addIssue(
  issues: SeedValidationIssue[],
  issue: SeedValidationIssue
) {
  issues.push(issue);
}

function addDuplicateIssues(
  issues: SeedValidationIssue[],
  values: string[],
  code: string,
  label: string
) {
  findDuplicates(values).forEach((value) =>
    addIssue(issues, {
      code,
      message: `Duplicate ${label}: ${value}`,
      severity: 'error',
      entityId: value,
    })
  );
}

function requiredCareerFields(career: Career) {
  return [
    ['id', career.id],
    ['slug', career.slug],
    ['title', career.title],
    ['shortDescription', career.shortDescription],
    ['pathway', career.pathway],
    ['overview', career.overview],
    ['education', career.education],
    ['salaryRange', career.salaryRange],
    ['jobOutlook', career.jobOutlook],
    ['whatSurprisedMe', career.whatSurprisedMe],
    ['whatIWishIKnew', career.whatIWishIKnew],
    ['misconception', career.misconception],
    ['dayInTheLife', career.dayInTheLife],
    ['blsUrl', career.blsUrl],
  ] as const;
}

function addCareerQualityIssues(
  issues: SeedValidationIssue[],
  career: Career
) {
  requiredCareerFields(career).forEach(
    ([fieldName, value]) => {
      if (!value || value.trim().length === 0) {
        addIssue(issues, {
          code: 'incomplete-career-field',
          message:
            `Career ${career.id} is missing required field ` +
            fieldName,
          severity: 'warning',
          entityId: career.id,
        });
      }
    }
  );

  if (career.tags.length === 0) {
    addIssue(issues, {
      code: 'career-missing-tags',
      message: `Career ${career.id} has no tags.`,
      severity: 'warning',
      entityId: career.id,
    });
  }

  if (hasDuplicateValues(career.tags)) {
    addIssue(issues, {
      code: 'duplicate-career-tags',
      message: `Career ${career.id} has duplicate tags.`,
      severity: 'warning',
      entityId: career.id,
    });
  }
}

function addExplorationQualityIssues(
  issues: SeedValidationIssue[],
  exploration: Exploration
) {
  if (exploration.clueIds.length < MIN_EXPLORATION_CLUES) {
    addIssue(issues, {
      code: 'exploration-too-few-clues',
      message:
        `Exploration ${exploration.id} has ` +
        `${exploration.clueIds.length} clues; minimum is ` +
        MIN_EXPLORATION_CLUES,
      severity: 'warning',
      entityId: exploration.id,
    });
  }

  if (
    exploration.cinematicIntro.trim().length <
    MIN_CINEMATIC_INTRO_LENGTH
  ) {
    addIssue(issues, {
      code: 'exploration-intro-too-short',
      message:
        `Exploration ${exploration.id} cinematic intro is shorter than ` +
        `${MIN_CINEMATIC_INTRO_LENGTH} characters.`,
      severity: 'warning',
      entityId: exploration.id,
    });
  }

  if (
    exploration.revealNarrative.trim().length <
    MIN_REVEAL_NARRATIVE_LENGTH
  ) {
    addIssue(issues, {
      code: 'exploration-narrative-too-short',
      message:
        `Exploration ${exploration.id} reveal narrative is shorter than ` +
        `${MIN_REVEAL_NARRATIVE_LENGTH} characters.`,
      severity: 'warning',
      entityId: exploration.id,
    });
  }

  if (exploration.tags.length === 0) {
    addIssue(issues, {
      code: 'exploration-missing-tags',
      message: `Exploration ${exploration.id} has no tags.`,
      severity: 'warning',
      entityId: exploration.id,
    });
  }

  if (hasDuplicateValues(exploration.tags)) {
    addIssue(issues, {
      code: 'duplicate-exploration-tags',
      message:
        `Exploration ${exploration.id} has duplicate tags.`,
      severity: 'warning',
      entityId: exploration.id,
    });
  }
}

export function validateEcosystemSeed(
  seed: EcosystemSeed
): SeedValidationIssue[] {
  const issues: SeedValidationIssue[] = [];
  const careerIds = new Set(
    seed.careers.map((career) => career.id)
  );
  const explorationIds = new Set(
    seed.explorations.map((exploration) => exploration.id)
  );
  const explorationSlugs = new Set(
    seed.explorations.map((exploration) => exploration.slug)
  );
  const clueIds = new Set(
    seed.clues.map((clue) => clue.id)
  );
  const reflectionIds = new Set(
    seed.reflections.map((reflection) => reflection.id)
  );

  addDuplicateIssues(
    issues,
    seed.careers.map((career) => career.id),
    'duplicate-career-id',
    'career id'
  );
  addDuplicateIssues(
    issues,
    seed.careers.map((career) => career.slug),
    'duplicate-career-slug',
    'career slug'
  );
  addDuplicateIssues(
    issues,
    seed.careers.map((career) => career.title),
    'duplicate-career-title',
    'career title'
  );
  addDuplicateIssues(
    issues,
    seed.explorations.map((exploration) => exploration.id),
    'duplicate-exploration-id',
    'exploration id'
  );
  addDuplicateIssues(
    issues,
    seed.explorations.map((exploration) => exploration.slug),
    'duplicate-exploration-slug',
    'exploration slug'
  );
  addDuplicateIssues(
    issues,
    seed.explorations.map((exploration) => exploration.title),
    'duplicate-exploration-title',
    'exploration title'
  );
  addDuplicateIssues(
    issues,
    seed.clues.map((clue) => clue.id),
    'duplicate-clue-id',
    'clue id'
  );
  addDuplicateIssues(
    issues,
    seed.reflections.map((reflection) => reflection.id),
    'duplicate-reflection-id',
    'reflection id'
  );

  seed.careers.forEach((career) => {
    addCareerQualityIssues(issues, career);
  });

  seed.explorations.forEach((exploration) => {
    addExplorationQualityIssues(issues, exploration);

    if (!careerIds.has(exploration.featuredCareerId)) {
      addIssue(issues, {
        code: 'missing-featured-career',
        message:
          `Exploration ${exploration.id} references missing career ` +
          exploration.featuredCareerId,
        severity: 'error',
        entityId: exploration.id,
      });
    }

    exploration.clueIds.forEach((clueId) => {
      if (!clueIds.has(clueId)) {
        addIssue(issues, {
          code: 'missing-clue',
          message:
            `Exploration ${exploration.id} references missing clue ` +
            clueId,
          severity: 'error',
          entityId: exploration.id,
        });
      }
    });

    exploration.reflectionPromptIds.forEach(
      (reflectionId) => {
        if (!reflectionIds.has(reflectionId)) {
          addIssue(issues, {
            code: 'missing-reflection',
            message:
              `Exploration ${exploration.id} references missing reflection ` +
              reflectionId,
            severity: 'error',
            entityId: exploration.id,
          });
        }
      }
    );

    exploration.recommendedNext.forEach((slug) => {
      if (!explorationSlugs.has(slug)) {
        addIssue(issues, {
          code: 'external-recommended-next',
          message:
            `Exploration ${exploration.id} recommends ${slug}, ` +
            'which is outside this seed batch.',
          severity: 'warning',
          entityId: exploration.id,
        });
      }
    });
  });

  seed.clues.forEach((clue) => {
    if (!explorationIds.has(clue.explorationId)) {
      addIssue(issues, {
        code: 'orphan-clue-exploration',
        message:
          `Clue ${clue.id} references missing exploration ` +
          clue.explorationId,
        severity: 'error',
        entityId: clue.id,
      });
    }

    if (!careerIds.has(clue.careerId)) {
      addIssue(issues, {
        code: 'orphan-clue-career',
        message:
          `Clue ${clue.id} references missing career ` +
          clue.careerId,
        severity: 'error',
        entityId: clue.id,
      });
    }
  });

  seed.reflections.forEach((reflection) => {
    if (
      reflection.prompt.trim().length <
      MIN_REFLECTION_LENGTH
    ) {
      addIssue(issues, {
        code: 'reflection-too-short',
        message:
          `Reflection ${reflection.id} is shorter than ` +
          `${MIN_REFLECTION_LENGTH} characters.`,
        severity: 'warning',
        entityId: reflection.id,
      });
    }

    if (!explorationIds.has(reflection.explorationId)) {
      addIssue(issues, {
        code: 'orphan-reflection-exploration',
        message:
          `Reflection ${reflection.id} references missing exploration ` +
          reflection.explorationId,
        severity: 'error',
        entityId: reflection.id,
      });
    }
  });

  return issues;
}

export function validateAllEcosystemSeeds(
  seeds: EcosystemSeed[]
): SeedValidationIssue[] {
  const issues = seeds.flatMap(validateEcosystemSeed);
  const allCareers = seeds.flatMap((seed) => seed.careers);
  const allExplorations = seeds.flatMap(
    (seed) => seed.explorations
  );
  const allClues = seeds.flatMap((seed) => seed.clues);
  const allReflections = seeds.flatMap(
    (seed) => seed.reflections
  );

  addDuplicateIssues(
    issues,
    allCareers.map((career) => career.id),
    'global-duplicate-career-id',
    'global career id'
  );
  addDuplicateIssues(
    issues,
    allCareers.map((career) => career.slug),
    'global-duplicate-career-slug',
    'global career slug'
  );
  addDuplicateIssues(
    issues,
    allCareers.map((career) => career.title),
    'global-duplicate-career-title',
    'global career title'
  );
  addDuplicateIssues(
    issues,
    allExplorations.map((exploration) => exploration.id),
    'global-duplicate-exploration-id',
    'global exploration id'
  );
  addDuplicateIssues(
    issues,
    allExplorations.map((exploration) => exploration.slug),
    'global-duplicate-exploration-slug',
    'global exploration slug'
  );
  addDuplicateIssues(
    issues,
    allExplorations.map((exploration) => exploration.title),
    'global-duplicate-exploration-title',
    'global exploration title'
  );
  addDuplicateIssues(
    issues,
    allClues.map((clue) => clue.id),
    'global-duplicate-clue-id',
    'global clue id'
  );
  addDuplicateIssues(
    issues,
    allReflections.map((reflection) => reflection.id),
    'global-duplicate-reflection-id',
    'global reflection id'
  );

  return issues;
}

export function assertValidEcosystemSeed(seed: EcosystemSeed) {
  const issues = validateEcosystemSeed(seed);
  const errors = issues.filter(
    (issue) => issue.severity === 'error'
  );

  if (errors.length > 0) {
    throw new Error(
      errors.map((error) => error.message).join('\n')
    );
  }

  return issues;
}

export function assertValidEcosystemSeeds(
  seeds: EcosystemSeed[]
) {
  const issues = validateAllEcosystemSeeds(seeds);
  const errors = issues.filter(
    (issue) => issue.severity === 'error'
  );

  if (errors.length > 0) {
    throw new Error(
      errors.map((error) => error.message).join('\n')
    );
  }

  return issues;
}
