import type { EcosystemSeed } from '../../seed-types';
import { hospitalOperationsDiagnosticsCareers } from './careers';
import { hospitalOperationsDiagnosticsClues } from './clues';
import { hospitalOperationsDiagnosticsExplorations } from './explorations';
import { hospitalOperationsDiagnosticsReflections } from './reflections';

export const hospitalOperationsDiagnosticsSeed: EcosystemSeed =
  {
    metadata: {
      id: 'hospital-operations-diagnostics',
      title: 'Hospital Operations & Diagnostics',
      description:
        'Educational career exploration content focused on hospital systems, diagnostics, imaging, technology, logistics, patient experience, and behind-the-scenes reliability.',
      featuredPathways: [
        'Healthcare administration',
        'Hospital operations',
        'Diagnostic laboratory science',
        'Imaging and medical technology',
        'Healthcare IT',
        'Quality improvement',
        'Spiritual care and advocacy',
      ],
      intendedDifficultyDistribution: {
        Easy: 2,
        Medium: 7,
        Hard: 4,
      },
      ageBands: [
        'middle-school',
        'high-school',
        'early-college',
      ],
      tags: [
        'hospital-operations',
        'diagnostics',
        'medical-technology',
        'behind-the-scenes',
        'systems',
      ],
    },
    careers: hospitalOperationsDiagnosticsCareers,
    explorations: hospitalOperationsDiagnosticsExplorations,
    clues: hospitalOperationsDiagnosticsClues,
    reflections: hospitalOperationsDiagnosticsReflections,
  };
