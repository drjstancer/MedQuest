export interface Career {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  pathway: string;
  overview: string;
  education: string;
  salaryRange: string;
  jobOutlook: string;
  whatSurprisedMe: string;
  whatIWishIKnew: string;
  misconception: string;
  dayInTheLife: string;
  blsUrl: string;
  learnMoreUrl?: string;
  youtubeVideoId?: string;
  youtubeSearchUrl?: string;
  tags: string[];
}

export interface Clue {
  id: string;
  explorationId: string;
  careerId: string;
  order: number;
  clueText: string;
  timePenaltySeconds: number;
  category:
    | 'environment'
    | 'skills'
    | 'tools'
    | 'communication'
    | 'teamwork'
    | 'education'
    | 'patient-care'
    | 'critical-thinking'
    | 'systems'
    | 'technology'
    | 'community';
}

export interface ReflectionPrompt {
  id: string;
  explorationId: string;
  prompt: string;
}

export interface Exploration {
  id: string;
  slug: string;
  title: string;
  cinematicIntro: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  archetype:
    | 'emergency-response'
    | 'longitudinal-care'
    | 'diagnostic-mystery'
    | 'rehabilitation'
    | 'public-health'
    | 'mental-health'
    | 'surgical-care'
    | 'healthcare-operations'
    | 'community-care'
    | 'medical-technology';
  estimatedDurationSeconds: number;
  featuredCareerId: string;
  clueIds: string[];
  reflectionPromptIds: string[];
  revealTitle: string;
  revealNarrative: string;
  tags: string[];
  recommendedNext: string[];
}
