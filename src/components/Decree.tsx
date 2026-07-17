import { motion } from "motion/react";
import { FileText, Shield, Sparkles } from "lucide-react";
import { Law } from "../types";

const rules: Law[] = [
  {
    id: 1,
    ruleNumber: "Rule #1",
    command: "BUY.",
    description: "Accept the sovereign standard. Exchange transient currencies for absolute meme power. No hesitation. No exceptions."
  },
  {
    id: 2,
    ruleNumber: "Rule #2",
    command: "HOLD.",
    description: "Guard the gates. Stand fast against the winds of market distraction. True legionnaires never capitulate."
  },
  {
    id: 3,
    ruleNumber: "Rule #3",
    command: "READ RULE #1.",
    description: "The cycle repeats. The hierarchy is clear. Return to the fundamental law of the Supreme Regime."
  }
];

export default function Decree() {
  return (
    <section id="decree" className="relative py-24 px-4 bg-gradient-to-b from-[#030303] to-[#070505] overflow-hidden">
      {/* Decorative background stripes */}
      <div className="absolute inset-0 bg-[radial-gradient(#991b1b_1px,transparent_1px)] [background-size:32px_32px] opacity-10 pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-gold-500">
            <Shield className="w-3.5 h-3.5" /> Imperial Proclamation
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold tracking-widest text-gold-200 uppercase">
            THE DECREE
          </h2>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto mt-4" />
        </div>

        {/* Luxury military cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {rules.map((rule, idx) => (
            <motion.div
              key={rule.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="relative p-8 military-card rounded flex flex-col justify-between transition-all duration-300 shadow-2xl overflow-hidden group border-r border-t border-b border-gold-500/10 hover:border-gold-400/30"
            >
              {/* Gold light sweeps on hover */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-gold-400/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
              
              {/* Corner brackets */}
              <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-gold-500/30 group-hover:border-gold-400" />
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-gold-500/30 group-hover:border-gold-400" />

              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <span className="font-mono text-xs uppercase tracking-widest text-red-500 font-bold">
                    {rule.ruleNumber}
                  </span>
                  <FileText className="w-4 h-4 text-gold-500/50 group-hover:text-gold-400" />
                </div>
                
                <h3 className="text-4xl font-display font-black tracking-widest text-gold-100 uppercase group-hover:text-gold-300 transition-colors">
                  {rule.command}
                </h3>
                
                <p className="text-xs sm:text-sm font-sans text-gold-100/60 leading-relaxed font-light">
                  {rule.description}
                </p>
              </div>

              <div className="mt-8 flex items-center justify-between border-t border-gold-500/10 pt-4">
                <span className="text-[9px] font-mono uppercase tracking-widest text-gold-600">
                  CLASSIFIED REGIME DIRECTIVE
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-gold-500 animate-pulse" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Decree bottom line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-center mt-16 space-y-2"
        >
          <div className="inline-flex items-center gap-1 text-gold-400 text-xs font-mono uppercase tracking-widest bg-gold-950/20 px-4 py-2 border border-gold-500/10 rounded">
            <Sparkles className="w-3.5 h-3.5 text-gold-500 animate-spin-slow" />
            "There are no further instructions."
          </div>
        </motion.div>
      </div>
    </section>
  );
}
