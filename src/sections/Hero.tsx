import memojiImage from "@/assets/images/me.jpg";
import memojiImageFormal from "@/assets/images/me-formal.jpg";
import Image from "next/image";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import grainImage from "@/assets/images/grain.jpg";
import StartIcon from "@/assets/icons/star.svg";
import SparkleIcon from "@/assets/icons/sparkle.svg";
import { HeroOrbit } from "@/components/HeroOrbit";
import { FlipWords } from "@/components/ui/flip-words";
import { Spotlight } from "../components/ui/Spotlight";
export const HeroSection = () => {
  return (
    <div
      id="home"
      className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip"
    >
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
        <div
          className="absolute inset-0 -z-30 opacity-5"
          style={{
            backgroundImage: `url(${grainImage.src})`,
          }}
        ></div>
        <div className="size-[620px] hero-ring"></div>
        <div className="size-[820px] hero-ring"></div>
        <div className="size-[1020px] hero-ring"></div>
        <div className="size-[1220px] hero-ring"></div>
        {/* <HeroOrbit size={800} rotation={-72}>
        <StartIcon className="size-28 text-amber-300" />
        </HeroOrbit>
        <HeroOrbit size={550} rotation={20}>
          <StartIcon className="size-12 text-amber-300" />
        </HeroOrbit>
        <HeroOrbit size={590} rotation={98}>
          <StartIcon className="size-8 text-amber-300" />
        </HeroOrbit>
        <HeroOrbit size={430} rotation={-14}>
          <SparkleIcon className="size-8 text-amber-300/20" />
        </HeroOrbit>
        <HeroOrbit size={440} rotation={79}>
          <SparkleIcon className="size-5 text-amber-300/20" />
        </HeroOrbit>
        <HeroOrbit size={530} rotation={178}>
          <SparkleIcon className="size-10 text-amber-300/20" />
        </HeroOrbit>
        <HeroOrbit size={710} rotation={144}>
          <SparkleIcon className="size-14 text-amber-300/20" />
        </HeroOrbit> */}
      </div>
      <div className="container">
        {/* <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        /> */}
        {/* <Spotlight
          className="-top-40 right-0 md:right-60 md:-top-20"
          fill="white"
        /> */}
        <div className="flex flex-col items-center gap-1.5">
          <Image
            src={memojiImageFormal}
            className="size-24 md:size-32 lg:size-44 rounded-full z-20"
            alt="Picture of me"
          />
          <div className="bg-gray-900 border border-amber-400 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
            <div className="bg-green-500 size-2.5 rounded-full relative">
              <div className="bg-green-500 absolute inset-0 animate-ping-large rounded-full"></div>
            </div>
            <div className="text-xs md:text-sm lg:text-sm font-medium">
              Available for new jobs and projects
            </div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto">
          <div className="font-bold text-2xl font-satoshi md:text-5xl text-center mt-8 tracking-wide">
            <FlipWords
              words={["Quality Assurance", "Front-End Developer"]}
              duration={2000}
            />
          </div>
          {/* <h1 className="font-bold text-3xl font-serif md:text-5xl text-center mt-8 tracking-wide">
            Front-End Developer and Quality Assurance
          </h1> */}
          <h3 className="font-bold text-lg md:text-2xl text-center mt-4 tracking-wide text-amber-400">
            (Insya Allah Full-Stack)
          </h3>
          <p className="mt-4 text-center text-white/60 md:text-lg">
            Final Year Student at Binus University and currently doing my
            internship program at
            <span className="p-1.5 text-emerald-500 font-bold">
              PT. Kalbe Farma Tbk,
            </span>
            until February 2025
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
          <a href="#project" className="z-10">
            <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl">
              <span className="font-semibold">Explore My Work</span>
              <ArrowDown className="size-4" />
            </button>
          </a>
          <a href="#contact" className="z-10">
            <button className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 px-6 h-12 rounded-xl">
              <span>👋🏽</span>
              <span className="font-semibold">Let&apos;s Connect</span>
            </button>
          </a>
        </div>
      </div>
      {/* <div className="flex justify-center">
        <FlipWords
          words={["test ini adalah test", "asdasda"]}
          duration={1000}
        />
      </div> */}
    </div>
  );
};
