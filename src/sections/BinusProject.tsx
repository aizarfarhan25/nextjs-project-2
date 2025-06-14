import dietio from "@/assets/images/dietio.png";
import plantpedia from "@/assets/images/plantpedia.png";
import watchesdealer from "@/assets/images/watchesdealer.png";
import laporaja from "@/assets/images/laporaja.png";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRight from "@/assets/icons/arrow-up-right.svg";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";

export const binusProjects = [
  {
    company: "BINUS University",
    year: "2022",
    title: "Dietio",
    results: [{ title: "UI/UX Design" }, { title: "Mobile App Design" }],
    link: "https://www.figma.com/design/HwF2bGhMLWMI7WCcgfDwAF/UAP-UI_EX?node-id=0-1&t=PXx7HNy8IFzPMPW3-1",
    image: dietio,
  },
  {
    company: "BINUS University",
    year: "2022",
    title: "PlantPedia",
    results: [{ title: "UI/UX Design" }, { title: "Mobile App Design" }],
    link: "https://www.figma.com/design/fOSHgoEUwROZaGEnskjW4r/Final-Project-UI-UX?node-id=0-1&t=7Gx9WZc8R15JkE3v-1",
    image: plantpedia,
  },
  {
    company: "BINUS University",
    year: "2023",
    title: "Watches Dealer",
    results: [{ title: "Java Application" }, { title: "Database Management" }],
    link: "https://binusianorg-my.sharepoint.com/personal/andi_farhan_binus_ac_id/_layouts/15/onedrive.aspx?id=/personal/andi_farhan_binus_ac_id/Documents/-%20FILE%20PROJECT%20%20(PORTFOLIO)%20-/BAD%20PROJECT&ga=1",
    image: watchesdealer,
  },
  {
    company: "BINUS University",
    year: "2023",
    title: "LaporAja",
    results: [{ title: "UI/UX Design" }, { title: "Mobile App Design" }],
    link: "https://www.figma.com/design/FIUgohVL7E5eeFp9V2X5cV/ABAD-PROJECT?node-id=0-1&t=2vQHwG4mWsbfJfYK-1",
    image: laporaja,
  },
];

export const BinusProject = () => {
  return (
    <section id="project" className="pb-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="university projects gallery"
          title="University Projects"
          description="In this section, you will find an overview of my projects during my time at Bina Nusantara University."
        />
        <div className="flex flex-col mt-10 md:mt-20 gap-20">
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
                      <span>Visit Documentation</span>
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
