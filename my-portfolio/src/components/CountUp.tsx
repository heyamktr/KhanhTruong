"use client";

import { useEffect, useRef } from "react";

function parse(raw: string) {
  // Handles: "3.82", "5.97×", "35%", "300+"
  const m = raw.match(/^([^\d]*)(\d+(?:\.\d+)?)(.*)$/);
  if (!m) return { prefix: "", num: 0, suffix: raw, dec: 0 };
  const num = parseFloat(m[2]);
  const dec = (m[2].split(".")[1] ?? "").length;
  return { prefix: m[1], num, suffix: m[3], dec };
}

export default function CountUp({
  value,
  duration = 1800,
  style,
}: {
  value: string;
  duration?: number;
  style?: React.CSSProperties;
}) {
  const { prefix, num, suffix, dec } = parse(value);
  const spanRef = useRef<HTMLSpanElement>(null);
  const fired = useRef(false);

  // Write display directly to DOM — no state, no re-render per frame
  const write = (v: number) => {
    if (spanRef.current)
      spanRef.current.textContent = prefix + v.toFixed(dec) + suffix;
  };

  useEffect(() => {
    const el = spanRef.current;
    if (!el) return;

    // Set initial "zero" state with correct formatting width
    write(0);

    // Respect reduced motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      write(num);
      return;
    }

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || fired.current) return;
        fired.current = true;
        obs.disconnect();

        const t0 = performance.now();
        const tick = (now: number) => {
          const p = Math.min((now - t0) / duration, 1);
          const eased = 1 - Math.pow(1 - p, 4); // ease-out quart
          write(num * eased);
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.5 }
    );
    obs.observe(el);
    return () => obs.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // SSR-safe: render the target value, JS replaces with "0" on mount
  return (
    <span ref={spanRef} style={style}>
      {prefix}{num.toFixed(dec)}{suffix}
    </span>
  );
}
