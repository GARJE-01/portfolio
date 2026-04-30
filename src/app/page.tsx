import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      
      {/* Footer */}
      <footer className="py-8 text-center text-gray-500 text-sm border-t border-white/5 relative z-10 bg-black/60">
        <p>© {new Date().getFullYear()} John Doe. All rights reserved.</p>
        <p className="mt-2 text-xs opacity-60">Built with Next.js, Tailwind CSS & Framer Motion</p>
      </footer>
    </>
  );
}
