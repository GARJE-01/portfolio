"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 w-full z-50 flex justify-center pt-6 px-6">
      <header
        className={cn(
          "w-full max-w-4xl transition-all duration-500 rounded-full border",
          isScrolled 
            ? "glass border-white/10 py-3 px-6 shadow-2xl" 
            : "bg-transparent border-transparent py-4 px-2"
        )}
      >
        <div className="flex justify-between items-center w-full">
          <a href="#" className="text-xl font-bold tracking-tighter text-white">
            JD<span className="text-neon-blue">.</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-8 items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-400 hover:text-white transition-all"
              >
                {link.name}
              </a>
            ))}
            <a href="#contact" className="text-sm font-medium bg-white text-black px-4 py-2 rounded-full hover:bg-gray-200 transition-colors">
              Hire Me
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-gray-300 hover:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden absolute top-[80px] left-6 right-6 glass border border-white/10 rounded-2xl flex flex-col p-6 gap-6 shadow-2xl"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-medium text-gray-300 hover:text-white"
            >
              {link.name}
            </a>
          ))}
        </motion.div>
      )}
    </div>
  );
}
