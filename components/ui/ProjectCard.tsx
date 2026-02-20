import Image from "next/image";

export type ProjectItem = {
  src: string;
  alt: string;
  aspectRatio: string;
};

type ProjectCardProps = ProjectItem & {
  fillCell?: boolean;
  priority?: boolean;
};

export default function ProjectCard({
  src,
  alt,
  aspectRatio,
  fillCell,
  priority = false,
}: ProjectCardProps) {
  return (
    <div
      className={`relative w-full overflow-hidden rounded-[8px] bg-neutral-900 ${
        fillCell ? "h-full min-h-0" : ""
      }`}
      style={fillCell ? undefined : { aspectRatio }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        loading={priority ? "eager" : "lazy"}
        className="object-cover object-center"
        sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
      />
    </div>
  );
}
