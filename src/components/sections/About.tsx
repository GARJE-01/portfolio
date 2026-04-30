"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { portfolioData } from "@/data/portfolio";
import { Code2, Database, Layout } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export default function About() {
  const cards = [
    {
      icon: <Layout className="w-8 h-8 text-neon-blue mb-4" />,
      title: "Frontend Development",
      desc: "Building beautiful, responsive, and accessible user interfaces using React, Next.js, and Tailwind CSS."
    },
    {
      icon: <Database className="w-8 h-8 text-neon-purple mb-4" />,
      title: "Backend Engineering",
      desc: "Creating robust and scalable APIs, managing databases, and setting up secure authentication systems."
    },
    {
      icon: <Code2 className="w-8 h-8 text-neon-blue mb-4" />,
      title: "System Architecture",
      desc: "Designing the overall structure of applications to ensure performance, maintainability, and scalability."
    }
  ];

  return (
    <section id="about" className="py-32 relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading title="About Me" subtitle="Introduction" />
        
        <div className="max-w-4xl mx-auto text-center mb-24">
          <ScrollReveal>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-light">
              {portfolioData.about.text}
            </p>
          </ScrollReveal>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <ScrollReveal key={index} delay={0.2 + index * 0.1}>
              <motion.div
                whileHover={{ y: -12, scale: 1.02 }}
                className="glass-card p-8 rounded-2xl flex flex-col items-center text-center hover:shadow-[0_20px_50px_-10px_rgba(139,92,246,0.15)] h-full"
              >
                {card.icon}
                <h3 className="text-xl font-semibold mb-3">{card.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{card.desc}</p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
