"use client";
import { useRouter } from "next/navigation";
import { Check } from "lucide-react";
import { useDecision } from "@/context/DecisionContext";

export default function VisionPage() {
  const router = useRouter();
  const { brandDirection } = useDecision();

  const generateBlueprint = () => {
    // They must have a brand direction to generate a blueprint. If not, fallback to creative-hub.
    router.push("/blueprint");
  };

  const visionItems = [
    { title: "QR Menu", cat: "Tech" },
    { title: "Order Management", cat: "Tech" },
    { title: "Loyalty Program", cat: "Tech" },
    { title: "Creator Events", cat: "Culture" },
    { title: "Startup Meetups", cat: "Culture" },
    { title: "Coffee Workshops", cat: "Culture" },
    { title: "Art Workshops", cat: "Culture" },
    { title: "Community Nights", cat: "Culture" }
  ];

  return (
    <div className="h-screen w-screen bg-[var(--bg-primary)] text-[var(--text-primary)] flex flex-col p-8 md:p-16 relative overflow-hidden transition-colors duration-1000">
      
      {/* Visual Depth Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#111] to-[#000] pointer-events-none" />

      <header className="mb-16 relative z-10 animate-in fade-in slide-in-from-bottom-8 duration-700">
        <p className="font-body text-[var(--text-secondary)] text-[10px] tracking-[0.3em] uppercase mb-4">Workshop Module 05</p>
        <h2 className="font-heading text-4xl md:text-6xl text-[var(--text-primary)] font-black tracking-tighter uppercase">Future Vision</h2>
      </header>

      <div className="flex-1 relative z-10 flex items-center justify-center">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-5xl">
          {visionItems.map((item, idx) => (
            <div 
              key={idx}
              className="bg-[var(--bg-secondary)]/30 border border-[var(--text-secondary)]/20 p-6 rounded-2xl flex flex-col justify-center items-center text-center aspect-square shadow-xl hover:border-[var(--accent)] hover:bg-[var(--accent)]/10 transition-colors animate-in zoom-in-95 duration-500 fill-mode-both"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <span className="font-body text-[8px] uppercase tracking-[0.2em] text-[var(--text-secondary)] mb-4">{item.cat}</span>
              <h3 className="font-heading text-xl md:text-2xl text-[var(--text-primary)]">{item.title}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Action Button */}
      <div className="fixed bottom-16 left-1/2 -translate-x-1/2 z-50">
        <button 
          onClick={generateBlueprint}
          className="bg-[var(--accent)] text-[var(--bg-primary)] px-12 py-4 rounded-full font-body text-xs uppercase tracking-widest font-bold flex items-center gap-4 hover:scale-105 transition-transform shadow-[0_10px_40px_rgba(var(--accent-rgb),0.3)] animate-pulse"
        >
          Generate Brand Blueprint <Check size={16} />
        </button>
      </div>

    </div>
  );
}
