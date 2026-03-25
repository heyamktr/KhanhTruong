import SectionTitle from "./SectionTitle";
import { about } from "@/data/about";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-20">
      <SectionTitle title="About" highlight="Me" />
      <div className="grid gap-6 md:grid-cols-[1.3fr_0.7fr]">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <p className="text-lg leading-8 text-stone-300">{about.summary}</p>
        </div>
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-400">
            Focus
          </p>
          <ul className="mt-4 space-y-3 text-stone-300">
            {about.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
