'use client';

import Link from 'next/link';

import {
  getJourneyEntries,
} from '@/lib/journey-storage';

const reflectionInterpretations: Record<
  string,
  string
> = {
  Leadership:
    'You appear drawn toward leadership-oriented healthcare environments where coordination and decision-making matter.',

  'Helping during emergencies':
    'You seem energized by acute-response environments where rapid action and teamwork are essential.',

  'Team collaboration':
    'You consistently value collaborative healthcare environments built on communication and shared responsibility.',

  'Science & problem-solving':
    'You appear curious about analytical healthcare roles that involve investigation, reasoning, and technical thinking.',

  'Patient relationships':
    'You seem especially interested in healthcare pathways centered on trust, empathy, and long-term patient connection.',

  'Technology & equipment':
    'You appear drawn toward healthcare environments involving technical tools, systems, and specialized equipment.',

  'Physical movement & activity':
    'You seem interested in active, movement-oriented healthcare environments that involve hands-on engagement.',

  'Long-term patient support':
    'You appear drawn toward healthcare pathways focused on continuity, rehabilitation, and ongoing patient growth.',
};

export default function JourneyPage() {
 
    const entries = getJourneyEntries();
    
    const reflectionCounts: Record<
  string,
  number
> = {};

entries.forEach((entry) => {
  reflectionCounts[entry.reflectionChoice] =
    (reflectionCounts[
      entry.reflectionChoice
    ] || 0) + 1;
});

const dominantReflection =
  Object.entries(reflectionCounts).sort(
    (a, b) => b[1] - a[1]
  )[0]?.[0];
  
  return (
    <main className="min-h-screen bg-[#020817] text-white px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="uppercase tracking-[0.35em] text-cyan-400 text-xs mb-4">
            Journey Insights
          </p>

          <h1 className="text-5xl md:text-7xl font-black leading-none mb-6">
            Your Exploration Journey
          </h1>

          <p className="max-w-3xl text-lg text-slate-300 leading-relaxed">
            Reflect on the healthcare careers, environments, and pathways
            that continue to capture your curiosity.
          </p>
        </div>
     
    {dominantReflection && (
  <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/[0.05] p-10 mb-10">
    <p className="uppercase tracking-[0.35em] text-cyan-300 text-xs mb-4">
      Emerging Insight
    </p>

    <h2 className="text-4xl font-black mb-6">
      {dominantReflection}
    </h2>

    <p className="text-xl text-slate-200 leading-relaxed">
      {
        reflectionInterpretations[
          dominantReflection
        ]
      }
    </p>
  </div>
)}
        {entries.length === 0 ? (
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-10">
            <p className="text-xl text-slate-300">
              You have not completed any explorations yet.
            </p>

            <Link
              href="/explorations"
              className="inline-flex mt-8 rounded-2xl border border-cyan-400/20 bg-cyan-400/[0.05] px-6 py-4 text-cyan-200 hover:border-cyan-400/40 transition-all"
            >
              Start Exploring
            </Link>
          </div>
        ) : (
          <div className="space-y-6">
            {entries.map((entry, index) => (
              <div
                key={`${entry.explorationTitle}-${index}`}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-8"
              >
                <p className="uppercase tracking-[0.25em] text-cyan-300 text-xs mb-3">
                  Exploration Completed
                </p>

                <h2 className="text-3xl font-black mb-3">
                  {entry.explorationTitle}
                </h2>

                <div className="grid gap-4 md:grid-cols-3 mt-6">
                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-slate-400 mb-2">
                      Selected Career
                    </p>

                    <p className="text-lg font-semibold">
                      {entry.selectedCareer}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-slate-400 mb-2">
                      Reflection Theme
                    </p>

                    <p className="text-lg font-semibold">
                      {entry.reflectionChoice}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-slate-400 mb-2">
                      Outcome
                    </p>

                    <p className="text-lg font-semibold">
                      {entry.wasCorrect
                        ? 'Correct Identification'
                        : 'Exploration Continued'}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}