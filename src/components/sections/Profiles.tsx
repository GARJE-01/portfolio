"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { portfolioData } from "@/data/portfolio";
import { 
  FaGithub, FaLinkedin, FaInstagram, FaPinterest, FaTelegram, FaBriefcase
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { 
  SiLeetcode, SiGeeksforgeeks, SiHackerrank, SiCodingninjas
} from "react-icons/si";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const iconMap: Record<string, { icon: any, color: string }> = {
  FaGithub: { icon: FaGithub, color: "group-hover:text-white" },
  FaLinkedin: { icon: FaLinkedin, color: "group-hover:text-[#0077B5]" },
  FaInstagram: { icon: FaInstagram, color: "group-hover:text-[#E4405F]" },
  FaXTwitter: { icon: FaXTwitter, color: "group-hover:text-white" },
  FaPinterest: { icon: FaPinterest, color: "group-hover:text-[#BD081C]" },
  FaTelegram: { icon: FaTelegram, color: "group-hover:text-[#26A5E4]" },
  FaBriefcase: { icon: FaBriefcase, color: "group-hover:text-blue-400" },
  SiLeetcode: { icon: SiLeetcode, color: "group-hover:text-[#FFA116]" },
  SiGeeksforgeeks: { icon: SiGeeksforgeeks, color: "group-hover:text-[#2F8D46]" },
  SiHackerrank: { icon: SiHackerrank, color: "group-hover:text-[#2EC866]" },
  SiCodingninjas: { icon: SiCodingninjas, color: "group-hover:text-[#F66C3B]" }
};

export default function Profiles() {
  const renderProfileCard = (profile: any) => {
    const item = iconMap[profile.icon];
    const Icon = item?.icon;
    const hoverColor = item?.color || "group-hover:text-neon-blue";
    
    return (
      <a
        key={profile.name}
        href={profile.url}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative"
      >
        <div className="glass-card p-6 rounded-2xl flex items-center gap-4 border border-white/5 hover:border-white/20 transition-all duration-300">
          <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center group-hover:scale-110 group-hover:bg-white/10 transition-all duration-300">
            {Icon && <Icon className={`text-2xl text-gray-400 transition-colors ${hoverColor}`} />}
          </div>
          <div>
            <h4 className="font-bold text-gray-200 group-hover:text-white transition-colors">{profile.name}</h4>
            <span className="text-xs text-gray-500 group-hover:text-gray-300 transition-colors uppercase tracking-wider">View Profile</span>
          </div>
        </div>
      </a>
    );
  };

  return (
    <section id="profiles" className="py-24 relative z-10 bg-black/20">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading title="Online Presence" subtitle="Profiles" />

        <div className="max-w-5xl mx-auto space-y-16">
          {/* Professional Profiles */}
          <ScrollReveal>
            <div>
              <div className="flex items-center gap-4 mb-8">
                <h3 className="text-2xl font-bold">Professional Profiles</h3>
                <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {portfolioData.profiles.professional.map(renderProfileCard)}
              </div>
            </div>
          </ScrollReveal>

          {/* Coding Profiles */}
          <ScrollReveal delay={0.2}>
            <div>
              <div className="flex items-center gap-4 mb-8">
                <h3 className="text-2xl font-bold text-neon-purple/90">Coding Profiles</h3>
                <div className="h-px flex-1 bg-gradient-to-r from-neon-purple/20 to-transparent" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {portfolioData.profiles.coding.map(renderProfileCard)}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
