"use client";

import { useEffect, useRef } from "react";
import FadeIn from "./FadeIn";

const BIO =
  "I'm a software engineer and CS student at DePauw University — building systems across web, AI, and mobile that are technically solid and measurable in impact. Whether it's an AI-powered pipeline, a full-stack platform, or an embedded computer vision system, I care about shipping things that real people can actually use. Let's build something incredible together!";

const floatingImgStyle = (
  top: string | undefined,
  bottom: string | undefined,
  left: string | undefined,
  right: string | undefined,
  width: string
): React.CSSProperties => ({
  position: "absolute",
  top,
  bottom,
  left,
  right,
  width,
  borderRadius: 16,
  objectFit: "cover" as const,
  display: "block",
});

export default function About() {
  const parasRef = useRef<HTMLParagraphElement>(null);
  const charsRef = useRef<NodeListOf<Element> | null>(null);

  useEffect(() => {
    const tick = () => {
      const el = parasRef.current;
      if (!el) return;
      if (!charsRef.current) charsRef.current = el.querySelectorAll(".ch");
      const chars = charsRef.current;
      if (!chars.length) return;
      const rect = el.getBoundingClientRect();
      const wh = window.innerHeight;
      const range = wh * 0.6 + rect.height;
      const pos = wh * 0.8 - rect.top;
      const prog = Math.max(0, Math.min(1, pos / range));
      const n = chars.length;
      chars.forEach((span, i) => {
        const p = Math.max(0, Math.min(1, prog * n - i));
        (span as HTMLElement).style.opacity = (0.2 + p * 0.8).toFixed(3);
      });
    };

    window.addEventListener("scroll", tick, { passive: true });
    tick();
    return () => window.removeEventListener("scroll", tick);
  }, []);

  return (
    <section
      id="about"
      className="section-white"
      style={{
        position: "relative",
        zIndex: 10,
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "5rem 1.25rem",
        overflow: "hidden",
      }}
    >
      {/* Floating decorative images */}
      <FadeIn
        direction="left"
        delay={0.1}
        style={floatingImgStyle("4%", undefined, "1%", undefined, "clamp(100px, 15vw, 210px)")}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://placehold.co/210x210/0d1f2d/bbccd7?text=%3C%2F%3E"
          alt=""
          style={{ width: "100%", borderRadius: 16, display: "block" }}
        />
      </FadeIn>

      <FadeIn
        direction="left"
        delay={0.25}
        style={floatingImgStyle(undefined, "8%", "3%", undefined, "clamp(90px, 12vw, 180px)")}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://placehold.co/180x180/0d1f2d/bbccd7?text=%7B+%7D"
          alt=""
          style={{ width: "100%", borderRadius: 16, display: "block" }}
        />
      </FadeIn>

      <FadeIn
        direction="right"
        delay={0.15}
        style={floatingImgStyle("4%", undefined, undefined, "1%", "clamp(100px, 15vw, 210px)")}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://placehold.co/210x210/0d1f2d/bbccd7?text=AI"
          alt=""
          style={{ width: "100%", borderRadius: 16, display: "block" }}
        />
      </FadeIn>

      <FadeIn
        direction="right"
        delay={0.3}
        style={floatingImgStyle(undefined, "8%", undefined, "3%", "clamp(110px, 16vw, 220px)")}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://placehold.co/220x220/0d1f2d/bbccd7?text=%E2%96%B6"
          alt=""
          style={{ width: "100%", borderRadius: 16, display: "block" }}
        />
      </FadeIn>

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "3.5rem",
          width: "100%",
        }}
      >
        <FadeIn>
          <h2
            style={{
              fontWeight: 900,
              textTransform: "uppercase",
              lineHeight: 1,
              letterSpacing: "-0.025em",
              textAlign: "center",
              fontSize: "clamp(3rem, 12vw, 160px)",
              color: "#0C0C0C",
            }}
          >
            About me
          </h2>
        </FadeIn>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "5rem",
          }}
        >
          <p
            ref={parasRef}
            style={{
              color: "#0C0C0C",
              fontWeight: 500,
              textAlign: "center",
              lineHeight: 1.625,
              maxWidth: 560,
              fontSize: "clamp(1rem, 2vw, 1.35rem)",
            }}
          >
            {BIO.split("").map((ch, i) => (
              <span key={i} className="ch" style={{ opacity: 0.2 }}>
                {ch === " " ? " " : ch}
              </span>
            ))}
          </p>

          <a href="#contact">
            <button className="btn-contact">Contact Me</button>
          </a>
        </div>
      </div>
    </section>
  );
}
