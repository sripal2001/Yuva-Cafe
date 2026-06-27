"use client";
import { useDecision, BrandDirection } from "@/context/DecisionContext";
import { useRouter } from "next/navigation";

export default function StrategyPage() {
  const { setBrandDirection, boardroomMode } = useDecision();
  const router = useRouter();

  const handleSelect = (direction: BrandDirection) => {
    setBrandDirection(direction);
    router.push("/logo"); // Standard Next.js route navigation
  };

  return (
    <div className="h-screen w-screen bg-[#000000] text-white flex flex-col p-8 md:p-16 relative overflow-hidden">
      
      {/* Visual Depth Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#111] to-[#000] pointer-events-none" />

      <header className="mb-24 relative z-10 animate-fade-in-up">
        <p className="font-body text-white/50 text-[10px] tracking-[0.3em] uppercase mb-4">Core Strategy Engine</p>
        <h2 className="font-heading text-4xl md:text-6xl text-white font-black tracking-tighter uppercase">Who is Yuva?</h2>
      </header>

      <div className="grid md:grid-cols-3 gap-8 md:gap-12 flex-1 relative z-10">
        
        <DirectionCard 
          title="Tropical Luxury"
          description="Destination Cafe • Premium • Sophisticated"
          target="High Net Worth • Architects • Influencers"
          onClick={() => handleSelect('tropical-luxury')}
        />

        <DirectionCard 
          title="Urban Tropical"
          description="Creative Hub • Founders • Remote Workers"
          target="Tech Founders • Designers • Nomads"
          onClick={() => handleSelect('urban-tropical')}
        />

        <DirectionCard 
          title="Sunset Social"
          description="Community • Events • Night Culture"
          target="Creators • Collectives • Industry"
          onClick={() => handleSelect('sunset-social')}
        />

      </div>

    </div>
  );
}

function DirectionCard({ title, description, target, onClick }: any) {
  return (
    <button 
      onClick={onClick}
      className="text-left p-8 md:p-12 border border-white/10 rounded-[2rem] flex flex-col justify-between group transition-all cursor-pointer hover:border-white/30 hover:bg-white/5 shadow-2xl hover:shadow-[0_0_50px_rgba(255,255,255,0.05)] animate-fade-in-up"
    >
      <div>
        <h3 className="font-heading text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-4 text-white group-hover:text-[var(--accent)] transition-colors">{title}</h3>
        <p className="font-body text-sm font-light text-white/50">{description}</p>
      </div>
      <div className="mt-24">
        <p className="font-body text-[10px] uppercase tracking-[0.2em] text-white/30 mb-2">Primary Target</p>
        <p className="font-body text-sm text-white/70">{target}</p>
      </div>
    </button>
  );
}
