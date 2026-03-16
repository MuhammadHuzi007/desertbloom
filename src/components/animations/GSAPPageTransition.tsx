"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";

export default function GSAPPageTransition() {
  const pathname = usePathname();
  const panelsRef = useRef<HTMLDivElement[]>([]);
  const isFirst = useRef(true);

  useEffect(() => {
    const panels = panelsRef.current;
    if (!panels.length) return;

    // Skip entirely on first load / refresh — panels stay hidden off-screen
    if (isFirst.current) {
      isFirst.current = false;
      gsap.set(panels, { yPercent: -100 });
      return;
    }

    // Only animate on actual client-side route changes
    const tl = gsap.timeline();
    tl.fromTo(
      panels,
      { yPercent: 100 },
      {
        yPercent: 0,
        duration: 0.55,
        ease: "expo.inOut",
        stagger: { amount: 0.18, from: "end" },
      }
    ).to(panels, {
      yPercent: -100,
      duration: 0.55,
      ease: "expo.inOut",
      stagger: { amount: 0.18, from: "start" },
      delay: 0.08,
    });
  }, [pathname]);

  const panelColors = ["#6c584c", "#a98467", "#adc178", "#dde5b6"];

  return (
    <div className="fixed inset-0 z-[9999] pointer-events-none overflow-hidden">
      {panelColors.map((color, i) => (
        <div
          key={i}
          ref={(el) => { if (el) panelsRef.current[i] = el; }}
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: color,
            // Start hidden above viewport — no flash on load
            transform: "translateY(-100%)",
          }}
        />
      ))}
    </div>
  );
}
