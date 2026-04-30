"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { portfolioData } from "@/data/portfolio";
import { Github, ExternalLink } from "lucide-react";

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative z-10 bg-black/40">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading title="Featured Projects" subtitle="Some of my recent work that I'm proud of." />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-card rounded-2xl overflow-hidden flex flex-col group"
            >
              <div className="h-48 bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 relative overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300" />
                {/* Placeholder for project image, could be an img tag in a real app */}
                <h3 className="text-2xl font-bold opacity-50 group-hover:opacity-100 transition-opacity duration-300 text-glow">
                  {project.title}
                </h3>
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold mb-3 group-hover:text-neon-blue transition-colors duration-300">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-6 flex-1 leading-relaxed">{project.description}</p>
                
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
                    <Github size={18} /> Code
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
          ))}
        </div>
      </div>
    </section>
  );
}
