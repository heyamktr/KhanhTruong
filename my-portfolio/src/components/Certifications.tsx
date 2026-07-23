"use client";

import FadeIn from "./FadeIn";
import { certifications } from "@/data/certifications";

// Google-coloured "G" badge shown when no cert screenshot is provided
function GoogleBadge() {
  return (
    <div
      style={{
        background: "#ffffff",
        borderRadius: 20,
        padding: "clamp(1.25rem, 2vw, 1.75rem)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "1rem",
        border: "1px solid rgba(12,12,12,0.1)",
        minHeight: 180,
      }}
    >
      {/* Google coloured G */}
      <svg width="52" height="52" viewBox="0 0 48 48" aria-hidden="true">
        <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
        <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
        <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
        <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.31-8.16 2.31-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
        <path fill="none" d="M0 0h48v48H0z"/>
      </svg>
      <div style={{ textAlign: "center" }}>
        <p style={{
          fontSize: "clamp(0.55rem, 0.8vw, 0.65rem)",
          fontWeight: 700,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "#5f6368",
          margin: "0 0 0.25rem",
        }}>
          Google / Coursera
        </p>
        <p style={{
          fontSize: "clamp(0.7rem, 1vw, 0.82rem)",
          fontWeight: 700,
          color: "#0c0c0c",
          margin: 0,
          lineHeight: 1.3,
        }}>
          Professional<br />Certificate
        </p>
      </div>
      {/* Seal ring */}
      <div style={{
        width: 36,
        height: 36,
        borderRadius: "50%",
        border: "3px solid #4285F4",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M9 12l2 2 4-4" stroke="#4285F4" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </div>
  );
}

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
        {/* Heading */}
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

        <div style={{ maxWidth: "64rem", margin: "0 auto", display: "flex", flexDirection: "column", gap: "2.5rem" }}>
          {certifications.map((cert) => (
            <div
              key={cert.name}
              className="cert-row"
            >
              {/* Certificate visual — PDF iframe or image, with badge fallback */}
              <div className="cert-visual">
                {cert.image?.endsWith(".pdf") ? (
                  <iframe
                    src={cert.image}
                    title={`${cert.name} certificate`}
                    style={{
                      width: "100%",
                      height: "100%",
                      border: "none",
                      borderRadius: 20,
                      display: "block",
                    }}
                  />
                ) : cert.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={cert.image}
                    alt={`${cert.name} certificate`}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: 20,
                      border: "1px solid rgba(12,12,12,0.1)",
                      display: "block",
                    }}
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).style.display = "none";
                      const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                      if (fallback) fallback.style.display = "flex";
                    }}
                  />
                ) : null}
                {/* Badge fallback — shown when no image, or image fails to load */}
                <div style={{ display: cert.image ? "none" : "flex", height: "100%" }}>
                  <GoogleBadge />
                </div>
              </div>

              {/* Cert card */}
              <div className="cert-card">
                {/* Identity */}
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

                {/* Divider */}
                <div className="cert-divider" aria-hidden="true" />

                {/* Courses */}
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
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}
