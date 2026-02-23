import { Project } from "@/types/global";
import { cdnUrl } from "@/lib/cdn";

export const projects: Project[] = [
  {
    title: "Steppe Coffee",
    category: "Коммерческое/частное",
    type: "video",
    src: cdnUrl("/main/projects/project1.webm"),
    href: "/projects/steppe-coffee",
  },
  {
    title: "Galeriya",
    category: "Коммерческое/частное",
    type: "video",
    src: cdnUrl("/main/projects/project2.webm"),
    href: "/projects/galeriya",
  },
  {
    title: "Home Bank",
    category: "Коммерческое/частное",
    type: "video",
    src: cdnUrl("/main/projects/project3.webm"),
    href: "/projects/home-bank",
  },
  {
    title: "Sports ground",
    category: "Коммерческое/частное",
    type: "video",
    src: cdnUrl("/main/projects/project4.webm"),
    href: "/projects/sports-ground",
  },
  {
    title: "Park embankment",
    category: "Коммерческое/частное",
    type: "image",
    src: cdnUrl("/main/projects/project5.webp"),
    href: "/projects/park-embankment",
  },
];
