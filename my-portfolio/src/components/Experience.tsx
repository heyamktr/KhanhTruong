import Image from "next/image";
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
        <div className="absolute bottom-0 left-10 top-0 z-0 w-[2px] rounded-full bg-gradient-to-b from-orange-500/70 via-orange-500/20 to-transparent" />

        <div className="space-y-8">
          {experience.map((item, index) => (
            <ScrollReveal
              key={`${item.role}-${item.org}`}
              delayMs={index * 90}
              className="relative pl-24"
            >
              <div className="absolute left-0 top-8 z-10 flex h-20 w-20 items-center justify-center overflow-hidden rounded-full border border-orange-500/30 bg-slate-950 shadow-[0_22px_52px_rgba(249,115,22,0.24)]">
                {item.logo ? (
                  <Image
                    src={item.logo}
                    alt={`${item.org} logo`}
                    width={200}
                    height={200}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <span className="text-sm font-semibold tracking-[0.12em] text-orange-300">
                    {item.org
                      .split(/[\s,&-]+/)
                      .filter(Boolean)
                      .slice(0, 2)
                      .map((part) => part[0])
                      .join("")}
                  </span>
                )}
              </div>

              <article className="rounded-[2rem] border border-slate-800/70 bg-slate-950/55 p-7 shadow-[0_24px_80px_rgba(2,6,23,0.35)] backdrop-blur-xl transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:shadow-[0_32px_100px_rgba(2,6,23,0.48)]">
                <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
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

                  <div className="flex w-full flex-col gap-4 lg:max-w-[18rem] lg:items-end">
                    {item.image ? (
                      <a
                        href={item.repoUrl !== "#" ? item.repoUrl : undefined}
                        target={item.repoUrl !== "#" ? "_blank" : undefined}
                        rel={item.repoUrl !== "#" ? "noreferrer" : undefined}
                        aria-label={
                          item.repoUrl !== "#"
                            ? `Open the GitHub repository for ${item.role}`
                            : `${item.role} preview image`
                        }
                        className={`group/image block overflow-hidden rounded-[1.5rem] border border-slate-800/80 bg-slate-900/80 ${
                          item.repoUrl !== "#"
                            ? "transition hover:border-orange-400/60"
                            : "pointer-events-none"
                        }`}
                      >
                        <Image
                          src={item.image}
                          alt={`${item.role} preview`}
                          width={480}
                          height={320}
                          className="h-40 w-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/image:scale-[1.03]"
                        />
                        {item.repoUrl !== "#" ? (
                          <div className="flex items-center justify-between gap-3 border-t border-slate-800/80 px-4 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-orange-300">
                            <span>Open Repo</span>
                            <span>GitHub</span>
                          </div>
                        ) : null}
                      </a>
                    ) : null}

                    <div className="flex flex-wrap gap-2 lg:justify-end">
                      {item.tags.slice(0, 3).map((tag) => (
                        <Tag key={`${item.role}-${tag}-summary`} text={tag} />
                      ))}
                    </div>
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
