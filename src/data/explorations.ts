import { Exploration } from '@/types/exploration';

export const explorations: Exploration[] = [
  {
    id: 'exploration-collapse',

    slug: 'collapse-on-the-court',

    title: 'The Collapse on the Court',

    cinematicIntro:
      'The gym falls silent as a student athlete suddenly collapses during practice. Multiple healthcare professionals respond rapidly. Can you identify who is leading the emergency response?',

    difficulty: 'Easy',

    archetype: 'emergency-response',

    estimatedDurationSeconds: 45,

    featuredCareerId: 'career-emt',

    clueIds: ['clue-1', 'clue-2', 'clue-3'],

    reflectionPromptIds: ['reflection-1'],

    revealTitle: 'Emergency Medical Technician',

    revealNarrative:
      'EMTs are often among the first healthcare professionals to respond during emergencies. They assess patients, provide immediate care, and coordinate safe transport to hospitals and healthcare facilities.',

    recommendedNext: [ 'the-silent-decline' ],

    tags: ['emergency', 'sports', 'teamwork'],
  },

  {
  id: 'exploration-silent-decline',

  slug: 'the-silent-decline',

  title: 'The Silent Decline',

  cinematicIntro:
    'A longtime patient keeps returning to the clinic with vague symptoms: exhaustion, headaches, and weight loss. Everyone sees pieces of the puzzle — but one healthcare professional notices the deeper pattern.',

  difficulty: 'Medium',

  archetype: 'longitudinal-care',

  estimatedDurationSeconds: 75,

  featuredCareerId: 'career-family-physician',

  clueIds: ['clue-4', 'clue-5', 'clue-6'],

  reflectionPromptIds: ['reflection-2'],

  revealTitle: 'Family Medicine Physician',

  revealNarrative:
    'Family medicine physicians build long-term relationships with patients across every stage of life. They often detect patterns others miss by understanding not just symptoms, but the patient’s history, family, environment, and lived experiences.',

  tags: ['primary-care', 'relationships', 'diagnosis'],

  recommendedNext: ['collapse-on-the-court'],
}
];