import React from "react";
import { ContactForm } from "@/components/contact-form";

export function ContactSection() {
  return (
    <section id="contact" className="relative py-24 px-6 lg:px-10 bg-gradient-to-b from-white to-sky-50 dark:from-zinc-950 dark:to-zinc-900 border-t border-zinc-100 dark:border-zinc-900 mt-20">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 text-zinc-900 dark:text-white">Contact Us</h2>
        <p className="mb-6 text-lg text-zinc-600 dark:text-zinc-300 max-w-2xl mx-auto">
          Questions, feedback, or demo requests? Reach out and our team will respond within one business day.
        </p>
      </div>
      <ContactForm />
    </section>
  );
}
