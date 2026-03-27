"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import ScrollReveal from "./ScrollReveal";
import SectionTitle from "./SectionTitle";
import Tag from "./Tag";
import { projects } from "@/data/projects";

type Project = (typeof projects)[number];

export default function Projects() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  useEffect(() => {
    if (!activeProject) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveProject(null);
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [activeProject]);

  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-20">
      <SectionTitle title="Software" highlight="Projects" />

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => (
          <ScrollReveal key={project.title} delayMs={index * 90}>
            <button
            key={project.title}
            type="button"
            onClick={() => setActiveProject(project)}
            className="group overflow-hidden rounded-3xl border border-slate-800/70 bg-slate-950/55 text-left shadow-[0_24px_80px_rgba(2,6,23,0.35)] backdrop-blur-xl transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:shadow-[0_34px_90px_rgba(2,6,23,0.5)]"
          >
            {project.image ? (
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={360}
                className="h-52 w-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.02]"
              />
            ) : (
              <div className="flex h-52 items-end bg-gradient-to-br from-slate-900 via-[#1c0e08] to-slate-950 p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-400">
                  Image Placeholder
                </p>
              </div>
            )}
            <div className="p-6">
              <h3 className="text-lg font-bold text-slate-100">{project.title}</h3>
              <p className="mb-4 mt-3 text-sm leading-6 text-slate-300">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Tag key={tag} text={tag} />
                ))}
              </div>

              <div className="mt-6 flex items-center justify-between">
                <span className="text-sm font-semibold text-orange-400">
                  View Details
                </span>
                <span className="rounded-full border border-orange-500/20 bg-orange-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-orange-300">
                  Open
                </span>
              </div>
            </div>
            </button>
          </ScrollReveal>
        ))}
      </div>

      {activeProject ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/75 px-4 py-8 backdrop-blur-sm"
          onClick={() => setActiveProject(null)}
        >
          <div
            className="max-h-[90vh] w-full max-w-4xl scale-100 overflow-auto rounded-[2rem] border border-slate-800/80 bg-slate-950/95 p-6 shadow-[0_40px_120px_rgba(2,6,23,0.7)] transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] md:p-8"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-6">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-orange-400">
                  Project Detail
                </p>
                <h3 className="mt-3 text-3xl font-semibold tracking-tight text-slate-100">
                  {activeProject.title}
                </h3>
                <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300">
                  {activeProject.fullDescription}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setActiveProject(null)}
                className="rounded-full border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-300 transition hover:border-orange-400 hover:text-white"
              >
                Close
              </button>
            </div>

            <div className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                {activeProject.image ? (
                  <Image
                    src={activeProject.image}
                    alt={activeProject.title}
                    width={900}
                    height={560}
                    className="h-72 w-full rounded-[1.5rem] object-cover"
                  />
                ) : (
                  <div className="flex h-72 items-end rounded-[1.5rem] bg-gradient-to-br from-slate-900 via-[#241109] to-slate-950 p-6">
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-400">
                      Project Visual
                    </p>
                  </div>
                )}

                <div className="mt-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-orange-400">
                    Core Details
                  </p>
                  <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-300">
                    {activeProject.details.map((detail) => (
                      <li key={detail} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-orange-500" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                <div className="rounded-[1.5rem] border border-slate-800/80 bg-slate-900/80 p-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-orange-400">
                    Features
                  </p>
                  <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-300">
                    {activeProject.features?.length
                      ? activeProject.features.map((feature) => (
                          <li key={feature} className="flex gap-3">
                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-orange-500" />
                            <span>{feature}</span>
                          </li>
                        ))
                      : null}
                  </ul>
                </div>

                <div className="mt-6 rounded-[1.5rem] border border-slate-800/80 bg-slate-900/80 p-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-orange-400">
                    Tech Stack
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {activeProject.tags.map((tag) => (
                      <Tag key={tag} text={tag} />
                    ))}
                  </div>

                  <div className="mt-6 flex flex-wrap gap-3">
                    {activeProject.sourceUrl !== "#" ? (
                      <a
                        href={activeProject.sourceUrl}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`Open the GitHub repository for ${activeProject.title}`}
                        className="rounded-full bg-orange-500 px-5 py-3 text-sm font-semibold text-white hover:bg-orange-400"
                      >
                        GitHub
                      </a>
                    ) : null}
                    {activeProject.liveUrl !== "#" ? (
                      <a
                        href={activeProject.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`Open the live demo for ${activeProject.title}`}
                        className="rounded-full border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-100 hover:border-orange-400"
                      >
                        Live Demo
                      </a>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
