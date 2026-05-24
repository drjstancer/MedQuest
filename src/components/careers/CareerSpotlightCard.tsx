import { Career } from '@/types/exploration';

interface Props {
  career: Career;
}

export default function CareerSpotlightCard({
  career,
}: Props) {
  return (
    <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/[0.04] p-8">
      <p className="uppercase tracking-[0.35em] text-cyan-300 text-xs mb-4">
        Career Spotlight
      </p>

      <h2 className="text-5xl font-black mb-6">
        {career.title}
      </h2>

      <p className="text-xl text-slate-200 leading-relaxed mb-8">
        {career.overview}
      </p>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
          <p className="text-xs uppercase tracking-[0.25em] text-cyan-300 mb-3">
            Education Pathway
          </p>

          <p className="text-slate-300 leading-relaxed">
            {career.education}
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
          <p className="text-xs uppercase tracking-[0.25em] text-cyan-300 mb-3">
            Job Outlook
          </p>

          <p className="text-slate-300 leading-relaxed">
            {career.jobOutlook}
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
          <p className="text-xs uppercase tracking-[0.25em] text-cyan-300 mb-3">
            A Common Misconception
          </p>

          <p className="text-slate-300 leading-relaxed">
            {career.misconception}
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
          <p className="text-xs uppercase tracking-[0.25em] text-cyan-300 mb-3">
            Day In The Life
          </p>

          <p className="text-slate-300 leading-relaxed">
            {career.dayInTheLife}
          </p>
        </div>
      </div>

<div className="mt-10 flex flex-wrap gap-4">
  <a
    href={career.blsUrl}
    target="_blank"
    rel="noreferrer"
    className="rounded-2xl border border-cyan-400/20 bg-cyan-400/[0.05] px-6 py-4 text-cyan-200 hover:border-cyan-400/40 hover:bg-cyan-400/[0.08] transition-all duration-300"
  >
    Occupational Outlook
  </a>

  {career.learnMoreUrl && (
    <a
      href={career.learnMoreUrl}
      target="_blank"
      rel="noreferrer"
      className="rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-4 text-slate-200 hover:border-white/20 transition-all duration-300"
    >
      Learn More
    </a>
  )}

  {career.youtubeVideoId && (
    <a
      href={career.youtubeVideoId}
      target="_blank"
      rel="noreferrer"
      className="rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-4 text-slate-200 hover:border-white/20 transition-all duration-300"
    >
      Day in the Life Video
    </a>
  )}
</div>

    </div>
  );
}