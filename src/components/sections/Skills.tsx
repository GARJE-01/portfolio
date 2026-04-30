"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { portfolioData } from "@/data/portfolio";

export default function Skills() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1 }
  };

  const categories = [
    { title: "Frontend", skills: portfolioData.skills.frontend, color: "from-neon-blue to-blue-600" },
    { title: "Backend", skills: portfolioData.skills.backend, color: "from-neon-purple to-purple-600" },
    { title: "Tools & DevOps", skills: portfolioData.skills.tools, color: "from-blue-500 to-purple-500" }
  ];

  return (
    <section id="skills" className="py-24 relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading title="Skills & Expertise" subtitle="Technologies I work with to build modern applications." />
        
        <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {categories.map((category, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <h3 className="text-2xl font-bold mb-8 text-white relative inline-block">
                {category.title}
                <div className={`absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r ${category.color} rounded-full opacity-50`} />
              </h3>
              
              <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-50px" }}
                className="flex flex-wrap justify-center gap-4"
              >
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    variants={item}
                    whileHover={{ scale: 1.1, y: -5 }}
                    className="glass px-5 py-2.5 rounded-xl border border-white/5 hover:border-white/20 hover:bg-white/10 transition-all cursor-default shadow-lg hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                  >
                    <span className="text-gray-200 font-medium text-sm">{skill}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
