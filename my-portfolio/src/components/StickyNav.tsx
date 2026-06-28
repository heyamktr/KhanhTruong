"use client";

import { useEffect, useState } from "react";

const NAV_LINKS = [
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#leadership", label: "Leadership" },
  { href: "#contact", label: "Contact" },
];

const linkStyle: React.CSSProperties = {
  color: "#D7E2EA",
  textDecoration: "none",
  fontWeight: 500,
  textTransform: "uppercase",
  letterSpacing: "0.1em",
  fontSize: "clamp(0.7rem, 1vw, 0.9rem)",
  transition: "opacity 0.2s",
  cursor: "pointer",
  whiteSpace: "nowrap",
};

export default function StickyNav() {
  const [visible, setVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => {
      const show = window.scrollY > window.innerHeight * 0.85;
      setVisible(show);
      if (!show) setMenuOpen(false);
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      <nav
        aria-label="Site navigation"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 999,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0.75rem clamp(1.25rem, 3vw, 2.5rem)",
          background: "rgba(12, 12, 12, 0.92)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          borderBottom: "1px solid rgba(215, 226, 234, 0.07)",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(-110%)",
          transition: "opacity 0.3s ease, transform 0.3s ease",
          pointerEvents: visible ? "auto" : "none",
        }}
      >
        <a
          href="#home"
          style={{
            color: "#D7E2EA",
            textDecoration: "none",
            fontWeight: 900,
            textTransform: "uppercase",
            letterSpacing: "0.12em",
            fontSize: "clamp(0.9rem, 1.4vw, 1.2rem)",
          }}
        >
          KT
        </a>

        {/* Desktop links */}
        <div
          className="sticky-nav-desktop"
          style={{ gap: "clamp(1rem, 2vw, 2rem)", alignItems: "center" }}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={linkStyle}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.opacity = "0.55")}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.opacity = "1")}
            >
              {link.label}
            </a>
          ))}
          <a href="/Khanh_Truong_Resume.pdf" target="_blank" rel="noreferrer">
            <button
              className="btn-contact"
              style={{ padding: "0.4rem 1.1rem", fontSize: "0.72rem" }}
            >
              Resume
            </button>
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="sticky-nav-hamburger"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "0.25rem",
            flexDirection: "column",
            gap: "5px",
          }}
        >
          <span
            style={{
              display: "block",
              width: 22,
              height: 2,
              background: "#D7E2EA",
              transition: "transform 0.25s ease",
              transform: menuOpen ? "translateY(7px) rotate(45deg)" : "none",
            }}
          />
          <span
            style={{
              display: "block",
              width: 22,
              height: 2,
              background: "#D7E2EA",
              transition: "opacity 0.25s ease",
              opacity: menuOpen ? 0 : 1,
            }}
          />
          <span
            style={{
              display: "block",
              width: 22,
              height: 2,
              background: "#D7E2EA",
              transition: "transform 0.25s ease",
              transform: menuOpen ? "translateY(-7px) rotate(-45deg)" : "none",
            }}
          />
        </button>
      </nav>

      {/* Mobile full-screen menu */}
      {visible && menuOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 998,
            background: "rgba(12, 12, 12, 0.97)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "2rem",
          }}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                color: "#D7E2EA",
                textDecoration: "none",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.15em",
                fontSize: "1.5rem",
                transition: "opacity 0.2s",
              }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.opacity = "0.55")}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.opacity = "1")}
            >
              {link.label}
            </a>
          ))}
          <a
            href="/Khanh_Truong_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            onClick={() => setMenuOpen(false)}
          >
            <button className="btn-contact">Resume</button>
          </a>
        </div>
      )}
    </>
  );
}
