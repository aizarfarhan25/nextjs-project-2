"use client";
import { SectionHeader } from "@/components/SectionHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Card } from "@/components/Card";
// import binusImage from "@/assets/images/binus logo.png"
import binusImage from "@/assets/images/Logo-Binus-University-Universitas-Bina-Nusantara-Original-PNG.png";
import revouImage from "@/assets/images/revou logo.png";
import Image from "next/image";
import JavascriptIcon from "@/assets/icons/js-brands-solid.svg";
import HTMLIcon from "@/assets/icons/html5-brands-solid.svg";
import CssIcon from "@/assets/icons/css3-brands-solid.svg";
import ReactIcon from "@/assets/icons/react-brands-solid.svg";
import TailwindIcon from "@/assets/icons/tailwind-brand-solid.svg";
import PlaywrightIcon from "@/assets/icons/playwright.svg";
import KatalonIcon from "@/assets/icons/katalon.svg";
// import SeleniumIcon from "@/assets/icons/selenium.svg";
import FigmaIcon from "@/assets/icons/figma.svg";
import PostmanIcon from "@/assets/icons/postman.svg";
import GithubIcon from "@/assets/icons/github-brands-solid.svg";
import mapImage from "@/assets/images/my-map.png";
import smileMemoji from "@/assets/images/memoji-smile.png";
import PythonIcon from "@/assets/icons/python.svg";
import PostgreSQL from "@/assets/icons/postgresql.svg";
import MySQL from "@/assets/icons/mysql.svg";
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";
import { motion } from "framer-motion";
import { useRef } from "react";
import memojiImageFormal from "@/assets/images/me-formal.jpg";

const toolboxItems = [
  {
    title: "JavaScript",
    iconType: JavascriptIcon,
  },
  {
    title: "HTML5",
    iconType: HTMLIcon,
  },
  {
    title: "CSS3",
    iconType: CssIcon,
  },
  {
    title: "Tailwind CSS",
    iconType: TailwindIcon,
  },
  {
    title: "React",
    iconType: ReactIcon,
  },
  {
    title: "Github",
    iconType: GithubIcon,
  },
  {
    title: "Katalon",
    iconType: KatalonIcon,
  },
  {
    title: "Playwright",
    iconType: PlaywrightIcon,
  },
  // {
  //   title: "Selenium",
  //   iconType: SeleniumIcon,
  // },
  {
    title: "Postman",
    iconType: PostmanIcon,
  },
  {
    title: "Figma",
    iconType: FigmaIcon,
  },
  {
    title: "Python",
    iconType: PythonIcon,
  },
  {
    title: "PostgreSQL",
    iconType: PostgreSQL,
  },
  {
    title: "MySQL",
    iconType: MySQL,
  },
];

const hobbies = [
  {
    title: "Gaming",
    emoji: "🎮",
    left: "5%",
    top: "5%",
  },
  {
    title: "Badminton",
    emoji: "🏸",
    left: "50%",
    top: "5%",
  },
  {
    title: "Road Trip",
    emoji: "🛣️",
    left: "35%",
    top: "40%",
  },
  {
    title: "Cooking",
    emoji: "🍳",
    left: "10%",
    top: "35%",
  },
  {
    title: "Swimming",
    emoji: "🏊🏽‍♂️",
    left: "70%",
    top: "45%",
  },
  {
    title: "Music",
    emoji: "🎵",
    left: "5%",
    top: "65%",
  },
  {
    title: "Movie",
    emoji: "🎥",
    left: "45%",
    top: "70%",
  },
];

export const AboutSection = () => {
  const constraintRef = useRef(null);
  return (
    <div id="about" className="py-20 lg:py-28">
      <div className="container">
        <ScrollReveal>
          <SectionHeader
            eyebrow="About Me"
            title="A Glimpse of Me"
            description="In this section, you'll find an introduction to who I am, a brief overview of my educational background, and a glimpse into the hobbies and interests that shape my journey"
          />
        </ScrollReveal>
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <ScrollReveal delay={0.2} className="md:col-span-2 lg:col-span-1" width="100%">
              <Card className="h-full flex flex-col">
                <CardHeader
                  title="Who I Am"
                  description="My name is Andi Muh. Aizar Farhan, but you can call me Aizar. I'm a Software Development Engineer In Test (SDET) at Qoala, building scalable automation frameworks and ensuring high product quality. I graduated from BINUS University and completed the RevoU Full-Stack Software Engineering Bootcamp."
                />
                <div className="flex gap-4 px-10 md:px-3 lg:px-4 mt-6 justify-center mb-6">
                  <div className="w-36">
                    <Image src={binusImage} alt="Binus Logo" />
                  </div>
                  <div className="w-24">
                    <Image src={revouImage} alt="RevoU Logo" />
                  </div>
                </div>
              </Card>
            </ScrollReveal>
            <ScrollReveal delay={0.3} className="md:col-span-3 lg:col-span-2" width="100%">
              <Card className="h-[360px] md:h-[530px] lg:h-[600px] overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-30"></div>
                <div className="relative z-10">
                  <CardHeader
                    title={<motion.span
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      className="text-white bg-clip-text inline-block"
                    >
                      My Toolbox
                    </motion.span>}
                    description="Explore the technologies and tools I use to crate all of my
                  projects and exceptional digital excperiences."
                    className=""
                  />
                </div>
                <ToolboxItems
                  items={toolboxItems}
                  className="md:mt-10 lg:mt-16 relative z-10"
                  itemsWrapperClassName="animate-move-left [animation-duration:30s] hover:[animation-play-state:paused]"
                />
                <ToolboxItems
                  items={toolboxItems}
                  className="mt-6 relative z-10"
                  itemsWrapperClassName="animate-move-right [animation-duration:15s] hover:[animation-play-state:paused]"
                />
              </Card>
            </ScrollReveal>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-8">
            <ScrollReveal delay={0.4} className="md:col-span-3 lg:col-span-2" width="100%">
              <Card className="h-[320px] p-0 flex flex-col">
                <CardHeader
                  title="My Hobby"
                  description="Explore my interest and hobbies beyond the digital realm."
                  className="px-6 py-6"
                />
                <div className="relative flex-1" ref={constraintRef}>
                  {hobbies.map((hobby) => (
                    <motion.div
                      key={hobby.title}
                      className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-yellow-200 to-amber-300 rounded-full py-1.5 absolute"
                      style={{
                        left: hobby.left,
                        top: hobby.top,
                      }}
                      drag
                      dragConstraints={constraintRef}
                    >
                      <span className="font-medium text-gray-950">
                        {hobby.title}
                      </span>
                      <span>{hobby.emoji}</span>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </ScrollReveal>
            <ScrollReveal delay={0.5} className="md:col-span-2 lg:col-span-1" width="100%">
              <Card className="h-[320px] p-0 relative">
                <a
                  href="https://maps.app.goo.gl/L5setnKDWxLaNCAM6"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={mapImage}
                    alt="map"
                    className="rounded-xl h-full w-full object-cover object-left-top"
                  />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-24 rounded-full after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-300 to-amber-400 -z-20 animate-ping [animation-duration:2s]"></div>
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-300 to-amber-400 -z-10"></div>
                    <Image
                      src={memojiImageFormal}
                      alt="My Photo"
                      className="size-24 rounded-full object-cover"
                    />
                  </div>
                </a>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </div>
  );
};
