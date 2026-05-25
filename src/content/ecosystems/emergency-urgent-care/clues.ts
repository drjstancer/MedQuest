import type { Clue } from '@/types/exploration';

export const emergencyUrgentCareClues: Clue[] = [
  {
    id: 'clue-court-response-1',
    explorationId: 'exploration-court-response',
    careerId: 'career-emt',
    order: 1,
    clueText:
      'This professional often begins care before a patient reaches the hospital.',
    timePenaltySeconds: 5,
    category: 'environment',
  },
  {
    id: 'clue-court-response-2',
    explorationId: 'exploration-court-response',
    careerId: 'career-emt',
    order: 2,
    clueText:
      'They work in fast-changing spaces like gyms, roadsides, homes, and community events.',
    timePenaltySeconds: 5,
    category: 'environment',
  },
  {
    id: 'clue-court-response-3',
    explorationId: 'exploration-court-response',
    careerId: 'career-emt',
    order: 3,
    clueText:
      'They communicate with dispatchers, paramedics, nurses, and hospital teams during a handoff.',
    timePenaltySeconds: 5,
    category: 'communication',
  },
  {
    id: 'clue-court-response-4',
    explorationId: 'exploration-court-response',
    careerId: 'career-emt',
    order: 4,
    clueText:
      'Their role includes quick assessment, immediate support, and safe transport.',
    timePenaltySeconds: 5,
    category: 'patient-care',
  },
  {
    id: 'clue-night-shift-handoff-1',
    explorationId: 'exploration-night-shift-handoff',
    careerId: 'career-emergency-department-nurse',
    order: 1,
    clueText:
      'This professional is often one of the first care team members patients meet inside the emergency department.',
    timePenaltySeconds: 5,
    category: 'patient-care',
  },
  {
    id: 'clue-night-shift-handoff-2',
    explorationId: 'exploration-night-shift-handoff',
    careerId: 'career-emergency-department-nurse',
    order: 2,
    clueText:
      'They track changing needs while communicating with patients, families, physicians, techs, and other departments.',
    timePenaltySeconds: 5,
    category: 'communication',
  },
  {
    id: 'clue-night-shift-handoff-3',
    explorationId: 'exploration-night-shift-handoff',
    careerId: 'career-emergency-department-nurse',
    order: 3,
    clueText:
      'They balance direct care with coordination, documentation, and patient education.',
    timePenaltySeconds: 5,
    category: 'teamwork',
  },
  {
    id: 'clue-night-shift-handoff-4',
    explorationId: 'exploration-night-shift-handoff',
    careerId: 'career-emergency-department-nurse',
    order: 4,
    clueText:
      'A common misconception is that this role only follows instructions, but it requires judgment, advocacy, and leadership.',
    timePenaltySeconds: 5,
    category: 'critical-thinking',
  },
  {
    id: 'clue-fast-clinic-1',
    explorationId: 'exploration-fast-clinic',
    careerId: 'career-urgent-care-physician-assistant',
    order: 1,
    clueText:
      'This professional often works in clinics where patients need timely help but may not need a hospital emergency department.',
    timePenaltySeconds: 5,
    category: 'environment',
  },
  {
    id: 'clue-fast-clinic-2',
    explorationId: 'exploration-fast-clinic',
    careerId: 'career-urgent-care-physician-assistant',
    order: 2,
    clueText:
      'They collaborate with physicians, nurses, medical assistants, imaging staff, and front desk teams.',
    timePenaltySeconds: 5,
    category: 'teamwork',
  },
  {
    id: 'clue-fast-clinic-3',
    explorationId: 'exploration-fast-clinic',
    careerId: 'career-urgent-care-physician-assistant',
    order: 3,
    clueText:
      'Their title includes the word assistant, but they are licensed clinicians with significant responsibility.',
    timePenaltySeconds: 5,
    category: 'education',
  },
  {
    id: 'clue-fast-clinic-4',
    explorationId: 'exploration-fast-clinic',
    careerId: 'career-urgent-care-physician-assistant',
    order: 4,
    clueText:
      'They often help patients understand next steps, follow-up needs, and when another level of care may be needed.',
    timePenaltySeconds: 5,
    category: 'communication',
  },
  {
    id: 'clue-breathing-team-1',
    explorationId: 'exploration-breathing-team',
    careerId: 'career-respiratory-therapist',
    order: 1,
    clueText:
      'This professional is often called when breathing support or respiratory equipment is involved.',
    timePenaltySeconds: 5,
    category: 'tools',
  },
  {
    id: 'clue-breathing-team-2',
    explorationId: 'exploration-breathing-team',
    careerId: 'career-respiratory-therapist',
    order: 2,
    clueText:
      'They work across emergency departments, intensive care units, and transport situations.',
    timePenaltySeconds: 5,
    category: 'environment',
  },
  {
    id: 'clue-breathing-team-3',
    explorationId: 'exploration-breathing-team',
    careerId: 'career-respiratory-therapist',
    order: 3,
    clueText:
      'They collaborate closely with nurses, physicians, paramedics, and imaging teams.',
    timePenaltySeconds: 5,
    category: 'teamwork',
  },
  {
    id: 'clue-breathing-team-4',
    explorationId: 'exploration-breathing-team',
    careerId: 'career-respiratory-therapist',
    order: 4,
    clueText:
      'Their work is technical and patient-facing, but many students do not hear about it in school.',
    timePenaltySeconds: 5,
    category: 'skills',
  },
  {
    id: 'clue-breathing-team-5',
    explorationId: 'exploration-breathing-team',
    careerId: 'career-respiratory-therapist',
    order: 5,
    clueText:
      'A misconception is that they only give breathing treatments, but they support complex respiratory care across the hospital.',
    timePenaltySeconds: 5,
    category: 'critical-thinking',
  },
  {
    id: 'clue-medication-question-1',
    explorationId: 'exploration-medication-question',
    careerId: 'career-emergency-care-pharmacist',
    order: 1,
    clueText:
      'This professional helps the team think carefully about medication safety.',
    timePenaltySeconds: 5,
    category: 'critical-thinking',
  },
  {
    id: 'clue-medication-question-2',
    explorationId: 'exploration-medication-question',
    careerId: 'career-emergency-care-pharmacist',
    order: 2,
    clueText:
      'They may work in hospitals, emergency departments, community pharmacies, or clinics.',
    timePenaltySeconds: 5,
    category: 'environment',
  },
  {
    id: 'clue-medication-question-3',
    explorationId: 'exploration-medication-question',
    careerId: 'career-emergency-care-pharmacist',
    order: 3,
    clueText:
      'They communicate with physicians, nurses, pharmacy technicians, patients, and families.',
    timePenaltySeconds: 5,
    category: 'communication',
  },
  {
    id: 'clue-medication-question-4',
    explorationId: 'exploration-medication-question',
    careerId: 'career-emergency-care-pharmacist',
    order: 4,
    clueText:
      'A common misconception is that this role only counts pills or hands out prescriptions.',
    timePenaltySeconds: 5,
    category: 'skills',
  },
  {
    id: 'clue-medication-question-5',
    explorationId: 'exploration-medication-question',
    careerId: 'career-emergency-care-pharmacist',
    order: 5,
    clueText:
      'Their knowledge can help urgent care teams avoid mistakes and explain medication questions clearly.',
    timePenaltySeconds: 5,
    category: 'teamwork',
  },
  {
    id: 'clue-dispatch-line-1',
    explorationId: 'exploration-dispatch-line',
    careerId: 'career-emergency-medical-dispatcher',
    order: 1,
    clueText:
      'This professional often becomes involved before responders arrive in person.',
    timePenaltySeconds: 5,
    category: 'communication',
  },
  {
    id: 'clue-dispatch-line-2',
    explorationId: 'exploration-dispatch-line',
    careerId: 'career-emergency-medical-dispatcher',
    order: 2,
    clueText:
      'They work in communication centers, not ambulances or hospital rooms.',
    timePenaltySeconds: 5,
    category: 'environment',
  },
  {
    id: 'clue-dispatch-line-3',
    explorationId: 'exploration-dispatch-line',
    careerId: 'career-emergency-medical-dispatcher',
    order: 3,
    clueText:
      'They listen carefully, organize information, and coordinate with EMS, fire, and other emergency teams.',
    timePenaltySeconds: 5,
    category: 'teamwork',
  },
  {
    id: 'clue-dispatch-line-4',
    explorationId: 'exploration-dispatch-line',
    careerId: 'career-emergency-medical-dispatcher',
    order: 4,
    clueText:
      'Their work requires calm communication under pressure, even though they may never meet the patient.',
    timePenaltySeconds: 5,
    category: 'skills',
  },
  {
    id: 'clue-dispatch-line-5',
    explorationId: 'exploration-dispatch-line',
    careerId: 'career-emergency-medical-dispatcher',
    order: 5,
    clueText:
      'A misconception is that they only answer phones, but they help shape the entire emergency response.',
    timePenaltySeconds: 5,
    category: 'critical-thinking',
  },
  {
    id: 'clue-quiet-lab-signal-1',
    explorationId: 'exploration-quiet-lab-signal',
    careerId: 'career-medical-laboratory-scientist',
    order: 1,
    clueText:
      'This professional may influence urgent care without being seen by most patients.',
    timePenaltySeconds: 5,
    category: 'environment',
  },
  {
    id: 'clue-quiet-lab-signal-2',
    explorationId: 'exploration-quiet-lab-signal',
    careerId: 'career-medical-laboratory-scientist',
    order: 2,
    clueText:
      'They work with samples, instruments, quality checks, and carefully reported results.',
    timePenaltySeconds: 5,
    category: 'tools',
  },
  {
    id: 'clue-quiet-lab-signal-3',
    explorationId: 'exploration-quiet-lab-signal',
    careerId: 'career-medical-laboratory-scientist',
    order: 3,
    clueText:
      'They collaborate with nurses, physicians, phlebotomists, and infection prevention teams.',
    timePenaltySeconds: 5,
    category: 'teamwork',
  },
  {
    id: 'clue-quiet-lab-signal-4',
    explorationId: 'exploration-quiet-lab-signal',
    careerId: 'career-medical-laboratory-scientist',
    order: 4,
    clueText:
      'Their work requires scientific reasoning, precision, and responsibility with information.',
    timePenaltySeconds: 5,
    category: 'critical-thinking',
  },
  {
    id: 'clue-quiet-lab-signal-5',
    explorationId: 'exploration-quiet-lab-signal',
    careerId: 'career-medical-laboratory-scientist',
    order: 5,
    clueText:
      'A misconception is that laboratory professionals are separate from patient care, even though care teams depend on their work.',
    timePenaltySeconds: 5,
    category: 'patient-care',
  },
  {
    id: 'clue-crowded-front-desk-1',
    explorationId: 'exploration-crowded-front-desk',
    careerId: 'career-patient-access-representative',
    order: 1,
    clueText:
      'This professional may be the first person a patient speaks with, but their role is not usually shown in medical dramas.',
    timePenaltySeconds: 5,
    category: 'environment',
  },
  {
    id: 'clue-crowded-front-desk-2',
    explorationId: 'exploration-crowded-front-desk',
    careerId: 'career-patient-access-representative',
    order: 2,
    clueText:
      'They help confirm identity, organize information, and support patient flow.',
    timePenaltySeconds: 5,
    category: 'communication',
  },
  {
    id: 'clue-crowded-front-desk-3',
    explorationId: 'exploration-crowded-front-desk',
    careerId: 'career-patient-access-representative',
    order: 3,
    clueText:
      'They coordinate with nurses, registration teams, billing staff, interpreters, and security when needed.',
    timePenaltySeconds: 5,
    category: 'teamwork',
  },
  {
    id: 'clue-crowded-front-desk-4',
    explorationId: 'exploration-crowded-front-desk',
    careerId: 'career-patient-access-representative',
    order: 4,
    clueText:
      'Their work affects whether the right information reaches the right team at the right time.',
    timePenaltySeconds: 5,
    category: 'critical-thinking',
  },
  {
    id: 'clue-crowded-front-desk-5',
    explorationId: 'exploration-crowded-front-desk',
    careerId: 'career-patient-access-representative',
    order: 5,
    clueText:
      'A misconception is that front desk work is separate from care, but access and communication shape the patient experience.',
    timePenaltySeconds: 5,
    category: 'patient-care',
  },
  {
    id: 'clue-citywide-storm-1',
    explorationId: 'exploration-citywide-storm',
    careerId: 'career-emergency-management-specialist',
    order: 1,
    clueText:
      'This professional focuses on how an entire organization or community responds during disruption.',
    timePenaltySeconds: 5,
    category: 'critical-thinking',
  },
  {
    id: 'clue-citywide-storm-2',
    explorationId: 'exploration-citywide-storm',
    careerId: 'career-emergency-management-specialist',
    order: 2,
    clueText:
      'They may work in hospitals, public health departments, emergency operations centers, or government agencies.',
    timePenaltySeconds: 5,
    category: 'environment',
  },
  {
    id: 'clue-citywide-storm-3',
    explorationId: 'exploration-citywide-storm',
    careerId: 'career-emergency-management-specialist',
    order: 3,
    clueText:
      'They coordinate with EMS, hospital leaders, security, supply teams, public health, and communications staff.',
    timePenaltySeconds: 5,
    category: 'teamwork',
  },
  {
    id: 'clue-citywide-storm-4',
    explorationId: 'exploration-citywide-storm',
    careerId: 'career-emergency-management-specialist',
    order: 4,
    clueText:
      'Their planning can affect patient flow, staff safety, supplies, and how information moves during a crisis.',
    timePenaltySeconds: 5,
    category: 'communication',
  },
  {
    id: 'clue-citywide-storm-5',
    explorationId: 'exploration-citywide-storm',
    careerId: 'career-emergency-management-specialist',
    order: 5,
    clueText:
      'A misconception is that emergency preparation only matters during rare disasters, but planning supports everyday readiness.',
    timePenaltySeconds: 5,
    category: 'skills',
  },
];
