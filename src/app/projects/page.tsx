"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import PortfolioGrid from "@/components/PortfolioGrid";
import { projects } from "@/lib/data";
import CTASection from "@/components/CTASection";

const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];

export default function ProjectsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-primary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Portfolio</span>
            <h1 className="text-4xl sm:text-5xl font-bold mt-2 mb-4">Our Projects</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Browse our portfolio of completed landscaping, irrigation, and horticultural projects
              across Bahawalpur and surrounding areas.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PortfolioGrid />
        </div>
      </section>

      <CTASection />
    </>
  );
}
