"use client";

import { ParallaxLayer } from "@/components/layout/ParallaxLayer";
import { SectionHeader } from "@/components/SectionHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionShell } from "@/components/layout/SectionShell";
import { ExperienceTimeline } from "@/components/experience/ExperienceTimeline";
import { ExperienceDetailDialog } from "@/components/experience/ExperienceDetailDialog";
import { workExperiences } from "@/data/experience";
import { useModal } from "@/providers/ModalProvider";

export function ExperienceSection() {
  const { experience, isOpen, type, close } = useModal();

  return (
    <SectionShell id="experience">
      <ScrollReveal>
        <ParallaxLayer offset={40}>
          <SectionHeader
            eyebrow="professional journey"
            title="Work Experience"
            description="Here's an overview of my professional experience and the skills I've developed throughout my career."
          />
        </ParallaxLayer>
      </ScrollReveal>

      <ScrollReveal delay={0.2} className="mt-10 md:mt-20">
        <ExperienceTimeline experiences={workExperiences} />
      </ScrollReveal>

      {type === "experience" && experience && (
        <ExperienceDetailDialog
          experience={experience}
          open={isOpen}
          onOpenChange={(open) => !open && close()}
        />
      )}
    </SectionShell>
  );
}
