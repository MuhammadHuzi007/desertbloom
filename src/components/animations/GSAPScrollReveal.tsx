"use client";

import { useEffect, useRef, ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Direction = "up" | "down" | "left" | "right" | "scale" | "rotate";

interface Props {
  children: ReactNode;
  className?: string;
  direction?: Direction;
  delay?: number;
  duration?: number;
  distance?: number;
  once?: boolean;
}

const getFrom = (direction: Direction, distance: number) => {
  switch (direction) {
    case "up":    return { y: distance, opacity: 0 };
    case "down":  return { y: -distance, opacity: 0 };
    case "left":  return { x: distance, opacity: 0 };
    case "right": return { x: -distance, opacity: 0 };
    case "scale": return { scale: 0.75, opacity: 0 };
    case "rotate":return { rotation: -15, scale: 0.85, opacity: 0 };
  }
};

export default function GSAPScrollReveal({
  children,
  className = "",
  direction = "up",
  delay = 0,
  duration = 0.85,
  distance = 50,
  once = true,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        getFrom(direction, distance),
        {
          y: 0, x: 0, scale: 1, rotation: 0, opacity: 1,
          duration,
          delay,
          ease: "expo.out",
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            toggleActions: once ? "play none none none" : "play reverse play reverse",
          },
        }
      );
    });

    return () => ctx.revert();
  }, [direction, delay, duration, distance, once]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
