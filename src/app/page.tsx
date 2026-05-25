import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#020817] text-white flex flex-col items-center justify-center px-6 text-center">
      <p className="uppercase tracking-[0.4em] text-cyan-400 text-xs mb-6">
        MedQuest
      </p>

      <h1 className="text-6xl md:text-8xl font-black leading-none mb-6">
        Explore the
        <br />
        World of Healthcare
      </h1>

      <p className="max-w-2xl text-lg text-slate-300 leading-relaxed mb-10">
        Step into immersive healthcare mysteries where students uncover pathways,
        solve clinical challenges, and discover the people behind patient care.
      </p>

      <Link
        href="/explorations"
        className="rounded-2xl bg-cyan-400 text-slate-950 px-8 py-5 font-black hover:scale-105 transition-all duration-300"
      >
        Begin Exploring
      </Link>
    </main>
  );
}