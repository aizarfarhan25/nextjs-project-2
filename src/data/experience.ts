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
        "Improved test coverage by 40% for 3 major projects through automated testing implementation",
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
    position: "Quality Assurance Engineer",
    period: "Feb 2025 - Jun 2025",
    location: "Jakarta, Indonesia",
    description: "Internship",
    link: "https://synapsis.id",
    experienceDetail: {
      overview:
        "As a Quality Assurance Engineer Intern at Synapsis.id, I worked on ensuring the quality of client websites and super apps. This role enhanced my skills in test automation, API testing, and collaborative development processes while working with diverse client projects.",
      achievements: [
        "Created over 1,000 detailed test cases for client websites and super apps",
        "Reduced regression testing time by 40% through automated testing suite implementation",
        "Successfully validated functionality and security for multiple client API integrations",
        "Collaborated effectively with development teams to ensure stable product releases",
      ],
      responsibilities: [
        "Created detailed test cases for client websites and super apps, to ensure the functionality, performance, and reliability of client websites.",
        "Developing and implementing an automated testing suite, which helped the team release new features more quickly and reduced time for regression testing.",
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
    description: "Contract",
    link: "https://www.astra.co.id/",
    experienceDetail: {
      overview:
        "As a Software Quality Assurance professional at Astra International, I focused on maintaining high-quality standards for enterprise software systems. This role involved extensive regression testing, automation development, and close collaboration with development teams to ensure product stability.",
      achievements: [
        "Executed comprehensive regression tests across 1000+ scenarios ensuring system stability",
        "Developed automation scripts for test data generation, eliminating repetitive manual setup and increasing testing efficiency by 20%",
        "Successfully maintained product stability through effective bug identification and validation",
        "Contributed to seamless system updates without negative impact on existing functionalities",
      ],
      responsibilities: [
        "Executed comprehensive regression tests to ensure system updates did not negatively impact existing functionalities and maintained overall product stability.",
        "Developed automation scripts for increasing personal testing efficiency",
        "Collaborated closely with developers to identify, replicate, and validate bug fixes, ensuring effective issue resolution and final product stability.",
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
    position: "Junior SDET 1",
    period: "Oct 2025 - Present",
    location: "Jakarta, Indonesia",
    description: "Full Time",
    link: "https://qoala.com/",
    isActive: true,
    experienceDetail: {
      overview:
        "As a Junior Software Development Engineer in Test (SDET 1) at Qoala, I help protect product quality across insurance platforms where a single business flow can span multiple partners and approval stages. My work sits between hands-on manual testing and automation engineering: I design and execute test scenarios for complex policy lifecycle flows, grow our Playwright automation suite, and recently brought that suite into our GitHub Actions CI/CD pipeline — so the team gets automated feedback on pull requests instead of waiting for a manual regression cycle.",
      achievements: [
        "Integrated the Playwright automation suite into a GitHub Actions CI/CD pipeline — smoke tests now run automatically on every pull request, and full E2E regression can be triggered on demand with parameterized, multi-bank configurations",
        "Built and maintained 100+ automated E2E scenarios covering end-to-end insurance policy lifecycles, cutting manual regression effort by roughly 80%",
        "Helped design and expand a maintainable Playwright + TypeScript framework using the Page Object Model, keeping tests readable and reusable as partner coverage grew",
        "Validated critical business flows such as quotation, approval, and policy cancellation across multiple partner integrations",
      ],
      responsibilities: [
        "Developing and maintaining automated test scripts for critical insurance features",
        "Maintaining the CI/CD test pipeline — keeping automated smoke and regression runs stable, and investigating failures reported from CI",
        "Performing detailed API testing with Postman and validating data directly against the database",
        "Collaborating with developers on bug reproduction, defect reporting, and fix verification",
        "Participating in sprint planning and daily standups to align testing priorities with delivery goals",
      ],
      technologies: [
        "Playwright",
        "TypeScript",
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
