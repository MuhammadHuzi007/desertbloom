"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import BlogCard from "@/components/BlogCard";
import { blogPosts } from "@/lib/data";

const categories = ["All", ...Array.from(new Set(blogPosts.map((p) => p.category)))];

export default function BlogPage() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? blogPosts : blogPosts.filter((p) => p.category === active);

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-primary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Knowledge Hub</span>
            <h1 className="text-4xl sm:text-5xl font-bold mt-2 mb-4">Our Blog</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Expert articles on garden design, Bahawalpur climate planting, orchard management,
              and sustainable horticulture practices.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 mb-10 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  active === cat
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((post, i) => (
              <BlogCard key={post.id} {...post} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
