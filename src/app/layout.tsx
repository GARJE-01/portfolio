import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import LoadingScreen from "@/components/ui/LoadingScreen";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mayur Garje - Full Stack Developer",
  description: "Modern Developer Portfolio of Mayur Garje",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-[#0a0a0a] text-gray-300 antialiased selection:bg-neon-blue/30 relative bg-grid`}>
        <div className="fixed inset-0 noise-overlay z-0 opacity-20 pointer-events-none" />
        <LoadingScreen />
        <Navbar />
        <main className="relative z-10 flex flex-col min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
