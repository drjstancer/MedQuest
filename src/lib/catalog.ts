import { ecosystemRegistry } from '@/content/ecosystem-registry';
import { ecosystemSeeds } from '@/content/ecosystems';
import type {
  Career,
  Clue,
  Exploration,
  ReflectionPrompt,
} from '@/types/exploration';

export type PatientInteractionLevel =
  | 'Low'
  | 'Moderate'
  | 'High';
export type IntensityLevel = 'Low' | 'Moderate' | 'High';

export interface EnrichedExploration extends Exploration {
  ecosystemId: string;
  ecosystemTitle: string;
  featuredCareer?: Career;
  clues: Clue[];
  reflections: ReflectionPrompt[];
  environment: string;
  patientInteractionLevel: PatientInteractionLevel;
  teamworkIntensity: IntensityLevel;
  technologyIntensity: IntensityLevel;
}

export interface EcosystemCatalogEntry {
  id: string;
  title: string;
  description: string;
  featuredPathways: string[];
  careerCount: number;
  explorationCount: number;
  difficultyDistribution: Record<
    Exploration['difficulty'],
    number
  >;
  tags: string[];
  explorations: EnrichedExploration[];
}

const careerMap = new Map<string, Career>();
const clueMap = new Map<string, Clue[]>();
const reflectionMap = new Map<
  string,
  ReflectionPrompt[]
>();

ecosystemSeeds.forEach((seed) => {
  seed.careers.forEach((career) => {
    careerMap.set(career.id, career);
  });

  seed.clues.forEach((clue) => {
    const clues = clueMap.get(clue.explorationId) ?? [];
    clues.push(clue);
    clueMap.set(clue.explorationId, clues);
  });

  seed.reflections.forEach((reflection) => {
    const reflections =
      reflectionMap.get(reflection.explorationId) ?? [];
    reflections.push(reflection);
    reflectionMap.set(
      reflection.explorationId,
      reflections
    );
  });
});

function inferEnvironment(exploration: Exploration) {
  const text = [
    exploration.title,
    exploration.cinematicIntro,
    ...exploration.tags,
  ]
    .join(' ')
    .toLowerCase();

  if (text.includes('school')) return 'Schools';
  if (text.includes('rural')) return 'Rural healthcare';
  if (text.includes('telehealth')) return 'Telehealth';
  if (text.includes('home')) return 'Home health';
  if (text.includes('rehab')) return 'Rehabilitation centers';
  if (text.includes('hospital')) return 'Urban hospitals';
  if (text.includes('lab')) return 'Diagnostics labs';
  if (text.includes('clinic')) return 'Community clinics';
  if (text.includes('university')) {
    return 'University medical systems';
  }

  return 'Healthcare systems';
}

function inferPatientInteraction(
  clues: Clue[],
  exploration: Exploration
): PatientInteractionLevel {
  const patientSignals = clues.filter(
    (clue) => clue.category === 'patient-care'
  ).length;
  const operationsSignals = [
    'operations',
    'behind-the-scenes',
    'systems',
    'laboratory',
    'informatics',
  ].filter((tag) => exploration.tags.includes(tag)).length;

  if (patientSignals >= 2) return 'High';
  if (patientSignals === 1 && operationsSignals === 0) {
    return 'Moderate';
  }
  if (operationsSignals >= 1) return 'Low';

  return 'Moderate';
}

function inferIntensity(
  clues: Clue[],
  categories: Clue['category'][]
): IntensityLevel {
  const count = clues.filter((clue) =>
    categories.includes(clue.category)
  ).length;

  if (count >= 2) return 'High';
  if (count === 1) return 'Moderate';

  return 'Low';
}

export function getAllExplorations(): EnrichedExploration[] {
  return ecosystemSeeds.flatMap((seed) =>
    seed.explorations.map((exploration) => {
      const clues = [
        ...(clueMap.get(exploration.id) ?? []),
      ].sort((a, b) => a.order - b.order);
      const reflections =
        reflectionMap.get(exploration.id) ?? [];

      return {
        ...exploration,
        ecosystemId: seed.metadata.id,
        ecosystemTitle: seed.metadata.title,
        featuredCareer: careerMap.get(
          exploration.featuredCareerId
        ),
        clues,
        reflections,
        environment: inferEnvironment(exploration),
        patientInteractionLevel:
          inferPatientInteraction(clues, exploration),
        teamworkIntensity: inferIntensity(clues, [
          'teamwork',
          'communication',
        ]),
        technologyIntensity: inferIntensity(clues, [
          'technology',
          'tools',
        ]),
      };
    })
  );
}

export function getExplorationFromCatalog(slug: string) {
  return getAllExplorations().find(
    (exploration) => exploration.slug === slug
  );
}

export function getCareerFromCatalog(id: string) {
  return careerMap.get(id) ?? null;
}

export function getEcosystemCatalog(): EcosystemCatalogEntry[] {
  const explorations = getAllExplorations();

  return ecosystemRegistry.map((entry) => {
    const ecosystemExplorations = explorations.filter(
      (exploration) => exploration.ecosystemId === entry.id
    );
    const seed = ecosystemSeeds.find(
      (ecosystemSeed) =>
        ecosystemSeed.metadata.id === entry.id
    );

    return {
      id: entry.id,
      title: entry.title,
      description: entry.description,
      featuredPathways: entry.featuredPathways,
      careerCount: seed?.careers.length ?? 0,
      explorationCount: ecosystemExplorations.length,
      difficultyDistribution:
        ecosystemExplorations.reduce(
          (counts, exploration) => ({
            ...counts,
            [exploration.difficulty]:
              counts[exploration.difficulty] + 1,
          }),
          {
            Easy: 0,
            Medium: 0,
            Hard: 0,
          }
        ),
      tags: seed?.metadata.tags ?? [],
      explorations: ecosystemExplorations,
    };
  });
}

export function getEcosystemById(id: string) {
  return getEcosystemCatalog().find(
    (ecosystem) => ecosystem.id === id
  );
}
