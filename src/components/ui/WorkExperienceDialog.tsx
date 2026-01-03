"use client";

import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  Briefcase,
  Trophy,
  ListTodo,
  Code,
  X,
  Calendar,
  Building,
  ChevronRight,
  Award,
  CheckCircle2,
} from "lucide-react";

interface WorkExperienceDetail {
  overview: string;
  achievements: string[];
  responsibilities: string[];
  technologies: string[];
}

interface WorkExperienceDialogProps {
  title: string;
  company: string;
  period: string;
  experienceDetail?: WorkExperienceDetail;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function WorkExperienceDialog({
  title,
  company,
  period,
  experienceDetail,
  open,
  onOpenChange,
}: WorkExperienceDialogProps) {
  const [activeTab, setActiveTab] = useState<
    "overview" | "achievements" | "responsibilities" | "tech"
  >("overview");

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      {/* Main Dialog Content - Glassmorphic Command Center Style */}
      <DialogContent className="max-w-4xl max-h-[90vh] p-0 gap-0 bg-zinc-950/95 border-white/10 shadow-2xl shadow-black/80 overflow-hidden [&>button]:hidden sm:[&>button]:hidden flex flex-col">
        {/* Sticky Header */}
        <div className="sticky top-0 z-50 flex flex-col bg-zinc-950/80 backdrop-blur-xl border-b border-white/5">
          <div className="flex items-center justify-between p-6 pb-4">
            <div className="flex items-center gap-4">
              {/* Title & Badge */}
              <div>
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-1">
                  <DialogTitle className="text-2xl md:text-3xl font-beni font-bold bg-gradient-to-r from-yellow-300 via-amber-300 to-amber-500 text-transparent bg-clip-text drop-shadow-sm">
                    {title}
                  </DialogTitle>
                  <div className="flex items-center gap-2 px-3 py-1 self-start md:self-auto rounded-full bg-zinc-900 border border-white/5 text-[10px] uppercase tracking-widest text-zinc-400 font-medium">
                    <Building size={10} className="text-yellow-500" />
                    <span>{company}</span>
                    <span className="text-zinc-600">•</span>
                    <Calendar size={10} className="text-yellow-500" />
                    <span>{period}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Custom Close Button */}
            <DialogClose asChild>
              <button className="rounded-full p-2 bg-zinc-900/50 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-transparent hover:border-white/10 transition-all duration-200">
                <X size={20} />
              </button>
            </DialogClose>
          </div>

          {/* Navigation Tabs - Scrollable */}
          <div className="px-6 flex items-center gap-2 overflow-x-auto scrollbar-hide pb-0">
            <TabButton
              active={activeTab === "overview"}
              onClick={() => setActiveTab("overview")}
              icon={<Briefcase size={14} />}
            >
              Overview
            </TabButton>
            <TabButton
              active={activeTab === "achievements"}
              onClick={() => setActiveTab("achievements")}
              icon={<Trophy size={14} />}
            >
              Achievements
            </TabButton>
            <TabButton
              active={activeTab === "responsibilities"}
              onClick={() => setActiveTab("responsibilities")}
              icon={<ListTodo size={14} />}
            >
              Responsibilities
            </TabButton>
            <TabButton
              active={activeTab === "tech"}
              onClick={() => setActiveTab("tech")}
              icon={<Code size={14} />}
            >
              Tech Stack
            </TabButton>
          </div>

          <div className="h-px w-full bg-white/5 mt-0 relative"></div>
        </div>

        {/* Scrollable Content Area */}
        <div className="flex-1 overflow-y-auto p-6 md:p-8 bg-gradient-to-b from-zinc-950 to-black relative">
          {/* Decorative Grid Background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>

          <div className="relative z-10 min-h-[300px]">
            {experienceDetail ? (
              <AnimatePresence mode="wait">
                {activeTab === "overview" && (
                  <ContentWrapper key="overview">
                    <div className="max-w-3xl">
                      <h3 className="text-xl font-semibold text-zinc-100 flex items-center gap-2 mb-6">
                        Role Overview
                      </h3>
                      <div className="p-6 rounded-2xl bg-zinc-900/30 border border-white/5 leading-relaxed text-zinc-300 text-lg">
                        {experienceDetail.overview}
                      </div>
                    </div>
                  </ContentWrapper>
                )}

                {activeTab === "achievements" && (
                  <ContentWrapper key="achievements">
                    <h3 className="text-xl font-semibold text-zinc-100 mb-6 flex items-center gap-2">
                      Key Achievements
                    </h3>
                    <div className="grid grid-cols-1 gap-4">
                      {experienceDetail.achievements.map((achievement, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                          className="group p-5 rounded-xl bg-gradient-to-br from-zinc-900/50 to-zinc-900/30 border border-white/5 hover:border-yellow-500/20 hover:bg-zinc-900/80 transition-all flex items-start gap-4"
                        >
                          <div className="p-2 rounded-lg bg-yellow-500/10 text-yellow-400 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_15px_-3px_rgba(234,179,8,0.2)]">
                            <Award size={20} />
                          </div>
                          <span className="text-zinc-300 text-base py-1">
                            {achievement}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </ContentWrapper>
                )}

                {activeTab === "responsibilities" && (
                  <ContentWrapper key="responsibilities">
                    <h3 className="text-xl font-semibold text-zinc-100 mb-6">
                      Core Responsibilities
                    </h3>
                    <div className="relative border-l border-zinc-800 ml-3 space-y-8 py-2">
                      {experienceDetail.responsibilities.map((resp, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.05 }}
                          className="relative pl-8"
                        >
                          {/* Timeline Node */}
                          <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-zinc-700 border border-zinc-900 ring-4 ring-zinc-950 group-hover:bg-yellow-500 transition-colors"></div>

                          <p className="text-zinc-300 leading-relaxed group-hover:text-zinc-200 transition-colors">
                            {resp}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </ContentWrapper>
                )}

                {activeTab === "tech" && (
                  <ContentWrapper key="tech">
                    <h3 className="text-xl font-semibold text-zinc-100 mb-6">
                      Technologies & Tools
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {experienceDetail.technologies.map((tech, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: i * 0.03 }}
                          className="px-4 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 text-sm hover:border-yellow-500/50 hover:text-yellow-100 hover:shadow-[0_0_15px_-5px_rgba(234,179,8,0.3)] transition-all cursor-default select-none flex items-center gap-2"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-yellow-500/50"></div>
                          {tech}
                        </motion.div>
                      ))}
                    </div>
                  </ContentWrapper>
                )}
              </AnimatePresence>
            ) : (
              <div className="flex flex-col items-center justify-center h-[300px] text-zinc-500">
                <Briefcase size={48} className="mb-4 opacity-50" />
                <p>Experience details initializing...</p>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

function TabButton({
  children,
  active,
  onClick,
  icon,
  highlight = "yellow",
}: {
  children: React.ReactNode;
  active: boolean;
  onClick: () => void;
  icon?: React.ReactNode;
  highlight?: "yellow" | "emerald" | "blue";
}) {
  const activeColor =
    highlight === "emerald"
      ? "text-emerald-400"
      : highlight === "blue"
      ? "text-blue-400"
      : "text-yellow-400";

  const hoverColor =
    highlight === "emerald"
      ? "hover:text-emerald-300"
      : highlight === "blue"
      ? "hover:text-blue-300"
      : "hover:text-yellow-200";

  return (
    <button
      onClick={onClick}
      className={`relative px-4 py-3 text-sm font-medium transition-colors duration-300 flex items-center gap-2 shrink-0 ${
        active ? activeColor : `text-zinc-500 ${hoverColor}`
      }`}
    >
      <span className="relative z-10 flex items-center gap-2">
        {icon}
        {children}
      </span>
      {active && (
        <motion.div
          layoutId="activeTabWork"
          className={`absolute bottom-0 left-0 right-0 h-0.5 rounded-full ${
            highlight === "emerald"
              ? "bg-emerald-400"
              : highlight === "blue"
              ? "bg-blue-400"
              : "bg-yellow-400"
          }`}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />
      )}
    </button>
  );
}

function ContentWrapper({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
}
