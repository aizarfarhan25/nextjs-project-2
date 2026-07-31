"use client";

import { useState } from "react";
import { ParallaxLayer } from "@/components/layout/ParallaxLayer";
import { SectionHeader } from "@/components/SectionHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { FilterPills } from "@/components/ui/FilterPills";
import { ProjectGrid } from "@/components/projects/ProjectGrid";
import { ProjectDetailDialog } from "@/components/projects/ProjectDetailDialog";
import { SectionShell } from "@/components/layout/SectionShell";
import { allProjects } from "@/data/projects";
import { projectCategoryVisibility, type FilterCategory } from "@/data/site";
import { useModal } from "@/providers/ModalProvider";

function getProjectsDescription(): string {
  const labels = (Object.keys(projectCategoryVisibility) as Array<
    keyof typeof projectCategoryVisibility
  >)
    .filter((category) => projectCategoryVisibility[category].enabled)
    .map((category) => projectCategoryVisibility[category].label.toLowerCase());

  if (labels.length === 0) {
    return "A showcase of my projects. Use the filters to explore each category.";
  }

  const categoryList =
    labels.length === 1
      ? labels[0]
      : `${labels.slice(0, -1).join(", ")}, and ${labels[labels.length - 1]}`;

  return `A showcase of my projects from ${categoryList}. Use the filters to explore each category.`;
}

const projectsDescription = getProjectsDescription();

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState<FilterCategory>("all");
  const { project, isOpen, type, close } = useModal();

  const filtered =
    activeCategory === "all"
      ? allProjects
      : allProjects.filter((p) => p.category === activeCategory);

  return (
    <SectionShell id="project">
      <ScrollReveal>
        <ParallaxLayer offset={40}>
          <SectionHeader
            eyebrow="projects gallery"
            title="My Work"
            description={projectsDescription}
          />
        </ParallaxLayer>
      </ScrollReveal>

      <ScrollReveal delay={0.15} className="mt-10 md:mt-14">
        <FilterPills active={activeCategory} onChange={setActiveCategory} />
      </ScrollReveal>

      <ScrollReveal delay={0.25} className="mt-10 md:mt-14">
        <ProjectGrid projects={filtered} />
      </ScrollReveal>

      {type === "project" && project && (
        <ProjectDetailDialog
          project={project}
          open={isOpen}
          onOpenChange={(open) => !open && close()}
        />
      )}
    </SectionShell>
  );
}
