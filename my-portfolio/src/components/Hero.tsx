"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
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

  useEffect(() => {
    const el = magnetRef.current;
    if (!el) return;
    const PAD = 150,
      STR = 3;

    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const maxD = Math.max(r.width, r.height) / 2 + PAD;
      if (Math.hypot(dx, dy) < maxD) {
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

  return (
    <section
      id="home"
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        overflowX: "clip",
        position: "relative",
        background: "#0C0C0C",
      }}
    >
      {/* Nav */}
      <nav
        className="anim-nav"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "clamp(1.5rem, 3vw, 2rem) clamp(1.5rem, 3vw, 2.5rem) 0",
          position: "relative",
          zIndex: 20,
        }}
      >
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            style={navLinkStyle}
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
      </nav>

      {/* Big heading */}
      <div
        className="anim-heading"
        style={{ overflow: "hidden", width: "100%", marginTop: "clamp(1rem, 2vw, -1.25rem)" }}
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
          Hi, i&apos;m khanh
        </h1>
      </div>

      {/* Bottom row: tagline + CTA */}
      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          padding: "0 clamp(1.5rem, 3vw, 2.5rem) clamp(1.75rem, 3vw, 2.5rem)",
          position: "relative",
          zIndex: 20,
        }}
      >
        <p
          className="anim-desc"
          style={{
            color: "#D7E2EA",
            fontWeight: 300,
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

      {/* Portrait — centered on mobile, bottom-centered on sm+ */}
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
  );
}
