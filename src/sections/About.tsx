import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import StarIcon from "@/assets/icons/star.svg";
// import binusImage from "@/assets/images/binus logo.png"
import binusImage from "@/assets/images/Logo-Binus-University-Universitas-Bina-Nusantara-Original-PNG.png";
import Image from "next/image";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import CssIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import TailwindIcon from "@/assets/icons/tailwind-svgrepo-com.svg";
import GithubIcon from "@/assets/icons/github.svg";
import { TechIcon } from "@/components/TechIcon";
import  mapImage from "@/assets/images/my-map.png"
import smileMemoji from "@/assets/images/memoji-smile.png"

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
];

const hobbies = [
  {
    title: 'Gaming',
    emoji: '🎮',
  },
  {
    title: 'Badminton',
    emoji: '🏸',
  },
  {
    title: 'Cooking',
    emoji: '🍳',
  },
  {
    title: 'Swimming',
    emoji: '🏊🏽‍♂️',
  },
  {
    title: 'Music',
    emoji: '🎵',
  },
  {
    title: 'Movie',
    emoji: '🎥',
  },
  {
    title: 'Road Trip',
    emoji: '🛣️',
  },
]

export const AboutSection = () => {
  return (
    <div className="pb-96">
      <SectionHeader
        eyebrow="About Me"
        title="A Glimpse of Me"
        description="In this section, you'll find an introduction to who I am, a brief overview of my educational background, and a glimpse into the hobbies and interests that shape my journey"
      />
      <div>
        <Card>
          <div>
            <StarIcon />
            <h3>Who I Am and My Academic Path</h3>
            <p>
              My full name is Andi Muh. Aizar Farhan, but you can call me Aizar. I am a Fresh Graduate with a Bachelor's Degree in Information Systems Accounting & Auditing from Bina Nusantara University with a GPA of 3.57. I have a strong interest in technology, especially in system development and design. I have strong knowledge in the accounting and auditing field. And I also participate in the Full Stack - Software Engineering boot camp at RevoU.
            </p>
            <Image src={binusImage} alt="Binus Logo" />
          </div>
        </Card>
        <Card>
          <div>
            <StarIcon />
            <h3>My Toolbox</h3>
            <p>
              Explore the techonolies and tools I use to crate all of my
              projects and exceptional digital exceriences
            </p>
          </div>
          <div>
            {toolboxItems.map(item => (
              <div key={item.title}>
                <TechIcon component={item.iconType} />
                <span>{item.title}</span>
              </div>
            ))}
          </div>
        </Card>
        <Card>
        <div>
            <StarIcon />
            <h3>My Hobby</h3>
            <p>
              Explore my interest and hobbies beyond the digital realm
            </p>
          </div>
        </Card>
        <Card>
          <Image src={mapImage} alt="map" />
          <Image src={smileMemoji} alt="emoji" />
        </Card>
      </div>
    </div>
  );
};
