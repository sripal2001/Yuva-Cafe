"use client";
import { useDecision } from "@/context/DecisionContext";
import { Download } from "lucide-react";

export default function ExecutiveSummary() {
  const { brandDirection, activeLogo, activeColor, activeTypo, votes } = useDecision();

  // Aggregate votes for the report
  const getTopLogo = () => {
    // In a real app, this would calculate from the 'votes' array
    return activeLogo.toUpperCase(); 
  };

  return (
    <div className="h-full w-full bg-[var(--bg-primary)] text-[var(--text-primary)] overflow-y-auto pb-32">
      
      <div className="max-w-4xl mx-auto p-16 pt-32">
        <header className="mb-24 border-b border-[var(--text-secondary)]/20 pb-16">
          <p className="font-body text-[var(--text-secondary)] text-[10px] tracking-[0.3em] uppercase mb-4">Strategic Review</p>
          <h1 className="font-heading text-5xl md:text-6xl font-black uppercase tracking-widest mb-8">Executive Summary</h1>
          <p className="font-body text-xl font-light text-[var(--text-secondary)] leading-relaxed">
            A comprehensive overview of the brand strategy, positioning, and future ecosystem established for Yuva Cafe, Kavuri Hills.
          </p>
        </header>

        <section className="mb-16">
          <h3 className="font-body text-[10px] uppercase tracking-[0.3em] text-[var(--accent)] mb-8 font-bold">01. Core Positioning</h3>
          <div className="grid grid-cols-2 gap-8">
            <div className="bg-[var(--bg-secondary)] p-8 rounded-2xl border border-[var(--text-secondary)]/10">
              <p className="font-body text-[10px] uppercase tracking-widest text-[var(--text-secondary)] mb-2">Direction</p>
              <h4 className="font-heading text-3xl uppercase">{brandDirection.replace('-', ' ')}</h4>
            </div>
            <div className="bg-[var(--bg-secondary)] p-8 rounded-2xl border border-[var(--text-secondary)]/10">
              <p className="font-body text-[10px] uppercase tracking-widest text-[var(--text-secondary)] mb-2">Primary Target</p>
              <h4 className="font-heading text-xl">Founders, Creators, Professionals</h4>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h3 className="font-body text-[10px] uppercase tracking-[0.3em] text-[var(--accent)] mb-8 font-bold">02. Visual Identity Consensus</h3>
          <div className="grid grid-cols-3 gap-8">
            <div className="bg-[var(--bg-secondary)] p-8 rounded-2xl border border-[var(--text-secondary)]/10 text-center">
              <p className="font-body text-[10px] uppercase tracking-widest text-[var(--text-secondary)] mb-2">Selected Mark</p>
              <h4 className="font-heading text-2xl uppercase text-[var(--text-primary)]">{getTopLogo()}</h4>
            </div>
            <div className="bg-[var(--bg-secondary)] p-8 rounded-2xl border border-[var(--text-secondary)]/10 text-center">
              <p className="font-body text-[10px] uppercase tracking-widest text-[var(--text-secondary)] mb-2">Atmosphere</p>
              <h4 className="font-heading text-2xl uppercase text-[var(--text-primary)]">{activeColor}</h4>
            </div>
            <div className="bg-[var(--bg-secondary)] p-8 rounded-2xl border border-[var(--text-secondary)]/10 text-center">
              <p className="font-body text-[10px] uppercase tracking-widest text-[var(--text-secondary)] mb-2">Typography</p>
              <h4 className="font-heading text-2xl uppercase text-[var(--text-primary)]">{activeTypo}</h4>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h3 className="font-body text-[10px] uppercase tracking-[0.3em] text-[var(--accent)] mb-8 font-bold">03. Competitive Advantage</h3>
          <div className="bg-[var(--bg-secondary)] p-8 rounded-2xl border border-[var(--text-secondary)]/10">
            <p className="font-body text-sm font-light text-[var(--text-primary)] leading-relaxed mb-6">
              By occupying the premium "Tropical Luxury" space, Yuva effectively bypasses the 82% homogenization rate of industrial-themed cafes in Kavuri Hills. The selected visual identity creates an immediate perception of high-value, allowing for elevated price points and stronger customer loyalty among the target demographic.
            </p>
          </div>
        </section>

        <section className="mb-24">
          <h3 className="font-body text-[10px] uppercase tracking-[0.3em] text-[var(--accent)] mb-8 font-bold">04. Next Steps & Execution</h3>
          <ul className="space-y-4 font-body text-sm font-light text-[var(--text-secondary)]">
            <li className="flex items-center gap-4"><div className="w-2 h-2 rounded-full bg-[var(--accent)]"/> Finalize brand guidelines document based on today's consensus.</li>
            <li className="flex items-center gap-4"><div className="w-2 h-2 rounded-full bg-[var(--accent)]"/> Begin architectural rendering alignments with the {activeColor} palette.</li>
            <li className="flex items-center gap-4"><div className="w-2 h-2 rounded-full bg-[var(--accent)]"/> Develop MVP for the Frictionless QR Ordering system.</li>
            <li className="flex items-center gap-4"><div className="w-2 h-2 rounded-full bg-[var(--accent)]"/> Curate the first 3 events for the Community Workshops initiative.</li>
          </ul>
        </section>

        <div className="flex justify-center">
           <button className="bg-[var(--accent)] text-[var(--bg-primary)] px-12 py-4 rounded-full font-body text-xs uppercase tracking-widest font-bold flex items-center gap-2 hover:scale-105 transition-transform shadow-2xl">
             <Download size={16} /> Export PDF Report
           </button>
        </div>

      </div>
    </div>
  );
}
