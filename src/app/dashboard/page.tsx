import AmbientBackground from '@/components/cinematic/AmbientBackground';
import StudentDashboard from '@/components/explorations/StudentDashboard';
import {
  getAllExplorations,
  getEcosystemCatalog,
} from '@/lib/catalog';

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-[#020817] text-white">
      <AmbientBackground />
      <section className="relative mx-auto max-w-7xl px-6 py-14">
        <p className="mb-4 text-xs uppercase tracking-[0.4em] text-cyan-400">
          Progress Dashboard
        </p>
        <h1 className="mb-6 max-w-5xl text-5xl font-black leading-none md:text-7xl">
          Your healthcare curiosity map
        </h1>
        <p className="max-w-3xl text-lg leading-relaxed text-slate-300">
          MedQuest tracks exploration patterns to help you
          notice interests in environments, teamwork,
          technology, patient-facing work, and systems-level
          healthcare careers.
        </p>
      </section>
      <StudentDashboard
        ecosystems={getEcosystemCatalog()}
        explorations={getAllExplorations()}
      />
    </main>
  );
}
