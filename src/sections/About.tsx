"use client";
import { SectionHeader } from "@/components/SectionHeader";
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
// import SeleniumIcon from "@/assets/icons/selenium.svg";
import FigmaIcon from "@/assets/icons/figma.svg";
import PostmanIcon from "@/assets/icons/postman.svg";
import GithubIcon from "@/assets/icons/github-brands-solid.svg";
import mapImage from "@/assets/images/my-map.png";
import smileMemoji from "@/assets/images/memoji-smile.png";
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";
import { motion } from "framer-motion";
import { useRef } from "react";

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
  // {
  //   title: "Katalon",
  //   iconType: KatalonIcon,
  // },
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
        <SectionHeader
          eyebrow="About Me"
          title="A Glimpse of Me"
          description="In this section, you'll find an introduction to who I am, a brief overview of my educational background, and a glimpse into the hobbies and interests that shape my journey"
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[395px] md:h-[475px] lg:h-[550px] md: md:col-span-2 lg:col-span-1">
              <CardHeader
                title="Who I Am"
                description="My full name is Andi Muh. Aizar Farhan, but you can call me
                Aizar. I am a Fresh Graduate with a Bachelor's Degree in
                Information Systems Accounting & Auditing from Bina Nusantara
                University with a GPA of 3.57. And I am currently participate in the Full Stack - Software Engineering boot camp at RevoU."
              />
              <div className="flex gap-4 px-10 md:px-3 lg:px-4">
                <div className="w-40 mx-auto mt-2 md:mt-0">
                  <Image src={binusImage} alt="Binus Logo" />
                </div>
                <div className="w-28 mx-auto mt-2 md:mt-0">
                  <Image src={revouImage} alt="RevoU Logo" />
                </div>
              </div>
            </Card>
            <Card className="h-[320px] md:h-[475px] lg:h-[550px] md:col-span-3 lg:col-span-2">
              <CardHeader
                title="My Toolbox"
                description="Explore the technologies and tools I use to crate all of my
                projects and exceptional digital excperiences."
                className=""
              />
              <ToolboxItems
                items={toolboxItems}
                className="md:mt-10 lg:mt-16"
                itemsWrapperClassName="animate-move-left [animation-duration:30s]"
              />
              <ToolboxItems
                items={toolboxItems}
                className="mt-6"
                itemsWrapperClassName="animate-move-right [animation-duration:15s]"
              />
            </Card>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-8">
            <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
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
            <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
              <Image
                src={mapImage}
                alt="map"
                className="rounded-xl h-full w-full object-cover object-left-top"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full  after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-300 to-amber-400 -z-20 animate-ping [animation-duration:2s]"></div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-300 to-amber-400 -z-10"></div>
                <Image src={smileMemoji} alt="emoji" className="size-20" />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
