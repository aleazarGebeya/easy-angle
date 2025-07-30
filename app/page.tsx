"use client";
import React from "react";
import { Navigation } from "@/components/navigation";
import { HamburgerMenu } from "@/components/hamburger-menu";
import { HeroSection } from "@/components/hero-section";
import { FeaturesSection } from "@/components/features-section";
import { PricingSection } from "@/components/pricing-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { ContactSection } from "@/components/contact-section";
import { NewsletterSignup } from "@/components/newsletter-signup";
import { Footer } from "@/components/footer";
import { AnimatedStats } from "@/components/animated-stats";

export default function Page() {
  const stats = [
    { label: "Active Teams", value: "12K+" },
    { label: "Integrations", value: "50+" },
    { label: "Avg. ROI", value: "320%" },
    { label: "Uptime", value: "99.98%" },
  ];

  // Smooth scroll behavior (client-side enhancement for nav links)
  React.useEffect(() => {
    if (typeof window !== "undefined") {
      // Polyfill safe-guard
      document.documentElement.style.scrollBehavior = "smooth";
      // Optionally enhance scroll on nav link click
      const links = document.querySelectorAll(
        'header nav a[href^="#"], nav ul a[href^="#"]'
      );
      links.forEach(link => {
        link.addEventListener("click", e => {
          e.preventDefault();
          const hash = link.getAttribute("href");
          if (!hash) return;
          const target = document.querySelector(hash);
          if (target) {
            target.scrollIntoView({ behavior: "smooth" });
          }
        });
      });
      return () => {
        links.forEach(link => {
          link.removeEventListener("click", () => {});
        });
      };
    }
  }, []);

  return (
    <div className="relative bg-white dark:bg-zinc-950">
      {/* Navigation Bar */}
      <Navigation />
      <div className="md:hidden fixed top-4 right-6 z-40">
        <HamburgerMenu />
      </div>
      {/* Hero Section */}
      <HeroSection />
      {/* Animated Stats under hero */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 -mt-12 relative z-20">
        <AnimatedStats stats={stats} />
      </div>
      {/* Features Section */}
      <FeaturesSection />
      {/* Pricing Section */}
      <PricingSection />
      {/* Testimonials Section */}
      <TestimonialsSection />
      {/* Newsletter signup, shown above footer */}
      <section className="relative py-20 px-6 lg:px-10 bg-gradient-to-br from-sky-100 to-primary/10 dark:from-zinc-900 dark:to-zinc-950">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-2 text-zinc-900 dark:text-white">Stay in the loop</h3>
          <p className="mb-4 text-lg text-zinc-600 dark:text-zinc-300">Subscribe for updates, tips, and exclusive offers. No spam.</p>
          <NewsletterSignup />
        </div>
        <div className="pointer-events-none select-none absolute w-2/3 h-40 -right-8 bottom-0 bg-gradient-to-tr from-primary/30 via-sky-200/30 to-primary/10 blur-2xl rounded-full -z-10" />
      </section>
      {/* Contact Section */}
      <ContactSection />
      {/* Footer */}
      <Footer />
    </div>
  );
}
