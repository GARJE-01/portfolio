"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { portfolioData } from "@/data/portfolio";
import { Mail, Send } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Button from "@/components/ui/Button";

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative z-10 bg-black/40">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading title="Get In Touch" subtitle="Have a question or want to work together? Drop me a message." />
        
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center"
          >
            <h3 className="text-3xl font-bold mb-6">Let's connect</h3>
            <p className="text-gray-400 mb-8 leading-relaxed">
              I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            
            <div className="space-y-6">
              <a href={`mailto:${portfolioData.contact.email}`} className="flex items-center gap-4 text-gray-300 hover:text-neon-blue transition-colors group">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center group-hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] transition-all">
                  <Mail />
                </div>
                <span className="text-lg">{portfolioData.contact.email}</span>
              </a>
              
              <a href={portfolioData.contact.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-gray-300 hover:text-neon-blue transition-colors group">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center group-hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] transition-all">
                  <FaGithub size={24} />
                </div>
                <span className="text-lg">GitHub Profile</span>
              </a>
              
              <a href={portfolioData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-gray-300 hover:text-neon-purple transition-colors group">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center group-hover:shadow-[0_0_15px_rgba(139,92,246,0.5)] transition-all">
                  <FaLinkedin size={24} />
                </div>
                <span className="text-lg">LinkedIn Network</span>
              </a>
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-card p-8 rounded-2xl flex flex-col gap-6"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm font-medium text-gray-300">Name</label>
              <input 
                type="text" 
                id="name"
                className="w-full bg-[#0a0a0a]/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/30 transition-all shadow-inner"
                placeholder="John Doe"
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm font-medium text-gray-300">Email</label>
              <input 
                type="email" 
                id="email"
                className="w-full bg-[#0a0a0a]/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/30 transition-all shadow-inner"
                placeholder="john@example.com"
              />
            </div>
            
            <div className="flex flex-col gap-2 mb-2">
              <label htmlFor="message" className="text-sm font-medium text-gray-300">Message</label>
              <textarea 
                id="message"
                rows={4}
                className="w-full bg-[#0a0a0a]/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/30 transition-all resize-none shadow-inner"
                placeholder="Your message here..."
              ></textarea>
            </div>
            
            <Button type="button" className="w-full flex items-center gap-2">
              Send Message <Send size={18} />
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
