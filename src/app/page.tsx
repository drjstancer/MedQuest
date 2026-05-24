import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#020817] text-white flex flex-col items-center justify-center px-6 text-center">
      <p className="uppercase tracking-[0.3em] text-cyan-400 text-sm mb-6">
        Mizzou Med Presents
      </p>

      <h1 className="text-6xl md:text-8xl font-black mb-6">
        MedQuest
      </h1>

      <p className="max-w-2xl text-slate-300 text-xl leading-relaxed mb-10">
        Interactive healthcare career explorations designed to help
        students uncover pathways, solve clinical mysteries, and
        discover the people behind patient care.
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