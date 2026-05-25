import Link from 'next/link';

import AmbientBackground from '@/components/cinematic/AmbientBackground';
import DifficultyBars from '@/components/explorations/DifficultyBars';
import {
  ExplorationCard,
} from '@/components/explorations/ExplorationBrowser';
import { getEcosystemById } from '@/lib/catalog';

export default async function EcosystemPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const ecosystem = getEcosystemById(id);

  if (!ecosystem) {
    return (
      <main className="min-h-screen bg-[#020817] p-12 text-white">
        Ecosystem not found.
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#020817] text-white">
      <AmbientBackground />

      <section className="relative mx-auto max-w-7xl px-6 py-14">
        <Link
          href="/explorations"
          className="mb-10 inline-flex text-cyan-300 hover:text-cyan-200"
        >
          Back to Exploration Hub
        </Link>
        <p className="mb-4 text-xs uppercase tracking-[0.4em] text-cyan-400">
          Healthcare Ecosystem
        </p>
        <h1 className="mb-6 max-w-5xl text-5xl font-black leading-none md:text-7xl">
          {ecosystem.title}
        </h1>
        <p className="max-w-4xl text-lg leading-relaxed text-slate-300">
          {ecosystem.description}
        </p>

        <div className="mt-10 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/[0.04] p-6">
            <div className="mb-6 grid grid-cols-2 gap-4">
              <Stat
                label="Careers"
                value={ecosystem.careerCount}
              />
              <Stat
                label="Explorations"
                value={ecosystem.explorationCount}
              />
            </div>
            <DifficultyBars
              distribution={
                ecosystem.difficultyDistribution
              }
            />
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-cyan-300">
              Featured Pathways
            </p>
            <div className="flex flex-wrap gap-3">
              {ecosystem.featuredPathways.map((pathway) => (
                <span
                  key={pathway}
                  className="rounded-full bg-white/[0.05] px-4 py-2 text-sm text-slate-200"
                >
                  {pathway}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="mb-8">
          <p className="mb-3 text-xs uppercase tracking-[0.35em] text-cyan-300">
            Explorations
          </p>
          <h2 className="text-4xl font-black">
            Start with a scene, discover the team.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {ecosystem.explorations.map((exploration) => (
            <ExplorationCard
              key={exploration.id}
              exploration={exploration}
              progress={null}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

function Stat({
  label,
  value,
}: {
  label: string;
  value: number;
}) {
  return (
    <div>
      <p className="text-4xl font-black text-cyan-200">
        {value}
      </p>
      <p className="mt-2 text-xs uppercase tracking-[0.2em] text-slate-400">
        {label}
      </p>
    </div>
  );
}
