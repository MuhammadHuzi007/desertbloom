"use client";

import { useEffect, useRef } from "react";
import { animate, createTimeline } from "animejs";

/* Draws an SVG decorative botanical path on scroll-enter */
export default function AnimePathDraw({ className = "" }: { className?: string }) {
  const svgRef = useRef<SVGSVGElement>(null);
  const triggered = useRef(false);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const paths = Array.from(svg.querySelectorAll("path"));
    paths.forEach((p) => {
      const len = p.getTotalLength();
      p.style.strokeDasharray = String(len);
      p.style.strokeDashoffset = String(len);
    });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !triggered.current) {
          triggered.current = true;
          const tl = createTimeline({});
          paths.forEach((p, i) => {
            tl.add(p, { strokeDashoffset: [p.getTotalLength(), 0], duration: 2200, ease: "inOutSine" }, i * 300);
          });
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(svg);
    return () => observer.disconnect();
  }, []);

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 400 300"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      {/* Stem */}
      <path
        d="M200 280 C200 200 160 160 120 100"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* Left branch */}
      <path
        d="M160 180 C130 150 90 155 70 130"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      {/* Right branch */}
      <path
        d="M175 150 C200 120 230 125 250 100"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      {/* Top leaf */}
      <path
        d="M120 100 C100 60 140 30 160 50 C170 30 150 10 120 100Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      {/* Right leaf */}
      <path
        d="M250 100 C270 70 300 80 290 110 C310 90 300 60 250 100Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      {/* Small curl */}
      <path
        d="M200 280 C220 260 240 270 230 250 C250 255 245 235 220 240"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />
    </svg>
  );
}
