import Hero from "@/components/shared/home/Hero";
import About from "@/components/shared/home/About";
import AnimateText from "@/components/shared/home/AnimateText";
import ProjectsSection from "@/components/shared/home/ProjectsSection";
import WorkProcess from "@/components/shared/home/WorkProcess";
import WorkProcessMobile from "@/components/shared/home/WorkProcessMobile";
import ServicesBlock from "@/components/shared/home/ServicesBlock";
import ContactBlock from "@/components/shared/home/ContactBlock";
import { projects } from "@/lib/constants";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <AnimateText />
      <ProjectsSection projects={projects} />
      {/* mobile / desktop variants */}
      <WorkProcessMobile />
      <WorkProcess />
      <ServicesBlock />
      <ContactBlock />
    </>
  );
}
