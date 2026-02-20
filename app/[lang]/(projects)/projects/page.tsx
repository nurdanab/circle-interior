import ProjectsSection from "@/components/shared/home/ProjectsSection";
import { projects } from "@/lib/constants";

export default async function ProjectsPage() {
  return <ProjectsSection projects={projects} />;
}
