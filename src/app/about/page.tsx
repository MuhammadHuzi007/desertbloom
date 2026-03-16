"use client";

import Image from "next/image";
import Link from "next/link";
import { Leaf, Award, Users, TreePine, ArrowRight } from "lucide-react";
import CTASection from "@/components/CTASection";
import dynamic from "next/dynamic";
import GSAPScrollReveal from "@/components/animations/GSAPScrollReveal";
import GSAPStaggerGrid from "@/components/animations/GSAPStaggerGrid";
import SplitTextReveal from "@/components/animations/SplitTextReveal";
import AnimeCounter from "@/components/animations/AnimeCounter";
import AnimePathDraw from "@/components/animations/AnimePathDraw";

const FloatingOrb = dynamic<{ className?: string }>(
  () => import("@/components/three/FloatingOrb"),
  { ssr: false }
);

const team = [
  {
    name: "Usman Farooq",
    role: "Founder & Lead Landscape Architect",
    bio: "15+ years designing gardens across Punjab. Specializes in arid-climate landscaping and water-efficient design.",
    avatar: "UF",
  },
  {
    name: "Dr. Nadia Iqbal",
    role: "Agricultural Consultant",
    bio: "PhD in Horticulture from UAF. Expert in orchard management, soil science, and crop optimization for southern Punjab.",
    avatar: "NI",
  },
  {
    name: "Bilal Chaudhry",
    role: "Irrigation Systems Engineer",
    bio: "Certified irrigation designer with expertise in drip systems, IoT sensors, and water management for large-scale farms.",
    avatar: "BC",
  },
  {
    name: "Sadia Rehman",
    role: "Indoor Plants & Terrarium Specialist",
    bio: "Passionate about bringing nature indoors. Designs living walls and curated plant installations for homes and offices.",
    avatar: "SR",
  },
];

const stats = [
  { icon: TreePine, value: "200+", label: "Projects Completed" },
  { icon: Users, value: "150+", label: "Happy Clients" },
  { icon: Award, value: "8+", label: "Years in Business" },
  { icon: Leaf, value: "7", label: "Core Services" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-primary/5 relative overflow-hidden">
        {/* Decorative path draw */}
        <AnimePathDraw className="absolute right-0 top-0 w-64 h-64 text-primary/20 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <GSAPScrollReveal direction="left" duration={0.9}>
              <span className="text-primary font-medium text-sm uppercase tracking-wider">About Us</span>
              <SplitTextReveal
                text="Growing Bahawalpur, One Garden at a Time"
                tag="h1"
                className="text-4xl sm:text-5xl font-bold mt-2 mb-6"
                stagger={0.03}
              />
              <GSAPScrollReveal direction="up" delay={0.2}>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  Founded in 2018, Terrascape Studio was born from a simple belief: that even in the
                  heart of the Cholistan desert, nature can flourish with the right expertise and care.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  We are a team of passionate horticulturists, landscape architects, and agricultural consultants
                  based in Bahawalpur. We understand the unique challenges of our region — the intense heat,
                  water scarcity, and alkaline soils — and we&apos;ve built our practice around solving them.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all hover:scale-105"
                >
                  Work With Us <ArrowRight className="w-4 h-4" />
                </Link>
              </GSAPScrollReveal>
            </GSAPScrollReveal>

            <GSAPScrollReveal direction="right" delay={0.15} duration={0.9}>
              <div className="relative h-96 rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80"
                  alt="Terrascape Studio team at work"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <FloatingOrb className="absolute inset-0 z-10" />
              </div>
            </GSAPScrollReveal>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <stat.icon className="w-8 h-8 mx-auto mb-3 text-accent" />
                <AnimeCounter
                  value={stat.value}
                  label={stat.label}
                  className="text-4xl font-bold"
                  duration={1600}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 bg-background relative overflow-hidden">
        <AnimePathDraw className="absolute left-0 bottom-0 w-48 h-48 text-accent/20 pointer-events-none scale-x-[-1]" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <GSAPScrollReveal direction="up">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Our Mission</span>
            <SplitTextReveal
              text="Why We Do What We Do"
              tag="h2"
              className="text-3xl sm:text-4xl font-bold mt-2 mb-6"
              stagger={0.05}
            />
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Bahawalpur has a rich agricultural heritage — from the date palms of Cholistan to the citrus
              groves of the Sutlej valley. Our mission is to preserve and expand that green legacy by making
              professional horticulture accessible to every homeowner, farmer, and business in the region.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We believe sustainable landscaping isn&apos;t a luxury — it&apos;s an investment in your property,
              your wellbeing, and your community. Every garden we plant is a step toward a greener Bahawalpur.
            </p>
          </GSAPScrollReveal>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <GSAPScrollReveal direction="up" className="text-center mb-14">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">The Team</span>
            <SplitTextReveal text="Meet Our Experts" tag="h2" className="text-3xl sm:text-4xl font-bold mt-2" />
          </GSAPScrollReveal>
          <GSAPStaggerGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <div
                key={member.name}
                className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-lg hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-2xl font-bold mx-auto mb-4">
                  {member.avatar}
                </div>
                <h3 className="font-semibold mb-1">{member.name}</h3>
                <p className="text-primary text-sm font-medium mb-3">{member.role}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </GSAPStaggerGrid>
        </div>
      </section>

      <CTASection />
    </>
  );
}
