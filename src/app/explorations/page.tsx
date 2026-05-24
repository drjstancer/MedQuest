import Link from 'next/link';

import { fetchExplorations } from '@/lib/data/explorations';
import AmbientBackground from '@/components/cinematic/AmbientBackground';

export default async function ExplorationsPage() {
  const explorations = await fetchExplorations();

  return (
    <main className="min-h-screen bg-[#020817] text-white px-6 py-12"> 
        <AmbientBackground />

      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <p className="uppercase tracking-[0.35em] text-cyan-400 text-xs mb-4">
            MedQuest
          </p>

          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-none">
            Exploration Hub
          </h1>

          <p className="max-w-3xl text-lg text-slate-300 leading-relaxed">
            Enter immersive healthcare mysteries, uncover clues,
            and explore the professionals who work together to
            improve lives every day.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {explorations.map((exploration) => (
            <Link
              key={exploration.id}
              href={`/explorations/${exploration.slug}`}
              className="group rounded-3xl border border-white/10 bg-white/[0.03] p-8 hover:border-cyan-400/40 hover:bg-cyan-400/[0.03] transition-all duration-500"
            >
              <div className="mb-6 flex items-center justify-between">
                <span className="text-xs uppercase tracking-[0.3em] text-cyan-400">
                  {exploration.difficulty}
                </span>

            <div className="rounded-full border border-cyan-400/20 bg-cyan-400/[0.05] px-3 py-1 text-xs uppercase tracking-[0.2em] text-cyan-300">
  {exploration.archetype.replace('-', ' ')}
</div>

                <span className="text-sm text-slate-400">
                  {exploration.estimatedDurationSeconds}s
                </span>
              </div>

              <h2 className="text-3xl font-black mb-4 group-hover:text-cyan-300 transition-colors">
                {exploration.title}
              </h2>

              <p className="text-slate-300 leading-relaxed mb-6">
                {exploration.cinematicIntro}
              </p>

              <div className="flex flex-wrap gap-3">
                {exploration.tags.map((tag: string) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-200 text-xs uppercase tracking-wide"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}