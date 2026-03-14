"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Check } from "lucide-react";
import { pricingPlans } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function PricingTable() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {pricingPlans.map((plan, i) => (
        <motion.div
          key={plan.id}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.15 }}
          className={cn(
            "relative rounded-2xl border p-8 flex flex-col",
            plan.popular
              ? "border-primary bg-primary text-primary-foreground shadow-2xl scale-105"
              : "border-border bg-card"
          )}
        >
          {plan.popular && (
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-accent text-foreground text-sm font-semibold">
              Most Popular
            </div>
          )}

          <div className="mb-6">
            <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
            <p className={cn("text-sm leading-relaxed", plan.popular ? "text-primary-foreground/80" : "text-muted-foreground")}>
              {plan.description}
            </p>
          </div>

          <div className="mb-8">
            <span className="text-4xl font-bold">PKR {plan.price}</span>
            <span className={cn("text-sm ml-1", plan.popular ? "text-primary-foreground/70" : "text-muted-foreground")}>
              {plan.period}
            </span>
          </div>

          <ul className="space-y-3 mb-8 flex-1">
            {plan.features.map((feature) => (
              <li key={feature} className="flex items-start gap-2 text-sm">
                <Check className={cn("w-4 h-4 mt-0.5 shrink-0", plan.popular ? "text-accent" : "text-primary")} />
                {feature}
              </li>
            ))}
          </ul>

          <Link
            href="/contact"
            className={cn(
              "block text-center py-3 px-6 rounded-lg font-semibold transition-all hover:scale-105",
              plan.popular
                ? "bg-white text-primary hover:bg-white/90"
                : "bg-primary text-primary-foreground hover:bg-primary/90"
            )}
          >
            {plan.cta}
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
