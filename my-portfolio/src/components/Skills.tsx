import SectionTitle from "./SectionTitle";
import Tag from "./Tag";
import { skills } from "@/data/skills";

const groups = [
  { title: "Programming", items: skills.programming },
  { title: "Frontend", items: skills.frontend },
  { title: "Backend", items: skills.backend },
];

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-20">
      <SectionTitle title="Technical" highlight="Skills" />
      <div className="grid gap-6 md:grid-cols-3">
        {groups.map((group) => (
          <article
            key={group.title}
            className="rounded-3xl border border-white/10 bg-white/5 p-8"
          >
            <h3 className="text-xl font-semibold">{group.title}</h3>
            <div className="mt-5 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <Tag key={item} text={item} />
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
