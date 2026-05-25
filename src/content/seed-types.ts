import type {
  Career,
  Clue,
  Exploration,
  ReflectionPrompt,
} from '@/types/exploration';

export type HealthcareEcosystem =
  | 'emergency-urgent-care'
  | 'primary-care-community-health'
  | 'hospital-operations-diagnostics'
  | 'rehabilitation-long-term-support'
  | 'primary-longitudinal-care'
  | 'rehabilitation-movement'
  | 'mental-behavioral-health'
  | 'diagnostics-laboratory'
  | 'imaging-medical-technology'
  | 'public-community-health'
  | 'pharmacy-medication-safety'
  | 'surgical-procedural-care'
  | 'healthcare-operations-informatics';

export interface EcosystemSeedMetadata {
  id: HealthcareEcosystem;
  title: string;
  description: string;
  featuredPathways?: string[];
  intendedDifficultyDistribution?: {
    Easy: number;
    Medium: number;
    Hard: number;
  };
  ageBands?: Array<
    'middle-school' | 'high-school' | 'early-college'
  >;
  tags: string[];
}

export interface EcosystemRegistryEntry {
  id: HealthcareEcosystem;
  title: string;
  description: string;
  featuredPathways: string[];
  intendedDifficultyDistribution: {
    Easy: number;
    Medium: number;
    Hard: number;
  };
  ageBands: Array<
    'middle-school' | 'high-school' | 'early-college'
  >;
  futureCapabilities: string[];
}

export interface EcosystemSeed {
  metadata: EcosystemSeedMetadata;
  careers: Career[];
  explorations: Exploration[];
  clues: Clue[];
  reflections: ReflectionPrompt[];
}

export interface SeedValidationIssue {
  code: string;
  message: string;
  severity: 'error' | 'warning';
  entityId?: string;
}
