"use client";
import { useDecision } from "@/context/DecisionContext";
import Image from "next/image";

export default function YuvaBrandedAsset({ type }: { type: 'cup' | 'storefront' | 'menu' | 'instagram' }) {
  const { activeLogo, activeColor } = useDecision();

  const getLogo = () => {
    switch (activeLogo) {
      case 'monogram': return <span className="font-heading text-8xl font-bold tracking-tighter">YV</span>;
      case 'luxury': return <span className="font-heading text-6xl font-black uppercase tracking-widest">Yuva</span>;
      case 'geometric': return <span className="font-heading text-7xl font-light uppercase tracking-[0.3em]">Y / V / A</span>;
    }
  };

  if (type === 'cup') {
    return (
      <div className="relative aspect-[4/5] w-full rounded-[2rem] overflow-hidden shadow-2xl border border-[var(--text-secondary)]/20">
        <Image src="/blank_cup.png" alt="Cup Mockup" fill className="object-cover mix-blend-luminosity opacity-80" />
        <div className="absolute inset-0 bg-[var(--accent)]/10 mix-blend-overlay" />
        <div className="absolute inset-0 flex flex-col items-center justify-center transform -rotate-12 translate-y-12">
          <div className="text-[var(--text-primary)] opacity-90 scale-50 drop-shadow-lg">
            {getLogo()}
          </div>
          <p className="font-body text-[var(--text-secondary)] text-[8px] uppercase tracking-[0.4em] mt-2 opacity-70">
            Kavuri Hills
          </p>
        </div>
      </div>
    );
  }

  if (type === 'storefront') {
    return (
      <div className="relative aspect-video w-full rounded-[2rem] overflow-hidden shadow-2xl border border-[var(--text-secondary)]/20 group">
        <Image src="/blank_storefront.png" alt="Storefront Mockup" fill className="object-cover mix-blend-luminosity opacity-70" />
        <div className="absolute inset-0 bg-[var(--bg-primary)]/40 mix-blend-multiply" />
        {/* Signage Overlay */}
        <div className="absolute top-[30%] left-[40%] w-[20%] h-[15%] flex items-center justify-center transform perspective-1000 rotateY-12 rotateX-5 skew-x-2">
          <div className="text-[var(--accent)] opacity-90 scale-[0.3] drop-shadow-[0_0_15px_rgba(var(--accent-rgb),0.8)]">
            {getLogo()}
          </div>
        </div>
      </div>
    );
  }

  if (type === 'menu') {
    return (
      <div className="relative aspect-[3/4] w-full rounded-[2rem] overflow-hidden shadow-2xl border border-[var(--text-secondary)]/20">
        <Image src="/blank_menu.png" alt="Menu Mockup" fill className="object-cover mix-blend-luminosity opacity-80" />
        <div className="absolute inset-0 bg-[var(--bg-primary)]/10 mix-blend-overlay" />
        <div className="absolute inset-0 flex flex-col items-center justify-start pt-[20%] transform -rotate-3 scale-90">
          <div className="text-[var(--text-primary)] opacity-90 scale-50 mb-12">
            {getLogo()}
          </div>
          
          <div className="w-2/3 space-y-6">
            <div className="flex justify-between items-end border-b border-[var(--text-secondary)]/30 pb-2">
              <div>
                <p className="font-heading text-[var(--text-primary)] text-lg">Pour Over V60</p>
                <p className="font-body text-[var(--text-secondary)] text-[10px] tracking-widest uppercase mt-1">Araku Estate</p>
              </div>
              <p className="font-body text-[var(--accent)] text-sm">₹350</p>
            </div>
            <div className="flex justify-between items-end border-b border-[var(--text-secondary)]/30 pb-2">
              <div>
                <p className="font-heading text-[var(--text-primary)] text-lg">Cold Brew</p>
                <p className="font-body text-[var(--text-secondary)] text-[10px] tracking-widest uppercase mt-1">18 Hour Steep</p>
              </div>
              <p className="font-body text-[var(--accent)] text-sm">₹280</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'instagram') {
    return (
      <div className="relative aspect-[9/16] w-full bg-[var(--bg-secondary)] rounded-[3rem] border-[8px] border-[var(--bg-primary)] shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col">
        {/* IG Header */}
        <div className="px-6 py-4 border-b border-[var(--text-secondary)]/10 flex items-center justify-between bg-[var(--bg-primary)]">
           <div className="flex items-center gap-4">
             <div className="w-10 h-10 rounded-full bg-[var(--accent)]/10 flex items-center justify-center border border-[var(--accent)]/30">
               <div className="scale-[0.2] text-[var(--accent)]">{getLogo()}</div>
             </div>
             <div>
               <p className="font-heading text-sm text-[var(--text-primary)] leading-none">yuva.cafe</p>
               <p className="font-body text-[10px] text-[var(--text-secondary)] mt-1">Kavuri Hills, HYD</p>
             </div>
           </div>
        </div>
        {/* IG Post */}
        <div className="relative aspect-square w-full">
           <Image src="/blank_storefront.png" alt="Post" fill className="object-cover mix-blend-luminosity opacity-90" />
           <div className="absolute inset-0 flex items-center justify-center bg-black/40">
             <div className="scale-75 text-white drop-shadow-2xl">{getLogo()}</div>
           </div>
        </div>
        <div className="p-4 flex-1 bg-[var(--bg-primary)]">
           <p className="font-body text-[var(--text-secondary)] text-xs leading-relaxed">
             <strong className="text-[var(--text-primary)]">yuva.cafe</strong> Shaping the future of work and culture in Hyderabad. Opening soon.
           </p>
        </div>
      </div>
    );
  }

  return null;
}
