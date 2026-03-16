import Link from "next/link";
import { Leaf, MapPin, Phone, Mail, Facebook, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 font-bold text-xl mb-4">
              <Leaf className="w-6 h-6 text-primary" />
              <span>Terrascape Studio</span>
            </Link>
            <p className="text-background/70 text-sm leading-relaxed mb-4">
              Bahawalpur&apos;s premier horticulture and landscaping consultancy. Transforming outdoor spaces since 2018.
            </p>
            <div className="flex gap-3">
              <a href="#" aria-label="Facebook" className="p-2 rounded-md bg-background/10 hover:bg-background/20 transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" aria-label="Instagram" className="p-2 rounded-md bg-background/10 hover:bg-background/20 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" aria-label="YouTube" className="p-2 rounded-md bg-background/10 hover:bg-background/20 transition-colors">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-background/70">
              {["Landscaping Design", "Lawn Installation", "Garden Maintenance", "Terrariums & Indoor Plants", "Orchard Consultancy", "Drip Irrigation"].map((s) => (
                <li key={s}>
                  <Link href="/services" className="hover:text-background transition-colors">{s}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-background/70">
              {[
                { href: "/about", label: "About Us" },
                { href: "/projects", label: "Our Projects" },
                { href: "/blog", label: "Blog" },
                { href: "/pricing", label: "Pricing" },
                { href: "/contact", label: "Contact" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-background transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm text-background/70">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-primary" />
                <span>123 Garden Street, Model Town, Bahawalpur, Punjab, Pakistan</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 shrink-0 text-primary" />
                <a href="tel:+923001234567" className="hover:text-background transition-colors">+92 300 123 4567</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 shrink-0 text-primary" />
                <a href="mailto:info@terrascapestudio.pk" className="hover:text-background transition-colors">info@terrascapestudio.pk</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-background/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-background/50">
          <p>© 2026 Terrascape Studio. All rights reserved.</p>
          <p>Bahawalpur, Punjab, Pakistan</p>
        </div>
      </div>
    </footer>
  );
}
