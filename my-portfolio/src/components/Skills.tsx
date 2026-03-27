import ScrollReveal from "./ScrollReveal";
import SectionTitle from "./SectionTitle";
import Tag from "./Tag";
import { skills } from "@/data/skills";

const groups = [
  { title: "Languages", items: skills.languages },
  { title: "Frontend", items: skills.frontend },
  { title: "Backend", items: skills.backend },
  { title: "Databases", items: skills.databases },
  { title: "Tools & Technologies", items: skills.tools },
  { title: "Concepts", items: skills.concepts },
];

const floatingSkills = [
  { name: "React", short: "R", color: "from-orange-100 to-amber-50" },
  { name: "TypeScript", short: "TS", color: "from-red-100 to-orange-50" },
  { name: "Python", short: "Py", color: "from-amber-100 to-yellow-50" },
  { name: "C++", short: "C++", color: "from-stone-100 to-orange-50" },
  { name: "PostgreSQL", short: "DB", color: "from-orange-100 to-red-50" },
  { name: "AWS", short: "AWS", color: "from-amber-100 to-orange-50" },
];

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-20">
      <SectionTitle title="Technical" highlight="Skills" />
      <div className="mt-14 space-y-6">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <article className="rounded-[2rem] border border-slate-800/70 bg-slate-950/55 p-8 shadow-[0_28px_90px_rgba(2,6,23,0.35)] backdrop-blur-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-orange-400">
              Core Stack
            </p>
            <h3 className="mt-4 text-3xl font-semibold tracking-tight text-slate-100">
              Strong fundamentals across product engineering, AI, and systems work.
            </h3>
            <p className="mt-4 max-w-xl text-base leading-7 text-slate-300">
              The focus here is breadth with practical depth: I build interfaces,
              backends, data workflows, and applied ML features with an emphasis on
              reliability and shipping usable systems.
            </p>
          </article>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {floatingSkills.map((skill, index) => (
              <ScrollReveal
                key={skill.name}
                delayMs={index * 70}
              >
                <article className="rounded-[1.75rem] border border-slate-800/70 bg-slate-950/55 p-5 shadow-[0_20px_60px_rgba(2,6,23,0.35)]">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-orange-500/20 bg-orange-500/10 text-sm font-bold text-orange-300">
                      {skill.short}
                    </div>
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.28em] text-orange-400">
                        Focus
                      </p>
                      <p className="mt-1 text-sm font-semibold text-slate-100">
                        {skill.name}
                      </p>
                    </div>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {groups.map((group, index) => (
            <ScrollReveal key={group.title} delayMs={120 + index * 90}>
              <article
              key={group.title}
              className="relative rounded-[2rem] border border-slate-800/70 bg-slate-950/55 p-8 shadow-[0_24px_80px_rgba(2,6,23,0.35)] backdrop-blur-xl"
            >
              <h3 className="text-xl font-semibold text-slate-100">{group.title}</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <Tag key={item} text={item} />
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
