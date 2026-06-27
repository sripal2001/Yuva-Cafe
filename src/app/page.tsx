import Link from "next/link";
import { MoveRight } from "lucide-react";

export default function IntroScreen() {
  return (
    <Link href="/strategy" className="block h-screen w-screen bg-[#000000] text-[#FFFFFF] flex flex-col justify-end p-8 md:p-16 relative overflow-hidden group cursor-pointer">
      
      {/* Premium Cinematic Background Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08)_0%,transparent_80%)] pointer-events-none" />

      {/* Massive Typography */}
      <div className="relative z-10 animate-fade-in-up">
        <h1 className="font-heading text-super-massive font-black tracking-tighter uppercase leading-none drop-shadow-2xl">
          YUVA
        </h1>
      </div>

      {/* Visible Mobile & Desktop Call to Action */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 group-hover:text-white transition-colors animate-pulse">
        <span className="font-body text-[10px] tracking-[0.5em] uppercase">Click anywhere to begin</span>
      </div>
    </Link>
  );
}
