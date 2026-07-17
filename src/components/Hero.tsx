import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Crown, Volume2, VolumeX, ShieldAlert, Swords, ArrowRight } from "lucide-react";
const dictatorHeroImg = "/src/assets/images/dictator_hero_1784318585267.jpg";

interface HeroProps {
  onEnlistClick: () => void;
  contractAddress: string;
}

// Low level synthesizer for a premium ambient dark synth drone
let audioCtx: AudioContext | null = null;
let droneOsc: OscillatorNode | null = null;
let droneOsc2: OscillatorNode | null = null;
let filter: BiquadFilterNode | null = null;
let gainNode: GainNode | null = null;
let lfo: OscillatorNode | null = null;

export default function Hero({ onEnlistClick, contractAddress }: HeroProps) {
  const [isPlayingSound, setIsPlayingSound] = useState(false);
  const [copied, setCopied] = useState(false);

  const toggleSound = () => {
    if (isPlayingSound) {
      stopDrone();
      setIsPlayingSound(false);
    } else {
      startDrone();
      setIsPlayingSound(true);
    }
  };

  const startDrone = () => {
    try {
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioContextClass) return;
      audioCtx = new AudioContextClass();
      
      droneOsc = audioCtx.createOscillator();
      droneOsc2 = audioCtx.createOscillator();
      filter = audioCtx.createBiquadFilter();
      gainNode = audioCtx.createGain();
      
      // Sub oscillator
      droneOsc.type = "sawtooth";
      droneOsc.frequency.setValueAtTime(55, audioCtx.currentTime); // A1 note
      
      // Higher octave sine
      droneOsc2.type = "sine";
      droneOsc2.frequency.setValueAtTime(110, audioCtx.currentTime); // A2 note
      
      // Heavy analog-style filter
      filter.type = "lowpass";
      filter.frequency.setValueAtTime(95, audioCtx.currentTime);
      filter.Q.setValueAtTime(6, audioCtx.currentTime);
      
      gainNode.gain.setValueAtTime(0.001, audioCtx.currentTime);
      gainNode.gain.linearRampToValueAtTime(0.18, audioCtx.currentTime + 2.5);
      
      // Low-frequency filter sweep (LFO)
      lfo = audioCtx.createOscillator();
      const lfoGain = audioCtx.createGain();
      lfo.frequency.setValueAtTime(0.15, audioCtx.currentTime); // ultra slow sweep
      lfoGain.gain.setValueAtTime(25, audioCtx.currentTime);
      
      lfo.connect(lfoGain);
      lfoGain.connect(filter.frequency);
      
      droneOsc.connect(filter);
      droneOsc2.connect(filter);
      filter.connect(gainNode);
      gainNode.connect(audioCtx.destination);
      
      droneOsc.start();
      droneOsc2.start();
      lfo.start();
    } catch (e) {
      console.warn("Audio Context blocked or failed to initialize", e);
    }
  };

  const stopDrone = () => {
    if (gainNode && audioCtx) {
      try {
        gainNode.gain.cancelScheduledValues(audioCtx.currentTime);
        gainNode.gain.setValueAtTime(gainNode.gain.value, audioCtx.currentTime);
        gainNode.gain.linearRampToValueAtTime(0.001, audioCtx.currentTime + 1.2);
        
        const ctxToClose = audioCtx;
        const d1 = droneOsc;
        const d2 = droneOsc2;
        const lf = lfo;
        
        setTimeout(() => {
          try {
            d1?.stop();
            d2?.stop();
            lf?.stop();
            ctxToClose.close();
          } catch (err) {}
        }, 1300);
      } catch (e) {
        console.warn(e);
      }
      audioCtx = null;
      droneOsc = null;
      droneOsc2 = null;
      filter = null;
      gainNode = null;
      lfo = null;
    }
  };

  const copyContract = () => {
    navigator.clipboard.writeText(contractAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Ensure clean up when component unmounts
  useEffect(() => {
    return () => {
      stopDrone();
    };
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden pt-24 px-4 pb-16">
      {/* Red ambient background glow behind the leader */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-800/10 rounded-full blur-[140px] pointer-events-none glow-red red-glow z-0" />
      
      {/* Decorative Gold Circular Emblem Background (behind everything) */}
      <div className="absolute top-[35%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] md:w-[500px] md:h-[500px] border border-gold-500/10 rounded-full flex items-center justify-center pointer-events-none z-0 emblem-ring">
        <div className="w-[90%] h-[90%] border border-gold-400/20 rounded-full border-dashed animate-[spin_120s_infinite_linear]" />
        <div className="absolute w-[80%] h-[80%] border-2 border-double border-gold-300/15 rounded-full" />
      </div>

      {/* Floating Audio transmission controller */}
      <div className="absolute top-28 right-4 md:right-8 z-30">
        <button
          onClick={toggleSound}
          className="flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-black/60 backdrop-blur-md border border-gold-500/30 text-gold-200 text-xs font-mono uppercase tracking-widest hover:border-gold-400 hover:text-gold-100 transition-all duration-300 rounded shadow-lg"
          id="toggle-audio-btn"
        >
          {isPlayingSound ? (
            <>
              <Volume2 className="w-3.5 h-3.5 text-red-500 animate-pulse" />
              <span>Regime Transmission Active</span>
            </>
          ) : (
            <>
              <VolumeX className="w-3.5 h-3.5 text-gold-400" />
              <span>Activate Regime Transmission</span>
            </>
          )}
        </button>
      </div>

      {/* Hero Visual Container */}
      <div className="relative w-full max-w-4xl flex flex-col items-center z-10 text-center">
        {/* Figure Container */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          className="relative w-72 h-44 sm:w-[480px] sm:h-72 md:w-[600px] md:h-80 overflow-hidden mb-8 border border-gold-500/20 rounded shadow-2xl group"
        >
          {/* Shine Overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-gold-400/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-2000 ease-out z-10" />
          
          <img 
            src={dictatorHeroImg} 
            alt="DICTATOR - One Narrative. One Leader." 
            className="w-full h-full object-cover transition-transform duration-1000 scale-102 group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/40 z-0" />
          <div className="absolute bottom-2 left-2 flex items-center gap-1 bg-black/80 backdrop-blur border border-gold-500/20 px-2 py-0.5 rounded text-[10px] font-mono uppercase tracking-widest text-gold-300">
            <Crown className="w-3 h-3 text-gold-400 animate-pulse" /> Imperial Artifact #001
          </div>
        </motion.div>

        {/* Title and Subtitle */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="space-y-4"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-red-950/40 border border-red-500/30 rounded text-xs font-mono text-red-400 uppercase tracking-widest mb-2">
            <ShieldAlert className="w-3.5 h-3.5" /> High-Clearance Protocol Live
          </div>
          <h1 className="text-5xl sm:text-7xl md:text-9xl font-display font-extrabold tracking-widest text-transparent bg-clip-text bg-gradient-to-b from-gold-100 via-gold-300 to-gold-600 uppercase text-shadow-gold select-none">
            DICTATOR
          </h1>
          <p className="text-sm sm:text-lg md:text-2xl font-display tracking-widest text-red-500 uppercase font-medium mt-1">
            One Narrative. <span className="text-gold-400">One Leader.</span>
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 w-full max-w-md px-4"
        >
          <a
            href="https://raydium.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-gold-600 to-gold-400 hover:from-gold-500 hover:to-gold-300 text-black font-display font-bold text-sm tracking-widest uppercase rounded shadow-[0_0_20px_rgba(193,129,45,0.4)] hover:shadow-[0_0_30px_rgba(193,129,45,0.6)] transition-all duration-300 transform hover:-translate-y-0.5 text-center flex items-center justify-center gap-2"
            id="buy-dictator-btn"
          >
            <Swords className="w-4 h-4" /> Buy $DICTATOR
          </a>
          <button
            onClick={onEnlistClick}
            className="w-full sm:w-auto px-8 py-4 bg-black border-2 border-gold-500 text-gold-300 hover:text-gold-100 hover:bg-gold-500/10 font-display font-bold text-sm tracking-widest uppercase rounded transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center gap-2 hover:border-gold-300"
            id="join-regime-btn"
          >
            Join The Regime <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>

        {/* Contract Address copy panel */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="mt-12 w-full max-w-lg bg-black/60 backdrop-blur-md border border-gold-500/10 px-4 py-3 rounded flex flex-col sm:flex-row items-center justify-between gap-3 text-left"
        >
          <div className="flex flex-col">
            <span className="text-[10px] font-mono text-gold-500/80 uppercase tracking-widest">Sovereign Contract Address</span>
            <span className="font-mono text-xs text-gold-200 select-all break-all">{contractAddress}</span>
          </div>
          <button
            onClick={copyContract}
            className="flex-shrink-0 px-3 py-1.5 bg-gold-900/30 border border-gold-500/30 hover:border-gold-400 text-gold-400 hover:text-gold-200 text-xs font-mono uppercase tracking-wider rounded transition-all duration-200"
            id="copy-ca-btn"
          >
            {copied ? "Copied" : "Copy"}
          </button>
        </motion.div>
      </div>

      {/* Elegant scroll indicator */}
      <div className="absolute bottom-6 flex flex-col items-center gap-2 pointer-events-none z-10 opacity-70 animate-bounce">
        <span className="text-[10px] font-mono uppercase tracking-widest text-gold-500">Acknowledge Authority</span>
        <div className="w-1 h-3 bg-gold-500 rounded-full" />
      </div>
    </section>
  );
}
