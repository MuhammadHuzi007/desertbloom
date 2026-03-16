"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

gsap.registerPlugin(MorphSVGPlugin);

/* Morphing botanical SVG avatar — cycles through leaf → flower → seed shapes */
export default function GSAPMorphAvatar({ className = "" }: { className?: string }) {
  const pathRef = useRef<SVGPathElement>(null);
  const path2Ref = useRef<SVGPathElement>(null);
  const circleRef = useRef<SVGCircleElement>(null);

  const shapes = [
    // Leaf
    "M100,20 C140,20 180,60 180,100 C180,140 140,180 100,180 C60,180 20,140 20,100 C20,60 60,20 100,20Z",
    // Flower petal cluster
    "M100,10 C120,40 160,40 160,70 C160,100 130,120 100,130 C70,120 40,100 40,70 C40,40 80,40 100,10Z",
    // Diamond
    "M100,15 L185,100 L100,185 L15,100 Z",
    // Rounded star
    "M100,20 C110,50 140,50 160,70 C140,90 140,120 120,140 C100,130 80,130 60,140 C40,120 40,90 20,70 C40,50 90,50 100,20Z",
  ];

  useEffect(() => {
    const path = pathRef.current;
    if (!path) return;

    const tl = gsap.timeline({ repeat: -1, yoyo: false });

    shapes.forEach((shape, i) => {
      tl.to(path, {
        duration: 1.8,
        morphSVG: shape,
        ease: "power2.inOut",
      }, i * 2.2);
    });

    // Continuous rotation
    gsap.to(circleRef.current, {
      rotation: 360,
      duration: 12,
      repeat: -1,
      ease: "none",
      transformOrigin: "100px 100px",
    });

    // Inner path counter-rotate
    gsap.to(path2Ref.current, {
      rotation: -360,
      duration: 8,
      repeat: -1,
      ease: "none",
      transformOrigin: "100px 100px",
    });

    return () => tl.kill();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="avatarGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#dde5b6" />
          <stop offset="60%" stopColor="#adc178" />
          <stop offset="100%" stopColor="#6c584c" />
        </radialGradient>
        <radialGradient id="innerGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#f0ead2" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#a98467" stopOpacity="0.4" />
        </radialGradient>
      </defs>

      {/* Outer rotating dashed ring */}
      <circle
        ref={circleRef}
        cx="100" cy="100" r="90"
        fill="none"
        stroke="#adc178"
        strokeWidth="1"
        strokeDasharray="8 6"
        opacity="0.5"
      />

      {/* Morphing main shape */}
      <path
        ref={pathRef}
        d={shapes[0]}
        fill="url(#avatarGrad)"
        opacity="0.9"
      />

      {/* Inner counter-rotating accent */}
      <path
        ref={path2Ref}
        d="M100,55 L115,85 L148,85 L122,105 L132,138 L100,118 L68,138 L78,105 L52,85 L85,85 Z"
        fill="url(#innerGrad)"
        opacity="0.6"
      />

      {/* Center dot */}
      <circle cx="100" cy="100" r="8" fill="#f0ead2" opacity="0.9" />
    </svg>
  );
}
