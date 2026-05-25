import type { Exploration } from '@/types/exploration';

export const emergencyUrgentCareExplorations: Exploration[] = [
  {
    id: 'exploration-court-response',
    slug: 'court-response',
    title: 'The Court Response',
    cinematicIntro:
      'The whistle stops mid-practice. A student athlete sits on the gym floor while adults move quickly, calmly, and together. One healthcare professional is already focused on safety, timing, and the next handoff.',
    archetype: 'emergency-response',
    difficulty: 'Easy',
    estimatedDurationSeconds: 60,
    featuredCareerId: 'career-emt',
    clueIds: [
      'clue-court-response-1',
      'clue-court-response-2',
      'clue-court-response-3',
      'clue-court-response-4',
    ],
    reflectionPromptIds: ['reflection-court-response-1'],
    revealTitle: 'Emergency Medical Technician',
    revealNarrative:
      'EMTs are often among the first healthcare professionals students recognize in urgent situations. They provide immediate support, communicate with the larger care team, and help patients move safely from the scene to the next level of care.',
    tags: [
      'emergency-response',
      'sports',
      'teamwork',
      'visible-career',
    ],
    recommendedNext: ['breathing-team', 'citywide-storm'],
  },
  {
    id: 'exploration-night-shift-handoff',
    slug: 'night-shift-handoff',
    title: 'The Night Shift Handoff',
    cinematicIntro:
      'The emergency department doors keep opening. A nurse listens, watches, organizes, and keeps the team connected as patients, families, and clinicians all need clear information.',
    archetype: 'emergency-response',
    difficulty: 'Easy',
    estimatedDurationSeconds: 60,
    featuredCareerId: 'career-emergency-department-nurse',
    clueIds: [
      'clue-night-shift-handoff-1',
      'clue-night-shift-handoff-2',
      'clue-night-shift-handoff-3',
      'clue-night-shift-handoff-4',
    ],
    reflectionPromptIds: ['reflection-night-shift-handoff-1'],
    revealTitle: 'Emergency Department Nurse',
    revealNarrative:
      'Emergency department nurses are central connectors in urgent care. They support patients directly while helping the larger team share information, respond to changes, and keep care moving.',
    tags: [
      'nursing',
      'emergency-department',
      'communication',
      'teamwork',
    ],
    recommendedNext: ['crowded-front-desk', 'breathing-team'],
  },
  {
    id: 'exploration-fast-clinic',
    slug: 'fast-clinic',
    title: 'The Fast Clinic',
    cinematicIntro:
      'The urgent care lobby is full after school. One clinician moves between exam rooms, listening carefully, answering questions, and helping patients understand what should happen next.',
    archetype: 'longitudinal-care',
    difficulty: 'Easy',
    estimatedDurationSeconds: 60,
    featuredCareerId: 'career-urgent-care-physician-assistant',
    clueIds: [
      'clue-fast-clinic-1',
      'clue-fast-clinic-2',
      'clue-fast-clinic-3',
      'clue-fast-clinic-4',
    ],
    reflectionPromptIds: ['reflection-fast-clinic-1'],
    revealTitle: 'Urgent Care Physician Assistant',
    revealNarrative:
      'Physician assistants in urgent care help patients with time-sensitive concerns while working closely with a larger healthcare team. This role can show students that healthcare includes many flexible pathways into direct patient care.',
    tags: [
      'urgent-care',
      'physician-assistant',
      'clinic',
      'patient-education',
    ],
    recommendedNext: [
      'medication-question',
      'crowded-front-desk',
    ],
  },
  {
    id: 'exploration-breathing-team',
    slug: 'breathing-team',
    title: 'The Breathing Team',
    cinematicIntro:
      'A room becomes quiet as the care team focuses on one patient comfort measure at a time. A specialist arrives with equipment, listens to the team, and helps everyone understand the next support step.',
    archetype: 'emergency-response',
    difficulty: 'Medium',
    estimatedDurationSeconds: 75,
    featuredCareerId: 'career-respiratory-therapist',
    clueIds: [
      'clue-breathing-team-1',
      'clue-breathing-team-2',
      'clue-breathing-team-3',
      'clue-breathing-team-4',
      'clue-breathing-team-5',
    ],
    reflectionPromptIds: ['reflection-breathing-team-1'],
    revealTitle: 'Respiratory Therapist',
    revealNarrative:
      'Respiratory therapists are essential members of emergency and critical care teams. Their work helps students see that healthcare includes specialized technical roles that still require communication, empathy, and teamwork.',
    tags: [
      'respiratory-care',
      'emergency-department',
      'technology',
      'teamwork',
    ],
    recommendedNext: [
      'court-response',
      'quiet-lab-signal',
    ],
  },
  {
    id: 'exploration-medication-question',
    slug: 'medication-question',
    title: 'The Medication Question',
    cinematicIntro:
      'A question moves through the urgent care team before anyone rushes ahead. One professional studies the details, checks for safety, and helps the team make sense of medication information.',
    archetype: 'diagnostic-mystery',
    difficulty: 'Medium',
    estimatedDurationSeconds: 75,
    featuredCareerId: 'career-emergency-care-pharmacist',
    clueIds: [
      'clue-medication-question-1',
      'clue-medication-question-2',
      'clue-medication-question-3',
      'clue-medication-question-4',
      'clue-medication-question-5',
    ],
    reflectionPromptIds: [
      'reflection-medication-question-1',
    ],
    revealTitle: 'Emergency Care Pharmacist',
    revealNarrative:
      'Pharmacists are medication experts who help keep care safe and understandable. In urgent and emergency settings, their role shows students how healthcare decisions depend on knowledge-sharing across professions.',
    tags: [
      'pharmacy',
      'medication-safety',
      'urgent-care',
      'teamwork',
    ],
    recommendedNext: ['fast-clinic', 'quiet-lab-signal'],
  },
  {
    id: 'exploration-dispatch-line',
    slug: 'dispatch-line',
    title: 'The Dispatch Line',
    cinematicIntro:
      'Before the ambulance siren is heard, a calm voice is already gathering information. In a room full of screens and radio traffic, one professional helps the right resources move at the right time.',
    archetype: 'emergency-response',
    difficulty: 'Medium',
    estimatedDurationSeconds: 75,
    featuredCareerId: 'career-emergency-medical-dispatcher',
    clueIds: [
      'clue-dispatch-line-1',
      'clue-dispatch-line-2',
      'clue-dispatch-line-3',
      'clue-dispatch-line-4',
      'clue-dispatch-line-5',
    ],
    reflectionPromptIds: ['reflection-dispatch-line-1'],
    revealTitle: 'Emergency Medical Dispatcher',
    revealNarrative:
      'Emergency medical dispatchers are a vital link between the public and response teams. This career helps students understand that emergency care begins with communication, coordination, and trust.',
    tags: [
      'dispatch',
      'communication',
      'emergency-response',
      'behind-the-scenes',
    ],
    recommendedNext: ['citywide-storm', 'court-response'],
  },
  {
    id: 'exploration-quiet-lab-signal',
    slug: 'quiet-lab-signal',
    title: 'The Quiet Lab Signal',
    cinematicIntro:
      'Far from the waiting room, a sample is labeled, tracked, and analyzed. The emergency team is waiting for information, and one behind-the-scenes professional knows accuracy matters.',
    archetype: 'diagnostic-mystery',
    difficulty: 'Hard',
    estimatedDurationSeconds: 90,
    featuredCareerId: 'career-medical-laboratory-scientist',
    clueIds: [
      'clue-quiet-lab-signal-1',
      'clue-quiet-lab-signal-2',
      'clue-quiet-lab-signal-3',
      'clue-quiet-lab-signal-4',
      'clue-quiet-lab-signal-5',
    ],
    reflectionPromptIds: [
      'reflection-quiet-lab-signal-1',
    ],
    revealTitle: 'Medical Laboratory Scientist',
    revealNarrative:
      'Medical laboratory scientists help emergency teams understand important information through careful testing and analysis. Their role shows students that healthcare includes scientific careers that may be less visible but deeply connected to patient care.',
    tags: [
      'laboratory',
      'diagnostics',
      'science',
      'behind-the-scenes',
    ],
    recommendedNext: [
      'medication-question',
      'breathing-team',
    ],
  },
  {
    id: 'exploration-crowded-front-desk',
    slug: 'crowded-front-desk',
    title: 'The Crowded Front Desk',
    cinematicIntro:
      'The urgent care waiting room fills quickly. Before students notice the exam rooms, one professional is already protecting accuracy, privacy, and patient flow at the front of the system.',
    archetype: 'healthcare-operations',
    difficulty: 'Hard',
    estimatedDurationSeconds: 90,
    featuredCareerId: 'career-patient-access-representative',
    clueIds: [
      'clue-crowded-front-desk-1',
      'clue-crowded-front-desk-2',
      'clue-crowded-front-desk-3',
      'clue-crowded-front-desk-4',
      'clue-crowded-front-desk-5',
    ],
    reflectionPromptIds: [
      'reflection-crowded-front-desk-1',
    ],
    revealTitle: 'Patient Access Representative',
    revealNarrative:
      'Patient access representatives help healthcare systems work for patients from the first point of contact. This career highlights the importance of communication, accuracy, and respect in urgent care settings.',
    tags: [
      'patient-access',
      'healthcare-operations',
      'communication',
      'overlooked-career',
    ],
    recommendedNext: [
      'dispatch-line',
      'citywide-storm',
    ],
  },
  {
    id: 'exploration-citywide-storm',
    slug: 'citywide-storm',
    title: 'The Citywide Storm',
    cinematicIntro:
      'A storm closes roads, fills waiting rooms, and stretches every team. While clinicians care for patients, another professional studies staffing, supplies, communication, and what the whole system needs next.',
    archetype: 'public-health',
    difficulty: 'Hard',
    estimatedDurationSeconds: 90,
    featuredCareerId: 'career-emergency-management-specialist',
    clueIds: [
      'clue-citywide-storm-1',
      'clue-citywide-storm-2',
      'clue-citywide-storm-3',
      'clue-citywide-storm-4',
      'clue-citywide-storm-5',
    ],
    reflectionPromptIds: ['reflection-citywide-storm-1'],
    revealTitle: 'Emergency Management Specialist',
    revealNarrative:
      'Emergency management specialists help healthcare systems prepare, respond, and recover. This role expands students understanding of healthcare beyond bedside care into operations, public health, logistics, and community safety.',
    tags: [
      'emergency-management',
      'public-health',
      'systems',
      'healthcare-operations',
    ],
    recommendedNext: [
      'dispatch-line',
      'crowded-front-desk',
    ],
  },
];
