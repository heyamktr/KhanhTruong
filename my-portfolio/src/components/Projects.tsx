import Image from "next/image";
import SectionTitle from "./SectionTitle";
import Tag from "./Tag";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-20">
      <SectionTitle title="My" highlight="Projects" />

      <div className="grid gap-6 md:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.title}
            className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-xl shadow-black/20"
          >
            <Image
              src={project.image}
              alt={project.title}
              width={600}
              height={360}
              className="h-52 w-full object-cover"
            />
            <div className="p-6">
              <h3 className="text-lg font-bold">{project.title}</h3>
              <p className="mb-4 mt-3 text-sm leading-6 text-stone-300">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Tag key={tag} text={tag} />
                ))}
              </div>

              <div className="mt-6 flex gap-4 text-sm font-semibold text-orange-400">
                <a href={project.liveUrl} className="hover:text-orange-300">
                  Live Demo
                </a>
                <a href={project.sourceUrl} className="hover:text-orange-300">
                  Source
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
