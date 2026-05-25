import type { Career } from '@/types/exploration';
import { createCareer } from '../../seed-builders';

const pathway = 'Primary Care & Community Health';

export const primaryCareCommunityHealthCareers: Career[] = [
  createCareer({
    id: 'career-family-medicine-physician',
    slug: 'family-medicine-physician',
    title: 'Family Medicine Physician',
    shortDescription:
      'A physician who provides long-term, whole-person care for patients across ages and life stages.',
    pathway,
    overview:
      'Family medicine physicians build relationships over time, notice patterns across visits, and help patients connect preventive care, urgent concerns, and community resources.',
    education:
      'Family physicians complete college, medical school, residency training in family medicine, and medical licensure.',
    misconception:
      'Some people think primary care is simple, but it often requires broad knowledge, trust-building, and long-term problem-solving.',
    dayInTheLife:
      'A family physician may see children, teens, adults, and older adults, review concerns, coordinate referrals, and help patients plan next steps.',
    tags: ['primary-care', 'relationships', 'physician'],
    blsUrl:
      'https://www.bls.gov/ooh/healthcare/physicians-and-surgeons.htm',
  }),
  createCareer({
    id: 'career-community-health-nurse',
    slug: 'community-health-nurse',
    title: 'Community Health Nurse',
    shortDescription:
      'A nurse who supports health education, prevention, outreach, and care coordination in community settings.',
    pathway,
    overview:
      'Community health nurses connect clinical knowledge with schools, homes, clinics, and public programs so people can access care earlier and more confidently.',
    education:
      'Community health nurses become registered nurses and may gain additional public health or community care experience.',
    misconception:
      'People may think nursing only happens in hospitals, but many nurses work directly in neighborhoods, schools, and public programs.',
    dayInTheLife:
      'A community health nurse may teach families, check in with patients, support screenings, and coordinate with clinics or public health teams.',
    tags: ['nursing', 'community-care', 'public-health'],
    blsUrl:
      'https://www.bls.gov/ooh/healthcare/registered-nurses.htm',
  }),
  createCareer({
    id: 'career-medical-assistant-primary-care',
    slug: 'primary-care-medical-assistant',
    title: 'Primary Care Medical Assistant',
    shortDescription:
      'A clinical support professional who helps primary care visits run smoothly and keeps patients informed.',
    pathway,
    overview:
      'Medical assistants support patients before, during, and after visits by preparing rooms, gathering information, and helping teams stay organized.',
    education:
      'Medical assistants may complete a certificate, diploma, associate program, or employer-based training depending on state and workplace expectations.',
    misconception:
      'People may think medical assistants only take basic information, but they often help the entire clinic workflow stay connected.',
    dayInTheLife:
      'A medical assistant may welcome patients, update information, prepare supplies, communicate with clinicians, and help patients understand next steps.',
    tags: ['clinic', 'support-role', 'patient-care'],
  }),
  createCareer({
    id: 'career-public-health-educator',
    slug: 'public-health-educator',
    title: 'Public Health Educator',
    shortDescription:
      'A public health professional who creates education and outreach that helps communities make informed health choices.',
    pathway,
    overview:
      'Public health educators translate health information into clear, useful programs for schools, neighborhoods, clinics, and community organizations.',
    education:
      'Public health educators often study public health, health education, community health, or a related field.',
    misconception:
      'People may think health education is just posters, but it involves listening, planning, culture, communication, and evaluation.',
    dayInTheLife:
      'A public health educator may design workshops, meet community partners, review feedback, and adapt materials for different audiences.',
    tags: ['public-health', 'education', 'community'],
    blsUrl:
      'https://www.bls.gov/ooh/community-and-social-service/health-educators.htm',
  }),
  createCareer({
    id: 'career-care-navigator',
    slug: 'care-navigator',
    title: 'Care Navigator',
    shortDescription:
      'A healthcare guide who helps patients understand appointments, resources, referrals, and next steps.',
    pathway,
    overview:
      'Care navigators reduce confusion by helping patients move through healthcare systems, connect to services, and follow through on care plans.',
    education:
      'Care navigation pathways vary and may include healthcare experience, social services, community health, or care coordination training.',
    misconception:
      'People may think navigation is only scheduling, but navigators often solve access barriers and coordinate across teams.',
    dayInTheLife:
      'A care navigator may call patients, explain referrals, connect transportation or community resources, and communicate with clinics.',
    tags: ['care-navigation', 'coordination', 'community-care'],
  }),
  createCareer({
    id: 'career-community-health-worker',
    slug: 'community-health-worker',
    title: 'Community Health Worker',
    shortDescription:
      'A trusted community-based worker who connects people with health information, services, and support.',
    pathway,
    overview:
      'Community health workers often share lived community knowledge and help bridge healthcare systems with families, neighborhoods, and local resources.',
    education:
      'Training varies by state and employer and may include community health worker certification, outreach training, or public health coursework.',
    misconception:
      'People may underestimate this role because it is not always clinic-based, but trust and connection are powerful parts of healthcare.',
    dayInTheLife:
      'A community health worker may visit community sites, help families understand services, support screenings, and share feedback with healthcare teams.',
    tags: ['community-care', 'outreach', 'public-health'],
  }),
  createCareer({
    id: 'career-medical-interpreter',
    slug: 'medical-interpreter',
    title: 'Medical Interpreter',
    shortDescription:
      'A language access professional who helps patients and healthcare teams communicate clearly and respectfully.',
    pathway,
    overview:
      'Medical interpreters support accurate communication across languages while protecting meaning, privacy, and patient dignity.',
    education:
      'Medical interpreters usually need strong language proficiency, medical terminology training, ethics training, and may pursue certification.',
    misconception:
      'People may think any bilingual person can interpret, but medical interpreting requires accuracy, neutrality, and specialized training.',
    dayInTheLife:
      'A medical interpreter may join clinic visits, telehealth calls, family conversations, and care coordination meetings.',
    tags: ['language-access', 'communication', 'equity'],
  }),
  createCareer({
    id: 'career-school-nurse',
    slug: 'school-nurse',
    title: 'School Nurse',
    shortDescription:
      'A nurse who supports student health, safety, education, and care coordination inside schools.',
    pathway,
    overview:
      'School nurses help students manage health needs during the school day and connect families, educators, and healthcare providers.',
    education:
      'School nurses are registered nurses and may need state-specific school nurse certification or public health preparation.',
    misconception:
      'People may think school nurses only handle minor injuries, but they also support chronic conditions, prevention, and student wellbeing.',
    dayInTheLife:
      'A school nurse may see students, communicate with families, support medication plans, teach health topics, and coordinate with school staff.',
    tags: ['school-health', 'nursing', 'student-support'],
    blsUrl:
      'https://www.bls.gov/ooh/healthcare/registered-nurses.htm',
  }),
  createCareer({
    id: 'career-registered-dietitian-community',
    slug: 'community-registered-dietitian',
    title: 'Community Registered Dietitian',
    shortDescription:
      'A nutrition professional who supports food, health education, and practical nutrition planning in community settings.',
    pathway,
    overview:
      'Community registered dietitians help people connect nutrition information to culture, budgets, access, preferences, and long-term wellness.',
    education:
      'Registered dietitians complete accredited nutrition education, supervised practice, credentialing exams, and ongoing education.',
    misconception:
      'People may think dietitians only give strict meal plans, but they often focus on realistic, respectful, and culturally aware guidance.',
    dayInTheLife:
      'A dietitian may meet with patients, lead group education, collaborate with clinics, and connect families with food resources.',
    tags: ['nutrition', 'community-care', 'education'],
    blsUrl:
      'https://www.bls.gov/ooh/healthcare/dietitians-and-nutritionists.htm',
  }),
  createCareer({
    id: 'career-clinic-social-worker',
    slug: 'clinic-social-worker',
    title: 'Clinic Social Worker',
    shortDescription:
      'A social work professional who helps patients navigate stress, resources, safety needs, and support systems.',
    pathway,
    overview:
      'Clinic social workers connect healthcare with life outside the exam room, including family needs, transportation, housing, stress, and community support.',
    education:
      'Social workers complete social work education and licensure requirements, with clinical roles often requiring graduate training.',
    misconception:
      'People may think social workers only handle paperwork, but they often support dignity, access, and problem-solving during difficult moments.',
    dayInTheLife:
      'A clinic social worker may meet patients, coordinate resources, talk with care teams, and help families plan safer next steps.',
    tags: ['social-work', 'community-resources', 'patient-support'],
    blsUrl:
      'https://www.bls.gov/ooh/community-and-social-service/social-workers.htm',
  }),
  createCareer({
    id: 'career-telehealth-coordinator',
    slug: 'telehealth-coordinator',
    title: 'Telehealth Coordinator',
    shortDescription:
      'A healthcare operations professional who helps virtual visits run smoothly for patients and care teams.',
    pathway,
    overview:
      'Telehealth coordinators support scheduling, technology readiness, communication, and patient access for remote healthcare visits.',
    education:
      'Pathways vary and may include healthcare administration, medical office experience, digital health training, or patient support roles.',
    misconception:
      'People may think telehealth is only a video call, but access, privacy, technology, and coordination all matter.',
    dayInTheLife:
      'A telehealth coordinator may prepare visit links, help patients troubleshoot access, coordinate schedules, and communicate with clinicians.',
    tags: ['telehealth', 'healthcare-operations', 'technology'],
  }),
  createCareer({
    id: 'career-rural-health-outreach-coordinator',
    slug: 'rural-health-outreach-coordinator',
    title: 'Rural Health Outreach Coordinator',
    shortDescription:
      'A community-focused coordinator who helps rural patients connect with services, screenings, transportation, and follow-up care.',
    pathway,
    overview:
      'Rural health outreach coordinators help healthcare systems understand distance, access, trust, and resource challenges in rural communities.',
    education:
      'Pathways may include public health, community health, social services, healthcare administration, or local outreach experience.',
    misconception:
      'People may think rural healthcare is only about small clinics, but it also involves transportation, technology, trust, and creative coordination.',
    dayInTheLife:
      'A coordinator may plan outreach events, call patients, work with clinics, arrange resources, and listen to community concerns.',
    tags: ['rural-health', 'outreach', 'community-care'],
  }),
  createCareer({
    id: 'career-clinic-scheduling-coordinator',
    slug: 'clinic-scheduling-coordinator',
    title: 'Clinic Scheduling Coordinator',
    shortDescription:
      'An administrative professional who helps patients access appointments and keeps clinic calendars organized.',
    pathway,
    overview:
      'Clinic scheduling coordinators help patients find the right appointment time, provider, location, and follow-up path.',
    education:
      'Many roles require strong communication, organization, and healthcare office training; some require prior medical office experience.',
    misconception:
      'People may think scheduling is simple, but coordinators often balance urgency, provider availability, transportation, and patient needs.',
    dayInTheLife:
      'A scheduling coordinator may answer calls, coordinate referrals, adjust calendars, confirm instructions, and communicate changes to care teams.',
    tags: ['scheduling', 'healthcare-operations', 'access'],
  }),
  createCareer({
    id: 'career-medical-billing-specialist-community',
    slug: 'community-clinic-medical-billing-specialist',
    title: 'Community Clinic Medical Billing Specialist',
    shortDescription:
      'A healthcare finance professional who supports accurate billing, documentation flow, and patient-facing payment questions.',
    pathway,
    overview:
      'Medical billing specialists help clinics translate completed services into accurate billing information while supporting transparency and access.',
    education:
      'Pathways may include medical billing and coding certificates, health information coursework, or employer-based training.',
    misconception:
      'People may think billing is disconnected from care, but unclear costs and paperwork can affect whether patients return for support.',
    dayInTheLife:
      'A billing specialist may review information, communicate with insurers, answer patient questions, and coordinate with front desk and clinical teams.',
    tags: ['medical-billing', 'healthcare-operations', 'access'],
  }),
  createCareer({
    id: 'career-patient-advocate-community',
    slug: 'community-patient-advocate',
    title: 'Community Patient Advocate',
    shortDescription:
      'A support professional who helps patients voice concerns, understand options, and feel respected in healthcare settings.',
    pathway,
    overview:
      'Community patient advocates help people navigate systems, ask questions, understand resources, and feel heard during healthcare experiences.',
    education:
      'Patient advocacy pathways vary and may include healthcare experience, social services, communication, public health, or advocacy training.',
    misconception:
      'People may think advocacy means speaking over the care team, but strong advocates support communication and respect for everyone involved.',
    dayInTheLife:
      'A patient advocate may listen to concerns, explain processes, connect resources, and help teams understand patient experiences.',
    tags: ['patient-advocacy', 'communication', 'community-care'],
  }),
];
