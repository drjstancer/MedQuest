'use client';

import Link from 'next/link';
import { useState, type ReactNode } from 'react';

import DifficultyBars from '@/components/explorations/DifficultyBars';
import { recommendExplorations } from '@/lib/recommendations';
import {
  toggleSavedExploration,
  useProgressState,
  type MedQuestProgressState,
} from '@/lib/progress-storage';
import type {
  EcosystemCatalogEntry,
  EnrichedExploration,
} from '@/lib/catalog';

interface Props {
  ecosystems: EcosystemCatalogEntry[];
  explorations: EnrichedExploration[];
}

const allOption = 'All';

export default function ExplorationBrowser({
  ecosystems,
  explorations,
}: Props) {
  const [difficulty, setDifficulty] = useState(allOption);
  const [archetype, setArchetype] = useState(allOption);
  const [environment, setEnvironment] = useState(allOption);
  const [patientInteraction, setPatientInteraction] =
    useState(allOption);
  const [teamwork, setTeamwork] = useState(allOption);
  const [technology, setTechnology] = useState(allOption);
  const progress = useProgressState();

  const filtered = explorations.filter(
    (exploration) =>
      matches(difficulty, exploration.difficulty) &&
      matches(archetype, exploration.archetype) &&
      matches(environment, exploration.environment) &&
      matches(
        patientInteraction,
        exploration.patientInteractionLevel
      ) &&
      matches(teamwork, exploration.teamworkIntensity) &&
      matches(technology, exploration.technologyIntensity)
  );

  const recommendations = recommendExplorations(
    explorations,
    ecosystems,
    progress,
    4
  );

  return (
    <>
      <section className="mx-auto max-w-7xl px-6 pb-12">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {ecosystems.map((ecosystem) => (
            <Link
              key={ecosystem.id}
              href={`/ecosystems/${ecosystem.id}`}
              className="group rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-500 hover:border-cyan-400/40 hover:bg-cyan-400/[0.04]"
            >
              <p className="mb-3 text-xs uppercase tracking-[0.3em] text-cyan-300">
                Ecosystem
              </p>
              <h2 className="mb-4 text-2xl font-black group-hover:text-cyan-200">
                {ecosystem.title}
              </h2>
              <p className="mb-6 line-clamp-4 text-sm leading-relaxed text-slate-300">
                {ecosystem.description}
              </p>
              <div className="mb-5 grid grid-cols-2 gap-3">
                <MiniStat
                  label="Careers"
                  value={ecosystem.careerCount}
                />
                <MiniStat
                  label="Explorations"
                  value={ecosystem.explorationCount}
                />
              </div>
              <DifficultyBars
                distribution={
                  ecosystem.difficultyDistribution
                }
              />
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.35em] text-cyan-300">
              Recommended Next
            </p>
            <h2 className="text-4xl font-black">
              Follow curiosity, not a test score.
            </h2>
          </div>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {recommendations.map((exploration) => (
            <ExplorationCard
              key={exploration.id}
              exploration={exploration}
              progress={progress}
              compact
            />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="mb-8">
          <p className="mb-3 text-xs uppercase tracking-[0.35em] text-cyan-300">
            Exploration Filters
          </p>
          <h2 className="text-4xl font-black">
            Browse by environment, teamwork, and role
            pattern.
          </h2>
        </div>

        <div className="mb-8 grid gap-4 md:grid-cols-3 xl:grid-cols-6">
          <SelectFilter
            label="Difficulty"
            value={difficulty}
            values={unique([
              ...explorations.map((item) => item.difficulty),
            ])}
            onChange={setDifficulty}
          />
          <SelectFilter
            label="Archetype"
            value={archetype}
            values={unique([
              ...explorations.map((item) => item.archetype),
            ])}
            onChange={setArchetype}
          />
          <SelectFilter
            label="Environment"
            value={environment}
            values={unique([
              ...explorations.map((item) => item.environment),
            ])}
            onChange={setEnvironment}
          />
          <SelectFilter
            label="Patient"
            value={patientInteraction}
            values={['Low', 'Moderate', 'High']}
            onChange={setPatientInteraction}
          />
          <SelectFilter
            label="Teamwork"
            value={teamwork}
            values={['Low', 'Moderate', 'High']}
            onChange={setTeamwork}
          />
          <SelectFilter
            label="Technology"
            value={technology}
            values={['Low', 'Moderate', 'High']}
            onChange={setTechnology}
          />
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filtered.map((exploration) => (
            <ExplorationCard
              key={exploration.id}
              exploration={exploration}
              progress={progress}
            />
          ))}
        </div>
      </section>
    </>
  );
}

export function ExplorationCard({
  exploration,
  progress,
  onProgressChange,
  compact = false,
}: {
  exploration: EnrichedExploration;
  progress: MedQuestProgressState | null;
  onProgressChange?: () => void;
  compact?: boolean;
}) {
  const isCompleted =
    progress?.completedExplorationIds.includes(
      exploration.id
    ) ?? false;
  const isSaved =
    progress?.savedExplorationIds.includes(exploration.id) ??
    false;

  return (
    <article className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 text-white">
      <div className="mb-4 flex flex-wrap gap-2">
        <Badge>{exploration.difficulty}</Badge>
        <Badge>{exploration.environment}</Badge>
        {isCompleted && <Badge>Completed</Badge>}
      </div>
      <h3 className="mb-3 text-2xl font-black">
        {exploration.title}
      </h3>
      <p
        className={`text-sm leading-relaxed text-slate-300 ${
          compact ? 'line-clamp-3' : ''
        }`}
      >
        {exploration.cinematicIntro}
      </p>
      <div className="mt-5 grid grid-cols-3 gap-2 text-xs text-slate-300">
        <Signal label="Patient" value={exploration.patientInteractionLevel} />
        <Signal label="Team" value={exploration.teamworkIntensity} />
        <Signal label="Tech" value={exploration.technologyIntensity} />
      </div>
      <div className="mt-6 flex flex-wrap gap-3">
        <Link
          href={`/explorations/${exploration.slug}`}
          className="rounded-2xl bg-cyan-300 px-5 py-3 text-sm font-black text-slate-950 transition-transform hover:scale-[1.02]"
        >
          Explore
        </Link>
        <button
          type="button"
          onClick={() => {
            toggleSavedExploration(exploration.id);
            onProgressChange?.();
          }}
          className="rounded-2xl border border-cyan-400/20 px-5 py-3 text-sm font-bold text-cyan-200 hover:bg-cyan-400/10"
        >
          {isSaved ? 'Saved' : 'Save'}
        </button>
      </div>
    </article>
  );
}

function SelectFilter({
  label,
  value,
  values,
  onChange,
}: {
  label: string;
  value: string;
  values: string[];
  onChange: (value: string) => void;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs uppercase tracking-[0.2em] text-slate-400">
        {label}
      </span>
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="w-full rounded-2xl border border-white/10 bg-[#071326] px-4 py-3 text-sm text-white outline-none focus:border-cyan-400/50"
      >
        {[allOption, ...values].map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </label>
  );
}

function MiniStat({
  label,
  value,
}: {
  label: string;
  value: number;
}) {
  return (
    <div className="rounded-2xl bg-white/[0.04] p-3">
      <p className="text-2xl font-black text-cyan-200">
        {value}
      </p>
      <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
        {label}
      </p>
    </div>
  );
}

function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-full border border-cyan-400/20 bg-cyan-400/[0.08] px-3 py-1 text-xs uppercase tracking-[0.15em] text-cyan-200">
      {children}
    </span>
  );
}

function Signal({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl bg-white/[0.04] p-3">
      <p className="text-[0.65rem] uppercase tracking-[0.18em] text-slate-500">
        {label}
      </p>
      <p className="mt-1 font-bold text-slate-200">
        {value}
      </p>
    </div>
  );
}

function matches(filter: string, value: string) {
  return filter === allOption || filter === value;
}

function unique(values: string[]) {
  return [...new Set(values)].sort();
}
