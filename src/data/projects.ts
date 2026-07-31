import { revouProjects } from "./projects/revou";
import { universityProjects } from "./projects/university";
import { organizationsProjects } from "./projects/organizations";
import { automationProjects } from "./projects/automation";
import type { Project, ProjectCategory, ProjectInput } from "./types";
import { isProjectCategoryEnabled } from "./site";

function slugify(title: string): string {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function withMeta(
  projects: ProjectInput[],
  category: ProjectCategory,
  defaultCtaLabel?: string
): Project[] {
  return projects.map((project) => ({
    ...project,
    id: project.id ?? slugify(project.title),
    category,
    status: project.status ?? "published",
    ctaLabel: project.ctaLabel ?? defaultCtaLabel,
  }));
}

const projectSources: {
  category: ProjectCategory;
  projects: ProjectInput[];
  ctaLabel: string;
}[] = [
  { category: "revou", projects: revouProjects, ctaLabel: "Visit Live Site" },
  { category: "university", projects: universityProjects, ctaLabel: "View Design" },
  {
    category: "organizations",
    projects: organizationsProjects,
    ctaLabel: "Documentation",
  },
  {
    category: "automation",
    projects: automationProjects,
    ctaLabel: "View on GitHub",
  },
];

export const allProjects: Project[] = projectSources
  .filter(({ category }) => isProjectCategoryEnabled(category))
  .flatMap(({ projects, category, ctaLabel }) =>
    withMeta(projects, category, ctaLabel)
  );
