'use client';

import { use, useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import CinematicIntro from '@/components/cinematic/CinematicIntro';
import { motion, AnimatePresence } from 'framer-motion';
import CareerSpotlightCard from '@/components/careers/CareerSpotlightCard';
import { saveJourneyEntry, } from '@/lib/journey-storage';

const reflectionChoices = [
  'Leadership',
  'Helping during emergencies',
  'Team collaboration',
  'Science & problem-solving',
  'Patient relationships',
  'Technology & equipment',
  'Physical movement & activity',
  'Long-term patient support',
];

export default function ExplorationRuntime({
  exploration,
  career,
  clues,
  reflections,
}: any) {
  const [currentClueIndex, setCurrentClueIndex] = useState(0);
const [score, setScore] = useState(100);


const [gameComplete, setGameComplete] = useState(false);

const [incorrectGuess, setIncorrectGuess] = useState(false);

const [secondsRemaining, setSecondsRemaining] = useState(45);
const [hasStarted, setHasStarted] = useState(false);
const [selectedReflection, setSelectedReflection] =
  useState<string | null>(null);
  const [pendingGuess, setPendingGuess] =
  useState<string | null>(null);
  
   const guessOptions = [
  career.title,
  'Registered Nurse',
  'Physical Therapist',
  'Athletic Trainer',
].sort(() => Math.random() - 0.5);
    useEffect(() => {
  if (!hasStarted || gameComplete) return;

  if (secondsRemaining <= 0) {
    setGameComplete(true);

    return;
  }

  const timer = setInterval(() => {
    setSecondsRemaining((prev) => prev - 1);
  }, 1000);

  return () => clearInterval(timer);
}, [secondsRemaining, gameComplete]);

  if (!exploration || !career) {
    return (
      <main className="min-h-screen bg-[#020817] text-white flex items-center justify-center">
        <h1 className="text-4xl font-black">
          Exploration Not Found
        </h1>
      </main>
    );
  }

 function handleGuess(selectedCareer: string) {
  setPendingGuess(selectedCareer);
}

function submitReflectionChoice() {
  if (!career || !exploration || !pendingGuess) return;

saveJourneyEntry({
  explorationTitle: exploration.title,

  selectedCareer: pendingGuess,

  reflectionChoice:
    selectedReflection || 'Unknown',

  wasCorrect:
    pendingGuess === career.title,

  completedAt: new Date().toISOString(),
});

  if (pendingGuess === career.title) {
    setGameComplete(true);

    return;
  }

  setIncorrectGuess(true);

  setScore((prev) => Math.max(prev - 10, 0));

  setSecondsRemaining((prev) =>
    Math.max(prev - 5, 0)
  );

  setTimeout(() => {
    setIncorrectGuess(false);
  }, 1500);

  if (
    currentClueIndex <
    clues.length - 1
  ) {
    setCurrentClueIndex((prev) => prev + 1);
  }

  setPendingGuess(null);
  setSelectedReflection(null);
}

  const activeClue = clues[currentClueIndex];

  const revealMode = gameComplete;

  if (!hasStarted) {
 
    return (
    <CinematicIntro
      title={exploration.title}
      intro={exploration.cinematicIntro}
      onBegin={() => setHasStarted(true)}
    />
  );
}
const reflection = reflections?.[0];
  return (
    <main className="min-h-screen bg-[#020817] text-white px-6 py-12">
      <div className="max-w-5xl mx-auto">

<Link
  href="/explorations"
  className="inline-flex items-center gap-2 text-cyan-300 hover:text-cyan-200 transition-colors mb-10"
>
  ← Back to Exploration Hub
</Link>

        <div className="mb-10">
          <p className="uppercase tracking-[0.35em] text-cyan-400 text-xs mb-4">
            Exploration Runtime
          </p>

          <h1 className="text-5xl md:text-7xl font-black leading-none mb-6">
            {exploration.title}
          </h1>

          <p className="max-w-3xl text-lg text-slate-300 leading-relaxed">
            {exploration.cinematicIntro}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
  <div className="px-5 py-3 rounded-2xl border border-cyan-400/20 bg-cyan-400/[0.05]">
    <p className="text-xs uppercase tracking-[0.25em] text-cyan-300 mb-1">
      Score
    </p>

    <p className="text-2xl font-black">
      {score}
    </p>
  </div>

  <div className="px-5 py-3 rounded-2xl border border-white/10 bg-white/[0.03]">
    <p className="text-xs uppercase tracking-[0.25em] text-slate-400 mb-1">
      Time Remaining
    </p>

    <p className="text-2xl font-black">
      {secondsRemaining}s
    </p>
  </div>
</div>
        </div>

        {!revealMode && activeClue && (
          <AnimatePresence mode="wait">
  <motion.div
    key={activeClue.id}
   initial={{
  opacity: 0,
  scale: 0.96,
  filter: 'blur(8px)',
  y: 24,
}}

animate={{
  opacity: 1,
  scale: 1,
  filter: 'blur(0px)',
  y: 0,
}}

exit={{
  opacity: 0,
  scale: 0.98,
  filter: 'blur(6px)',
  y: -18,
}}

transition={{
  duration: 0.55,
  ease: 'easeOut',
}}
    className="rounded-3xl border border-white/10 bg-white/[0.03] p-10 mb-8"
  >
            <div className="mb-6 flex items-center justify-between">
              <span className="uppercase tracking-[0.3em] text-cyan-400 text-xs">
                Clue {activeClue.order}
              </span>

              <span className="text-sm text-slate-400">
                -{activeClue.timePenaltySeconds}s penalty
              </span>
            </div>

            <div className="space-y-4">
  {clues
    .slice(0, currentClueIndex + 1)
    .map((clue: any, index: number) => (
      <motion.div
        key={clue.id}
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.4,
          delay: index * 0.08,
        }}
        className={`rounded-2xl border p-6 ${
          index === currentClueIndex
            ? 'border-cyan-400/40 bg-cyan-400/[0.05]'
            : 'border-white/10 bg-white/[0.03]'
        }`}
      >
        <p className="uppercase tracking-[0.25em] text-cyan-300 text-xs mb-3">
          Clue {clue.order}
        </p>

        <p className="text-2xl md:text-3xl font-bold leading-relaxed">
          {clue.clueText}
        </p>
      </motion.div>
    ))}
</div>

            <div className="mt-10">
  <div className="grid gap-4 md:grid-cols-2">
    {guessOptions.map((option) => (
  <button
    key={option}
    onClick={() => handleGuess(option)}
    className={`rounded-2xl border px-5 py-4 text-left transition-all duration-300 ${
      pendingGuess === option
        ? 'border-cyan-400 bg-cyan-400/20'
        : 'border-white/10 bg-white/[0.03] hover:border-cyan-400/40'
    }`}
  >
    {option}
  </button>
))}
  </div>

{pendingGuess && (
  <motion.div
    initial={{
      opacity: 0,
      y: 20,
    }}
    animate={{
      opacity: 1,
      y: 0,
    }}
    className="mt-8 rounded-3xl border border-cyan-400/20 bg-cyan-400/[0.05] p-8"
  >
    <p className="uppercase tracking-[0.3em] text-cyan-300 text-xs mb-4">
      Journey Insight
    </p>

    <h3 className="text-2xl font-black mb-6">
      What made you choose this role?
    </h3>

    <div className="grid gap-3 md:grid-cols-2">
      {reflectionChoices.map((choice) => (
        <button
          key={choice}
          onClick={() =>
            setSelectedReflection(choice)
          }
          className={`rounded-2xl border px-5 py-4 text-left transition-all duration-300 ${
            selectedReflection === choice
              ? 'border-cyan-400 bg-cyan-400/20'
              : 'border-white/10 bg-white/[0.03] hover:border-cyan-400/40'
          }`}
        >
          {choice}
        </button>
      ))}
    </div>

    <button
      disabled={!selectedReflection}
      onClick={submitReflectionChoice}
      className="mt-8 rounded-2xl bg-cyan-400 px-6 py-4 font-black text-slate-950 disabled:opacity-40"
    >
      Continue Exploration
    </button>
  </motion.div>
)}

  {incorrectGuess && (
    <p className="mt-4 text-red-400 font-semibold">
      Incorrect guess. Time penalty applied.
    </p>
    )}
</div>
            </motion.div>
</AnimatePresence>
)}

        {revealMode && (
          <div className="rounded-3xl border border-cyan-400/30 bg-cyan-400/[0.05] p-10">
            <p className="uppercase tracking-[0.35em] text-cyan-300 text-xs mb-4">
              Career Revealed
            </p>

            <h2 className="text-5xl font-black mb-6">
              {career.title}
            </h2>

            <p className="text-xl text-slate-200 leading-relaxed mb-8">
              {exploration.revealNarrative}
            </p>

            <CareerSpotlightCard career={career} />
            

                            {reflection && (
                <div className="mt-8 rounded-2xl border border-cyan-400/20 bg-cyan-400/[0.05] p-8">
                  <p className="uppercase tracking-[0.3em] text-cyan-300 text-xs mb-4">
                    Reflection Prompt
                  </p>

                  <p className="text-2xl font-semibold leading-relaxed">
                    {reflection.prompt}
                  </p>
                </div>
              )}

            <div className="mt-10 flex justify-center">
  <Link
    href="/explorations"
    className="rounded-2xl border border-cyan-400/20 bg-cyan-400/[0.05] px-8 py-4 text-cyan-200 hover:border-cyan-400/40 hover:bg-cyan-400/[0.08] transition-all duration-300"
  >
    Explore More Healthcare Pathways
  </Link>
</div>
</div>
        )}
      </div>
    </main>
  );
}