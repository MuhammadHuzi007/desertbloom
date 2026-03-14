import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({ variable: "--font-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "DesertBloom Horticulture | Landscaping & Garden Consultancy Bahawalpur",
    template: "%s | DesertBloom Horticulture",
  },
  description:
    "Bahawalpur's premier landscaping and horticulture consultancy. Expert garden design, lawn installation, drip irrigation, orchard planning, and agricultural advisory services.",
  keywords: [
    "landscaping Bahawalpur",
    "garden design Pakistan",
    "drip irrigation",
    "orchard consultancy",
    "lawn installation",
    "horticulture",
    "DesertBloom",
  ],
  openGraph: {
    type: "website",
    locale: "en_PK",
    url: "https://desertbloom.pk",
    siteName: "DesertBloom Horticulture",
    title: "DesertBloom Horticulture | Landscaping & Garden Consultancy Bahawalpur",
    description: "Transform your outdoor space with Bahawalpur's leading horticulture consultancy.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
