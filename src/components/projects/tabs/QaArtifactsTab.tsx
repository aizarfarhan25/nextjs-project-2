"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { IconArrowLeft, IconBug, IconChevronRight, IconFileText } from "@tabler/icons-react";
import { ContentWrapper } from "@/components/ui/GlassModal";
import type { ProjectDetail } from "@/data/types";
import { renderMarkdown } from "./markdown";

type TestArtifact = NonNullable<ProjectDetail["testArtifacts"]>[number];

interface QaArtifactsTabProps {
  testArtifacts: TestArtifact[];
}

export function QaArtifactsTab({ testArtifacts }: QaArtifactsTabProps) {
  const [selected, setSelected] = useState<TestArtifact | null>(null);

  return (
    <ContentWrapper>
      {!selected ? (
        <motion.div key="list" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <div className="mb-6 flex items-center justify-between">
            <h3 className="text-xl font-semibold text-white/90">QA Artifacts</h3>
            <span className="rounded border border-blue-500/30 bg-blue-500/20 px-2 py-0.5 text-[10px] font-bold uppercase text-blue-400">
              Verified
            </span>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {testArtifacts.map((artifact) => (
              <motion.div
                key={artifact.title}
                whileHover={{ scale: 1.01 }}
                onClick={() => setSelected(artifact)}
                className="group relative cursor-pointer overflow-hidden rounded-xl border border-glass-border bg-gradient-to-br from-white/[0.04] via-white/[0.03] to-transparent p-5 transition-all hover:border-blue-500/30"
              >
                <div className="pointer-events-none absolute inset-0 bg-blue-500/5 opacity-0 transition-opacity group-hover:opacity-100" />

                <div className="relative z-10 flex gap-5">
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-glass-border ${
                      artifact.type === "bug-report"
                        ? "bg-rose-500/10 text-rose-400"
                        : "bg-blue-500/10 text-blue-400"
                    }`}
                  >
                    {artifact.type === "bug-report" ? (
                      <IconBug size={20} />
                    ) : (
                      <IconFileText size={20} />
                    )}
                  </div>

                  <div className="flex-1">
                    <div className="mb-1 flex items-center gap-2">
                      <h4 className="font-medium text-white/90">{artifact.title}</h4>
                      <span
                        className={`rounded px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wide ${
                          artifact.type === "bug-report"
                            ? "bg-rose-950/50 text-rose-500"
                            : "bg-blue-950/50 text-blue-500"
                        }`}
                      >
                        {artifact.type.replace("-", " ")}
                      </span>
                    </div>
                    <p className="text-sm text-secondary transition-colors group-hover:text-white/60">
                      {artifact.description}
                    </p>
                  </div>

                  <div className="self-center">
                    <IconChevronRight
                      size={18}
                      className="text-tertiary transition-colors group-hover:text-white/60"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      ) : (
        <motion.div
          key="detail"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="overflow-hidden rounded-xl border border-glass-border bg-white/[0.03]"
        >
          <div className="sticky top-0 z-10 flex items-center gap-4 border-b border-glass-border bg-space-elevated/80 p-4 backdrop-blur-sm">
            <button
              onClick={() => setSelected(null)}
              className="rounded-full p-2 text-secondary transition-colors hover:bg-white/5 hover:text-white"
            >
              <IconArrowLeft size={18} />
            </button>
            <div className="flex-1">
              <h4 className="line-clamp-1 text-sm font-medium text-white/90 md:text-base">
                {selected.title}
              </h4>
            </div>
            <span
              className={`rounded px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide ${
                selected.type === "bug-report"
                  ? "bg-rose-950/50 text-rose-500"
                  : "bg-blue-950/50 text-blue-500"
              }`}
            >
              {selected.type.replace("-", " ")}
            </span>
          </div>

          <div className="space-y-1 p-6 text-sm leading-relaxed md:p-8 md:text-base">
            {renderMarkdown(selected.content)}
          </div>
        </motion.div>
      )}
    </ContentWrapper>
  );
}
