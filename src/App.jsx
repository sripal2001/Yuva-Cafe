import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, Check, Sparkles, ExternalLink } from 'lucide-react';

const PALETTES = [
  { name: 'Deep Jungle', bg: '#064E3B', text: '#FEF3C7', card: '#065F46', border: '#047857', accent: '#FF6B6B' },
  { name: 'Sunlit Canopy', bg: '#F7FEE7', text: '#3F6212', card: '#ECFCCB', border: '#D9F99D', accent: '#EAB308' },
  { name: 'Caribbean Sand', bg: '#FEF3C7', text: '#0C4A6E', card: '#FDE68A', border: '#FCD34D', accent: '#0EA5E9' },
  { name: 'Midnight Tropics', bg: '#022C22', text: '#A7F3D0', card: '#064E3B', border: '#047857', accent: '#34D399' },
  { name: 'Tropical Sunset', bg: '#FFF1F2', text: '#881337', card: '#FFE4E6', border: '#FECDD3', accent: '#F43F5E' },
  { name: 'Monsoon Rain', bg: '#F0FDF4', text: '#115E59', card: '#D1FAE5', border: '#A7F3D0', accent: '#0D9488' },
  { name: 'Coral Reef', bg: '#FFF7ED', text: '#9A3412', card: '#FFEDD5', border: '#FED7AA', accent: '#F97316' },
  { name: 'Bali Resort', bg: '#FAFAFA', text: '#451A03', card: '#F5F5F5', border: '#E5E5E5', accent: '#65A30D' },
  { name: 'Hawaiian Vintage', bg: '#FEFCE8', text: '#991B1B', card: '#FEF9C3', border: '#FEF08A', accent: '#EF4444' },
  { name: 'Flamingo Pink', bg: '#FDF2F8', text: '#831843', card: '#FCE7F3', border: '#FBCFE8', accent: '#DB2777' },
  { name: 'Papaya & Mango', bg: '#FFF7ED', text: '#7C2D12', card: '#FFEDD5', border: '#FED7AA', accent: '#EA580C' },
  { name: 'Rainforest Mist', bg: '#F8FAFC', text: '#0F172A', card: '#F1F5F9', border: '#E2E8F0', accent: '#10B981' },
  { name: 'Tiki Bar', bg: '#451A03', text: '#FEF3C7', card: '#78350F', border: '#92400E', accent: '#F59E0B' },
  { name: 'Amazonian', bg: '#27272A', text: '#F4F4F5', card: '#3F3F46', border: '#52525B', accent: '#3B82F6' },
  { name: 'Island Oasis', bg: '#F0F9FF', text: '#0369A1', card: '#E0F2FE', border: '#BAE6FD', accent: '#0284C7' },
  { name: 'Botanical Garden', bg: '#F1F8F5', text: '#14532D', card: '#E1EFE8', border: '#C7DED1', accent: '#16A34A' },
  { name: 'Tropical Citrus', bg: '#FEFCE8', text: '#A16207', card: '#FEF9C3', border: '#FDE047', accent: '#84CC16' },
  { name: 'Neon Tropics', bg: '#0F172A', text: '#E2E8F0', card: '#1E293B', border: '#334155', accent: '#2DD4BF' },
  { name: 'Macaw Feathers', bg: '#EFF6FF', text: '#1E3A8A', card: '#DBEAFE', border: '#BFDBFE', accent: '#EAB308' },
  { name: 'Pastel Tropics', bg: '#F5FFFA', text: '#0F766E', card: '#E6FFFA', border: '#B2F5EA', accent: '#14B8A6' },
];

const FONTS = [
  { name: 'Playfair Display', family: "'Playfair Display', serif", desc: 'Fine Dining Serif' },
  { name: 'Bebas Neue', family: "'Bebas Neue', cursive", desc: 'Bold Industrial' },
  { name: 'Pacifico', family: "'Pacifico', cursive", desc: 'Playful Coastal' },
  { name: 'Merriweather', family: "'Merriweather', serif", desc: 'Classic Bakery' },
  { name: 'Abril Fatface', family: "'Abril Fatface', serif", desc: 'Chunky Editorial' },
  { name: 'Caveat', family: "'Caveat', cursive", desc: 'Handwritten Artisan' },
  { name: 'Cinzel', family: "'Cinzel', serif", desc: 'High-End Luxury' },
  { name: 'Amatic SC', family: "'Amatic SC', cursive", desc: 'Rustic & Hand-drawn' },
  { name: 'Lora', family: "'Lora', serif", desc: 'Contemporary Tea' },
  { name: 'Fraunces', family: "'Fraunces', serif", desc: 'Trendy Old Style' },
  { name: 'Cormorant', family: "'Cormorant Garamond', serif", desc: 'Refined Espresso' },
  { name: 'Righteous', family: "'Righteous', cursive", desc: 'Art Deco Diner' },
  { name: 'Lobster', family: "'Lobster', cursive", desc: 'Vintage Signage' },
  { name: 'Permanent Marker', family: "'Permanent Marker', cursive", desc: 'Edgy Grunge' },
  { name: 'Bodoni Moda', family: "'Bodoni Moda', serif", desc: 'Fashion Roastery' },
  { name: 'Prata', family: "'Prata', serif", desc: 'Elegant Serif' },
  { name: 'Yeseva One', family: "'Yeseva One', cursive", desc: 'Feminine Pastry' },
  { name: 'Josefin Sans', family: "'Josefin Sans', sans-serif", desc: 'Vintage Geometric' },
  { name: 'Syne', family: "'Syne', sans-serif", desc: 'Avant-Garde' },
  { name: 'Marcellus', family: "'Marcellus', serif", desc: 'Roman Luxury' },
  { name: 'Oswald', family: "'Oswald', sans-serif", desc: 'Condensed Strong' },
  { name: 'Gilda Display', family: "'Gilda Display', serif", desc: 'Refined Dining' },
  { name: 'Rufina', family: "'Rufina', serif", desc: 'Delicate Serif' },
  { name: 'Chivo', family: "'Chivo', sans-serif", desc: 'Modern Grotesque' },
  { name: 'Zilla Slab', family: "'Zilla Slab', serif", desc: 'Industrial Roastery' },
  { name: 'Baskervville', family: "'Baskervville', serif", desc: 'Traditional Bakery' },
  { name: 'Archivo Black', family: "'Archivo Black', sans-serif", desc: 'Heavy Impact' },
  { name: 'Italiana', family: "'Italiana', serif", desc: 'European Elegance' },
  { name: 'Viaoda Libre', family: "'Viaoda Libre', cursive", desc: 'Art Deco Charm' },
  { name: 'DM Serif', family: "'DM Serif Display', serif", desc: 'Premium Editorial' }
];

const DEFAULT_PALETTE = { name: 'Neutral', bg: '#FAFAFA', text: '#1E293B', card: '#FFFFFF', border: '#E2E8F0', accent: '#3B82F6' };

const QUESTIONS = [
  { id: 'q1', type: 'text', title: 'What is the exact Brand Name?' },
  { id: 'q2', type: 'text', title: 'Do you have a Tagline or Slogan?', desc: 'If so, what is it? e.g., "Eat, explore, and evolve"' },
  { id: 'q3', type: 'tiles', title: 'Where are you located, and what is your scale?', options: ['Local Single Shop', 'Multi-Location', 'National Franchise', 'Online Only', 'Food Truck', 'Pop-up Stand'] },
  { id: 'q4', type: 'textarea', title: 'What is the core concept or mission of the brand?', desc: 'What makes you different? e.g., "Built around the idea of culinary exploration."' },
  { id: 'q5', type: 'tiles', title: 'What is the primary product or service you are offering?', options: ['Specialty Coffee', 'Baked Goods & Pastries', 'Full Meals / Dining', 'Quick Grab & Go', 'Vegan / Health Food', 'Cocktails & Bar'] },
  { id: 'q6', type: 'slider', title: 'Where do you position yourself in the market?', labels: ['Fast Casual', 'Fine Dining'] },
  { id: 'q7', type: 'text', title: 'Who are your top 3 main competitors?' },
  { id: 'q8', type: 'text', title: 'How do you want to be perceived compared to those competitors?', desc: 'What are they doing wrong that you will do better?' },
  { id: 'q9', type: 'tiles', title: 'Describe your primary target audience.', options: ['Gen Z & Students', 'Young Professionals', 'Families with Kids', 'Wealthy / Luxury Seekers', 'Tourists', 'Health Enthusiasts'] },
  { id: 'q10', type: 'tiles', title: 'If you had to pick a "secondary" audience, who would it be?', options: ['Gen Z & Students', 'Young Professionals', 'Families with Kids', 'Wealthy / Luxury Seekers', 'Tourists', 'None'] },
  { id: 'q11', type: 'text', title: 'Fill in the blanks: "Our brand is [Adjective], but not [Adjective]."', desc: 'e.g., We are premium, but not snobby.' },
  { id: 'q12', type: 'text', title: 'If your brand were a car or celebrity, who would it be?', desc: 'e.g., We are the Tesla of coffee—sleek and tech-forward.' },
  { id: 'q13', type: 'palettes', title: 'Color Palette & Atmosphere', desc: 'Click a palette to instantly transform the entire vibe of the app.' },
  { id: 'q14', type: 'text', title: 'Are there any colors, fonts, or styles you absolutely HATE?' },
  { id: 'q15', type: 'fonts', title: 'Typography & Visual Vibe', desc: 'Which of these typography styles aligns with your brand?' },
];

export default function App() {
  const [currentStep, setCurrentStep] = useState(-1);
  const [formData, setFormData] = useState({});
  const [direction, setDirection] = useState(1);
  
  const [isMoodBoardMode, setIsMoodBoardMode] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [moodBoardLink, setMoodBoardLink] = useState('');

  // Check URL parameters for Mood Board Mode
  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    if (searchParams.get('moodboard') === 'true') {
      const loadedData = {};
      for (const [key, value] of searchParams.entries()) {
        if (key !== 'moodboard') {
          loadedData[key] = decodeURIComponent(value);
        }
      }
      setFormData(loadedData);
      setIsMoodBoardMode(true);
    }
  }, []);

  // Dynamic CSS Applier
  useEffect(() => {
    const root = document.documentElement;
    const selectedPaletteName = formData['q13'];
    const palette = PALETTES.find(p => p.name === selectedPaletteName) || DEFAULT_PALETTE; 
    
    root.style.setProperty('--bg-color', palette.bg);
    root.style.setProperty('--text-color', palette.text);
    root.style.setProperty('--card-bg', palette.card);
    root.style.setProperty('--card-border', palette.border);
    root.style.setProperty('--primary-color', palette.accent);
  }, [formData]);

  const handleNext = () => {
    if (currentStep < QUESTIONS.length - 1) {
      setDirection(1);
      setCurrentStep(prev => prev + 1);
    } else if (currentStep === QUESTIONS.length - 1) {
      handleSubmit();
    }
  };

  const handlePrev = () => {
    if (currentStep > -1) {
      setDirection(-1);
      setCurrentStep(prev => prev - 1);
    }
  };

  const updateForm = (value) => {
    const questionId = QUESTIONS[currentStep].id;
    setFormData(prev => ({ ...prev, [questionId]: value }));
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleNext();
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setDirection(1);
    
    // Generate Mood Board URL
    const searchParams = new URLSearchParams();
    searchParams.set('moodboard', 'true');
    Object.keys(formData).forEach(key => {
      if (formData[key]) searchParams.set(key, encodeURIComponent(formData[key]));
    });
    
    const url = `${window.location.origin}${window.location.pathname}?${searchParams.toString()}`;
    setMoodBoardLink(url);

    // Formspree payload
    const payload = { ...formData, MoodBoardLink: url };

    try {
      const EMAIL = "ishaanaa.info@gmail.com";
      await fetch(`https://formsubmit.co/ajax/${EMAIL}`, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(payload)
      });
    } catch (error) {
      console.error("Submission failed", error);
    }

    setCurrentStep(QUESTIONS.length);
    setIsSubmitting(false);
  };

  // Animations
  const variants = {
    enter: (direction) => ({ y: direction > 0 ? 80 : -80, opacity: 0, scale: 0.95 }),
    center: { y: 0, opacity: 1, scale: 1, transition: { type: "spring", stiffness: 300, damping: 24, mass: 0.8 } },
    exit: (direction) => ({ y: direction < 0 ? 80 : -80, opacity: 0, scale: 0.95, transition: { duration: 0.3 } })
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.05 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
  };

  const renderWelcome = () => (
    <motion.div 
      className="step-content"
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -30, scale: 0.9 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
    >
      <h1 className="question-title">Welcome to the Design Studio.</h1>
      <p className="question-description" style={{fontSize: '1.6rem', marginTop: '1.5rem'}}>Let's uncover the soul of your brand. This will take about 3 minutes. Don't overthink it, just go with your gut.</p>
      <button className="btn btn-primary" style={{marginTop: '2.5rem', padding: '1.5rem 3rem', fontSize: '1.5rem'}} onClick={handleNext}>
        Let's Begin <ChevronRight style={{display: 'inline', marginBottom: '-5px'}} size={28}/>
      </button>
    </motion.div>
  );

  const renderCompletion = () => (
    <motion.div 
      className="step-content"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      style={{textAlign: 'center'}}
    >
      <motion.div 
        initial={{ rotate: -180, scale: 0 }}
        animate={{ rotate: 0, scale: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
        style={{width: 100, height: 100, borderRadius: '50%', background: 'var(--primary-color)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 2.5rem auto'}}
      >
        <Check color="#fff" size={50} strokeWidth={3} />
      </motion.div>
      <h1 className="question-title">Brief Complete!</h1>
      <p className="question-description" style={{fontSize: '1.5rem'}}>Thank you for sharing your vision. We have sent the details to our design team.</p>
      
      {moodBoardLink && (
        <a href={moodBoardLink} target="_blank" rel="noreferrer" style={{textDecoration: 'none'}}>
          <button className="btn btn-secondary" style={{margin: '2rem auto 0 auto'}}>
            View Your Generated Mood Board <ExternalLink size={20} style={{marginLeft: '8px'}}/>
          </button>
        </a>
      )}
    </motion.div>
  );

  const renderQuestion = () => {
    const q = QUESTIONS[currentStep];
    const value = formData[q.id] || '';

    return (
      <motion.div
        key={currentStep}
        custom={direction}
        variants={variants}
        initial="enter"
        animate="center"
        exit="exit"
        className="step-content"
      >
        <div className="step-number">Step {currentStep + 1} of {QUESTIONS.length}</div>
        <h2 className="question-title">{q.title}</h2>
        {q.desc && <p className="question-description">{q.desc}</p>}

        {q.type === 'text' && (
          <input type="text" className="text-input" autoFocus placeholder="Type your answer here..." value={value} onChange={(e) => updateForm(e.target.value)} onKeyDown={handleKeyDown}/>
        )}

        {q.type === 'textarea' && (
          <textarea className="text-area" autoFocus placeholder="Type your answer here..." value={value} onChange={(e) => updateForm(e.target.value)} />
        )}

        {q.type === 'slider' && (
          <div className="slider-container">
            <input type="range" min="1" max="10" className="slider" value={value || 5} onChange={(e) => updateForm(e.target.value)} />
            <div className="slider-labels">
              <span>{q.labels[0]}</span>
              <span>{q.labels[1]}</span>
            </div>
          </div>
        )}

        {q.type === 'tiles' && (
          <motion.div className="grid-fluid" variants={containerVariants} initial="hidden" animate="show">
            {q.options.map(opt => (
              <motion.div variants={itemVariants} key={opt} className={`tile-card ${value === opt ? 'selected' : ''}`} onClick={() => { updateForm(opt); setTimeout(handleNext, 400); }}>
                <h3 style={{fontSize: '1.25rem'}}>{opt}</h3>
              </motion.div>
            ))}
          </motion.div>
        )}

        {q.type === 'palettes' && (
          <motion.div className="grid-fluid-sm" variants={containerVariants} initial="hidden" animate="show">
            {PALETTES.map(palette => (
              <motion.div variants={itemVariants} key={palette.name} className={`tile-card ${value === palette.name ? 'selected' : ''}`} style={{padding: '1.5rem 1rem'}} onClick={() => updateForm(palette.name)}>
                <div style={{ display: 'flex', width: '100%', height: '40px', borderRadius: '8px', overflow: 'hidden', border: `1px solid ${palette.border}`, marginBottom: '1rem' }}>
                  <div style={{flex: 2, background: palette.bg}}></div>
                  <div style={{flex: 1, background: palette.card}}></div>
                  <div style={{flex: 1, background: palette.accent}}></div>
                </div>
                <h3 style={{fontSize: '1.1rem'}}>{palette.name}</h3>
              </motion.div>
            ))}
          </motion.div>
        )}

        {q.type === 'fonts' && (
          <motion.div className="grid-fluid-md" variants={containerVariants} initial="hidden" animate="show">
            {FONTS.map(font => (
              <motion.div variants={itemVariants} key={font.name} className={`font-card ${value === font.name ? 'selected' : ''}`} onClick={() => updateForm(font.name)}>
                <div className="font-preview" style={{fontFamily: font.family}}>
                  {formData['q1'] || 'Brand Name'}
                </div>
                <div style={{fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.25rem'}}>{font.name}</div>
                <div style={{opacity: 0.7, fontSize: '0.9rem'}}>{font.desc}</div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Navigation Buttons */}
        <div className="nav-buttons">
          <button className="btn btn-primary" onClick={handleNext} disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : (
              <>OK <Check size={22} style={{display:'inline', marginLeft: '8px', marginBottom:'-4px'}}/></>
            )}
          </button>
          <div className="hide-on-mobile" style={{display:'flex', alignItems:'center', opacity:0.5, fontSize:'1rem', marginLeft:'15px', fontWeight: 600}}>
            Press Enter ↵
          </div>
        </div>
      </motion.div>
    );
  };

  const renderMoodBoard = () => {
    const palette = PALETTES.find(p => p.name === formData['q13']) || DEFAULT_PALETTE;
    const font = FONTS.find(f => f.name === formData['q15']) || FONTS[19];
    
    const bentoVariants = {
      hidden: { opacity: 0, y: 40, scale: 0.95 },
      show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 200, damping: 20 } }
    };

    const containerBento = {
      hidden: { opacity: 0 },
      show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
    };

    return (
      <div className="bento-moodboard" style={{background: palette.bg, color: palette.text}}>
        <div className="bento-container">
          
          <motion.div className="bento-header" initial={{opacity:0, y:-20}} animate={{opacity:1, y:0}} transition={{duration:0.8, ease:"easeOut"}}>
            <Sparkles size={24} color={palette.accent} style={{marginBottom: '1rem'}} />
            <h1 style={{fontFamily: font.family, color: palette.text}}>{formData['q1'] || 'Brand Name'}</h1>
            <p>Brand Identity & Direction System</p>
          </motion.div>

          <motion.div className="bento-grid" variants={containerBento} initial="hidden" animate="show">
            
            {/* Box 1: Core Tagline (Spans 2 cols) */}
            <motion.div className="bento-box span-2" variants={bentoVariants} style={{background: palette.card, border: `1px solid ${palette.border}`}}>
              <div className="bento-label">Tagline</div>
              <h2 className="bento-huge-text" style={{fontFamily: font.family, color: palette.accent}}>
                "{formData['q2'] || 'Elevating the everyday experience.'}"
              </h2>
            </motion.div>

            {/* Box 2: Atmosphere / Colors */}
            <motion.div className="bento-box" variants={bentoVariants} style={{background: palette.card, border: `1px solid ${palette.border}`}}>
              <div className="bento-label">Atmosphere: {palette.name}</div>
              <div className="bento-color-stack">
                <div className="color-bar" style={{background: palette.bg}}><span style={{color: palette.text}}>Base</span></div>
                <div className="color-bar" style={{background: palette.card}}><span style={{color: palette.text}}>Surface</span></div>
                <div className="color-bar" style={{background: palette.accent}}><span style={{color: '#fff'}}>Accent</span></div>
              </div>
            </motion.div>

            {/* Box 3: Typography Specimen */}
            <motion.div className="bento-box type-bento" variants={bentoVariants} style={{background: palette.accent, color: '#fff', border: `1px solid ${palette.accent}`}}>
              <div className="bento-label" style={{opacity: 0.8}}>Primary Typography</div>
              <div className="bento-type-display" style={{fontFamily: font.family}}>Aa</div>
              <div className="bento-type-name" style={{fontFamily: 'Inter'}}>{font.name}</div>
              <div className="bento-type-desc" style={{fontFamily: 'Inter', opacity: 0.8}}>{font.desc}</div>
            </motion.div>

            {/* Box 4: Positioning (Spans 2 cols) */}
            <motion.div className="bento-box span-2" variants={bentoVariants} style={{background: palette.card, border: `1px solid ${palette.border}`}}>
               <div className="bento-label">Core Positioning</div>
               <div className="positioning-grid">
                 <div>
                   <h3>Concept</h3>
                   <p>{formData['q4'] || 'A modern approach to traditional spaces.'}</p>
                 </div>
                 <div>
                   <h3>Vibe</h3>
                   <p style={{fontStyle: 'italic'}}>"We are {formData['q11'] || 'premium, but not pretentious'}."</p>
                 </div>
               </div>
            </motion.div>

            {/* Box 5: Target Audience */}
            <motion.div className="bento-box" variants={bentoVariants} style={{background: palette.card, border: `1px solid ${palette.border}`}}>
              <div className="bento-label">Audience & Scale</div>
              <div className="bento-pill-stack">
                <div className="bpill primary" style={{background: palette.text, color: palette.bg}}>{formData['q9'] || 'Primary Audience'}</div>
                {formData['q10'] && formData['q10'] !== 'None' && (
                  <div className="bpill secondary" style={{border: `1px solid ${palette.border}`}}>{formData['q10']}</div>
                )}
                <div className="bpill secondary" style={{border: `1px solid ${palette.border}`}}>{formData['q3'] || 'Local Scale'}</div>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>
    );
  };

  if (isMoodBoardMode) {
    return (
      <div style={{minHeight: '100vh'}}>
        <AnimatePresence>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
            {renderMoodBoard()}
          </motion.div>
        </AnimatePresence>
      </div>
    );
  }

  const progressPercentage = currentStep >= 0 ? ((currentStep) / QUESTIONS.length) * 100 : 0;

  return (
    <div className="app-container">
      {currentStep > -1 && currentStep < QUESTIONS.length && (
        <header className="header">
          <div style={{display: 'flex', gap: '15px'}}>
            <button onClick={handlePrev} className="btn btn-secondary" style={{padding: '0.75rem', borderRadius: '50%', display: 'flex'}}>
              <ChevronLeft size={28} />
            </button>
          </div>
          <div className="progress-container">
            <div className="progress-bar" style={{ width: `${progressPercentage}%` }}></div>
          </div>
        </header>
      )}

      <main className="step-container">
        <AnimatePresence mode="wait" custom={direction}>
          {currentStep === -1 && renderWelcome()}
          {currentStep >= 0 && currentStep < QUESTIONS.length && renderQuestion()}
          {currentStep === QUESTIONS.length && renderCompletion()}
        </AnimatePresence>
      </main>
    </div>
  );
}
