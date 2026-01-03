"use client";

import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import { PipelineGraph } from "@/components/ui/PipelineGraph";
import { TestConsole } from "@/components/ui/TestConsole";
import { motion } from "framer-motion";

export const AutomationDashboard = () => {
  return (
    <div className="py-16 lg:py-24" id="automation">
      <div className="container">
        <SectionHeader
          eyebrow="Test Automation"
          title="Regression Test Suite"
          description="Real-time visibility into the automated checks that ensure application stability."
        />

        <div className="mt-16 flex flex-col gap-8">
          {/* Top Row: Pipeline Visualization */}
          <Card className="p-8 md:p-12 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-300/5 to-sky-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <h3 className="font-beni font-bold text-2xl md:text-3xl text-gray-200">
                  Automated Test Suite
                </h3>
                <p className="text-white/60 text-sm md:text-base">
                  Visualizing the end-to-end execution flow for ensuring
                  application stability.
                </p>
              </div>
              <div className="mt-4">
                <PipelineGraph />
              </div>
            </div>
          </Card>

          {/* Bottom Row: Two Columns */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Live Test Console */}
            <Card className="p-0 overflow-hidden border-0 bg-transparent shadow-none">
              <div className="flex flex-col gap-4">
                <div className="px-6 pt-6">
                  <h3 className="font-beni font-bold text-2xl text-gray-200">
                    Live Test Runner
                  </h3>
                  <p className="text-white/60 text-sm mt-2">
                    Real-time execution logs from the automated test suite.
                  </p>
                </div>
                <div className="mt-2">
                  <TestConsole />
                </div>
              </div>
            </Card>

            {/* Metrics Dashboard */}
            <div className="flex flex-col gap-4">
              <Card className="flex-1 p-6 md:p-8 flex flex-col justify-center">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-emerald-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-gray-200">150+</div>
                    <div className="text-sm text-gray-400">
                      Automated Scenarios
                    </div>
                  </div>
                </div>
              </Card>
              <Card className="flex-1 p-6 md:p-8 flex flex-col justify-center">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-blue-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-gray-200">98%</div>
                    <div className="text-sm text-gray-400">Suite Pass Rate</div>
                  </div>
                </div>
              </Card>
              <Card className="flex-1 p-6 md:p-8 flex flex-col justify-center">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-purple-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-gray-200">
                      12m 30s
                    </div>
                    <div className="text-sm text-gray-400">
                      Regression Cycle
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
