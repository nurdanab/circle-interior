export type ProjectType = "video" | "image";

export type Project = {
  title: string;
  category: string;
  type: ProjectType;
  src: string;
  href: string;
};
