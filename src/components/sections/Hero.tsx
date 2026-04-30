"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { portfolioData } from "@/data/portfolio";
import InteractiveProfile from "@/components/ui/InteractiveProfile";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import ParticleScene from "@/components/3d/ParticleScene";

const Cursor = () => (
  <span
    className="inline-block w-[4px] h-[0.8em] bg-neon-blue ml-2 translate-y-[0.1em] shadow-[0_0_10px_rgba(59,130,246,0.5)] animate-cursor-blink"
  />
);

export default function Hero() {
  const [nameText, setNameText] = useState("");
  const [displayText, setDisplayText] = useState("");
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isNameDone, setIsNameDone] = useState(false);
  const [isStarted, setIsStarted] = useState(false);

  // Delay typing until loading screen is gone (2s loader + 0.8s fade + buffer)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsStarted(true);
    }, 3200);
    return () => clearTimeout(timer);
  }, []);

  // Typing effect for Name
  useEffect(() => {
    if (!isStarted) return;
    
    const name = portfolioData.hero.name;
    if (!isNameDone) {
      const timeout = setTimeout(() => {
        setNameText(name.slice(0, nameText.length + 1));
        if (nameText.length === name.length) {
          setTimeout(() => setIsNameDone(true), 500);
        }
      }, 150 + Math.random() * 80);
      return () => clearTimeout(timeout);
    }
  }, [nameText, isNameDone, isStarted]);

  // Typing effect for Roles
  useEffect(() => {
    if (!isNameDone) return;

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
          setTimeout(() => setIsDeleting(true), 2500);
        }
      }
    }, isDeleting ? 30 : 60 + Math.random() * 30);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentTextIndex, isNameDone]);

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 pb-10 overflow-hidden bg-[#0a0a0a]">
      {/* Background Effects */}
      <ParticleScene />
      <div className="absolute inset-0 bg-radial-glow opacity-40 pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="flex flex-col justify-center order-2 lg:order-1 text-center lg:text-left">
            <ScrollReveal delay={0.1} y={20}>
              <span className="text-neon-blue font-bold tracking-[0.3em] text-xs md:text-sm mb-6 block uppercase">
                {portfolioData.hero.title}
              </span>
            </ScrollReveal>
            
            <ScrollReveal delay={0.2} y={20}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-gray-500 mb-4 tracking-tight">
                Hello, I'm
              </h2>
            </ScrollReveal>
            
            {/* Name Container - Fixed Height */}
            <div className="min-h-[1.1em] mb-4 overflow-visible">
              <h1 className="text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[1.1] flex flex-wrap items-center justify-center lg:justify-start gap-x-[0.2em]">
                {nameText.split(" ").map((word, i, arr) => (
                  <span key={i} className="relative inline-flex items-center text-gradient drop-shadow-[0_0_30px_rgba(255,255,255,0.15)] py-2 whitespace-nowrap">
                    {word}
                    {isStarted && i === arr.length - 1 && <Cursor />}
                  </span>
                ))}
              </h1>
            </div>

            {/* Role Container - Fixed Height */}
            <div className="min-h-[2.5em] mb-12 flex items-center justify-center lg:justify-start">
              <ScrollReveal delay={0.8} y={20}>
                <div className="flex items-center gap-3">
                  <div className="h-[2px] w-6 bg-neon-blue/40 hidden lg:block" />
                  <p className="text-xl md:text-2xl text-gray-300 font-light tracking-wide italic">
                    {displayText}
                    {isNameDone && <Cursor />}
                  </p>
                </div>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={1.2} y={20}>
              <div className="flex flex-wrap gap-6 justify-center lg:justify-start">
                <Button 
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                  className="px-10 shadow-[0_0_30px_rgba(59,130,246,0.2)] hover:shadow-[0_0_40px_rgba(59,130,246,0.4)] transition-all duration-300"
                >
                  Let's Connect
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                  className="px-10 hover:bg-white/5 transition-all duration-300"
                >
                  Explore Work
                </Button>
              </div>
            </ScrollReveal>
          </div>
          
          {/* Right Content: Massive Unbounded Visual */}
          <div className="flex items-center justify-center order-1 lg:order-2 py-12 lg:py-0">
            <InteractiveProfile />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block opacity-40"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2.5 }}
      >
        <div className="w-6 h-10 border-2 border-white/10 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-white/40 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
