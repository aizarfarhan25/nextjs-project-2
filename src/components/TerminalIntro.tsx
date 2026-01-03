"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Terminal, X } from "lucide-react";

export const TerminalIntro = ({ onComplete }: { onComplete: () => void }) => {
  const [lines, setLines] = useState<string[]>([]);
  const [isSkipped, setIsSkipped] = useState(false);

  const steps = [
    { text: "Initializing environment...", duration: 800 },
    { text: "Loading modules: [React, Next.js, Tailwind]", duration: 1200 },
    { text: "Running checks...", duration: 1000 },
    { text: "Validating responsive design... [OK]", duration: 800 },
    { text: "Verifying accessibility... [OK]", duration: 800 },
    { text: "SDET protocols... [ACTIVE]", duration: 800 },
    // { text: "Launching portfolio...", duration: 1000 },
  ];

  useEffect(() => {
    let currentIndex = 0;
    let timeoutId: NodeJS.Timeout;

    const runStep = () => {
      if (isSkipped) return;
      if (currentIndex >= steps.length) {
        setTimeout(onComplete, 800); // Wait a bit before finishing
        return;
      }

      setLines((prev) => [...prev, steps[currentIndex].text]);

      timeoutId = setTimeout(() => {
        currentIndex++;
        runStep();
      }, steps[currentIndex].duration);
    };

    runStep();

    return () => clearTimeout(timeoutId);
  }, [isSkipped, onComplete]);

  const handleSkip = () => {
    setIsSkipped(true);
    onComplete();
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 bg-black flex items-center justify-center p-4 font-mono overflow-hidden"
      exit={{ opacity: 0, y: -20, transition: { duration: 0.5 } }}
    >
      <div className="w-full max-w-lg bg-gray-900 border border-gray-800 rounded-lg shadow-2xl overflow-hidden relative">
        {/* Terminal Header */}
        <div className="bg-gray-800 px-4 py-2 flex items-center justify-between border-b border-gray-700">
          <div className="flex items-center gap-2">
            <div className="size-3 rounded-full bg-red-500" />
            <div className="size-3 rounded-full bg-yellow-500" />
            <div className="size-3 rounded-full bg-green-500" />
          </div>
          <div className="text-gray-400 text-xs flex items-center gap-1">
            <Terminal size={12} />
            <span>aizar@dev:~</span>
          </div>
        </div>

        {/* Terminal Body */}
        <div className="p-6 h-[300px] flex flex-col justify-end text-sm md:text-base">
          {lines.map((line, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2 }}
              className="text-green-400 mb-1 flex items-center gap-2"
            >
              <span className="text-gray-500 shrink-0">{">"}</span>
              <span>{line}</span>
              {line.includes("[OK]") && (
                <Check size={14} className="text-green-500 ml-auto" />
              )}
              {line.includes("[ACTIVE]") && (
                <Check size={14} className="text-green-500 ml-auto" />
              )}
            </motion.div>
          ))}
          <motion.div
            animate={{ opacity: [0, 1, 0] }}
            transition={{ repeat: Infinity, duration: 0.8 }}
            className="w-2 h-4 bg-green-500 mt-1"
          />
        </div>

        {/* Skip Button (Mobile Friendly) */}
        <button
          onClick={handleSkip}
          className="absolute bottom-4 right-4 text-xs text-gray-500 hover:text-white transition-colors uppercase tracking-widest"
        >
          [ Skip Intro ]
        </button>
      </div>
    </motion.div>
  );
};
