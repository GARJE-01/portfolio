"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { portfolioData } from "@/data/portfolio";
import { ExternalLink, Star } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { cn } from "@/lib/utils";

export default function Projects() {
  return (
    <section id="projects" className="py-32 relative z-10 bg-black/40">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading title="Featured Projects" subtitle="Portfolio" />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.projects.map((project, index) => {
            const isFeatured = index === 0;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className={cn(
                  "glass-card rounded-2xl overflow-hidden group hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.3)] hover:border-neon-blue/30 transition-all duration-500",
                  isFeatured ? "md:col-span-2 lg:col-span-2 flex flex-col md:flex-row" : "flex flex-col"
                )}
              >
                <div className={cn(
                  "bg-gradient-to-br from-[#111] to-[#222] relative overflow-hidden flex items-center justify-center border-b border-white/5",
                  isFeatured ? "w-full md:w-1/2 min-h-[250px] md:border-b-0 md:border-r" : "h-48 w-full"
                )}>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  
                  {isFeatured && (
                    <div className="absolute inset-0 bg-radial-glow opacity-30 mix-blend-screen" />
                  )}

                  <h3 className="text-2xl md:text-3xl font-bold opacity-30 group-hover:opacity-100 transition-opacity duration-500 text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple z-10 text-center px-4">
                    {project.title.replace(" ⭐", "")}
                  </h3>
                </div>
                
                <div className={cn("p-6 flex flex-col", isFeatured ? "w-full md:w-1/2 justify-center" : "flex-1")}>
                  {isFeatured && (
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neon-blue/10 border border-neon-blue/20 text-xs font-medium text-neon-blue w-max mb-4">
                      <Star size={12} className="fill-neon-blue" />
                      Featured Project
                    </div>
                  )}

                  <h3 className="text-xl md:text-2xl font-bold mb-3 group-hover:text-neon-blue transition-colors duration-300">
                    {project.title.replace(" ⭐", "")}
                  </h3>
                  <p className="text-gray-400 text-sm mb-6 flex-1 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="px-3 py-1 text-xs font-medium bg-white/5 rounded-full text-gray-300 border border-white/10">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4 pt-4 border-t border-white/10 mt-auto">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      <FaGithub size={18} /> Code
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-gray-400 hover:text-neon-blue transition-colors ml-auto"
                    >
                      <ExternalLink size={18} /> Live Preview
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
