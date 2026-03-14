"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center py-16 text-center"
      >
        <CheckCircle className="w-16 h-16 text-primary mb-4" />
        <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
        <p className="text-muted-foreground">We&apos;ll get back to you within 24 hours. Check your WhatsApp too!</p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1.5">Full Name</label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Ahmed Khan"
            className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium mb-1.5">Phone / WhatsApp</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            placeholder="+92 300 000 0000"
            className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-1.5">Email Address</label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="you@example.com"
          className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
        />
      </div>

      <div>
        <label htmlFor="service" className="block text-sm font-medium mb-1.5">Service Interested In</label>
        <select
          id="service"
          name="service"
          className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
        >
          <option value="">Select a service...</option>
          <option>Landscaping Design</option>
          <option>Lawn Installation</option>
          <option>Garden Maintenance</option>
          <option>Terrariums & Indoor Plants</option>
          <option>Orchard Consultancy</option>
          <option>Drip Irrigation Systems</option>
          <option>Agricultural Advisory</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-1.5">Message</label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          placeholder="Tell us about your project, garden size, location..."
          className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all disabled:opacity-60"
      >
        {loading ? (
          <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
        ) : (
          <>
            <Send className="w-4 h-4" />
            Send Message
          </>
        )}
      </button>
    </form>
  );
}
