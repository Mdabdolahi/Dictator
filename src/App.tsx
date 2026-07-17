import React, { useState } from "react";
import { motion } from "motion/react";
import { Crown, Swords, Shield, Twitter, Send, Compass, ArrowRight, ShieldCheck } from "lucide-react";
import Hero from "./components/Hero";
import Decree from "./components/Decree";
import About from "./components/About";
import RegimeChannels from "./components/RegimeChannels";
import Propaganda from "./components/Propaganda";
import EnlistModal from "./components/EnlistModal";

const CONTRACT_ADDRESS = "D1Ct4toRSoVeReIgNTeNdaRCoYn1111111111111";

export default function App() {
  const [isEnlistOpen, setIsEnlistOpen] = useState(false);

  // Generate 25 custom CSS-driven particle records for the floating gold dust effect
  const dustParticles = Array.from({ length: 25 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    duration: `${12 + Math.random() * 18}s`,
    delay: `${Math.random() * -20}s`,
    size: `${1 + Math.random() * 3}px`
  }));

  const handleOpenEnlist = () => setIsEnlistOpen(true);
  const handleCloseEnlist = () => setIsEnlistOpen(false);

  return (
    <div className="relative min-h-screen bg-[#030303] text-gold-100 font-sans selection:bg-gold-500/30 selection:text-gold-100">
      
      {/* 1. Global Floating Gold Dust Particles */}
      <div className="fixed inset-0 pointer-events-none z-20 overflow-hidden">
        {dustParticles.map((particle) => (
          <div
            key={particle.id}
            className="absolute bg-gradient-to-t from-gold-400 to-gold-200 rounded-full animate-dust opacity-0"
            style={{
              left: particle.left,
              width: particle.size,
              height: particle.size,
              "--duration": particle.duration,
              "--delay": particle.delay,
              filter: "blur(0.5px)"
            } as React.CSSProperties}
          />
        ))}
      </div>

      {/* 2. Premium Navbar Header */}
      <header className="fixed top-0 inset-x-0 bg-black/80 backdrop-blur-md border-b border-gold-500/10 z-40 px-4 md:px-8 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a href="#hero" className="flex items-center gap-2 group">
            <Crown className="w-5 h-5 text-gold-400 group-hover:rotate-12 transition-transform duration-300" />
            <span className="font-display font-extrabold text-sm sm:text-lg tracking-widest text-gold-100 group-hover:text-gold-300 transition-colors">
              $DICTATOR
            </span>
          </a>

          {/* Nav scroll links */}
          <nav className="hidden md:flex items-center gap-6 text-xs font-mono uppercase tracking-widest text-gold-400">
            <a href="#decree" className="hover:text-gold-200 transition-colors">Decree</a>
            <a href="#about" className="hover:text-gold-200 transition-colors">About</a>
            <a href="#regime" className="hover:text-gold-200 transition-colors">Regime</a>
            <a href="#propaganda" className="hover:text-gold-200 transition-colors">Propaganda</a>
          </nav>

          {/* Header Action */}
          <button
            onClick={handleOpenEnlist}
            className="px-4 py-2 bg-gradient-to-r from-gold-600 to-gold-400 hover:from-gold-500 hover:to-gold-300 text-black font-display font-bold text-xs tracking-wider uppercase rounded transition-all duration-300 shadow-[0_0_10px_rgba(193,129,45,0.2)]"
            id="nav-enlist-btn"
          >
            Enlist
          </button>
        </div>
      </header>

      {/* 3. Hero Section */}
      <Hero onEnlistClick={handleOpenEnlist} contractAddress={CONTRACT_ADDRESS} />

      {/* 4. Decree Section */}
      <Decree />

      {/* 5. About Section */}
      <About />

      {/* 7. The Regime Socials */}
      <RegimeChannels />

      {/* 8. Propaganda Department */}
      <Propaganda />

      {/* 10. Section 8: Final Call */}
      <section id="final-call" className="relative py-32 px-4 bg-[#030303] overflow-hidden text-center">
        {/* Deep Red Radial Glow Behind call */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-red-900/10 rounded-full blur-[120px] pointer-events-none z-0" />
        
        <div className="max-w-3xl mx-auto relative z-10 space-y-8">
          <div className="inline-flex items-center gap-1 text-xs font-mono uppercase text-gold-500 tracking-widest">
            <Shield className="w-3.5 h-3.5 animate-spin-slow" /> Imperial Recruitment Active
          </div>
          
          <h2 className="text-4xl sm:text-6xl font-display font-black tracking-widest text-gold-100 uppercase">
            THE REGIME IS <br />
            <span className="text-red-500 text-shadow-red">RECRUITING</span>
          </h2>
          
          <p className="text-xs sm:text-sm font-sans text-gold-100/50 leading-relaxed font-light max-w-md mx-auto">
            The timeline will be conquered under a single throne. Surrender your allegiance, secure your commission, and wear the official medal of the legion.
          </p>

          <button
            onClick={handleOpenEnlist}
            className="px-10 py-5 bg-gradient-to-r from-gold-600 to-gold-400 hover:from-gold-500 hover:to-gold-300 text-black font-display font-extrabold text-sm tracking-widest uppercase rounded shadow-[0_0_25px_rgba(193,129,45,0.4)] hover:shadow-[0_0_35px_rgba(193,129,45,0.6)] transition-all duration-300 transform hover:-translate-y-0.5"
            id="enlist-final-btn"
          >
            ENLIST NOW
          </button>
        </div>
      </section>

      {/* 11. Section 9: Footer */}
      <footer className="relative py-12 px-4 bg-black border-t border-gold-500/10 text-center text-xs font-mono tracking-wider">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand/Crown logo */}
          <div className="flex items-center gap-2">
            <Crown className="w-4 h-4 text-gold-500" />
            <span className="font-display font-bold text-gold-100 tracking-widest uppercase text-[11px]">
              $DICTATOR OFFICIAL
            </span>
          </div>

          {/* Dynamic copyright and authority citation */}
          <div className="text-gold-600 text-[10px] space-y-1">
            <p>© {new Date().getFullYear()} $DICTATOR. ALL TIMELINES SECURED.</p>
            <p className="flex items-center justify-center gap-1 text-[9px] text-gold-700 uppercase">
              <ShieldCheck className="w-3 h-3 text-gold-600" /> STRICTLY FICTIONAL INTERNET ENTERPRISE. NO POLITICAL CORRELATIONS.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4 text-gold-400 text-xs">
            <a
              href="https://x.com/Dictatorsol"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold-200 transition-colors p-2 bg-gold-950/20 border border-gold-500/10 hover:border-gold-500/40 rounded-full"
              id="footer-link-x"
            >
              <Twitter className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://t.me/Dictatorsol"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold-200 transition-colors p-2 bg-gold-950/20 border border-gold-500/10 hover:border-gold-500/40 rounded-full"
              id="footer-link-telegram"
            >
              <Send className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://dexscreener.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold-200 transition-colors p-2 bg-gold-950/20 border border-gold-500/10 hover:border-gold-500/40 rounded-full"
              id="footer-link-dex"
            >
              <Compass className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </footer>

      {/* Interactive Enlistment Overlay modal */}
      <EnlistModal isOpen={isEnlistOpen} onClose={handleCloseEnlist} />

    </div>
  );
}
