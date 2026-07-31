"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { IconBriefcase, IconCode, IconListCheck, IconTrophy } from "@tabler/icons-react";
import { DetailDialogShell } from "@/components/ui/detail-dialog-shell";
import { TabButton } from "@/components/ui/GlassModal";
import type { WorkExperience } from "@/data/types";
import { OverviewTab } from "./tabs/OverviewTab";
import { AchievementsTab } from "./tabs/AchievementsTab";
import { ResponsibilitiesTab } from "./tabs/ResponsibilitiesTab";
import { TechTab } from "./tabs/TechTab";

type Tab = "overview" | "achievements" | "responsibilities" | "tech";

interface ExperienceDetailDialogProps {
  experience: WorkExperience;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ExperienceDetailDialog({
  experience,
  open,
  onOpenChange,
}: ExperienceDetailDialogProps) {
  const [activeTab, setActiveTab] = useState<Tab>("overview");
  const { experienceDetail } = experience;

  const meta = (
    <div className="flex flex-wrap items-center gap-2 rounded-full border border-glass-border bg-white/5 px-3 py-1 text-[10px] font-medium uppercase tracking-widest text-secondary">
      <IconBriefcase size={10} className="text-accent" />
      <span>{experience.company}</span>
      <span className="text-tertiary">•</span>
      <span>{experience.period}</span>
    </div>
  );

  const tabs = (
    <>
      <TabButton active={activeTab === "overview"} onClick={() => setActiveTab("overview")} icon={<IconBriefcase size={14} />} layoutId="experience-tab">
        Overview
      </TabButton>
      <TabButton active={activeTab === "achievements"} onClick={() => setActiveTab("achievements")} icon={<IconTrophy size={14} />} layoutId="experience-tab">
        Achievements
      </TabButton>
      <TabButton active={activeTab === "responsibilities"} onClick={() => setActiveTab("responsibilities")} icon={<IconListCheck size={14} />} layoutId="experience-tab">
        Responsibilities
      </TabButton>
      <TabButton active={activeTab === "tech"} onClick={() => setActiveTab("tech")} icon={<IconCode size={14} />} layoutId="experience-tab">
        Tech Stack
      </TabButton>
    </>
  );

  return (
    <DetailDialogShell
      open={open}
      onOpenChange={onOpenChange}
      title={experience.position}
      meta={meta}
      tabs={tabs}
    >
      {!experienceDetail ? (
        <div className="flex h-[300px] flex-col items-center justify-center text-tertiary">
          <IconBriefcase size={48} className="mb-4 opacity-50" />
          <p>Experience details initializing...</p>
        </div>
      ) : (
        <AnimatePresence mode="wait">
          {activeTab === "overview" && <OverviewTab key="overview" overview={experienceDetail.overview} />}
          {activeTab === "achievements" && (
            <AchievementsTab key="achievements" achievements={experienceDetail.achievements} />
          )}
          {activeTab === "responsibilities" && (
            <ResponsibilitiesTab
              key="responsibilities"
              responsibilities={experienceDetail.responsibilities}
            />
          )}
          {activeTab === "tech" && <TechTab key="tech" technologies={experienceDetail.technologies} />}
        </AnimatePresence>
      )}
    </DetailDialogShell>
  );
}
