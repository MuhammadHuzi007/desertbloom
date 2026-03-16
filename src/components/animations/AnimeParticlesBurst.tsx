"use client";

import { useEffect, useRef } from "react";
import { animate, utils } from "animejs";

interface Props {
  trigger?: boolean;
  className?: string;
  count?: number;
  colors?: string[];
}

export default function AnimeParticlesBurst({
  trigger = false,
  className = "",
  count = 16,
  colors = ["#adc178", "#dde5b6", "#a98467", "#6c584c", "#f0ead2"],
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const hasRun = useRef(false);

  useEffect(() => {
    if (!trigger || hasRun.current) return;
    hasRun.current = true;

    const container = containerRef.current;
    if (!container) return;

    const particles: HTMLDivElement[] = [];

    for (let i = 0; i < count; i++) {
      const p = document.createElement("div");
      const size = Math.random() * 10 + 5;
      p.style.cssText = `
        position:absolute;
        width:${size}px;
        height:${size}px;
        border-radius:50%;
        background:${colors[Math.floor(Math.random() * colors.length)]};
        top:50%;left:50%;
        transform:translate(-50%,-50%);
        pointer-events:none;
      `;
      container.appendChild(p);
      particles.push(p);
    }

    animate(particles, {
      translateX: () => utils.random(-120, 120),
      translateY: () => utils.random(-120, 120),
      scale: [1, 0],
      opacity: [1, 0],
      duration: 1200,
      ease: "outExpo",
      delay: (_target, i) => i * 30,
      onComplete: () => particles.forEach((p) => p.remove()),
    });
  }, [trigger, count, colors]);

  return (
    <div
      ref={containerRef}
      className={`relative pointer-events-none ${className}`}
      aria-hidden="true"
    />
  );
}
