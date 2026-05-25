import type { Career } from '@/types/exploration';
import { createCareer } from '../../seed-builders';

const pathway = 'Hospital Operations & Diagnostics';

export const hospitalOperationsDiagnosticsCareers: Career[] = [
  createCareer({
    id: 'career-hospital-administrator',
    slug: 'hospital-administrator',
    title: 'Hospital Administrator',
    shortDescription:
      'A healthcare leader who helps hospital departments, staff, budgets, policies, and patient services work together.',
    pathway,
    overview:
      'Hospital administrators support the systems that allow clinical teams to care for patients safely, efficiently, and respectfully.',
    education:
      'Common pathways include healthcare administration, public health, business, nursing leadership, or related graduate training.',
    misconception:
      'People may think administrators are far from care, but their decisions can affect staffing, access, safety, and patient experience.',
    dayInTheLife:
      'A hospital administrator may review operations data, meet department leaders, plan improvements, and coordinate resources across teams.',
    tags: ['healthcare-administration', 'operations', 'leadership'],
  }),
  createCareer({
    id: 'career-healthcare-it-specialist',
    slug: 'healthcare-it-specialist',
    title: 'Healthcare IT Specialist',
    shortDescription:
      'A technology professional who supports the digital systems healthcare teams rely on every day.',
    pathway,
    overview:
      'Healthcare IT specialists help keep electronic health records, devices, networks, access systems, and support tickets working for care teams.',
    education:
      'Pathways may include information technology, health informatics, cybersecurity, computer science, or healthcare systems training.',
    misconception:
      'People may think IT is separate from patient care, but technology problems can affect communication, timing, and safety.',
    dayInTheLife:
      'A healthcare IT specialist may troubleshoot systems, support staff, protect access, and coordinate upgrades with clinical departments.',
    tags: ['healthcare-it', 'technology', 'systems'],
  }),
  createCareer({
    id: 'career-health-informatics-analyst',
    slug: 'health-informatics-analyst',
    title: 'Health Informatics Analyst',
    shortDescription:
      'A data-focused professional who helps healthcare teams understand patterns, quality measures, and system performance.',
    pathway,
    overview:
      'Health informatics analysts connect healthcare, data, technology, and decision-making so leaders and teams can improve systems.',
    education:
      'Pathways may include health informatics, data analytics, public health, computer science, nursing informatics, or healthcare administration.',
    misconception:
      'People may think data work is only spreadsheets, but informatics can shape safety, access, workflow, and quality improvement.',
    dayInTheLife:
      'An informatics analyst may build reports, review trends, meet clinical teams, and translate data into practical questions.',
    tags: ['informatics', 'data', 'quality-improvement'],
  }),
  createCareer({
    id: 'career-medical-laboratory-scientist-hospital',
    slug: 'hospital-medical-laboratory-scientist',
    title: 'Hospital Medical Laboratory Scientist',
    shortDescription:
      'A laboratory professional who analyzes samples and reports accurate results for hospital care teams.',
    pathway,
    overview:
      'Hospital medical laboratory scientists use instruments, quality checks, and scientific reasoning to support care from behind the scenes.',
    education:
      'Medical laboratory scientists often complete a bachelor-level laboratory science program and certification requirements.',
    misconception:
      'People may think lab professionals are disconnected from care, but teams depend on their accuracy and timing.',
    dayInTheLife:
      'A laboratory scientist may process samples, monitor instruments, review quality controls, and communicate important results.',
    tags: ['laboratory', 'diagnostics', 'science'],
    blsUrl:
      'https://www.bls.gov/ooh/healthcare/clinical-laboratory-technologists-and-technicians.htm',
  }),
  createCareer({
    id: 'career-radiology-technologist-hospital',
    slug: 'hospital-radiology-technologist',
    title: 'Hospital Radiology Technologist',
    shortDescription:
      'An imaging professional who creates medical images and supports patients through diagnostic imaging experiences.',
    pathway,
    overview:
      'Hospital radiology technologists combine equipment skill, patient communication, positioning, and safety practices.',
    education:
      'Radiologic technologists typically complete an accredited imaging program and certification or licensure requirements.',
    misconception:
      'People may think imaging is just pressing a button, but image quality, safety, and patient trust all matter.',
    dayInTheLife:
      'A radiology technologist may prepare imaging rooms, explain steps, position patients, operate equipment, and coordinate with care teams.',
    tags: ['imaging', 'medical-technology', 'diagnostics'],
    blsUrl:
      'https://www.bls.gov/ooh/healthcare/radiologic-technologists.htm',
  }),
  createCareer({
    id: 'career-diagnostic-medical-sonographer',
    slug: 'diagnostic-medical-sonographer',
    title: 'Diagnostic Medical Sonographer',
    shortDescription:
      'An imaging professional who uses ultrasound technology to create images that support healthcare teams.',
    pathway,
    overview:
      'Diagnostic medical sonographers use specialized equipment, anatomy knowledge, and patient communication in many hospital and clinic settings.',
    education:
      'Sonographers usually complete an accredited sonography program and may earn specialty credentials.',
    misconception:
      'People may think sonography only relates to pregnancy, but ultrasound supports many areas of healthcare.',
    dayInTheLife:
      'A sonographer may prepare equipment, explain the exam, capture images, document observations, and coordinate with interpreting clinicians.',
    tags: ['ultrasound', 'imaging', 'technology'],
    blsUrl:
      'https://www.bls.gov/ooh/healthcare/diagnostic-medical-sonographers.htm',
  }),
  createCareer({
    id: 'career-sterile-processing-technician',
    slug: 'sterile-processing-technician',
    title: 'Sterile Processing Technician',
    shortDescription:
      'A behind-the-scenes professional who cleans, prepares, and tracks instruments used in patient care.',
    pathway,
    overview:
      'Sterile processing technicians support safety by preparing instruments and supplies for procedural and surgical teams.',
    education:
      'Training may include sterile processing programs, employer training, and certification depending on workplace requirements.',
    misconception:
      'People may overlook this role because it is behind the scenes, but prepared instruments are essential to safe care.',
    dayInTheLife:
      'A sterile processing technician may decontaminate instruments, inspect sets, run sterilization equipment, and track supplies.',
    tags: ['sterile-processing', 'safety', 'behind-the-scenes'],
  }),
  createCareer({
    id: 'career-hospital-medical-coder',
    slug: 'hospital-medical-coder',
    title: 'Hospital Medical Coder',
    shortDescription:
      'A health information professional who translates documentation into standardized codes for records, billing, and reporting.',
    pathway,
    overview:
      'Hospital medical coders support accurate records, billing, quality reporting, and data consistency across complex healthcare systems.',
    education:
      'Pathways may include medical coding certificates, health information programs, and professional coding credentials.',
    misconception:
      'People may think coding is only billing, but it also supports data, quality measures, research, and system planning.',
    dayInTheLife:
      'A medical coder may review documentation, assign codes, clarify records, and collaborate with billing or health information teams.',
    tags: ['medical-coding', 'health-information', 'operations'],
  }),
  createCareer({
    id: 'career-patient-transport-coordinator',
    slug: 'patient-transport-coordinator',
    title: 'Patient Transport Coordinator',
    shortDescription:
      'A hospital operations professional who helps patients move safely between departments and services.',
    pathway,
    overview:
      'Patient transport coordinators support hospital flow by matching patient movement needs with timing, equipment, and team communication.',
    education:
      'Training varies by hospital and may include patient safety, logistics, communication, and transport systems.',
    misconception:
      'People may think transport is just moving people, but coordination affects schedules, safety, and department flow.',
    dayInTheLife:
      'A transport coordinator may prioritize requests, communicate with units, assign transport staff, and monitor delays.',
    tags: ['patient-flow', 'hospital-operations', 'coordination'],
  }),
  createCareer({
    id: 'career-hospital-chaplain',
    slug: 'hospital-chaplain',
    title: 'Hospital Chaplain',
    shortDescription:
      'A spiritual care professional who supports patients, families, and staff during stressful healthcare moments.',
    pathway,
    overview:
      'Hospital chaplains provide emotional and spiritual support while respecting many beliefs, cultures, and sources of meaning.',
    education:
      'Hospital chaplains often complete theological or spiritual care education, clinical pastoral education, and certification pathways.',
    misconception:
      'People may think chaplains only serve one faith tradition, but hospital chaplains support many forms of meaning and concern.',
    dayInTheLife:
      'A chaplain may visit patients, support families, join care team discussions, and help staff process difficult moments.',
    tags: ['chaplaincy', 'spiritual-care', 'support'],
  }),
  createCareer({
    id: 'career-hospital-patient-advocate',
    slug: 'hospital-patient-advocate',
    title: 'Hospital Patient Advocate',
    shortDescription:
      'A patient experience professional who helps patients and families communicate concerns, questions, and needs.',
    pathway,
    overview:
      'Hospital patient advocates support respectful communication, process understanding, and problem-solving between patients and healthcare systems.',
    education:
      'Pathways may include healthcare experience, social services, communications, patient relations, or advocacy training.',
    misconception:
      'People may think advocates oppose care teams, but strong advocacy supports understanding and respectful communication.',
    dayInTheLife:
      'A patient advocate may listen to concerns, explain hospital processes, connect departments, and track patient experience themes.',
    tags: ['patient-advocacy', 'experience', 'communication'],
  }),
  createCareer({
    id: 'career-quality-improvement-specialist',
    slug: 'quality-improvement-specialist',
    title: 'Quality Improvement Specialist',
    shortDescription:
      'A healthcare systems professional who studies workflows and helps teams improve safety, access, and outcomes.',
    pathway,
    overview:
      'Quality improvement specialists help teams use data, feedback, and process changes to make healthcare systems work better.',
    education:
      'Pathways may include nursing, public health, healthcare administration, informatics, engineering, or quality improvement training.',
    misconception:
      'People may think quality work is criticism, but it is usually collaborative problem-solving with frontline teams.',
    dayInTheLife:
      'A quality specialist may review process data, meet with departments, map workflows, and support improvement projects.',
    tags: ['quality-improvement', 'systems', 'data'],
  }),
  createCareer({
    id: 'career-supply-chain-specialist-hospital',
    slug: 'hospital-supply-chain-specialist',
    title: 'Hospital Supply Chain Specialist',
    shortDescription:
      'An operations professional who helps hospital teams have the supplies and equipment they need.',
    pathway,
    overview:
      'Hospital supply chain specialists support ordering, tracking, stocking, and problem-solving so departments can function reliably.',
    education:
      'Pathways may include supply chain, business, healthcare operations, logistics, or employer-based training.',
    misconception:
      'People may think supplies simply appear, but hospital readiness depends on planning, tracking, and communication.',
    dayInTheLife:
      'A supply chain specialist may monitor inventory, respond to shortages, communicate with departments, and coordinate deliveries.',
    tags: ['supply-chain', 'operations', 'logistics'],
  }),
  createCareer({
    id: 'career-respiratory-therapist-hospital',
    slug: 'hospital-respiratory-therapist',
    title: 'Hospital Respiratory Therapist',
    shortDescription:
      'A respiratory care professional who supports breathing needs across hospital units and urgent care situations.',
    pathway,
    overview:
      'Hospital respiratory therapists work with specialized equipment, patients, and teams in emergency, intensive care, and general hospital settings.',
    education:
      'Respiratory therapists typically complete an accredited respiratory therapy program and licensure or credentialing requirements.',
    misconception:
      'People may think respiratory therapy is one task, but therapists support many levels of breathing care and equipment.',
    dayInTheLife:
      'A respiratory therapist may check equipment, respond to units, support patients, and collaborate with nurses and physicians.',
    tags: ['respiratory-care', 'hospital', 'technology'],
    blsUrl:
      'https://www.bls.gov/ooh/healthcare/respiratory-therapists.htm',
  }),
  createCareer({
    id: 'career-lab-accessioning-specialist',
    slug: 'lab-accessioning-specialist',
    title: 'Lab Accessioning Specialist',
    shortDescription:
      'A laboratory operations professional who receives, labels, tracks, and routes samples for testing.',
    pathway,
    overview:
      'Lab accessioning specialists protect accuracy at the first step of the laboratory process by making sure samples and information match.',
    education:
      'Training varies by lab and may include laboratory operations, specimen handling, safety, and health information systems.',
    misconception:
      'People may overlook this role, but a sample must be correctly identified and routed before testing can support care.',
    dayInTheLife:
      'An accessioning specialist may receive samples, verify labels, enter information, route specimens, and communicate with collection teams.',
    tags: ['laboratory', 'operations', 'accuracy'],
  }),
];
