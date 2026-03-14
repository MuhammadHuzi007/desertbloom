"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Pencil, Sprout, Scissors, Flower2, Apple, Droplets, Wheat } from "lucide-react";

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  Pencil, Sprout, Scissors, Flower2, Apple, Droplets, Wheat,
};

interface ServiceCardProps {
  title: string;
  icon: string;
  shortDesc: string;
  id: string;
  index?: number;
}

export default function ServiceCard({ title, icon, shortDesc, id, index = 0 }: ServiceCardProps) {
  const Icon = iconMap[icon] || Sprout;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-card border border-border rounded-xl p-6 hover:shadow-lg hover:border-primary/30 transition-all duration-300"
    >
      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
        <Icon className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-300" />
      </div>
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed mb-4">{shortDesc}</p>
      <Link
        href={`/services#${id}`}
        className="inline-flex items-center gap-1 text-sm text-primary font-medium hover:gap-2 transition-all"
      >
        Learn more <ArrowRight className="w-4 h-4" />
      </Link>
    </motion.div>
  );
}
