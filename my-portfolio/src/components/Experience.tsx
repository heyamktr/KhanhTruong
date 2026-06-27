import FadeIn from "./FadeIn";
import { experience } from "@/data/experience";

const tagStyle: React.CSSProperties = {
  fontSize: "clamp(0.65rem, 1vw, 0.8rem)",
  fontWeight: 400,
  color: "#0C0C0C",
  opacity: 0.45,
  border: "1px solid rgba(12,12,12,0.25)",
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
      className="section-white"
      style={{
        padding: "clamp(5rem, 8vw, 8rem) clamp(1.25rem, 3vw, 2.5rem)",
        marginTop: "-2.5rem",
        position: "relative",
        zIndex: 20,
      }}
    >
      <FadeIn>
        <h2
          style={{
            fontWeight: 900,
            textTransform: "uppercase",
            textAlign: "center",
            fontSize: "clamp(3rem, 12vw, 160px)",
            color: "#0C0C0C",
            marginBottom: "clamp(4rem, 7vw, 7rem)",
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
            <div className="svc-item">
              <span
                style={{
                  fontSize: "clamp(2rem, 7vw, 100px)",
                  fontWeight: 900,
                  lineHeight: 1,
                  flexShrink: 0,
                  color: "#0C0C0C",
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
                      color: "#0C0C0C",
                    }}
                  >
                    {item.role}
                  </p>
                  <p
                    style={{
                      fontSize: "clamp(0.8rem, 1.4vw, 1.1rem)",
                      fontWeight: 400,
                      color: "#0C0C0C",
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
                    fontWeight: 300,
                    color: "#0C0C0C",
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
                    fontWeight: 300,
                    lineHeight: 1.625,
                    color: "#0C0C0C",
                    opacity: 0.6,
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
