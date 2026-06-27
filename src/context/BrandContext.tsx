"use client";
import { createContext, useContext, useState, ReactNode, useEffect } from "react";

export type Theme = 'luxury' | 'sunset' | 'urban' | 'island';

type BrandContextType = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const BrandContext = createContext<BrandContextType | undefined>(undefined);

export function BrandProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>('luxury');

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
  };

  useEffect(() => {
    document.body.className = document.body.className.replace(/theme-\w+(-\w+)?/g, '').trim();
    if (theme === 'sunset') {
      document.body.classList.add('theme-sunset-tropics');
    } else if (theme === 'urban') {
      document.body.classList.add('theme-urban-tropical');
    } else if (theme === 'island') {
      document.body.classList.add('theme-island-escape');
    }
  }, [theme]);

  return (
    <BrandContext.Provider value={{ theme, setTheme }}>
      {children}
    </BrandContext.Provider>
  );
}

export function useBrand() {
  const context = useContext(BrandContext);
  if (context === undefined) {
    throw new Error("useBrand must be used within a BrandProvider");
  }
  return context;
}
