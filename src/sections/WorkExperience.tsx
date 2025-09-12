import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface WorkExperienceDetail {
  responsibilities: string[];
  technologies: string[];
}

interface WorkExperience {
  company: string;
  position: string;
  period: string;
  location: string;
  description: string;
  link?: string;
  experienceDetail?: WorkExperienceDetail;
}

export const workExperiences: WorkExperience[] = [
  {
    company: "Kalbe Farma",
    position: "Quality Assurance Intern",
    period: "Feb 2024 - Feb 2025",
    location: "Jakarta, Indonesia",
    description: "Internship",  
    link: "https://www.kalbe.co.id/",
    experienceDetail: {
      responsibilities: [
        "Created key documents like test plans, scenario tests, and issue logs, which established a clear and organized testing process for the team.",
        "Improved test coverage by 40% for 3 major projects by writing and running automated tests script using Playwright.",
        "Validated API functionality and security for key services using Postman and Hoppscotch, preventing potential integration issues and enhancing system reliability.",
        "Built a project dashboard to track testing progress, giving the team and managers a clear, live view of project status.",
        // "Learned about compliance requirements in pharmaceutical software",
        // "Supported user acceptance testing sessions"
      ],
      technologies: [
        "Manual Testing",
        "Basic API Testing",
        "Postman",
        "Hoppscotch",
        "Test Documentation",
        "Microsoft Office Suite",
        "Playwright",
        "Agile Methodologies"
      ]
    }
  },
  {
    company: "Synapsis.id",
    position: "Quality Assurance Engineer Intern",
    period: "Feb 2025 - June 2025",
    location: "Jakarta, Indonesia",
    description: "Internship",
    link: "https://synapsis.id",
    experienceDetail: {
      responsibilities: [
        "Created over 1,000 detailed test cases for client websites and super apps, to ensure the functionality, performance, and reliability of client websites.",
        "Reduced regression testing time by 40% by developing and implementing an automated testing suite, which helped the team release new features more quickly.",
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
      ]
    }
  },
  {
    company: "Astra International",
    position: "Software Quality Assurance",
    period: "June 2025 - Sept 2025",
    location: "Jakarta, Indonesia",
    description: "Contact",
    link: "https://www.astra.co.id/",
    experienceDetail: {
      responsibilities: [
        "Executed comprehensive regression tests across 1000+ scenarios to ensure system updates did not negatively impact existing functionalities and maintained overall product stability.",
        "Developed automation scripts for 3 features, increasing personal testing efficiency by 20%.",
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

      ]
    }
  }
];

export const WorkExperienceSection = () => {
  return (
    <section id="experience" className="pb-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="professional journey"
          title="Work Experience"
          description="Here's an overview of my professional experience and the skills I've developed throughout my career."
        />
        <div className="flex flex-col mt-10 md:mt-20 gap-0 pb-20">
          {workExperiences.map((experience, experienceIndex) => (
            <Card
              key={experience.company}
              // className="px-8 pt-10 pb-12 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky"
              className="px-8 pt-10 pb-10 md:pt-12 md:px-10 lg:pt-16 lg:px-20 relative"
              style={{
                top: `calc(64px + ${experienceIndex * 40}px)`,
              }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-yellow-300 to-amber-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                    <span>{experience.company}</span>
                    <span>&bull;</span>
                    <span>{experience.period}</span>
                  </div>
                  <h3 className="font-beni font-semibold text-2xl mt-2 md:mt-5 md:text-4xl">
                    {experience.position}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <div className="mt-4 md:mt-6 text-white/60">
                    <p className="mb-2">
                      <span className="font-semibold text-white">Location:</span>{" "}
                      {experience.location}
                    </p>
                    <p>{experience.description}</p>
                  </div>
                  {experience.link && (
                    <div className="mt-6 md:mt-8">
                      <Link
                        href={experience.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 transition-colors"
                      >
                        <span>Visit Company Website</span>
                        <ArrowUpRight className="size-4" />
                      </Link>
                    </div>
                  )}
                </div>
                {experience.experienceDetail && (
                  <div className="mt-8 lg:mt-0 pb-8">
                    <div className="bg-white/5 rounded-xl p-6 md:p-8">
                      <h4 className="font-semibold text-lg md:text-xl">
                        Key Responsibilities
                      </h4>
                      <ul className="mt-2 space-y-2 text-white/60">
                        {experience.experienceDetail.responsibilities.map(
                          (responsibility, i) => (
                            <li key={i} className="flex gap-2">
                              <span className="text-amber-400">•</span>
                              <span>{responsibility}</span>
                            </li>
                          )
                        )}
                      </ul>

                      <h4 className="font-semibold text-lg md:text-xl mt-6 md:mt-8">
                        Technologies & Tools
                      </h4>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {experience.experienceDetail.technologies.map(
                          (technology, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 bg-white/10 rounded-full text-sm"
                            >
                              {technology}
                            </span>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};