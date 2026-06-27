"use client";
import { useDecision } from "@/context/DecisionContext";
import { motion } from "framer-motion";
import { 
  Play, Compass, Hexagon, Palette, MapPin, Sparkles, FileText 
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ControlDock() {
  const { boardroomMode } = useDecision();
  const pathname = usePathname();

  // Only hide the dock if we are in boardroom mode (presenting)
  if (boardroomMode) return null;

  const navItems = [
    { path: '/', icon: <Play size={18} />, label: 'Welcome' },
    { path: '/positioning', icon: <Compass size={18} />, label: 'Positioning' },
    { path: '/logo', icon: <Hexagon size={18} />, label: 'Logo' },
    { path: '/color', icon: <Palette size={18} />, label: 'Color' },
    { path: '/experience', icon: <MapPin size={18} />, label: 'Experience' },
    { path: '/vision', icon: <Sparkles size={18} />, label: 'Vision' },
    { path: '/blueprint', icon: <FileText size={18} />, label: 'Blueprint' },
  ];

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[100] animate-in slide-in-from-bottom-12 duration-700">
      <div className="bg-[var(--bg-secondary)]/80 backdrop-blur-2xl border border-[var(--text-secondary)]/20 p-2 rounded-2xl shadow-2xl flex gap-2">
        {navItems.map((item) => {
          const isActive = pathname === item.path;
          return (
            <Link
              key={item.path}
              href={item.path}
              className={`p-3 rounded-xl transition-all relative group flex flex-col items-center ${isActive ? 'bg-[var(--text-primary)] text-[var(--bg-primary)]' : 'text-[var(--text-secondary)] hover:bg-[var(--text-primary)]/10 hover:text-[var(--text-primary)]'}`}
            >
              {item.icon}
              
              <div className="absolute -top-10 scale-0 group-hover:scale-100 transition-transform bg-[var(--bg-secondary)] text-[var(--text-primary)] px-3 py-1 rounded font-body text-[10px] uppercase tracking-widest border border-[var(--text-secondary)]/20 shadow-lg whitespace-nowrap">
                {item.label}
              </div>
              
              {isActive && (
                <motion.div layoutId="dock-indicator" className="absolute -bottom-1 w-1 h-1 rounded-full bg-[var(--accent)]" />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
