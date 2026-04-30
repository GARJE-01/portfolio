"use client";

import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { portfolioData } from "@/data/portfolio";
import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

// Mapping tech names to official local logos
const getTechLogo = (name: string): string | null => {
  const mapping: Record<string, string> = {
    "React": "/logos/react.svg",
    "Next.js": "/logos/nextjs.svg",
    "Node.js": "/logos/nodejs.svg",
    "TypeScript": "/logos/typescript.svg",
    "JavaScript": "/logos/javascript.svg",
    "HTML": "/logos/html5.svg",
    "CSS": "/logos/css3.svg",
    "Tailwind CSS": "/logos/tailwind.svg",
    "MongoDB": "/logos/mongodb.svg",
    "MySQL": "/logos/mysql.svg",
    "Python": "/logos/python.svg",
    "Java": "/logos/java.svg",
    "Spring Boot (Java)": "/logos/spring.svg",
    "Git": "/logos/git.svg",
    "GitHub": "/logos/github.svg",
    "AWS RDS": "/logos/aws.svg",
    "Supabase": "/logos/supabase.svg",
    "Gemini AI": "/logos/gemini.svg",
    "LangChain": "/logos/langchain.svg",
    "HuggingFace": "/logos/huggingface.svg",
    "VS Code": "/logos/vscode.svg",
    "Render": "/logos/render.svg",
    "Express.js": "/logos/express.svg",
    "Groq API": "/logos/groq.svg",
    "Machine Learning (SVM)": "/logos/python.svg", // Python-based ML
  };

  const cleanName = name.replace("⭐", "").trim();
  return mapping[cleanName] || null; // No incorrect fallback
};

// Width of each item slot (logo width + gap)
const ITEM_WIDTH = 160; // px

export default function Skills() {
  const allSkills = portfolioData.skills.flatMap(cat =>
    cat.items.map(item => ({ name: item, logo: getTechLogo(item) }))
  );

  const count = allSkills.length;

  // Triple the list for seamless looping: [copy1][original][copy2]
  // We slide within the middle copy. When index wraps, the visual position stays centered.
  const tripled = [...allSkills, ...allSkills, ...allSkills];

  const [centerIndex, setCenterIndex] = useState(count); // start at first item of the middle copy
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-slide: advance centerIndex every 2.5s
  useEffect(() => {
    if (isPaused) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      setCenterIndex((prev) => {
        const next = prev + 1;
        // If we've gone past the middle copy, wrap back seamlessly
        if (next >= count * 2) return count;
        return next;
      });
    }, 2500);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, count]);

  // The translateX offset to keep centerIndex in the visual center
  const offset = -(centerIndex * ITEM_WIDTH);

  // Which item in the tripled array is the "active" center
  const activeIdx = centerIndex;
  const finalActive = hoveredIndex !== null ? hoveredIndex : activeIdx;

  return (
    <section id="skills" className="py-32 relative z-10 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 mb-20">
        <SectionHeading title="Tech Stack" subtitle="Core Technologies" />
      </div>

      {/* Sliding Carousel */}
      <div
        className="relative w-full overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => {
          setIsPaused(false);
          setHoveredIndex(null);
        }}
      >
        {/* Fade edges */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#0a0a0a] to-transparent z-20 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#0a0a0a] to-transparent z-20 pointer-events-none" />

        <div className="relative h-48 flex items-center">
          <motion.div
            className="flex items-center will-change-transform"
            animate={{ x: `calc(50vw - ${ITEM_WIDTH / 2}px + ${offset}px)` }}
            transition={{
              duration: 0.8,
              ease: [0.25, 0.1, 0.25, 1],
            }}
          >
            {tripled.map((skill, idx) => {
              const isFocused = idx === finalActive;

              return (
                <div
                  key={idx}
                  onMouseEnter={() => setHoveredIndex(idx)}
                  className="flex-shrink-0 flex flex-col items-center justify-center"
                  style={{ width: ITEM_WIDTH }}
                >
                  <motion.div
                    animate={{
                      scale: isFocused ? 1.15 : 0.85,
                      opacity: isFocused ? 1 : 0.35,
                      filter: isFocused ? "grayscale(0%)" : "grayscale(100%)",
                    }}
                    transition={{ duration: 0.4 }}
                    className="relative w-14 h-14 md:w-20 md:h-20 flex items-center justify-center mb-3"
                  >
                    {skill.logo ? (
                      <img
                        src={skill.logo}
                        alt={skill.name}
                        className="w-full h-full object-contain"
                      />
                    ) : (
                      <span className="text-2xl md:text-3xl font-bold text-gray-500">{skill.name.charAt(0)}</span>
                    )}

                    {/* Glow behind focused logo */}
                    {isFocused && (
                      <div className="absolute inset-[-12px] bg-white/5 blur-2xl rounded-full -z-10" />
                    )}
                  </motion.div>

                  <AnimatePresence>
                    {isFocused && (
                      <motion.span
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.3 }}
                        className="text-xs md:text-sm font-bold tracking-widest text-white uppercase whitespace-nowrap"
                      >
                        {skill.name}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>

      {/* Categorized Skills */}
      <div className="container mx-auto px-6 md:px-12 mt-32">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {portfolioData.skills.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="flex flex-col items-center"
            >
              <h3 className="text-2xl font-bold mb-8 text-white relative inline-block">
                {category.title}
                <div className={cn("absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r rounded-full opacity-50", category.color)} />
              </h3>

              <div className="flex flex-wrap justify-center gap-4">
                {category.items.map((skill, index) => (
                  <div
                    key={index}
                    className="glass px-5 py-2.5 rounded-xl border border-white/5 hover:border-white/20 transition-all cursor-default flex items-center gap-2"
                  >
                    {getTechLogo(skill) && <img src={getTechLogo(skill)!} alt={skill} className="w-4 h-4 grayscale opacity-60" />}
                    <span className="text-gray-300 font-medium text-sm">{skill}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
