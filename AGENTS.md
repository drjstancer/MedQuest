<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes - APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

# MedQuest Agent Instructions

## Product Definition

MedQuest is an immersive healthcare career exploration experience for students.

MedQuest is not a healthcare simulation, diagnostic trainer, medical advice tool, clinical skills platform, or substitute for formal healthcare education. The goal is to help students explore who works in healthcare, how different professionals collaborate, what pathways exist, and where a student might see themselves in the healthcare ecosystem.

The experience should feel cinematic, emotionally engaging, and student-centered while staying educationally clear and age appropriate.

## Educational Purpose

Every MedQuest feature, career profile, clue, exploration, and reflection should support one or more of these purposes:

- Career exposure: introduce students to healthcare careers they may or may not already know.
- Interdisciplinary awareness: show how healthcare work depends on teams, handoffs, communication, and shared responsibility.
- Identity exploration: help students notice what kinds of work, environments, values, and strengths appeal to them.
- Confidence-building: make healthcare pathways feel discoverable and possible, especially for students without prior exposure.
- Healthcare pathway exploration: connect careers to education, training, work settings, responsibilities, and future learning resources.

Do not turn MedQuest into clinical training. Students may encounter healthcare scenarios, but the task is to identify roles, understand teamwork, and reflect on fit, not to diagnose, treat, prescribe, or practice clinical decision-making.

## Project Overview

MedQuest is built with:

- Next.js 16
- React
- TypeScript
- Tailwind
- Supabase
- Vercel deployment

The project focuses on:

- interactive healthcare explorations
- career discovery
- educational immersion
- scalable exploration content
- stable production builds

## Current Priorities

1. Supabase migration
2. Content scalability
3. Reusable exploration architecture
4. Stable production builds
5. Consistent educational content structure

## Constraints

- Maintain the current cinematic UX.
- Do not redesign the educational flow unless explicitly requested.
- Do not overengineer auth, admin, or CMS systems.
- Preserve the current routing structure.
- Preserve IDs and slugs exactly unless the user explicitly requests migration work.
- Keep content appropriate for middle school, high school, and early college students.
- Avoid medical advice, diagnosis, treatment instructions, or clinical training language.

## Canonical Schemas

Use these schemas as the canonical application shape. Supabase tables may use snake_case column names, but application code should map data into these camelCase fields.

### Career

```ts
interface Career {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  pathway: string;
  overview: string;
  education: string;
  salaryRange: string;
  jobOutlook: string;
  whatSurprisedMe: string;
  whatIWishIKnew: string;
  misconception: string;
  dayInTheLife: string;
  blsUrl: string;
  learnMoreUrl?: string;
  youtubeVideoId?: string;
  youtubeSearchUrl?: string;
  tags: string[];
}
```

### Exploration

```ts
interface Exploration {
  id: string;
  slug: string;
  title: string;
  cinematicIntro: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  archetype:
    | 'emergency-response'
    | 'longitudinal-care'
    | 'diagnostic-mystery'
    | 'rehabilitation'
    | 'public-health'
    | 'mental-health'
    | 'surgical-care'
    | 'healthcare-operations'
    | 'community-care'
    | 'medical-technology';
  estimatedDurationSeconds: number;
  featuredCareerId: string;
  clueIds: string[];
  reflectionPromptIds: string[];
  revealTitle: string;
  revealNarrative: string;
  recommendedNext: string[];
  tags: string[];
}
```

### Clue

```ts
interface Clue {
  id: string;
  explorationId: string;
  careerId: string;
  order: number;
  clueText: string;
  timePenaltySeconds: number;
  category:
    | 'environment'
    | 'skills'
    | 'tools'
    | 'communication'
    | 'teamwork'
    | 'education'
    | 'patient-care'
    | 'critical-thinking'
    | 'systems'
    | 'technology'
    | 'community';
}
```

### ReflectionPrompt

```ts
interface ReflectionPrompt {
  id: string;
  explorationId: string;
  prompt: string;
}
```

### JourneyEntry

```ts
interface JourneyEntry {
  explorationId: string;
  explorationTitle: string;
  selectedCareerId?: string;
  selectedCareer: string;
  reflectionChoice: string;
  wasCorrect: boolean;
  completedAt: string;
}
```

## Naming And ID Conventions

- IDs are stable relationship keys.
- Slugs are stable route and URL keys.
- Use `explorationId`, not `explorationSlug`, for relationships.
- Use `careerId`, not `careerSlug`, for relationships.
- Use camelCase in TypeScript and React props.
- Use snake_case in Supabase columns.
- Map snake_case database fields to camelCase app fields at the data-access boundary.
- Do not rename existing IDs or slugs unless doing an explicit migration.
- Prefer descriptive, lowercase, hyphenated IDs:
  - `career-emergency-medical-technician`
  - `exploration-collapse-on-the-court`
  - `clue-collapse-court-1`
  - `reflection-collapse-court-1`
- Career slugs should be human-readable route segments:
  - `emergency-medical-technician`
  - `family-medicine-physician`
  - `radiologic-technologist`
- Exploration slugs should be short story titles:
  - `collapse-on-the-court`
  - `the-silent-decline`
  - `the-missing-handoff`
- Preserve deprecated field removals:
  - Do not use `professionalAssociation`.
  - Do not use `youtubeSearch`.
  - Use `youtubeSearchUrl` if a search URL is needed.

## Exploration Difficulty Philosophy

Difficulty is about career visibility, ambiguity, and clue nuance. It is not about medical complexity.

### Easy

Easy explorations use recognizable healthcare environments and direct clues. Students should be able to make progress with common knowledge and clear role signals.

Good Easy careers and settings:

- EMT in an emergency response scene
- Registered nurse in a hospital unit
- Physical therapist in rehabilitation
- Dentist in an oral health setting

Easy clues may directly reference visible tools, settings, or responsibilities, while still avoiding giveaway wording too early.

### Medium

Medium explorations include more interdisciplinary overlap and nuanced clues. Students may need to distinguish between professions that work in similar environments or share responsibilities.

Good Medium themes:

- primary care coordination
- sports medicine teamwork
- imaging and diagnosis support
- chronic care management
- behavioral health collaboration

Medium clues should show how roles overlap and then gradually reveal the distinguishing responsibility, training pathway, or work pattern.

### Hard

Hard explorations feature subtle, less visible, administrative, systems-level, technical, public health, or overlapping professions. Students should learn that healthcare includes many important careers beyond direct bedside care.

Good Hard themes:

- health informatics
- medical laboratory science
- care coordination
- public health epidemiology
- sterile processing
- health administration
- respiratory therapy in complex care
- occupational therapy versus physical therapy distinctions

Hard clues should remain fair and educational. They can be subtle, but they must not be obscure trivia.

## Cinematic Storytelling Tone

MedQuest should feel like an inviting educational mystery, not a fear-based emergency simulator.

Tone should be:

- cinematic but grounded
- emotionally engaging but not traumatic
- suspenseful but age appropriate
- respectful toward patients, families, and healthcare workers
- clear enough for middle school students
- mature enough for high school and early college students
- optimistic about learning and career discovery

Avoid:

- graphic clinical detail
- gore, shock, or panic
- implying the student is responsible for patient outcomes
- clinical orders or treatment instructions
- stereotypes about professions
- making one healthcare role seem more important than the team
- sensationalizing illness, disability, mental health, trauma, poverty, or death

Good cinematic framing:

- A gym falls silent as a student athlete collapses, and a team moves quickly into action.
- A patient keeps returning with concerns, and one professional notices a pattern across visits.
- A community clinic prepares for a surge in patients after a local health alert.
- A quiet hospital department processes information that will shape the care team's next steps.

## Clue-Writing Rules

Clues teach students how healthcare roles work. They should be accurate, concrete, and focused on role understanding.

Each clue should do at least one of the following:

- reveal a work environment
- describe a responsibility
- show a collaboration pattern
- highlight a communication skill
- identify tools or technology
- connect to education or training
- show patient, family, community, or team interaction
- distinguish the featured career from nearby careers

Clue progression should move from broad to specific:

1. Setting or situation clue
2. Role behavior or teamwork clue
3. Distinguishing responsibility, tool, or pathway clue

Rules:

- Do not ask students to diagnose or choose treatment.
- Do not use jargon without context.
- Do not make clues dependent on obscure facts.
- Do not reveal the exact career title in the first clue.
- Do not write clues that shame incorrect guesses.
- Keep clues concise enough to read during gameplay.
- Use `timePenaltySeconds` to support game rhythm, not to punish learning harshly.

## Reflection Prompt Philosophy

Reflections should help students connect the exploration to their own curiosity, values, strengths, interests, and sense of belonging.

Reflection prompts should support:

- career curiosity
- self-efficacy
- teamwork awareness
- confidence-building
- identity exploration
- interest discovery
- recognition of personal strengths
- awareness that healthcare has many pathways

Good reflection prompts:

- What part of this role would make you curious to learn more?
- Would you enjoy a career where teamwork and quick communication matter every day?
- Which strength of yours might fit this kind of healthcare environment?
- How would it feel to support patients over many visits instead of one moment?
- What surprised you about this profession's role on the care team?

Avoid prompts that:

- ask for personal medical disclosure
- ask students to relive trauma
- imply only certain personalities belong in healthcare
- rank careers by prestige
- frame wrong guesses as failure

## Healthcare Ecosystem Organization

Organize careers and explorations so students see healthcare as an ecosystem, not a ladder of prestige.

Recommended pathway groups:

- Emergency and acute care
- Nursing and bedside care
- Primary care and longitudinal care
- Rehabilitation and movement
- Mental and behavioral health
- Diagnostics and laboratory medicine
- Imaging and medical technology
- Public health and community care
- Pharmacy and medication safety
- Oral and vision health
- Surgical and procedural care
- Healthcare operations, administration, and informatics

Explorations should be distributed across:

- direct patient care roles
- behind-the-scenes roles
- technical roles
- community-facing roles
- coordinating and systems-level roles
- varied education lengths and entry points

Recommended-next links should help students compare related careers or discover a different part of the ecosystem. Avoid always routing students toward the most familiar or highest-status professions.

## Supabase Expectations

Supabase is the canonical scalable content store.

Expected tables:

- `careers`
- `explorations`
- `clues`
- `reflections`

Optional future tables:

- `journey_entries`
- `career_pathways`
- `exploration_recommendations`
- `student_sessions`

Database naming:

- Tables use plural lowercase snake_case names.
- Columns use snake_case.
- Application code maps to camelCase.
- Relationship columns use IDs:
  - `career_id`
  - `exploration_id`
  - `featured_career_id`
- Route fields use slugs:
  - `slug`
- Ordering fields should be explicit:
  - `display_order` in Supabase
  - `order` in application code

Field consistency expectations:

- `cinematic_intro` maps to `cinematicIntro`.
- `estimated_duration_seconds` maps to `estimatedDurationSeconds`.
- `featured_career_id` maps to `featuredCareerId`.
- `clue_text` maps to `clueText`.
- `time_penalty_seconds` maps to `timePenaltySeconds`.
- `reflection_prompt_ids` maps to `reflectionPromptIds` if stored directly.
- `recommended_next` maps to `recommendedNext`.
- `youtube_search_url` maps to `youtubeSearchUrl`.

Supabase integration rules:

- Keep Supabase reads in `src/lib/data/*`.
- Keep Supabase client setup in `src/lib/supabase.ts`.
- Do not query Supabase directly from presentation components unless explicitly needed.
- Handle Supabase errors without crashing public routes.
- Return canonical app-shaped objects from data functions.
- Keep migration logic out of UI components.

## Future AI-Generated Content Guidance

AI-generated MedQuest content must be educationally appropriate, emotionally engaging, structurally consistent, and aligned with the mission.

Before adding generated content, verify:

- The career exists as a real healthcare or healthcare-adjacent profession.
- The content is accurate at a career-awareness level.
- The exploration does not become clinical training.
- The student is not asked to diagnose, treat, or make patient-care decisions.
- The tone is cinematic without being frightening or graphic.
- Clues teach role understanding and teamwork.
- Reflection prompts support curiosity and belonging.
- The career is not framed through stereotypes.
- The education pathway is clear and not overstated.
- External links are reputable, preferably BLS, professional associations, schools, or official career resources.
- IDs, slugs, and relationships follow the canonical conventions.

Generated explorations should include:

- a clear title
- a cinematic intro
- a difficulty level based on clue subtlety and role visibility
- one featured career
- three or more clues
- at least one reflection prompt
- a reveal narrative that explains why the career matters
- tags that support filtering and recommendation
- recommended-next exploration slugs or IDs as currently required by the app

Generated career profiles should:

- explain the role in student-friendly language
- identify typical work settings
- describe education and training without gatekeeping language
- include what might surprise students
- address a common misconception respectfully
- describe a realistic day in the life
- include salary and outlook language that is general and source-aware
- avoid promising income, employment, admission, or certification outcomes

When uncertain, choose clarity and educational usefulness over dramatic complexity.

<!-- END:nextjs-agent-rules -->
