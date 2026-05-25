import { emergencyUrgentCareCareers } from './careers';
import { emergencyUrgentCareClues } from './clues';
import { emergencyUrgentCareExplorations } from './explorations';
import { emergencyUrgentCareReflections } from './reflections';
import type { EcosystemSeed } from '../../seed-types';

export const emergencyUrgentCareSeed: EcosystemSeed = {
  metadata: {
    id: 'emergency-urgent-care',
    title: 'Emergency & Urgent Care',
    description:
      'Career exploration content for urgent, emergency, response, coordination, and behind-the-scenes care roles.',
    featuredPathways: [
      'Emergency response',
      'Urgent care',
      'Nursing',
      'Advanced practice',
      'Diagnostics and laboratory',
      'Pharmacy and medication safety',
      'Healthcare operations',
      'Public health and preparedness',
    ],
    intendedDifficultyDistribution: {
      Easy: 3,
      Medium: 3,
      Hard: 3,
    },
    ageBands: [
      'middle-school',
      'high-school',
      'early-college',
    ],
    tags: [
      'emergency-response',
      'urgent-care',
      'teamwork',
      'communication',
      'healthcare-systems',
    ],
  },
  careers: emergencyUrgentCareCareers,
  explorations: emergencyUrgentCareExplorations,
  clues: emergencyUrgentCareClues,
  reflections: emergencyUrgentCareReflections,
};
