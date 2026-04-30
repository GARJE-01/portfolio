"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ReactNode, ButtonHTMLAttributes } from "react";

interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onAnimationStart" | "onDrag" | "onDragStart" | "onDragEnd"> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
}

export default function Button({ children, variant = "primary", className, ...props }: ButtonProps) {
  const baseStyles = "relative inline-flex items-center justify-center px-6 py-3 font-medium overflow-hidden rounded-lg transition-all duration-300";
  
  const variants = {
    primary: "bg-white text-black hover:bg-gray-200 shadow-[0_0_20px_rgba(255,255,255,0.3)]",
    secondary: "bg-neon-purple text-white hover:shadow-[0_0_20px_rgba(139,92,246,0.6)]",
    outline: "glass border-white/10 text-white hover:bg-white/5 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(baseStyles, variants[variant], className)}
      {...props}
    >
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
}
