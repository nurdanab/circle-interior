import { setRequestLocale } from "next-intl/server";
import Hero from "@/components/shared/home/Hero";
import About from "@/components/shared/home/About";
import AnimateText from "@/components/shared/home/AnimateText";
import AnimateTextMobile from "@/components/shared/home/AnimateTextMobile";
import ProjectsSection from "@/components/shared/home/ProjectsSection";
import WorkProcess from "@/components/shared/home/WorkProcess";
import WorkProcessMobile from "@/components/shared/home/WorkProcessMobile";
import ServicesBlock from "@/components/shared/home/ServicesBlock";
import ContactBlock from "@/components/shared/home/ContactBlock";
import { projects } from "@/lib/constants";

type Props = { params: Promise<{ locale: string }> };

export default async function Home({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Hero />
      
      <div id="about">
        <About />
        <AnimateText />
        <AnimateTextMobile />
      </div>
      
      <div id="projects">
        <ProjectsSection projects={projects} />
      </div>
      
      <div id="process">
        <WorkProcessMobile />
        <WorkProcess />
      </div>
      
      <div id="services">
        <ServicesBlock />
      </div>
      
      <div id="contacts">
        <ContactBlock />
      </div>
    </>
  );
}
