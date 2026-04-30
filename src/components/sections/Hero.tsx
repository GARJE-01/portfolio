"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { portfolioData } from "@/data/portfolio";
import GlobeScene from "@/components/3d/GlobeScene";

export default function Hero() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const pauseTime = 2000;

  useEffect(() => {
    const texts = portfolioData.hero.typingText;
    const fullText = texts[currentTextIndex];

    const timeout = setTimeout(() => {
      if (isDeleting) {
        setDisplayText((prev) => prev.slice(0, -1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        }
      } else {
        setDisplayText((prev) => fullText.slice(0, prev.length + 1));
        if (displayText.length === fullText.length) {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentTextIndex]);

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-radial-glow">
      {/* Content */}
      <div className="container mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-gray-300 mb-6 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-blue opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-neon-blue"></span>
            </span>
            Available for new opportunities
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6 leading-tight">
            Hi, I'm <br />
            <span className="text-gradient">{portfolioData.hero.name}</span>
          </h1>
          
          <div className="h-16 mb-8 max-w-lg">
            <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed">
              <span className="text-white font-medium">{displayText}</span>
              <span className="animate-pulse ml-1 text-neon-blue">|</span>
            </p>
          </div>

          <div className="flex flex-wrap gap-4 mt-8">
            <Button onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}>
              View Projects
            </Button>
            <Button variant="outline" onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
              Contact Me
            </Button>
          </div>
        </motion.div>
        
        {/* Right side: 3D Globe */}
        <motion.div 
          className="hidden md:flex items-center justify-center relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          {/* Subtle background glow for the globe */}
          <div className="absolute inset-0 bg-neon-blue/10 blur-[100px] rounded-full" />
          <GlobeScene />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1">
          <div className="w-1.5 h-1.5 bg-neon-blue rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
