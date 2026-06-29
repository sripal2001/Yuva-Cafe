"use client";
import { useEffect, useState } from "react";
import { useDecision } from "@/context/DecisionContext";
import { AnimatePresence, motion } from "framer-motion";
import YuvaBrandedAsset from "@/components/YuvaBrandedAsset";

const SLIDES = [
  TitleSlide,
  VisionSlide,
  LogoSlide,
  ColorSlide,
  FinalSlide
];

export default function PresentationEngine() {
  const { currentStep, setCurrentStep } = useDecision();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") {
        setCurrentStep(prev => Math.min(SLIDES.length - 1, prev + 1));
      } else if (e.key === "ArrowLeft") {
        setCurrentStep(prev => Math.max(0, prev - 1));
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [setCurrentStep]);

  const CurrentSlideComponent = SLIDES[currentStep];

  const handleNext = () => setCurrentStep(prev => Math.min(SLIDES.length - 1, prev + 1));
  const handlePrev = () => setCurrentStep(prev => Math.max(0, prev - 1));

  return (
    <div className="w-full h-full bg-black overflow-hidden relative selection:bg-white selection:text-black">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, scale: 0.98, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          exit={{ opacity: 0, scale: 1.02, filter: "blur(10px)" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 w-full h-full flex flex-col items-center justify-center"
        >
          <CurrentSlideComponent />
        </motion.div>
      </AnimatePresence>

      {/* Subtle Navigation Hint */}
      <div className="absolute bottom-8 right-12 z-50 font-body text-[10px] uppercase tracking-[0.3em] text-white flex gap-4">
        <button onClick={handlePrev} className="opacity-30 hover:opacity-100 transition-opacity p-2">← Prev</button>
        <button onClick={handleNext} className="opacity-30 hover:opacity-100 transition-opacity p-2">Next →</button>
      </div>
    </div>
  );
}

function TitleSlide() {
  return (
    <div className="text-center">
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 0.5, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="font-body text-xs uppercase tracking-[0.5em] text-white mb-8"
      >
        Kavuri Hills, Hyderabad
      </motion.p>
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 1.2 }}
        className="font-heading text-8xl md:text-[12rem] font-black uppercase tracking-tighter text-white leading-none"
      >
        YUVA
      </motion.h1>
    </div>
  );
}

function VisionSlide() {
  return (
    <div className="w-full h-full relative flex items-center justify-center p-24">
      {/* Immersive background overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neutral-900 via-black to-black opacity-80" />
      
      <div className="relative z-10 max-w-5xl text-center">
        <h2 className="font-heading text-5xl md:text-7xl text-white font-medium tracking-tight leading-[1.2]">
          A sanctuary in the heart of the city, blending <span className="italic font-playfair opacity-80">natural textures</span> with an uncompromising premium coffee experience.
        </h2>
      </div>
    </div>
  );
}

function LogoSlide() {
  const { logo, setLogo } = useDecision();

  const options = [
    { id: 'luxury', label: 'Luxury Monogram' },
    { id: 'modern', label: 'Modern Geometric' },
    { id: 'community', label: 'Organic Community' }
  ];

  return (
    <div className="w-full h-full grid grid-cols-12">
      {/* Left side: Hero Mockup filling 60% of screen */}
      <div className="col-span-12 md:col-span-7 h-full relative overflow-hidden bg-neutral-900 p-12 md:p-24 flex items-center justify-center">
        <AnimatePresence mode="popLayout">
          <motion.div 
            key={logo || 'default'}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full max-w-lg aspect-square shadow-2xl rounded-3xl overflow-hidden ring-1 ring-white/10"
          >
            <YuvaBrandedAsset type="storefront" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Right side: Interactive Options */}
      <div className="col-span-12 md:col-span-5 h-full bg-black p-12 md:p-24 flex flex-col justify-center border-l border-white/10">
        <h3 className="font-body text-xs uppercase tracking-[0.4em] text-white/50 mb-12">The Brand Mark</h3>
        
        <div className="space-y-6">
          {options.map(opt => (
            <button
              key={opt.id}
              onClick={() => setLogo(opt.id as any)}
              className={`w-full text-left p-6 border-b border-white/10 transition-all duration-500 group ${logo === opt.id ? 'pl-12 border-white' : 'hover:pl-4'}`}
            >
              <span className={`font-heading text-3xl transition-colors duration-500 ${logo === opt.id ? 'text-white' : 'text-white/30 group-hover:text-white/70'}`}>
                {opt.label}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function ColorSlide() {
  const { color, setColor } = useDecision();

  const options = [
    { id: 'emerald', label: 'Emerald Tropical', hex: '#064E3B' }, // Deep green
    { id: 'coral', label: 'Coral Sunset', hex: '#BE123C' }, // Deep rose/coral
    { id: 'ocean', label: 'Ocean Retreat', hex: '#0F172A' }  // Deep slate blue
  ];

  const activeOption = options.find(o => o.id === color) || options[0];

  return (
    <div className="w-full h-full relative flex items-center justify-center transition-colors duration-1000" style={{ backgroundColor: activeOption.hex }}>
      <div className="absolute inset-0 bg-black/40 mix-blend-multiply" />
      
      <div className="relative z-10 flex flex-col items-center">
        <h3 className="font-body text-xs uppercase tracking-[0.4em] text-white/70 mb-16">The Atmosphere</h3>
        
        <div className="flex gap-12 mb-24">
          {options.map(opt => (
            <button
              key={opt.id}
              onClick={() => setColor(opt.id as any)}
              className={`flex flex-col items-center gap-4 transition-all duration-500 ${color === opt.id ? 'scale-110 opacity-100' : 'scale-90 opacity-40 hover:opacity-80'}`}
            >
              <div className="w-24 h-24 rounded-full shadow-2xl ring-4 ring-white/20 transition-transform" style={{ backgroundColor: opt.hex }} />
              <span className="font-heading text-lg text-white">{opt.label}</span>
            </button>
          ))}
        </div>

        <div className="w-80 aspect-[4/5] shadow-2xl rounded-[2rem] overflow-hidden">
          <YuvaBrandedAsset type="cup" />
        </div>
      </div>
    </div>
  );
}

function FinalSlide() {
  const { logo, color } = useDecision();
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-black p-24">
      <h3 className="font-body text-xs uppercase tracking-[0.4em] text-white/50 mb-12">The Yuva Blueprint</h3>
      
      <div className="max-w-4xl w-full grid grid-cols-2 gap-8 border border-white/10 p-12 rounded-[3rem] bg-white/5 backdrop-blur-md">
        <div>
          <p className="font-body text-[10px] uppercase tracking-[0.3em] text-white/40 mb-2">Selected Mark</p>
          <p className="font-heading text-4xl text-white capitalize">{logo || 'Luxury'}</p>
        </div>
        <div>
          <p className="font-body text-[10px] uppercase tracking-[0.3em] text-white/40 mb-2">Selected Vibe</p>
          <p className="font-heading text-4xl text-white capitalize">{color || 'Emerald'}</p>
        </div>
      </div>
      
      <p className="font-body text-sm text-white/40 mt-16 text-center max-w-md">
        Ready for production. Exporting brand guidelines...
      </p>
    </div>
  );
}
