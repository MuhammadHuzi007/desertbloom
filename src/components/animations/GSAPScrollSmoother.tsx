"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

/* Wraps the page in GSAP ScrollSmoother for buttery smooth scrolling */
export default function GSAPScrollSmootherWrapper({ children }: { children: React.ReactNode }) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only on desktop — mobile native scroll feels better
    if (window.innerWidth < 768) return;

    const smoother = ScrollSmoother.create({
      wrapper: wrapperRef.current!,
      content: contentRef.current!,
      smooth: 1.4,
      effects: true,
      normalizeScroll: true,
    });

    return () => smoother.kill();
  }, []);

  return (
    <div ref={wrapperRef} id="smooth-wrapper" style={{ overflow: "hidden" }}>
      <div ref={contentRef} id="smooth-content">
        {children}
      </div>
    </div>
  );
}
