"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-primary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Get In Touch</span>
            <h1 className="text-4xl sm:text-5xl font-bold mt-2 mb-4">Contact Us</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Ready to start your garden project? Book a free consultation or just say hello.
              We respond within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-card border border-border rounded-2xl p-8"
            >
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <ContactForm />
            </motion.div>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              {/* Contact Details */}
              <div>
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <div className="space-y-4">
                  {[
                    {
                      icon: MapPin,
                      label: "Address",
                      value: "123 Garden Street, Model Town, Bahawalpur, Punjab 63100, Pakistan",
                    },
                    { icon: Phone, label: "Phone", value: "+92 300 123 4567", href: "tel:+923001234567" },
                    { icon: Mail, label: "Email", value: "info@terrascapestudio.pk", href: "mailto:info@terrascapestudio.pk" },
                    { icon: Clock, label: "Hours", value: "Mon–Sat: 9:00 AM – 6:00 PM" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-start gap-4 p-4 rounded-xl bg-muted/50">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-muted-foreground mb-0.5">{item.label}</p>
                        {item.href ? (
                          <a href={item.href} className="font-medium hover:text-primary transition-colors">{item.value}</a>
                        ) : (
                          <p className="font-medium">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/923001234567?text=Hi%20Terrascape%20Studio!%20I%27d%20like%20to%20book%20a%20free%20garden%20consultation."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 rounded-xl bg-[#25D366] text-white hover:bg-[#25D366]/90 transition-all group"
              >
                <MessageCircle className="w-8 h-8 shrink-0" />
                <div>
                  <p className="font-semibold">Chat on WhatsApp</p>
                  <p className="text-white/80 text-sm">Get a quick response — usually within 1 hour</p>
                </div>
              </a>

              {/* Map Placeholder */}
              <div className="rounded-xl overflow-hidden border border-border h-64 bg-muted flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <MapPin className="w-10 h-10 mx-auto mb-2 text-primary" />
                  <p className="font-medium">Model Town, Bahawalpur</p>
                  <p className="text-sm">Punjab, Pakistan</p>
                  <a
                    href="https://maps.google.com/?q=Bahawalpur+Punjab+Pakistan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-block text-sm text-primary hover:underline"
                  >
                    Open in Google Maps →
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
