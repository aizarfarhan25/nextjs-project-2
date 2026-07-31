"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import {
  IconBuilding,
  IconCode,
  IconSearch,
  IconShieldCheck,
  IconTerminal2,
  IconWorld,
} from "@tabler/icons-react";
import { DetailDialogShell } from "@/components/ui/detail-dialog-shell";
import { TabButton } from "@/components/ui/GlassModal";
import type { Project } from "@/data/types";
import { OverviewTab } from "./tabs/OverviewTab";
import { FeaturesTab } from "./tabs/FeaturesTab";
import { RoleTab } from "./tabs/RoleTab";
import { TechTab } from "./tabs/TechTab";
import { CodeVaultTab } from "./tabs/CodeVaultTab";
import { QaArtifactsTab } from "./tabs/QaArtifactsTab";

type Tab = "overview" | "features" | "role" | "tech" | "code" | "qa";

interface ProjectDetailDialogProps {
  project: Project;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ProjectDetailDialog({ project, open, onOpenChange }: ProjectDetailDialogProps) {
  const [activeTab, setActiveTab] = useState<Tab>("overview");
  const { projectDetail } = project;
  const isWip = project.status === "in-progress";
  const link = isWip ? undefined : project.link;
  const hasCode = !!projectDetail?.codeSnippets?.length;
  const hasQa = !!projectDetail?.testArtifacts?.length;

  const meta = (project.company || project.year) && (
    <div className="hidden items-center gap-2 rounded-full border border-glass-border bg-white/5 px-3 py-1 text-[10px] font-medium uppercase tracking-widest text-secondary md:flex">
      {project.company && <span>{project.company}</span>}
      {project.company && project.year && <span className="text-tertiary">•</span>}
      {project.year && <span>{project.year}</span>}
    </div>
  );

  const tabs = (
    <>
      <TabButton active={activeTab === "overview"} onClick={() => setActiveTab("overview")} icon={<IconSearch size={14} />} layoutId="project-tab">
        Overview
      </TabButton>
      <TabButton active={activeTab === "features"} onClick={() => setActiveTab("features")} icon={<IconWorld size={14} />} layoutId="project-tab">
        Features
      </TabButton>
      <TabButton active={activeTab === "role"} onClick={() => setActiveTab("role")} icon={<IconBuilding size={14} />} layoutId="project-tab">
        My Role
      </TabButton>
      <TabButton active={activeTab === "tech"} onClick={() => setActiveTab("tech")} icon={<IconCode size={14} />} layoutId="project-tab">
        Tech Stack
      </TabButton>
      {/* {hasCode && (
        <TabButton active={activeTab === "code"} onClick={() => setActiveTab("code")} icon={<IconTerminal2 size={14} />} highlight="emerald" layoutId="project-tab">
          Code Vault
        </TabButton>
      )} */}
      {hasQa && (
        <TabButton active={activeTab === "qa"} onClick={() => setActiveTab("qa")} icon={<IconShieldCheck size={14} />} highlight="blue" layoutId="project-tab">
          QA Artifacts
        </TabButton>
      )}
    </>
  );

  return (
    <DetailDialogShell open={open} onOpenChange={onOpenChange} title={project.title} meta={meta} tabs={tabs}>
      {!projectDetail ? (
        <div className="flex h-[300px] flex-col items-center justify-center text-tertiary">
          <IconTerminal2 size={48} className="mb-4 opacity-50" />
          <p>Project details initializing...</p>
        </div>
      ) : (
        <AnimatePresence mode="wait">
          {activeTab === "overview" && (
            <OverviewTab
              key="overview"
              overview={projectDetail.overview}
              isWip={isWip}
              link={link}
              ctaLabel={project.ctaLabel}
            />
          )}
          {activeTab === "features" && <FeaturesTab key="features" features={projectDetail.features} />}
          {activeTab === "role" && <RoleTab key="role" role={projectDetail.role} />}
          {activeTab === "tech" && <TechTab key="tech" technologies={projectDetail.technologies} />}
          {activeTab === "code" && projectDetail.codeSnippets && (
            <CodeVaultTab key="code" codeSnippets={projectDetail.codeSnippets} />
          )}
          {activeTab === "qa" && projectDetail.testArtifacts && (
            <QaArtifactsTab key="qa" testArtifacts={projectDetail.testArtifacts} />
          )}
        </AnimatePresence>
      )}
    </DetailDialogShell>
  );
}
