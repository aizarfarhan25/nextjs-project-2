import type { ComponentType, SVGProps } from "react";
import { StaticImageData } from "next/image";

export type ProjectCategory =
  | "revou"
  | "university"
  | "organizations"
  | "automation";

export type ProjectStatus = "published" | "in-progress";

export interface ProjectDetail {
  overview: string;
  features: string[];
  role: {
    title: string;
    responsibilities: string[];
  };
  technologies: string[];
  codeSnippets?: {
    title: string;
    description?: string;
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

export interface Project {
  id: string;
  category: ProjectCategory;
  status?: ProjectStatus;
  company: string;
  year: string;
  title: string;
  results: { title: string }[];
  link: string;
  image: StaticImageData;
  projectDetail?: ProjectDetail;
  ctaLabel?: string;
}

export interface WorkExperienceDetail {
  overview: string;
  achievements: string[];
  responsibilities: string[];
  technologies: string[];
}

export interface WorkExperience {
  id: string;
  company: string;
  position: string;
  period: string;
  location: string;
  description: string;
  link?: string;
  isActive?: boolean;
  experienceDetail?: WorkExperienceDetail;
}

export interface ToolboxItem {
  title: string;
  iconType: ComponentType<SVGProps<SVGSVGElement>>;
}

export interface Hobby {
  title: string;
  emoji: string;
  left: string;
  top: string;
}

export interface NavItem {
  name: string;
  link: string;
}

export interface SocialLink {
  title: string;
  href: string;
  target?: string;
  rel?: string;
}

export type ProjectInput = Omit<Project, "id" | "category" | "status"> & {
  id?: string;
  status?: ProjectStatus;
  ctaLabel?: string;
};
