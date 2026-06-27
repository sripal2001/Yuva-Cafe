"use client";
import { useDecision, TypoOption } from "@/context/DecisionContext";
import YuvaBrandedAsset from "@/components/YuvaBrandedAsset";
import { Check } from "lucide-react";
import { useRouter } from "next/navigation";

export default function TypographyPage() {
  const { activeTypo, setActiveTypo, boardroomMode } = useDecision();
  const router = useRouter();

  const handleSelect = (typo: TypoOption) => setActiveTypo(typo);
  const confirmTypo = () => router.push("/journey");

  const fonts = [
    { id: 'playfair', name: 'Playfair Display', desc: 'Editorial • Classic • Luxury' },
    { id: 'inter', name: 'Inter Minimal', desc: 'Tech • Clean • Frictionless' },
    { id: 'satoshi', name: 'Satoshi Modern', desc: 'Bold • Architectural • Brutalist' }
  ];

  return (
    <div className="h-screen w-screen bg-[var(--bg-primary)] text-[var(--text-primary)] flex flex-col relative overflow-hidden transition-colors duration-1000 animate-in fade-in duration-700">
      
      {/* Visual Depth Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(255,255,255,0.02)_0%,transparent_70%)] pointer-events-none" />

      <header className="absolute top-8 left-16 z-20">
        <p className="font-body text-[var(--text-secondary)] text-[10px] tracking-[0.3em] uppercase mb-2">Arena 03</p>
        <h2 className="font-heading text-2xl font-black uppercase tracking-widest">The Voice</h2>
      </header>

      {/* Selector Console */}
      <div className={`absolute top-8 right-16 z-20 flex gap-4 transition-opacity duration-500 ${boardroomMode ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
        {fonts.map(f => (
          <button 
            key={f.id}
            onClick={() => handleSelect(f.id as TypoOption)}
            className={`px-6 py-3 rounded-full font-body text-xs uppercase tracking-widest transition-all ${activeTypo === f.id ? 'bg-[var(--text-primary)] text-[var(--bg-primary)] font-bold' : 'border border-[var(--text-secondary)]/30 text-[var(--text-secondary)] hover:border-[var(--text-primary)]'}`}
          >
            Option 0{fonts.findIndex(x => x.id === f.id) + 1}
          </button>
        ))}
      </div>

      <div className="flex-1 p-8 pt-32 pb-32 relative z-10">
        <div className="max-w-7xl mx-auto h-full grid grid-cols-1 md:grid-cols-3 gap-8 animate-in zoom-in-95 duration-700">
          
          <div className="flex flex-col gap-8 h-full">
             <YuvaBrandedAsset type="menu" />
             <div className="bg-[var(--bg-secondary)]/80 backdrop-blur-md rounded-[2rem] border border-[var(--text-secondary)]/10 p-8 flex-1 shadow-2xl">
               <p className="font-body text-[var(--text-secondary)] text-[10px] uppercase tracking-[0.2em] mb-4">Print Application</p>
               <h1 className="font-heading text-4xl mb-2">Artisanal Coffee.</h1>
               <p className="font-body text-sm font-light">The typography carries the emotional weight of the brand before the customer even tastes the product.</p>
             </div>
          </div>

          <div className="flex flex-col gap-8 h-full">
             <div className="bg-[var(--bg-secondary)]/80 backdrop-blur-md rounded-[2rem] border border-[var(--text-secondary)]/10 p-8 shadow-2xl">
               <p className="font-body text-[var(--text-secondary)] text-[10px] uppercase tracking-[0.2em] mb-4">Selected Typeface</p>
               <h3 className="font-heading text-5xl text-[var(--text-primary)] mb-4">{fonts.find(f => f.id === activeTypo)?.name}</h3>
               <p className="font-body text-[var(--accent)]">{fonts.find(f => f.id === activeTypo)?.desc}</p>
             </div>
             <div className="bg-[var(--accent)] text-[var(--bg-primary)] rounded-[2rem] p-12 flex-1 flex items-center justify-center shadow-[0_0_50px_rgba(var(--accent-rgb),0.15)]">
                <p className="font-heading text-6xl md:text-8xl text-center leading-none tracking-tighter drop-shadow-2xl">Aa</p>
             </div>
          </div>

          <div className="flex flex-col gap-8 h-full">
             <div className="bg-[var(--bg-secondary)]/80 backdrop-blur-md rounded-[2rem] border border-[var(--text-secondary)]/10 p-8 flex-1 shadow-2xl">
               <p className="font-body text-[var(--text-secondary)] text-[10px] uppercase tracking-[0.2em] mb-4">Digital Application</p>
               <h1 className="font-heading text-4xl mb-2">Zero Friction.</h1>
               <p className="font-body text-sm font-light">Legibility across digital touchpoints (QR menus, Instagram, ordering apps) is strictly maintained.</p>
             </div>
             <div className="h-[60%] shadow-2xl rounded-[3rem] overflow-hidden">
               <YuvaBrandedAsset type="instagram" />
             </div>
          </div>

        </div>
      </div>

      <div className={`absolute bottom-8 right-16 z-20 transition-transform duration-500 ${boardroomMode ? 'translate-y-[200%]' : 'translate-y-0'}`}>
        <button 
          onClick={confirmTypo}
          className="bg-[var(--accent)] text-[var(--bg-primary)] px-12 py-4 rounded-full font-body text-xs uppercase tracking-widest font-bold flex items-center gap-2 hover:scale-105 transition-transform shadow-2xl"
        >
          <Check size={16} /> Confirm Typography
        </button>
      </div>

      {/* Invisible Global Advance for Boardroom Mode */}
      {boardroomMode && (
        <button onClick={confirmTypo} className="absolute inset-0 z-0 cursor-pointer" aria-label="Advance Presentation" />
      )}

    </div>
  );
}
