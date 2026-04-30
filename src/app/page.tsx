import { cn } from "@/lib/utils";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";
import Profiles from "@/components/sections/Profiles";
import { portfolioData } from "@/data/portfolio";
import { FaInstagram, FaPinterest, FaTelegram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const socialIconMap: Record<string, { icon: any, color: string }> = {
  FaInstagram: { icon: FaInstagram, color: "hover:text-[#E4405F]" },
  FaXTwitter: { icon: FaXTwitter, color: "hover:text-white" },
  FaPinterest: { icon: FaPinterest, color: "hover:text-[#BD081C]" },
  FaTelegram: { icon: FaTelegram, color: "hover:text-[#26A5E4]" }
};

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Profiles />
      <Contact />
      
      {/* Footer */}
      <footer className="py-12 text-center border-t border-white/5 relative z-10 bg-black/60">
        <div className="container mx-auto px-6">
          <div className="flex justify-center gap-8 mb-8">
            {portfolioData.profiles.social.map((social) => {
              const item = socialIconMap[social.icon];
              const Icon = item?.icon;
              const hoverColor = item?.color || "hover:text-neon-blue";

              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "text-gray-500 grayscale hover:grayscale-0 transition-all duration-300 hover:scale-125",
                    hoverColor
                  )}
                  aria-label={social.name}
                >
                  {Icon && <Icon size={24} />}
                </a>
              );
            })}
          </div>
          <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Mayur Garje. All rights reserved.</p>
          <p className="mt-2 text-xs text-gray-600">Built with Next.js, Tailwind CSS & Framer Motion</p>
        </div>
      </footer>
    </>
  );
}
