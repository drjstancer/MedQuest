import type { ExplorationPlan } from '../../seed-builders';

const bridgeIntro =
  'The scene feels ordinary at first, but the details reveal how healthcare reaches people through relationships, access, trust, and coordination.';

export const primaryCareCommunityHealthPlans: ExplorationPlan[] =
  [
    {
      id: 'exploration-rural-clinic-morning',
      slug: 'rural-clinic-morning',
      title: 'The Rural Clinic Morning',
      cinematicIntro:
        `${bridgeIntro} A small clinic opens before sunrise as one professional prepares to care for grandparents, teens, farmworkers, and families who may have traveled a long way.`,
      archetype: 'longitudinal-care',
      difficulty: 'Easy',
      estimatedDurationSeconds: 60,
      featuredCareerId: 'career-family-medicine-physician',
      revealTitle: 'Family Medicine Physician',
      revealNarrative:
        'Family medicine physicians help students see primary care as broad, relationship-centered work. In rural and community settings, they connect prevention, urgent concerns, referrals, and long-term trust.',
      tags: ['rural-health', 'primary-care', 'relationships'],
      recommendedNext: [
        'school-hallway-check-in',
        'after-hours-video-visit',
      ],
      reflectionPrompt:
        'Would you enjoy a career where knowing a patient over time helps you understand their health, family, and community context?',
      clues: [
        {
          text: 'This professional often cares for patients across many ages instead of focusing on one body system.',
          category: 'patient-care',
        },
        {
          text: 'Their work environment may include small clinics where long-term relationships are especially important.',
          category: 'environment',
        },
        {
          text: 'They coordinate with nurses, medical assistants, specialists, pharmacists, and community resources.',
          category: 'teamwork',
        },
        {
          text: 'Their problem-solving style depends on listening for patterns across many visits, not just one moment.',
          category: 'critical-thinking',
        },
        {
          text: 'Their schedule may include a wide variety of concerns in one day, from prevention to follow-up conversations.',
          category: 'skills',
        },
      ],
    },
    {
      id: 'exploration-school-hallway-check-in',
      slug: 'school-hallway-check-in',
      title: 'The School Hallway Check-In',
      cinematicIntro:
        `${bridgeIntro} A student pauses outside the main office, unsure whether to stay in class or call home. One healthcare professional knows school health is about learning, safety, families, and trust.`,
      archetype: 'community-care',
      difficulty: 'Easy',
      estimatedDurationSeconds: 60,
      featuredCareerId: 'career-school-nurse',
      revealTitle: 'School Nurse',
      revealNarrative:
        'School nurses support student health where young people spend much of their day. Their work connects healthcare, education, families, and student confidence in ways many students can recognize.',
      tags: ['school-health', 'nursing', 'student-support'],
      recommendedNext: [
        'community-fair-table',
        'after-hours-video-visit',
      ],
      reflectionPrompt:
        'What strengths would help someone support students while communicating with families, teachers, and healthcare teams?',
      clues: [
        {
          text: 'This professional works in an educational setting where health needs can affect learning and attendance.',
          category: 'environment',
        },
        {
          text: 'They communicate with students, families, teachers, counselors, and healthcare providers.',
          category: 'communication',
        },
        {
          text: 'Their patient interaction level is high, but the setting is not a hospital or clinic exam room.',
          category: 'patient-care',
        },
        {
          text: 'They may support long-term plans, daily needs, prevention, and student confidence.',
          category: 'teamwork',
        },
        {
          text: 'A common misconception is that they only handle small injuries during the school day.',
          category: 'critical-thinking',
        },
      ],
    },
    {
      id: 'exploration-community-fair-table',
      slug: 'community-fair-table',
      title: 'The Community Fair Table',
      cinematicIntro:
        `${bridgeIntro} Music plays in a park while families move between booths. At one table, a healthcare professional turns confusing information into simple, respectful conversations.`,
      archetype: 'public-health',
      difficulty: 'Easy',
      estimatedDurationSeconds: 60,
      featuredCareerId: 'career-public-health-educator',
      revealTitle: 'Public Health Educator',
      revealNarrative:
        'Public health educators help communities understand health information before problems become emergencies. This career shows students that education, culture, and trust are powerful parts of healthcare.',
      tags: ['public-health', 'education', 'community'],
      recommendedNext: [
        'language-line',
        'rural-outreach-route',
      ],
      reflectionPrompt:
        'Would you enjoy helping people make sense of health information in ways that feel useful, respectful, and clear?',
      clues: [
        {
          text: 'This role often happens outside exam rooms, in schools, neighborhoods, events, and community spaces.',
          category: 'environment',
        },
        {
          text: 'They use communication tools such as workshops, flyers, conversations, surveys, and presentations.',
          category: 'tools',
        },
        {
          text: 'They collaborate with clinics, schools, local leaders, and public health departments.',
          category: 'teamwork',
        },
        {
          text: 'Their work focuses on prevention, understanding, and helping people feel confident asking questions.',
          category: 'education',
        },
        {
          text: 'Their problem-solving starts by listening to what a community needs, not just handing out information.',
          category: 'community',
        },
      ],
    },
    {
      id: 'exploration-after-hours-video-visit',
      slug: 'after-hours-video-visit',
      title: 'The After-Hours Video Visit',
      cinematicIntro:
        `${bridgeIntro} A parent opens a laptop after dinner, worried about missing work tomorrow. Behind the screen, a coordinator makes sure the visit can actually happen.`,
      archetype: 'medical-technology',
      difficulty: 'Hard',
      estimatedDurationSeconds: 75,
      featuredCareerId: 'career-telehealth-coordinator',
      revealTitle: 'Telehealth Coordinator',
      revealNarrative:
        'Telehealth coordinators make virtual care more accessible by supporting technology, schedules, privacy, and patient readiness. Their work highlights healthcare careers built around access and digital communication.',
      tags: ['telehealth', 'technology', 'access'],
      recommendedNext: [
        'clinic-calendar-puzzle',
        'language-line',
      ],
      reflectionPrompt:
        'Could you see yourself helping healthcare work better by combining technology support, patience, and communication?',
      clues: [
        {
          text: 'This professional works with virtual visit platforms, links, schedules, and patient access questions.',
          category: 'technology',
        },
        {
          text: 'They may interact with patients before the clinician joins the visit, especially when technology is confusing.',
          category: 'communication',
        },
        {
          text: 'Their work environment can include clinics, call centers, remote teams, and digital health programs.',
          category: 'environment',
        },
        {
          text: 'They coordinate with clinicians, front desk staff, interpreters, and IT support.',
          category: 'teamwork',
        },
        {
          text: 'Their problem-solving style is calm and practical, helping people enter care instead of giving medical advice.',
          category: 'systems',
        },
      ],
    },
    {
      id: 'exploration-language-line',
      slug: 'language-line',
      title: 'The Language Line',
      cinematicIntro:
        `${bridgeIntro} A clinic room grows quieter as everyone waits for the right words. One professional helps the patient, family, and care team understand each other without changing the message.`,
      archetype: 'community-care',
      difficulty: 'Medium',
      estimatedDurationSeconds: 75,
      featuredCareerId: 'career-medical-interpreter',
      revealTitle: 'Medical Interpreter',
      revealNarrative:
        'Medical interpreters protect meaning, accuracy, and dignity across languages. This exploration helps students understand that communication access is not extra; it is part of respectful healthcare.',
      tags: ['language-access', 'communication', 'equity'],
      recommendedNext: [
        'advocate-at-the-table',
        'community-fair-table',
      ],
      reflectionPrompt:
        'How might language, trust, and respect shape whether a patient feels comfortable asking questions?',
      clues: [
        {
          text: 'This professional supports communication when patients and care teams do not share the same language.',
          category: 'communication',
        },
        {
          text: 'They may work in person, by phone, or through video technology across many healthcare settings.',
          category: 'technology',
        },
        {
          text: 'Their role requires accuracy, ethics, medical vocabulary, and respect for privacy.',
          category: 'skills',
        },
        {
          text: 'They collaborate with clinicians, families, schedulers, and care coordinators, but they do not replace the clinician.',
          category: 'teamwork',
        },
        {
          text: 'A misconception is that any bilingual person can safely do this specialized healthcare role.',
          category: 'education',
        },
      ],
    },
    {
      id: 'exploration-clinic-calendar-puzzle',
      slug: 'clinic-calendar-puzzle',
      title: 'The Clinic Calendar Puzzle',
      cinematicIntro:
        `${bridgeIntro} The phone lines light up before lunch. One professional studies time slots, transportation limits, follow-up needs, and provider availability like pieces of a moving puzzle.`,
      archetype: 'healthcare-operations',
      difficulty: 'Medium',
      estimatedDurationSeconds: 75,
      featuredCareerId: 'career-clinic-scheduling-coordinator',
      revealTitle: 'Clinic Scheduling Coordinator',
      revealNarrative:
        'Clinic scheduling coordinators help patients reach care by matching needs, timing, locations, and team capacity. This career shows how access depends on careful operations work.',
      tags: ['scheduling', 'operations', 'access'],
      recommendedNext: [
        'billing-envelope',
        'care-navigation-map',
      ],
      reflectionPrompt:
        'Would you enjoy a healthcare role where organization and clear communication help people get care at the right time?',
      clues: [
        {
          text: 'This professional works with calendars, phone calls, appointment types, and patient availability.',
          category: 'tools',
        },
        {
          text: 'Their patient interaction is frequent, but usually focused on access rather than clinical care.',
          category: 'patient-care',
        },
        {
          text: 'They coordinate with clinicians, referral teams, front desk staff, and sometimes transportation resources.',
          category: 'teamwork',
        },
        {
          text: 'Their problem-solving includes urgency, fairness, instructions, and schedule changes.',
          category: 'critical-thinking',
        },
        {
          text: 'A misconception is that scheduling is simple, even though it can shape whether patients return for care.',
          category: 'systems',
        },
      ],
    },
    {
      id: 'exploration-care-navigation-map',
      slug: 'care-navigation-map',
      title: 'The Care Navigation Map',
      cinematicIntro:
        `${bridgeIntro} A patient leaves with three papers, two referrals, and one worried expression. A guide steps in to turn the maze into a path they can follow.`,
      archetype: 'longitudinal-care',
      difficulty: 'Medium',
      estimatedDurationSeconds: 75,
      featuredCareerId: 'career-care-navigator',
      revealTitle: 'Care Navigator',
      revealNarrative:
        'Care navigators help patients move through healthcare systems with less confusion. Their work highlights empathy, organization, and the importance of helping people follow through after a visit.',
      tags: ['care-navigation', 'coordination', 'access'],
      recommendedNext: [
        'advocate-at-the-table',
        'rural-outreach-route',
      ],
      reflectionPrompt:
        'What kind of patience and problem-solving would help someone guide patients through a confusing healthcare system?',
      clues: [
        {
          text: 'This professional helps patients understand next steps, referrals, appointments, and resources.',
          category: 'communication',
        },
        {
          text: 'They may work in clinics, hospitals, call centers, community programs, or telehealth teams.',
          category: 'environment',
        },
        {
          text: 'They coordinate with clinicians, social workers, schedulers, interpreters, and community organizations.',
          category: 'teamwork',
        },
        {
          text: 'Their work often continues after a visit, when patients are trying to make the plan happen in real life.',
          category: 'systems',
        },
        {
          text: 'Their patient interaction level is high, but their focus is guidance rather than diagnosis or treatment.',
          category: 'patient-care',
        },
      ],
    },
    {
      id: 'exploration-billing-envelope',
      slug: 'billing-envelope',
      title: 'The Billing Envelope',
      cinematicIntro:
        `${bridgeIntro} A family opens an envelope and hesitates before scheduling a follow-up. Behind the scenes, one professional knows paperwork can affect whether care feels possible.`,
      archetype: 'healthcare-operations',
      difficulty: 'Hard',
      estimatedDurationSeconds: 90,
      featuredCareerId:
        'career-medical-billing-specialist-community',
      revealTitle: 'Community Clinic Medical Billing Specialist',
      revealNarrative:
        'Medical billing specialists support the financial and documentation side of healthcare access. This behind-the-scenes career helps students see how paperwork, clarity, and accuracy affect patient trust.',
      tags: ['medical-billing', 'operations', 'access'],
      recommendedNext: [
        'clinic-calendar-puzzle',
        'advocate-at-the-table',
      ],
      reflectionPrompt:
        'How can clear information about costs, forms, and next steps make healthcare feel less intimidating?',
      clues: [
        {
          text: 'This professional works with documentation, codes, insurance information, and patient questions.',
          category: 'tools',
        },
        {
          text: 'They may have little direct clinical contact, but their work can affect whether patients return for care.',
          category: 'systems',
        },
        {
          text: 'They collaborate with front desk teams, clinicians, coders, insurers, and sometimes patient advocates.',
          category: 'teamwork',
        },
        {
          text: 'Their problem-solving style values accuracy, privacy, patience, and clear explanations.',
          category: 'critical-thinking',
        },
        {
          text: 'A misconception is that this role is disconnected from patient experience.',
          category: 'patient-care',
        },
      ],
    },
    {
      id: 'exploration-rural-outreach-route',
      slug: 'rural-outreach-route',
      title: 'The Rural Outreach Route',
      cinematicIntro:
        `${bridgeIntro} A van leaves the clinic with supplies, flyers, and a list of towns where distance makes care harder. One coordinator knows trust can travel road by road.`,
      archetype: 'community-care',
      difficulty: 'Medium',
      estimatedDurationSeconds: 75,
      featuredCareerId:
        'career-rural-health-outreach-coordinator',
      revealTitle: 'Rural Health Outreach Coordinator',
      revealNarrative:
        'Rural health outreach coordinators help healthcare reach communities where distance, transportation, broadband, and trust can shape access. This role expands student understanding of community-based care.',
      tags: ['rural-health', 'outreach', 'community'],
      recommendedNext: [
        'community-health-doorway',
        'rural-clinic-morning',
      ],
      reflectionPrompt:
        'Would you enjoy a career where understanding a community is just as important as understanding a healthcare system?',
      clues: [
        {
          text: 'This professional focuses on access challenges shaped by distance, transportation, technology, and local trust.',
          category: 'community',
        },
        {
          text: 'Their work environment may include clinics, community events, mobile programs, and rural roads.',
          category: 'environment',
        },
        {
          text: 'They communicate with patients, local leaders, public health teams, and clinic staff.',
          category: 'communication',
        },
        {
          text: 'Their schedule may include travel, outreach planning, follow-up calls, and community meetings.',
          category: 'skills',
        },
        {
          text: 'Their problem-solving starts with practical barriers, not clinical decisions.',
          category: 'systems',
        },
      ],
    },
    {
      id: 'exploration-community-health-doorway',
      slug: 'community-health-doorway',
      title: 'The Community Health Doorway',
      cinematicIntro:
        `${bridgeIntro} At an apartment community room, people stop by with questions they might not ask in a clinic. A familiar face helps turn hesitation into a first step.`,
      archetype: 'community-care',
      difficulty: 'Medium',
      estimatedDurationSeconds: 75,
      featuredCareerId: 'career-community-health-worker',
      revealTitle: 'Community Health Worker',
      revealNarrative:
        'Community health workers build bridges between healthcare systems and the communities they serve. Their work shows students how trust, lived experience, and connection can improve access.',
      tags: ['community-health', 'outreach', 'trust'],
      recommendedNext: [
        'rural-outreach-route',
        'nutrition-grocery-tour',
      ],
      reflectionPrompt:
        'What would it take to become someone people trust when they feel unsure about seeking healthcare?',
      clues: [
        {
          text: 'This professional often works in neighborhoods, homes, community centers, and outreach programs.',
          category: 'environment',
        },
        {
          text: 'They may share cultural or community knowledge that helps patients feel understood.',
          category: 'community',
        },
        {
          text: 'They collaborate with clinics, social workers, public health teams, and local organizations.',
          category: 'teamwork',
        },
        {
          text: 'Their patient interaction is personal and practical, often focused on trust and resources.',
          category: 'patient-care',
        },
        {
          text: 'Their tools may include conversation, follow-up calls, resource lists, and community relationships.',
          category: 'tools',
        },
      ],
    },
    {
      id: 'exploration-nutrition-grocery-tour',
      slug: 'nutrition-grocery-tour',
      title: 'The Nutrition Grocery Tour',
      cinematicIntro:
        `${bridgeIntro} A family walks through a grocery aisle with questions about cost, culture, and health. One professional turns nutrition science into choices that feel realistic.`,
      archetype: 'community-care',
      difficulty: 'Medium',
      estimatedDurationSeconds: 75,
      featuredCareerId:
        'career-registered-dietitian-community',
      revealTitle: 'Community Registered Dietitian',
      revealNarrative:
        'Community registered dietitians help people connect nutrition to real life, including culture, budgets, food access, and long-term goals. This role shows students healthcare can happen in everyday spaces.',
      tags: ['nutrition', 'community-care', 'education'],
      recommendedNext: [
        'community-health-doorway',
        'clinic-social-support',
      ],
      reflectionPrompt:
        'How could a healthcare professional give guidance that respects someone’s culture, budget, preferences, and daily life?',
      clues: [
        {
          text: 'This professional uses nutrition science but must also understand real-life food access.',
          category: 'education',
        },
        {
          text: 'Their work environment may include clinics, community centers, schools, grocery stores, or telehealth.',
          category: 'environment',
        },
        {
          text: 'They collaborate with clinicians, community programs, families, and food resource organizations.',
          category: 'teamwork',
        },
        {
          text: 'Their communication style should be practical, respectful, and culturally aware.',
          category: 'communication',
        },
        {
          text: 'A misconception is that they simply hand out strict meal plans.',
          category: 'critical-thinking',
        },
      ],
    },
    {
      id: 'exploration-clinic-social-support',
      slug: 'clinic-social-support',
      title: 'The Clinic Social Support',
      cinematicIntro:
        `${bridgeIntro} A patient sits with a folded bus schedule, a school note, and a worried look. One professional listens for the life barriers hiding behind the appointment.`,
      archetype: 'community-care',
      difficulty: 'Medium',
      estimatedDurationSeconds: 75,
      featuredCareerId: 'career-clinic-social-worker',
      revealTitle: 'Clinic Social Worker',
      revealNarrative:
        'Clinic social workers help care teams understand the social and emotional realities surrounding health. Their work highlights dignity, resources, safety, and support beyond the exam room.',
      tags: ['social-work', 'community-resources', 'support'],
      recommendedNext: [
        'advocate-at-the-table',
        'care-navigation-map',
      ],
      reflectionPrompt:
        'Would you enjoy helping people solve practical and emotional challenges that affect their ability to stay connected to care?',
      clues: [
        {
          text: 'This professional listens for needs related to safety, stress, transportation, housing, resources, or family support.',
          category: 'communication',
        },
        {
          text: 'They may work in clinics, hospitals, schools, or community agencies.',
          category: 'environment',
        },
        {
          text: 'They collaborate with clinicians, care navigators, community programs, and families.',
          category: 'teamwork',
        },
        {
          text: 'Their problem-solving respects dignity and looks beyond the medical visit.',
          category: 'critical-thinking',
        },
        {
          text: 'A misconception is that their role is only paperwork instead of patient and family support.',
          category: 'patient-care',
        },
      ],
    },
    {
      id: 'exploration-advocate-at-the-table',
      slug: 'advocate-at-the-table',
      title: 'The Advocate At The Table',
      cinematicIntro:
        `${bridgeIntro} A patient has questions but keeps apologizing for asking. One professional helps the room slow down so the person at the center of care can be heard.`,
      archetype: 'healthcare-operations',
      difficulty: 'Hard',
      estimatedDurationSeconds: 90,
      featuredCareerId: 'career-patient-advocate-community',
      revealTitle: 'Community Patient Advocate',
      revealNarrative:
        'Community patient advocates support voice, respect, and understanding in healthcare. This career shows students that making systems more humane can be a powerful form of healthcare work.',
      tags: ['patient-advocacy', 'communication', 'equity'],
      recommendedNext: [
        'language-line',
        'billing-envelope',
      ],
      reflectionPrompt:
        'How can someone help patients feel heard while still supporting respectful teamwork with healthcare professionals?',
      clues: [
        {
          text: 'This professional helps patients understand processes, ask questions, and voice concerns.',
          category: 'communication',
        },
        {
          text: 'They may work in clinics, community organizations, hospitals, or patient support programs.',
          category: 'environment',
        },
        {
          text: 'They collaborate with care teams, interpreters, billing staff, social workers, and families.',
          category: 'teamwork',
        },
        {
          text: 'Their patient interaction is high, but they are not there to diagnose or direct treatment.',
          category: 'patient-care',
        },
        {
          text: 'Their problem-solving centers dignity, clarity, trust, and access.',
          category: 'systems',
        },
      ],
    },
  ];
