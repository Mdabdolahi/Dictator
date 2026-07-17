import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Crown, ShieldAlert, CheckCircle2, User, Wallet, Swords, Copy, Check } from "lucide-react";

interface EnlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function EnlistModal({ isOpen, onClose }: EnlistModalProps) {
  const [name, setName] = useState("");
  const [wallet, setWallet] = useState("");
  const [division, setDivision] = useState("VANGUARD");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [assignedRank, setAssignedRank] = useState("");
  const [serialNumber, setSerialNumber] = useState("");
  const [copiedText, setCopiedText] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    // Assign custom rank based on division selection
    const ranksMap: Record<string, string> = {
      VANGUARD: "Elite Tactical Vanguard",
      PROPAGANDA: "Propaganda Division Commander",
      REVENUE: "Sovereign Trade Auditor",
      INTELLIGENCE: "Regime Intelligence Agent"
    };

    setAssignedRank(ranksMap[division] || "Legionnaire");
    
    // Generate secure serial number
    const randNum = Math.floor(10000 + Math.random() * 90000);
    setSerialNumber(`RG-${randNum}`);
    
    setIsSubmitted(true);
  };

  const copyIdCard = () => {
    const text = `SUPREME REGIME VERIFIED ENLISTMENT:\nSerial: ${serialNumber}\nName: ${name.toUpperCase()}\nRank: ${assignedRank}\nDivision: ${division}\nVerified on the timeline for $DICTATOR. Join the regime.`;
    navigator.clipboard.writeText(text);
    setCopiedText(true);
    setTimeout(() => setCopiedText(false), 2000);
  };

  const handleReset = () => {
    setName("");
    setWallet("");
    setDivision("VANGUARD");
    setIsSubmitted(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
          {/* Backdrop blur overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/90 backdrop-blur-md cursor-pointer"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.4 }}
            className="relative w-full max-w-xl bg-gradient-to-b from-[#090909] to-[#040404] border border-gold-500/30 p-6 sm:p-8 rounded shadow-[0_0_50px_rgba(193,129,45,0.2)] z-10 overflow-hidden"
          >
            {/* Red alert scanner strip */}
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent animate-pulse" />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-1 border border-gold-500/10 hover:border-gold-500/40 text-gold-400 hover:text-gold-200 rounded transition-colors"
              id="close-enlist-modal-btn"
            >
              <X className="w-4 h-4" />
            </button>

            {!isSubmitted ? (
              // Enlistment Form View
              <div className="space-y-6">
                <div className="flex flex-col items-center text-center space-y-2">
                  <Crown className="w-10 h-10 text-gold-400 animate-pulse" />
                  <h3 className="font-display font-extrabold text-xl sm:text-2xl text-gold-100 uppercase tracking-widest">
                    REGIME ENLISTMENT
                  </h3>
                  <span className="font-mono text-[9px] text-red-500 tracking-widest uppercase flex items-center gap-1 font-bold">
                    <ShieldAlert className="w-3 h-3" /> Security Clearance Stage-1
                  </span>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Alias Name input */}
                  <div className="space-y-1.5">
                    <label className="block text-[10px] font-mono text-gold-500 uppercase tracking-widest flex items-center gap-1.5">
                      <User className="w-3 h-3 text-gold-400" /> DIGIT ALIAS // SOLDIER NAME
                    </label>
                    <input
                      type="text"
                      required
                      maxLength={18}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. CAPTAIN_MARCUS"
                      className="w-full bg-black border border-gold-500/20 px-3 py-2.5 text-xs text-gold-100 focus:outline-none focus:border-gold-400 tracking-wider rounded uppercase"
                    />
                  </div>

                  {/* Web3 Wallet input */}
                  <div className="space-y-1.5">
                    <label className="block text-[10px] font-mono text-gold-500 uppercase tracking-widest flex items-center gap-1.5">
                      <Wallet className="w-3 h-3 text-gold-400" /> Wallet ID (Optional verification)
                    </label>
                    <input
                      type="text"
                      maxLength={44}
                      value={wallet}
                      onChange={(e) => setWallet(e.target.value)}
                      placeholder="Enter Sol or EVM address..."
                      className="w-full bg-black border border-gold-500/20 px-3 py-2.5 text-xs text-gold-100 focus:outline-none focus:border-gold-400 font-mono tracking-wider rounded"
                    />
                  </div>

                  {/* Division Choice radio/grid */}
                  <div className="space-y-1.5">
                    <label className="block text-[10px] font-mono text-gold-500 uppercase tracking-widest">
                      CHOOSE REGIME SECTOR DIVISION
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        { id: "VANGUARD", label: "TACTICAL VANGUARD" },
                        { id: "PROPAGANDA", label: "PROPAGANDA OFFICE" },
                        { id: "REVENUE", label: "REVENUE DIVISION" },
                        { id: "INTELLIGENCE", label: "INTELLIGENCE SECTOR" }
                      ].map((divOpt) => (
                        <button
                          key={divOpt.id}
                          type="button"
                          onClick={() => setDivision(divOpt.id)}
                          className={`p-3 text-left border rounded transition-all duration-200 ${
                            division === divOpt.id
                              ? "border-gold-400 bg-gold-950/20 text-gold-100 font-bold"
                              : "border-gold-500/10 bg-black/40 hover:border-gold-500/20 text-gold-500"
                          }`}
                        >
                          <span className="block text-[9px] font-mono text-red-500 font-bold">SEC // {divOpt.id}</span>
                          <span className="block font-display text-[10px] uppercase tracking-wider mt-0.5">{divOpt.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-3.5 bg-gradient-to-r from-gold-600 to-gold-400 hover:from-gold-500 hover:to-gold-300 text-black font-display font-bold text-xs tracking-widest uppercase rounded shadow-[0_0_15px_rgba(193,129,45,0.3)] transition-all duration-300 flex items-center justify-center gap-1.5 mt-2"
                    id="submit-enlistment-btn"
                  >
                    <Swords className="w-4 h-4" /> GENERATE REGIME PASS
                  </button>
                </form>
              </div>
            ) : (
              // ID Card Result View
              <div className="space-y-6 flex flex-col items-center">
                <div className="flex flex-col items-center text-center space-y-1">
                  <CheckCircle2 className="w-10 h-10 text-green-500 animate-bounce" />
                  <h3 className="font-display font-bold text-lg text-gold-100 uppercase tracking-widest mt-2">
                    ENLISTMENT ACCEPTED
                  </h3>
                  <span className="text-[10px] font-mono text-gold-500 uppercase tracking-widest">
                    Your digital pass has been minted successfully
                  </span>
                </div>

                {/* The Virtual ID Pass (Luxury frame layout) */}
                <div className="relative w-full max-w-sm p-6 bg-gradient-to-tr from-black via-zinc-950 to-gold-950/40 border border-gold-400 rounded-sm shadow-[0_0_35px_rgba(193,129,45,0.35)] overflow-hidden">
                  {/* Holographic scanner effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-transparent via-red-500/5 to-transparent -translate-y-full animate-[bounce_6s_infinite_linear] pointer-events-none" />

                  {/* Corners */}
                  <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-gold-400" />
                  <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-gold-400" />
                  <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-gold-400" />
                  <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-gold-400" />

                  <div className="space-y-5">
                    {/* ID Header */}
                    <div className="flex justify-between items-center border-b border-gold-500/20 pb-3">
                      <div className="flex items-center gap-1.5">
                        <Crown className="w-5 h-5 text-gold-400" />
                        <div>
                          <span className="block font-display font-extrabold text-[10px] text-gold-200 tracking-wider">SUPREME REGIME</span>
                          <span className="block text-[6px] font-mono text-red-500 uppercase tracking-widest">Meme Sovereign Command</span>
                        </div>
                      </div>
                      <span className="font-mono text-[9px] text-gold-400 font-bold tracking-widest bg-gold-950/30 px-2 py-0.5 border border-gold-500/20 rounded">
                        {serialNumber}
                      </span>
                    </div>

                    {/* Personal Details Row */}
                    <div className="grid grid-cols-12 gap-4 items-center">
                      {/* Placeholder avatar */}
                      <div className="col-span-4 aspect-square bg-[#060606] border border-gold-500/20 rounded-sm flex items-center justify-center relative overflow-hidden group">
                        <User className="w-10 h-10 text-gold-600/50" />
                        <div className="absolute inset-x-0 bottom-0 bg-red-950/60 text-center py-0.5 text-[6px] font-mono text-red-400 font-bold uppercase tracking-widest border-t border-red-500/20">
                          VERIFIED
                        </div>
                      </div>

                      {/* Info lines */}
                      <div className="col-span-8 space-y-2">
                        <div>
                          <span className="block text-[7px] font-mono text-gold-600 uppercase">IDENT ALIAS</span>
                          <span className="block font-display text-sm font-black text-gold-100 uppercase tracking-wide truncate">
                            {name}
                          </span>
                        </div>
                        <div>
                          <span className="block text-[7px] font-mono text-gold-600 uppercase">OFFICIAL RANK</span>
                          <span className="block font-mono text-[9px] font-bold text-red-400 uppercase tracking-wider">
                            {assignedRank}
                          </span>
                        </div>
                        <div>
                          <span className="block text-[7px] font-mono text-gold-600 uppercase">DIVISION BRANCH</span>
                          <span className="block font-sans text-[9px] text-gold-200 font-light tracking-wide">
                            {division} SECTOR // HQ
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Barcode & Issue Stamp */}
                    <div className="border-t border-gold-500/20 pt-3 flex justify-between items-center">
                      <div className="space-y-0.5">
                        <span className="block text-[6px] font-mono text-gold-600 uppercase">BARCODE INDEX</span>
                        {/* Simulated barcode */}
                        <div className="flex items-center gap-0.5 h-6 bg-transparent opacity-60">
                          <div className="w-1 h-full bg-gold-500" />
                          <div className="w-0.5 h-full bg-gold-500" />
                          <div className="w-1.5 h-full bg-gold-500" />
                          <div className="w-0.5 h-full bg-gold-500" />
                          <div className="w-1 h-full bg-gold-500" />
                          <div className="w-2 h-full bg-gold-500" />
                          <div className="w-0.5 h-full bg-gold-500" />
                        </div>
                      </div>

                      <div className="text-right">
                        <span className="block text-[6px] font-mono text-gold-600 uppercase">ISSUE DATE</span>
                        <span className="block font-mono text-[9px] text-gold-300 font-bold">
                          {new Date().toISOString().slice(0,10)}
                        </span>
                      </div>
                    </div>

                  </div>
                </div>

                {/* Card control triggers */}
                <div className="flex gap-4 w-full pt-2">
                  <button
                    onClick={copyIdCard}
                    className="flex-1 py-3 bg-gold-900/30 border border-gold-500/30 hover:border-gold-400 text-gold-400 hover:text-gold-200 text-xs font-mono uppercase tracking-wider rounded flex items-center justify-center gap-2"
                    id="copy-regime-pass-btn"
                  >
                    {copiedText ? (
                      <>
                        <Check className="w-4 h-4 text-green-500" /> PASS COPIED
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" /> COPY PASS TEXT
                      </>
                    )}
                  </button>
                  <button
                    onClick={handleReset}
                    className="px-4 py-3 bg-black border border-gold-500/10 hover:border-gold-500/30 text-gold-500 hover:text-gold-300 text-xs font-mono uppercase tracking-wider rounded"
                    id="reset-enlistment-btn"
                  >
                    RESET
                  </button>
                </div>
              </div>
            )}

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
