"use client";

import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import type { Project } from "@/data/types";
import { useModal } from "@/providers/ModalProvider";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const { openProject } = useModal();
  const isWip = project.status === "in-progress";

  return (
    <GlassCard
      role="button"
      tabIndex={0}
      onClick={() => openProject(project)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          openProject(project);
        }
      }}
      className="group cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:border-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent/50"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <div className="relative aspect-[16/10] overflow-hidden rounded-t-3xl">
        <Image
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {isWip && (
          <span className="absolute left-3 top-3 rounded-full border border-accent/40 bg-black/70 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent">
            In Progress
          </span>
        )}
        {!isWip && project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="absolute right-3 top-3 rounded-full border border-white/10 bg-black/60 p-2 text-white/70 opacity-0 transition-opacity group-hover:opacity-100 hover:text-white"
            aria-label={`Open ${project.title}`}
          >
            <ExternalLink className="size-4" />
          </a>
        )}
      </div>

      <div className="space-y-3 p-5 md:p-6">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-accent">
          <span>{project.company}</span>
          <span className="text-tertiary">•</span>
          <span>{project.year}</span>
        </div>
        <h3 className="font-sans text-xl font-semibold text-white md:text-2xl">
          {project.title}
        </h3>
        <ul className="space-y-1.5">
          {project.results.slice(0, 3).map((result) => (
            <li key={result.title} className="text-sm text-secondary line-clamp-1">
              {result.title}
            </li>
          ))}
        </ul>
      </div>
    </GlassCard>
  );
}
