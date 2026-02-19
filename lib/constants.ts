import { Project } from "@/types/global";

export const nav = [
  { href: "/about", label: "О студии" },
  { href: "/projects", label: "Наши проекты" },
  { href: "/process", label: "Процесс работы" },
  { href: "/services", label: "Услуги" },
  { href: "/contacts", label: "Контакты" },
];

export const projects: Project[] = [
  {
    title: "Steppe Coffee",
    category: "Коммерческое/частное",
    type: "video",
    src: "/main/projects/project1.mp4",
    href: "/projects/steppe-coffee",
  },
  {
    title: "Galeriya",
    category: "Коммерческое/частное",
    type: "video",
    src: "/main/projects/project2.mp4",
    href: "/projects/galeriya",
  },
  {
    title: "Home Bank",
    category: "Коммерческое/частное",
    type: "video",
    src: "/main/projects/project3.mp4",
    href: "/projects/home-bank",
  },
  {
    title: "Sports ground",
    category: "Коммерческое/частное",
    type: "video",
    src: "/main/projects/project4.mp4",
    href: "/projects/sports-ground",
  },
  {
    title: "Park embankment",
    category: "Коммерческое/частное",
    type: "image",
    src: "/main/projects/project5.jpg",
    href: "/projects/park-embankment",
  },
];
