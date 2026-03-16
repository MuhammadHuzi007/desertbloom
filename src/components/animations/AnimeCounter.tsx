"use client";

import { useEffect, useRef, useState } from "react";
import { animate } from "animejs";

interface Props {
  value: string;       // e.g. "200+" or "98%"
  label: string;
  className?: string;
  duration?: number;
}

export default function AnimeCounter({ value, label, className = "", duration = 1800 }: Props) {
  const numRef = useRef<HTMLSpanElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const [triggered, setTriggered] = useState(false);

  // Extract numeric part and suffix
  const numeric = parseInt(value.replace(/\D/g, ""), 10);
  const suffix = value.replace(/[0-9]/g, "");

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !triggered) {
          setTriggered(true);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [triggered]);

  useEffect(() => {
    if (!triggered || !numRef.current) return;

    const obj = { val: 0 };
    animate(obj, {
      val: numeric,
      duration,
      ease: "outExpo",
      onUpdate: () => {
        if (numRef.current) {
          numRef.current.textContent = Math.round(obj.val) + suffix;
        }
      },
    });
  }, [triggered, numeric, suffix, duration]);

  return (
    <div ref={wrapRef} className={className}>
      <span ref={numRef} className="tabular-nums">
        0{suffix}
      </span>
      <span className="block text-sm mt-1 opacity-70">{label}</span>
    </div>
  );
}
