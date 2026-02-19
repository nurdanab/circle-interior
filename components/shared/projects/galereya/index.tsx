import Image from "next/image";

type Item = { src: string; alt: string; aspectRatio: string };

const items: Item[] = [
  { src: "/projects-pages/galereya/1.webp", alt: "1", aspectRatio: "4/3" },
  { src: "/projects-pages/galereya/2.webp", alt: "2", aspectRatio: "4/3" },
  { src: "/projects-pages/galereya/3.webp", alt: "3", aspectRatio: "4/3" },
  { src: "/projects-pages/galereya/4.webp", alt: "4", aspectRatio: "4/3" },
  { src: "/projects-pages/galereya/5.webp", alt: "5", aspectRatio: "16/9" },
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

export default function GalereyaProject() {
  return (
    <section className="mx-auto h-full w-full max-w-[1440px]">
      <div>
        <video
          autoPlay
          loop
          playsInline
          preload="metadata"
          src="/projects-pages/galereya/galereya-hero.mp4"
          className="h-full w-full object-cover"
        />
      </div>

      <div className="px-4 pt-[40px] pb-[45px] sm:px-6 lg:px-0 lg:pt-[60px]">
        <div className="mx-auto max-w-[1440px]">
          {/* Мобилка: одна колонка, высота по пропорциям фото */}
          <div className="grid grid-cols-1 gap-4 lg:hidden">
            {items.map((item, i) => (
              <Card key={i} {...item} />
            ))}
          </div>

          {/* Десктоп: сетка, расположение как было */}
          <div className="hidden grid-cols-12 gap-5 lg:grid lg:auto-rows-[200px] xl:auto-rows-[240px]">
          <div className="col-span-12 min-h-0 md:col-span-6 lg:row-span-2">
            <Card {...items[0]} fillCell />
          </div>

          <div className="col-span-12 min-h-0 md:col-span-6 lg:row-span-2">
            <Card {...items[1]} fillCell />
          </div>

          <div className="col-span-12 min-h-0 lg:col-span-8 lg:row-span-3">
            <Card {...items[2]} fillCell />
          </div>

          <div className="col-span-12 min-h-0 lg:col-span-4 lg:row-span-3">
            <Card {...items[3]} fillCell />
          </div>

          <div className="col-span-12 min-h-0 lg:row-span-3">
            <Card {...items[4]} fillCell />
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}
