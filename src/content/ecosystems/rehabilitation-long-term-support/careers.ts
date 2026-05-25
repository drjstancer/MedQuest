import type { Career } from '@/types/exploration';
import { createCareer } from '../../seed-builders';

const pathway = 'Rehabilitation & Long-Term Support';

export const rehabilitationLongTermSupportCareers: Career[] = [
  createCareer({
    id: 'career-physical-therapist-rehab',
    slug: 'rehabilitation-physical-therapist',
    title: 'Rehabilitation Physical Therapist',
    shortDescription:
      'A movement specialist who helps people rebuild strength, mobility, confidence, and function after illness, injury, or surgery.',
    pathway,
    overview:
      'Rehabilitation physical therapists support patients over repeated visits by setting goals, guiding movement, and tracking progress.',
    education:
      'Physical therapists complete a Doctor of Physical Therapy program, clinical training, and licensure.',
    misconception:
      'People may think physical therapy is only exercise, but it also involves assessment, education, motivation, and adaptation.',
    dayInTheLife:
      'A physical therapist may evaluate movement, guide exercises, adjust goals, teach families, and collaborate with rehabilitation teams.',
    tags: ['rehabilitation', 'movement', 'patient-care'],
    blsUrl:
      'https://www.bls.gov/ooh/healthcare/physical-therapists.htm',
  }),
  createCareer({
    id: 'career-occupational-therapist-long-term',
    slug: 'long-term-care-occupational-therapist',
    title: 'Long-Term Care Occupational Therapist',
    shortDescription:
      'A therapy professional who helps people participate in daily activities, routines, school, work, and home life.',
    pathway,
    overview:
      'Occupational therapists focus on meaningful daily tasks, adaptive strategies, and environments that support independence.',
    education:
      'Occupational therapists complete graduate-level occupational therapy education, fieldwork, and licensure.',
    misconception:
      'People may confuse occupational therapy with job training, but it focuses on the activities that make daily life possible.',
    dayInTheLife:
      'An occupational therapist may practice daily routines, recommend adaptations, teach caregivers, and coordinate with rehab teams.',
    tags: ['occupational-therapy', 'daily-life', 'rehabilitation'],
    blsUrl:
      'https://www.bls.gov/ooh/healthcare/occupational-therapists.htm',
  }),
  createCareer({
    id: 'career-speech-language-pathologist-rehab',
    slug: 'rehabilitation-speech-language-pathologist',
    title: 'Rehabilitation Speech-Language Pathologist',
    shortDescription:
      'A specialist who supports communication, cognition, voice, and swallowing-related skills in rehabilitation settings.',
    pathway,
    overview:
      'Speech-language pathologists help patients rebuild communication and daily function after health changes, injuries, or developmental needs.',
    education:
      'Speech-language pathologists typically complete graduate education, supervised clinical practice, certification, and licensure.',
    misconception:
      'People may think this role only works on pronunciation, but it can include communication, thinking skills, voice, and swallowing support.',
    dayInTheLife:
      'A speech-language pathologist may meet patients, practice communication strategies, educate families, and coordinate with therapy teams.',
    tags: ['speech-language-pathology', 'communication', 'rehabilitation'],
    blsUrl:
      'https://www.bls.gov/ooh/healthcare/speech-language-pathologists.htm',
  }),
  createCareer({
    id: 'career-rehabilitation-nurse',
    slug: 'rehabilitation-nurse',
    title: 'Rehabilitation Nurse',
    shortDescription:
      'A nurse who supports recovery, education, routines, safety, and long-term progress in rehabilitation settings.',
    pathway,
    overview:
      'Rehabilitation nurses help patients practice new routines, manage care needs, and build confidence during recovery and adjustment.',
    education:
      'Rehabilitation nurses become registered nurses and gain experience or certification in rehabilitation nursing.',
    misconception:
      'People may think rehab nursing is less complex than hospital nursing, but it requires education, patience, and long-term coordination.',
    dayInTheLife:
      'A rehabilitation nurse may support daily care, teach families, monitor progress, coordinate therapy schedules, and encourage patient goals.',
    tags: ['nursing', 'rehabilitation', 'patient-education'],
    blsUrl:
      'https://www.bls.gov/ooh/healthcare/registered-nurses.htm',
  }),
  createCareer({
    id: 'career-recreational-therapist',
    slug: 'recreational-therapist',
    title: 'Recreational Therapist',
    shortDescription:
      'A therapy professional who uses activities, recreation, creativity, and community participation to support wellbeing and function.',
    pathway,
    overview:
      'Recreational therapists help people reconnect with interests, confidence, social connection, and adaptive participation.',
    education:
      'Recreational therapists often complete therapeutic recreation education and may pursue certification.',
    misconception:
      'People may think recreation is just entertainment, but therapeutic activities can support goals, confidence, and community life.',
    dayInTheLife:
      'A recreational therapist may plan adaptive activities, lead groups, document progress, and collaborate with therapy teams.',
    tags: ['recreational-therapy', 'wellbeing', 'community'],
    blsUrl:
      'https://www.bls.gov/ooh/healthcare/recreational-therapists.htm',
  }),
  createCareer({
    id: 'career-prosthetist-orthotist',
    slug: 'prosthetist-orthotist',
    title: 'Prosthetist-Orthotist',
    shortDescription:
      'A specialist who designs, fits, and adjusts prosthetic and orthotic devices that support mobility and function.',
    pathway,
    overview:
      'Prosthetist-orthotists combine anatomy, engineering, patient goals, and device adjustment to support movement and independence.',
    education:
      'This career typically requires specialized graduate education, residency, certification, and licensure where applicable.',
    misconception:
      'People may think devices are one-time products, but fitting and adjustment require ongoing teamwork and problem-solving.',
    dayInTheLife:
      'A prosthetist-orthotist may measure patients, adjust devices, collaborate with therapists, and support long-term mobility goals.',
    tags: ['adaptive-technology', 'mobility', 'rehabilitation'],
  }),
  createCareer({
    id: 'career-home-health-aide',
    slug: 'home-health-aide',
    title: 'Home Health Aide',
    shortDescription:
      'A support professional who helps people with daily needs and comfort in their homes.',
    pathway,
    overview:
      'Home health aides support daily routines, companionship, safety, and communication between patients, families, and care teams.',
    education:
      'Training varies by state and employer and may include home health aide certification or competency evaluation.',
    misconception:
      'People may underestimate this role, but home support can help people remain connected to daily life and care plans.',
    dayInTheLife:
      'A home health aide may help with daily activities, observe changes, communicate concerns, and support patient comfort at home.',
    tags: ['home-health', 'support-role', 'daily-care'],
    blsUrl:
      'https://www.bls.gov/ooh/healthcare/home-health-aides-and-personal-care-aides.htm',
  }),
  createCareer({
    id: 'career-long-term-care-administrator',
    slug: 'long-term-care-administrator',
    title: 'Long-Term Care Administrator',
    shortDescription:
      'A healthcare leader who manages operations, staff, resident experience, and quality in long-term care settings.',
    pathway,
    overview:
      'Long-term care administrators help facilities support safety, dignity, staffing, family communication, and daily life for residents.',
    education:
      'Pathways may include healthcare administration, gerontology, business, nursing leadership, and state licensure requirements.',
    misconception:
      'People may think long-term care leadership is only paperwork, but it shapes the environment where people live every day.',
    dayInTheLife:
      'An administrator may meet staff, review quality measures, communicate with families, plan resources, and support resident-centered operations.',
    tags: ['long-term-care', 'administration', 'leadership'],
  }),
  createCareer({
    id: 'career-case-manager-rehab',
    slug: 'rehabilitation-case-manager',
    title: 'Rehabilitation Case Manager',
    shortDescription:
      'A coordinator who helps patients, families, and teams plan services, equipment, discharge, and long-term support.',
    pathway,
    overview:
      'Rehabilitation case managers connect therapy goals, insurance, equipment, home needs, appointments, and community resources.',
    education:
      'Case management pathways vary and may include nursing, social work, rehabilitation counseling, or healthcare coordination experience.',
    misconception:
      'People may think case managers only arrange discharge, but they often connect many pieces of a patient’s recovery path.',
    dayInTheLife:
      'A case manager may meet families, coordinate equipment, communicate with insurers, schedule services, and update the rehab team.',
    tags: ['case-management', 'coordination', 'rehabilitation'],
  }),
  createCareer({
    id: 'career-rehab-social-worker',
    slug: 'rehabilitation-social-worker',
    title: 'Rehabilitation Social Worker',
    shortDescription:
      'A social work professional who supports emotional adjustment, resources, family needs, and long-term planning during rehabilitation.',
    pathway,
    overview:
      'Rehabilitation social workers help patients and families navigate life changes, care transitions, resources, and emotional stress.',
    education:
      'Social workers complete social work education and licensure requirements, with clinical roles often requiring graduate preparation.',
    misconception:
      'People may think social work is only forms, but rehab social workers support identity, resources, family communication, and coping.',
    dayInTheLife:
      'A rehab social worker may meet patients, coordinate resources, support family conversations, and collaborate with therapists and nurses.',
    tags: ['social-work', 'rehabilitation', 'family-support'],
    blsUrl:
      'https://www.bls.gov/ooh/community-and-social-service/social-workers.htm',
  }),
  createCareer({
    id: 'career-geriatric-care-manager',
    slug: 'geriatric-care-manager',
    title: 'Geriatric Care Manager',
    shortDescription:
      'A coordinator who helps older adults and families plan care, services, safety, and long-term support.',
    pathway,
    overview:
      'Geriatric care managers help families understand options, coordinate services, and support independence and dignity for older adults.',
    education:
      'Pathways may include nursing, social work, gerontology, care management, or related healthcare experience.',
    misconception:
      'People may think aging support is only medical care, but planning often includes home safety, family communication, finances, and community resources.',
    dayInTheLife:
      'A geriatric care manager may visit homes, talk with families, coordinate appointments, review needs, and connect support services.',
    tags: ['aging', 'care-management', 'family-support'],
  }),
  createCareer({
    id: 'career-adaptive-technology-specialist',
    slug: 'adaptive-technology-specialist',
    title: 'Adaptive Technology Specialist',
    shortDescription:
      'A technology-focused professional who helps people use tools and devices that support independence, communication, or mobility.',
    pathway,
    overview:
      'Adaptive technology specialists match tools to real-life needs, environments, and goals so people can participate more fully.',
    education:
      'Pathways may include occupational therapy, rehabilitation technology, assistive technology, engineering, special education, or related training.',
    misconception:
      'People may think technology solves everything by itself, but successful adaptation depends on fit, training, and follow-up.',
    dayInTheLife:
      'A specialist may assess needs, set up devices, train patients or families, troubleshoot barriers, and collaborate with therapists.',
    tags: ['adaptive-technology', 'rehabilitation', 'accessibility'],
  }),
  createCareer({
    id: 'career-respiratory-therapist-long-term',
    slug: 'long-term-respiratory-therapist',
    title: 'Long-Term Respiratory Therapist',
    shortDescription:
      'A respiratory care professional who supports breathing equipment and education in long-term or home-based settings.',
    pathway,
    overview:
      'Long-term respiratory therapists help patients and families manage respiratory equipment, comfort, routines, and safety over time.',
    education:
      'Respiratory therapists complete accredited respiratory therapy education and licensure or credentialing requirements.',
    misconception:
      'People may think respiratory therapy only happens in emergencies, but many patients need ongoing respiratory support.',
    dayInTheLife:
      'A respiratory therapist may check equipment, teach caregivers, visit long-term care settings, and coordinate with nurses and physicians.',
    tags: ['respiratory-care', 'long-term-support', 'technology'],
    blsUrl:
      'https://www.bls.gov/ooh/healthcare/respiratory-therapists.htm',
  }),
  createCareer({
    id: 'career-rehabilitation-dietitian',
    slug: 'rehabilitation-dietitian',
    title: 'Rehabilitation Dietitian',
    shortDescription:
      'A nutrition professional who supports recovery, strength, energy, and long-term wellness in rehabilitation settings.',
    pathway,
    overview:
      'Rehabilitation dietitians help connect nutrition plans to recovery goals, medical needs, preferences, and daily routines.',
    education:
      'Registered dietitians complete accredited nutrition education, supervised practice, credentialing exams, and ongoing education.',
    misconception:
      'People may think nutrition is separate from rehabilitation, but food access and nutrition can support energy, healing, and participation.',
    dayInTheLife:
      'A rehab dietitian may meet patients, review nutrition needs, talk with families, collaborate with therapists, and adjust plans.',
    tags: ['nutrition', 'rehabilitation', 'wellness'],
    blsUrl:
      'https://www.bls.gov/ooh/healthcare/dietitians-and-nutritionists.htm',
  }),
  createCareer({
    id: 'career-palliative-care-chaplain',
    slug: 'palliative-care-chaplain',
    title: 'Palliative Care Chaplain',
    shortDescription:
      'A spiritual care professional who supports meaning, emotions, family conversations, and dignity during serious illness.',
    pathway,
    overview:
      'Palliative care chaplains support patients, families, and teams as people think about values, comfort, uncertainty, and meaning.',
    education:
      'Chaplains often complete theological or spiritual care education, clinical pastoral education, and certification pathways.',
    misconception:
      'People may think chaplaincy is only religious, but many chaplains support meaning, grief, hope, and values across beliefs.',
    dayInTheLife:
      'A palliative care chaplain may listen to patients, support families, join team meetings, and help people feel less alone.',
    tags: ['chaplaincy', 'palliative-care', 'support'],
  }),
  createCareer({
    id: 'career-rehabilitation-scheduling-coordinator',
    slug: 'rehabilitation-scheduling-coordinator',
    title: 'Rehabilitation Scheduling Coordinator',
    shortDescription:
      'An operations professional who organizes therapy schedules, patient visits, transportation timing, and team availability.',
    pathway,
    overview:
      'Rehabilitation scheduling coordinators help patients receive consistent therapy by balancing goals, staff availability, rooms, equipment, and transportation.',
    education:
      'Many roles require organization, communication, healthcare office training, and familiarity with rehabilitation workflows.',
    misconception:
      'People may think scheduling is only calendars, but rehab progress often depends on consistent timing and coordination.',
    dayInTheLife:
      'A scheduling coordinator may plan therapy blocks, adjust calendars, call families, coordinate transport, and communicate changes.',
    tags: ['scheduling', 'rehabilitation', 'operations'],
  }),
];
