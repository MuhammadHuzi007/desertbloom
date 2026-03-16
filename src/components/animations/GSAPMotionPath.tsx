"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);

/* A leaf/dot that travels along an SVG path on scroll */
export default function GSAPMotionPath({ className = "" }: { className?: string }) {
  const svgRef = useRef<SVGSVGElement>(null);
  const dotRef = useRef<SVGGElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    const dot = dotRef.current;
    if (!svg || !dot) return;

    const ctx = gsap.context(() => {
      gsap.to(dot, {
        motionPath: {
          path: "#motion-track",
          align: "#motion-track",
          autoRotate: true,
          alignOrigin: [0.5, 0.5],
        },
        duration: 4,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: svg,
          start: "top 80%",
          end: "bottom 20%",
          scrub: 1.5,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 400 200"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      {/* The path the element travels along */}
      <path
        id="motion-track"
        d="M20,100 C60,20 120,180 200,100 C280,20 340,180 380,100"
        stroke="#adc178"
        strokeWidth="1.5"
        strokeDasharray="6 4"
        opacity="0.4"
      />

      {/* Traveling leaf element */}
      <g ref={dotRef}>
        <ellipse cx="0" cy="0" rx="10" ry="6" fill="#adc178" opacity="0.9" />
        <line x1="0" y1="0" x2="0" y2="-8" stroke="#6c584c" strokeWidth="1" />
      </g>
    </svg>
  );
}
