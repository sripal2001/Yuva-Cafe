"use client";
import { useDecision } from "@/context/DecisionContext";
import Image from "next/image";

export default function YuvaBrandedAsset({ type }: { type: 'cup' | 'storefront' | 'menu' | 'instagram' | 'hero-logo' }) {
  const { logo } = useDecision();

  const getLogo = (className: string = "w-full h-full") => {
    switch (logo) {
      case 'luxury': 
        return (
          <svg viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            {/* Elegant Monogram YV */}
            <path d="M160 40L200 120L240 40" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M200 120V160" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
            <path d="M140 40H180" stroke="currentColor" strokeWidth="2"/>
            <path d="M220 40H260" stroke="currentColor" strokeWidth="2"/>
            <path d="M180 160H220" stroke="currentColor" strokeWidth="2"/>
            <text x="200" y="190" fontFamily="Playfair Display, serif" fontSize="24" fontWeight="600" textAnchor="middle" fill="currentColor" letterSpacing="0.3em">YUVA</text>
            <circle cx="200" cy="100" r="90" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" opacity="0.5"/>
          </svg>
        );
      case 'modern': 
        return (
          <svg viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            {/* Brutalist Geometric */}
            <rect x="150" y="50" width="100" height="100" stroke="currentColor" strokeWidth="8"/>
            <circle cx="200" cy="100" r="20" fill="currentColor"/>
            <text x="200" y="185" fontFamily="Inter, sans-serif" fontSize="28" fontWeight="800" textAnchor="middle" fill="currentColor" letterSpacing="0.4em">Y / V / A</text>
          </svg>
        );
      case 'community': 
        return (
          <svg viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            {/* Organic botanical / bean continuous line */}
            <path d="M150 100C150 127.614 172.386 150 200 150C227.614 150 250 127.614 250 100C250 72.386 227.614 50 200 50C172.386 50 150 72.386 150 100Z" stroke="currentColor" strokeWidth="4"/>
            <path d="M175 75C200 100 200 125 225 125" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
            <text x="200" y="190" fontFamily="Satoshi, sans-serif" fontSize="32" fontWeight="700" textAnchor="middle" fill="currentColor" letterSpacing="0.05em">yuva.</text>
          </svg>
        );
      default: 
        return (
          <svg viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <text x="200" y="120" fontFamily="Playfair Display, serif" fontSize="48" fontWeight="600" textAnchor="middle" fill="currentColor" letterSpacing="0.2em">YUVA</text>
          </svg>
        );
    }
  };

  if (type === 'hero-logo') {
    return <div className="w-full max-w-sm md:max-w-xl text-[var(--text-primary)]">{getLogo()}</div>;
  }

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
