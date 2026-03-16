"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Props {
  text: string;
  className?: string;
  tag?: "h1" | "h2" | "h3" | "p" | "span";
  delay?: number;
  stagger?: number;
  scrub?: boolean;
}

export default function SplitTextReveal({
  text,
  className = "",
  tag: Tag = "h2",
  delay = 0,
  stagger = 0.04,
  scrub = false,
}: Props) {
  const containerRef = useRef<HTMLElement>(null);

  const words = text.split(" ");

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const spans = el.querySelectorAll<HTMLSpanElement>(".word-inner");

    const ctx = gsap.context(() => {
      gsap.fromTo(
        spans,
        { y: "110%", opacity: 0, rotateX: -60, transformOrigin: "top center" },
        {
          y: "0%",
          opacity: 1,
          rotateX: 0,
          duration: 0.9,
          ease: "expo.out",
          stagger,
          delay,
          scrollTrigger: scrub
            ? undefined
            : {
                trigger: el,
                start: "top 88%",
                toggleActions: "play none none none",
              },
        }
      );
    }, el);

    return () => ctx.revert();
  }, [delay, stagger, scrub]);

  return (
    <Tag ref={containerRef as React.RefObject<never>} className={className} style={{ perspective: "600px" }}>
      {words.map((word, i) => (
        <span
          key={i}
          className="word-wrap inline-block overflow-hidden mr-[0.25em] last:mr-0"
        >
          <span className="word-inner inline-block">{word}</span>
        </span>
      ))}
    </Tag>
  );
}
