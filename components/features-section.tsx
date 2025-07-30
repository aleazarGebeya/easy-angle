import React from "react";

export function FeaturesSection() {
  const features = [
    {
      icon: "⚡️",
      title: "Instant Setup",
      desc: "Get started in minutes—no code required."
    },
    {
      icon: "🤖",
      title: "AI-powered Suggestions",
      desc: "Boost efficiency with next-gen automation."
    },
    {
      icon: "🔗",
      title: "50+ Integrations",
      desc: "Connect your favorite tools in one dashboard."
    },
    {
      icon: "🔒",
      title: "Enterprise-grade Security",
      desc: "Your data is protected 24/7, always encrypted."
    },
    {
      icon: "📊",
      title: "Visual Analytics",
      desc: "Track KPIs at a glance—insightful, actionable, fast."
    },
    {
      icon: "🌎",
      title: "Global Access",
      desc: "Use SaaSify from anywhere—in the office or on-the-go."
    },
  ];
  return (
    <section id="features" className="py-24 px-6 lg:px-10 bg-gradient-to-tr from-primary/5 to-sky-100 dark:from-zinc-950 dark:to-zinc-900">
      <div className="max-w-6xl mx-auto text-center mb-14">
        <h2 className="text-4xl font-bold mb-4 text-zinc-900 dark:text-white">Why SaaSify?</h2>
        <p className="mb-6 text-lg text-zinc-600 dark:text-zinc-300 max-w-2xl mx-auto">
          Elevate results with advanced SaaS features designed for speed, automation, and intuitive use.
        </p>
      </div>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f) => (
          <div
            key={f.title}
            className="bg-white/60 dark:bg-zinc-900/80 rounded-2xl shadow-xl border border-zinc-200 dark:border-zinc-800 backdrop-blur-lg p-7 flex flex-col items-center text-center transition-transform hover:scale-105 duration-300"
          >
            <span className="text-4xl mb-3 drop-shadow-sm">{f.icon}</span>
            <span className="text-xl font-semibold mb-1 text-zinc-900 dark:text-white">{f.title}</span>
            <p className="text-zinc-500 dark:text-zinc-300 text-base max-w-xs">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
