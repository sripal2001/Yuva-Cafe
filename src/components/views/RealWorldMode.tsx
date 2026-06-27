"use client";
import { useDecision } from "@/context/DecisionContext";
import { motion } from "framer-motion";
import Image from "next/image";
import RoomTestFeedback from "../RoomTestFeedback";
import { Coffee, Smartphone, Navigation, MapPin } from "lucide-react";

export default function RealWorldMode() {
  const { activeLogo, activeColor, activeTypo } = useDecision();

  const getLogo = () => {
    switch (activeLogo) {
      case 'monogram': return <span className="font-heading text-8xl font-bold tracking-tighter">YV</span>;
      case 'luxury': return <span className="font-heading text-6xl font-black uppercase tracking-widest">Yuva</span>;
      case 'geometric': return <span className="font-heading text-7xl font-light uppercase tracking-[0.3em]">Y / V / A</span>;
    }
  };

  const getStrategy = () => {
    switch (activeColor) {
      case 'emerald': return "The deep greens create an instant psychological association with premium organic quality, setting it apart from standard industrial cafes in Kavuri Hills.";
      case 'volcanic': return "Volcanic Black positions Yuva as an exclusive, nightlife-adjacent social club. Perfect for founders meeting after 6 PM.";
      case 'ocean': return "Ocean Blue targets the morning creator crowd, feeling fresh, awake, and highly approachable.";
      case 'terracotta': return "Terracotta feels earthy, artisanal, and grounded. It signals craft coffee and sustainable sourcing.";
    }
  };

  return (
    <div className="h-full w-full overflow-y-auto overflow-x-hidden bg-[var(--bg-primary)] snap-y snap-mandatory scroll-smooth relative">
      
      {/* Dynamic Strategy Tag (Floating) */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        key={activeColor}
        className="hidden md:block fixed top-8 left-8 z-40 max-w-sm bg-[var(--bg-secondary)]/80 backdrop-blur-md border border-[var(--text-secondary)]/20 p-6 rounded-2xl shadow-2xl"
      >
        <p className="font-body text-[var(--accent)] text-xs uppercase tracking-widest mb-2 font-bold flex items-center gap-2"><MapPin size={12}/> Kavuri Hills Strategy</p>
        <p className="font-body text-[var(--text-primary)] text-sm leading-relaxed font-light">{getStrategy()}</p>
      </motion.div>

      {/* SCENE 1: The Storefront Arriving */}
      <section className="min-h-screen w-full snap-start relative flex items-center justify-center overflow-hidden group">
        <RoomTestFeedback targetId="scene_storefront" />
        <div className="absolute inset-0 z-0">
          <Image src="/tropical_shadows.png" alt="Storefront Concept" fill className="object-cover opacity-30 mix-blend-luminosity scale-110" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-primary)]/80 to-[var(--bg-primary)]" />
        </div>
        
        <div className="relative z-10 text-center">
          <motion.div 
            key={activeLogo + activeTypo}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-[var(--text-primary)] flex flex-col items-center"
          >
            {getLogo()}
            <p className="font-body text-[var(--accent)] tracking-[0.5em] text-sm uppercase mt-8">Coffee & Culture</p>
          </motion.div>
          <div className="mt-24 font-body text-[var(--text-secondary)] text-sm uppercase tracking-widest flex items-center justify-center gap-4">
            <div className="w-12 h-[1px] bg-[var(--text-secondary)]/30" />
            Scene 01: Arrival
            <div className="w-12 h-[1px] bg-[var(--text-secondary)]/30" />
          </div>
        </div>
      </section>

      {/* SCENE 2: The Tactile Experience (Coffee Cup) */}
      <section className="min-h-screen w-full snap-start relative flex items-center justify-center bg-[var(--bg-secondary)] group py-20">
        <RoomTestFeedback targetId="scene_cup" />
        <div className="w-full max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl border border-[var(--text-secondary)]/20">
            <Image src="/tropical_coffee_cup.png" alt="Cup Mockup" fill className="object-cover mix-blend-luminosity opacity-80" />
            <div className="absolute inset-0 bg-[var(--accent)]/10 mix-blend-overlay" />
            <div className="absolute inset-0 flex items-center justify-center">
               {/* Project Logo onto cup */}
               <div className="text-[var(--bg-primary)] opacity-90 scale-50">
                 {getLogo()}
               </div>
            </div>
          </div>
          <div>
            <Coffee size={40} className="text-[var(--accent)] mb-8" />
            <h2 className="font-heading text-6xl text-[var(--text-primary)] font-bold mb-6">The Handshake.</h2>
            <p className="font-body text-[var(--text-secondary)] text-xl leading-relaxed font-light">
              The cup is the physical manifestation of the brand. By utilizing the {activeColor} palette, we ensure every takeaway cup acts as a high-end billboard walking through Jubilee and Kavuri Hills.
            </p>
          </div>
        </div>
      </section>

      {/* SCENE 3: The Digital Ecosystem */}
      <section className="min-h-screen w-full snap-start relative flex items-center justify-center bg-[var(--bg-primary)] group py-20">
        <RoomTestFeedback targetId="scene_digital" />
        <div className="w-full max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <Smartphone size={40} className="text-[var(--accent)] mb-8" />
            <h2 className="font-heading text-6xl text-[var(--text-primary)] font-bold mb-6">Zero Friction.</h2>
            <p className="font-body text-[var(--text-secondary)] text-xl leading-relaxed font-light mb-8">
              The modern customer expects seamless interaction. From Instagram discovery to the table-side QR menu, the typography ({activeTypo === 'serif' ? 'Playfair' : activeTypo === 'sans' ? 'Inter' : 'Lora'}) carries the luxury feel directly to their device.
            </p>
            <div className="flex gap-4">
              <div className="px-6 py-2 rounded-full border border-[var(--accent)]/50 text-[var(--accent)] font-body text-xs uppercase tracking-widest">QR Ordering</div>
              <div className="px-6 py-2 rounded-full border border-[var(--text-secondary)]/50 text-[var(--text-secondary)] font-body text-xs uppercase tracking-widest">Loyalty App</div>
            </div>
          </div>
          
          <div className="order-1 md:order-2 relative aspect-[9/16] max-w-sm mx-auto w-full bg-[var(--bg-secondary)] rounded-[3rem] border-[8px] border-[var(--bg-primary)] shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col">
            <div className="h-32 bg-[var(--bg-primary)] flex items-center justify-center border-b border-[var(--text-secondary)]/10">
              <div className="scale-50 text-[var(--text-primary)]">{getLogo()}</div>
            </div>
            <div className="p-6 flex-1 bg-[var(--bg-secondary)]">
              <p className="font-heading text-2xl text-[var(--text-primary)] mb-6">Menu</p>
              <div className="space-y-4">
                {[1,2,3].map(i => (
                  <div key={i} className="flex justify-between items-center pb-4 border-b border-[var(--text-secondary)]/10">
                    <div>
                      <p className="font-body text-[var(--text-primary)]">Pour Over V60</p>
                      <p className="font-body text-[var(--text-secondary)] text-xs mt-1">Araku Estate</p>
                    </div>
                    <p className="font-body text-[var(--accent)]">₹350</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Spacer for dock */}
      <div className="h-32 w-full snap-start" />
    </div>
  );
}
