"use client";

import { motion } from "framer-motion";
import { MessageSquare, Pencil, Hammer, RefreshCw } from "lucide-react";
import { processSteps } from "@/lib/data";

const iconMap: Record<string, React.ElementType> = {
  MessageSquare, Pencil, Hammer, RefreshCw,
};

export default function ProcessSection() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">How It Works</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-4">Our Process</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From first call to finished garden — a simple, transparent process designed around you.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, i) => {
            const Icon = iconMap[step.icon] || MessageSquare;
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative text-center"
              >
                {/* Connector line */}
                {i < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-px bg-border" />
                )}
                <div className="relative z-10 w-20 h-20 rounded-full bg-primary/10 border-2 border-primary/20 flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-primary" />
                  <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">
                    {i + 1}
                  </span>
                </div>
                <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
