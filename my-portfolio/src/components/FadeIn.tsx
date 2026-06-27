"use client";

import { useEffect, useRef, useState } from "react";

type Direction = "up" | "left" | "right";

type Props = {
  children: React.ReactNode;
  direction?: Direction;
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
};

export default function FadeIn({
  children,
  direction = "up",
  delay = 0,
  className = "",
  style,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), delay * 1000);
          obs.disconnect();
        }
      },
      { rootMargin: "50px 0px", threshold: 0 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);

  const dur = direction === "up" ? "0.7s" : "0.9s";
  const ease = "cubic-bezier(0.25,0.1,0.25,1)";
  const hiddenTransform =
    direction === "up"
      ? "translateY(30px)"
      : direction === "left"
        ? "translateX(-80px)"
        : "translateX(80px)";

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : hiddenTransform,
        transition: `opacity ${dur} ${ease}, transform ${dur} ${ease}`,
        willChange: "opacity, transform",
        ...style,
      }}
    >
      {children}
    </div>
  );
}
