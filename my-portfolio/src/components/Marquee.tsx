"use client";

import { useEffect, useRef } from "react";

const PROJECTS = [
  "/images/thumbnails/AgenCart.png",
  "/images/thumbnails/POV.png",
  "/images/thumbnails/GoGreencastle.png",
  "/images/PitchBook.png",
  "/images/thumbnails/lecoautomation.png",
  "/images/thumbnails/TigerTimeThumbnail.png",
  "/images/thumbnails/pixelKnightThumbnail.png",
];

// Triple each row so the parallax scroll always has images to show
const ROW1 = [...PROJECTS, ...PROJECTS, ...PROJECTS];
const ROW2 = [...[...PROJECTS].reverse(), ...[...PROJECTS].reverse(), ...[...PROJECTS].reverse()];

const IMG_STYLE: React.CSSProperties = {
  width: 420,
  height: 270,
  borderRadius: 16,
  objectFit: "cover",
  flexShrink: 0,
  display: "block",
};

export default function Marquee() {
  const sectionRef = useRef<HTMLElement>(null);
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tick = () => {
      const sec = sectionRef.current;
      const r1 = row1Ref.current;
      const r2 = row2Ref.current;
      if (!sec || !r1 || !r2) return;
      const sTop = sec.getBoundingClientRect().top + window.scrollY;
      const off = (window.scrollY - sTop + window.innerHeight) * 0.3;
      r1.style.transform = `translateX(${off - 200}px)`;
      r2.style.transform = `translateX(${-(off - 200)}px)`;
    };

    window.addEventListener("scroll", tick, { passive: true });
    tick();
    return () => window.removeEventListener("scroll", tick);
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        background: "#0C0C0C",
        paddingTop: "clamp(6rem, 10vw, 10rem)",
        paddingBottom: "2.5rem",
        overflow: "hidden",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        <div ref={row1Ref} className="marquee-row">
          {ROW1.map((src, i) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img key={i} src={src} alt="" loading="lazy" style={IMG_STYLE} />
          ))}
        </div>
        <div ref={row2Ref} className="marquee-row">
          {ROW2.map((src, i) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img key={i} src={src} alt="" loading="lazy" style={IMG_STYLE} />
          ))}
        </div>
      </div>
    </section>
  );
}
