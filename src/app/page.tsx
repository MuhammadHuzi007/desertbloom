import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import ServiceCard from "@/components/ServiceCard";
import PortfolioGrid from "@/components/PortfolioGrid";
import TestimonialsSlider from "@/components/TestimonialsSlider";
import BlogCard from "@/components/BlogCard";
import { services, blogPosts } from "@/lib/data";
import ProcessSection from "@/components/ProcessSection";
import CTASection from "@/components/CTASection";
import GSAPScrollReveal from "@/components/animations/GSAPScrollReveal";
import GSAPStaggerGrid from "@/components/animations/GSAPStaggerGrid";
import SplitTextReveal from "@/components/animations/SplitTextReveal";
import AnimePathDraw from "@/components/animations/AnimePathDraw";
import GSAPShowcase from "@/components/GSAPShowcase";

export const metadata: Metadata = {
  title: "Terrascape Studio | Landscaping & Garden Consultancy Bahawalpur",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />

      {/* Services Section */}
      <section className="py-24 bg-background relative overflow-hidden">
        <AnimePathDraw className="absolute -right-8 top-8 w-48 h-48 text-primary/10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <GSAPScrollReveal direction="up" className="text-center mb-14">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">What We Do</span>
            <SplitTextReveal text="Our Services" tag="h2" className="text-3xl sm:text-4xl font-bold mt-2 mb-4" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From garden design to agricultural advisory, we offer comprehensive horticulture services
              tailored for Bahawalpur&apos;s climate and landscape.
            </p>
          </GSAPScrollReveal>
          <GSAPStaggerGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <ServiceCard key={service.id} {...service} index={i} />
            ))}
          </GSAPStaggerGrid>
          <GSAPScrollReveal direction="up" delay={0.1} className="text-center mt-10">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-primary text-primary font-medium hover:bg-primary hover:text-primary-foreground transition-all hover:scale-105"
            >
              View All Services <ArrowRight className="w-4 h-4" />
            </Link>
          </GSAPScrollReveal>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-24 bg-muted/30 relative overflow-hidden">
        <AnimePathDraw className="absolute -left-8 bottom-8 w-48 h-48 text-accent/10 pointer-events-none scale-x-[-1]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <GSAPScrollReveal direction="up" className="text-center mb-14">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Our Work</span>
            <SplitTextReveal text="Recent Projects" tag="h2" className="text-3xl sm:text-4xl font-bold mt-2 mb-4" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A glimpse of the gardens, orchards, and landscapes we&apos;ve transformed across Bahawalpur.
            </p>
          </GSAPScrollReveal>
          <PortfolioGrid limit={3} />
          <GSAPScrollReveal direction="up" delay={0.1} className="text-center mt-10">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all hover:scale-105"
            >
              View All Projects <ArrowRight className="w-4 h-4" />
            </Link>
          </GSAPScrollReveal>
        </div>
      </section>

      {/* Process Section */}
      <ProcessSection />

      {/* Testimonials */}
      <TestimonialsSlider />

      {/* Blog Preview */}
      <section className="py-24 bg-background relative overflow-hidden">
        <AnimePathDraw className="absolute right-0 bottom-0 w-56 h-56 text-primary/10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <GSAPScrollReveal direction="up" className="text-center mb-14">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Knowledge Hub</span>
            <SplitTextReveal text="From Our Blog" tag="h2" className="text-3xl sm:text-4xl font-bold mt-2 mb-4" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Expert tips on garden design, Bahawalpur climate planting, and orchard management.
            </p>
          </GSAPScrollReveal>
          <GSAPStaggerGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.slice(0, 3).map((post, i) => (
              <BlogCard key={post.id} {...post} index={i} />
            ))}
          </GSAPStaggerGrid>
          <GSAPScrollReveal direction="up" delay={0.1} className="text-center mt-10">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-primary text-primary font-medium hover:bg-primary hover:text-primary-foreground transition-all hover:scale-105"
            >
              Read All Articles <ArrowRight className="w-4 h-4" />
            </Link>
          </GSAPScrollReveal>
        </div>
      </section>

      <CTASection />
      {/* GSAP Showcase — morph avatars, DrawSVG, MotionPath, SplitText */}
      <GSAPShowcase />
    </>
  );
}
