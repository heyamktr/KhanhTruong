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
        padding: "clamp(5rem, 8vw, 8rem) clamp(1.25rem, 3vw, 2.5rem)",
      }}
    >
      <FadeIn>
        {/* Heading — centered, matches Skills / Projects / Leadership pattern */}
        <div style={{ textAlign: "center", marginBottom: "clamp(3rem, 5vw, 4rem)" }}>
          <h2
            style={{
              fontWeight: 900,
              textTransform: "uppercase",
              fontSize: "clamp(2rem, 5vw, 72px)",
              color: "#0C0C0C",
              letterSpacing: "-0.025em",
              lineHeight: 1,
            }}
          >
            Certifications
          </h2>
        </div>

        {/* Card list — max-width + auto margin = always centered */}
        <div style={{ maxWidth: "56rem", margin: "0 auto" }}>
          {certifications.map((cert) => (
            <div key={cert.name} className="cert-card">

              {/* ── Left column: identity + verify ── */}
              <div className="cert-identity">
                <div>
                  <p className="cert-label">{cert.issuer}</p>
                  <h3 className="cert-name">{cert.name}</h3>
                  <p className="cert-date">{cert.date}</p>
                </div>

                <a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noreferrer"
                  style={{ textDecoration: "none", display: "inline-block" }}
                >
                  <button
                    className="btn-outline-dark"
                    style={{
                      padding: "0.5rem 1.35rem",
                      fontSize: "clamp(0.62rem, 0.9vw, 0.78rem)",
                    }}
                  >
                    Verify Certificate ↗
                  </button>
                </a>
              </div>

              {/* ── Divider (visible on desktop, hidden on mobile) ── */}
              <div className="cert-divider" aria-hidden="true" />

              {/* ── Right column: courses ── */}
              <div className="cert-courses">
                <p className="cert-label">5 Courses Completed</p>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  {cert.courses.map((course) => (
                    <li
                      key={course}
                      style={{
                        fontSize: "clamp(0.76rem, 1.05vw, 0.9rem)",
                        color: "#0C0C0C",
                        opacity: 0.65,
                        lineHeight: 1.55,
                        display: "flex",
                        gap: "0.55rem",
                        alignItems: "flex-start",
                      }}
                    >
                      <span style={{ opacity: 0.3, flexShrink: 0, lineHeight: 1.55 }}>—</span>
                      {course}
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}
