"use client";

import { useEffect, useRef, ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Props {
  children: ReactNode;
  className?: string;
  itemSelector?: string;
  stagger?: number;
  duration?: number;
}

export default function GSAPStaggerGrid({
  children,
  className = "",
  itemSelector = ":scope > *",
  stagger = 0.1,
  duration = 0.7,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const items = el.querySelectorAll<HTMLElement>(itemSelector);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        items,
        { y: 60, opacity: 0, scale: 0.92 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration,
          ease: "expo.out",
          stagger,
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    return () => ctx.revert();
  }, [itemSelector, stagger, duration]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
