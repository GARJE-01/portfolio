"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { useState, useEffect } from "react";
import { User } from "lucide-react";

export default function InteractiveProfile() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const [isMobile, setIsMobile] = useState(false);
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isMobile) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div className="relative w-full max-w-[450px] md:max-w-[600px] aspect-square flex items-center justify-center pointer-events-none">
      {/* Soft Ambient Backlight Glow */}
      <div className="absolute inset-[-80px] bg-neon-blue/10 blur-[140px] rounded-full opacity-40" />
      <div className="absolute inset-[-40px] bg-neon-purple/5 blur-[100px] rounded-full opacity-30" />

      {/* Main Image - Large and Unbounded */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ 
          opacity: 1, 
          scale: 1,
          y: [0, -15, 0]
        }}
        transition={{
          opacity: { duration: 1.2 },
          scale: { duration: 1.2 },
          y: {
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }}
        className="relative z-10 w-full h-full flex items-center justify-center"
      >
        <img
          src={portfolioData.about.image}
          alt={portfolioData.hero.name}
          className={`w-full h-full object-contain filter drop-shadow-[0_30px_60px_rgba(0,0,0,0.4)] grayscale-[10%] ${
            imgError ? "hidden" : "block"
          }`}
          onError={() => setImgError(true)}
        />

        {imgError && (
          <div className="w-full h-full flex items-center justify-center">
            <User className="w-2/3 h-2/3 text-white/10" />
          </div>
        )}
      </motion.div>
    </div>
  );
}
