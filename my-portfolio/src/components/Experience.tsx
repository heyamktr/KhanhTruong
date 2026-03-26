import SectionTitle from "./SectionTitle";
import ScrollReveal from "./ScrollReveal";
import Tag from "./Tag";
import { experience } from "@/data/experience";

const highlights = [
  { label: "Roles", value: `${experience.length}` },
  { label: "Research + Product", value: "Hands-on" },
  { label: "Impact", value: "Shipped + Measured" },
];

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-20">
      <SectionTitle title="Research &" highlight="Experience" />
      <p className="mx-auto max-w-2xl text-center text-sm leading-7 text-slate-400 md:text-base">
        A timeline of roles, systems, and measurable outcomes across research,
        engineering, teaching, and technical leadership.
      </p>

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {highlights.map((item, index) => (
          <ScrollReveal key={item.label} delayMs={index * 70}>
            <article className="rounded-[1.75rem] border border-slate-800/70 bg-slate-950/45 p-6 shadow-[0_20px_60px_rgba(2,6,23,0.32)] backdrop-blur-xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-orange-400">
                {item.label}
              </p>
              <p className="mt-3 text-2xl font-semibold tracking-tight text-slate-100">
                {item.value}
              </p>
            </article>
          </ScrollReveal>
        ))}
      </div>

      <div className="relative mt-16">
        <div className="absolute bottom-0 left-6 top-0 z-0 w-[2px] rounded-full bg-gradient-to-b from-orange-500/70 via-orange-500/20 to-transparent" />

        <div className="space-y-8">
          {experience.map((item, index) => (
            <ScrollReveal
              key={`${item.role}-${item.org}`}
              delayMs={index * 90}
              className="relative pl-16"
            >
              <div className="absolute left-0 top-8 z-10 flex h-12 w-12 items-center justify-center rounded-full border border-orange-500/30 bg-slate-950 text-sm font-semibold tracking-[0.2em] text-orange-300 shadow-[0_14px_36px_rgba(249,115,22,0.22)]">
                {String(index + 1).padStart(2, "0")}
              </div>

              <article className="rounded-[2rem] border border-slate-800/70 bg-slate-950/55 p-7 shadow-[0_24px_80px_rgba(2,6,23,0.35)] backdrop-blur-xl transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:shadow-[0_32px_100px_rgba(2,6,23,0.48)]">
                <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                  <div className="max-w-3xl">
                    <div className="flex flex-wrap items-center gap-3">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-orange-400">
                        {item.date}
                      </p>
                      <span className="h-1 w-1 rounded-full bg-slate-600" />
                      <p className="text-sm font-medium text-slate-400">
                        {item.org}
                      </p>
                    </div>
                    <h3 className="mt-3 text-2xl font-semibold tracking-tight text-slate-100">
                      {item.role}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-slate-300">
                      {item.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 lg:max-w-[15rem] lg:justify-end">
                    {item.tags.slice(0, 3).map((tag) => (
                      <Tag key={`${item.role}-${tag}-summary`} text={tag} />
                    ))}
                  </div>
                </div>

                {"bullets" in item && item.bullets?.length ? (
                  <ul className="mt-6 grid gap-3 text-sm leading-6 text-slate-300">
                    {item.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex gap-3 rounded-2xl border border-slate-800/70 bg-slate-900/55 px-4 py-3"
                      >
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-orange-500" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}

                <div className="mt-6 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <Tag key={tag} text={tag} />
                  ))}
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
