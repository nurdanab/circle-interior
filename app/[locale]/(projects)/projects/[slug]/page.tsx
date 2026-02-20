import type { ComponentType } from "react";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import SteppeCoffeeProject from "@/components/shared/projects/steppe-coffee";
import GalereyaProject from "@/components/shared/projects/galereya";
import HomeBankProject from "@/components/shared/projects/home-bank";
import ParkEmbankmentProject from "@/components/shared/projects/park-embankment";
import SportsGroundProject from "@/components/shared/projects/sports-ground";

const PROJECT_COMPONENTS: Record<string, ComponentType> = {
  "steppe-coffee": SteppeCoffeeProject,
  "home-bank": HomeBankProject,
  "sports-ground": SportsGroundProject,
  "galeriya": GalereyaProject,
  "park-embankment": ParkEmbankmentProject,
};

type ProjectSlug = keyof typeof PROJECT_COMPONENTS;

type Props = {
  params: Promise<{ slug: string; locale: string }>;
};

export default async function Page({ params }: Props) {
  const { slug, locale } = await params;
  setRequestLocale(locale);

  const ProjectComponent = PROJECT_COMPONENTS[slug as ProjectSlug];

  if (!ProjectComponent) {
    notFound();
  }

  return <ProjectComponent />;
}
