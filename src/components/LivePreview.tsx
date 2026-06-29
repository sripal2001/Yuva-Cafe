"use client";
import { useDecision } from "@/context/DecisionContext";
import YuvaBrandedAsset from "@/components/YuvaBrandedAsset";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";

export default function LivePreview() {
  const { 
    currentStep, 
    logo, color, typography, visualStyle, packaging, social, websiteStyle, features 
  } = useDecision();

  // Typography Engine
  const getFontClass = () => {
    if (typography === 'sans') return 'font-inter';
    if (typography === 'editorial') return 'font-oswald';
    return 'font-playfair'; // serif default
  };

  // Color Engine
  const getThemeClass = () => {
    if (color === 'coral') return 'theme-coral';
    if (color === 'ocean') return 'theme-ocean';
    return 'theme-emerald'; // default
  };

  // Layout Engine
  const getLayoutClass = () => {
    if (websiteStyle === 'minimal') return 'p-16 max-w-5xl mx-auto border-x border-[var(--text-secondary)]/10';
    if (websiteStyle === 'editorial') return 'p-4 md:p-8 grid grid-cols-12 gap-4';
    return 'p-0'; // hospitality full bleed
  };

  if (currentStep === 8) {
    return <BlueprintView />;
  }

  return (
    <div className={`w-full h-full overflow-y-auto ${getThemeClass()} transition-colors duration-1000 bg-[var(--bg-primary)] text-[var(--text-primary)] md:pl-[450px]`}>
      <div className={`w-full min-h-full ${getLayoutClass()} transition-all duration-1000`}>
        
        {/* HERO SECTION */}
        <header className={`${websiteStyle === 'editorial' ? 'col-span-12 border-b border-[var(--text-secondary)]/30 pb-8 mb-8' : 'min-h-[70vh] flex flex-col justify-center px-12 md:px-24'} relative overflow-hidden`}>
          
          {websiteStyle === 'hospitality' && (
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)] to-transparent z-10" />
          )}

          <div className="relative z-20">
            <h4 className="font-body text-xs uppercase tracking-[0.4em] text-[var(--accent)] mb-6">Kavuri Hills, HYD</h4>
            
            <div className={`mb-8 transition-all duration-700 ${websiteStyle === 'editorial' ? 'scale-125 origin-left' : ''}`}>
              <YuvaBrandedAsset type="hero-logo" />
            </div>
            
            <p className="font-body text-lg md:text-xl max-w-xl text-[var(--text-secondary)] leading-relaxed">
              {visualStyle === 'botanical' 
                ? 'A lush sanctuary blending natural textures with modern craft coffee.'
                : visualStyle === 'modern'
                ? 'Clean lines, curated roasts, and a space designed for deep focus.'
                : 'An uncompromising premium coffee experience in the heart of the city.'}
            </p>
          </div>
        </header>

        {/* MOCKUP INJECTION (Storefront) */}
        <section className={`${websiteStyle === 'editorial' ? 'col-span-12 md:col-span-8' : 'px-12 md:px-24 py-16'} transition-all`}>
           <div className={`w-full ${websiteStyle === 'minimal' ? 'rounded-sm' : 'rounded-3xl'} overflow-hidden shadow-2xl`}>
             <YuvaBrandedAsset type="storefront" />
           </div>
        </section>

        {/* SPLIT SECTION (Packaging & Social) */}
        <section className={`${websiteStyle === 'editorial' ? 'col-span-12 grid grid-cols-12 gap-4 mt-4' : 'px-12 md:px-24 py-16 grid grid-cols-1 md:grid-cols-2 gap-12'}`}>
           
           <div className={`${websiteStyle === 'editorial' ? 'col-span-12 md:col-span-6' : ''}`}>
             <h3 className={`${getFontClass()} text-3xl mb-8`}>The Ritual</h3>
             <div className={`${websiteStyle === 'minimal' ? 'rounded-none' : 'rounded-3xl'} overflow-hidden shadow-xl`}>
               <YuvaBrandedAsset type="cup" />
             </div>
             <p className="font-body text-sm text-[var(--text-secondary)] mt-6 uppercase tracking-widest">
               {packaging === 'minimal' ? 'Stripped back purity.' : packaging === 'luxury' ? 'Premium materials & foil.' : 'Accessible & vibrant.'}
             </p>
           </div>

           <div className={`${websiteStyle === 'editorial' ? 'col-span-12 md:col-span-6' : ''}`}>
             <h3 className={`${getFontClass()} text-3xl mb-8`}>Digital Identity</h3>
             <div className="scale-90 origin-top">
               <YuvaBrandedAsset type="instagram" />
             </div>
           </div>

        </section>

      </div>
    </div>
  );
}

function BlueprintView() {
  const { logo, color, typography, visualStyle, packaging, social, websiteStyle, features } = useDecision();

  return (
    <div className="w-full h-full bg-[var(--bg-primary)] text-[var(--text-primary)] p-12 md:p-24 overflow-y-auto">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-heading text-6xl font-black uppercase tracking-tighter mb-4">The Yuva Blueprint</h1>
        <p className="font-body text-[var(--text-secondary)] mb-16 uppercase tracking-widest text-sm">Generated System Architecture</p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-16">
          <BlueprintCard title="Mark" value={logo || 'Pending'} />
          <BlueprintCard title="Color Palette" value={color || 'Pending'} />
          <BlueprintCard title="Typography" value={typography || 'Pending'} />
          <BlueprintCard title="Visual Style" value={visualStyle || 'Pending'} />
          <BlueprintCard title="Packaging" value={packaging || 'Pending'} />
          <BlueprintCard title="Social Strategy" value={social || 'Pending'} />
          <BlueprintCard title="Layout Architecture" value={websiteStyle || 'Pending'} />
        </div>

        {features.length > 0 && (
          <div className="mb-16">
            <h3 className="font-heading text-2xl uppercase tracking-widest mb-6">Future Modules</h3>
            <div className="flex flex-wrap gap-4">
              {features.map(f => (
                <span key={f} className="px-4 py-2 border border-[var(--text-secondary)]/30 rounded-full font-body text-xs uppercase tracking-widest">
                  {f}
                </span>
              ))}
            </div>
          </div>
        )}

        <button className="bg-[var(--text-primary)] text-[var(--bg-primary)] px-8 py-4 rounded-full font-body text-sm uppercase tracking-widest font-bold flex items-center gap-2 hover:scale-105 transition-transform">
          Export Blueprint to PDF <ArrowUpRight size={16} />
        </button>
      </div>
    </div>
  );
}

function BlueprintCard({ title, value }: { title: string, value: string }) {
  return (
    <div className="border border-[var(--text-secondary)]/20 p-6 rounded-2xl bg-[var(--bg-secondary)]/30">
      <p className="font-body text-[10px] uppercase tracking-widest text-[var(--text-secondary)] mb-2">{title}</p>
      <p className="font-heading text-xl uppercase text-[var(--text-primary)]">{value}</p>
    </div>
  );
}
