'use client';

import { motion } from 'framer-motion';

interface Props {
  title: string;

  intro: string;

  onBegin: () => void;
}

export default function CinematicIntro({
  title,
  intro,
  onBegin,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-[#020817] flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-[40rem] h-[40rem] bg-cyan-400/10 blur-3xl rounded-full" />

        <div className="absolute bottom-0 right-0 w-[35rem] h-[35rem] bg-blue-500/10 blur-3xl rounded-full" />
      </div>

      <div className="relative z-10 max-w-4xl px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="uppercase tracking-[0.45em] text-cyan-400 text-xs mb-6"
        >
          Incoming Exploration
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-6xl md:text-8xl font-black leading-none mb-8"
        >
          {title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-xl md:text-2xl text-slate-300 leading-relaxed mb-12"
        >
          {intro}
        </motion.p>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          onClick={onBegin}
          className="px-10 py-5 rounded-2xl bg-cyan-400 text-slate-950 font-black text-lg shadow-2xl shadow-cyan-400/20"
        >
          Begin Exploration
        </motion.button>
      </div>
    </motion.div>
  );
}