import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import easytrip from "@/assets/images/Easytrip-new.png";
import niuhome from "@/assets/images/NiuHome-new.png";
import comfie from "@/assets/images/Comfie-new.png";
import gegeshop from "@/assets/images/GegeShop.png";
import revoubank from "@/assets/images/RevoU_Bank.png";
import { div, li } from "framer-motion/client";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRight from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";

const portfolioProjects = [
  {
    company: "RevoU (Bootcamp Project)",
    year: "2024",
    title: "EasyTrip",
    results: [
      { title: "A responsive travel website" },
      { title: "Frontend" },
      { title: "HTML and CSS" },
    ],
    link: "https://easytrip-ten.vercel.app/",
    image: easytrip,
  },
  {
    company: "RevoU (Bootcamp Project)",
    year: "2024",
    title: "NiuHome",
    results: [
      { title: "A responsive real-estate website" },
      { title: "Frontend" },
      { title: "HTML, Tailwind CSS, and JavaScript" },
    ],
    link: "https://niuhome.site/",
    image: niuhome,
  },
  {
    company: "RevoU (Bootcamp Project)",
    year: "2024",
    title: "Comfie",
    results: [
      {title: "A responsive design interiors website"},
      { title: "Frontend" },
      { title: "HTML, Tailwind CSS, and JavaScript" },
    ],
    link: "https://comfie.site/",
    image: comfie,
  },
  {
    company: "RevoU (Bootcamp Project)",
    year: "2025",
    title: "GegeShop",
    results: [
      {title: "A responsive E-Commerce website"},
      { title: "Frontend" },
      { title: "Next.js, Tailwind CSS, and TypeScript" },
    ],
    link: "https://gegeshop.vercel.app/",
    image: gegeshop,
  },
  {
    company: "RevoU (Bootcamp Project)",
    year: "2025",
    title: "RevoU Bank",
    results: [
      {title: "Restful API for banking application"},
      { title: "Backend" },
      { title: "Python, Flask, PostgreSQL, and Postman" },
    ],
    link: "https://github.com/revou-fsse-oct24/milestone-3-aizarfarhan25.git",
    image: revoubank,
  },
  // {
  //   company: "Quantum Dynamics",
  //   year: "2023",
  //   title: "AI Startup Landing Page",
  //   results: [
  //     { title: "Enhanced user experience by 40%" },
  //     { title: "Improved site speed by 50%" },
  //     { title: "Increased mobile traffic by 35%" },
  //   ],
  //   link: "https://youtu.be/Z7I5uSRHMHg",
  //   image: aiStartupLandingPage,
  // },
];

export const ProjectsSection = () => {
  return (
    <section id="project" className="pb-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="projects gallery"
          title="Featured Projects"
          description="Here are all the projects I worked on during my participation in the
          RevoU Fullstack Software Engineering Bootcamp."
        />
        <div className="flex flex-col mt-10 md:mt-20 gap-20">
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
                  <h3 className="font-beni font-semibold text-2xl mt-2 md:mt-5 md:text-4xl">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result, index) => (
                      <li
                        key={index}
                        className="flex gap-2 text-sm md:text-base text-white/50 "
                      >
                        <CheckCircleIcon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={project.link} target="_blank">
                    <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                      <span>Visit Live Site</span>
                      <ArrowUpRight className="size-4" />
                    </button>
                  </a>
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
    </section>
  );
};
