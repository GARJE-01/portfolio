"use client";

import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { portfolioData } from "@/data/portfolio";
import { Mail, Send, CheckCircle2 } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Button from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { useForm, ValidationError } from '@formspree/react';

export default function Contact() {
  const [state, handleSubmit] = useForm("xvzlokqr");

  return (
    <section id="contact" className="py-32 relative z-10 bg-black/40">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading title="Get In Touch" subtitle="Contact" />
        
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 lg:gap-24">
          {/* Contact Info */}
          <ScrollReveal delay={0.2} x={-30}>
            <div className="flex flex-col justify-center h-full">
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
            </div>
          </ScrollReveal>
          
          {/* Contact Form */}
          <ScrollReveal delay={0.4} x={30}>
            <div className="glass-card p-8 rounded-2xl relative overflow-hidden">
              <AnimatePresence mode="wait">
                {state.succeeded ? (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-12 text-center"
                  >
                    <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mb-6 border border-green-500/30">
                      <CheckCircle2 className="text-green-500 w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                    <p className="text-gray-400">Thanks for reaching out. I'll get back to you soon.</p>
                    <Button 
                      className="mt-8" 
                      variant="outline" 
                      onClick={() => window.location.reload()}
                    >
                      Send Another
                    </Button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="flex flex-col gap-6"
                    onSubmit={handleSubmit}
                  >
                    <div className="flex flex-col gap-2">
                      <label htmlFor="name" className="text-sm font-medium text-gray-300">Name</label>
                      <input 
                        type="text" 
                        id="name"
                        name="name"
                        required
                        className="w-full bg-[#0a0a0a]/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/30 transition-all shadow-inner"
                        placeholder="John Doe"
                      />
                      <ValidationError prefix="Name" field="name" errors={state.errors} className="text-red-500 text-xs" />
                    </div>
                    
                    <div className="flex flex-col gap-2">
                      <label htmlFor="email" className="text-sm font-medium text-gray-300">Email</label>
                      <input 
                        type="email" 
                        id="email"
                        name="email"
                        required
                        className="w-full bg-[#0a0a0a]/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/30 transition-all shadow-inner"
                        placeholder="john@example.com"
                      />
                      <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-xs" />
                    </div>
                    
                    <div className="flex flex-col gap-2 mb-2">
                      <label htmlFor="message" className="text-sm font-medium text-gray-300">Message</label>
                      <textarea 
                        id="message"
                        name="message"
                        required
                        rows={4}
                        className="w-full bg-[#0a0a0a]/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/30 transition-all resize-none shadow-inner"
                        placeholder="Your message here..."
                      ></textarea>
                      <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-500 text-xs" />
                    </div>
                    
                    <Button 
                      type="submit" 
                      disabled={state.submitting}
                      className={`w-full group ${state.submitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                    >
                      <span>{state.submitting ? 'Sending...' : 'Send Message'}</span>
                      <Send size={18} className={`transition-transform ${state.submitting ? 'animate-pulse' : 'group-hover:translate-x-1 group-hover:-translate-y-1'}`} />
                    </Button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
