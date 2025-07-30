import React from "react";

export function HeroSection() {
  return (
    <section className="pt-36 pb-24 bg-gradient-to-br from-primary/10 via-white to-zinc-50 dark:via-zinc-950 dark:to-zinc-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col md:flex-row md:items-center gap-16">
        <div className="flex-1 z-10">
          <h1 className="font-bold text-5xl md:text-6xl tracking-tight leading-tight mb-6 text-zinc-900 dark:text-white drop-shadow-xl">
            Unleash Productivity. <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-sky-500">SaaSify Your Workflow.</span>
          </h1>
          <p className="mb-8 text-lg md:text-2xl text-zinc-700 dark:text-zinc-200 max-w-xl">
            Elevate your business with intuitive, AI-powered SaaS tools trusted by teams worldwide. Automate, collaborate, and grow.
          </p>
          <a
            href="#pricing"
            className="inline-block px-8 py-4 text-lg font-semibold bg-gradient-to-tr from-primary to-sky-500 text-white rounded-xl shadow-xl transition-transform hover:scale-[1.03] focus:outline-none focus:ring-4 focus:ring-primary/40">
            Get Started
          </a>
          {/* Stats will go here */}
        </div>
        <div className="flex-1 flex items-center justify-center relative z-10">
          <div className="w-[370px] h-[420px] relative rounded-3xl overflow-hidden shadow-2xl backdrop-blur-md bg-white/40 dark:bg-zinc-800/30 border border-zinc-200 dark:border-zinc-700">
            <img
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=420&fit=crop&auto=format"
              alt="SaaS dashboard screenshot"
              loading="lazy"
              className="w-full h-full object-cover scale-105 hover:scale-110 transition-transform duration-300"
            />
            <span className="absolute -bottom-4 -left-4 bg-white/60 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-700 shadow-lg px-4 py-2 rounded-lg backdrop-blur z-20">
              AI-Enhanced Analytics
            </span>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none select-none" aria-hidden>
        <div className="w-2/3 h-96 absolute -right-12 -top-12 bg-gradient-to-tr from-sky-400/60 to-primary/40 blur-3xl rounded-full" />
        <div className="w-2/3 h-64 absolute -left-20 bottom-0 bg-gradient-to-br from-primary/20 to-sky-500/20 blur-3xl rounded-[38%] rotate-12" />
      </div>
    </section>
  );
}
