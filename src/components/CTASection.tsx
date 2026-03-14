"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-white/5" />
      <div className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full bg-white/5" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-primary-foreground">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-5xl font-bold mb-4">
            Ready to Transform Your Garden?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-10 max-w-2xl mx-auto">
            Book a free on-site consultation with our experts. We&apos;ll assess your space, understand your vision,
            and give you a detailed plan — completely free of charge.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-white text-primary font-semibold text-lg hover:bg-white/90 transition-all hover:scale-105"
            >
              Get Free Garden Consultation
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="https://wa.me/923001234567"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-[#25D366] text-white font-semibold text-lg hover:bg-[#25D366]/90 transition-all"
            >
              <Phone className="w-5 h-5" />
              WhatsApp Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
