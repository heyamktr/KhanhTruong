"use client";

import Image from "next/image";
import { useState } from "react";
import FadeIn from "./FadeIn";
import { projects, type ProjectData } from "@/data/projects";

const FEATURED_TITLES = [
  "PitchBook",
  "Agentic Shopping Assistant",
  "POV-AI Landmark Discovery App",
];
const FEATURED = FEATURED_TITLES
  .map((t) => projects.find((p) => p.title === t)!)
  .filter(Boolean);

const REST = projects.filter((p) => !FEATURED_TITLES.includes(p.title));

// ── Shared inline styles ────────────────────────────────────────
const secBody: React.CSSProperties = {
  fontSize: "clamp(0.78rem, 1.05vw, 0.88rem)",
  fontWeight: 400,
  color: "#D7E2EA",
  opacity: 0.68,
  lineHeight: 1.7,
  margin: 0,
};

const tagStyle: React.CSSProperties = {
  display: "inline-block",
  fontSize: "clamp(0.56rem, 0.8vw, 0.68rem)",
  fontWeight: 400,
  color: "#D7E2EA",
  opacity: 0.45,
  border: "1px solid rgba(215,226,234,0.2)",
  borderRadius: 9999,
  padding: "0.16rem 0.55rem",
  letterSpacing: "0.05em",
  whiteSpace: "nowrap",
};

// ── Featured card ───────────────────────────────────────────────
function ProjectCard({
  project,
  index,
}: {
  project: ProjectData;
  index: number;
}) {
  const images = project.images ?? (project.image ? [project.image] : []);
  const [activeImg, setActiveImg] = useState(0);
  const bullets = project.contributions ?? project.features ?? [];
  const demoUrl = project.liveUrl !== "#" ? project.liveUrl : null;
  const githubUrl = project.sourceUrl !== "#" ? project.sourceUrl : null;
  const isFlipped = index % 2 === 1;

  return (
    <FadeIn delay={index * 0.08}>
      <article
        className={`proj-card${isFlipped ? " proj-card--flip" : ""}`}
        aria-label={`Project ${index + 1}: ${project.title}`}
      >
        {/* ── Image zone ── */}
        <div className="proj-img-zone">
          {images.length > 0 ? (
            <>
              <Image
                src={images[activeImg]}
                alt={project.title}
                fill
                style={{ objectFit: "cover", objectPosition: "top center" }}
                priority={index === 0}
                sizes="(max-width: 768px) 100vw, 60vw"
              />
              {images.length > 1 && (
                <nav className="proj-img-dots" aria-label="Screenshot navigation">
                  {images.map((_, i) => (
                    <button
                      key={i}
                      className={`proj-img-dot${i === activeImg ? " active" : ""}`}
                      onClick={() => setActiveImg(i)}
                      aria-label={`Screenshot ${i + 1} of ${images.length}`}
                      aria-current={i === activeImg ? "true" : undefined}
                    />
                  ))}
                </nav>
              )}
            </>
          ) : (
            <div
              style={{
                width: "100%",
                height: "100%",
                minHeight: 260,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "2rem",
              }}
            >
              <p style={{ ...secBody, opacity: 0.18, textAlign: "center" }}>
                {project.title}
              </p>
            </div>
          )}
          {/* Gradient dissolve — direction set by CSS per breakpoint / flip */}
          <div className="proj-img-fade" aria-hidden="true" />
        </div>

        {/* ── Info zone ── */}
        <div className="proj-info-zone">
          {/* Watermark number */}
          <span className="proj-watermark" aria-hidden="true">
            0{index + 1}
          </span>

          <div className="proj-info-inner">
            {/* Meta */}
            <div>
              <p className="proj-category">
                <span className="proj-num-inline">0{index + 1}</span>
                {project.category
                  ? ` · ${project.category.toUpperCase()}`
                  : ""}
              </p>
              <h3 className="proj-title">{project.title}</h3>
              <div
                className="proj-tags"
                role="list"
                aria-label="Technologies used"
              >
                {project.tags.map((tag) => (
                  <span key={tag} style={tagStyle} role="listitem">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="proj-meta-divider" />

            {/* Bullets */}
            <ul className="proj-bullet-list">
              {bullets.map((item, i) => (
                <li
                  key={i}
                  style={{
                    ...secBody,
                    display: "flex",
                    gap: "0.55rem",
                    alignItems: "flex-start",
                  }}
                >
                  <span
                    style={{
                      color: "#D7E2EA",
                      opacity: 0.22,
                      flexShrink: 0,
                      lineHeight: 1.7,
                    }}
                    aria-hidden="true"
                  >
                    —
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            {/* Actions */}
            {(demoUrl || githubUrl) && (
              <div className="proj-actions">
                {demoUrl && (
                  <a
                    href={demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-outline proj-btn-primary"
                    aria-label={`View live demo of ${project.title}`}
                  >
                    View Demo
                  </a>
                )}
                {githubUrl && (
                  <a
                    href={githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-outline btn-github"
                    aria-label={`View ${project.title} source code on GitHub`}
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                      style={{ display: "inline-block", verticalAlign: "middle", marginRight: "0.4em", marginTop: "-2px", flexShrink: 0 }}
                    >
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.28-.01-1.03-.02-2.03-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.08 1.84 1.23 1.84 1.23 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02 0 2.04.14 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22 0 1.61-.01 2.9-.01 3.29 0 .32.22.7.83.58C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                    GitHub
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </article>
    </FadeIn>
  );
}

// ── Compact "Also built" tile ───────────────────────────────────
function MoreProjectCard({
  project,
  num,
}: {
  project: ProjectData;
  num: number;
}) {
  const githubUrl = project.sourceUrl !== "#" ? project.sourceUrl : null;
  const demoUrl = project.liveUrl !== "#" ? project.liveUrl : null;

  return (
    <article className="more-card">
      <div className="more-card-top">
        <span className="more-card-num">0{num}</span>
        <h3 className="more-card-title">{project.title}</h3>
        <p className="more-card-desc">{project.description}</p>
      </div>
      <div className="more-card-bottom">
        <div className="proj-tags" style={{ marginBottom: "0.85rem" }} role="list">
          {project.tags.map((tag) => (
            <span key={tag} style={tagStyle} role="listitem">
              {tag}
            </span>
          ))}
        </div>
        {(demoUrl || githubUrl) && (
          <div className="more-card-links">
            {demoUrl && (
              <a
                href={demoUrl}
                target="_blank"
                rel="noreferrer"
                className="more-card-link"
              >
                Demo ↗
              </a>
            )}
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noreferrer"
                className="more-card-link more-card-link--github"
              >
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  style={{ display: "inline-block", verticalAlign: "middle", marginRight: "0.3em", marginTop: "-2px" }}
                >
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.28-.01-1.03-.02-2.03-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.08 1.84 1.23 1.84 1.23 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02 0 2.04.14 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22 0 1.61-.01 2.9-.01 3.29 0 .32.22.7.83.58C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"/>
                </svg>
                GitHub ↗
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}

// ── Section ─────────────────────────────────────────────────────
export default function Projects() {
  return (
    <section
      id="projects"
      className="section-white"
      style={{
        marginTop: "-2.5rem",
        position: "relative",
        zIndex: 30,
        padding:
          "clamp(4rem, 7vw, 7rem) clamp(1.25rem, 3vw, 2.5rem) clamp(5rem, 8vw, 8rem)",
      }}
    >
      {/* Section header */}
      <FadeIn>
        <div className="proj-section-header">
          <h2 className="proj-section-title">Projects</h2>
          <span className="proj-section-count">
            {String(projects.length).padStart(2, "0")} Total
          </span>
        </div>
      </FadeIn>

      {/* Featured cards */}
      <div>
        {FEATURED.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>

      {/* Also built */}
      <FadeIn>
        <div style={{ marginTop: "clamp(3rem, 5vw, 5rem)" }}>
          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <p
              style={{
                fontSize: "clamp(1.1rem, 2vw, 1.6rem)",
                fontWeight: 900,
                color: "#0C0C0C",
                textTransform: "uppercase",
                letterSpacing: "-0.01em",
                margin: "0 0 0.4rem",
              }}
            >
              Also Built
            </p>
            <p
              style={{
                fontSize: "clamp(0.65rem, 0.9vw, 0.78rem)",
                fontWeight: 500,
                color: "#0C0C0C",
                opacity: 0.38,
                textTransform: "uppercase",
                letterSpacing: "0.14em",
                margin: 0,
              }}
            >
              More projects from the archive
            </p>
          </div>
          <div className="more-grid">
            {REST.map((project, i) => (
              <MoreProjectCard
                key={project.title}
                project={project}
                num={FEATURED.length + i + 1}
              />
            ))}
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
