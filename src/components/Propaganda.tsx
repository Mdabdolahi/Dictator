import { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Shield, Sparkles, Image, Crown, Download, RefreshCw, PenTool, Check } from "lucide-react";
import { PropagandaMeme } from "../types";

const presetMemes: PropagandaMeme[] = [
  {
    id: 1,
    title: "THE UNIFIED TIMELINE",
    tagline: "Surrender your dogs. Surrender your cats. Only $DICTATOR sits on the throne of the internet.",
    imageUrl: "bg-gradient-to-br from-red-950 via-black to-gold-950",
    stamp: "SOVEREIGN SEAL APPROVED"
  },
  {
    id: 2,
    title: "LIQUIDATION PROTOCOL",
    tagline: "Those who traded against the Supreme Edict have been meme'd out of existence. Stand fast, legionnaires.",
    imageUrl: "bg-gradient-to-tr from-[#050505] via-red-900/40 to-gold-900/30",
    stamp: "TACTICAL HQ VERIFIED"
  },
  {
    id: 3,
    title: "THE DECREE OF SOLID GOLD",
    tagline: "A million transient coins will scatter like dust in the wind. The gold standard of $DICTATOR remains immutable.",
    imageUrl: "bg-gradient-to-b from-black via-gold-950/40 to-[#070505]",
    stamp: "IMPERIAL LEGISLATURE SECURE"
  }
];

export default function Propaganda() {
  const [customTitle, setCustomTitle] = useState("THE NEW ERA");
  const [customTagline, setCustomTagline] = useState("We do not wait for consensus. We create the timeline.");
  const [activeTemplate, setActiveTemplate] = useState<"slate" | "crimson" | "velvet">("velvet");
  const [activeStamp, setActiveStamp] = useState("SUPREME EDICT APPROVED");
  const [userMemes, setUserMemes] = useState<PropagandaMeme[]>([]);
  const [copiedLink, setCopiedLink] = useState(false);
  const posterRef = useRef<HTMLDivElement>(null);

  const handleCreatePropaganda = () => {
    const bgMap = {
      slate: "bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 border-zinc-700/50",
      crimson: "bg-gradient-to-br from-red-950 via-[#070505] to-red-900/50 border-red-500/30",
      velvet: "bg-gradient-to-tr from-black via-gold-950/30 to-[#050505] border-gold-500/30"
    };

    const newMeme: PropagandaMeme = {
      id: Date.now(),
      title: customTitle.toUpperCase() || "UNNAMED PROTOCOL",
      tagline: customTagline || "Obey the golden standard.",
      imageUrl: bgMap[activeTemplate],
      stamp: activeStamp.toUpperCase()
    };

    setUserMemes([newMeme, ...userMemes]);
  };

  const copyPosterText = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <section id="propaganda" className="relative py-28 px-4 bg-gradient-to-b from-[#030303] to-[#070505] overflow-hidden">
      {/* Absolute particle background vectors */}
      <div className="absolute top-[20%] left-0 w-[400px] h-[400px] bg-gold-900/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-0 w-[400px] h-[400px] bg-red-900/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-gold-500">
            <Image className="w-3.5 h-3.5" /> Propaganda Division
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold tracking-widest text-gold-200 uppercase">
            PROPAGANDA DEPARTMENT
          </h2>
          <p className="text-xs sm:text-sm font-mono text-gold-500/70 tracking-wider max-w-lg mx-auto">
            Review the official campaign archives or draft your own verified propaganda decree using our military template engine.
          </p>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto mt-4" />
        </div>

        {/* Master layout grid splitting creation engine and archive gallery */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Creator panel (LHS) */}
          <div className="lg:col-span-5 bg-black/60 backdrop-blur-md border border-gold-500/20 p-6 rounded shadow-2xl space-y-6">
            <div className="flex items-center gap-2 border-b border-gold-500/15 pb-4">
              <PenTool className="w-4 h-4 text-gold-400" />
              <h3 className="font-display font-bold text-sm tracking-wider text-gold-100 uppercase">
                EDICT CREATION TERMINAL
              </h3>
            </div>

            <div className="space-y-4">
              {/* Title Field */}
              <div className="space-y-1.5">
                <label className="block text-[10px] font-mono text-gold-500 uppercase tracking-widest">
                  POSTER HEADLINE
                </label>
                <input
                  type="text"
                  maxLength={28}
                  value={customTitle}
                  onChange={(e) => setCustomTitle(e.target.value)}
                  className="w-full bg-black/90 border border-gold-500/20 px-3 py-2 text-xs text-gold-200 focus:outline-none focus:border-gold-400 uppercase font-display tracking-widest rounded"
                  placeholder="e.g. THE FINAL NARRATIVE"
                />
              </div>

              {/* Tagline/Slogan Field */}
              <div className="space-y-1.5">
                <label className="block text-[10px] font-mono text-gold-500 uppercase tracking-widest">
                  SOVEREIGN STATEMENT
                </label>
                <textarea
                  maxLength={120}
                  value={customTagline}
                  onChange={(e) => setCustomTagline(e.target.value)}
                  className="w-full bg-black/90 border border-gold-500/20 px-3 py-2 text-xs text-gold-200 focus:outline-none focus:border-gold-400 h-20 resize-none font-sans font-light leading-relaxed rounded"
                  placeholder="Type an authoritarian decree for $DICTATOR holder legionnaires..."
                />
              </div>

              {/* Background Style Switcher */}
              <div className="space-y-1.5">
                <label className="block text-[10px] font-mono text-gold-500 uppercase tracking-widest">
                  PROPAGANDA FRAME STYLE
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {(["slate", "crimson", "velvet"] as const).map((temp) => (
                    <button
                      key={temp}
                      onClick={() => setActiveTemplate(temp)}
                      className={`py-2 text-[10px] font-mono uppercase tracking-wider border rounded transition-all duration-200 ${
                        activeTemplate === temp
                          ? "border-gold-400 bg-gold-950/20 text-gold-200 font-bold"
                          : "border-gold-500/10 hover:border-gold-500/30 text-gold-500"
                      }`}
                    >
                      {temp}
                    </button>
                  ))}
                </div>
              </div>

              {/* Verified Stamp Selector */}
              <div className="space-y-1.5">
                <label className="block text-[10px] font-mono text-gold-500 uppercase tracking-widest">
                  OFFICIAL SEAL STAMP
                </label>
                <select
                  value={activeStamp}
                  onChange={(e) => setActiveStamp(e.target.value)}
                  className="w-full bg-black/90 border border-gold-500/20 px-3 py-2 text-xs text-gold-400 focus:outline-none focus:border-gold-400 uppercase font-mono tracking-wider rounded"
                >
                  <option value="SUPREME EDICT APPROVED">SUPREME EDICT APPROVED</option>
                  <option value="TACTICAL HQ REGISTERED">TACTICAL HQ REGISTERED</option>
                  <option value="CLASSIFIED REGIME CLEARANCE">CLASSIFIED CLEARANCE</option>
                </select>
              </div>

              {/* Create button */}
              <button
                onClick={handleCreatePropaganda}
                className="w-full py-3 bg-gradient-to-r from-gold-600 to-gold-400 hover:from-gold-500 hover:to-gold-300 text-black font-display font-bold text-xs tracking-widest uppercase rounded shadow-lg transition-all duration-300 flex items-center justify-center gap-1.5"
                id="create-edict-btn"
              >
                <Sparkles className="w-3.5 h-3.5" /> TRANSMIT PROPAGANDA POSTER
              </button>
            </div>
          </div>

          {/* Gallery View (RHS) */}
          <div className="lg:col-span-7 space-y-8">
            <h4 className="font-display font-bold text-xs tracking-wider text-gold-500 uppercase border-b border-gold-500/15 pb-2">
              PROPAGANDA GALLERY & ARCHIVE ({presetMemes.length + userMemes.length} ACTIVE DISPATCHES)
            </h4>

            {/* Masonry or custom Grid layout of framed cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Render custom user-created posters first with beautiful animations */}
              <AnimatePresence mode="popLayout">
                {userMemes.map((meme) => (
                  <motion.div
                    key={meme.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.6 }}
                    className={`relative p-6 ${meme.imageUrl} border border-gold-400 rounded-sm flex flex-col justify-between h-[340px] shadow-[0_0_25px_rgba(193,129,45,0.25)] group`}
                  >
                    {/* Golden corners representing a premium photo frame */}
                    <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-gold-400" />
                    <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-gold-400" />
                    <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-gold-400" />
                    <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-gold-400" />

                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <Crown className="w-4 h-4 text-gold-400" />
                        <span className="text-[8px] font-mono tracking-widest text-gold-500 font-bold uppercase">
                          USER GENERATED // RG-{meme.id % 1000}
                        </span>
                      </div>
                      
                      <h3 className="font-display font-black tracking-widest text-base text-gold-100 uppercase mt-2 leading-tight">
                        {meme.title}
                      </h3>
                      
                      <p className="font-sans text-xs text-gold-100/70 leading-relaxed font-light mt-1">
                        "{meme.tagline}"
                      </p>
                    </div>

                    <div className="mt-8 flex flex-col gap-3">
                      {/* Red stamp decoration */}
                      <div className="self-end border-2 border-dashed border-red-500/60 px-2 py-1 text-[8px] font-mono font-bold text-red-500 uppercase tracking-widest rotate-6">
                        {meme.stamp}
                      </div>

                      <div className="border-t border-gold-500/10 pt-3 flex justify-between items-center">
                        <span className="text-[8px] font-mono text-gold-600 uppercase">OFFICIAL CLASSIFICATION</span>
                        <button
                          onClick={() => copyPosterText(`$DICTATOR PROPAGANDA:\n\n${meme.title}\n"${meme.tagline}"\n\nOne Narrative. One Leader. Join the regime.`)}
                          className="flex items-center gap-1.5 text-[9px] font-mono text-gold-400 hover:text-gold-200 uppercase tracking-wider transition-colors"
                          id={`copy-custom-${meme.id}`}
                        >
                          {copiedLink ? <Check className="w-3 h-3 text-green-500" /> : <Download className="w-3 h-3" />}
                          Copy Text
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>

              {/* Preset Memes (Always rendered) */}
              {presetMemes.map((meme) => (
                <div
                  key={meme.id}
                  className={`relative p-6 ${meme.imageUrl} border border-gold-500/10 hover:border-gold-500/30 rounded-sm flex flex-col justify-between h-[340px] shadow-2xl transition-all duration-300 group`}
                >
                  {/* Golden corners representing a premium photo frame */}
                  <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-gold-500/30 group-hover:border-gold-400" />
                  <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-gold-500/30 group-hover:border-gold-400" />
                  <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-gold-500/30 group-hover:border-gold-400" />
                  <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-gold-500/30 group-hover:border-gold-400" />

                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <Crown className="w-3.5 h-3.5 text-gold-500/50 group-hover:text-gold-400 transition-colors" />
                      <span className="text-[8px] font-mono tracking-widest text-gold-600/60 font-bold uppercase">
                        ARCHIVE DISPATCH // RG-00{meme.id}
                      </span>
                    </div>
                    
                    <h3 className="font-display font-black tracking-widest text-base text-gold-100 uppercase mt-2 leading-tight group-hover:text-gold-200 transition-colors">
                      {meme.title}
                    </h3>
                    
                    <p className="font-sans text-xs text-gold-100/60 leading-relaxed font-light mt-1">
                      "{meme.tagline}"
                    </p>
                  </div>

                  <div className="mt-8 flex flex-col gap-3">
                    {/* Red stamp decoration */}
                    <div className="self-end border border-dashed border-red-500/30 group-hover:border-red-500/50 px-2.5 py-1 text-[8px] font-mono font-semibold text-red-500/60 group-hover:text-red-500/90 uppercase tracking-widest rotate-3 transition-all duration-300">
                      {meme.stamp}
                    </div>

                    <div className="border-t border-gold-500/10 pt-3 flex justify-between items-center">
                      <span className="text-[8px] font-mono text-gold-600/70 uppercase">DEPARTMENT APPROVED</span>
                      <button
                        onClick={() => copyPosterText(`$DICTATOR DECREE:\n\n${meme.title}\n"${meme.tagline}"\n\nOne Narrative. One Leader.`)}
                        className="flex items-center gap-1 text-[9px] font-mono text-gold-400 hover:text-gold-200 uppercase tracking-wider"
                        id={`copy-preset-${meme.id}`}
                      >
                        {copiedLink ? <Check className="w-3 h-3 text-green-500" /> : <Download className="w-3 h-3" />}
                        Copy Text
                      </button>
                    </div>
                  </div>
                </div>
              ))}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
