"use client";
import { useDecision, ColorOption } from "@/context/DecisionContext";
import YuvaBrandedAsset from "@/components/YuvaBrandedAsset";
import { Check } from "lucide-react";
import { useRouter } from "next/navigation";

export default function ColorPage() {
  const { activeColor, setActiveColor } = useDecision();
  const router = useRouter();

  const handleSelect = (color: ColorOption) => {
    setActiveColor(color);
  };

  const saveDecision = () => {
    router.push("/experience");
  };

  const palettes = [
    { id: 'emerald', name: 'Emerald Luxury', dot: 'bg-[#0f2e21]' },
    { id: 'coral', name: 'Coral Tropical', dot: 'bg-[#ff6b5b]' },
    { id: 'ocean', name: 'Ocean Retreat', dot: 'bg-[#1e3a5f]' }
  ];

  return (
    <div className="h-screen w-screen bg-[var(--bg-primary)] text-[var(--text-primary)] flex flex-col relative overflow-hidden transition-colors duration-1000">
      
      {/* Visual Depth Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.03)_0%,transparent_60%)] pointer-events-none" />

      <header className="absolute top-8 left-16 z-20">
        <p className="font-body text-[var(--text-secondary)] text-[10px] tracking-[0.3em] uppercase mb-2">Workshop Module 03</p>
        <h2 className="font-heading text-2xl font-black uppercase tracking-widest">Color Atmosphere</h2>
      </header>

      {/* Selector Console */}
      <div className="absolute top-8 right-16 z-20 flex gap-4">
        {palettes.map(p => (
          <button 
            key={p.id}
            onClick={() => handleSelect(p.id as ColorOption)}
            className={`px-6 py-3 rounded-full font-body text-xs uppercase tracking-widest transition-all flex items-center gap-3 ${activeColor === p.id ? 'bg-[var(--accent)] text-[var(--bg-primary)] font-bold shadow-[0_0_20px_rgba(var(--accent-rgb),0.3)]' : 'border border-[var(--text-secondary)]/30 text-[var(--text-secondary)] hover:border-[var(--text-primary)]'}`}
          >
            <div className={`w-3 h-3 rounded-full ${p.dot} border border-white/20`} />
            {p.name}
          </button>
        ))}
      </div>

      {/* The Environment Grid */}
      <div className="flex-1 p-8 pt-32 pb-32 relative z-10 flex items-center justify-center">
        <div className="w-full max-w-7xl h-[65vh] grid grid-cols-3 gap-8 animate-in zoom-in-95 duration-700">
          
          <div className="flex flex-col gap-4 h-full rounded-[2rem] overflow-hidden shadow-2xl relative group">
             <div className="absolute inset-0 bg-black/20 z-10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm pointer-events-none">
                <span className="font-body text-white uppercase tracking-widest text-xs font-bold drop-shadow-md">Exterior Atmosphere</span>
             </div>
             <YuvaBrandedAsset type="storefront" />
          </div>

          <div className="flex flex-col gap-4 h-full rounded-[2rem] overflow-hidden shadow-2xl relative group">
             <div className="absolute inset-0 bg-black/20 z-10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm pointer-events-none">
                <span className="font-body text-white uppercase tracking-widest text-xs font-bold drop-shadow-md">Tangible Touchpoint</span>
             </div>
             <YuvaBrandedAsset type="cup" />
          </div>

          <div className="flex flex-col gap-4 h-full rounded-[2rem] overflow-hidden shadow-2xl relative group">
             <div className="absolute inset-0 bg-black/20 z-10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm pointer-events-none">
                <span className="font-body text-white uppercase tracking-widest text-xs font-bold drop-shadow-md">Digital Vibe</span>
             </div>
             <YuvaBrandedAsset type="instagram" />
          </div>

        </div>
      </div>

      {/* Confirmation Console */}
      <div className="fixed bottom-16 left-1/2 -translate-x-1/2 z-50">
        <button 
          onClick={saveDecision}
          className="bg-[var(--accent)] text-[var(--bg-primary)] px-12 py-4 rounded-full font-body text-xs uppercase tracking-widest font-bold flex items-center gap-2 hover:scale-105 transition-transform shadow-[0_10px_40px_rgba(var(--accent-rgb),0.3)]"
        >
          Lock Color Palette <Check size={16} />
        </button>
      </div>

    </div>
  );
}
