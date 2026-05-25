import type {
  Career,
  Clue,
  Exploration,
  ReflectionPrompt,
} from '@/types/exploration';

import type {
  EcosystemRegistryEntry,
  EcosystemSeedMetadata,
} from './seed-types';

export interface EcosystemRow {
  id: string;
  slug: string;
  title: string;
  description: string;
  featured_pathways: string[];
  intended_difficulty_distribution: {
    Easy: number;
    Medium: number;
    Hard: number;
  };
  age_bands: string[];
  future_capabilities: string[];
  tags: string[];
}

export interface CareerRow {
  id: string;
  slug: string;
  title: string;
  short_description: string;
  pathway: string;
  overview: string;
  education: string;
  salary_range: string;
  job_outlook: string;
  what_surprised_me: string;
  what_i_wish_i_knew: string;
  misconception: string;
  day_in_the_life: string;
  bls_url: string;
  learn_more_url?: string;
  youtube_video_id?: string;
  youtube_search_url?: string;
  tags: string[];
}

export interface ExplorationRow {
  id: string;
  slug: string;
  title: string;
  cinematic_intro: string;
  difficulty: Exploration['difficulty'];
  archetype: Exploration['archetype'];
  estimated_duration_seconds: number;
  featured_career_id: string;
  clue_ids: string[];
  reflection_prompt_ids: string[];
  reveal_title: string;
  reveal_narrative: string;
  recommended_next: string[];
  tags: string[];
}

export interface ClueRow {
  id: string;
  exploration_id: string;
  career_id: string;
  display_order: number;
  clue_text: string;
  time_penalty_seconds: number;
  category: Clue['category'];
}

export interface ReflectionRow {
  id: string;
  exploration_id: string;
  prompt: string;
}

export interface ExplorationEcosystemRow {
  exploration_id: string;
  ecosystem_id: string;
}

export function toCareerRow(career: Career): CareerRow {
  return {
    id: career.id,
    slug: career.slug,
    title: career.title,
    short_description: career.shortDescription,
    pathway: career.pathway,
    overview: career.overview,
    education: career.education,
    salary_range: career.salaryRange,
    job_outlook: career.jobOutlook,
    what_surprised_me: career.whatSurprisedMe,
    what_i_wish_i_knew: career.whatIWishIKnew,
    misconception: career.misconception,
    day_in_the_life: career.dayInTheLife,
    bls_url: career.blsUrl,
    learn_more_url: career.learnMoreUrl,
    youtube_video_id: career.youtubeVideoId,
    youtube_search_url: career.youtubeSearchUrl,
    tags: career.tags,
  };
}

export function toEcosystemRow(
  metadata: EcosystemSeedMetadata,
  registryEntry?: EcosystemRegistryEntry
): EcosystemRow {
  return {
    id: metadata.id,
    slug: metadata.id,
    title: metadata.title,
    description: metadata.description,
    featured_pathways:
      metadata.featuredPathways ??
      registryEntry?.featuredPathways ??
      [],
    intended_difficulty_distribution:
      metadata.intendedDifficultyDistribution ??
      registryEntry?.intendedDifficultyDistribution ?? {
        Easy: 0,
        Medium: 0,
        Hard: 0,
      },
    age_bands:
      metadata.ageBands ?? registryEntry?.ageBands ?? [],
    future_capabilities:
      registryEntry?.futureCapabilities ?? [],
    tags: metadata.tags,
  };
}

export function toExplorationEcosystemRows(
  ecosystemId: string,
  explorations: Exploration[]
): ExplorationEcosystemRow[] {
  return explorations.map((exploration) => ({
    exploration_id: exploration.id,
    ecosystem_id: ecosystemId,
  }));
}

export function toExplorationRow(
  exploration: Exploration
): ExplorationRow {
  return {
    id: exploration.id,
    slug: exploration.slug,
    title: exploration.title,
    cinematic_intro: exploration.cinematicIntro,
    difficulty: exploration.difficulty,
    archetype: exploration.archetype,
    estimated_duration_seconds:
      exploration.estimatedDurationSeconds,
    featured_career_id: exploration.featuredCareerId,
    clue_ids: exploration.clueIds,
    reflection_prompt_ids:
      exploration.reflectionPromptIds,
    reveal_title: exploration.revealTitle,
    reveal_narrative: exploration.revealNarrative,
    recommended_next: exploration.recommendedNext,
    tags: exploration.tags,
  };
}

export function toClueRow(clue: Clue): ClueRow {
  return {
    id: clue.id,
    exploration_id: clue.explorationId,
    career_id: clue.careerId,
    display_order: clue.order,
    clue_text: clue.clueText,
    time_penalty_seconds: clue.timePenaltySeconds,
    category: clue.category,
  };
}

export function toReflectionRow(
  reflection: ReflectionPrompt
): ReflectionRow {
  return {
    id: reflection.id,
    exploration_id: reflection.explorationId,
    prompt: reflection.prompt,
  };
}
