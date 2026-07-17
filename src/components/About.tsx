import { motion } from "motion/react";
import { Crown, Sparkles, AlertCircle, Quote } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="relative py-28 px-4 bg-[#050505] overflow-hidden">
      {/* Decorative vertical lines and custom red flare */}
      <div className="absolute top-0 left-[15%] w-px h-full bg-gradient-to-b from-transparent via-gold-500/10 to-transparent pointer-events-none" />
      <div className="absolute top-0 right-[15%] w-px h-full bg-gradient-to-b from-transparent via-gold-500/10 to-transparent pointer-events-none" />
      <div className="absolute -top-40 right-1/4 w-[500px] h-[500px] bg-red-950/10 rounded-full blur-[150px] pointer-events-none z-0" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          
          {/* Narrative Column */}
          <div className="md:col-span-7 space-y-8">
            <div className="space-y-3">
              <span className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-gold-500">
                <Crown className="w-4 h-4 text-gold-400" /> Executive Narrative
              </span>
              <h2 className="text-4xl sm:text-6xl font-display font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gold-100 via-gold-300 to-gold-500 uppercase leading-none">
                The Meme Supreme
              </h2>
            </div>

            <div className="space-y-6 text-gold-100/70 text-sm sm:text-base font-light leading-relaxed">
              <p className="border-l-2 border-red-700 pl-4 italic bg-red-950/10 py-3 pr-2 text-gold-200">
                Thousands of memecoins appear every cycle. Most are forgotten. Only one sits on the throne.
              </p>
              
              <p>
                In an era drowned in endless dogs, cats, frogs, and speculative chaos, the timeline has lost its course. The masses are guided by transient trends, while the true sovereign power of a unified narrative sits waiting.
              </p>

              <p className="font-display font-medium text-gold-300">
                DICTATOR doesn't follow narratives. <br className="hidden sm:inline" />
                <span className="text-red-500 text-lg uppercase tracking-wider font-semibold">DICTATOR creates them.</span>
              </p>
              
              <p>
                We do not ask for consensus. We do not hold committee votes. Under a single, iron-clad standard of supreme meme dominance, $DICTATOR commands attention, conquering attention spans across the sovereign timeline.
              </p>
            </div>

            {/* Micro details panel */}
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gold-500/10">
              <div className="p-3 bg-black/40 border border-gold-500/5 rounded">
                <span className="block text-[10px] font-mono text-gold-500 uppercase tracking-widest">SOVEREIGN RULING</span>
                <span className="block font-display text-sm font-bold text-gold-200 mt-1">100% AUTHORITATIVE</span>
              </div>
              <div className="p-3 bg-black/40 border border-gold-500/5 rounded">
                <span className="block text-[10px] font-mono text-gold-500 uppercase tracking-widest">NARRATIVE CONTROL</span>
                <span className="block font-display text-sm font-bold text-gold-200 mt-1">ABSOLUTE INFLUENCE</span>
              </div>
            </div>
          </div>

          {/* Graphical/Emblem Column */}
          <div className="md:col-span-5 flex justify-center">
            <motion.div 
              initial={{ opacity: 0, rotate: -5 }}
              whileInView={{ opacity: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-full flex items-center justify-center p-8 bg-black/40 border border-gold-500/15 glow-gold"
            >
              {/* Rotating outer text placeholder using stylized radial details */}
              <div className="absolute inset-0 border-2 border-dashed border-gold-500/10 rounded-full animate-[spin_80s_infinite_linear]" />
              
              <div className="absolute inset-4 border border-gold-500/20 rounded-full flex items-center justify-center">
                <div className="w-[90%] h-[90%] border border-red-500/10 rounded-full flex items-center justify-center">
                  <Quote className="w-12 h-12 text-gold-500/20 absolute -top-4" />
                </div>
              </div>

              {/* Central Seal Badge */}
              <div className="relative text-center z-10 p-6 bg-[#030303] border-2 border-gold-500 rounded-full w-[80%] h-[80%] flex flex-col items-center justify-center shadow-2xl">
                <Crown className="w-10 h-10 text-gold-400 mb-2 animate-pulse" />
                <span className="font-display font-extrabold text-lg text-gold-200 tracking-wider">SOVEREIGN</span>
                <span className="font-mono text-[9px] text-red-500 tracking-widest uppercase mt-0.5">EST. 2026</span>
                <div className="mt-3 flex items-center gap-1.5 px-2 py-0.5 bg-red-950/40 border border-red-500/20 rounded-full text-[8px] font-mono text-red-400 uppercase tracking-widest">
                  <AlertCircle className="w-2.5 h-2.5" /> NO OPPOSITION
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
