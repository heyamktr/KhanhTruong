"use client";

import Image from "next/image";
import { useEffect } from "react";
import FadeIn from "./FadeIn";
import { projects } from "@/data/projects";

// Pick the 3 most impressive projects for sticky cards
const FEATURED = [projects[3], projects[2], projects[4]]; // Agentic Shopping, Greencastle, POV-AI

const CARD_TOPS = {
  mobile: [96, 124, 152],
  desktop: [128, 156, 184],
};

const projTagStyle: React.CSSProperties = {
  display: "inline-block",
  fontSize: "clamp(0.6rem, 0.9vw, 0.75rem)",
  fontWeight: 400,
  color: "#D7E2EA",
  opacity: 0.5,
  border: "1px solid rgba(215,226,234,0.3)",
  borderRadius: 9999,
  padding: "0.2rem 0.6rem",
  textTransform: "uppercase",
  letterSpacing: "0.07em",
};

export default function Projects() {
  useEffect(() => {
    const tick = () => {
      const isMd = window.innerWidth >= 768;
      const tops = isMd ? CARD_TOPS.desktop : CARD_TOPS.mobile;
      const cards = ["pc0", "pc1", "pc2"].map((id) =>
        document.getElementById(id)
      );
      if (cards.some((c) => !c)) return;
      cards.forEach((card, i) => {
        let over = 0;
        for (let j = i + 1; j < cards.length; j++) {
          const next = cards[j];
          if (next && next.getBoundingClientRect().top <= tops[j] + 40)
            over++;
        }
        if (card)
          card.style.transform = `scale(${(1 - over * 0.03).toFixed(4)})`;
      });
    };

    window.addEventListener("scroll", tick, { passive: true });
    tick();
    return () => window.removeEventListener("scroll", tick);
  }, []);

  return (
    <section
      id="projects"
      className="section-dark-overlay"
      style={{
        padding: "5rem clamp(1.25rem, 3vw, 2.5rem) 10rem",
      }}
    >
      <FadeIn>
        <h2
          className="hero-heading"
          style={{
            fontWeight: 900,
            textTransform: "uppercase",
            textAlign: "center",
            fontSize: "clamp(3rem, 12vw, 160px)",
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
        const topMobile = CARD_TOPS.mobile[index];
        const topDesktop = CARD_TOPS.desktop[index];

        return (
          <div key={project.title} style={{ height: "85vh" }}>
            <div
              id={cardId}
              className="proj-card"
              style={{
                top: topMobile,
              }}
            >
              <style>{`
                @media (min-width: 768px) { #${cardId} { top: ${topDesktop}px; } }
              `}</style>

              {/* Card header */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "1rem",
                  marginBottom: "1.25rem",
                  flexWrap: "wrap",
                }}
              >
                <div
                  style={{ display: "flex", alignItems: "center", gap: "1.25rem" }}
                >
                  <span
                    style={{
                      fontWeight: 900,
                      color: "#D7E2EA",
                      lineHeight: 1,
                      fontSize: "clamp(2.5rem, 9vw, 120px)",
                      flexShrink: 0,
                    }}
                  >
                    0{index + 1}
                  </span>
                  <div>
                    <p
                      style={{
                        fontSize: "clamp(0.65rem, 1vw, 0.85rem)",
                        color: "#D7E2EA",
                        opacity: 0.6,
                        textTransform: "uppercase",
                        letterSpacing: "0.1em",
                        marginBottom: "0.2rem",
                      }}
                    >
                      {project.tags.slice(0, 2).join(" · ")}
                    </p>
                    <p
                      style={{
                        fontSize: "clamp(1rem, 2.2vw, 2rem)",
                        color: "#D7E2EA",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: "0.04em",
                      }}
                    >
                      {project.title}
                    </p>
                    <div
                      style={{
                        display: "flex",
                        gap: "0.4rem",
                        flexWrap: "wrap",
                        marginTop: "0.4rem",
                      }}
                    >
                      {project.tags.slice(0, 4).map((tag) => (
                        <span key={tag} style={projTagStyle}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {project.sourceUrl !== "#" ? (
                  <a href={project.sourceUrl} target="_blank" rel="noreferrer">
                    <button className="btn-outline">View Source</button>
                  </a>
                ) : null}
              </div>

              {/* Card images */}
              <div
                style={{
                  display: "flex",
                  gap: 12,
                  height: "calc(clamp(130px,16vw,230px) + clamp(160px,22vw,340px) + 12px)",
                }}
              >
                {/* Left column — 2 stacked images */}
                <div
                  style={{
                    width: "40%",
                    display: "flex",
                    flexDirection: "column",
                    gap: 12,
                  }}
                >
                  <div
                    className="proj-img"
                    style={{
                      width: "100%",
                      height: "clamp(130px,16vw,230px)",
                      flexShrink: 0,
                      background: `linear-gradient(135deg, #0a1628 0%, #1a3a5c 50%, #0d2137 100%)`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <span
                      style={{
                        color: "#D7E2EA",
                        opacity: 0.35,
                        fontSize: "clamp(0.7rem, 1.1vw, 0.9rem)",
                        fontWeight: 500,
                        textTransform: "uppercase",
                        letterSpacing: "0.1em",
                        textAlign: "center",
                        padding: "0.5rem",
                      }}
                    >
                      {project.tags[0]}
                    </span>
                  </div>
                  <div
                    className="proj-img"
                    style={{
                      width: "100%",
                      flex: 1,
                      background: `linear-gradient(135deg, #0d1a1a 0%, #1a3535 50%, #0d2525 100%)`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <span
                      style={{
                        color: "#D7E2EA",
                        opacity: 0.35,
                        fontSize: "clamp(0.7rem, 1.1vw, 0.9rem)",
                        fontWeight: 500,
                        textTransform: "uppercase",
                        letterSpacing: "0.1em",
                        textAlign: "center",
                        padding: "0.5rem",
                      }}
                    >
                      {project.tags[1] ?? project.tags[0]}
                    </span>
                  </div>
                </div>

                {/* Right column — main thumbnail */}
                <div style={{ width: "60%" }}>
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={900}
                      height={600}
                      className="proj-img"
                      style={{ width: "100%", height: "100%" }}
                    />
                  ) : (
                    <div
                      className="proj-img"
                      style={{
                        width: "100%",
                        height: "100%",
                        background:
                          "linear-gradient(135deg, #1a0a28 0%, #3a1a5c 40%, #1a2a5c 100%)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <p
                        style={{
                          color: "#D7E2EA",
                          opacity: 0.45,
                          fontSize: "clamp(0.85rem, 1.4vw, 1.1rem)",
                          fontWeight: 300,
                          textAlign: "center",
                          padding: "2rem",
                          lineHeight: 1.6,
                          maxWidth: 320,
                        }}
                      >
                        {project.description}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
