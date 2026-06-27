"use client";
import { useDecision } from "@/context/DecisionContext";
import { Check, Smartphone, Box, Briefcase } from "lucide-react";
import { useRouter } from "next/navigation";

export default function EcosystemPage() {
  const { boardroomMode } = useDecision();
  const router = useRouter();

  return (
    <div className="h-screen w-screen bg-[var(--bg-primary)] text-[var(--text-primary)] flex flex-col relative overflow-hidden animate-in fade-in duration-700">
      
      <div className="absolute inset-0 bg-gradient-to-tr from-[var(--bg-secondary)] to-[var(--bg-primary)] pointer-events-none opacity-50" />

      <header className="absolute top-8 left-16 z-20">
        <p className="font-body text-[var(--text-secondary)] text-[10px] tracking-[0.3em] uppercase mb-2">Arena 07</p>
        <h2 className="font-heading text-2xl font-black uppercase tracking-widest">Future Ecosystem</h2>
      </header>

      <div className="flex-1 flex items-center justify-center p-16 relative z-10">
         <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full max-w-6xl animate-in zoom-in-95 duration-700">
            
            <div className="flex flex-col gap-6">
              <div className="h-64 rounded-[2rem] bg-[var(--bg-secondary)] border border-[var(--text-secondary)]/10 flex items-center justify-center p-8 shadow-2xl">
                 <Smartphone size={64} className="text-[var(--text-primary)]" strokeWidth={1} />
              </div>
              <div>
                <h3 className="font-heading text-3xl font-bold mb-2">Digital Loyalty Hub</h3>
                <p className="font-body text-sm font-light text-[var(--text-secondary)] leading-relaxed">
                  A seamless progressive web app for frictionless ordering, skipping the queue, and tracking loyalty points without downloading another native app.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <div className="h-64 rounded-[2rem] bg-[var(--bg-secondary)] border border-[var(--text-secondary)]/10 flex items-center justify-center p-8 shadow-2xl">
                 <Box size={64} className="text-[var(--text-primary)]" strokeWidth={1} />
              </div>
              <div>
                <h3 className="font-heading text-3xl font-bold mb-2">Retail Packaging line</h3>
                <p className="font-body text-sm font-light text-[var(--text-secondary)] leading-relaxed">
                  Premium roasted beans, branded tumblers, and lifestyle merchandise ready for D2C scaling beyond the physical Kavuri Hills location.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <div className="h-64 rounded-[2rem] bg-[var(--bg-secondary)] border border-[var(--text-secondary)]/10 flex items-center justify-center p-8 shadow-2xl">
                 <Briefcase size={64} className="text-[var(--text-primary)]" strokeWidth={1} />
              </div>
              <div>
                <h3 className="font-heading text-3xl font-bold mb-2">B2B Coffee Catering</h3>
                <p className="font-body text-sm font-light text-[var(--text-secondary)] leading-relaxed">
                  Corporate packages for local tech parks. Supplying premium Yuva roasts and branded equipment to elevate office pantries.
                </p>
              </div>
            </div>

         </div>
      </div>

      <div className={`absolute bottom-8 right-16 z-20 transition-transform duration-500 ${boardroomMode ? 'translate-y-[200%]' : 'translate-y-0'}`}>
        <button 
          onClick={() => router.push("/reveal")}
          className="bg-[var(--text-primary)] text-[var(--bg-primary)] px-12 py-4 rounded-full font-body text-xs uppercase tracking-widest font-bold flex items-center gap-2 hover:scale-105 transition-transform shadow-2xl"
        >
          <Check size={16} /> Final Reveal Sequence
        </button>
      </div>

      {boardroomMode && (
        <button onClick={() => router.push("/reveal")} className="absolute inset-0 z-0 cursor-pointer" aria-label="Advance Presentation" />
      )}
    </div>
  );
}
