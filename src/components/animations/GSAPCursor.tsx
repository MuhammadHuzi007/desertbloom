"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function GSAPCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = 0, mouseY = 0;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      // Dot follows instantly
      gsap.to(dot, { x: mouseX, y: mouseY, duration: 0.08, ease: "none" });
      // Ring lags behind
      gsap.to(ring, { x: mouseX, y: mouseY, duration: 0.35, ease: "expo.out" });
    };

    const onEnterLink = () => {
      gsap.to(ring, { scale: 2.2, opacity: 0.6, duration: 0.3, ease: "expo.out" });
      gsap.to(dot, { scale: 0, duration: 0.2 });
    };

    const onLeaveLink = () => {
      gsap.to(ring, { scale: 1, opacity: 1, duration: 0.3, ease: "expo.out" });
      gsap.to(dot, { scale: 1, duration: 0.2 });
    };

    window.addEventListener("mousemove", onMove);

    const links = document.querySelectorAll("a, button");
    links.forEach((el) => {
      el.addEventListener("mouseenter", onEnterLink);
      el.addEventListener("mouseleave", onLeaveLink);
    });

    return () => {
      window.removeEventListener("mousemove", onMove);
      links.forEach((el) => {
        el.removeEventListener("mouseenter", onEnterLink);
        el.removeEventListener("mouseleave", onLeaveLink);
      });
    };
  }, []);

  return (
    <>
      {/* Dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-primary z-[99999] pointer-events-none -translate-x-1/2 -translate-y-1/2 mix-blend-multiply dark:mix-blend-screen hidden lg:block"
      />
      {/* Ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-primary/60 z-[99998] pointer-events-none -translate-x-1/2 -translate-y-1/2 hidden lg:block"
      />
    </>
  );
}
