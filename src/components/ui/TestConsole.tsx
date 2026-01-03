"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const testLogs = [
  { type: "info", msg: "Starting Regression Suite (Staging)..." },
  { type: "cmd", msg: "> npx playwright test --grep @critical" },
  { type: "info", msg: "Running 5 tests using 2 workers" },
  { type: "pass", msg: "✓  login.spec.ts:15 › Authentication Success" },
  { type: "pass", msg: "✓  transfer.spec.ts:42 › Inter-bank Transfer ($50)" },
  // Simulating a flaky test retry - very common in real-world automation!
  {
    type: "warn",
    msg: "⚠  locator.click: Waiting for selector '.toast-success'...",
  },
  { type: "info", msg: "   Retrying... (Attempt 2/3)" },
  { type: "pass", msg: "✓  payment.spec.ts:88 › Bill Payment Verification" },
  { type: "pass", msg: "✓  balance.spec.ts:24 › Ledger Update Checks" },
  { type: "info", msg: "   [API] POST /api/v1/transaction - 201 Created" },
  { type: "pass", msg: "✓  api_contract.spec.ts:10 › Schema Validation" },
  { type: "success", msg: "Suite Passed: 5 critical flows verified (12.4s)" },
];

export const TestConsole = () => {
  const [logs, setLogs] = useState<typeof testLogs>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < testLogs.length) {
        const logToAdd = testLogs[currentIndex];
        setLogs((prev) => [...prev, logToAdd]);
        currentIndex++;
      } else {
        setTimeout(() => {
          setLogs([]);
          currentIndex = 0;
        }, 3000);
      }
    }, 800);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [logs]);

  return (
    <div className="w-full max-w-lg mx-auto bg-[#0a0a0a] rounded-lg border border-gray-800 overflow-hidden font-mono text-xs md:text-sm shadow-2xl">
      <div className="bg-gray-900/50 px-4 py-2 flex items-center gap-2 border-b border-gray-800">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>
        <span className="text-gray-500 ml-2">test-runner — zsh</span>
      </div>

      <div
        ref={scrollRef}
        className="h-[300px] p-4 overflow-y-auto scrollbar-hide space-y-2 bg-black/50"
      >
        {logs.map(
          (log, i) =>
            log && (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className={`
              ${
                log.type === "cmd"
                  ? "text-blue-400"
                  : log.type === "pass"
                  ? "text-green-400"
                  : log.type === "warn"
                  ? "text-yellow-400"
                  : log.type === "success"
                  ? "text-green-300 font-bold border-t border-gray-800 pt-2"
                  : "text-gray-400"
              }
            `}
              >
                {log.msg}
              </motion.div>
            )
        )}
        <div className="animate-pulse text-gray-500">_</div>
      </div>
    </div>
  );
};
