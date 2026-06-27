"use client";
import { useRouter } from "next/navigation";
import { MoveRight, Coffee, Laptop, Users, Palette, Sparkles } from "lucide-react";
import { useState } from "react";

export default function ExperiencePage() {
  const router = useRouter();
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      time: "08:00 AM",
      title: "Morning Ritual",
      desc: "Artisanal brewing starts. The smell of fresh tropical roasts fills the air. Early risers grab their matcha and espresso to start the day.",
      icon: <Coffee size={24} />
    },
    {
      time: "11:00 AM",
      title: "Remote Hub",
      desc: "Laptops open. Ambient deep focus music plays. The space transforms into an inspiring sanctuary for Kavuri Hills' founders and creators.",
      icon: <Laptop size={24} />
    },
    {
      time: "02:00 PM",
      title: "Social Convergence",
      desc: "Friends meet for lunch. The energy shifts from quiet focus to vibrant collaboration. Laughter echoes over tropical iced teas.",
      icon: <Users size={24} />
    },
    {
      time: "05:00 PM",
      title: "Creative Workshops",
      desc: "Tables are cleared. Local artists set up ceramics and painting workshops. The cafe becomes a hands-on learning environment.",
      icon: <Palette size={24} />
    },
    {
      time: "08:00 PM",
      title: "Community Nights",
      desc: "Lights dim. The barista transitions to pouring zero-proof cocktails and hosting open-mic poetry. Yuva becomes the nightlife alternative.",
      icon: <Sparkles size={24} />
    }
  ];

  return (
    <div className="h-screen w-screen bg-[var(--bg-primary)] text-[var(--text-primary)] flex flex-col relative overflow-hidden transition-colors duration-1000">
      
      {/* Visual Depth Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--text-secondary)]/10 to-transparent pointer-events-none" />

      <header className="absolute top-8 left-16 z-20">
        <p className="font-body text-[var(--text-secondary)] text-[10px] tracking-[0.3em] uppercase mb-2">Workshop Module 04</p>
        <h2 className="font-heading text-2xl font-black uppercase tracking-widest">The Yuva Experience</h2>
      </header>

      {/* Interactive Timeline */}
      <div className="flex-1 p-8 pt-32 relative z-10 flex flex-col items-center justify-center max-w-5xl mx-auto w-full">
        
        {/* Timeline Visualization */}
        <div className="flex w-full justify-between items-end mb-16 relative">
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 h-[1px] bg-[var(--text-secondary)]/20 z-0" />
          
          {steps.map((step, idx) => (
            <button 
              key={idx}
              onClick={() => setActiveStep(idx)}
              className={`relative z-10 flex flex-col items-center gap-4 transition-all duration-500 ${activeStep === idx ? 'scale-110' : 'opacity-40 hover:opacity-100'}`}
            >
              <div className={`p-4 rounded-full border ${activeStep === idx ? 'bg-[var(--accent)] text-[var(--bg-primary)] border-[var(--accent)] shadow-[0_0_20px_rgba(var(--accent-rgb),0.4)]' : 'bg-[var(--bg-secondary)] border-[var(--text-secondary)]/30 text-[var(--text-secondary)]'}`}>
                {step.icon}
              </div>
              <span className={`font-body text-[10px] uppercase tracking-widest ${activeStep === idx ? 'text-[var(--text-primary)] font-bold' : 'text-[var(--text-secondary)]'}`}>
                {step.time}
              </span>
            </button>
          ))}
        </div>

        {/* Story Display */}
        <div className="text-center max-w-2xl min-h-[200px] animate-in slide-in-from-bottom-4 duration-500 fade-in" key={activeStep}>
           <h3 className="font-heading text-4xl mb-4 text-[var(--accent)]">{steps[activeStep].title}</h3>
           <p className="font-body text-xl text-[var(--text-secondary)] leading-relaxed">
             {steps[activeStep].desc}
           </p>
        </div>

      </div>

      {/* Confirmation Console */}
      <div className="fixed bottom-16 left-1/2 -translate-x-1/2 z-50">
        <button 
          onClick={() => router.push('/vision')}
          className="bg-white text-black px-12 py-4 rounded-full font-body text-xs uppercase tracking-widest font-bold flex items-center gap-4 hover:scale-105 transition-transform shadow-2xl"
        >
          Define Future Vision <MoveRight size={16} />
        </button>
      </div>

    </div>
  );
}
