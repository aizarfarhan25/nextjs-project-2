"use client";
import React from "react";
import { Tabs } from "../components/ui/tabs";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRight from "@/assets/icons/arrow-up-right.svg";
import { ProjectDialog } from "@/components/ui/ProjectDialog";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

import { portfolioProjects } from "./Projects";
import { binusProjects } from "./BinusProject";
import { organizationsProjects } from "./Organizations";

export const ProjectsTabs = () => {
  const tabs = [
    {
      title: "RevoU Projects",
      value: "revou",
      content: (
        <div className="w-full overflow-visible relative h-full rounded-2xl p-2 md:p-10 border border-white/5 bg-gradient-to-br from-white/5 to-white/0">
          <SectionHeader
            eyebrow="bootcamp projects gallery"
            title="RevoU Projects"
            description="Here are all the projects I worked on during my participation in the
          RevoU Fullstack Software Engineering Bootcamp."
          />
          <div className="flex flex-col gap-4 md:gap-8 mt-10">
            {portfolioProjects.map((project, projectIndex) => (
              <Card
                key={project.title}
                className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky"
                style={{
                  top: `calc(64px + ${projectIndex * 40}px)`,
                }}
              >
                <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                  <div className="lg:pb-16">
                    <div className="bg-gradient-to-r from-yellow-300 to-amber-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                      <span>{project.company}</span>
                      <span>&bull;</span>
                      <span>{project.year}</span>
                    </div>
                    <h3 className="font-beni font-semibold text-xl mt-2 md:mt-4 md:text-3xl">
                      {project.title}
                    </h3>
                    <hr className="border-t-2 border-white/5 mt-3 md:mt-4" />
                    <ul className="flex flex-col gap-3 mt-3 md:mt-4">
                      {project.results.map((result, index) => (
                        <li
                          key={index}
                          className="flex items-center gap-2 text-sm md:text-base text-white/50"
                        >
                          <CheckCircleIcon className="w-5 h-5 flex-shrink-0" />
                          <span>{result.title}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-col md:flex-row gap-4 mt-6">
                      <a href={project.link} target="_blank" className="flex-1 md:flex-initial">
                        <button className="bg-white text-gray-950 h-10 w-full min-w-[180px] px-5 rounded-xl font-semibold inline-flex items-center justify-center gap-2">
                          <span>Visit Live Site</span>
                          <ArrowUpRight className="size-4" />
                        </button>
                      </a>
                      <div className="flex-1 md:flex-initial">
                        <ProjectDialog
                          title={project.title}
                          projectDetail={project.projectDetail}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    <Image
                      src={project.image}
                      alt={project.title}
                      className="mt-8 -mb-4 md:-mb-0 rounded-tl-xl rounded-tr-xl lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                    />
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "University Projects",
      value: "university",
      content: (
        <div className="w-full overflow-visible relative h-full rounded-2xl p-2 md:p-10 border border-white/5 bg-gradient-to-br from-white/5 to-white/0">
          <SectionHeader
            eyebrow="university projects gallery"
            title="University Projects"
            description="In this section, you will find an overview of my projects during my time at Bina Nusantara University."
          />
          <div className="flex flex-col gap-4 md:gap-8 mt-10">
            {binusProjects.map((project, projectIndex) => (
              <Card
                key={project.title}
                className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky"
                style={{
                  top: `calc(64px + ${projectIndex * 40}px)`,
                }}
              >
                <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                  <div className="lg:pb-16">
                    <div className="bg-gradient-to-r from-yellow-300 to-amber-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                      <span>{project.company}</span>
                      <span>&bull;</span>
                      <span>{project.year}</span>
                    </div>
                    <h3 className="font-beni font-semibold text-xl mt-2 md:mt-4 md:text-3xl">
                      {project.title}
                    </h3>
                    <hr className="border-t-2 border-white/5 mt-3 md:mt-4" />
                    <ul className="flex flex-col gap-3 mt-3 md:mt-4">
                      {project.results.map((result, index) => (
                        <li
                          key={index}
                          className="flex items-center gap-2 text-sm md:text-base text-white/50"
                        >
                          <CheckCircleIcon className="w-5 h-5 flex-shrink-0" />
                          <span>{result.title}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-col md:flex-row gap-4 mt-6">
                      <a href={project.link} target="_blank" className="flex-1 md:flex-initial">
                        <button className="bg-white text-gray-950 h-10 w-full min-w-[180px] px-5 rounded-xl font-semibold inline-flex items-center justify-center gap-2">
                          <span>View Design</span>
                          <ArrowUpRight className="size-4" />
                        </button>
                      </a>
                      <div className="flex-1 md:flex-initial">
                        <ProjectDialog
                          title={project.title}
                          projectDetail={project.projectDetail}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    <Image
                      src={project.image}
                      alt={project.title}
                      className="mt-8 -mb-4 md:-mb-0 rounded-tl-xl rounded-tr-xl lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                    />
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "Organizations",
      value: "organizations",
      content: (
        <div className="w-full overflow-visible relative h-full rounded-2xl p-2 md:p-10 border border-white/5 bg-gradient-to-br from-white/5 to-white/0">
          <SectionHeader
            eyebrow="organizations gallery"
            title="Organizations Experience"
            description="In this section, you will find an overview of my organizational experiences during my time at Bina Nusantara University. These experiences played a significant role in enhancing my skills, fostering collaboration, and contributing to the social community as well as the campus environment."
          />
          <div className="flex flex-col gap-4 md:gap-8 mt-10">
            {organizationsProjects.map((project, projectIndex) => (
              <Card
                key={project.title}
                className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky"
                style={{
                  top: `calc(64px + ${projectIndex * 40}px)`,
                }}
              >
                <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                  <div className="lg:pb-16">
                    <div className="bg-gradient-to-r from-yellow-300 to-amber-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                      <span>{project.company}</span>
                      <span>&bull;</span>
                      <span>{project.year}</span>
                    </div>
                    <h3 className="font-beni font-semibold text-xl mt-2 md:mt-4 md:text-3xl">
                      {project.title}
                    </h3>
                    <hr className="border-t-2 border-white/5 mt-3 md:mt-4" />
                    <ul className="flex flex-col gap-3 mt-3 md:mt-4">
                      {project.results.map((result, index) => (
                        <li
                          key={index}
                          className="flex items-center gap-2 text-sm md:text-base text-white/50"
                        >
                          <CheckCircleIcon className="w-5 h-5 flex-shrink-0" />
                          <span>{result.title}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-col md:flex-row gap-4 mt-6">
                      <a href={project.link} target="_blank" className="flex-1 md:flex-initial">
                        <button className="bg-white text-gray-950 h-10 w-full min-w-[180px] px-5 rounded-xl font-semibold inline-flex items-center justify-center gap-2">
                          <span>Documentation</span>
                          <ArrowUpRight className="size-4" />
                        </button>
                      </a>
                      <div className="flex-1 md:flex-initial">
                        <ProjectDialog
                          title={project.title}
                          projectDetail={project.projectDetail}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    <Image
                      src={project.image}
                      alt={project.title}
                      className="mt-8 -mb-4 md:-mb-0 rounded-tl-xl rounded-tr-xl lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                    />
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="project" className="pb-16 lg:py-24">
      <div className="container">
        <ScrollReveal>
          <SectionHeader
            eyebrow="projects gallery"
            title="My Work"
            description="A showcase of my projects from bootcamp, university, and organizations. Use the tabs to navigate between categories."
          />
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="[perspective:1000px] relative flex flex-col max-w-5xl mx-auto w-full items-start justify-start my-10 md:my-20">
            <Tabs tabs={tabs} />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
