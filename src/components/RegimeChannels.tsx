import { motion } from "motion/react";
import { Send, Globe, Radio, Sparkles, Shield, Compass, ArrowUpRight } from "lucide-react";
import { Department } from "../types";

const departments: Department[] = [
  {
    name: "DEPARTMENT OF PUBLIC TRANSMISSION",
    designation: "SECTOR // X-FEED",
    description: "The primary organ for outbound propaganda, diplomatic dispatches, and public edicts. Follow for high-level supreme declarations.",
    status: "BROADCASTING",
    link: "https://x.com/Dictator2026",
    iconName: "x"
  },
  {
    name: "DEPARTMENT OF MOBILIZATION & LEGIONS",
    designation: "SECTOR // TELEGRAM",
    description: "Sovereign tactical hub. Real-time orchestration of the regime's loyal armies, community raids, and collective coordinate planning.",
    status: "STANDBY // ACTIVE",
    link: "https://t.me/Dictatorsol",
    iconName: "telegram"
  }
];

export default function RegimeChannels() {
  const renderIcon = (name: string) => {
    switch (name) {
      case "x":
        return <Globe className="w-6 h-6 text-gold-400 group-hover:text-gold-200 transition-colors" />;
      case "telegram":
        return <Send className="w-6 h-6 text-gold-400 group-hover:text-gold-200 transition-colors" />;
      case "dex":
        return <Compass className="w-6 h-6 text-gold-400 group-hover:text-gold-200 transition-colors" />;
      default:
        return <Radio className="w-6 h-6 text-gold-400" />;
    }
  };

  return (
    <section id="regime" className="relative py-28 px-4 bg-[#030303] overflow-hidden">
      {/* Dynamic scanlines for a monitors-room feel */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#030303] via-black/40 to-[#030303] z-0 pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-gold-500">
            <Radio className="w-3.5 h-3.5 animate-pulse text-red-500" /> Communications Array
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold tracking-widest text-gold-200 uppercase">
            THE REGIME
          </h2>
          <p className="text-xs sm:text-sm font-mono text-gold-500/70 tracking-wider max-w-md mx-auto">
            Enlist in the official channels. Connect with your division commanders immediately.
          </p>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto mt-4" />
        </div>

        {/* Channels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {departments.map((dept, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.15 }}
              whileHover={{ scale: 1.02 }}
              className="relative p-6 bg-gradient-to-b from-[#0b0a0a] to-[#040404] border border-gold-500/10 hover:border-gold-400/30 rounded flex flex-col justify-between transition-all duration-300 group shadow-2xl overflow-hidden"
            >
              {/* Animated scanline bar overlay */}
              <div className="absolute top-0 left-0 w-full h-[1px] bg-red-500/30 animate-[bounce_8s_infinite_linear] pointer-events-none" />
              
              {/* Corner markings */}
              <div className="absolute top-2 left-2 text-[8px] font-mono text-gold-600/40 select-none">RG-{idx+1}</div>
              <div className="absolute top-2 right-2 text-[8px] font-mono text-gold-600/40 select-none">DIV-C</div>

              <div className="space-y-6">
                {/* Department Header */}
                <div className="flex justify-between items-start mt-2">
                  <div className="space-y-1">
                    <span className="font-mono text-[9px] uppercase tracking-widest text-red-500 font-bold block">
                      {dept.designation}
                    </span>
                    <h3 className="font-display font-bold text-sm sm:text-base text-gold-100 uppercase tracking-wider group-hover:text-gold-200 transition-colors">
                      {dept.name}
                    </h3>
                  </div>
                  <div className="p-3 bg-gold-900/10 border border-gold-500/20 group-hover:border-gold-400 rounded-sm">
                    {renderIcon(dept.iconName)}
                  </div>
                </div>

                <p className="text-xs font-sans text-gold-100/50 leading-relaxed font-light">
                  {dept.description}
                </p>
              </div>

              {/* Status and Action Link */}
              <div className="mt-8 pt-4 border-t border-gold-500/10 flex items-center justify-between">
                {/* Status Ticker */}
                <div className="flex items-center gap-1.5">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                  </span>
                  <span className="font-mono text-[9px] uppercase tracking-widest text-red-400 font-bold animate-pulse">
                    {dept.status}
                  </span>
                </div>

                <a
                  href={dept.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 px-3 py-1 bg-gold-950/20 border border-gold-500/20 group-hover:border-gold-400/50 hover:bg-gold-500/10 text-gold-300 hover:text-gold-100 text-[10px] font-mono uppercase tracking-wider rounded transition-all duration-300"
                >
                  Access Channel <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
