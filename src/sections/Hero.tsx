"use client";
import memojiImageFormal from "@/assets/images/me-formal.jpg";
import Image from "next/image";
import { FlipWords } from "@/components/ui/flip-words";
import { GridBackground } from "@/components/ui/background-boxes";
import { SpotlightNew } from "@/components/ui/spotlight-new";
import { useEffect, useState } from "react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { IconDownload } from "@tabler/icons-react";
import { siteConfig } from "@/data/site";

export const HeroSection = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      id="home"
      className="relative z-10 py-32 md:py-48 lg:py-60 overflow-x-clip"
    >
      <GridBackground className="bg-black" />
      <SpotlightNew
        width={isMobile ? 200 : 560}
        height={isMobile ? 400 : 1380}
        smallWidth={isMobile ? 80 : 240}
        translateY={isMobile ? -80 : -350}
      />
      <div className="container">
        <div className="flex flex-col items-center gap-1.5">
          <ScrollReveal>
            <div className="flex flex-col items-center gap-1.5">
              <Image
                src={memojiImageFormal}
                className="size-24 md:size-32 lg:size-44 rounded-full z-20"
                alt="Picture of me"
              />
              <div className="relative">
                <span className="absolute inset-0 bg-black/60 rounded-lg md:hidden"></span>
                <h1 className="relative font-sans text-white/90 bg-clip-text text-center text-2xl md:text-5xl font-extrabold drop-shadow-lg flex items-center gap-2 pt-4 pb-4">
                  {siteConfig.name}
                </h1>
              </div>
              <div className="bg-gray-900 border border-green-500 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg z-10">
                <div className="bg-green-500 size-2.5 rounded-full relative">
                  <div className="bg-green-500 absolute inset-0 animate-ping-large rounded-full"></div>
                </div>
                <div className="text-xs md:text-sm lg:text-sm font-medium">
                  {siteConfig.availability}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
        <div className="max-w-6xl mx-auto">
          <ScrollReveal delay={0.2}>
            <div className="relative mt-2">
              <span className="absolute inset-0 bg-black/70 rounded-lg md:hidden"></span>
              <div className="font-bold text-2xl font-sans md:text-5xl text-wrap text-center tracking-wide h-[80px] md:h-[120px] flex items-center justify-center relative">
                <FlipWords
                  words={siteConfig.roles}
                  duration={2000}
                  className="text-white"
                />
              </div>
            </div>
            <div className="relative mt-4">
              <span className="absolute inset-0 bg-black/70 rounded-lg md:hidden"></span>
              <p className="relative text-center text-white/60 md:text-lg z-auto">
                {siteConfig.tagline}
              </p>
            </div>
          </ScrollReveal>
        </div>
        <ScrollReveal delay={0.4}>
          <div className="flex flex-col items-center justify-center gap-4 md:flex-row mt-10">
            <a href="#project">
              <button className="inline-flex h-12 min-w-[180px] items-center justify-center rounded-3xl bg-white px-6 font-semibold text-gray-950 transition-transform duration-200 hover:scale-105">
                Explore My Work
              </button>
            </a>
            <a href="#contact">
              <button className="glass-surface inline-flex h-12 min-w-[180px] items-center justify-center gap-2 rounded-3xl px-6 font-semibold text-white transition-transform duration-200 hover:scale-105 hover:border-white/20">
                Let&apos;s Connect
                <span>👋🏽</span>
              </button>
            </a>
            <a
              href={siteConfig.resumePath}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="inline-flex h-12 min-w-[180px] items-center justify-center gap-2 rounded-3xl border border-accent/50 bg-accent-muted px-6 font-semibold text-accent-hover transition-transform duration-200 hover:scale-105">
                My Resume
                <IconDownload className="size-4" stroke={1.75} />
              </button>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};
