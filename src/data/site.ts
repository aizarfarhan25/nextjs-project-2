import type { NavItem, ProjectCategory, SocialLink } from "./types";

export const siteConfig = {
  name: "Andi Muh. Aizar Farhan",
  shortName: "Aizar",
  roles: ["Quality Assurance Engineer", "Front-End Developer"],
  roleLine: "Quality Assurance Engineer · Front-End Developer",
  tagline:
    "Motivated Quality Assurance Engineer with experience designing and executing tests to help improve software quality.",
  email: "andiaizarfarhan@gmail.com",
  resumePath: "/CV - Andi Muh. Aizar Farhan.pdf",
  availability: "Available for new jobs and projects",
  copyrightStartYear: 2024,
  mapUrl: "https://maps.app.goo.gl/L5setnKDWxLaNCAM6",
};

/** Toggle each project category on/off — controls filter pills and project cards. */
export const projectCategoryVisibility: Record<
  ProjectCategory,
  { label: string; enabled: boolean }
> = {
  revou: { label: "RevoU", enabled: true },
  university: { label: "University", enabled: true },
  organizations: { label: "Organizations", enabled: true },
  automation: { label: "Test Automation", enabled: true },
};

export const enabledProjectCategories = (
  Object.keys(projectCategoryVisibility) as ProjectCategory[]
).filter((category) => projectCategoryVisibility[category].enabled);

export const projectFilterLabels = {
  all: "All",
  ...Object.fromEntries(
    enabledProjectCategories.map((category) => [
      category,
      projectCategoryVisibility[category].label,
    ])
  ),
};

export type FilterCategory = keyof typeof projectFilterLabels;

export function isProjectCategoryEnabled(category: ProjectCategory): boolean {
  return projectCategoryVisibility[category].enabled;
}

export const navItems: NavItem[] = [
  { name: "Home", link: "#home" },
  { name: "Projects", link: "#project" },
  { name: "Experiences", link: "#experience" },
  { name: "About Me", link: "#about" },
  { name: "Contacts", link: "#contact" },
];

export const socialLinks: SocialLink[] = [
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/andi-muh-aizar-farhan/",
    target: "_blank",
    rel: "noreferrer",
  },
  {
    title: "GitHub",
    href: "https://github.com/aizarfarhan25",
    target: "_blank",
    rel: "noreferrer",
  },
  {
    title: "Instagram",
    href: "https://www.instagram.com/an.frhann/",
    target: "_blank",
    rel: "noreferrer",
  },
  {
    title: "Email",
    href: "mailto:andiaizarfarhan@gmail.com",
  },
];
