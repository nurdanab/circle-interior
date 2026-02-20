import { setRequestLocale } from "next-intl/server";
import ProjectsSection from "@/components/shared/home/ProjectsSection";
import { projects } from "@/lib/constants";

type Props = { params: Promise<{ locale: string }> };

export default async function ProjectsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <ProjectsSection projects={projects} />;
}
