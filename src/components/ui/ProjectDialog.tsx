"use client";

import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  Check,
  Code,
  Bug,
  FileText,
  X,
  Globe,
  Calendar,
  Building,
  ChevronRight,
  Terminal,
  Search,
  ShieldCheck,
  ArrowLeft,
} from "lucide-react";
import Image from "next/image";

interface ProjectDetail {
  overview: string;
  features: string[];
  role: {
    title: string;
    responsibilities: string[];
  };
  technologies: string[];
  codeSnippets?: {
    title: string;
    language: string;
    code: string;
  }[];
  testArtifacts?: {
    title: string;
    description: string;
    type: "test-case" | "bug-report" | "test-plan";
    content: string;
  }[];
}

interface ProjectDialogProps {
  title: string;
  projectDetail?: ProjectDetail;
  // Passing other props potentially needed for header info
  company?: string;
  year?: string;
  link?: string;
  ctaLabel?: string;
}

// Custom Markdown Renderer
const renderMarkdown = (content: string) => {
  return content.split("\n").map((line, index) => {
    // Headers (### )
    if (line.startsWith("### ")) {
      return (
        <h3 key={index} className="text-lg font-bold text-zinc-100 mt-4 mb-2">
          {line.replace("### ", "")}
        </h3>
      );
    }
    // Sub-headers (## )
    if (line.startsWith("## ")) {
      return (
        <h2
          key={index}
          className="text-xl font-bold text-zinc-100 mt-6 mb-3 border-b border-zinc-800 pb-1"
        >
          {line.replace("## ", "")}
        </h2>
      );
    }

    if (line.trim() === "") {
      return <div key={index} className="h-2"></div>;
    }

    // Bold text (**text**) and code (`text`) parsing
    const parts = line.split(/(\*\*.*?\*\*|`.*?`)/g);

    return (
      <p key={index} className="min-h-[1em] leading-relaxed text-zinc-300">
        {parts.map((part, i) => {
          if (part.startsWith("**") && part.endsWith("**")) {
            return (
              <strong key={i} className="text-white font-semibold">
                {part.slice(2, -2)}
              </strong>
            );
          }
          if (part.startsWith("`") && part.endsWith("`")) {
            return (
              <code
                key={i}
                className="bg-zinc-800 px-1 py-0.5 rounded text-yellow-500 font-mono text-sm border border-zinc-700"
              >
                {part.slice(1, -1)}
              </code>
            );
          }
          return part;
        })}
      </p>
    );
  });
};

export function ProjectDialog({
  title,
  projectDetail,
  company,
  year,
  link,
  ctaLabel,
}: ProjectDialogProps) {
  const [activeTab, setActiveTab] = useState<
    "overview" | "features" | "role" | "tech" | "code" | "qa"
  >("overview");

  // State for QA Artifact Detail View
  const [selectedArtifact, setSelectedArtifact] = useState<
    NonNullable<ProjectDetail["testArtifacts"]>[number] | null
  >(null);

  // Reset selected artifact when tab changes
  function handleTabChange(tab: typeof activeTab) {
    setActiveTab(tab);
    setSelectedArtifact(null);
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="w-full min-w-[180px] relative overflow-hidden group border-white/10 hover:border-yellow-400/50 hover:bg-zinc-900/50 transition-all duration-300"
        >
          <span className="relative z-10 flex items-center gap-2">
            Open Details{" "}
            <ChevronRight
              size={14}
              className="group-hover:translate-x-1 transition-transform"
            />
          </span>
          <span className="absolute inset-0 bg-gradient-to-r from-yellow-300/10 to-amber-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
        </Button>
      </DialogTrigger>

      {/* Main Dialog Content - Glassmorphic Command Center Style */}
      <DialogContent className="max-w-4xl h-[65vh] p-0 gap-0 bg-zinc-950/95 border-white/10 shadow-2xl shadow-black/80 overflow-hidden [&>button]:hidden sm:[&>button]:hidden flex flex-col">
        {/* Sticky Header */}
        <div className="sticky top-0 z-50 flex flex-col bg-zinc-950/80 backdrop-blur-xl border-b border-white/5">
          <div className="flex items-center justify-between p-6 pb-4">
            <div className="flex items-center gap-4">
              {/* Title & Badge */}
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <DialogTitle className="text-3xl md:text-4xl font-beni font-bold bg-gradient-to-r from-yellow-300 via-amber-300 to-amber-500 text-transparent bg-clip-text drop-shadow-sm">
                    {title}
                  </DialogTitle>
                  {(year || company) && (
                    <div className="hidden md:flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-white/5 text-[10px] uppercase tracking-widest text-zinc-400 font-medium">
                      {company && <span>{company}</span>}
                      {company && year && (
                        <span className="text-zinc-600">•</span>
                      )}
                      {year && <span>{year}</span>}
                    </div>
                  )}
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
              onClick={() => handleTabChange("overview")}
              icon={<Search size={14} />}
            >
              Overview
            </TabButton>
            <TabButton
              active={activeTab === "features"}
              onClick={() => handleTabChange("features")}
              icon={<Globe size={14} />}
            >
              Features
            </TabButton>
            <TabButton
              active={activeTab === "role"}
              onClick={() => handleTabChange("role")}
              icon={<Building size={14} />}
            >
              My Role
            </TabButton>
            <TabButton
              active={activeTab === "tech"}
              onClick={() => handleTabChange("tech")}
              icon={<Code size={14} />}
            >
              Tech Stack
            </TabButton>
            {projectDetail?.codeSnippets &&
              projectDetail.codeSnippets.length > 0 && (
                <TabButton
                  active={activeTab === "code"}
                  onClick={() => handleTabChange("code")}
                  icon={<Terminal size={14} className="text-emerald-400" />}
                  highlight="emerald"
                >
                  Code Vault
                </TabButton>
              )}
            {projectDetail?.testArtifacts &&
              projectDetail.testArtifacts.length > 0 && (
                <TabButton
                  active={activeTab === "qa"}
                  onClick={() => handleTabChange("qa")}
                  icon={<ShieldCheck size={14} className="text-blue-400" />}
                  highlight="blue"
                >
                  QA Artifacts
                </TabButton>
              )}
          </div>

          {/* Divider with active indicator logic could go here, but TabButton handles it */}
          <div className="h-px w-full bg-white/5 mt-0 relative"></div>
        </div>

        {/* Scrollable Content Area */}
        <div className="flex-1 min-h-0 overflow-y-auto p-6 md:p-8 bg-gradient-to-b from-zinc-950 to-black relative">
          {/* Decorative Grid Background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>

          <div className="relative z-10 min-h-[400px]">
            {projectDetail ? (
              <AnimatePresence mode="wait">
                {activeTab === "overview" && (
                  <ContentWrapper key="overview">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      <div className="md:col-span-2 space-y-6">
                        <h3 className="text-xl font-semibold text-zinc-100 flex items-center gap-2">
                          Project Overview
                        </h3>
                        <p className="text-zinc-400 leading-relaxed text-base md:text-lg">
                          {projectDetail.overview}
                        </p>

                        {/* Quick Stats / Highlights could go here */}
                      </div>
                      <div className="space-y-4">
                        <div className="p-4 rounded-xl bg-zinc-900/50 border border-white/5">
                          <h4 className="text-xs font-bold text-zinc-500 uppercase tracking-wider mb-3">
                            Quick Actions
                          </h4>
                          {link && (
                            <a
                              href={link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block"
                            >
                              <Button className="w-full bg-white text-black hover:bg-zinc-200 font-semibold">
                                {ctaLabel || "Visit Live Site"}{" "}
                                <Globe size={14} className="ml-2" />
                              </Button>
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </ContentWrapper>
                )}

                {activeTab === "features" && (
                  <ContentWrapper key="features">
                    <h3 className="text-xl font-semibold text-zinc-100 mb-6 flex items-center gap-2">
                      Key Features
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {projectDetail.features.map((feature, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.05 }}
                          className="p-4 rounded-xl bg-zinc-900/30 border border-white/5 hover:border-white/10 hover:bg-zinc-900/50 transition-all group"
                        >
                          <div className="flex items-start gap-3">
                            <div className="mt-1 p-1.5 rounded-md bg-yellow-500/10 text-yellow-400 group-hover:text-yellow-300">
                              <Check size={14} />
                            </div>
                            <span className="text-zinc-300 text-sm leading-relaxed">
                              {feature}
                            </span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </ContentWrapper>
                )}

                {activeTab === "role" && (
                  <ContentWrapper key="role">
                    <h3 className="text-xl font-semibold text-zinc-100 mb-2">
                      {projectDetail.role.title}
                    </h3>
                    <div className="h-1 w-20 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-full mb-8"></div>

                    <div className="space-y-1">
                      {projectDetail.role.responsibilities.map((resp, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.05 }}
                          className="flex gap-4 p-4 rounded-xl hover:bg-white/[0.02] border border-transparent hover:border-white/5 transition-colors"
                        >
                          <div className="font-mono text-zinc-600 text-sm pt-0.5">
                            {(i + 1).toString().padStart(2, "0")}
                          </div>
                          <p className="text-zinc-300">{resp}</p>
                        </motion.div>
                      ))}
                    </div>
                  </ContentWrapper>
                )}

                {activeTab === "tech" && (
                  <ContentWrapper key="tech">
                    <h3 className="text-xl font-semibold text-zinc-100 mb-6">
                      Technology Stack
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {projectDetail.technologies.map((tech, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: i * 0.03 }}
                          className="px-4 py-2 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 text-sm hover:border-yellow-500/50 hover:text-yellow-100 hover:shadow-[0_0_15px_-5px_rgba(234,179,8,0.3)] transition-all cursor-default select-none"
                        >
                          {tech}
                        </motion.div>
                      ))}
                    </div>
                  </ContentWrapper>
                )}

                {activeTab === "code" && (
                  <ContentWrapper key="code">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-xl font-semibold text-zinc-100">
                        Engineering Vault
                      </h3>
                      <span className="text-xs text-zinc-500 font-mono">
                        CONFIDENTIAL // SNIPPETS
                      </span>
                    </div>

                    <div className="space-y-8">
                      {projectDetail.codeSnippets?.map((snippet, i) => (
                        <div
                          key={i}
                          className="rounded-xl overflow-hidden border border-zinc-800 bg-[#0D1117] shadow-lg"
                        >
                          {/* VS Code Title Bar */}
                          <div className="flex items-center justify-between px-4 py-2 bg-[#161b22] border-b border-zinc-800">
                            <div className="flex items-center gap-2">
                              <div className="flex gap-1.5 opacity-50 hover:opacity-100 transition-opacity">
                                <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                                <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                              </div>
                              <span className="ml-3 text-xs text-zinc-400 font-mono">
                                {snippet.title}
                              </span>
                            </div>
                            <div className="text-[10px] uppercase tracking-wider text-zinc-500 font-bold">
                              {snippet.language}
                            </div>
                          </div>

                          {/* Code Content */}
                          <div className="p-4 overflow-x-auto relative group">
                            <pre className="text-sm font-mono leading-relaxed text-zinc-300">
                              <code>{snippet.code}</code>
                            </pre>
                            {/* Copy Button (Visual Only for now) */}
                            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                              <div className="p-1.5 rounded bg-white/10 hover:bg-white/20 text-zinc-300 cursor-pointer">
                                <Code size={14} />
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </ContentWrapper>
                )}

                {activeTab === "qa" && (
                  <ContentWrapper key="qa">
                    <AnimatePresence mode="wait">
                      {!selectedArtifact ? (
                        <motion.div
                          key="list"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                        >
                          <div className="flex items-center justify-between mb-6">
                            <h3 className="text-xl font-semibold text-zinc-100">
                              QA Artifacts
                            </h3>
                            <span className="px-2 py-0.5 rounded text-[10px] bg-blue-500/20 text-blue-400 border border-blue-500/30 uppercase font-bold">
                              Verified
                            </span>
                          </div>

                          <div className="grid grid-cols-1 gap-4">
                            {projectDetail.testArtifacts?.map((artifact, i) => (
                              <motion.div
                                key={i}
                                whileHover={{ scale: 1.01 }}
                                onClick={() => setSelectedArtifact(artifact)}
                                className="group relative p-5 rounded-xl bg-gradient-to-br from-zinc-900 via-zinc-900/80 to-zinc-900/50 border border-white/5 hover:border-blue-500/30 transition-all overflow-hidden cursor-pointer"
                              >
                                {/* Hover Glow */}
                                <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>

                                <div className="relative z-10 flex gap-5">
                                  <div
                                    className={`shrink-0 w-12 h-12 rounded-lg flex items-center justify-center border border-white/5 ${
                                      artifact.type === "bug-report"
                                        ? "bg-rose-500/10 text-rose-400"
                                        : "bg-blue-500/10 text-blue-400"
                                    }`}
                                  >
                                    {artifact.type === "bug-report" ? (
                                      <Bug size={20} />
                                    ) : (
                                      <FileText size={20} />
                                    )}
                                  </div>

                                  <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-1">
                                      <h4 className="text-zinc-200 font-medium">
                                        {artifact.title}
                                      </h4>
                                      <span
                                        className={`text-[10px] px-1.5 py-0.5 rounded uppercase font-bold tracking-wide ${
                                          artifact.type === "bug-report"
                                            ? "bg-rose-950/50 text-rose-500"
                                            : "bg-blue-950/50 text-blue-500"
                                        }`}
                                      >
                                        {artifact.type.replace("-", " ")}
                                      </span>
                                    </div>
                                    <p className="text-sm text-zinc-500 group-hover:text-zinc-400 transition-colors">
                                      {artifact.description}
                                    </p>
                                  </div>

                                  <div className="self-center">
                                    <ChevronRight
                                      size={18}
                                      className="text-zinc-600 group-hover:text-zinc-300 transition-colors"
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
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 20 }}
                          className="bg-zinc-900/40 rounded-xl border border-white/10 overflow-hidden"
                        >
                          {/* Detail Header */}
                          <div className="flex items-center gap-4 p-4 border-b border-white/5 bg-zinc-900/60 sticky top-0 backdrop-blur-sm z-10">
                            <button
                              onClick={() => setSelectedArtifact(null)}
                              className="p-2 rounded-full hover:bg-white/5 text-zinc-400 hover:text-white transition-colors"
                            >
                              <ArrowLeft size={18} />
                            </button>
                            <div className="flex-1">
                              <h4 className="text-zinc-200 font-medium text-sm md:text-base line-clamp-1">
                                {selectedArtifact.title}
                              </h4>
                            </div>
                            <span
                              className={`text-[10px] px-2 py-0.5 rounded uppercase font-bold tracking-wide ${
                                selectedArtifact.type === "bug-report"
                                  ? "bg-rose-950/50 text-rose-500"
                                  : "bg-blue-950/50 text-blue-500"
                              }`}
                            >
                              {selectedArtifact.type.replace("-", " ")}
                            </span>
                          </div>

                          {/* Rich Content View */}
                          <div className="p-6 md:p-8 text-zinc-300 space-y-1 font-sans text-sm md:text-base leading-relaxed">
                            {renderMarkdown(selectedArtifact.content)}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </ContentWrapper>
                )}
              </AnimatePresence>
            ) : (
              <div className="flex flex-col items-center justify-center h-[300px] text-zinc-500">
                <Terminal size={48} className="mb-4 opacity-50" />
                <p>Project details initializing...</p>
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
          layoutId="activeTab"
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
