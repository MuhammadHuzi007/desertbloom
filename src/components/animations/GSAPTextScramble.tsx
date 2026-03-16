"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrambleTextPlugin, ScrollTrigger);

interface Props {
  text: string;
  className?: string;
  tag?: "h1" | "h2" | "h3" | "p" | "span";
  chars?: string;
  speed?: number;
  triggerOnScroll?: boolean;
}

export default function GSAPTextScramble({
  text,
  className = "",
  tag: Tag = "h2",
  chars = "upperCase",
  speed = 0.4,
  triggerOnScroll = true,
}: Props) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const run = () => {
      gsap.to(el, {
        duration: 1.4,
        scrambleText: { text, chars, speed, revealDelay: 0.2 },
        ease: "none",
      });
    };

    if (triggerOnScroll) {
      ScrollTrigger.create({
        trigger: el,
        start: "top 88%",
        onEnter: run,
        once: true,
      });
    } else {
      run();
    }

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, [text, chars, speed, triggerOnScroll]);

  return (
    <Tag ref={ref as React.RefObject<never>} className={className}>
      {text}
    </Tag>
  );
}
