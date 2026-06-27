"use client";
import { useDecision } from "@/context/DecisionContext";
import { motion } from "framer-motion";
import { Check, QrCode, CreditCard, LayoutDashboard, Smartphone } from "lucide-react";

export default function FutureEcosystemMode() {
  const { setActiveArenaIndex, boardroomMode } = useDecision();

  return (
    <div className="h-full w-full bg-[var(--bg-primary)] text-[var(--text-primary)] flex flex-col relative overflow-hidden">
      
      <header className="absolute top-8 left-16 z-20">
        <p className="font-body text-[var(--text-secondary)] text-[10px] tracking-[0.3em] uppercase mb-2">Arena 07</p>
        <h2 className="font-heading text-2xl font-black uppercase tracking-widest">Future Ecosystem</h2>
      </header>

      <div className="flex-1 p-8 pt-32 pb-32 flex flex-col justify-center">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-4 gap-8">
           
           {/* QR Menu */}
           <motion.div 
             initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
             className="bg-[var(--bg-secondary)] border border-[var(--text-secondary)]/10 rounded-[2rem] p-8 flex flex-col items-center justify-center aspect-[3/4] group"
           >
             <div className="w-24 h-24 bg-[var(--text-primary)] rounded-3xl flex items-center justify-center mb-8 shadow-2xl group-hover:scale-110 transition-transform">
               <QrCode size={48} className="text-[var(--bg-primary)]" />
             </div>
             <h4 className="font-heading text-2xl mb-2 text-center">QR Menu</h4>
             <p className="font-body text-[10px] uppercase tracking-widest text-[var(--text-secondary)] text-center">Zero-Friction Ordering</p>
           </motion.div>

           {/* POS System */}
           <motion.div 
             initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
             className="bg-[var(--bg-secondary)] border border-[var(--text-secondary)]/10 rounded-[2rem] p-8 flex flex-col items-center justify-center aspect-[3/4] group"
           >
             <div className="w-32 h-24 bg-[var(--accent)] rounded-2xl flex items-center justify-center mb-8 shadow-2xl group-hover:scale-110 transition-transform">
               <LayoutDashboard size={40} className="text-[var(--bg-primary)]" />
             </div>
             <h4 className="font-heading text-2xl mb-2 text-center">Cloud POS</h4>
             <p className="font-body text-[10px] uppercase tracking-widest text-[var(--text-secondary)] text-center">Kitchen Display System</p>
           </motion.div>

           {/* Loyalty App */}
           <motion.div 
             initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
             className="bg-[var(--bg-secondary)] border border-[var(--text-secondary)]/10 rounded-[2rem] p-8 flex flex-col items-center justify-center aspect-[3/4] group"
           >
             <div className="w-16 h-32 bg-[var(--text-primary)] rounded-3xl flex flex-col items-center p-2 mb-8 shadow-2xl group-hover:scale-110 transition-transform">
               <div className="w-6 h-6 rounded-full bg-[var(--bg-primary)]/20 mt-4" />
               <div className="w-10 h-2 bg-[var(--bg-primary)]/20 rounded-full mt-4" />
               <div className="w-10 h-2 bg-[var(--bg-primary)]/20 rounded-full mt-2" />
             </div>
             <h4 className="font-heading text-2xl mb-2 text-center">Loyalty App</h4>
             <p className="font-body text-[10px] uppercase tracking-widest text-[var(--text-secondary)] text-center">Digital Membership</p>
           </motion.div>

           {/* Event Ticketing */}
           <motion.div 
             initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
             className="bg-[var(--bg-secondary)] border border-[var(--text-secondary)]/10 rounded-[2rem] p-8 flex flex-col items-center justify-center aspect-[3/4] group"
           >
             <div className="w-32 h-16 bg-[var(--accent)] rounded-lg flex items-center justify-between px-4 mb-8 shadow-2xl group-hover:scale-110 transition-transform border-l-4 border-dashed border-[var(--bg-primary)]">
               <div className="w-4 h-4 rounded-full bg-[var(--bg-primary)]" />
               <CreditCard size={24} className="text-[var(--bg-primary)]" />
             </div>
             <h4 className="font-heading text-2xl mb-2 text-center">Event Pass</h4>
             <p className="font-body text-[10px] uppercase tracking-widest text-[var(--text-secondary)] text-center">Workshop Ticketing</p>
           </motion.div>

        </div>
      </div>

      {!boardroomMode && (
        <div className="absolute bottom-8 right-16 z-20">
          <button 
            onClick={() => setActiveArenaIndex(9)}
            className="bg-[var(--accent)] text-[var(--bg-primary)] px-12 py-4 rounded-full font-body text-xs uppercase tracking-widest font-bold flex items-center gap-2 hover:scale-105 transition-transform shadow-2xl"
          >
            <Check size={16} /> Execute Final Reveal
          </button>
        </div>
      )}

    </div>
  );
}
