'use client';

import Link from 'next/link';
import { useMemo } from 'react';

import {
  buildCareerInterestProfile,
  useProgressState,
} from '@/lib/progress-storage';

export default function ProgressDashboard() {
  const progress = useProgressState();

  const profile = useMemo(
    () => buildCareerInterestProfile(progress),
    [progress]
  );

  return (
    <section className="border-y border-white/10 bg-white/[0.02] px-6 py-10 text-white">
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="mb-3 text-xs uppercase tracking-[0.35em] text-cyan-300">
            Journey Signal
          </p>
          <h2 className="mb-6 text-4xl font-black leading-tight">
            Your exploration pattern is starting to take
            shape.
          </h2>
          <div className="grid gap-4 sm:grid-cols-4">
            <Metric
              label="Completed"
              value={progress.completedExplorationIds.length}
            />
            <Metric
              label="Saved"
              value={progress.savedExplorationIds.length}
            />
            <Metric
              label="Recently Viewed"
              value={progress.recentlyViewedIds.length}
            />
            <Metric
              label="Streak"
              value={progress.currentStreak}
            />
          </div>
        </div>

        <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/[0.04] p-6">
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-cyan-300">
            Career Interest Profile
          </p>
          <ProfileLine
            label="Environments"
            values={profile.preferredEnvironments}
          />
          <ProfileLine
            label="Clue Types"
            values={profile.preferredClueTypes}
          />
          <ProfileLine
            label="Archetypes"
            values={profile.preferredCareerArchetypes}
          />
          <div className="mt-6 flex flex-wrap gap-3">
            <span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-slate-200">
              Patient-facing signal:{' '}
              {profile.patientFacingInterest}
            </span>
            <span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-slate-200">
              Operational signal:{' '}
              {profile.operationalInterest}
            </span>
          </div>
          <Link
            href="/dashboard"
            className="mt-6 inline-flex rounded-2xl border border-cyan-400/30 px-5 py-3 text-sm font-bold text-cyan-200 transition-colors hover:bg-cyan-400/10"
          >
            Open Progress Dashboard
          </Link>
        </div>
      </div>
    </section>
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
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
      <p className="text-3xl font-black text-cyan-200">
        {value}
      </p>
      <p className="mt-2 text-xs uppercase tracking-[0.2em] text-slate-400">
        {label}
      </p>
    </div>
  );
}

function ProfileLine({
  label,
  values,
}: {
  label: string;
  values: Array<[string, number]>;
}) {
  return (
    <div className="mb-4">
      <p className="mb-2 text-xs uppercase tracking-[0.2em] text-slate-400">
        {label}
      </p>
      <div className="flex flex-wrap gap-2">
        {values.length === 0 ? (
          <span className="text-sm text-slate-400">
            Explore more to reveal this pattern.
          </span>
        ) : (
          values.map(([value, count]) => (
            <span
              key={value}
              className="rounded-full bg-white/[0.06] px-3 py-1 text-sm text-slate-200"
            >
              {value} - {count}
            </span>
          ))
        )}
      </div>
    </div>
  );
}
