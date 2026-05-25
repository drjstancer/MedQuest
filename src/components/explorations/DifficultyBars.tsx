import type { Exploration } from '@/types/exploration';

interface Props {
  distribution: Record<Exploration['difficulty'], number>;
}

const difficulties: Exploration['difficulty'][] = [
  'Easy',
  'Medium',
  'Hard',
];

export default function DifficultyBars({
  distribution,
}: Props) {
  const total = Math.max(
    difficulties.reduce(
      (sum, difficulty) => sum + distribution[difficulty],
      0
    ),
    1
  );

  return (
    <div className="space-y-3">
      {difficulties.map((difficulty) => {
        const value = distribution[difficulty];
        const width = `${Math.round((value / total) * 100)}%`;

        return (
          <div key={difficulty}>
            <div className="mb-1 flex items-center justify-between text-xs uppercase tracking-[0.2em] text-slate-400">
              <span>{difficulty}</span>
              <span>{value}</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full rounded-full bg-cyan-300"
                style={{ width }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
