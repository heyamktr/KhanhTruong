import FadeIn from "./FadeIn";
import { experience } from "@/data/experience";

const tagStyle: React.CSSProperties = {
  fontSize: "clamp(0.65rem, 1vw, 0.8rem)",
  fontWeight: 400,
  color: "#D7E2EA",
  opacity: 0.65,
  border: "1px solid rgba(215,226,234,0.3)",
  borderRadius: 9999,
  padding: "0.25rem 0.75rem",
  textTransform: "uppercase",
  letterSpacing: "0.07em",
  display: "inline-block",
};

export default function Experience() {
  return (
    <section
      id="experience"
      className="section-dark-overlay"
      style={{
        zIndex: 20,
        padding: "clamp(5rem, 8vw, 8rem) clamp(1.25rem, 3vw, 2.5rem)",
      }}
    >
      <FadeIn>
        <h2
          style={{
            fontWeight: 900,
            textTransform: "uppercase",
            textAlign: "center",
            fontSize: "clamp(2rem, 5vw, 72px)",
            color: "#D7E2EA",
            marginBottom: "clamp(3rem, 5vw, 4rem)",
            letterSpacing: "-0.025em",
            lineHeight: 1,
          }}
        >
          Experience
        </h2>
      </FadeIn>

      <div style={{ maxWidth: "64rem", margin: "0 auto" }}>
        {experience.map((item, index) => (
          <FadeIn key={`${item.role}-${item.org}`} delay={index * 0.08}>
            <div className="svc-item svc-item--light">
              <span
                style={{
                  fontSize: "clamp(2rem, 7vw, 100px)",
                  fontWeight: 900,
                  lineHeight: 1,
                  flexShrink: 0,
                  color: "#D7E2EA",
                  opacity: 0.12,
                  minWidth: "clamp(3rem, 8vw, 7rem)",
                }}
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <div style={{ flex: 1 }}>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    alignItems: "baseline",
                    gap: "0.5rem 1rem",
                    marginBottom: "0.4rem",
                  }}
                >
                  <p
                    style={{
                      fontSize: "clamp(1rem, 2.2vw, 2.1rem)",
                      fontWeight: 500,
                      textTransform: "uppercase",
                      color: "#D7E2EA",
                    }}
                  >
                    {item.role}
                  </p>
                  {index === 0 && (
                    <span
                      style={{
                        background: "#00A8B6",
                        color: "#ffffff",
                        fontSize: "0.6rem",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: "0.12em",
                        borderRadius: 9999,
                        padding: "0.2rem 0.65rem",
                        display: "inline-block",
                        verticalAlign: "middle",
                        lineHeight: 1.5,
                        flexShrink: 0,
                      }}
                    >
                      Now
                    </span>
                  )}
                  <p
                    style={{
                      fontSize: "clamp(0.8rem, 1.4vw, 1.1rem)",
                      fontWeight: 400,
                      color: "#D7E2EA",
                      opacity: 0.5,
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                    }}
                  >
                    — {item.org}
                  </p>
                </div>
                <p
                  style={{
                    fontSize: "clamp(0.75rem, 1.2vw, 0.95rem)",
                    fontWeight: 400,
                    color: "#D7E2EA",
                    opacity: 0.5,
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    marginBottom: "0.75rem",
                  }}
                >
                  {item.date}
                </p>
                <p
                  style={{
                    fontSize: "clamp(0.85rem, 1.6vw, 1.25rem)",
                    fontWeight: 400,
                    lineHeight: 1.625,
                    color: "#D7E2EA",
                    opacity: 0.65,
                    maxWidth: "42rem",
                    marginBottom: "0.75rem",
                  }}
                >
                  {item.description}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                  {item.tags.map((tag) => (
                    <span key={tag} style={tagStyle}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
