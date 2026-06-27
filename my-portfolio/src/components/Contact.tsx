"use client";

import { FormEvent, useState } from "react";
import FadeIn from "./FadeIn";

const INFO_ROWS = [
  { label: "University", value: "DePauw University" },
  { label: "Degree", value: "B.A. CS & Mathematics" },
  { label: "Graduation", value: "May 2027" },
  { label: "GPA", value: "3.78" },
];

export default function Contact() {
  const [status, setStatus] = useState<{
    type: "idle" | "success" | "error";
    message: string;
  }>({ type: "idle", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "idle", message: "" });

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      message: String(formData.get("message") ?? ""),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = (await response.json()) as { error?: string };
      if (!response.ok) {
        setStatus({
          type: "error",
          message: result.error ?? "Something went wrong. Please try again.",
        });
        return;
      }
      form.reset();
      setStatus({
        type: "success",
        message: "Message sent! I'll get back to you soon.",
      });
    } catch {
      setStatus({
        type: "error",
        message: "Unable to send right now. Please try again in a moment.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  const inputStyle: React.CSSProperties = {
    width: "100%",
    borderRadius: 16,
    border: "1px solid rgba(215,226,234,0.2)",
    background: "rgba(255,255,255,0.05)",
    padding: "0.875rem 1rem",
    color: "#D7E2EA",
    fontFamily: "var(--font-kanit), sans-serif",
    fontSize: "clamp(0.85rem, 1.3vw, 1rem)",
    fontWeight: 300,
    outline: "none",
    transition: "border-color 0.2s",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontSize: "clamp(0.7rem, 1vw, 0.85rem)",
    fontWeight: 500,
    textTransform: "uppercase",
    letterSpacing: "0.15em",
    color: "#D7E2EA",
    opacity: 0.5,
    marginBottom: "0.5rem",
  };

  return (
    <section
      id="contact"
      style={{
        background: "#0C0C0C",
        padding: "clamp(5rem, 8vw, 8rem) clamp(1.25rem, 3vw, 2.5rem) clamp(4rem, 6vw, 6rem)",
        marginTop: "-2.5rem",
        borderRadius: "40px 40px 0 0",
        position: "relative",
        zIndex: 30,
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
            marginBottom: "clamp(3rem, 5vw, 5rem)",
            letterSpacing: "-0.025em",
            lineHeight: 1,
          }}
        >
          Contact
        </h2>
      </FadeIn>

      <div
        style={{
          maxWidth: "60rem",
          margin: "0 auto",
          display: "grid",
          gap: "3rem",
          gridTemplateColumns: "1fr",
        }}
      >
        {/* Top: tagline + links + edu info */}
        <div
          style={{
            display: "grid",
            gap: "3rem",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            alignItems: "start",
          }}
        >
          <FadeIn delay={0.1}>
            <div>
              <p
                style={{
                  fontSize: "clamp(1rem, 2vw, 1.35rem)",
                  fontWeight: 300,
                  color: "#D7E2EA",
                  opacity: 0.6,
                  lineHeight: 1.625,
                  marginBottom: "2rem",
                }}
              >
                Looking for software engineering internships and
                product-focused engineering roles. Let&apos;s build something
                together.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
                <a href="mailto:truongnguyent.khanh@gmail.com">
                  <button className="btn-contact">Email Me</button>
                </a>
                <a
                  href="https://github.com/heyamktr"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="btn-outline">GitHub</button>
                </a>
                <a
                  href="https://linkedin.com/in/heyamktr"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="btn-outline">LinkedIn</button>
                </a>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div>
              {INFO_ROWS.map((row, i) => (
                <div
                  key={row.label}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "1rem 0",
                    borderBottom:
                      i < INFO_ROWS.length - 1
                        ? "1px solid rgba(215,226,234,0.1)"
                        : "none",
                  }}
                >
                  <span
                    style={{
                      fontSize: "clamp(0.75rem, 1.1vw, 0.9rem)",
                      fontWeight: 500,
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      color: "#D7E2EA",
                      opacity: 0.4,
                    }}
                  >
                    {row.label}
                  </span>
                  <span
                    style={{
                      fontSize: "clamp(0.85rem, 1.3vw, 1rem)",
                      fontWeight: 500,
                      color: "#D7E2EA",
                    }}
                  >
                    {row.value}
                  </span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>

        {/* Contact form */}
        <FadeIn delay={0.25}>
          <form onSubmit={handleSubmit} style={{ display: "grid", gap: "1.25rem" }}>
            <div
              style={{
                display: "grid",
                gap: "1.25rem",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              }}
            >
              <div>
                <label htmlFor="name" style={labelStyle}>
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  required
                  style={inputStyle}
                  onFocus={(e) =>
                    (e.target.style.borderColor = "rgba(215,226,234,0.5)")
                  }
                  onBlur={(e) =>
                    (e.target.style.borderColor = "rgba(215,226,234,0.2)")
                  }
                />
              </div>
              <div>
                <label htmlFor="email" style={labelStyle}>
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                  style={inputStyle}
                  onFocus={(e) =>
                    (e.target.style.borderColor = "rgba(215,226,234,0.5)")
                  }
                  onBlur={(e) =>
                    (e.target.style.borderColor = "rgba(215,226,234,0.2)")
                  }
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" style={labelStyle}>
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Tell me about the role, project, or what you want to build."
                required
                style={{ ...inputStyle, resize: "vertical" }}
                onFocus={(e) =>
                  (e.target.style.borderColor = "rgba(215,226,234,0.5)")
                }
                onBlur={(e) =>
                  (e.target.style.borderColor = "rgba(215,226,234,0.2)")
                }
              />
            </div>

            {status.type !== "idle" ? (
              <p
                style={{
                  fontSize: "0.9rem",
                  color:
                    status.type === "success" ? "#6ee7b7" : "#fca5a5",
                }}
              >
                {status.message}
              </p>
            ) : null}

            <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-contact"
                style={{ opacity: isSubmitting ? 0.7 : undefined, cursor: isSubmitting ? "not-allowed" : undefined }}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
              <a href="#home">
                <button type="button" className="btn-outline">
                  Back to Top
                </button>
              </a>
            </div>
          </form>
        </FadeIn>
      </div>
    </section>
  );
}
