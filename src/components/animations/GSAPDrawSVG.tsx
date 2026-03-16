"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(DrawSVGPlugin, ScrollTrigger);

interface Props {
  className?: string;
  color?: string;
  strokeWidth?: number;
}

/* Animated botanical line art that draws itself on scroll */
export default function GSAPDrawSVG({
  className = "",
  color = "currentColor",
  strokeWidth = 1.5,
}: Props) {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const paths = svg.querySelectorAll("path, circle, ellipse");

    const ctx = gsap.context(() => {
      gsap.set(paths, { drawSVG: "0%" });

      gsap.to(paths, {
        drawSVG: "100%",
        duration: 2.5,
        stagger: 0.15,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: svg,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 500 400"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      {/* Main stem */}
      <path d="M250,380 C250,300 220,240 180,160 C160,120 140,80 150,40" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      {/* Left branch 1 */}
      <path d="M210,280 C180,260 140,265 110,240 C90,225 80,200 90,180" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      {/* Right branch 1 */}
      <path d="M225,240 C255,215 285,220 310,200 C330,185 340,160 330,140" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      {/* Left leaf */}
      <path d="M90,180 C60,150 65,110 90,100 C110,95 130,110 120,140 C115,160 95,175 90,180Z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      {/* Right leaf */}
      <path d="M330,140 C350,110 380,105 390,125 C400,145 385,170 360,175 C340,178 330,155 330,140Z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      {/* Top flower */}
      <circle cx="150" cy="40" r="18" stroke={color} strokeWidth={strokeWidth} />
      <circle cx="150" cy="40" r="7" stroke={color} strokeWidth={strokeWidth} />
      {/* Petal lines */}
      <path d="M150,22 L150,10 M168,40 L180,40 M150,58 L150,70 M132,40 L120,40 M163,27 L172,18 M163,53 L172,62 M137,53 L128,62 M137,27 L128,18" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      {/* Small berries */}
      <circle cx="110" cy="240" r="5" stroke={color} strokeWidth={strokeWidth} />
      <circle cx="95" cy="230" r="4" stroke={color} strokeWidth={strokeWidth} />
      <circle cx="310" cy="200" r="5" stroke={color} strokeWidth={strokeWidth} />
      {/* Ground roots */}
      <path d="M250,380 C230,390 200,385 185,395" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      <path d="M250,380 C270,390 300,385 315,395" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      <path d="M250,380 C250,392 248,398 245,405" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
    </svg>
  );
}
