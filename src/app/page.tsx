import Link from "next/link";
import { MoveRight } from "lucide-react";

export default function IntroScreen() {
  return (
    <div className="h-screen w-screen bg-[#000000] text-[#FFFFFF] flex flex-col justify-end p-8 md:p-16 relative overflow-hidden">
      
      {/* Premium Cinematic Background Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08)_0%,transparent_80%)] pointer-events-none" />

      {/* Massive Typography */}
      <div className="relative z-10 animate-fade-in-up">
        <h1 className="font-heading text-super-massive font-black tracking-tighter uppercase leading-none drop-shadow-2xl">
          YUVA
        </h1>
      </div>

      <Link 
        href="/strategy" 
        className="absolute top-1/2 right-16 -translate-y-1/2 flex flex-col items-center gap-4 text-white/50 hover:text-white transition-colors group hidden md:flex"
      >
        <span className="font-body text-[10px] tracking-[0.5em] uppercase" style={{ writingMode: 'vertical-rl' }}>Begin Pitch</span>
        <div className="w-[1px] h-24 bg-gradient-to-b from-white/30 to-transparent group-hover:from-white transition-all" />
      </Link>
    </div>
  );
}
