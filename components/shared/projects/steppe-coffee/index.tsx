import Image from "next/image";

type Item = { src: string; alt: string; aspectRatio: string };

const items: Item[] = [
  { src: "/projects-pages/steppe-coffee/1.webp", alt: "1", aspectRatio: "4/3" },
  { src: "/projects-pages/steppe-coffee/2.webp", alt: "2", aspectRatio: "4/3" },
  { src: "/projects-pages/steppe-coffee/3.webp", alt: "3", aspectRatio: "4/3" },
  { src: "/projects-pages/steppe-coffee/4.webp", alt: "4", aspectRatio: "4/3" },
  { src: "/projects-pages/steppe-coffee/5.webp", alt: "5", aspectRatio: "4/3" },
  { src: "/projects-pages/steppe-coffee/6.webp", alt: "6", aspectRatio: "4/3" },
  { src: "/projects-pages/steppe-coffee/7.webp", alt: "7", aspectRatio: "4/3" },
  { src: "/projects-pages/steppe-coffee/8.webp", alt: "8", aspectRatio: "16/9" },
];

function Card({
  src,
  alt,
  aspectRatio,
  fillCell,
}: Item & { fillCell?: boolean }) {
  return (
    <div
      className={`relative w-full overflow-hidden rounded-[8px] bg-black ${
        fillCell ? "h-full min-h-0" : ""
      }`}
      style={fillCell ? undefined : { aspectRatio }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover object-center"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  );
}

export default function SteppeCoffeeProject() {
  return (
    <section className="w-full h-full max-w-[1440px] mx-auto">
      <div>
        <video
          autoPlay
          loop
          playsInline
          preload="metadata"
          src="/projects-pages/steppe-coffee/steppe-coffee-hero.mp4"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="px-4 pt-[40px] pb-[45px] sm:px-6 lg:px-0 lg:pt-[60px]">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid grid-cols-1 gap-4 lg:hidden">
            {items.map((item, i) => (
              <Card key={i} {...item} />
            ))}
          </div>

          <div className="hidden grid-cols-12 gap-5 lg:grid lg:auto-rows-[200px] xl:auto-rows-[240px]">
          <div className="col-span-12 min-h-0 lg:col-span-8 lg:row-span-2">
            <Card {...items[0]} fillCell />
          </div>

          <div className="col-span-6 min-h-0 lg:col-span-4">
            <Card {...items[1]} fillCell />
          </div>

          <div className="col-span-6 min-h-0 lg:col-span-4">
            <Card {...items[2]} fillCell />
          </div>

          <div className="col-span-12 min-h-0 lg:col-span-5 lg:row-span-2">
            <Card {...items[3]} fillCell />
          </div>

          <div className="col-span-12 min-h-0 lg:col-span-7 lg:row-span-2">
            <Card {...items[4]} fillCell />
          </div>

          <div className="col-span-12 min-h-0 lg:col-span-6 lg:row-span-2">
            <Card {...items[5]} fillCell />
          </div>

          <div className="col-span-12 min-h-0 lg:col-span-6 lg:row-span-2">
            <Card {...items[6]} fillCell />
          </div>

          <div className="col-span-12 min-h-0 lg:row-span-3">
            <Card {...items[7]} fillCell />
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}
