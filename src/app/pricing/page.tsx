"use client";

import { motion } from "framer-motion";
import PricingTable from "@/components/PricingTable";
import CTASection from "@/components/CTASection";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    q: "Are prices negotiable for large projects?",
    a: "Absolutely. For large residential or commercial projects, we offer custom quotes. Contact us for a free site assessment.",
  },
  {
    q: "What's included in the free consultation?",
    a: "A 1-hour on-site visit where we assess your space, discuss your vision, and provide initial recommendations — no strings attached.",
  },
  {
    q: "Do you offer payment plans?",
    a: "Yes, for projects above PKR 50,000 we offer installment plans. Details are discussed during the consultation.",
  },
  {
    q: "Is the maintenance plan a contract?",
    a: "Our Starter plan is month-to-month with no lock-in. You can cancel anytime with 7 days notice.",
  },
];

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-primary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Transparent Pricing</span>
            <h1 className="text-4xl sm:text-5xl font-bold mt-2 mb-4">Simple, Clear Pricing</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              No hidden fees. Choose the plan that fits your needs, or contact us for a custom quote.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Table */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <PricingTable />
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card border border-border rounded-xl p-6"
              >
                <div className="flex items-start gap-3">
                  <HelpCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold mb-2">{faq.q}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
