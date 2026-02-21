import { Project } from "@/types/global";
import { cdnUrl } from "@/lib/cdn";

export const projects: Project[] = [
  {
    title: "Steppe Coffee",
    category: "Коммерческое/частное",
    type: "video",
    src: cdnUrl("/main/projects/project1.mp4"),
    href: "/projects/steppe-coffee",
  },
  {
    title: "Galeriya",
    category: "Коммерческое/частное",
    type: "video",
    src: cdnUrl("/main/projects/project2.mp4"),
    href: "/projects/galeriya",
  },
  {
    title: "Home Bank",
    category: "Коммерческое/частное",
    type: "video",
    src: cdnUrl("/main/projects/project3.mp4"),
    href: "/projects/home-bank",
  },
  {
    title: "Sports ground",
    category: "Коммерческое/частное",
    type: "video",
    src: cdnUrl("/main/projects/project4.mp4"),
    href: "/projects/sports-ground",
  },
  {
    title: "Park embankment",
    category: "Коммерческое/частное",
    type: "image",
    src: cdnUrl("/main/projects/project5.jpg"),
    href: "/projects/park-embankment",
  },
];
