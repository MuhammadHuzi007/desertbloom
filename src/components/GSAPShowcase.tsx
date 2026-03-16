"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CustomEase } from "gsap/CustomEase";
import GSAPMorphAvatar from "./animations/GSAPMorphAvatar";
import GSAPSplitText from "./animations/GSAPSplitText";
import GSAPDrawSVG from "./animations/GSAPDrawSVG";
import GSAPMotionPath from "./animations/GSAPMotionPath";
import GSAPTextScramble from "./animations/GSAPTextScramble";
import GSAPScrollReveal from "./animations/GSAPScrollReveal";

gsap.registerPlugin(ScrollTrigger, CustomEase);

CustomEase.create("botanical", "M0,0 C0.14,0 0.242,0.438 0.272,0.561 0.313,0.728 0.354,0.963 0.362,1 0.37,0.985 0.414,0.873 0.455,0.811 0.51,0.726 0.573,0.753 0.586,0.762 0.662,0.812 0.719,0.981 0.726,0.998 0.788,0.914 0.84,0.936 0.859,0.95 0.878,0.964 0.897,0.985 1,1");

const team = [
  { name: "Usman Farooq", role: "Founder & Landscape Architect", initials: "UF", color: "#adc178" },
  { name: "Dr. Nadia Iqbal", role: "Agricultural Consultant", initials: "NI", color: "#a98467" },
  { name: "Bilal Chaudhry", role: "Irrigation Engineer", initials: "BC", color: "#6c584c" },
  { name: "Sadia Rehman", role: "Indoor Plants Specialist", initials: "SR", color: "#dde5b6" },
];

function TeamMemberCard({ name, role, initials, color, index }: typeof team[0] & { index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const avatarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    const avatar = avatarRef.current;
    if (!card || !avatar) return;

    // Entrance
    gsap.fromTo(card,
      { y: 80, opacity: 0, scale: 0.9 },
      {
        y: 0, opacity: 1, scale: 1,
        duration: 0.9,
        delay: index * 0.12,
        ease: "botanical",
        scrollTrigger: { trigger: card, start: "top 88%", toggleActions: "play none none none" },
      }
    );

    // Hover tilt
    const onEnter = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * -20;
      gsap.to(card, { rotateY: x, rotateX: y, scale: 1.04, duration: 0.4, ease: "power2.out", transformPerspective: 800 });
      gsap.to(avatar, { scale: 1.1, duration: 0.4, ease: "power2.out" });
    };
    const onLeave = () => {
      gsap.to(card, { rotateY: 0, rotateX: 0, scale: 1, duration: 0.6, ease: "elastic.out(1,0.5)" });
      gsap.to(avatar, { scale: 1, duration: 0.4 });
    };

    card.addEventListener("mousemove", onEnter);
    card.addEventListener("mouseleave", onLeave);
    return () => {
      card.removeEventListener("mousemove", onEnter);
      card.removeEventListener("mouseleave", onLeave);
    };
  }, [index]);

  return (
    <div
      ref={cardRef}
      className="bg-card border border-border rounded-2xl p-6 text-center cursor-default"
      style={{ transformStyle: "preserve-3d" }}
    >
      <div ref={avatarRef} className="mx-auto mb-4 w-24 h-24 relative">
        <GSAPMorphAvatar className="w-full h-full" />
        <span
          className="absolute inset-0 flex items-center justify-center text-xl font-bold"
          style={{ color }}
        >
          {initials}
        </span>
      </div>
      <h3 className="font-bold text-base mb-1">{name}</h3>
      <p className="text-sm font-medium mb-2" style={{ color }}>{role}</p>
    </div>
  );
}

export default function GSAPShowcase() {
  const sectionRef = useRef<HTMLElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Horizontal parallax on stat numbers
      gsap.utils.toArray<HTMLElement>(".stat-num").forEach((el, i) => {
        gsap.fromTo(el,
          { x: i % 2 === 0 ? -60 : 60, opacity: 0 },
          {
            x: 0, opacity: 1, duration: 1, ease: "expo.out",
            scrollTrigger: { trigger: el, start: "top 90%", toggleActions: "play none none none" },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-28">

        {/* ── Section 1: Scramble headline + DrawSVG ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-primary font-medium text-sm uppercase tracking-widest block mb-3">
              Our Craft
            </span>
            <GSAPTextScramble
              text="Where Nature Meets Design"
              tag="h2"
              className="text-4xl sm:text-5xl font-bold leading-tight mb-6"
              chars="lowerCase"
              speed={0.5}
            />
            <GSAPScrollReveal direction="up" delay={0.2}>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Every project at Terrascape Studio begins with a deep understanding of the land —
                its soil, its light, its water. We blend horticultural science with artistic vision
                to create spaces that breathe.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                From intimate home gardens to sprawling agricultural estates, our approach is always
                the same: listen to the landscape, then let it guide the design.
              </p>
            </GSAPScrollReveal>
          </div>
          <div className="flex justify-center">
            <GSAPDrawSVG
              className="w-full max-w-sm text-primary/60"
              color="#adc178"
              strokeWidth={1.8}
            />
          </div>
        </div>

        {/* ── Section 2: Motion path ── */}
        <div className="text-center">
          <GSAPSplitText
            tag="h2"
            type="words"
            className="text-3xl sm:text-4xl font-bold mb-4"
            stagger={0.08}
          >
            The Journey of Every Garden
          </GSAPSplitText>
          <GSAPScrollReveal direction="up" delay={0.1}>
            <p className="text-muted-foreground max-w-xl mx-auto mb-10">
              Watch how a seed of an idea travels through consultation, design, and installation
              to become a living, breathing landscape.
            </p>
          </GSAPScrollReveal>
          <GSAPMotionPath className="w-full max-w-2xl mx-auto h-40" />
        </div>

        {/* ── Section 3: Team with morph avatars ── */}
        <div>
          <div className="text-center mb-14">
            <span className="text-primary font-medium text-sm uppercase tracking-widest block mb-3">
              The People
            </span>
            <GSAPSplitText
              tag="h2"
              type="chars"
              className="text-3xl sm:text-4xl font-bold"
              stagger={0.025}
              duration={0.6}
            >
              Meet the Studio
            </GSAPSplitText>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <TeamMemberCard key={member.name} {...member} index={i} />
            ))}
          </div>
        </div>

        {/* ── Section 4: Animated stats with SplitText ── */}
        <div
          ref={statsRef}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 py-16 px-8 rounded-3xl bg-primary/5 border border-primary/10"
        >
          {[
            { num: "200+", label: "Projects Delivered" },
            { num: "8+", label: "Years of Expertise" },
            { num: "50K+", label: "Sq. Ft. Landscaped" },
            { num: "98%", label: "Client Satisfaction" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="stat-num text-4xl sm:text-5xl font-bold text-primary mb-2">{s.num}</div>
              <GSAPSplitText
                tag="p"
                type="words"
                className="text-sm text-muted-foreground"
                stagger={0.1}
                duration={0.5}
                y={20}
              >
                {s.label}
              </GSAPSplitText>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
