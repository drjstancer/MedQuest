import type { ExplorationPlan } from '../../seed-builders';

const intro =
  'Recovery and long-term support often unfold slowly, through small wins, steady teamwork, and care that follows people into daily life.';

export const rehabilitationLongTermSupportPlans: ExplorationPlan[] =
  [
    {
      id: 'exploration-first-steps-gym',
      slug: 'first-steps-gym',
      title: 'The First Steps Gym',
      cinematicIntro:
        `${intro} In a bright therapy gym, a patient watches the parallel bars with a mix of nerves and hope while one professional turns movement into a reachable goal.`,
      archetype: 'rehabilitation',
      difficulty: 'Easy',
      estimatedDurationSeconds: 60,
      featuredCareerId: 'career-physical-therapist-rehab',
      revealTitle: 'Rehabilitation Physical Therapist',
      revealNarrative:
        'Rehabilitation physical therapists help people rebuild movement, strength, balance, and confidence. Students see recovery as teamwork, patience, and progress over time.',
      tags: ['physical-therapy', 'movement', 'rehabilitation'],
      recommendedNext: ['morning-routine-practice', 'device-fitting-day'],
      reflectionPrompt:
        'Would you enjoy helping someone work toward visible progress through encouragement, movement, and repeated practice?',
      clues: [
        { text: 'This professional focuses on movement, strength, mobility, balance, and physical function.', category: 'skills' },
        { text: 'Their environment may include therapy gyms, hospital units, outpatient clinics, or home health visits.', category: 'environment' },
        { text: 'They collaborate with nurses, occupational therapists, physicians, families, and equipment specialists.', category: 'teamwork' },
        { text: 'Their patient interaction is active and goal-based over repeated sessions.', category: 'patient-care' },
        { text: 'A misconception is that this work is only exercise instead of assessment, teaching, and adaptation.', category: 'critical-thinking' },
      ],
    },
    {
      id: 'exploration-morning-routine-practice',
      slug: 'morning-routine-practice',
      title: 'The Morning Routine Practice',
      cinematicIntro:
        `${intro} A patient practices buttoning a shirt, reaching for a mug, and planning a safer morning. One therapist sees independence in the details of everyday life.`,
      archetype: 'rehabilitation',
      difficulty: 'Easy',
      estimatedDurationSeconds: 60,
      featuredCareerId: 'career-occupational-therapist-long-term',
      revealTitle: 'Long-Term Care Occupational Therapist',
      revealNarrative:
        'Occupational therapists help people participate in meaningful daily activities. This exploration shows students that healthcare can focus on routines, confidence, and independence.',
      tags: ['occupational-therapy', 'daily-life', 'independence'],
      recommendedNext: ['adaptive-tech-table', 'first-steps-gym'],
      reflectionPrompt:
        'What daily activity would you most want to help someone regain if their routine suddenly became harder?',
      clues: [
        { text: 'This professional focuses on daily activities like dressing, cooking, school, work, and home routines.', category: 'patient-care' },
        { text: 'They may work in rehab centers, schools, homes, hospitals, or long-term care settings.', category: 'environment' },
        { text: 'They use adaptive tools, environmental changes, practice activities, and patient goals.', category: 'tools' },
        { text: 'They collaborate with physical therapists, speech-language pathologists, nurses, families, and device specialists.', category: 'teamwork' },
        { text: 'A misconception is that the career is mainly about jobs instead of meaningful everyday participation.', category: 'education' },
      ],
    },
    {
      id: 'exploration-home-visit-notebook',
      slug: 'home-visit-notebook',
      title: 'The Home Visit Notebook',
      cinematicIntro:
        `${intro} At a kitchen table, a notebook lists routines, reminders, and family questions. One support worker notices how home can reveal needs no clinic can see.`,
      archetype: 'community-care',
      difficulty: 'Easy',
      estimatedDurationSeconds: 60,
      featuredCareerId: 'career-home-health-aide',
      revealTitle: 'Home Health Aide',
      revealNarrative:
        'Home health aides support daily life, comfort, and communication in the place people live. This role helps students value care that is practical, personal, and often overlooked.',
      tags: ['home-health', 'daily-care', 'support'],
      recommendedNext: ['family-care-map', 'long-term-care-huddle'],
      reflectionPrompt:
        'How might helping with everyday routines support someone’s dignity, confidence, and connection to care?',
      clues: [
        { text: 'This professional often works inside a patient’s home rather than a hospital or clinic.', category: 'environment' },
        { text: 'They help with daily routines, comfort, observation, and communication with the care team.', category: 'patient-care' },
        { text: 'They may notice changes because they see how someone is doing in real life.', category: 'critical-thinking' },
        { text: 'They coordinate with nurses, families, therapists, and home care agencies.', category: 'teamwork' },
        { text: 'A misconception is that support with daily life is less important than other healthcare work.', category: 'community' },
      ],
    },
    {
      id: 'exploration-words-return',
      slug: 'words-return',
      title: 'The Words Return',
      cinematicIntro:
        `${intro} A quiet therapy room fills with effort as a patient points, pauses, and tries again. One specialist celebrates communication in more forms than spoken words.`,
      archetype: 'rehabilitation',
      difficulty: 'Medium',
      estimatedDurationSeconds: 75,
      featuredCareerId:
        'career-speech-language-pathologist-rehab',
      revealTitle: 'Rehabilitation Speech-Language Pathologist',
      revealNarrative:
        'Rehabilitation speech-language pathologists support communication and related skills that shape daily life. Students learn that language, confidence, and connection are part of healthcare recovery.',
      tags: ['speech-language-pathology', 'communication', 'rehabilitation'],
      recommendedNext: ['activity-room-circle', 'adaptive-tech-table'],
      reflectionPrompt:
        'What would it mean to help someone communicate in a way that makes them feel more understood?',
      clues: [
        { text: 'This professional supports communication, voice, cognition, and sometimes swallowing-related skills.', category: 'skills' },
        { text: 'Their tools may include conversation practice, visual supports, devices, exercises, and family education.', category: 'tools' },
        { text: 'They work in rehab centers, schools, hospitals, outpatient clinics, and long-term care settings.', category: 'environment' },
        { text: 'They collaborate with nurses, therapists, physicians, dietitians, and families.', category: 'teamwork' },
        { text: 'A misconception is that this career only works on pronunciation.', category: 'critical-thinking' },
      ],
    },
    {
      id: 'exploration-activity-room-circle',
      slug: 'activity-room-circle',
      title: 'The Activity Room Circle',
      cinematicIntro:
        `${intro} Music, art supplies, and a card game fill a rehab activity room. One therapist knows recreation can become confidence, connection, and practice for life outside the center.`,
      archetype: 'rehabilitation',
      difficulty: 'Medium',
      estimatedDurationSeconds: 75,
      featuredCareerId: 'career-recreational-therapist',
      revealTitle: 'Recreational Therapist',
      revealNarrative:
        'Recreational therapists use meaningful activities to support wellbeing, confidence, social connection, and community participation. This role expands how students think about therapeutic care.',
      tags: ['recreational-therapy', 'wellbeing', 'community'],
      recommendedNext: ['words-return', 'nutrition-strength-plan'],
      reflectionPrompt:
        'How could hobbies, creativity, games, or community activities become part of someone’s recovery and confidence?',
      clues: [
        { text: 'This professional uses activities, recreation, creativity, and community participation as therapeutic tools.', category: 'tools' },
        { text: 'They may work in rehabilitation centers, long-term care, behavioral health, or community programs.', category: 'environment' },
        { text: 'They collaborate with therapists, nurses, social workers, families, and activity teams.', category: 'teamwork' },
        { text: 'Their patient interaction often includes groups, motivation, adaptation, and social connection.', category: 'patient-care' },
        { text: 'A misconception is that this work is just entertainment rather than goal-focused therapy.', category: 'critical-thinking' },
      ],
    },
    {
      id: 'exploration-device-fitting-day',
      slug: 'device-fitting-day',
      title: 'The Device Fitting Day',
      cinematicIntro:
        `${intro} A patient studies a new brace while a specialist adjusts straps, alignment, and comfort. The goal is not just a device; it is a better day outside the clinic.`,
      archetype: 'medical-technology',
      difficulty: 'Medium',
      estimatedDurationSeconds: 75,
      featuredCareerId: 'career-prosthetist-orthotist',
      revealTitle: 'Prosthetist-Orthotist',
      revealNarrative:
        'Prosthetist-orthotists combine technology, anatomy, design, and patient goals. Students see how engineering and healthcare can work together to support mobility and independence.',
      tags: ['adaptive-technology', 'mobility', 'rehabilitation'],
      recommendedNext: ['adaptive-tech-table', 'first-steps-gym'],
      reflectionPrompt:
        'Would you enjoy a career where design, body movement, problem-solving, and patient goals all come together?',
      clues: [
        { text: 'This professional designs, fits, and adjusts devices that support mobility or body alignment.', category: 'technology' },
        { text: 'Their environment may include clinics, workshops, rehab centers, and follow-up fitting rooms.', category: 'environment' },
        { text: 'They collaborate with physicians, physical therapists, occupational therapists, and families.', category: 'teamwork' },
        { text: 'Their problem-solving includes comfort, function, measurement, and long-term adjustment.', category: 'critical-thinking' },
        { text: 'A misconception is that the device works perfectly without training, follow-up, or teamwork.', category: 'education' },
      ],
    },
    {
      id: 'exploration-long-term-care-huddle',
      slug: 'long-term-care-huddle',
      title: 'The Long-Term Care Huddle',
      cinematicIntro:
        `${intro} A morning team huddle covers meals, staffing, activities, family calls, and resident concerns. One leader watches the whole home, not just the schedule.`,
      archetype: 'healthcare-operations',
      difficulty: 'Medium',
      estimatedDurationSeconds: 75,
      featuredCareerId: 'career-long-term-care-administrator',
      revealTitle: 'Long-Term Care Administrator',
      revealNarrative:
        'Long-term care administrators support the operations of places where people live, recover, and receive daily support. This career teaches students that leadership can shape dignity and quality of life.',
      tags: ['long-term-care', 'administration', 'operations'],
      recommendedNext: ['therapy-schedule-board', 'home-visit-notebook'],
      reflectionPrompt:
        'How is leading a place where people live different from managing a place people only visit briefly?',
      clues: [
        { text: 'This professional manages staffing, quality, resident experience, compliance, and daily operations.', category: 'systems' },
        { text: 'Their environment may be a skilled nursing facility, assisted living community, or long-term care center.', category: 'environment' },
        { text: 'They collaborate with nurses, therapists, dining teams, families, social workers, and regulators.', category: 'teamwork' },
        { text: 'Their communication style must support both staff needs and resident dignity.', category: 'communication' },
        { text: 'A misconception is that this role is only office work rather than shaping daily life.', category: 'community' },
      ],
    },
    {
      id: 'exploration-family-care-map',
      slug: 'family-care-map',
      title: 'The Family Care Map',
      cinematicIntro:
        `${intro} A family spreads papers across a dining room table: appointments, equipment lists, home concerns, and questions. One coordinator helps turn worry into a plan.`,
      archetype: 'longitudinal-care',
      difficulty: 'Medium',
      estimatedDurationSeconds: 75,
      featuredCareerId: 'career-geriatric-care-manager',
      revealTitle: 'Geriatric Care Manager',
      revealNarrative:
        'Geriatric care managers help older adults and families coordinate care, services, safety, and support. This role shows students how healthcare can include planning, advocacy, and aging support.',
      tags: ['aging', 'care-management', 'family-support'],
      recommendedNext: ['rehab-transition-call', 'home-visit-notebook'],
      reflectionPrompt:
        'Could you see yourself helping families compare options and make plans during confusing healthcare transitions?',
      clues: [
        { text: 'This professional helps older adults and families coordinate services and long-term support.', category: 'community' },
        { text: 'They may work in homes, offices, senior communities, telehealth, or community settings.', category: 'environment' },
        { text: 'They collaborate with families, clinicians, home care teams, social workers, and community agencies.', category: 'teamwork' },
        { text: 'Their problem-solving includes safety, preferences, appointments, resources, and family communication.', category: 'critical-thinking' },
        { text: 'Their work is often ongoing instead of a single visit or short hospital stay.', category: 'systems' },
      ],
    },
    {
      id: 'exploration-rehab-transition-call',
      slug: 'rehab-transition-call',
      title: 'The Rehab Transition Call',
      cinematicIntro:
        `${intro} The patient is excited to go home, but the checklist is long. One professional follows the calls, equipment requests, coverage questions, and family concerns.`,
      archetype: 'longitudinal-care',
      difficulty: 'Medium',
      estimatedDurationSeconds: 75,
      featuredCareerId: 'career-case-manager-rehab',
      revealTitle: 'Rehabilitation Case Manager',
      revealNarrative:
        'Rehabilitation case managers coordinate services, equipment, coverage, appointments, and support during transitions. Students learn that recovery depends on what happens after the facility door.',
      tags: ['case-management', 'coordination', 'rehabilitation'],
      recommendedNext: ['family-care-map', 'therapy-schedule-board'],
      reflectionPrompt:
        'What details would matter most when helping someone move from a rehab setting back into daily life?',
      clues: [
        { text: 'This professional coordinates services, equipment, appointments, and transition planning.', category: 'systems' },
        { text: 'They communicate with patients, families, therapists, nurses, insurers, and home health teams.', category: 'communication' },
        { text: 'Their environment may include rehab hospitals, long-term care, outpatient programs, or phone-based coordination.', category: 'environment' },
        { text: 'Their problem-solving connects healthcare goals with practical realities outside the facility.', category: 'critical-thinking' },
        { text: 'A misconception is that their work only begins at discharge instead of throughout the recovery plan.', category: 'teamwork' },
      ],
    },
    {
      id: 'exploration-adaptive-tech-table',
      slug: 'adaptive-tech-table',
      title: 'The Adaptive Tech Table',
      cinematicIntro:
        `${intro} A table holds switches, tablets, grips, mounts, and devices. One specialist asks what the person wants to do before choosing the tool.`,
      archetype: 'medical-technology',
      difficulty: 'Medium',
      estimatedDurationSeconds: 75,
      featuredCareerId: 'career-adaptive-technology-specialist',
      revealTitle: 'Adaptive Technology Specialist',
      revealNarrative:
        'Adaptive technology specialists match tools to real goals, environments, and abilities. This career helps students see accessibility as creative, technical, and deeply human.',
      tags: ['adaptive-technology', 'accessibility', 'rehabilitation'],
      recommendedNext: ['device-fitting-day', 'morning-routine-practice'],
      reflectionPrompt:
        'How can technology become more powerful when it starts with what a person wants to do in daily life?',
      clues: [
        { text: 'This professional helps people use tools or devices that support independence, access, communication, or mobility.', category: 'technology' },
        { text: 'They may work in schools, rehab centers, homes, clinics, or accessibility programs.', category: 'environment' },
        { text: 'They collaborate with occupational therapists, families, educators, engineers, and device vendors.', category: 'teamwork' },
        { text: 'Their problem-solving includes fit, training, troubleshooting, and real-world follow-up.', category: 'critical-thinking' },
        { text: 'A misconception is that technology alone solves access without personalization and practice.', category: 'education' },
      ],
    },
    {
      id: 'exploration-therapy-schedule-board',
      slug: 'therapy-schedule-board',
      title: 'The Therapy Schedule Board',
      cinematicIntro:
        `${intro} The day’s board fills with therapy times, room assignments, transportation notes, and family requests. One coordinator keeps consistency from turning into chaos.`,
      archetype: 'healthcare-operations',
      difficulty: 'Hard',
      estimatedDurationSeconds: 90,
      featuredCareerId:
        'career-rehabilitation-scheduling-coordinator',
      revealTitle: 'Rehabilitation Scheduling Coordinator',
      revealNarrative:
        'Rehabilitation scheduling coordinators help patients receive consistent therapy by organizing time, rooms, staff, equipment, and transportation. Their work shows how operations supports recovery.',
      tags: ['scheduling', 'rehabilitation', 'operations'],
      recommendedNext: ['rehab-transition-call', 'long-term-care-huddle'],
      reflectionPrompt:
        'Why might consistent timing and communication matter so much when people are working toward recovery goals?',
      clues: [
        { text: 'This professional works with therapy calendars, patient availability, rooms, transportation, and staff schedules.', category: 'tools' },
        { text: 'Their patient interaction may be indirect, but consistency can affect progress and trust.', category: 'patient-care' },
        { text: 'They coordinate with therapists, nurses, transport teams, families, and front desk staff.', category: 'teamwork' },
        { text: 'Their problem-solving balances goals, fatigue, equipment, timing, and unexpected changes.', category: 'critical-thinking' },
        { text: 'A misconception is that rehabilitation schedules are simple appointment slots.', category: 'systems' },
      ],
    },
    {
      id: 'exploration-quiet-family-room',
      slug: 'quiet-family-room',
      title: 'The Quiet Family Room',
      cinematicIntro:
        `${intro} A family gathers in a quiet room with questions no chart can fully answer. One professional listens for values, hope, grief, and meaning.`,
      archetype: 'longitudinal-care',
      difficulty: 'Hard',
      estimatedDurationSeconds: 90,
      featuredCareerId: 'career-palliative-care-chaplain',
      revealTitle: 'Palliative Care Chaplain',
      revealNarrative:
        'Palliative care chaplains support meaning, emotions, and family conversations during serious illness. This exploration keeps MedQuest focused on humane support rather than clinical decision training.',
      tags: ['chaplaincy', 'palliative-care', 'family-support'],
      recommendedNext: ['rehab-social-work-notes', 'family-care-map'],
      reflectionPrompt:
        'How can listening and presence become a form of support when people are facing uncertainty?',
      clues: [
        { text: 'This professional supports meaning, emotions, family conversations, and spiritual concerns across beliefs.', category: 'communication' },
        { text: 'They may work in hospitals, palliative care teams, long-term care, or hospice-related settings.', category: 'environment' },
        { text: 'They collaborate with nurses, physicians, social workers, families, and ethics or support teams.', category: 'teamwork' },
        { text: 'Their patient interaction is high, but their tools are presence, listening, and respect.', category: 'patient-care' },
        { text: 'A misconception is that this career only serves one religion or only appears at the end of life.', category: 'community' },
      ],
    },
    {
      id: 'exploration-rehab-social-work-notes',
      slug: 'rehab-social-work-notes',
      title: 'The Rehab Social Work Notes',
      cinematicIntro:
        `${intro} The progress notes mention therapy goals, but the conversation turns toward rent, family stress, transportation, and fear about going home.`,
      archetype: 'community-care',
      difficulty: 'Medium',
      estimatedDurationSeconds: 75,
      featuredCareerId: 'career-rehab-social-worker',
      revealTitle: 'Rehabilitation Social Worker',
      revealNarrative:
        'Rehabilitation social workers help patients and families navigate resources, emotions, and transitions. This career shows students that recovery includes life circumstances and human support.',
      tags: ['social-work', 'rehabilitation', 'resources'],
      recommendedNext: ['quiet-family-room', 'rehab-transition-call'],
      reflectionPrompt:
        'How might practical barriers and emotional stress affect someone’s recovery after leaving a rehabilitation setting?',
      clues: [
        { text: 'This professional listens for family needs, resources, emotional stress, and transition concerns.', category: 'communication' },
        { text: 'They may work in rehab hospitals, long-term care, outpatient programs, or community agencies.', category: 'environment' },
        { text: 'They collaborate with therapists, nurses, case managers, families, and community services.', category: 'teamwork' },
        { text: 'Their problem-solving looks beyond therapy sessions into home, school, work, and support systems.', category: 'systems' },
        { text: 'A misconception is that their role is only forms instead of dignity, coping, and resources.', category: 'patient-care' },
      ],
    },
    {
      id: 'exploration-nutrition-strength-plan',
      slug: 'nutrition-strength-plan',
      title: 'The Nutrition Strength Plan',
      cinematicIntro:
        `${intro} A patient works hard in therapy but feels tired by afternoon. One professional looks at meals, preferences, recovery goals, and what support will actually fit.`,
      archetype: 'rehabilitation',
      difficulty: 'Hard',
      estimatedDurationSeconds: 90,
      featuredCareerId: 'career-rehabilitation-dietitian',
      revealTitle: 'Rehabilitation Dietitian',
      revealNarrative:
        'Rehabilitation dietitians connect nutrition to recovery, energy, preferences, and long-term routines. Students learn that support roles can influence whether people can participate in rehab goals.',
      tags: ['nutrition', 'rehabilitation', 'wellness'],
      recommendedNext: ['activity-room-circle', 'words-return'],
      reflectionPrompt:
        'How could nutrition support be more effective when it respects someone’s preferences, routine, and recovery goals?',
      clues: [
        { text: 'This professional connects food, energy, recovery goals, preferences, and health needs.', category: 'education' },
        { text: 'They may work in rehab hospitals, long-term care, outpatient clinics, or home health programs.', category: 'environment' },
        { text: 'They collaborate with therapists, nurses, speech-language pathologists, families, and dining teams.', category: 'teamwork' },
        { text: 'Their problem-solving considers practical routines, appetite, culture, access, and participation in therapy.', category: 'critical-thinking' },
        { text: 'A misconception is that nutrition is separate from recovery and daily function.', category: 'patient-care' },
      ],
    },
  ];
