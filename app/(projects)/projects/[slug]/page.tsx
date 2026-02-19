import type { ComponentType } from "react";
import { notFound } from "next/navigation";
import SteppeCoffeeProject from "@/components/shared/projects/steppe-coffee";
import GalereyaProject from "@/components/shared/projects/galereya";
import HomeBankProject from "@/components/shared/projects/home-bank";
import ParkProject from "@/components/shared/projects/park";
import SiteProject from "@/components/shared/projects/site";

const PROJECT_COMPONENTS: Record<string, ComponentType> = {
  "steppe-coffee": SteppeCoffeeProject,
  "home-bank": HomeBankProject,
  galeriya: GalereyaProject,
  park: ParkProject,
  site: SiteProject,
};

type ProjectSlug = keyof typeof PROJECT_COMPONENTS;

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function Page({ params }: Props) {
  const { slug } = await params;

  const ProjectComponent = PROJECT_COMPONENTS[slug as ProjectSlug];

  if (!ProjectComponent) {
    notFound();
  }

  return <ProjectComponent />;
}
