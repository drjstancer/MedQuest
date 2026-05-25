import type { EcosystemRegistryEntry } from './seed-types';

export const ecosystemRegistry: EcosystemRegistryEntry[] = [
  {
    id: 'emergency-urgent-care',
    title: 'Emergency & Urgent Care',
    description:
      'Educational career exploration content for urgent, emergency, response, coordination, diagnostic support, and behind-the-scenes care roles.',
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
    futureCapabilities: [
      'multimedia career profiles',
      'educator dashboards',
      'classroom-ready exploration sets',
      'pathway comparison views',
    ],
  },
  {
    id: 'primary-care-community-health',
    title: 'Primary Care & Community Health',
    description:
      'Educational career exploration content focused on prevention, access, trust, community relationships, language access, care navigation, school health, telehealth, and clinic operations.',
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
    futureCapabilities: [
      'community pathway maps',
      'multilingual exploration media',
      'educator dashboards',
      'local resource comparison views',
    ],
  },
  {
    id: 'hospital-operations-diagnostics',
    title: 'Hospital Operations & Diagnostics',
    description:
      'Educational career exploration content focused on hospital systems, diagnostics, imaging, IT, sterile processing, logistics, patient experience, quality improvement, and spiritual support.',
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
    futureCapabilities: [
      'department workflow maps',
      'diagnostic career media',
      'operations dashboards',
      'educator scenario collections',
    ],
  },
  {
    id: 'rehabilitation-long-term-support',
    title: 'Rehabilitation & Long-Term Support',
    description:
      'Educational career exploration content focused on recovery, independence, long-term support, home health, adaptive technology, family support, and care transitions.',
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
    futureCapabilities: [
      'longitudinal journey maps',
      'adaptive technology media',
      'educator reflection dashboards',
      'family support career comparisons',
    ],
  },
];
