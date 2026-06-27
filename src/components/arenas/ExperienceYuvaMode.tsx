"use client";
import { useDecision } from "@/context/DecisionContext";
import { motion } from "framer-motion";
import { Check, Camera, Users, MapPin, QrCode, Coffee, Calendar, Moon } from "lucide-react";

export default function ExperienceYuvaMode() {
  const { setActiveArenaIndex, boardroomMode } = useDecision();

  const journey = [
    { icon: <Camera size={24}/>, title: "Discovery", desc: "Sees aesthetic reel on Instagram" },
    { icon: <Users size={24}/>, title: "Social Proof", desc: "Friend forwards the post" },
    { icon: <MapPin size={24}/>, title: "Arrival", desc: "Visits Kavuri Hills location" },
    { icon: <QrCode size={24}/>, title: "Frictionless", desc: "Scans minimal QR menu" },
    { icon: <Coffee size={24}/>, title: "Conversion", desc: "Orders signature pour-over" },
    { icon: <Calendar size={24}/>, title: "Community", desc: "Notices upcoming founder meetup" },
    { icon: <Moon size={24}/>, title: "Retention", desc: "Returns for evening networking" },
  ];

  return (
    <div className="h-full w-full bg-[var(--bg-primary)] text-[var(--text-primary)] flex flex-col relative overflow-hidden">
      
      <header className="absolute top-8 left-16 z-20">
        <p className="font-body text-[var(--text-secondary)] text-[10px] tracking-[0.3em] uppercase mb-2">Arena 04</p>
        <h2 className="font-heading text-2xl font-black uppercase tracking-widest">The Customer Journey</h2>
      </header>

      <div className="flex-1 flex flex-col items-center justify-center p-16">
         <div className="w-full max-w-5xl relative">
            
            {/* Timeline Line */}
            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-[var(--text-secondary)]/20 -translate-y-1/2" />
            
            <div className="flex justify-between relative z-10">
              {journey.map((step, i) => (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.15, duration: 0.8, ease: "easeOut" }}
                  key={i} 
                  className="flex flex-col items-center group cursor-default"
                >
                  <div className="w-16 h-16 rounded-full bg-[var(--bg-secondary)] border border-[var(--accent)]/30 flex items-center justify-center text-[var(--accent)] mb-6 group-hover:scale-110 group-hover:bg-[var(--accent)] group-hover:text-[var(--bg-primary)] transition-all duration-500 shadow-xl">
                    {step.icon}
                  </div>
                  <h4 className="font-heading text-lg mb-1">{step.title}</h4>
                  <p className="font-body text-[10px] uppercase tracking-widest text-[var(--text-secondary)] text-center max-w-[100px] leading-relaxed">{step.desc}</p>
                </motion.div>
              ))}
            </div>

         </div>
      </div>

      {!boardroomMode && (
        <div className="absolute bottom-8 right-16 z-20">
          <button 
            onClick={() => setActiveArenaIndex(6)}
            className="bg-[var(--accent)] text-[var(--bg-primary)] px-12 py-4 rounded-full font-body text-xs uppercase tracking-widest font-bold flex items-center gap-2 hover:scale-105 transition-transform shadow-2xl"
          >
            <Check size={16} /> Continue to Intelligence
          </button>
        </div>
      )}

    </div>
  );
}
