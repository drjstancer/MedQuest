import { Clue } from '@/types/exploration';

export const clues: Clue[] = [
  {
    id: 'clue-1',
    explorationId: 'exploration-collapse',
    careerId: 'career-emt',
    order: 1,
    clueText:
      'This professional often works in fast-paced situations where every second matters.',
    timePenaltySeconds: 5,
    category: 'environment',
  },

  {
    id: 'clue-2',
    explorationId: 'exploration-collapse',
    careerId: 'career-emt',
    order: 2,
    clueText:
      'This professional is often among the first healthcare responders to arrive during emergencies.',
    timePenaltySeconds: 5,
    category: 'teamwork',
  },

  {
    id: 'clue-3',
    explorationId: 'exploration-collapse',
    careerId: 'career-emt',
    order: 3,
    clueText:
      'This professional stabilizes patients for safe transportation to healthcare facilities.',
    timePenaltySeconds: 5,
    category: 'patient-care',
  },

  {
  id: 'clue-4',
  explorationId: 'exploration-silent-decline',
  careerId: 'career-family-physician',
  order: 1,
  clueText:
    'This healthcare professional notices patterns across multiple visits over several months.',
  timePenaltySeconds: 5,
  category: 'critical-thinking',
},

{
  id: 'clue-5',
  explorationId: 'exploration-silent-decline',
  careerId: 'career-family-physician',
  order: 2,
  clueText:
    'This person discusses stress, sleep, nutrition, work-life balance, and family history while evaluating symptoms.',
  timePenaltySeconds: 5,
  category: 'communication',
},

{
  id: 'clue-6',
  explorationId: 'exploration-silent-decline',
  careerId: 'career-family-physician',
  order: 3,
  clueText:
    'This professional coordinates long-term care and often becomes the first point of contact for patients navigating the healthcare system.',
  timePenaltySeconds: 5,
  category: 'teamwork',
},
];