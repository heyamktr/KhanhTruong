"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import FadeIn from "./FadeIn";
import { projects, type ProjectData } from "@/data/projects";

const FEATURED_TITLES = ["PitchBook", "Agentic Shopping Assistant", "POV-AI Landmark Discovery App"];

const FEATURED = FEATURED_TITLES
  .map((title) => projects.find((p) => p.title === title)!)
  .filter(Boolean);

const REST = projects.filter((p) => !FEATURED_TITLES.includes(p.title));

const CARD_TOPS = {
  mobile: [96, 156, 216],   // 60px gap — clears 40px mobile border-radius
  desktop: [128, 204, 280], // 76px gap — clears 60px desktop border-radius
};

// ── Shared text styles ──────────────────────────────────────────
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

// ── MoreProjectCard (compact grid tile) ─────────────────────────
function MoreProjectCard({ project, num }: { project: ProjectData; num: number }) {
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
        <div className="proj-tags" role="list">
          {project.tags.map((tag) => (
            <span key={tag} style={tagStyle} role="listitem">{tag}</span>
          ))}
        </div>
        {(demoUrl || githubUrl) && (
          <div className="more-card-links">
            {demoUrl && (
              <a href={demoUrl} target="_blank" rel="noreferrer" className="more-card-link">
                Demo ↗
              </a>
            )}
            {githubUrl && (
              <a href={githubUrl} target="_blank" rel="noreferrer" className="more-card-link">
                GitHub ↗
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}

// ── ProjectCard ─────────────────────────────────────────────────
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
  const bullets = project.contributions ?? project.features ?? [];

  const demoUrl = project.liveUrl !== "#" ? project.liveUrl : null;
  const githubUrl = project.sourceUrl !== "#" ? project.sourceUrl : null;

  return (
    <article
      id={cardId}
      className="proj-card"
      style={
        {
          "--card-top-sm": `${topMobile}px`,
          "--card-top-md": `${topDesktop}px`,
        } as React.CSSProperties
      }
      aria-label={`Project ${index + 1}: ${project.title}`}
    >

      {/* ── Header: index label · category · title · tags ── */}
      <header className="proj-card-header">
        <div className="proj-title-block">
          <p className="proj-category">
            <span className="proj-num-inline">0{index + 1}</span>
            {project.category ? ` · ${project.category.toUpperCase()}` : ""}
          </p>
          <h3 className="proj-title">{project.title}</h3>
          <div className="proj-tags" role="list" aria-label="Technologies used">
            {project.tags.map((tag) => (
              <span key={tag} style={tagStyle} role="listitem">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </header>

      {/* ── Body: image (60) | info (40) ── */}
      <div className="proj-body">

        {/* Image panel — left on desktop, top on mobile */}
        <div className="proj-image-wrap">
          {images.length > 0 ? (
            <>
              <Image
                src={images[activeImg]}
                alt={`${project.title} — project screenshot`}
                fill
                style={{ objectFit: "cover", objectPosition: "top center" }}
                priority={index === 0}
                sizes="(max-width: 640px) 100vw, 60vw"
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
              <p style={{ ...secBody, opacity: 0.25, textAlign: "center" }}>
                {project.description}
              </p>
            </div>
          )}
        </div>

        {/* Info panel — right on desktop, bottom on mobile */}
        <div
          className="proj-info-panel"
          role="region"
          aria-label={`${project.title} details`}
        >
          <ul className="proj-bullet-list">
            {bullets.map((item, i) => (
              <li key={i} style={{ ...secBody, display: "flex", gap: "0.55rem", alignItems: "flex-start" }}>
                <span
                  style={{ color: "#D7E2EA", opacity: 0.28, flexShrink: 0, lineHeight: 1.65 }}
                  aria-hidden="true"
                >
                  —
                </span>
                {item}
              </li>
            ))}
          </ul>

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
                  className="btn-outline"
                  aria-label={`View ${project.title} source code on GitHub`}
                >
                  GitHub ↗
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </article>
  );
}

// ── Main section ────────────────────────────────────────────────
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

      {/* ── More projects grid ─────────────────────────── */}
      <FadeIn>
        <div style={{ marginTop: "5rem" }}>
          {/* Section divider + label */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1.25rem",
              marginBottom: "2rem",
            }}
          >
            <div style={{ flex: 1, height: "1px", background: "rgba(12,12,12,0.1)" }} />
            <p
              style={{
                fontSize: "clamp(0.7rem, 0.95vw, 0.82rem)",
                fontWeight: 700,
                color: "#0C0C0C",
                opacity: 0.5,
                textTransform: "uppercase",
                letterSpacing: "0.18em",
                whiteSpace: "nowrap",
                margin: 0,
              }}
            >
              Also built
            </p>
            <div style={{ flex: 1, height: "1px", background: "rgba(12,12,12,0.1)" }} />
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
