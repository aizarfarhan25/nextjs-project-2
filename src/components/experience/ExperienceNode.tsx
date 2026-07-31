"use client";

import Image from "next/image";
import { GlassCard } from "@/components/ui/GlassCard";
import type { WorkExperience } from "@/data/types";
import { companyLogos } from "@/data/experience";
import { useModal } from "@/providers/ModalProvider";
import { cn } from "@/lib/utils";

interface ExperienceNodeProps {
  experience: WorkExperience;
  isLast?: boolean;
}

export function ExperienceNode({ experience, isLast }: ExperienceNodeProps) {
  const { openExperience } = useModal();

  return (
    <div className="relative flex gap-6 md:gap-10">
      <div className="flex flex-col items-center">
        <div
          className={cn(
            "relative z-10 flex size-4 shrink-0 items-center justify-center rounded-full border-2 border-black",
            experience.isActive
              ? "bg-accent shadow-[0_0_12px_rgba(201,168,76,0.5)]"
              : "bg-white/30"
          )}
        >
          {experience.isActive && (
            <div className="absolute inset-0 animate-pulse-subtle rounded-full bg-accent" />
          )}
        </div>
        {!isLast && (
          <div className="w-px flex-1 bg-gradient-to-b from-white/20 to-transparent min-h-[60px]" />
        )}
      </div>

      <GlassCard
        role="button"
        tabIndex={0}
        onClick={() => openExperience(experience)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            openExperience(experience);
          }
        }}
        className="mb-8 flex-1 cursor-pointer p-5 transition-all duration-300 hover:scale-[1.01] hover:border-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent/50 md:p-8"
      >
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div className="flex-1 space-y-2">
            <div className="flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-widest text-accent">
              <span>{experience.company}</span>
              <span className="text-tertiary">•</span>
              <span>{experience.period}</span>
              {experience.isActive && (
                <span className="rounded-full border border-accent/40 bg-accent-muted px-2 py-0.5 text-[10px] text-accent">
                  Current
                </span>
              )}
            </div>
            <h3 className="font-sans text-xl font-semibold text-white md:text-2xl lg:text-3xl">
              {experience.position}
            </h3>
            <p className="text-sm text-secondary">
              <span className="font-semibold text-white/70">Location:</span>{" "}
              {experience.location}
            </p>
            <p className="text-sm text-secondary">{experience.description}</p>
          </div>

          {companyLogos[experience.company] && (
            <div className="flex h-16 w-36 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white p-3 md:h-20 md:w-44">
              <Image
                src={companyLogos[experience.company]}
                alt={`${experience.company} logo`}
                width={160}
                height={80}
                className="max-h-full max-w-full object-contain"
              />
            </div>
          )}
        </div>
      </GlassCard>
    </div>
  );
}
