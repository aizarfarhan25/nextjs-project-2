import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/ProjectsSection";
import { ExperienceSection } from "@/sections/ExperienceSection";
import { AboutSection } from "@/sections/AboutSection";
import { ContactFooter } from "@/sections/ContactFooter";

export default function Home() {
  return (
    <div className="relative">
      <Header />
      <HeroSection />
      <ProjectsSection />
      <ExperienceSection />
      <AboutSection />
      <ContactFooter />
    </div>
  );
}
