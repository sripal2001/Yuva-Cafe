import type { Metadata } from "next";
import { Inter, Playfair_Display, Lora, Oswald } from "next/font/google";
import "./globals.css";
import { DecisionProvider } from "@/context/DecisionContext";
import ThemeEngine from "@/components/ThemeEngine";
import OverlayUI from "@/components/OverlayUI";
import ControlDock from "@/components/ControlDock";
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });
const lora = Lora({ subsets: ["latin"], variable: "--font-lora" });
const oswald = Oswald({ subsets: ["latin"], variable: "--font-oswald" });

export const metadata: Metadata = {
  title: "Yuva Cafe | Boardroom Engine V2",
  description: "Interactive brand configuration for Kavuri Hills",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${inter.variable} ${playfair.variable} ${lora.variable} ${oswald.variable}`}>
      <body className={inter.className}>
        <DecisionProvider>
          <ThemeEngine>
            <OverlayUI />
            <ControlDock />
            {children}
          </ThemeEngine>
        </DecisionProvider>
      </body>
    </html>
  );
}
