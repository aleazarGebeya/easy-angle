import React from "react";

export function SectionStats() {
  // Placeholder for animated stats: integrate Framer Motion in next phase for animation
  const stats = [
    { label: "Active Teams", value: "12K+" },
    { label: "Integrations", value: "50+" },
    { label: "Avg. ROI", value: "320%" },
    { label: "Uptime", value: "99.98%" },
  ];

  return (
    <div className="flex flex-wrap items-center gap-8 md:gap-16 mt-10 mb-4">
      {stats.map(stat => (
        <div
          key={stat.label}
          className="flex flex-col items-center min-w-[110px] drop-shadow-xl"
        >
          <span className="font-bold text-3xl md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-sky-500 animate-pulse">
            {stat.value}
          </span>
          <span className="text-zinc-700 dark:text-zinc-300 text-sm md:text-base mt-1 uppercase tracking-wider">
            {stat.label}
          </span>
        </div>
      ))}
    </div>
  );
}
