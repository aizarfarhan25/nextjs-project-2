import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import easytrip from "@/assets/images/Easytrip.png";
import niuhome from "@/assets/images/NiuHome.png";
import comfie from "@/assets/images/Comfie.png";
import { div, li } from "framer-motion/client";
import Image from "next/image";

const portfolioProjects = [
  {
    company: "RevoU (Bootcamp Project)",
    year: "2024",
    title: "EasyTrip",
    results: [
      { title: "A responsive website to showcase the beatu of Indonesia" },
    ],
    link: "https://easytrip-ten.vercel.app/",
    image: easytrip,
  },
  {
    company: "RevoU (Bootcamp Project)",
    year: "2024",
    title: "NiuHome",
    results: [
      {
        title:
          "A responsive platform designed to simplify your search for the perfect home.",
      },
    ],
    link: "https://niuhome.site/",
    image: niuhome,
  },
  {
    company: "RevoU (Bootcamp Project)",
    year: "2024",
    title: "Comfie",
    results: [
      {
        title:
          "A responsive website for finding the perfect interiors for your home or properties.",
      },
    ],
    link: "https://comfie.site/",
    image: comfie,
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
    <div>
      <div className="container">
        <div className="flex justify-center">
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-center  bg-clip-text text-transparent">
            projects gallery
          </p>
        </div>
        <h2 className="font-serif text-3xl text-center mt-6">
          Featured Projects
        </h2>
        <p className="text-center text-white/60 mt-4">
          Here are all the projects I worked on during my participation in the
          RevoU Fullstack Software Engineering Bootcamp.
        </p>
        <div className="flex flex-col mt-10">
          {portfolioProjects.map((project) => (
            <div key={project.title} className="bg-gray-800 rounded-3xl relative z-0 overflow-hidden after:-z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl">
              <div>
                <span>{project.company}</span>
                <span>{project.year}</span>
              </div>
              <h3>{project.title}</h3>
              <hr />
              <ul>
                {project.results.map((result) => (
                  <li>{result.title}</li>
                ))}
              </ul>
              <a href={project.link}>
                <button>View Live Site</button>
              </a>
              <Image src={project.image} alt={project.title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
