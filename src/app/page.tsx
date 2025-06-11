import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { ProjectsTabs } from "@/sections/ProjectsTabs";
import { AboutSection } from "@/sections/About";
import { ContactSection } from "@/sections/Contact";
import { TapeSection } from "@/sections/Tape";
import { TestimonialsSection } from "@/sections/Testimonials";
import { Footer } from "@/sections/Footer";

export default function Home() {
  return (
    <>
      <div className="relative">
        <Header />
        <HeroSection />
        <ProjectsTabs />
        <TapeSection />
        {/* <TestimonialsSection /> */}
        <AboutSection />
        <ContactSection />
        <Footer />
      </div>
    </>
  );
}
