"use client";
import { useDecision } from "@/context/DecisionContext";
import { motion } from "framer-motion";
import { Target, TrendingUp, AlertCircle } from "lucide-react";

export default function CompetitorIntelligence() {
  const { activeColor } = useDecision();

  return (
    <div className="h-full w-full overflow-y-auto bg-[var(--bg-primary)] p-12 lg:p-24 pb-40 relative">
      <div className="max-w-7xl mx-auto">
        
        <header className="mb-20">
          <p className="font-body text-[var(--accent)] text-sm tracking-[0.2em] uppercase mb-4">Strategic Intelligence</p>
          <h1 className="font-heading text-6xl lg:text-8xl font-black text-[var(--text-primary)] uppercase tracking-tighter mb-8">
            Kavuri Hills <br/><span className="text-[var(--text-secondary)] font-light italic">Analysis.</span>
          </h1>
          <p className="font-body text-[var(--text-secondary)] text-xl max-w-2xl font-light">
            Data-driven positioning. We don't guess. We analyze the saturation of the local market and position Yuva Cafe in the exact white space.
          </p>
        </header>

        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Saturated Trends */}
          <div className="bg-[var(--bg-secondary)] p-10 rounded-3xl border border-[var(--text-secondary)]/10">
            <AlertCircle className="text-red-500 mb-8" size={32} />
            <h3 className="font-heading text-2xl text-[var(--text-primary)] mb-6 font-bold">The Saturated Middle</h3>
            <p className="font-body text-[var(--text-secondary)] text-sm leading-relaxed mb-8">
              70% of new cafes in Hyderabad follow the same exact playbook. It blends in and becomes invisible.
            </p>
            <ul className="space-y-4 font-body text-[var(--text-primary)] text-sm">
              <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-red-500/50"/> Exposed Brick & Edison Bulbs</li>
              <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-red-500/50"/> Generic Script Fonts</li>
              <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-red-500/50"/> Uncurated Instagram Feeds</li>
            </ul>
          </div>

          {/* Emerging Trends */}
          <div className="bg-[var(--bg-secondary)] p-10 rounded-3xl border border-[var(--text-secondary)]/10">
            <TrendingUp className="text-[var(--text-secondary)] mb-8" size={32} />
            <h3 className="font-heading text-2xl text-[var(--text-primary)] mb-6 font-bold">The Shift</h3>
            <p className="font-body text-[var(--text-secondary)] text-sm leading-relaxed mb-8">
              The post-pandemic tech crowd is demanding higher-fidelity experiences that feel closer to luxury hospitality than traditional coffee shops.
            </p>
            <ul className="space-y-4 font-body text-[var(--text-primary)] text-sm">
              <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-[var(--text-secondary)]"/> Frictionless QR Ordering</li>
              <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-[var(--text-secondary)]"/> Minimalist Brutalism</li>
              <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-[var(--text-secondary)]"/> Coffee as a Creative Hub</li>
            </ul>
          </div>

          {/* Yuva Positioning */}
          <motion.div 
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-[var(--bg-primary)] p-10 rounded-3xl border-2 border-[var(--accent)] shadow-[0_0_40px_rgba(var(--accent-rgb),0.1)] relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--accent)]/10 rounded-full blur-[100px]" />
            <Target className="text-[var(--accent)] mb-8 relative z-10" size={32} />
            <h3 className="font-heading text-2xl text-[var(--text-primary)] mb-6 font-bold relative z-10">Yuva's White Space</h3>
            <p className="font-body text-[var(--text-secondary)] text-sm leading-relaxed mb-8 relative z-10">
              By utilizing the {activeColor} palette, we bypass the middle market entirely. We position Yuva not as a cafe, but as a premium lifestyle destination.
            </p>
            <ul className="space-y-4 font-body text-[var(--text-primary)] text-sm font-bold relative z-10">
              <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-[var(--accent)]"/> Luxury Hotel Aesthetic</li>
              <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-[var(--accent)]"/> Hyper-Curated Digital Ecosystem</li>
              <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-[var(--accent)]"/> Creator-Centric Environment</li>
            </ul>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
