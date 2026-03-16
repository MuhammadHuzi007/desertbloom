"use client";

import { useEffect, useRef, ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Props {
  children: ReactNode;
  className?: string;
  speed?: number;
}

/* Horizontal scroll marquee-style pinned section */
export default function GSAPHorizontalScroll({ children, className = "", speed = 1 }: Props) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const ctx = gsap.context(() => {
      const totalWidth = track.scrollWidth - section.offsetWidth;

      gsap.to(track, {
        x: -totalWidth * speed,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${totalWidth * speed}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });
    });

    return () => ctx.revert();
  }, [speed]);

  return (
    <div ref={sectionRef} className={`overflow-hidden ${className}`}>
      <div ref={trackRef} className="flex gap-6 w-max">
        {children}
      </div>
    </div>
  );
}
