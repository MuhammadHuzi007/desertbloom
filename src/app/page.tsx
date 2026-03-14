import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MessageSquare, Pencil, Hammer, RefreshCw } from "lucide-react";
import { motion } from "framer-motion";
import HeroSection from "@/components/HeroSection";
import ServiceCard from "@/components/ServiceCard";
import PortfolioGrid from "@/components/PortfolioGrid";
import TestimonialsSlider from "@/components/TestimonialsSlider";
import BlogCard from "@/components/BlogCard";
import { services, processSteps, blogPosts } from "@/lib/data";
import ProcessSection from "@/components/ProcessSection";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "DesertBloom Horticulture | Landscaping & Garden Consultancy Bahawalpur",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />

      {/* Services Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">What We Do</span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-4">Our Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From garden design to agricultural advisory, we offer comprehensive horticulture services
              tailored for Bahawalpur&apos;s climate and landscape.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <ServiceCard key={service.id} {...service} index={i} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-primary text-primary font-medium hover:bg-primary hover:text-primary-foreground transition-all"
            >
              View All Services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Our Work</span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-4">Recent Projects</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A glimpse of the gardens, orchards, and landscapes we&apos;ve transformed across Bahawalpur.
            </p>
          </div>
          <PortfolioGrid limit={3} />
          <div className="text-center mt-10">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all"
            >
              View All Projects <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <ProcessSection />

      {/* Testimonials */}
      <TestimonialsSlider />

      {/* Blog Preview */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Knowledge Hub</span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-4">From Our Blog</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Expert tips on garden design, Bahawalpur climate planting, and orchard management.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.slice(0, 3).map((post, i) => (
              <BlogCard key={post.id} {...post} index={i} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-primary text-primary font-medium hover:bg-primary hover:text-primary-foreground transition-all"
            >
              Read All Articles <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </>
  );
}
