"use client";

import { motion } from "framer-motion";

export const PipelineGraph = () => {
  const steps = [
    { id: "setup", label: "Env Setup", status: "success" },
    { id: "lint", label: "Linting", status: "success" },
    { id: "api", label: "API Tests", status: "success" },
    { id: "e2e", label: "E2E Scenarios", status: "processing" },
    { id: "report", label: "Reporting", status: "pending" },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto p-6 pb-24">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0 relative">
        {/* Connecting Line (Desktop) */}
        <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gray-800 -z-10 transform -translate-y-1/2" />

        {/* Connecting Line (Mobile) */}
        <div className="md:hidden absolute left-1/2 top-0 w-1 h-full bg-gray-800 -z-10 transform -translate-x-1/2" />

        {steps.map((step, index) => (
          <div
            key={step.id}
            className="relative flex flex-col items-center group"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: index * 0.2 }}
              className={`
                w-16 h-16 rounded-full flex items-center justify-center border-2 
                transition-all duration-300 z-10 bg-[#0a0a0a]
                ${
                  step.status === "success"
                    ? "border-green-500 shadow-[0_0_15px_rgba(34,197,94,0.3)]"
                    : step.status === "processing"
                    ? "border-yellow-500 animate-pulse shadow-[0_0_15px_rgba(234,179,8,0.3)]"
                    : "border-gray-700"
                }
              `}
            >
              {step.status === "success" && (
                <svg
                  className="w-8 h-8 text-green-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              )}
              {step.status === "processing" && (
                <div className="w-8 h-8 border-2 border-current border-t-transparent rounded-full animate-spin text-yellow-500" />
              )}
              {step.status === "pending" && (
                <div className="w-3 h-3 rounded-full bg-gray-700" />
              )}
            </motion.div>

            <div className="mt-4 md:absolute md:top-20 text-center w-32">
              <h3
                className={`text-sm font-semibold ${
                  step.status === "processing"
                    ? "text-yellow-400"
                    : step.status === "success"
                    ? "text-green-400"
                    : "text-gray-500"
                }`}
              >
                {step.label}
              </h3>
              <p className="text-xs text-gray-600 mt-1 capitalize">
                {step.status}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
