"use client";

import { useEffect, useRef } from "react";

type FloatingSkill = {
  name: string;
  short: string;
  color: string;
};

type Props = {
  items: FloatingSkill[];
};

type MotionState = {
  x: number;
  y: number;
  vx: number;
  vy: number;
};

const BADGE_WIDTH = 172;
const BADGE_HEIGHT = 72;
const SPEED_MIN = 0.18;
const SPEED_MAX = 0.3;

function randomVelocity() {
  const speed = SPEED_MIN + Math.random() * (SPEED_MAX - SPEED_MIN);
  const direction = Math.random() > 0.5 ? 1 : -1;
  return speed * direction;
}

export default function FloatingSkillBadges({ items }: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const badgeRefs = useRef<(HTMLDivElement | null)[]>([]);
  const motionRef = useRef<MotionState[]>([]);
  const frameRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) {
      return;
    }

    const resetPositions = () => {
      const width = container.clientWidth;
      const height = container.clientHeight;

      motionRef.current = items.map(() => ({
        x: Math.random() * Math.max(width - BADGE_WIDTH, 24),
        y: Math.random() * Math.max(height - BADGE_HEIGHT, 24),
        vx: randomVelocity(),
        vy: randomVelocity(),
      }));

      motionRef.current.forEach((motion, index) => {
        const badge = badgeRefs.current[index];
        if (badge) {
          badge.style.transform = `translate3d(${motion.x}px, ${motion.y}px, 0)`;
        }
      });
    };

    const animate = (time: number) => {
      const width = container.clientWidth;
      const height = container.clientHeight;
      const last = lastTimeRef.current ?? time;
      const delta = Math.min(time - last, 32);
      lastTimeRef.current = time;

      motionRef.current.forEach((motion, index) => {
        let nextX = motion.x + motion.vx * delta;
        let nextY = motion.y + motion.vy * delta;

        if (nextX <= 0 || nextX >= width - BADGE_WIDTH) {
          motion.vx *= -1;
          nextX = Math.max(0, Math.min(nextX, width - BADGE_WIDTH));
        }

        if (nextY <= 0 || nextY >= height - BADGE_HEIGHT) {
          motion.vy *= -1;
          nextY = Math.max(0, Math.min(nextY, height - BADGE_HEIGHT));
        }

        motion.x = nextX;
        motion.y = nextY;

        const badge = badgeRefs.current[index];
        if (badge) {
          badge.style.transform = `translate3d(${nextX}px, ${nextY}px, 0)`;
        }
      });

      frameRef.current = window.requestAnimationFrame(animate);
    };

    resetPositions();

    const resizeObserver = new ResizeObserver(() => {
      lastTimeRef.current = null;
      resetPositions();
    });

    resizeObserver.observe(container);
    frameRef.current = window.requestAnimationFrame(animate);

    return () => {
      resizeObserver.disconnect();
      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current);
      }
    };
  }, [items]);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none absolute inset-0 hidden overflow-hidden md:block"
    >
      {items.map((skill, index) => (
        <div
          key={skill.name}
          ref={(node) => {
            badgeRefs.current[index] = node;
          }}
          className={`absolute left-0 top-0 z-10 rounded-3xl border border-white/80 bg-gradient-to-br ${skill.color} px-4 py-3 shadow-[0_20px_70px_rgba(148,163,184,0.12)] backdrop-blur-xl`}
          style={{ width: `${BADGE_WIDTH}px`, height: `${BADGE_HEIGHT}px` }}
        >
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-blue-100 bg-white/90 text-sm font-bold text-blue-700">
              {skill.short}
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-blue-500">
                Tech
              </p>
              <p className="text-sm font-semibold text-slate-800">{skill.name}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
