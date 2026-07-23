import Image from "next/image";
import FadeIn from "./FadeIn";
import { leadership } from "@/data/leadership";

const tagStyle: React.CSSProperties = {
  fontSize: "clamp(0.6rem, 0.9vw, 0.75rem)",
  fontWeight: 400,
  color: "#D7E2EA",
  opacity: 0.6,
  border: "1px solid rgba(215,226,234,0.25)",
  borderRadius: 9999,
  padding: "0.2rem 0.65rem",
  textTransform: "uppercase",
  letterSpacing: "0.07em",
  display: "inline-block",
};

export default function Leadership() {
  return (
    <section
      id="leadership"
      className="section-dark-overlay"
      style={{
        zIndex: 40,
        padding: "clamp(4rem, 7vw, 6rem) clamp(1.25rem, 3vw, 2.5rem)",
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
            marginBottom: "clamp(2.5rem, 4vw, 3.5rem)",
            letterSpacing: "-0.025em",
            lineHeight: 1,
          }}
        >
          Leadership
        </h2>
      </FadeIn>

      <div
        style={{
          maxWidth: "64rem",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "1.25rem",
        }}
      >
        {leadership.map((item, i) => (
          <FadeIn key={item.role} delay={i * 0.1}>
            <div
              style={{
                border: "1px solid rgba(215,226,234,0.1)",
                borderRadius: 24,
                padding: "clamp(1.5rem, 2.5vw, 2rem)",
                display: "flex",
                flexDirection: "column",
                gap: "0.625rem",
                height: "100%",
                overflow: "hidden",
                position: "relative",
              }}
            >
              {/* Org logo */}
              {item.logo && (
                <div
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: 14,
                    overflow: "hidden",
                    background: "rgba(215,226,234,0.06)",
                    border: "1px solid rgba(215,226,234,0.12)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "0.25rem",
                    flexShrink: 0,
                  }}
                >
                  <Image
                    src={item.logo}
                    alt={item.org}
                    width={44}
                    height={44}
                    style={{ objectFit: "contain", borderRadius: 10 }}
                  />
                </div>
              )}

              <p
                style={{
                  fontSize: "clamp(1rem, 2vw, 1.4rem)",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  color: "#D7E2EA",
                  letterSpacing: "0.02em",
                  lineHeight: 1.2,
                }}
              >
                {item.role}
              </p>
              <p
                style={{
                  fontSize: "clamp(0.75rem, 1.2vw, 0.95rem)",
                  fontWeight: 400,
                  color: "#D7E2EA",
                  opacity: 0.55,
                  lineHeight: 1.4,
                }}
              >
                {item.org}
              </p>
              <p
                style={{
                  fontSize: "clamp(0.65rem, 1vw, 0.8rem)",
                  fontWeight: 500,
                  color: "#D7E2EA",
                  opacity: 0.35,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                }}
              >
                {item.date}
              </p>
              <p
                style={{
                  fontSize: "clamp(0.85rem, 1.4vw, 1rem)",
                  fontWeight: 400,
                  lineHeight: 1.65,
                  color: "#D7E2EA",
                  opacity: 0.65,
                  flex: 1,
                  marginTop: "0.25rem",
                }}
              >
                {item.description}
              </p>
              <div
                style={{ display: "flex", flexWrap: "wrap", gap: "0.375rem", marginTop: "0.5rem" }}
              >
                {item.tags.map((tag) => (
                  <span key={tag} style={tagStyle}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
