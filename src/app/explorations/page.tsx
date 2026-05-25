import AmbientBackground from '@/components/cinematic/AmbientBackground';
import ExplorationBrowser from '@/components/explorations/ExplorationBrowser';
import ProgressDashboard from '@/components/explorations/ProgressDashboard';
import {
  getAllExplorations,
  getEcosystemCatalog,
} from '@/lib/catalog';

export default function ExplorationsPage() {
  const ecosystems = getEcosystemCatalog();
  const explorations = getAllExplorations();

  return (
    <main className="min-h-screen bg-[#020817] text-white">
      <AmbientBackground />

      <section className="relative mx-auto max-w-7xl px-6 py-16">
        <p className="mb-4 text-xs uppercase tracking-[0.4em] text-cyan-400">
          MedQuest
        </p>
        <h1 className="mb-6 max-w-5xl text-5xl font-black leading-none md:text-7xl">
          Explore healthcare as an ecosystem.
        </h1>
        <p className="max-w-3xl text-lg leading-relaxed text-slate-300">
          Browse cinematic career explorations by setting,
          teamwork, technology, and patient interaction. Each
          pathway is designed for curiosity, identity
          exploration, and interdisciplinary awareness.
        </p>
      </section>

      <ProgressDashboard />
      <ExplorationBrowser
        ecosystems={ecosystems}
        explorations={explorations}
      />
    </main>
  );
}
