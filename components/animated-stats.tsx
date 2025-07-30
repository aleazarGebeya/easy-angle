"use client";
import React from "react";
import { motion, useInView } from "framer-motion";

export function AnimatedStats({ stats }: { stats: { label: string; value: string }[] }) {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true });
  return (
    <div className="flex flex-wrap items-center gap-8 md:gap-16 mt-10 mb-4" ref={ref}>
      {stats.map((stat, i) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 36, scale: 0.95 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ delay: i * 0.15, duration: 0.62, type: "spring", bounce: 0.23 }}
          className="flex flex-col items-center min-w-[110px] drop-shadow-xl"
        >
          <span className="font-bold text-3xl md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-sky-500 animate-pulse">
            {stat.value}
          </span>
          <span className="text-zinc-700 dark:text-zinc-300 text-sm md:text-base mt-1 uppercase tracking-wider">
            {stat.label}
          </span>
        </motion.div>
      ))}
    </div>
  );
}
