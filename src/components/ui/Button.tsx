"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ReactNode, ButtonHTMLAttributes } from "react";

interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onAnimationStart" | "onDrag" | "onDragStart" | "onDragEnd"> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
}

export default function Button({ children, variant = "primary", className, ...props }: ButtonProps) {
  const baseStyles = "relative inline-flex items-center justify-center px-8 py-4 font-semibold overflow-hidden rounded-xl transition-all duration-500 ease-out active:scale-[0.98]";
  
  const variants = {
    primary: "bg-gradient-to-r from-neon-blue to-neon-purple text-white shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:shadow-[0_0_35px_rgba(59,130,246,0.6)] border border-white/10 hover:border-white/20",
    secondary: "bg-[#1a1a1a] text-white border border-white/5 hover:border-neon-purple/50 shadow-[0_0_15px_rgba(0,0,0,0.5)] hover:shadow-[0_0_20px_rgba(139,92,246,0.3)]",
    outline: "glass border-white/10 text-white hover:bg-white/5 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] hover:shadow-[0_0_20px_rgba(255,255,255,0.05)]"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(baseStyles, variants[variant], className)}
      {...props}
    >
      <div className="relative z-10 flex items-center justify-center gap-3">
        {children}
      </div>
    </motion.button>
  );
}
