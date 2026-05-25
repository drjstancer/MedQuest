import type { EcosystemSeed } from '../../seed-types';
import { rehabilitationLongTermSupportCareers } from './careers';
import { rehabilitationLongTermSupportClues } from './clues';
import { rehabilitationLongTermSupportExplorations } from './explorations';
import { rehabilitationLongTermSupportReflections } from './reflections';

export const rehabilitationLongTermSupportSeed: EcosystemSeed =
  {
    metadata: {
      id: 'rehabilitation-long-term-support',
      title: 'Rehabilitation & Long-Term Support',
      description:
        'Educational career exploration content focused on recovery, independence, long-term support, adaptive technology, home health, and care transitions.',
      featuredPathways: [
        'Physical rehabilitation',
        'Occupational therapy',
        'Speech-language pathology',
        'Home health',
        'Long-term care',
        'Care management',
        'Adaptive technology',
        'Family and spiritual support',
      ],
      intendedDifficultyDistribution: {
        Easy: 3,
        Medium: 7,
        Hard: 3,
      },
      ageBands: [
        'middle-school',
        'high-school',
        'early-college',
      ],
      tags: [
        'rehabilitation',
        'long-term-support',
        'home-health',
        'adaptive-technology',
        'care-coordination',
      ],
    },
    careers: rehabilitationLongTermSupportCareers,
    explorations: rehabilitationLongTermSupportExplorations,
    clues: rehabilitationLongTermSupportClues,
    reflections: rehabilitationLongTermSupportReflections,
  };
