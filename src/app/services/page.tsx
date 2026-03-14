"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Check, ArrowRight, Pencil, Sprout, Scissors, Flower2, Apple, Droplets, Wheat } from "lucide-react";
import { services } from "@/lib/data";
import CTASection from "@/components/CTASection";

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  Pencil, Sprout, Scissors, Flower2, Apple, Droplets, Wheat,
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-primary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-primary font-medium text-sm uppercase tracking-wider">What We Offer</span>
            <h1 className="text-4xl sm:text-5xl font-bold mt-2 mb-4">Our Services</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Comprehensive horticulture and landscaping solutions designed for Bahawalpur&apos;s climate,
              from residential gardens to large-scale agricultural projects.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon] || Sprout;
            const isEven = i % 2 === 0;
            return (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${!isEven ? "lg:flex-row-reverse" : ""}`}
              >
                <div className={!isEven ? "lg:order-2" : ""}>
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">{service.description}</p>
                  <ul className="space-y-2 mb-8">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm">
                        <Check className="w-4 h-4 text-primary shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all"
                  >
                    Get a Quote <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                <div className={`relative h-80 rounded-2xl overflow-hidden ${!isEven ? "lg:order-1" : ""}`}>
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      <CTASection />
    </>
  );
}
