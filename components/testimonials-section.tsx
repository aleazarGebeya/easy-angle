import React from "react";

const TESTIMONIALS = [
  {
    name: "Jenna Moss",
    title: "Product Manager, OptimoTech",
    quote: `SaaSify has revolutionized the way our team collaborates. Our productivity skyrocketed, and the intuitive UI made onboarding a breeze!`,
  },
  {
    name: "Carlos Rivera",
    title: "CEO, River Analytics",
    quote: `The analytics and automation features are game changers. I can finally focus on growing my business instead of managing processes.`,
  },
  {
    name: "Sophia Lee",
    title: "CTO, QuantumLeap",
    quote: `The API access and integrations with our workflows are world-class. Support is fast and always helpful.`,
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative py-24 px-6 lg:px-10 bg-gradient-to-b from-sky-50 to-white dark:from-zinc-900 dark:to-zinc-950">
      <div className="max-w-6xl mx-auto text-center mb-14">
        <h2 className="text-4xl font-bold mb-4 text-zinc-900 dark:text-white">Hear From Our Users</h2>
        <p className="mb-6 text-lg text-zinc-600 dark:text-zinc-300 max-w-2xl mx-auto">
          Real feedback from teams who supercharged their workflow with SaaSify.
        </p>
      </div>
      <div className="max-w-5xl mx-auto grid gap-10 md:grid-cols-3">
        {TESTIMONIALS.map((t, idx) => (
          <figure
            key={t.name + t.title}
            className="relative flex flex-col h-full p-8 bg-white/70 dark:bg-zinc-900/90 rounded-2xl shadow-xl border border-zinc-200 dark:border-zinc-700 backdrop-blur-md transition-transform hover:scale-[1.02] duration-300"
          >
            <blockquote className="flex-1 text-zinc-700 dark:text-zinc-200 text-base mb-5">“{t.quote}”</blockquote>
            <figcaption>
              <span className="block font-bold text-lg text-primary leading-tight mt-1">{t.name}</span>
              <span className="block text-zinc-500 dark:text-zinc-400 text-xs mt-0.5">{t.title}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
