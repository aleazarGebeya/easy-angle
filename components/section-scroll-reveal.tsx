"use client";
import React from "react";
import { motion, useAnimation, useInView } from "framer-motion";

export function SectionScrollReveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const controls = useAnimation();
  const inView = useInView(ref, { once: true, margin: "-30px" });

  React.useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0, scale: 1 });
    }
  }, [inView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60, scale: 0.96 }}
      animate={controls}
      transition={{ duration: 0.7, type: "spring", bounce: 0.28 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
