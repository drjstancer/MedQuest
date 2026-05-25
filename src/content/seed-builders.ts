import type {
  Career,
  Clue,
  Exploration,
  ReflectionPrompt,
} from '@/types/exploration';

export interface CareerSeedInput {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  pathway: string;
  overview: string;
  education: string;
  misconception: string;
  dayInTheLife: string;
  tags: string[];
  blsUrl?: string;
  learnMoreUrl?: string;
  youtubeSearchUrl?: string;
}

export interface ExplorationPlan {
  id: string;
  slug: string;
  title: string;
  cinematicIntro: string;
  archetype: Exploration['archetype'];
  difficulty: Exploration['difficulty'];
  estimatedDurationSeconds: number;
  featuredCareerId: string;
  revealTitle: string;
  revealNarrative: string;
  tags: string[];
  recommendedNext: string[];
  clues: Array<{
    text: string;
    category: Clue['category'];
  }>;
  reflectionPrompt: string;
}

export function createCareer(
  input: CareerSeedInput
): Career {
  return {
    id: input.id,
    slug: input.slug,
    title: input.title,
    shortDescription: input.shortDescription,
    pathway: input.pathway,
    overview: input.overview,
    education: input.education,
    salaryRange:
      'Salary varies by region, setting, education, credentials, and experience.',
    jobOutlook:
      'This role supports healthcare access, teamwork, and continuity in settings where communities depend on reliable care.',
    whatSurprisedMe:
      'Students are often surprised by how much communication, organization, and collaboration shape this career.',
    whatIWishIKnew:
      'There are many ways to enter healthcare, including direct patient care, support roles, technology, operations, and community-focused pathways.',
    misconception: input.misconception,
    dayInTheLife: input.dayInTheLife,
    blsUrl:
      input.blsUrl ??
      'https://www.bls.gov/ooh/healthcare/home.htm',
    learnMoreUrl: input.learnMoreUrl,
    youtubeSearchUrl:
      input.youtubeSearchUrl ??
      `https://www.youtube.com/results?search_query=day+in+the+life+${encodeURIComponent(input.title)}`,
    tags: input.tags,
  };
}

export function plansToExplorations(
  plans: ExplorationPlan[]
): Exploration[] {
  return plans.map((plan) => ({
    id: plan.id,
    slug: plan.slug,
    title: plan.title,
    cinematicIntro: plan.cinematicIntro,
    archetype: plan.archetype,
    difficulty: plan.difficulty,
    estimatedDurationSeconds: plan.estimatedDurationSeconds,
    featuredCareerId: plan.featuredCareerId,
    clueIds: plan.clues.map(
      (_, index) => `clue-${plan.slug}-${index + 1}`
    ),
    reflectionPromptIds: [`reflection-${plan.slug}-1`],
    revealTitle: plan.revealTitle,
    revealNarrative: plan.revealNarrative,
    tags: plan.tags,
    recommendedNext: plan.recommendedNext,
  }));
}

export function plansToClues(
  plans: ExplorationPlan[]
): Clue[] {
  return plans.flatMap((plan) =>
    plan.clues.map((clue, index) => ({
      id: `clue-${plan.slug}-${index + 1}`,
      explorationId: plan.id,
      careerId: plan.featuredCareerId,
      order: index + 1,
      clueText: clue.text,
      timePenaltySeconds: 5,
      category: clue.category,
    }))
  );
}

export function plansToReflections(
  plans: ExplorationPlan[]
): ReflectionPrompt[] {
  return plans.map((plan) => ({
    id: `reflection-${plan.slug}-1`,
    explorationId: plan.id,
    prompt: plan.reflectionPrompt,
  }));
}
