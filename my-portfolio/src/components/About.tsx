import SectionTitle from "./SectionTitle";
import { about } from "@/data/about";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-20">
      <SectionTitle title="About" highlight="Me" />
      <div className="grid gap-6 md:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-3xl border border-slate-800/70 bg-slate-950/55 p-8 shadow-[0_24px_80px_rgba(2,6,23,0.35)] backdrop-blur-xl">
          <p className="text-lg leading-8 text-slate-300">{about.summary}</p>
        </div>
        <div className="rounded-3xl border border-slate-800/70 bg-slate-950/55 p-8 shadow-[0_24px_80px_rgba(2,6,23,0.35)] backdrop-blur-xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-400">
            Snapshot
          </p>
          <ul className="mt-4 space-y-3 text-slate-300">
            {about.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="rounded-3xl border border-slate-800/70 bg-slate-950/55 p-8 shadow-[0_24px_80px_rgba(2,6,23,0.35)] backdrop-blur-xl md:col-span-2">
          <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-400">
                Education
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-slate-100">{about.education.school}</h3>
              <p className="mt-1 text-slate-300">{about.education.degree}</p>
            </div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-orange-400">
              {about.education.date}
            </p>
          </div>

          <ul className="mt-6 space-y-3 text-slate-300">
            {about.education.details.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
