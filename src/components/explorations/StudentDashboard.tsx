'use client';

import Link from 'next/link';
import { useMemo } from 'react';

import type { EnrichedExploration } from '@/lib/catalog';
import { recommendExplorations } from '@/lib/recommendations';
import {
  buildCareerInterestProfile,
  useProgressState,
} from '@/lib/progress-storage';
import type { EcosystemCatalogEntry } from '@/lib/catalog';

interface Props {
  explorations: EnrichedExploration[];
  ecosystems: EcosystemCatalogEntry[];
}

export default function StudentDashboard({
  explorations,
  ecosystems,
}: Props) {
  const progress = useProgressState();

  const profile = useMemo(
    () => buildCareerInterestProfile(progress),
    [progress]
  );
  const recommendations =
    ecosystems.length > 0
      ? recommendExplorations(
          explorations,
          ecosystems,
          progress,
          6
        )
      : explorations.slice(0, 6);

  const completedSet = new Set(
    progress.completedExplorationIds
  );
  const completedByEcosystem = ecosystems.map((ecosystem) => {
    const completed = ecosystem.explorations.filter(
      (exploration) => completedSet.has(exploration.id)
    ).length;

    return {
      ...ecosystem,
      completed,
    };
  });

  return (
    <div className="mx-auto max-w-7xl px-6 pb-16">
      <section className="grid gap-5 md:grid-cols-4">
        <Metric
          label="Completed"
          value={progress.completedExplorationIds.length}
        />
        <Metric
          label="Saved"
          value={progress.savedExplorationIds.length}
        />
        <Metric
          label="Current Streak"
          value={progress.currentStreak}
        />
        <Metric
          label="Longest Streak"
          value={progress.longestStreak}
        />
      </section>

      <section className="mt-10 grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/[0.04] p-8">
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-cyan-300">
            Interest Profile
          </p>
          <h2 className="mb-6 text-3xl font-black">
            Patterns from your exploration choices
          </h2>
          <ProfileBlock
            label="Preferred environments"
            values={profile.preferredEnvironments}
          />
          <ProfileBlock
            label="Preferred clue types"
            values={profile.preferredClueTypes}
          />
          <ProfileBlock
            label="Career archetypes"
            values={profile.preferredCareerArchetypes}
          />
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-cyan-300">
            Ecosystem Progress
          </p>
          <div className="space-y-5">
            {completedByEcosystem.map((ecosystem) => {
              const percent =
                ecosystem.explorationCount === 0
                  ? 0
                  : Math.round(
                      (ecosystem.completed /
                        ecosystem.explorationCount) *
                        100
                    );

              return (
                <div key={ecosystem.id}>
                  <div className="mb-2 flex justify-between text-sm">
                    <span>{ecosystem.title}</span>
                    <span className="text-slate-400">
                      {ecosystem.completed}/
                      {ecosystem.explorationCount}
                    </span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-white/10">
                    <div
                      className="h-full rounded-full bg-cyan-300"
                      style={{ width: `${percent}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mt-12">
        <p className="mb-4 text-xs uppercase tracking-[0.3em] text-cyan-300">
          Recommended Next
        </p>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {recommendations.map((exploration) => (
            <Link
              key={exploration.id}
              href={`/explorations/${exploration.slug}`}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-cyan-400/40"
            >
              <p className="mb-3 text-xs uppercase tracking-[0.2em] text-cyan-300">
                {exploration.ecosystemTitle}
              </p>
              <h3 className="mb-3 text-2xl font-black">
                {exploration.title}
              </h3>
              <p className="text-sm leading-relaxed text-slate-300">
                {exploration.difficulty} -{' '}
                {exploration.environment} -{' '}
                {exploration.archetype}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

function Metric({
  label,
  value,
}: {
  label: string;
  value: number;
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
      <p className="text-4xl font-black text-cyan-200">
        {value}
      </p>
      <p className="mt-2 text-xs uppercase tracking-[0.2em] text-slate-400">
        {label}
      </p>
    </div>
  );
}

function ProfileBlock({
  label,
  values,
}: {
  label: string;
  values: Array<[string, number]>;
}) {
  return (
    <div className="mb-6">
      <p className="mb-2 text-sm font-bold text-slate-300">
        {label}
      </p>
      <div className="flex flex-wrap gap-2">
        {values.length === 0 ? (
          <span className="text-sm text-slate-400">
            Complete explorations to reveal this pattern.
          </span>
        ) : (
          values.map(([value, count]) => (
            <span
              key={value}
              className="rounded-full border border-cyan-400/20 bg-cyan-400/[0.06] px-3 py-1 text-sm text-cyan-100"
            >
              {value} - {count}
            </span>
          ))
        )}
      </div>
    </div>
  );
}
