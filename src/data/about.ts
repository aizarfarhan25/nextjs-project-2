import JavascriptIcon from "@/assets/icons/js-brands-solid.svg";
import HTMLIcon from "@/assets/icons/html5-brands-solid.svg";
import CssIcon from "@/assets/icons/css3-brands-solid.svg";
import ReactIcon from "@/assets/icons/react-brands-solid.svg";
import TailwindIcon from "@/assets/icons/tailwind-brand-solid.svg";
import PlaywrightIcon from "@/assets/icons/playwright.svg";
import KatalonIcon from "@/assets/icons/katalon.svg";
import FigmaIcon from "@/assets/icons/figma.svg";
import PostmanIcon from "@/assets/icons/postman.svg";
import GithubIcon from "@/assets/icons/github-brands-solid.svg";
import PythonIcon from "@/assets/icons/python.svg";
import PostgreSQL from "@/assets/icons/postgresql.svg";
import MySQL from "@/assets/icons/mysql.svg";
import type { Hobby, ToolboxItem } from "./types";

export const bio = {
  title: "Who I Am",
  description:
    "My name is Andi Muh. Aizar Farhan, but you can call me Aizar. I'm a Software Development Engineer In Test (SDET) at Qoala, building scalable automation frameworks and ensuring high product quality. I graduated from BINUS University and completed the RevoU Full-Stack Software Engineering Bootcamp.",
};

export const toolboxDescription =
  "Explore the technologies and tools I use to create all of my projects and exceptional digital experiences.";

export const toolboxItems: ToolboxItem[] = [
  { title: "JavaScript", iconType: JavascriptIcon },
  { title: "HTML5", iconType: HTMLIcon },
  { title: "CSS3", iconType: CssIcon },
  { title: "Tailwind CSS", iconType: TailwindIcon },
  { title: "React", iconType: ReactIcon },
  { title: "Github", iconType: GithubIcon },
  { title: "Katalon", iconType: KatalonIcon },
  { title: "Playwright", iconType: PlaywrightIcon },
  { title: "Postman", iconType: PostmanIcon },
  { title: "Figma", iconType: FigmaIcon },
  { title: "Python", iconType: PythonIcon },
  { title: "PostgreSQL", iconType: PostgreSQL },
  { title: "MySQL", iconType: MySQL },
];

export const hobbies: Hobby[] = [
  { title: "Gaming", emoji: "🎮", left: "5%", top: "5%" },
  { title: "Badminton", emoji: "🏸", left: "50%", top: "5%" },
  { title: "Road Trip", emoji: "🛣️", left: "35%", top: "40%" },
  { title: "Cooking", emoji: "🍳", left: "10%", top: "35%" },
  { title: "Swimming", emoji: "🏊🏽‍♂️", left: "70%", top: "45%" },
  { title: "Music", emoji: "🎵", left: "5%", top: "65%" },
  { title: "Movie", emoji: "🎥", left: "45%", top: "70%" },
];
