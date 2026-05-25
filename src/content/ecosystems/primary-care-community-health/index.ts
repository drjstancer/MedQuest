import type { EcosystemSeed } from '../../seed-types';
import { primaryCareCommunityHealthCareers } from './careers';
import { primaryCareCommunityHealthClues } from './clues';
import { primaryCareCommunityHealthExplorations } from './explorations';
import { primaryCareCommunityHealthReflections } from './reflections';

export const primaryCareCommunityHealthSeed: EcosystemSeed =
  {
    metadata: {
      id: 'primary-care-community-health',
      title: 'Primary Care & Community Health',
      description:
        'Educational career exploration content focused on prevention, access, trust, communication, and care close to where people live and learn.',
      featuredPathways: [
        'Primary care',
        'Community health',
        'School health',
        'Public health education',
        'Care navigation',
        'Language access',
        'Healthcare operations',
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
        'primary-care',
        'community-health',
        'public-health',
        'access',
        'communication',
      ],
    },
    careers: primaryCareCommunityHealthCareers,
    explorations: primaryCareCommunityHealthExplorations,
    clues: primaryCareCommunityHealthClues,
    reflections: primaryCareCommunityHealthReflections,
  };
