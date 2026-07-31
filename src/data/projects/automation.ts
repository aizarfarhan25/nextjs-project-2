import playwrightCover from "@/assets/images/Automation-Cover.png";
import type { ProjectInput } from "../types";

export const automationProjects: ProjectInput[] = [
  {
    id: "playwright-framework",
    status: "in-progress",
    ctaLabel: "View on GitHub",
    company: "Personal Project",
    year: "2026",
    title: "Playwright Test Framework",
    results: [
      { title: "End-to-end automation suite" },
      { title: "Page Object Model architecture" },
      { title: "CI/CD integration" },
    ],
    link: "https://github.com/aizarfarhan25",
    image: playwrightCover,
    projectDetail: {
      overview:
        "A scalable Playwright automation framework for regression testing. This project is currently in active development and will be published to GitHub with full test architecture documentation.",
      features: [
        "Page Object Model (POM) structure for maintainable test code",
        "Combined API and UI automation tests",
        "CI pipeline integration for automated regression runs",
      ],
      role: {
        title: "SDET / Test Automation Engineer",
        responsibilities: [
          "Designing the test framework architecture and folder structure",
          "Implementing reusable page objects and test utilities",
          "Writing automated regression tests for critical business flows",
          "Configuring CI/CD pipeline for continuous test execution",
        ],
      },
      technologies: [
        "Playwright",
        "TypeScript",
        "GitHub Actions",
        "Page Object Model",
        "Fixture",
      ],
    },
  },
];
