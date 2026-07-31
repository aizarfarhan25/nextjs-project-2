"use client";

import { AnimatePresence, motion } from "framer-motion";
import type { Project } from "@/data/types";
import { ProjectCard } from "./ProjectCard";

interface ProjectGridProps {
  projects: Project[];
}

export function ProjectGrid({ projects }: ProjectGridProps) {
  if (projects.length === 0) {
    return (
      <div className="glass-surface flex min-h-[200px] items-center justify-center p-12 text-center">
        <p className="pro-body text-lg">
          Automation projects coming soon — check back as frameworks are published to GitHub.
        </p>
      </div>
    );
  }

  return (
    <motion.div layout className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      <AnimatePresence mode="popLayout">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            layout
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
          >
            <ProjectCard project={project} index={index} />
          </motion.div>
        ))}
      </AnimatePresence>
    </motion.div>
  );
}
