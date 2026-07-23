"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import CountUp from "./CountUp";
import FadeIn from "./FadeIn";

const BIO =
  "I build across web, AI, and embedded systems — full-stack platforms, AI-powered pipelines, and computer vision on Raspberry Pi. I care about shipping things that real people can actually use.";

const STATS = [
  { number: "3.82", label: "GPA" },
  { number: "5.97×", label: "AI Inference Speedup" },
  { number: "35%", label: "CV Latency Reduced" },
  { number: "300+", label: "Students Impacted" },
];

const NAV_LINKS = [
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#leadership", label: "Leadership" },
  { href: "#contact", label: "Contact" },
];

const navLinkStyle: React.CSSProperties = {
  color: "#D7E2EA",
  textDecoration: "none",
  fontWeight: 500,
  textTransform: "uppercase",
  letterSpacing: "0.1em",
  fontSize: "clamp(0.875rem, 1.4vw, 1.4rem)",
  transition: "opacity 0.2s",
  cursor: "pointer",
};

export default function Hero() {
  const magnetRef = useRef<HTMLDivElement>(null);
  const orb1Ref = useRef<HTMLDivElement>(null);
  const orb2Ref = useRef<HTMLDivElement>(null);
  const orb3Ref = useRef<HTMLDivElement>(null);

  // Portrait magnet effect
  useEffect(() => {
    const el = magnetRef.current;
    if (!el) return;
    const PAD = 150, STR = 3;

    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      if (Math.hypot(dx, dy) < Math.max(r.width, r.height) / 2 + PAD) {
        el.style.transform = `translate3d(${dx / STR}px, ${dy / STR}px, 0)`;
        el.style.transition = "transform 0.3s ease-out";
      } else {
        el.style.transform = "translate3d(0,0,0)";
        el.style.transition = "transform 0.6s ease-in-out";
      }
    };
    const onLeave = () => {
      el.style.transform = "translate3d(0,0,0)";
      el.style.transition = "transform 0.6s ease-in-out";
    };

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  // Gradient orb parallax — direct DOM writes, zero re-renders
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const onScroll = () => {
      const y = window.scrollY;
      if (orb1Ref.current) orb1Ref.current.style.transform = `translateY(${y * 0.28}px)`;
      if (orb2Ref.current) orb2Ref.current.style.transform = `translateY(${-y * 0.2}px)`;
      if (orb3Ref.current) orb3Ref.current.style.transform = `translateY(${y * 0.13}px)`;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* ── Hero viewport ─────────────────────────────────────── */}
      <section
        id="home"
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          position: "relative",
          background: "#0C0C0C",
        }}
      >
        {/* ── Background layer (orbs + dot grid) ─────────────── */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 0,
            pointerEvents: "none",
            overflow: "hidden",
          }}
        >
          {/* Dot grid — subtle texture */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage:
                "radial-gradient(rgba(215,226,234,0.065) 1px, transparent 1px)",
              backgroundSize: "36px 36px",
            }}
          />

          {/* Teal orb — top-left, largest */}
          <div
            ref={orb1Ref}
            style={{
              position: "absolute",
              width: "clamp(420px, 80vw, 1000px)",
              height: "clamp(420px, 80vw, 1000px)",
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(0,168,182,0.14) 0%, transparent 60%)",
              top: "-35%",
              left: "-18%",
              willChange: "transform",
            }}
          />

          {/* Blue orb — bottom-right, medium */}
          <div
            ref={orb2Ref}
            style={{
              position: "absolute",
              width: "clamp(280px, 55vw, 750px)",
              height: "clamp(280px, 55vw, 750px)",
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(33,118,176,0.11) 0%, transparent 60%)",
              bottom: "-22%",
              right: "-8%",
              willChange: "transform",
            }}
          />

          {/* Green orb — center accent, smallest */}
          <div
            ref={orb3Ref}
            style={{
              position: "absolute",
              width: "clamp(180px, 32vw, 460px)",
              height: "clamp(180px, 32vw, 460px)",
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(0,190,124,0.08) 0%, transparent 60%)",
              top: "28%",
              right: "26%",
              willChange: "transform",
            }}
          />
        </div>

        {/* ── Nav ─────────────────────────────────────────────── */}
        <nav
          className="anim-nav"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding:
              "clamp(1.5rem, 3vw, 2rem) clamp(1.5rem, 3vw, 2.5rem) 0",
            position: "relative",
            zIndex: 20,
          }}
        >
          <a
            href="#home"
            style={{
              ...navLinkStyle,
              fontWeight: 900,
              letterSpacing: "0.12em",
              fontSize: "clamp(1rem, 1.5vw, 1.5rem)",
            }}
            onMouseEnter={(e) =>
              ((e.target as HTMLElement).style.opacity = "0.7")
            }
            onMouseLeave={(e) =>
              ((e.target as HTMLElement).style.opacity = "1")
            }
          >
            KT
          </a>
          <div
            style={{
              display: "flex",
              gap: "clamp(1rem, 2.5vw, 2.5rem)",
              alignItems: "center",
            }}
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                style={{
                  ...navLinkStyle,
                  fontSize: "clamp(0.75rem, 1.2vw, 1.2rem)",
                }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLElement).style.opacity = "0.7")
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLElement).style.opacity = "1")
                }
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://drive.google.com/file/d/1Oxi15YUcd5qIfdSn93luGoZPBqHWbgBA/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="anim-btn"
            >
              <button
                className="btn-contact"
                style={{
                  padding: "0.5rem 1.25rem",
                  fontSize: "clamp(0.65rem, 1vw, 0.875rem)",
                }}
              >
                Resume
              </button>
            </a>
          </div>
        </nav>

        {/* ── Big heading ──────────────────────────────────────── */}
        <div
          className="anim-heading"
          style={{
            overflow: "hidden",
            width: "100%",
            marginTop: "clamp(1rem, 2vw, -1.25rem)",
            position: "relative",
            zIndex: 2,
          }}
        >
          <h1
            className="hero-heading"
            style={{
              fontWeight: 900,
              textTransform: "uppercase",
              letterSpacing: "-0.025em",
              lineHeight: 1,
              whiteSpace: "nowrap",
              width: "100%",
              padding: "0 1.5rem",
              fontSize: "clamp(11vw, 14vw, 17.5vw)",
            }}
          >
            Hi, I&apos;m Khanh
          </h1>
        </div>

        {/* ── Bottom row: tagline + CTA ─────────────────────── */}
        <div
          style={{
            flex: 1,
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            padding:
              "0 clamp(1.5rem, 3vw, 2.5rem) clamp(1.75rem, 3vw, 2.5rem)",
            position: "relative",
            zIndex: 20,
          }}
        >
          <p
            className="anim-desc"
            style={{
              color: "#D7E2EA",
              fontWeight: 400,
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              lineHeight: 1.375,
              fontSize: "clamp(0.75rem, 1.4vw, 1.5rem)",
              maxWidth: "clamp(160px, 20vw, 260px)",
            }}
          >
            a software engineer building systems across web, ai, and mobile
          </p>

          <a href="#contact" className="anim-btn">
            <button className="btn-contact">Contact Me</button>
          </a>
        </div>

        {/* ── Portrait ─────────────────────────────────────────── */}
        <div
          style={{
            position: "absolute",
            left: "50%",
            bottom: 0,
            zIndex: 10,
            transform: "translateX(-50%)",
          }}
        >
          <div className="anim-portrait">
            <div ref={magnetRef} style={{ willChange: "transform" }}>
              <Image
                src="/images/avatar.png"
                alt="Khanh Truong"
                width={520}
                height={520}
                priority
                style={{
                  width: "clamp(260px, 38vw, 520px)",
                  height: "auto",
                  display: "block",
                  borderRadius: "50%",
                  objectFit: "cover",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── About — dark continuation ─────────────────────────── */}
      <section
        id="about"
        style={{
          background: "#0C0C0C",
          padding: "clamp(5rem, 8vw, 8rem) clamp(1.25rem, 3vw, 2.5rem)",
        }}
      >
        <div style={{ maxWidth: "64rem", margin: "0 auto" }}>
          {/* Stats row — CountUp animates on scroll-into-view */}
          <FadeIn>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))",
                gap: "2rem",
                marginBottom: "3.5rem",
              }}
            >
              {STATS.map((s) => (
                <div key={s.label}>
                  <p
                    style={{
                      fontSize: "clamp(2.5rem, 5vw, 4rem)",
                      fontWeight: 900,
                      color: "#D7E2EA",
                      lineHeight: 1,
                      letterSpacing: "-0.025em",
                    }}
                  >
                    <CountUp value={s.number} />
                  </p>
                  <p
                    style={{
                      marginTop: "0.5rem",
                      fontSize: "clamp(0.65rem, 1vw, 0.8rem)",
                      fontWeight: 500,
                      color: "#D7E2EA",
                      opacity: 0.45,
                      textTransform: "uppercase",
                      letterSpacing: "0.12em",
                    }}
                  >
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>

          <div
            style={{
              height: "1px",
              background: "rgba(215,226,234,0.1)",
              marginBottom: "3rem",
            }}
          />

          <FadeIn delay={0.1}>
            <p
              style={{
                color: "#D7E2EA",
                fontWeight: 400,
                lineHeight: 1.75,
                fontSize: "clamp(1rem, 1.8vw, 1.25rem)",
                maxWidth: "44rem",
                opacity: 0.8,
              }}
            >
              {BIO}
            </p>
            <p
              style={{
                marginTop: "1.75rem",
                fontSize: "clamp(0.65rem, 1vw, 0.8rem)",
                fontWeight: 500,
                color: "#D7E2EA",
                opacity: 0.35,
                textTransform: "uppercase",
                letterSpacing: "0.12em",
              }}
            >
              DePauw University &mdash; B.A. Computer Science &amp; Mathematics
              &mdash; GPA 3.82 &mdash; May 2028
            </p>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
