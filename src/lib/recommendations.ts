import type {
  EnrichedExploration,
  EcosystemCatalogEntry,
} from '@/lib/catalog';
import type { MedQuestProgressState } from '@/lib/progress-storage';

const difficultyOrder = ['Easy', 'Medium', 'Hard'];

export function recommendExplorations(
  explorations: EnrichedExploration[],
  ecosystems: EcosystemCatalogEntry[],
  progress: MedQuestProgressState,
  limit = 6
) {
  const completed = new Set(progress.completedExplorationIds);
  const viewed = new Set(progress.recentlyViewedIds);
  const completedEntries = progress.entries.filter(
    (entry) => entry.status === 'completed'
  );
  const completedEcosystems = new Set(
    completedEntries.map((entry) => entry.ecosystemId)
  );
  const completedArchetypes = new Set(
    completedEntries.map((entry) => entry.archetype)
  );
  const nextDifficulty =
    completedEntries.length < 3
      ? 'Easy'
      : completedEntries.some(
            (entry) => entry.difficulty === 'Medium'
          )
        ? 'Hard'
        : 'Medium';
  const unexploredEcosystems = new Set(
    ecosystems
      .filter((ecosystem) => !completedEcosystems.has(ecosystem.id))
      .map((ecosystem) => ecosystem.id)
  );

  return explorations
    .filter((exploration) => !completed.has(exploration.id))
    .map((exploration) => {
      let score = 0;

      if (exploration.difficulty === nextDifficulty) score += 4;
      if (unexploredEcosystems.has(exploration.ecosystemId)) {
        score += 3;
      }
      if (!completedArchetypes.has(exploration.archetype)) {
        score += 2;
      }
      if (viewed.has(exploration.id)) score += 1;

      score +=
        3 -
        Math.abs(
          difficultyOrder.indexOf(exploration.difficulty) -
            difficultyOrder.indexOf(nextDifficulty)
        );

      return {
        exploration,
        score,
      };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((item) => item.exploration);
}
