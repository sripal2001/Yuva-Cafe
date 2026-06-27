"use client";
import { useDecision } from "@/context/DecisionContext";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Play, Compass, Hexagon, Palette, Type, 
  MapPin, Target, Users, Smartphone, FileText 
} from "lucide-react";

export default function ControlDock() {
  const { activeArenaIndex, setActiveArenaIndex } = useDecision();

  const navItems = [
    { id: 0, icon: <Play size={18} />, label: 'Intro' },
    { id: 1, icon: <Compass size={18} />, label: 'Strategy' },
    { id: 2, icon: <Hexagon size={18} />, label: 'Mark' },
    { id: 3, icon: <Palette size={18} />, label: 'Color' },
    { id: 4, icon: <Type size={18} />, label: 'Type' },
    { id: 5, icon: <MapPin size={18} />, label: 'Journey' },
    { id: 6, icon: <Target size={18} />, label: 'Market' },
    { id: 7, icon: <Users size={18} />, label: 'Community' },
    { id: 8, icon: <Smartphone size={18} />, label: 'Ecosystem' },
    { id: 10, icon: <FileText size={18} />, label: 'Report' }, // Skip 9 (Reveal) in dock
  ];

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
      <div className="bg-[var(--bg-secondary)]/80 backdrop-blur-2xl border border-[var(--text-secondary)]/20 p-2 rounded-2xl shadow-2xl flex gap-2">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveArenaIndex(item.id)}
            className={`p-3 rounded-xl transition-all relative group flex flex-col items-center ${activeArenaIndex === item.id ? 'bg-[var(--text-primary)] text-[var(--bg-primary)]' : 'text-[var(--text-secondary)] hover:bg-[var(--text-primary)]/10 hover:text-[var(--text-primary)]'}`}
          >
            {item.icon}
            
            {/* Tooltip */}
            <div className="absolute -top-10 scale-0 group-hover:scale-100 transition-transform bg-[var(--bg-secondary)] text-[var(--text-primary)] px-3 py-1 rounded font-body text-[10px] uppercase tracking-widest border border-[var(--text-secondary)]/20 shadow-lg whitespace-nowrap">
              {item.label}
            </div>
            
            {activeArenaIndex === item.id && (
              <motion.div layoutId="dock-indicator" className="absolute -bottom-1 w-1 h-1 rounded-full bg-[var(--accent)]" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
