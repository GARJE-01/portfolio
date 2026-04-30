"use client";

import { motion, useInView } from "framer-motion";
import { ReactNode, useRef } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  width?: "fit-content" | "100%";
  delay?: number;
  y?: number;
  x?: number;
  duration?: number;
}

export const ScrollReveal = ({ 
  children, 
  width = "100%", 
  delay = 0.2, 
  y = 50,
  x = 0,
  duration = 0.8
}: ScrollRevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} style={{ position: "relative", width, overflow: "visible" }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y, x },
          visible: { opacity: 1, y: 0, x: 0 },
        }}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] as const }}
      >
        {children}
      </motion.div>
    </div>
  );
};
