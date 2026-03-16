"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import dynamic from "next/dynamic";
import { gsap } from "gsap";
import { animate, utils } from "animejs";
import AnimeCounter from "@/components/animations/AnimeCounter";

const ParticleField = dynamic(() => import("@/components/three/ParticleField"), { ssr: false });

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

function scrambleText(el: HTMLElement, finalText: string, duration = 1200) {
  let frame = 0;
  const totalFrames = Math.round(duration / 16);
  const original = finalText.split("");

  const interval = setInterval(() => {
    el.textContent = original
      .map((char, i) => {
        if (char === " ") return " ";
        if (frame / totalFrames > i / original.length) return char;
        return CHARS[Math.floor(Math.random() * CHARS.length)];
      })
      .join("");
    frame++;
    if (frame >= totalFrames) {
      el.textContent = finalText;
      clearInterval(interval);
    }
  }, 16);
}

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const badgeRef = useRef<HTMLSpanElement>(null);
  const line1Ref = useRef<HTMLSpanElement>(null);
  const line2Ref = useRef<HTMLSpanElement>(null);
  const paraRef = useRef<HTMLParagraphElement>(null);
  const btnsRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "expo.out" } });

      // Background Ken Burns
      gsap.fromTo(
        bgRef.current,
        { scale: 1.12 },
        { scale: 1, duration: 2.5, ease: "power2.out" }
      );

      // Badge pop in
      tl.fromTo(
        badgeRef.current,
        { y: 30, opacity: 0, scale: 0.8 },
        { y: 0, opacity: 1, scale: 1, duration: 0.7 },
        0.3
      );

      // Headline lines slide up
      tl.fromTo(
        [line1Ref.current, line2Ref.current],
        { y: 80, opacity: 0, rotateX: -40, transformOrigin: "top center" },
        { y: 0, opacity: 1, rotateX: 0, duration: 1, stagger: 0.15 },
        0.6
      );

      // Paragraph fade
      tl.fromTo(
        paraRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        1.1
      );

      // Buttons
      tl.fromTo(
        btnsRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7 },
        1.35
      );

      // Stats
      tl.fromTo(
        statsRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7 },
        1.55
      );
    }, sectionRef);

    // Scramble headline after GSAP reveals it
    const t1 = setTimeout(() => {
      if (line1Ref.current) scrambleText(line1Ref.current, "Transform Your Garden", 900);
    }, 700);
    const t2 = setTimeout(() => {
      if (line2Ref.current) scrambleText(line2Ref.current, "into a Living Paradise", 1100);
    }, 950);

    // Anime.js floating badge pulse
    animate(badgeRef.current!, {
      translateY: [-4, 4],
      duration: 2800,
      direction: "alternate",
      loop: true,
      ease: "inOutSine",
    });

    return () => {
      ctx.revert();
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ perspective: "800px" }}
    >
      {/* Background with Ken Burns */}
      <div
        ref={bgRef}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat will-change-transform"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/40 to-black/75" />

      {/* 3D Particle Field */}
      <div className="absolute inset-0 z-[1]">
        <ParticleField />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <span
          ref={badgeRef}
          className="inline-block px-4 py-1.5 rounded-full bg-primary/80 text-white text-sm font-medium mb-6 opacity-0"
        >
          Bahawalpur&apos;s Premier Horticulture Consultancy
        </span>

        <h1
          className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-6"
          style={{ perspective: "600px" }}
        >
          <span ref={line1Ref} className="block opacity-0">
            Transform Your Garden
          </span>
          <span ref={line2Ref} className="block text-accent opacity-0">
            into a Living Paradise
          </span>
        </h1>

        <p
          ref={paraRef}
          className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-10 opacity-0"
        >
          Expert landscaping design, lawn installation, drip irrigation, and agricultural advisory
          services tailored for Bahawalpur&apos;s unique climate.
        </p>

        <div
          ref={btnsRef}
          className="flex flex-col sm:flex-row gap-4 justify-center opacity-0"
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-primary text-white font-semibold text-lg hover:bg-primary/90 transition-all hover:scale-105 hover:shadow-xl hover:shadow-primary/30"
          >
            Get Free Consultation
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-white/10 backdrop-blur-sm text-white font-semibold text-lg border border-white/30 hover:bg-white/20 transition-all"
          >
            View Our Work
          </Link>
        </div>

        {/* Animated counters */}
        <div
          ref={statsRef}
          className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto opacity-0"
        >
          {[
            { value: "200+", label: "Projects Done" },
            { value: "8+", label: "Years Experience" },
            { value: "98%", label: "Happy Clients" },
          ].map((stat) => (
            <AnimeCounter
              key={stat.label}
              value={stat.value}
              label={stat.label}
              className="text-center text-3xl font-bold text-accent"
            />
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 animate-bounce">
        <ChevronDown className="w-6 h-6" />
      </div>
    </section>
  );
}
