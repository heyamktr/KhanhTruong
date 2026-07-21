"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import FadeIn from "./FadeIn";
import { projects, type ProjectData } from "@/data/projects";

// Featured: PitchBook [6], Agentic Shopping [3], POV-AI [4]
const FEATURED = [projects[6], projects[3], projects[4]];

const CARD_TOPS = {
  mobile: [96, 156, 216],   // 60px gap — clears 40px mobile border-radius
  desktop: [128, 204, 280], // 76px gap — clears 60px desktop border-radius
};

// ── Shared text styles ────────────────────────────────────────────
const secLabel: React.CSSProperties = {
  fontSize: "clamp(0.6rem, 0.82vw, 0.68rem)",
  fontWeight: 700,
  color: "#D7E2EA",
  opacity: 0.58,
  textTransform: "uppercase",
  letterSpacing: "0.16em",
  marginBottom: "0.45rem",
  display: "block",
};

const secBody: React.CSSProperties = {
  fontSize: "clamp(0.78rem, 1.05vw, 0.9rem)",
  fontWeight: 400,
  color: "#D7E2EA",
  opacity: 0.72,
  lineHeight: 1.65,
  margin: 0,
};

const tagStyle: React.CSSProperties = {
  display: "inline-block",
  fontSize: "clamp(0.58rem, 0.82vw, 0.7rem)",
  fontWeight: 400,
  color: "#D7E2EA",
  opacity: 0.48,
  border: "1px solid rgba(215,226,234,0.22)",
  borderRadius: 9999,
  padding: "0.18rem 0.6rem",
  letterSpacing: "0.05em",
  whiteSpace: "nowrap",
};

// ── ProjectCard ───────────────────────────────────────────────────
function ProjectCard({
  project,
  index,
  cardId,
  topMobile,
  topDesktop,
}: {
  project: ProjectData;
  index: number;
  cardId: string;
  topMobile: number;
  topDesktop: number;
}) {
  const images = project.images ?? (project.image ? [project.image] : []);
  const [activeImg, setActiveImg] = useState(0);

  const demoUrl = project.liveUrl !== "#" ? project.liveUrl : null;
  const githubUrl = project.sourceUrl !== "#" ? project.sourceUrl : null;

  return (
    <article
      id={cardId}
      className="proj-card"
      style={{ top: topMobile }}
      aria-label={`Project ${index + 1}: ${project.title}`}
    >
      <style>{`@media (min-width: 768px) { #${cardId} { top: ${topDesktop}px; } }`}</style>

      {/* ── Header ── */}
      <header className="proj-card-header">
        {/* Reduced-dominance project number */}
        <span className="proj-num" aria-hidden="true">
          0{index + 1}
        </span>

        {/* Category · Title · Description · Tags */}
        <div className="proj-title-block">
          {project.category && (
            <p className="proj-category">{project.category.toUpperCase()}</p>
          )}
          <h3 className="proj-title">{project.title}</h3>
          <p className="proj-desc">{project.description}</p>
          <div className="proj-tags" role="list" aria-label="Technologies used">
            {project.tags.map((tag) => (
              <span key={tag} style={tagStyle} role="listitem">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Action buttons */}
        <div className="proj-actions">
          {demoUrl && (
            <a href={demoUrl} target="_blank" rel="noreferrer">
              <button
                className="btn-outline proj-btn-primary"
                aria-label={`View live demo of ${project.title}`}
              >
                View Demo
              </button>
            </a>
          )}
          {githubUrl && (
            <a href={githubUrl} target="_blank" rel="noreferrer">
              <button
                className="btn-outline"
                aria-label={`View ${project.title} source code on GitHub`}
              >
                GitHub ↗
              </button>
            </a>
          )}
        </div>
      </header>

      {/* ── Body: 35% info · 65% image ── */}
      <div className="proj-body">
        {/* Left: case-study info panel */}
        <div
          className="proj-info-panel"
          role="region"
          aria-label={`${project.title} case study`}
        >
          {project.challenge && (
            <section>
              <span style={secLabel}>The Challenge</span>
              <p style={secBody}>{project.challenge}</p>
            </section>
          )}

          {project.contributions && project.contributions.length > 0 && (
            <section>
              <span style={secLabel}>What I Built</span>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.3rem",
                }}
              >
                {project.contributions.map((item, i) => (
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
                      style={{ color: "#D7E2EA", opacity: 0.3, flexShrink: 0, lineHeight: 1.65 }}
                      aria-hidden="true"
                    >
                      —
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {project.role && (
            <section>
              <span style={secLabel}>My Role</span>
              <p style={secBody}>{project.role}</p>
            </section>
          )}

          {/* Fallback: show features if no case-study fields provided */}
          {!project.challenge && !project.contributions && project.features.length > 0 && (
            <section>
              <span style={secLabel}>Key Features</span>
              <ul
                style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.3rem" }}
              >
                {project.features.map((f, i) => (
                  <li key={i} style={{ ...secBody, display: "flex", gap: "0.55rem" }}>
                    <span style={{ color: "#D7E2EA", opacity: 0.3, flexShrink: 0 }} aria-hidden="true">—</span>
                    {f}
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>

        {/* Right: screenshot / image panel */}
        <div className="proj-image-wrap">
          {images.length > 0 ? (
            <>
              <Image
                src={images[activeImg]}
                alt={`${project.title} — project screenshot`}
                fill
                style={{ objectFit: "cover", objectPosition: "top center" }}
                priority={index === 0}
                sizes="(max-width: 640px) 100vw, 65vw"
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
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "2rem",
              }}
            >
              <p style={{ ...secBody, opacity: 0.3, textAlign: "center" }}>
                {project.description}
              </p>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}

// ── Main section ──────────────────────────────────────────────────
export default function Projects() {
  useEffect(() => {
    const tick = () => {
      const isMd = window.innerWidth >= 768;
      const tops = isMd ? CARD_TOPS.desktop : CARD_TOPS.mobile;
      const cards = ["pc0", "pc1", "pc2"].map((id) => document.getElementById(id));
      if (cards.some((c) => !c)) return;
      cards.forEach((card, i) => {
        let over = 0;
        for (let j = i + 1; j < cards.length; j++) {
          const next = cards[j];
          if (next && next.getBoundingClientRect().top <= tops[j] + 40) over++;
        }
        if (card) card.style.transform = `scale(${(1 - over * 0.03).toFixed(4)})`;
      });
    };

    window.addEventListener("scroll", tick, { passive: true });
    tick();
    return () => window.removeEventListener("scroll", tick);
  }, []);

  return (
    <section
      id="projects"
      className="section-white"
      style={{
        marginTop: "-2.5rem",
        position: "relative",
        zIndex: 30,
        padding: "5rem clamp(1.25rem, 3vw, 2.5rem) 10rem",
      }}
    >
      <FadeIn>
        <h2
          style={{
            fontWeight: 900,
            textTransform: "uppercase",
            textAlign: "center",
            fontSize: "clamp(2rem, 5vw, 72px)",
            color: "#0C0C0C",
            letterSpacing: "-0.025em",
            lineHeight: 1,
            marginBottom: "3rem",
          }}
        >
          Projects
        </h2>
      </FadeIn>

      {FEATURED.map((project, index) => {
        const cardId = `pc${index}`;
        return (
          <div key={project.title} style={{ height: "85vh" }}>
            <ProjectCard
              project={project}
              index={index}
              cardId={cardId}
              topMobile={CARD_TOPS.mobile[index]}
              topDesktop={CARD_TOPS.desktop[index]}
            />
          </div>
        );
      })}
    </section>
  );
}
