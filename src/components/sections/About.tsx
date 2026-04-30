"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { portfolioData } from "@/data/portfolio";
import { Code2, Database, Layout } from "lucide-react";

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
        
        <div className="max-w-4xl mx-auto text-center mb-16 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-8 relative"
          >
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-neon-blue/50 shadow-[0_0_30px_rgba(59,130,246,0.3)] relative z-10">
              {/* Using standard img tag for simplicity, though next/image is better if configured */}
              <img src={portfolioData.about.image} alt={portfolioData.hero.name} className="w-full h-full object-cover" />
            </div>
            <div className="absolute inset-0 bg-neon-blue/20 blur-2xl rounded-full -z-10" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-lg md:text-xl text-gray-300 leading-relaxed"
          >
            {portfolioData.about.text}
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-8 rounded-2xl flex flex-col items-center text-center hover:-translate-y-2"
            >
              {card.icon}
              <h3 className="text-xl font-semibold mb-3">{card.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
