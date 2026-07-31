"use client";

import Image from "next/image";
import binusImage from "@/assets/images/Logo-Binus-University-Universitas-Bina-Nusantara-Original-PNG.png";
import revouImage from "@/assets/images/revou logo.png";
import mapImage from "@/assets/images/my-map.png";
import memojiImageFormal from "@/assets/images/me-formal.jpg";
import { SectionHeader } from "@/components/SectionHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionShell } from "@/components/layout/SectionShell";
import { HobbyCloud } from "@/components/about/HobbyCloud";
import { bio, hobbies, toolboxDescription, toolboxItems } from "@/data/about";
import { siteConfig } from "@/data/site";

export function AboutSection() {
  return (
    <SectionShell id="about">
      <ScrollReveal>
        <SectionHeader
          eyebrow="About Me"
          title="A Glimpse of Me"
          description="In this section, you'll find an introduction to who I am, a brief overview of my educational background, and a glimpse into the hobbies and interests that shape my journey."
        />
      </ScrollReveal>

      <div className="mt-16 grid grid-cols-1 gap-8 md:auto-rows-fr md:grid-cols-2 lg:mt-20">
        <ScrollReveal delay={0.1} className="h-full">
          <GlassCard className="flex h-full min-h-[400px] flex-col p-0 md:min-h-0 md:h-[400px]">
            <CardHeader title={bio.title} description={bio.description} />
            <div className="mt-auto border-t border-white/5 px-6 pb-6 pt-5 md:px-10 flex items-center justify-center">
              <div className="flex flex-wrap items-center gap-4">
                <div className="w-28 shrink-0">
                  <Image
                    src={binusImage}
                    alt="BINUS University"
                    className="h-auto w-full object-contain"
                  />
                </div>
                <div className="w-16 shrink-0">
                  <Image
                    src={revouImage}
                    alt="RevoU"
                    className="h-auto w-full object-contain"
                  />
                </div>
              </div>
            </div>
          </GlassCard>
        </ScrollReveal>

        <ScrollReveal delay={0.2} className="h-full">
          <GlassCard className="flex h-full min-h-[400px] flex-col overflow-hidden p-6 md:min-h-0 md:h-[400px] md:p-8">
            <CardHeader
              title="My Toolbox"
              description={toolboxDescription}
              className="p-0 md:p-0"
            />
            <ToolboxItems
              items={toolboxItems}
              className="relative z-10 mt-8"
              itemsWrapperClassName="animate-move-left [animation-duration:30s] hover:[animation-play-state:paused]"
            />
            <ToolboxItems
              items={toolboxItems}
              className="relative z-10 mt-6"
              itemsWrapperClassName="animate-move-right [animation-duration:15s] hover:[animation-play-state:paused]"
            />
          </GlassCard>
        </ScrollReveal>

        <ScrollReveal delay={0.3} className="h-full">
          <GlassCard className="flex h-[360px] flex-col overflow-hidden p-0">
            <CardHeader
              title="My Hobby"
              description="Explore my interests and hobbies beyond the digital realm."
              className="shrink-0 px-6 py-6"
            />
            <HobbyCloud hobbies={hobbies} />
          </GlassCard>
        </ScrollReveal>

        <ScrollReveal delay={0.4} className="h-full">
          <GlassCard className="relative h-[360px] overflow-hidden p-0">
            <a
              href={siteConfig.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="relative block h-full w-full"
            >
              <Image
                src={mapImage}
                alt="Location map"
                fill
                className="object-cover object-left-top"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute left-1/2 top-1/2 size-24 -translate-x-1/2 -translate-y-1/2 rounded-full after:absolute after:inset-0 after:rounded-full after:outline after:outline-2 after:-outline-offset-2 after:outline-gray-950/30">
                <div className="absolute inset-0 -z-20 animate-ping rounded-full bg-accent [animation-duration:2s]" />
                <div className="absolute inset-0 -z-10 rounded-full bg-accent" />
                <Image
                  src={memojiImageFormal}
                  alt="My Photo"
                  className="size-24 rounded-full object-cover"
                />
              </div>
            </a>
          </GlassCard>
        </ScrollReveal>
      </div>
    </SectionShell>
  );
}
