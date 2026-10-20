import type { WorkExperience } from "./types";

export const companyLogos: Record<string, string> = {
  "Kalbe Farma": "/assets/images/LOGO KALBE.png",
  "Synapsis.id": "/assets/images/LOGO SYNAPSIS.png",
  "Astra International": "/assets/images/LOGO ASTRA.png",
  Qoala: "/assets/images/LOGO QOALA.png",
};

export const workExperiences: WorkExperience[] = [
  {
    id: "kalbe-farma",
    company: "Kalbe Farma",
    position: "Quality Assurance",
    period: "Feb 2024 - Feb 2025",
    location: "Jakarta, Indonesia",
    description: "Internship",
    link: "https://www.kalbe.co.id/",
    experienceDetail: {
      overview:
        "As a Quality Assurance Intern at Kalbe Farma, I contributed to ensuring the quality and reliability of pharmaceutical software systems. This role provided me with valuable experience in testing methodologies, automation, and compliance requirements specific to the pharmaceutical industry.",
      achievements: [
        "Increased test coverage by 40% across 3 major projects by writing automated test scripts with Playwright and API tests with Postman and Hoppscotch",
        "Built a comprehensive project dashboard for real-time testing progress tracking",
        "Established standardized testing documentation processes for the team",
        "Successfully validated API functionality for critical pharmaceutical systems",
      ],
      responsibilities: [
        "Created key documents like test plans, scenario tests, and issue logs, which established a clear and organized testing process for the team.",
        "Developing and running automated tests script using Playwright.",
        "Validated API functionality and security for key services using Postman and Hoppscotch, preventing potential integration issues and enhancing system reliability.",
        "Built a project dashboard to track testing progress, giving the team and managers a clear, live view of project status.",
      ],
      technologies: [
        "Manual Testing",
        "Basic API Testing",
        "Postman",
        "Hoppscotch",
        "Test Documentation",
        "Microsoft Office Suite",
        "Playwright",
        "Agile Methodologies",
      ],
    },
  },
  {
    id: "synapsis",
    company: "Synapsis.id",
    position: "Software Quality Assurance Engineer",
    period: "Feb 2025 - Jun 2025",
    location: "Jakarta, Indonesia",
    description: "Internship",
    link: "https://synapsis.id",
    experienceDetail: {
      overview:
        "As a Quality Assurance Engineer Intern at Synapsis.id, I worked on ensuring the quality of client websites and super apps. This role enhanced my skills in test automation, API testing, and collaborative development processes while working with diverse client projects.",
      achievements: [
        "Created over 1,000 detailed test cases for client websites and super apps",
        "Reduced regression testing effort by 40% with an automated Playwright regression suite, enabling faster feature releases",
        "Successfully validated functionality and security for multiple client API integrations",
        "Collaborated effectively with development teams to ensure stable product releases",
      ],
      responsibilities: [
        "Created detailed test cases for client websites and super apps, to ensure the functionality, performance, and reliability of client websites.",
        "Developing and implementing an automated regression suite using Playwright, which helped the team release new features more quickly and reduced regression testing effort.",
        "Executed comprehensive API tests with Postman to validate functionality and security, ensuring stable and seamless integration between system components.",
        "Worked closely with developers to test bug fixes, confirming that issues were resolved and ensuring the final product was stable",
      ],
      technologies: [
        "Manual Testing",
        "JIRA",
        "Postman",
        "Playwright",
        "SQL",
        "Git",
        "Agile Methodologies",
        "Microsoft Office Suite",
      ],
    },
  },
  {
    id: "astra",
    company: "Astra International",
    position: "Software Quality Assurance",
    period: "Jun 2025 - Sep 2025",
    location: "Jakarta, Indonesia",
    description: "Project-Based Contract",
    link: "https://www.astra.co.id/",
    experienceDetail: {
      overview:
        "As a Software Quality Assurance professional at Astra International, I focused on maintaining high-quality standards for enterprise software systems. This role involved extensive regression testing, automation development, and close collaboration with development teams to ensure product stability.",
      achievements: [
        "Executed manual regression testing across 1,000+ scenarios, verifying that system updates did not break existing functionality",
        "Developed test data generation scripts using Playwright, eliminating repetitive manual setup and increasing testing efficiency by 20%",
        "Successfully maintained product stability through effective bug identification and validation",
        "Contributed to seamless system updates without negative impact on existing functionalities",
      ],
      responsibilities: [
        "Executed comprehensive regression tests to ensure system updates did not negatively impact existing functionalities and maintained overall product stability.",
        "Developed test data generation scripts using Playwright to eliminate repetitive manual setup.",
        "Collaborated closely with developers to identify, replicate, and validate bug fixes, tracking defects through to resolution in JIRA.",
      ],
      technologies: [
        "Manual Testing",
        "JIRA",
        "Playwright",
        "SQL Server Management Studio",
        "Microsoft Office Suite",
        "Agile Methodologies",
        "Git",
      ],
    },
  },
  {
    id: "qoala",
    company: "Qoala",
    position: "Junior SDET I",
    period: "Oct 2025 - Present",
    location: "Jakarta, Indonesia",
    description: "Full Time",
    link: "https://qoala.com/",
    isActive: true,
    experienceDetail: {
      overview:
        "As a Junior Software Development Engineer in Test (SDET I) at Qoala, I protect product quality across insurance platforms where a single business flow can span multiple partner banks and approval stages. I architected our Playwright + TypeScript automation framework from scratch, brought it into GitHub Actions CI/CD so the team gets automated feedback on every pull request instead of waiting for a manual regression cycle, and extended coverage beyond the UI with an API test suite for an external partner API and k6 load tests that check performance before release.",
      achievements: [
        "Architected a scalable Playwright + TypeScript framework from scratch using the Page Object Model, supporting 8 partner banks across full insurance policy lifecycles and growing to 100+ E2E scenarios — reducing regression testing effort by up to 80%",
        "Automated premium-rate validation against Excel rate tables as part of the E2E suite",
        "Built GitHub Actions CI/CD pipelines that run smoke tests on every pull request, plus on-demand regression parameterized by environment, bank, and flow scope — including full multi-bank matrix runs with secure credential handling",
        "Automated an API test suite of 60 test cases covering positive, negative, and edge cases for an external partner policy-issuance API, with database validation and automated reporting of created policies",
        "Designed and executed k6 load tests in paced and burst modes with p95 latency thresholds and automated reports, assessing API throughput and stability before release",
      ],
      responsibilities: [
        "Developing and maintaining automated test scripts for critical insurance features across partner banks",
        "Designing and executing test scenarios for complex policy lifecycle flows such as quotation, approval, and policy cancellation",
        "Maintaining the CI/CD test pipelines — keeping automated smoke and regression runs stable, and investigating failures reported from CI",
        "Performing API and performance testing with Postman and k6, and validating data directly against the database",
        "Collaborating with developers on bug reproduction, defect reporting, and fix verification",
        "Participating in sprint planning and daily standups to align testing priorities with delivery goals",
      ],
      technologies: [
        "Playwright",
        "TypeScript",
        "k6",
        "GitHub Actions",
        "CI/CD",
        "Postman",
        "DBeaver",
        "SQL",
        "Git",
        "JIRA",
        "Agile Methodologies",
      ],
    },
  },
];
