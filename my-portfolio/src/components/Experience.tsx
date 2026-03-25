import SectionTitle from "./SectionTitle";
import Tag from "./Tag";
import { experience } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-20">
      <SectionTitle title="My" highlight="Experience" />
      <div className="space-y-6">
        {experience.map((item) => (
          <article
            key={`${item.role}-${item.org}`}
            className="rounded-3xl border border-white/10 bg-white/5 p-8"
          >
            <div className="flex flex-col justify-between gap-3 md:flex-row md:items-start">
              <div>
                <h3 className="text-2xl font-semibold">{item.role}</h3>
                <p className="mt-1 text-stone-300">{item.org}</p>
              </div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-orange-400">
                {item.date}
              </p>
            </div>
            <p className="mt-4 text-stone-300">{item.description}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {item.tags.map((tag) => (
                <Tag key={tag} text={tag} />
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
