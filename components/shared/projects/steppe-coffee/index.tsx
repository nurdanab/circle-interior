import ProjectCard, { type ProjectItem } from "@/components/ui/ProjectCard";

const items: ProjectItem[] = [
  { src: "/projects-pages/steppe-coffee/1.webp", alt: "Steppe Coffee 1", aspectRatio: "4/3" },
  { src: "/projects-pages/steppe-coffee/2.webp", alt: "Steppe Coffee 2", aspectRatio: "4/3" },
  { src: "/projects-pages/steppe-coffee/3.webp", alt: "Steppe Coffee 3", aspectRatio: "4/3" },
  { src: "/projects-pages/steppe-coffee/4.webp", alt: "Steppe Coffee 4", aspectRatio: "4/3" },
  { src: "/projects-pages/steppe-coffee/5.webp", alt: "Steppe Coffee 5", aspectRatio: "4/3" },
  { src: "/projects-pages/steppe-coffee/6.webp", alt: "Steppe Coffee 6", aspectRatio: "4/3" },
  { src: "/projects-pages/steppe-coffee/7.webp", alt: "Steppe Coffee 7", aspectRatio: "4/3" },
  { src: "/projects-pages/steppe-coffee/8.webp", alt: "Steppe Coffee 8", aspectRatio: "16/9" },
];

export default function SteppeCoffeeProject() {
  return (
    <section className="w-full h-full max-w-[1440px] mx-auto">
      {/* HERO */}
      <div className="relative h-screen">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          src="/projects-pages/steppe-coffee/steppe-coffee-hero.mp4"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-start pt-[120px] pl-[20px] lg:items-center lg:pt-0 lg:pl-[120px]">
          <h1 className="text-[36px] lg:text-[96px] font-bold text-white uppercase leading-[40px] lg:leading-[99px]">
            Steppe <br /> Coffee
          </h1>
        </div>
      </div>

      {/* GALLERY */}
      <div className="px-4 pt-[24px] pb-[30px] sm:px-6 lg:px-0 lg:pt-[60px] lg:pb-[45px]">
        <div className="mx-auto max-w-[1440px]">
          <div
            className="
              grid  grid-cols-12 gap-2
              sm:gap-3
              lg:gap-5

              auto-rows-[160px]
              lg:auto-rows-[250px]
            "
          >
            {/* 1 — большое */}
            <div className="col-span-12 row-span-2 lg:col-span-8 lg:row-span-2 min-h-0">
              <ProjectCard {...items[0]} fillCell priority />
            </div>

            {/* 2 — 50% */}
            <div className="col-span-6 lg:col-span-4 min-h-0">
              <ProjectCard {...items[1]} fillCell />
            </div>

            {/* 3 — 50% */}
            <div className="col-span-6 lg:col-span-4 min-h-0">
              <ProjectCard {...items[2]} fillCell />
            </div>

            {/* 4 — 50% */}
            <div className="col-span-5 row-span-2 lg:col-span-5 lg:row-span-2 min-h-0">
              <ProjectCard {...items[3]} fillCell />
            </div>

            {/* 5 — 50% */}
            <div className="col-span-7 row-span-2 lg:col-span-7 lg:row-span-2 min-h-0">
              <ProjectCard {...items[4]} fillCell />
            </div>

            {/* 6 — 50% */}
            <div className="col-span-6 row-span-2 lg:col-span-6 lg:row-span-2 min-h-0">
              <ProjectCard {...items[5]} fillCell />
            </div>

            {/* 7 — 50% */}
            <div className="col-span-6 row-span-2 lg:col-span-6 lg:row-span-2 min-h-0">
              <ProjectCard {...items[6]} fillCell />
            </div>

            {/* 8 — финальное широкое */}
            <div className="col-span-12 row-span-2 lg:col-span-12 lg:row-span-3 min-h-0">
              <ProjectCard {...items[7]} fillCell />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
