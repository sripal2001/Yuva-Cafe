"use client";
import { useDecision, BrandDirection } from "@/context/DecisionContext";
import { useRouter } from "next/navigation";
import { Check } from "lucide-react";

export default function PositioningPage() {
  const { activeColor, setBrandDirection, brandDirection } = useDecision();
  const router = useRouter();

  const handleSelect = (direction: BrandDirection) => {
    setBrandDirection(direction);
  };

  const saveDecision = () => {
    if (brandDirection) {
      router.push("/logo");
    }
  };

  return (
    <div className="h-screen w-screen bg-[var(--bg-primary)] text-[var(--text-primary)] flex flex-col p-8 md:p-16 relative overflow-hidden transition-colors duration-1000">
      
      {/* Visual Depth Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#111] to-[#000] pointer-events-none" />

      <header className="mb-24 relative z-10 animate-in fade-in slide-in-from-bottom-8 duration-700">
        <p className="font-body text-[var(--text-secondary)] text-[10px] tracking-[0.3em] uppercase mb-4">Workshop Module 01</p>
        <h2 className="font-heading text-4xl md:text-6xl text-[var(--text-primary)] font-black tracking-tighter uppercase">Positioning</h2>
      </header>

      <div className="grid md:grid-cols-3 gap-8 md:gap-12 flex-1 relative z-10">
        
        <PositioningCard 
          title="Tropical Luxury"
          description="Premium destination"
          isActive={brandDirection === 'tropical-luxury'}
          onClick={() => handleSelect('tropical-luxury')}
        />

        <PositioningCard 
          title="Creative Hub"
          description="Founders • Creators • Remote workers"
          isActive={brandDirection === 'creative-hub'}
          onClick={() => handleSelect('creative-hub')}
        />

        <PositioningCard 
          title="Social Club"
          description="Community • Events • Workshops"
          isActive={brandDirection === 'social-club'}
          onClick={() => handleSelect('social-club')}
        />

      </div>

      {/* Floating Save Button */}
      <div className={`fixed bottom-16 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${brandDirection ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}>
        <button 
          onClick={saveDecision}
          className="bg-[var(--accent)] text-[var(--bg-primary)] px-12 py-4 rounded-full font-body text-xs uppercase tracking-widest font-bold flex items-center gap-4 hover:scale-105 transition-transform shadow-[0_10px_40px_rgba(var(--accent-rgb),0.3)]"
        >
          Save Decision <Check size={16} />
        </button>
      </div>

    </div>
  );
}

function PositioningCard({ title, description, isActive, onClick }: any) {
  return (
    <button 
      onClick={onClick}
      className={`text-left p-8 md:p-12 border rounded-[2rem] flex flex-col justify-between transition-all cursor-pointer shadow-2xl animate-in zoom-in-95 duration-500
        ${isActive 
          ? 'border-[var(--accent)] bg-[var(--accent)]/10 shadow-[0_0_50px_rgba(var(--accent-rgb),0.2)]' 
          : 'border-[var(--text-secondary)]/10 bg-[var(--bg-secondary)]/50 hover:border-[var(--text-secondary)]/30 hover:bg-[var(--bg-secondary)]'
        }
      `}
    >
      <div>
        <h3 className={`font-heading text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-4 transition-colors ${isActive ? 'text-[var(--accent)]' : 'text-[var(--text-primary)]'}`}>
          {title}
        </h3>
      </div>
      <div className="mt-24">
        <p className={`font-body text-sm font-light ${isActive ? 'text-[var(--text-primary)]' : 'text-[var(--text-secondary)]'}`}>
          {description}
        </p>
      </div>
    </button>
  );
}
