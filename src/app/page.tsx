import Link from "next/link";
import { MoveRight } from "lucide-react";

export default function WelcomePage() {
  return (
    <div className="h-screen w-screen bg-[#000000] text-[#FFFFFF] flex flex-col justify-center p-8 md:p-16 relative overflow-hidden">
      
      {/* Premium Cinematic Background Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08)_0%,transparent_80%)] pointer-events-none" />

      {/* Intro Metadata */}
      <div className="relative z-10 animate-in fade-in slide-in-from-bottom-8 duration-700 mb-8">
        <p className="font-body text-white/50 text-sm tracking-[0.3em] uppercase">Kavuri Hills</p>
        <p className="font-body text-white/50 text-sm tracking-[0.3em] uppercase">Tropical Cafe</p>
      </div>

      {/* Massive Typography */}
      <div className="relative z-10 animate-in zoom-in-95 duration-1000 delay-300 fill-mode-both">
        <h1 className="font-heading text-super-massive font-black tracking-tighter uppercase leading-none drop-shadow-2xl">
          YUVA
        </h1>
      </div>

      {/* The Hook & Call to Action */}
      <div className="relative z-10 mt-16 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-700 fill-mode-both flex items-center justify-between">
        <h2 className="font-heading text-4xl font-light">What should Yuva become?</h2>
        
        <Link 
          href="/positioning" 
          className="bg-white text-black px-12 py-4 rounded-full font-body text-xs uppercase tracking-widest font-bold flex items-center gap-4 hover:scale-105 transition-transform"
        >
          Start Workshop <MoveRight size={16} />
        </Link>
      </div>

    </div>
  );
}
