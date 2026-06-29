"use client";
import { useDecision } from "@/context/DecisionContext";
import { Check, ChevronRight } from "lucide-react";

const STEPS = [
  { id: 1, title: "Logo Direction", subtitle: "Select the primary mark" },
  { id: 2, title: "Color System", subtitle: "Define the atmosphere" },
  { id: 3, title: "Typography", subtitle: "Set the brand voice" },
  { id: 4, title: "Visual Style", subtitle: "Imagery and layout mood" },
  { id: 5, title: "Packaging Style", subtitle: "Physical touchpoints" },
  { id: 6, title: "Social Media", subtitle: "Digital presence" },
  { id: 7, title: "Website Style", subtitle: "Layout architecture" },
  { id: 8, title: "Future Features", subtitle: "Optional modules" },
  { id: 9, title: "Yuva Blueprint", subtitle: "Final brand system output" },
];

export default function BuilderSidebar() {
  const { currentStep, setCurrentStep } = useDecision();

  return (
    <div className="flex flex-col h-full bg-[var(--bg-secondary)]">
      
      {/* Header */}
      <div className="p-8 border-b border-[var(--text-secondary)]/10 sticky top-0 bg-[var(--bg-secondary)]/90 backdrop-blur z-10">
        <h1 className="font-heading text-xl font-black tracking-tighter uppercase mb-1">YUVA CAFE</h1>
        <p className="font-body text-[10px] tracking-widest uppercase text-[var(--text-secondary)]">Brand Builder V4</p>
      </div>

      {/* Content Area */}
      <div className="flex-1 overflow-y-auto p-8 relative">
        <StepRenderer />
      </div>

      {/* Footer Navigation */}
      <div className="p-8 border-t border-[var(--text-secondary)]/10 bg-[var(--bg-secondary)] sticky bottom-0 z-10 flex justify-between items-center">
        <button 
          onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
          disabled={currentStep === 0}
          className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] font-body text-xs uppercase tracking-widest disabled:opacity-30 transition-colors"
        >
          Back
        </button>
        
        <span className="font-body text-[10px] tracking-widest text-[var(--text-secondary)]">
          {currentStep + 1} / {STEPS.length}
        </span>

        <button 
          onClick={() => setCurrentStep(Math.min(STEPS.length - 1, currentStep + 1))}
          disabled={currentStep === STEPS.length - 1}
          className="bg-[var(--text-primary)] text-[var(--bg-primary)] px-6 py-2 rounded-full font-body text-xs uppercase tracking-widest font-bold flex items-center gap-2 hover:scale-105 transition-transform disabled:opacity-30"
        >
          {currentStep === STEPS.length - 2 ? "Generate" : "Next"} <ChevronRight size={14} />
        </button>
      </div>
    </div>
  );
}

function StepRenderer() {
  const { 
    currentStep, 
    logo, setLogo,
    color, setColor,
    typography, setTypography,
    visualStyle, setVisualStyle,
    packaging, setPackaging,
    social, setSocial,
    websiteStyle, setWebsiteStyle,
    features, toggleFeature
  } = useDecision();

  const stepInfo = STEPS[currentStep];

  const renderOptions = (options: {id: string, label: string, desc: string}[], activeValue: string | null, setter: (val: any) => void) => (
    <div className="flex flex-col gap-4 mt-8">
      {options.map(opt => (
        <button 
          key={opt.id}
          onClick={() => setter(opt.id)}
          className={`text-left p-6 rounded-2xl border transition-all ${
            activeValue === opt.id 
              ? 'bg-[var(--text-primary)] text-[var(--bg-primary)] border-[var(--text-primary)] shadow-lg scale-[1.02]' 
              : 'bg-[var(--bg-primary)] text-[var(--text-primary)] border-[var(--text-secondary)]/20 hover:border-[var(--text-secondary)] hover:scale-[1.01]'
          }`}
        >
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-heading text-lg uppercase tracking-widest">{opt.label}</h3>
            {activeValue === opt.id && <Check size={16} />}
          </div>
          <p className={`font-body text-xs ${activeValue === opt.id ? 'text-[var(--bg-secondary)]' : 'text-[var(--text-secondary)]'}`}>
            {opt.desc}
          </p>
        </button>
      ))}
    </div>
  );

  return (
    <div className="animate-in fade-in slide-in-from-right-4 duration-300">
      <h2 className="font-heading text-3xl font-black uppercase tracking-tight mb-2">{stepInfo.title}</h2>
      <p className="font-body text-sm text-[var(--text-secondary)]">{stepInfo.subtitle}</p>

      {currentStep === 0 && renderOptions([
        {id: 'luxury', label: 'Luxury Tropical', desc: 'Elegant Wordmark, Premium feel'},
        {id: 'modern', label: 'Modern Tropical', desc: 'Clean Contemporary aesthetics'},
        {id: 'community', label: 'Community Tropical', desc: 'Friendly and Social'}
      ], logo, setLogo)}

      {currentStep === 1 && renderOptions([
        {id: 'emerald', label: 'Emerald Tropical', desc: 'Deep jungle greens and rich textures'},
        {id: 'coral', label: 'Coral Sunset', desc: 'Vibrant pinks and warm energy'},
        {id: 'ocean', label: 'Ocean Retreat', desc: 'Calming blues and breezy whites'}
      ], color, setColor)}

      {currentStep === 2 && renderOptions([
        {id: 'serif', label: 'Luxury Serif', desc: 'High-end hospitality feel'},
        {id: 'sans', label: 'Modern Sans', desc: 'Clean, architectural, and minimal'},
        {id: 'editorial', label: 'Editorial Contemporary', desc: 'Magazine-like sophisticated contrast'}
      ], typography, setTypography)}

      {currentStep === 3 && renderOptions([
        {id: 'luxury', label: 'Tropical Luxury', desc: 'High contrast, dramatic shadows, premium staging'},
        {id: 'modern', label: 'Modern Tropical', desc: 'Bright, airy, clean lines, subtle sunlight'},
        {id: 'botanical', label: 'Botanical', desc: 'Lush greenery, natural textures, earthy'}
      ], visualStyle, setVisualStyle)}

      {currentStep === 4 && renderOptions([
        {id: 'minimal', label: 'Minimal Premium', desc: 'Stark white cups, small elegant logos'},
        {id: 'luxury', label: 'Luxury Tropical', desc: 'Rich colors, gold foils, textured paper'},
        {id: 'community', label: 'Community Friendly', desc: 'Playful graphics, vibrant stickers, accessible'}
      ], packaging, setPackaging)}

      {currentStep === 5 && renderOptions([
        {id: 'luxury', label: 'Luxury Brand', desc: 'Curated, moody, highly produced imagery'},
        {id: 'lifestyle', label: 'Lifestyle Brand', desc: 'People-focused, sunny, energetic'},
        {id: 'community', label: 'Community Brand', desc: 'Events, raw authentic moments, approachable'}
      ], social, setSocial)}

      {currentStep === 6 && renderOptions([
        {id: 'hospitality', label: 'Luxury Hospitality', desc: 'Immersive imagery, elegant pacing, classic'},
        {id: 'minimal', label: 'Apple Inspired Minimal', desc: 'Massive white space, stark typography, product focus'},
        {id: 'editorial', label: 'Editorial Magazine', desc: 'Overlapping text, dynamic grids, brutalist edge'}
      ], websiteStyle, setWebsiteStyle)}

      {currentStep === 7 && (
        <div className="flex flex-col gap-4 mt-8">
          {["QR Menu", "Order Management", "Reservations", "Workshops", "Events", "Loyalty Program"].map(feat => {
            const isActive = features.includes(feat);
            return (
              <button 
                key={feat}
                onClick={() => toggleFeature(feat)}
                className={`text-left p-4 rounded-xl border transition-all flex items-center justify-between ${
                  isActive 
                    ? 'bg-[var(--text-primary)] text-[var(--bg-primary)] border-[var(--text-primary)]' 
                    : 'bg-[var(--bg-primary)] text-[var(--text-primary)] border-[var(--text-secondary)]/20 hover:border-[var(--text-secondary)]'
                }`}
              >
                <span className="font-heading text-sm uppercase tracking-widest">{feat}</span>
                <div className={`w-5 h-5 rounded border flex items-center justify-center ${isActive ? 'border-[var(--bg-primary)]' : 'border-[var(--text-secondary)]/30'}`}>
                  {isActive && <Check size={12} />}
                </div>
              </button>
            )
          })}
        </div>
      )}

      {currentStep === 8 && (
        <div className="mt-8 flex flex-col items-center justify-center h-64 text-center">
           <Check size={48} className="text-[var(--accent)] mb-6 opacity-50" />
           <p className="font-body text-sm text-[var(--text-secondary)] leading-relaxed">
             All selections have been recorded.<br />
             The final Brand Blueprint is generating on the main preview window.
           </p>
        </div>
      )}

    </div>
  );
}
