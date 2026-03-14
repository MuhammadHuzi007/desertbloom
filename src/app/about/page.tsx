"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Leaf, Award, Users, TreePine, ArrowRight } from "lucide-react";
import CTASection from "@/components/CTASection";
import dynamic from "next/dynamic";

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
      <section className="pt-32 pb-20 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
              <span className="text-primary font-medium text-sm uppercase tracking-wider">About Us</span>
              <h1 className="text-4xl sm:text-5xl font-bold mt-2 mb-6">
                Growing Bahawalpur,<br />
                <span className="text-primary">One Garden at a Time</span>
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Founded in 2018, DesertBloom Horticulture was born from a simple belief: that even in the
                heart of the Cholistan desert, nature can flourish with the right expertise and care.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                We are a team of passionate horticulturists, landscape architects, and agricultural consultants
                based in Bahawalpur. We understand the unique challenges of our region — the intense heat,
                water scarcity, and alkaline soils — and we&apos;ve built our practice around solving them.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all"
              >
                Work With Us <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative h-96 rounded-2xl overflow-hidden"
            >
              {/* 3D Orb layered over image */}
              <Image
                src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80"
                alt="DesertBloom team at work"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <FloatingOrb className="absolute inset-0 z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <stat.icon className="w-8 h-8 mx-auto mb-3 text-accent" />
                <div className="text-4xl font-bold mb-1">{stat.value}</div>
                <div className="text-primary-foreground/70 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Our Mission</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-6">Why We Do What We Do</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            Bahawalpur has a rich agricultural heritage — from the date palms of Cholistan to the citrus
            groves of the Sutlej valley. Our mission is to preserve and expand that green legacy by making
            professional horticulture accessible to every homeowner, farmer, and business in the region.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            We believe sustainable landscaping isn&apos;t a luxury — it&apos;s an investment in your property,
            your wellbeing, and your community. Every garden we plant is a step toward a greener Bahawalpur.
          </p>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">The Team</span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-2">Meet Our Experts</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card border border-border rounded-xl p-6 text-center"
              >
                <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-2xl font-bold mx-auto mb-4">
                  {member.avatar}
                </div>
                <h3 className="font-semibold mb-1">{member.name}</h3>
                <p className="text-primary text-sm font-medium mb-3">{member.role}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
