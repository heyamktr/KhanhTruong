import FadeIn from "./FadeIn";
import { certifications } from "@/data/certifications";

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="section-white"
      style={{
        marginTop: "-2.5rem",
        position: "relative",
        zIndex: 45,
        padding: "clamp(4rem, 7vw, 6rem) clamp(1.25rem, 3vw, 2.5rem)",
      }}
    >
      <FadeIn>
        <h2
          style={{
            fontWeight: 900,
            textTransform: "uppercase",
            fontSize: "clamp(2rem, 5vw, 72px)",
            color: "#0C0C0C",
            letterSpacing: "-0.025em",
            lineHeight: 1,
            marginBottom: "clamp(2.5rem, 4vw, 3.5rem)",
          }}
        >
          Certifications
        </h2>

        <div style={{ maxWidth: "56rem" }}>
          {certifications.map((cert) => (
            <div
              key={cert.name}
              style={{
                border: "1.5px solid rgba(12,12,12,0.1)",
                borderRadius: "20px",
                padding: "clamp(1.5rem, 2.5vw, 2rem)",
                display: "grid",
                gridTemplateColumns: "1fr auto",
                gap: "1.5rem",
                alignItems: "start",
              }}
            >
              {/* Left: name, issuer, courses */}
              <div>
                <p
                  style={{
                    fontSize: "clamp(0.58rem, 0.85vw, 0.68rem)",
                    fontWeight: 600,
                    color: "#0C0C0C",
                    opacity: 0.38,
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    marginBottom: "0.4rem",
                  }}
                >
                  {cert.issuer}
                </p>
                <h3
                  style={{
                    fontWeight: 800,
                    fontSize: "clamp(1rem, 1.8vw, 1.45rem)",
                    color: "#0C0C0C",
                    letterSpacing: "-0.01em",
                    lineHeight: 1.2,
                    marginBottom: "1.25rem",
                  }}
                >
                  {cert.name}
                </h3>

                <p
                  style={{
                    fontSize: "clamp(0.62rem, 0.85vw, 0.72rem)",
                    fontWeight: 600,
                    color: "#0C0C0C",
                    opacity: 0.38,
                    letterSpacing: "0.13em",
                    textTransform: "uppercase",
                    marginBottom: "0.6rem",
                  }}
                >
                  Courses Completed
                </p>
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
                  {cert.courses.map((course) => (
                    <li
                      key={course}
                      style={{
                        fontSize: "clamp(0.75rem, 1vw, 0.875rem)",
                        color: "#0C0C0C",
                        opacity: 0.68,
                        lineHeight: 1.55,
                        display: "flex",
                        gap: "0.5rem",
                        alignItems: "flex-start",
                      }}
                    >
                      <span style={{ opacity: 0.35, flexShrink: 0, lineHeight: 1.55 }}>—</span>
                      {course}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right: date + verify link */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-end",
                  gap: "1rem",
                  flexShrink: 0,
                }}
              >
                <p
                  style={{
                    fontSize: "clamp(0.7rem, 0.95vw, 0.8rem)",
                    fontWeight: 500,
                    color: "#0C0C0C",
                    opacity: 0.45,
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    whiteSpace: "nowrap",
                  }}
                >
                  {cert.date}
                </p>
                <a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  <button className="btn-outline-dark" style={{ padding: "0.4rem 1rem", fontSize: "clamp(0.6rem, 0.85vw, 0.72rem)" }}>
                    Verify ↗
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}
