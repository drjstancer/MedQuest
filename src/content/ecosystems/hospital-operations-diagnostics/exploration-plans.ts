import type { ExplorationPlan } from '../../seed-builders';

const intro =
  'Inside the hospital, the most important work is not always the most visible. The scene reveals how information, equipment, people, and timing connect across departments.';

export const hospitalOperationsDiagnosticsPlans: ExplorationPlan[] =
  [
    {
      id: 'exploration-command-center-board',
      slug: 'command-center-board',
      title: 'The Command Center Board',
      cinematicIntro:
        `${intro} Screens show room status, staffing concerns, and patient flow while one leader studies how the whole hospital is moving.`,
      archetype: 'healthcare-operations',
      difficulty: 'Easy',
      estimatedDurationSeconds: 60,
      featuredCareerId: 'career-hospital-administrator',
      revealTitle: 'Hospital Administrator',
      revealNarrative:
        'Hospital administrators help teams, departments, budgets, and policies work together. Students learn that healthcare leadership can shape access, safety, staffing, and patient experience without being bedside care.',
      tags: ['administration', 'hospital-operations', 'leadership'],
      recommendedNext: ['patient-flow-route', 'quality-map'],
      reflectionPrompt:
        'Could you see yourself supporting healthcare by improving systems, resources, and teamwork across a whole hospital?',
      clues: [
        { text: 'This professional focuses on how departments, staffing, resources, and patient services work together.', category: 'systems' },
        { text: 'Their environment may include meetings, operations dashboards, budget conversations, and department planning.', category: 'environment' },
        { text: 'They collaborate with clinical leaders, finance teams, patient experience teams, and community partners.', category: 'teamwork' },
        { text: 'Their communication style must translate big-picture goals into practical decisions for many teams.', category: 'communication' },
        { text: 'A misconception is that this role is separate from care, even though operations can affect every patient experience.', category: 'patient-care' },
      ],
    },
    {
      id: 'exploration-imaging-hallway',
      slug: 'imaging-hallway',
      title: 'The Imaging Hallway',
      cinematicIntro:
        `${intro} A patient is wheeled into a bright room where one professional explains the process, checks safety details, and prepares specialized equipment.`,
      archetype: 'medical-technology',
      difficulty: 'Easy',
      estimatedDurationSeconds: 60,
      featuredCareerId: 'career-radiology-technologist-hospital',
      revealTitle: 'Hospital Radiology Technologist',
      revealNarrative:
        'Hospital radiology technologists combine technology, safety, positioning, and communication. This exploration helps students see imaging as a patient-facing career, not just machine operation.',
      tags: ['imaging', 'technology', 'diagnostics'],
      recommendedNext: ['ultrasound-room', 'quiet-specimen-window'],
      reflectionPrompt:
        'Would you enjoy a role that blends technology, patient reassurance, and careful attention to detail?',
      clues: [
        { text: 'This professional works with imaging equipment in a hospital or diagnostic department.', category: 'tools' },
        { text: 'They interact directly with patients while preparing them for images the care team will use.', category: 'patient-care' },
        { text: 'They coordinate with nurses, physicians, radiologists, transport teams, and other imaging staff.', category: 'teamwork' },
        { text: 'Their problem-solving includes safety checks, positioning, timing, and image quality.', category: 'critical-thinking' },
        { text: 'A common misconception is that this career is simply taking pictures.', category: 'technology' },
      ],
    },
    {
      id: 'exploration-supply-shelf',
      slug: 'supply-shelf',
      title: 'The Supply Shelf',
      cinematicIntro:
        `${intro} A unit opens a cabinet during a busy shift and finds exactly what it needs. Somewhere else, a specialist has been watching patterns before anyone noticed a shortage.`,
      archetype: 'healthcare-operations',
      difficulty: 'Medium',
      estimatedDurationSeconds: 75,
      featuredCareerId: 'career-supply-chain-specialist-hospital',
      revealTitle: 'Hospital Supply Chain Specialist',
      revealNarrative:
        'Hospital supply chain specialists make readiness possible by coordinating supplies, deliveries, inventory, and shortages. This behind-the-scenes role shows how logistics supports care.',
      tags: ['supply-chain', 'logistics', 'behind-the-scenes'],
      recommendedNext: ['sterile-processing-room', 'command-center-board'],
      reflectionPrompt:
        'How might planning, organization, and communication help clinical teams feel prepared during busy days?',
      clues: [
        { text: 'This professional works with inventory systems, supply rooms, ordering, and delivery schedules.', category: 'tools' },
        { text: 'They may have limited patient interaction but affect whether teams have what they need.', category: 'systems' },
        { text: 'They collaborate with nursing units, operating rooms, vendors, finance, and warehouse teams.', category: 'teamwork' },
        { text: 'Their schedule can include urgent requests, routine stocking, and long-term planning.', category: 'skills' },
        { text: 'Their problem-solving often begins before a shortage becomes visible to patients.', category: 'critical-thinking' },
      ],
    },
    {
      id: 'exploration-quiet-specimen-window',
      slug: 'quiet-specimen-window',
      title: 'The Quiet Specimen Window',
      cinematicIntro:
        `${intro} A labeled sample arrives through a small window. One professional checks every detail before the information can travel deeper into the lab.`,
      archetype: 'diagnostic-mystery',
      difficulty: 'Medium',
      estimatedDurationSeconds: 75,
      featuredCareerId: 'career-lab-accessioning-specialist',
      revealTitle: 'Lab Accessioning Specialist',
      revealNarrative:
        'Lab accessioning specialists protect accuracy at the start of the laboratory process. Students learn that diagnostics depend on careful identification, routing, and information flow.',
      tags: ['laboratory', 'accuracy', 'operations'],
      recommendedNext: ['midnight-lab-bench', 'hospital-data-thread'],
      reflectionPrompt:
        'Would you enjoy a healthcare role where careful organization protects the accuracy of everything that happens next?',
      clues: [
        { text: 'This professional receives and tracks samples before testing begins.', category: 'environment' },
        { text: 'They use labels, scanners, laboratory information systems, and routing rules.', category: 'technology' },
        { text: 'They coordinate with collection teams, laboratory scientists, couriers, and hospital units.', category: 'teamwork' },
        { text: 'Their patient interaction may be low, but their accuracy matters to patient care.', category: 'patient-care' },
        { text: 'Their problem-solving focuses on matching the right sample with the right information.', category: 'critical-thinking' },
      ],
    },
    {
      id: 'exploration-ultrasound-room',
      slug: 'ultrasound-room',
      title: 'The Ultrasound Room',
      cinematicIntro:
        `${intro} The room lights dim and a screen flickers on. One professional guides the patient through an exam while translating anatomy into useful images.`,
      archetype: 'medical-technology',
      difficulty: 'Medium',
      estimatedDurationSeconds: 75,
      featuredCareerId: 'career-diagnostic-medical-sonographer',
      revealTitle: 'Diagnostic Medical Sonographer',
      revealNarrative:
        'Diagnostic medical sonographers use ultrasound technology across many areas of healthcare. Their work combines patient communication, anatomy knowledge, and precise image capture.',
      tags: ['ultrasound', 'imaging', 'patient-care'],
      recommendedNext: ['imaging-hallway', 'breathing-equipment-check'],
      reflectionPrompt:
        'What interests you about a role that uses technology while staying close to the patient experience?',
      clues: [
        { text: 'This professional uses sound-wave imaging technology rather than X-rays.', category: 'technology' },
        { text: 'They often explain the exam while helping patients stay comfortable and still.', category: 'communication' },
        { text: 'They work in hospitals, clinics, specialty offices, and university medical centers.', category: 'environment' },
        { text: 'They collaborate with interpreting clinicians and other imaging team members.', category: 'teamwork' },
        { text: 'A misconception is that this career only relates to pregnancy imaging.', category: 'education' },
      ],
    },
    {
      id: 'exploration-breathing-equipment-check',
      slug: 'breathing-equipment-check',
      title: 'The Breathing Equipment Check',
      cinematicIntro:
        `${intro} A therapist moves through several units, checking equipment and answering calls from teams who need respiratory support.`,
      archetype: 'emergency-response',
      difficulty: 'Medium',
      estimatedDurationSeconds: 75,
      featuredCareerId: 'career-respiratory-therapist-hospital',
      revealTitle: 'Hospital Respiratory Therapist',
      revealNarrative:
        'Hospital respiratory therapists support breathing needs across emergency, intensive care, and general units. Their role highlights specialized technology, patient interaction, and rapid teamwork.',
      tags: ['respiratory-care', 'hospital', 'technology'],
      recommendedNext: ['ultrasound-room', 'patient-flow-route'],
      reflectionPrompt:
        'Could you see yourself in a role that moves across hospital units and combines equipment skill with patient support?',
      clues: [
        { text: 'This professional works with breathing equipment across many parts of the hospital.', category: 'tools' },
        { text: 'Their schedule may involve routine checks and urgent calls from different units.', category: 'skills' },
        { text: 'They collaborate with nurses, physicians, emergency teams, and intensive care teams.', category: 'teamwork' },
        { text: 'They interact directly with patients while also managing specialized technology.', category: 'patient-care' },
        { text: 'A misconception is that this role involves only one kind of breathing treatment.', category: 'critical-thinking' },
      ],
    },
    {
      id: 'exploration-patient-flow-route',
      slug: 'patient-flow-route',
      title: 'The Patient Flow Route',
      cinematicIntro:
        `${intro} A patient needs to move from one department to another while several teams wait. One coordinator studies timing, equipment, and safe movement through crowded hallways.`,
      archetype: 'healthcare-operations',
      difficulty: 'Medium',
      estimatedDurationSeconds: 75,
      featuredCareerId: 'career-patient-transport-coordinator',
      revealTitle: 'Patient Transport Coordinator',
      revealNarrative:
        'Patient transport coordinators help hospitals move people safely and efficiently. This role teaches students that timing, communication, and flow can shape the entire hospital experience.',
      tags: ['patient-flow', 'coordination', 'operations'],
      recommendedNext: ['command-center-board', 'supply-shelf'],
      reflectionPrompt:
        'How can movement, timing, and communication affect whether a hospital feels organized and respectful?',
      clues: [
        { text: 'This professional coordinates movement between hospital departments.', category: 'systems' },
        { text: 'They use tracking systems, requests, timing information, and sometimes equipment needs.', category: 'tools' },
        { text: 'They communicate with units, imaging teams, transport staff, nurses, and procedural areas.', category: 'communication' },
        { text: 'Their work may be fast-paced but is focused on safe flow rather than clinical decisions.', category: 'environment' },
        { text: 'A misconception is that patient movement is simple, even when many schedules depend on it.', category: 'critical-thinking' },
      ],
    },
    {
      id: 'exploration-midnight-lab-bench',
      slug: 'midnight-lab-bench',
      title: 'The Midnight Lab Bench',
      cinematicIntro:
        `${intro} Long after visitors leave, instruments hum in a bright lab. One scientist watches quality controls before releasing information the care team is waiting for.`,
      archetype: 'diagnostic-mystery',
      difficulty: 'Medium',
      estimatedDurationSeconds: 75,
      featuredCareerId:
        'career-medical-laboratory-scientist-hospital',
      revealTitle: 'Hospital Medical Laboratory Scientist',
      revealNarrative:
        'Hospital medical laboratory scientists support care through accurate testing and scientific reasoning. This exploration highlights a less visible career that care teams rely on every day and night.',
      tags: ['laboratory', 'diagnostics', 'science'],
      recommendedNext: ['quiet-specimen-window', 'hospital-data-thread'],
      reflectionPrompt:
        'Would you enjoy healthcare work where science, precision, and quiet responsibility support patients from behind the scenes?',
      clues: [
        { text: 'This professional works in a laboratory with samples, instruments, controls, and result reporting.', category: 'environment' },
        { text: 'Their patient interaction may be limited, but care teams depend on their accuracy.', category: 'patient-care' },
        { text: 'They collaborate with phlebotomy teams, nurses, physicians, and infection prevention staff.', category: 'teamwork' },
        { text: 'Their schedule may include evenings, nights, weekends, or rotating shifts in hospital settings.', category: 'skills' },
        { text: 'Their problem-solving style is scientific, careful, and quality-focused.', category: 'critical-thinking' },
      ],
    },
    {
      id: 'exploration-hospital-data-thread',
      slug: 'hospital-data-thread',
      title: 'The Hospital Data Thread',
      cinematicIntro:
        `${intro} A dashboard shows delays, trends, and questions no single person could see alone. One analyst helps turn data into a conversation the care team can use.`,
      archetype: 'healthcare-operations',
      difficulty: 'Hard',
      estimatedDurationSeconds: 90,
      featuredCareerId: 'career-health-informatics-analyst',
      revealTitle: 'Health Informatics Analyst',
      revealNarrative:
        'Health informatics analysts connect healthcare data with real operational questions. Their work helps students see how technology and analysis can support safer, smarter systems.',
      tags: ['informatics', 'data', 'quality'],
      recommendedNext: ['quality-map', 'system-login-alert'],
      reflectionPrompt:
        'Could you see yourself using data to help healthcare teams ask better questions and improve systems?',
      clues: [
        { text: 'This professional works with healthcare data, dashboards, reports, and patterns across systems.', category: 'technology' },
        { text: 'They may not provide direct care, but their analysis can shape workflow and quality improvement.', category: 'systems' },
        { text: 'They collaborate with clinicians, administrators, IT teams, and quality specialists.', category: 'teamwork' },
        { text: 'Their communication style must make complicated data understandable and useful.', category: 'communication' },
        { text: 'A misconception is that this role is only about spreadsheets instead of healthcare problem-solving.', category: 'critical-thinking' },
      ],
    },
    {
      id: 'exploration-sterile-processing-room',
      slug: 'sterile-processing-room',
      title: 'The Sterile Processing Room',
      cinematicIntro:
        `${intro} Behind restricted doors, trays of instruments move through a careful sequence. A technician knows safety depends on details most visitors never see.`,
      archetype: 'healthcare-operations',
      difficulty: 'Hard',
      estimatedDurationSeconds: 90,
      featuredCareerId: 'career-sterile-processing-technician',
      revealTitle: 'Sterile Processing Technician',
      revealNarrative:
        'Sterile processing technicians support safe care by preparing and tracking instruments. This overlooked profession helps students understand that behind-the-scenes reliability is part of patient safety.',
      tags: ['sterile-processing', 'safety', 'behind-the-scenes'],
      recommendedNext: ['supply-shelf', 'quality-map'],
      reflectionPrompt:
        'Would you enjoy a role where precision and responsibility matter even when patients may never see your work?',
      clues: [
        { text: 'This professional prepares instruments and supplies used by procedural and surgical teams.', category: 'tools' },
        { text: 'Their work environment is highly organized and follows strict safety processes.', category: 'environment' },
        { text: 'They collaborate with operating rooms, procedural areas, supply teams, and infection prevention staff.', category: 'teamwork' },
        { text: 'Their problem-solving focuses on inspection, tracking, timing, and readiness.', category: 'critical-thinking' },
        { text: 'A misconception is that behind-the-scenes work is less connected to patient safety.', category: 'patient-care' },
      ],
    },
    {
      id: 'exploration-system-login-alert',
      slug: 'system-login-alert',
      title: 'The System Login Alert',
      cinematicIntro:
        `${intro} A clinician cannot open the chart before rounds. One technology specialist follows the alert trail, knowing that digital access is part of modern care.`,
      archetype: 'medical-technology',
      difficulty: 'Hard',
      estimatedDurationSeconds: 90,
      featuredCareerId: 'career-healthcare-it-specialist',
      revealTitle: 'Healthcare IT Specialist',
      revealNarrative:
        'Healthcare IT specialists support the digital systems that hospitals rely on. Students learn that technology careers can directly affect communication, access, privacy, and care team workflow.',
      tags: ['healthcare-it', 'technology', 'systems'],
      recommendedNext: ['hospital-data-thread', 'command-center-board'],
      reflectionPrompt:
        'How could technology support become a healthcare career when every team depends on digital information?',
      clues: [
        { text: 'This professional troubleshoots digital systems used by healthcare teams.', category: 'technology' },
        { text: 'They may work across departments, help desks, server systems, devices, and electronic health records.', category: 'environment' },
        { text: 'They coordinate with clinicians, vendors, cybersecurity teams, informatics analysts, and administrators.', category: 'teamwork' },
        { text: 'Their patient interaction may be indirect, but delays or access problems can affect care workflow.', category: 'systems' },
        { text: 'Their problem-solving combines technical knowledge with calm support for busy staff.', category: 'communication' },
      ],
    },
    {
      id: 'exploration-quiet-room-call',
      slug: 'quiet-room-call',
      title: 'The Quiet Room Call',
      cinematicIntro:
        `${intro} A family asks for someone to sit with them before the next conversation. A calm presence enters the room, ready to listen without rushing to fix everything.`,
      archetype: 'longitudinal-care',
      difficulty: 'Hard',
      estimatedDurationSeconds: 90,
      featuredCareerId: 'career-hospital-chaplain',
      revealTitle: 'Hospital Chaplain',
      revealNarrative:
        'Hospital chaplains support emotional and spiritual needs during stressful healthcare moments. This career helps students see care as more than procedures, including meaning, presence, and respect.',
      tags: ['chaplaincy', 'support', 'patient-experience'],
      recommendedNext: ['quality-map', 'hospital-data-thread'],
      reflectionPrompt:
        'What does it mean to support someone in healthcare when the most important tool is listening?',
      clues: [
        { text: 'This professional supports patients, families, and staff during emotionally difficult moments.', category: 'patient-care' },
        { text: 'They may work in hospital rooms, quiet spaces, staff areas, or family meeting rooms.', category: 'environment' },
        { text: 'They collaborate with nurses, physicians, social workers, ethics teams, and patient experience staff.', category: 'teamwork' },
        { text: 'Their communication style emphasizes listening, presence, respect, and meaning.', category: 'communication' },
        { text: 'A misconception is that they only serve one faith tradition or only appear in one type of situation.', category: 'community' },
      ],
    },
    {
      id: 'exploration-quality-map',
      slug: 'quality-map',
      title: 'The Quality Map',
      cinematicIntro:
        `${intro} A team gathers around a process map marked with sticky notes. One specialist helps turn frustration into a safer, clearer workflow.`,
      archetype: 'healthcare-operations',
      difficulty: 'Medium',
      estimatedDurationSeconds: 75,
      featuredCareerId: 'career-quality-improvement-specialist',
      revealTitle: 'Quality Improvement Specialist',
      revealNarrative:
        'Quality improvement specialists help teams study and improve healthcare systems. Students learn that better care often comes from collaboration, feedback, and careful workflow design.',
      tags: ['quality-improvement', 'systems', 'teamwork'],
      recommendedNext: ['hospital-data-thread', 'sterile-processing-room'],
      reflectionPrompt:
        'Would you enjoy helping teams improve a process so patients and staff have a better experience?',
      clues: [
        { text: 'This professional studies workflows, data, feedback, and repeated problems in healthcare systems.', category: 'systems' },
        { text: 'They may work in hospitals, clinics, quality departments, or university medical centers.', category: 'environment' },
        { text: 'They collaborate with frontline staff, leaders, informatics analysts, and patient safety teams.', category: 'teamwork' },
        { text: 'Their tools include process maps, measures, meetings, surveys, and improvement plans.', category: 'tools' },
        { text: 'A misconception is that quality work is about blame instead of shared problem-solving.', category: 'communication' },
      ],
    },
  ];
