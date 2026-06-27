"use client";

import { useEffect, useRef } from "react";

const GIFS = [
  "https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif",
  "https://motionsites.ai/assets/hero-codenest-preview-Cgppc2qV.gif",
  "https://motionsites.ai/assets/hero-vex-ventures-preview-BczMFIiw.gif",
  "https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif",
  "https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif",
  "https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif",
  "https://motionsites.ai/assets/hero-vitara-preview-Cjz2QYyU.gif",
  "https://motionsites.ai/assets/hero-terra-preview-BFjrCr7T.gif",
  "https://motionsites.ai/assets/hero-skyelite-preview-DHaZIgUv.gif",
  "https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif",
  "https://motionsites.ai/assets/hero-designpro-preview-D8c5_een.gif",
  "https://motionsites.ai/assets/hero-stellar-ai-preview-D3HL6bw1.gif",
  "https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif",
  "https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif",
  "https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif",
  "https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif",
  "https://motionsites.ai/assets/hero-planet-orbit-preview-DWAP8Z1P.gif",
  "https://motionsites.ai/assets/hero-new-era-preview-CocuDUm9.gif",
  "https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif",
  "https://motionsites.ai/assets/hero-luminex-preview-CxOP7ce6.gif",
  "https://motionsites.ai/assets/hero-celestia-preview-0yO3jXO8.gif",
];

const ROW1 = [...GIFS.slice(0, 11), ...GIFS.slice(0, 11), ...GIFS.slice(0, 11)];
const ROW2 = [...GIFS.slice(11), ...GIFS.slice(11), ...GIFS.slice(11)];

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
