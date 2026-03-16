"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(SplitText, ScrollTrigger);

type AnimType = "chars" | "words" | "lines";

interface Props {
  children: string;
  className?: string;
  tag?: "h1" | "h2" | "h3" | "h4" | "p";
  type?: AnimType;
  stagger?: number;
  duration?: number;
  y?: number;
  delay?: number;
}

export default function GSAPSplitText({
  children,
  className = "",
  tag: Tag = "h2",
  type = "chars",
  stagger = 0.03,
  duration = 0.7,
  y = 60,
  delay = 0,
}: Props) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const split = new SplitText(el, { type: `${type},words,lines` as never });
    const targets = type === "chars" ? split.chars : type === "words" ? split.words : split.lines;

    // Clip each line with overflow hidden wrapper
    if (type === "lines") {
      split.lines.forEach((line) => {
        (line as HTMLElement).style.overflow = "hidden";
      });
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        targets,
        { y, opacity: 0, rotateX: type === "chars" ? -90 : 0 },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          duration,
          stagger,
          delay,
          ease: "expo.out",
          transformOrigin: "0% 50% -50",
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    return () => {
      ctx.revert();
      split.revert();
    };
  }, [children, type, stagger, duration, y, delay]);

  return (
    <Tag ref={ref as React.RefObject<never>} className={className} style={{ perspective: "600px" }}>
      {children}
    </Tag>
  );
}
