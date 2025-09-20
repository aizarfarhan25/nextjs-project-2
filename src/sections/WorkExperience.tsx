"use client";

import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { WorkExperienceDialog } from "@/components/ui/WorkExperienceDialog";
import { useState } from "react";

// Company logos mapping
const companyLogos: { [key: string]: string } = {
  "Kalbe Farma": "/assets/images/LOGO KALBE.png",
  "Synapsis.id": "/assets/images/LOGO SYNAPSIS.png",
  "Astra International": "/assets/images/LOGO ASTRA.png",
};

interface WorkExperienceDetail {
  overview: string;
  achievements: string[];
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
      overview: "As a Quality Assurance Intern at Kalbe Farma, I contributed to ensuring the quality and reliability of pharmaceutical software systems. This role provided me with valuable experience in testing methodologies, automation, and compliance requirements specific to the pharmaceutical industry.",
      achievements: [
        "Improved test coverage by 40% for 3 major projects through automated testing implementation",
        "Built a comprehensive project dashboard for real-time testing progress tracking",
        "Established standardized testing documentation processes for the team",
        "Successfully validated API functionality for critical pharmaceutical systems"
      ],
      responsibilities: [
        "Created key documents like test plans, scenario tests, and issue logs, which established a clear and organized testing process for the team.",
        "Improved test coverage by 40% for 3 major projects by writing and running automated tests script using Playwright.",
        "Validated API functionality and security for key services using Postman and Hoppscotch, preventing potential integration issues and enhancing system reliability.",
        "Built a project dashboard to track testing progress, giving the team and managers a clear, live view of project status."
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
      overview: "As a Quality Assurance Engineer Intern at Synapsis.id, I worked on ensuring the quality of client websites and super apps. This role enhanced my skills in test automation, API testing, and collaborative development processes while working with diverse client projects.",
      achievements: [
        "Created over 1,000 detailed test cases for client websites and super apps",
        "Reduced regression testing time by 40% through automated testing suite implementation",
        "Successfully validated functionality and security for multiple client API integrations",
        "Collaborated effectively with development teams to ensure stable product releases"
      ],
      responsibilities: [
        "Created over 1,000 detailed test cases for client websites and super apps, to ensure the functionality, performance, and reliability of client websites.",
        "Reduced regression testing time by 40% by developing and implementing an automated testing suite, which helped the team release new features more quickly.",
        "Executed comprehensive API tests with Postman to validate functionality and security, ensuring stable and seamless integration between system components.",
        "Worked closely with developers to test bug fixes, confirming that issues were resolved and ensuring the final product was stable"
      ],
      technologies: [
        "Manual Testing",
        "JIRA",
        "Postman",
        "Playwright",
        "SQL",
        "Git",
        "Agile Methodologies",
        "Microsoft Office Suite"
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
      overview: "As a Software Quality Assurance professional at Astra International, I focused on maintaining high-quality standards for enterprise software systems. This role involved extensive regression testing, automation development, and close collaboration with development teams to ensure product stability.",
      achievements: [
        "Executed comprehensive regression tests across 1000+ scenarios ensuring system stability",
        "Increased personal testing efficiency by 20% through automation script development",
        "Successfully maintained product stability through effective bug identification and validation",
        "Contributed to seamless system updates without negative impact on existing functionalities"
      ],
      responsibilities: [
        "Executed comprehensive regression tests across 1000+ scenarios to ensure system updates did not negatively impact existing functionalities and maintained overall product stability.",
        "Developed automation scripts for 3 features, increasing personal testing efficiency by 20%.",
        "Collaborated closely with developers to identify, replicate, and validate bug fixes, ensuring effective issue resolution and final product stability."
      ],
      technologies: [
        "Manual Testing",
        "JIRA",
        "Playwright",
        "SQL Server Management Studio",
        "Microsoft Office Suite",
        "Agile Methodologies",
        "Git"
      ]
    }
  }
];

export const WorkExperienceSection = () => {
  const [selectedExperience, setSelectedExperience] = useState<WorkExperience | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleViewDetails = (experience: WorkExperience) => {
    setSelectedExperience(experience);
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    setSelectedExperience(null);
  };

  return (
    <section id="experience" className="pb-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="professional journey"
          title="Work Experience"
          description="Here's an overview of my professional experience and the skills I've developed throughout my career."
        />
        <div className="flex flex-col mt-10 md:mt-20 gap-20">
          {workExperiences.map((experience, experienceIndex) => (
            <Card
              key={experience.company}
              className="px-8 pt-10 pb-8 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky"
              style={{
                top: `calc(64px + ${experienceIndex * 40}px)`,
              }}
            >
              <div className="flex flex-col md:flex-row gap-8 md:gap-16">
                <div className="flex-1">
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
                  <div className="mt-6 md:mt-8">
                    {experience.experienceDetail && (
                      <button 
                        onClick={() => handleViewDetails(experience)}
                        className="bg-white text-gray-950 h-10 w-full min-w-[180px] px-5 rounded-xl font-semibold inline-flex items-center justify-center gap-2"
                      >
                        <span>View Details</span>
                        <ArrowUpRight className="size-4" />
                      </button>
                    )}
                  </div>
                </div>
                <div className="flex justify-center md:justify-end items-center md:items-start mt-6 md:mt-0">
                  <div className="w-64 h-32 flex items-center justify-center bg-white rounded-lg p-6 shadow-sm">
                  {companyLogos[experience.company] && (
                    <div className="flex items-center justify-center w-full h-full">
                      <Image
                        src={companyLogos[experience.company]}
                        alt={`${experience.company} logo`}
                        width={240}
                        height={120}
                        className="object-contain max-w-full max-h-full"
                      />
                    </div>
                  )}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
      
      {selectedExperience && (
        <WorkExperienceDialog
          title={selectedExperience.position}
          company={selectedExperience.company}
          period={selectedExperience.period}
          experienceDetail={selectedExperience.experienceDetail}
          open={isDialogOpen}
          onOpenChange={handleCloseDialog}
        />
      )}
    </section>
  );
};