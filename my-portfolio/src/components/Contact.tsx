"use client";

import { FormEvent, useState } from "react";
import FadeIn from "./FadeIn";

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
    border: "1px solid rgba(12,12,12,0.15)",
    background: "rgba(12,12,12,0.03)",
    padding: "0.875rem 1rem",
    color: "#0C0C0C",
    fontFamily: "var(--font-kanit), sans-serif",
    fontSize: "clamp(0.85rem, 1.3vw, 1rem)",
    fontWeight: 400,
    outline: "none",
    transition: "border-color 0.2s",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontSize: "clamp(0.7rem, 1vw, 0.85rem)",
    fontWeight: 500,
    textTransform: "uppercase",
    letterSpacing: "0.15em",
    color: "#0C0C0C",
    opacity: 0.45,
    marginBottom: "0.5rem",
  };

  return (
    <section
      id="contact"
      className="section-white"
      style={{
        marginTop: "-2.5rem",
        position: "relative",
        zIndex: 50,
        padding: "clamp(5rem, 8vw, 8rem) clamp(1.25rem, 3vw, 2.5rem) clamp(4rem, 6vw, 6rem)",
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
            marginBottom: "clamp(3rem, 5vw, 4rem)",
          }}
        >
          Contact
        </h2>
      </FadeIn>

      <div style={{ maxWidth: "52rem", margin: "0 auto", display: "grid", gap: "3rem" }}>
        <FadeIn delay={0.1}>
          <p
            style={{
              fontSize: "clamp(1rem, 2vw, 1.35rem)",
              fontWeight: 400,
              color: "#0C0C0C",
              opacity: 0.6,
              lineHeight: 1.625,
              marginBottom: "1.75rem",
            }}
          >
            Looking for software engineering internships and product-focused engineering roles.
            Let&apos;s build something together.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
            <a href="mailto:truongnguyent.khanh@gmail.com">
              <button className="btn-contact">Email Me</button>
            </a>
            <a href="https://github.com/heyamktr" target="_blank" rel="noreferrer">
              <button className="btn-outline-dark">GitHub</button>
            </a>
            <a href="https://linkedin.com/in/heyamktr" target="_blank" rel="noreferrer">
              <button className="btn-outline-dark">LinkedIn</button>
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <form onSubmit={handleSubmit} style={{ display: "grid", gap: "1.25rem" }}>
            <div
              style={{
                display: "grid",
                gap: "1.25rem",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              }}
            >
              <div>
                <label htmlFor="name" style={labelStyle}>Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  required
                  style={inputStyle}
                  onFocus={(e) => (e.target.style.borderColor = "rgba(12,12,12,0.4)")}
                  onBlur={(e) => (e.target.style.borderColor = "rgba(12,12,12,0.15)")}
                />
              </div>
              <div>
                <label htmlFor="email" style={labelStyle}>Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                  style={inputStyle}
                  onFocus={(e) => (e.target.style.borderColor = "rgba(12,12,12,0.4)")}
                  onBlur={(e) => (e.target.style.borderColor = "rgba(12,12,12,0.15)")}
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" style={labelStyle}>Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Tell me about the role, project, or what you want to build."
                required
                style={{ ...inputStyle, resize: "vertical" }}
                onFocus={(e) => (e.target.style.borderColor = "rgba(12,12,12,0.4)")}
                onBlur={(e) => (e.target.style.borderColor = "rgba(12,12,12,0.15)")}
              />
            </div>

            {status.type !== "idle" && (
              <p
                style={{
                  fontSize: "0.9rem",
                  color: status.type === "success" ? "#059669" : "#dc2626",
                }}
              >
                {status.message}
              </p>
            )}

            <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-contact"
                style={{
                  opacity: isSubmitting ? 0.7 : undefined,
                  cursor: isSubmitting ? "not-allowed" : undefined,
                }}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
              <a href="#home">
                <button type="button" className="btn-outline-dark">Back to Top</button>
              </a>
            </div>
          </form>
        </FadeIn>
      </div>
    </section>
  );
}
