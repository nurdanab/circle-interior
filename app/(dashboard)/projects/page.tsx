import ProjectsSection from "@/components/shared/home/ProjectsSection";
import styles from "./project.module.scss";
import { projects } from "@/lib/constants";

export default async function ProjectsPage() {
  return (
    <div className={styles.projectWrapper}>
      <ProjectsSection projects={projects} />
    </div>
  );
}
