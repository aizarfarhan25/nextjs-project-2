"use client";

import type { WorkExperience } from "@/data/types";
import { ExperienceNode } from "./ExperienceNode";

interface ExperienceTimelineProps {
  experiences: WorkExperience[];
}

export function ExperienceTimeline({ experiences }: ExperienceTimelineProps) {
  return (
    <div className="relative mx-auto max-w-3xl">
      {experiences.map((experience, index) => (
        <ExperienceNode
          key={experience.id}
          experience={experience}
          isLast={index === experiences.length - 1}
        />
      ))}
    </div>
  );
}
