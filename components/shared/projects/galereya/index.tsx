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
        sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
      />
    </div>
  );
}

export default function GalereyaProject() {
  return (
    <section className="mx-auto h-full w-full max-w-[1440px]">
      {/* HERO */}
      <div className="relative h-screen">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          src="/projects-pages/galereya/galereya-hero.mp4"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 flex items-start pt-[120px] pl-[20px] lg:items-center lg:pt-0 lg:pl-[120px]">
          <h1 className="text-[32px] sm:text-[48px] lg:text-[64px] font-black text-white uppercase">
            Galereya
          </h1>
        </div>
      </div>

      <div className="px-4 pt-[40px] pb-[45px] sm:px-6 lg:px-0 lg:pt-[60px]">
        <div className="mx-auto max-w-[1440px]">
          {/* MOBILE */}
          <div className="flex flex-col gap-4 lg:hidden">
            {/* 1 ряд — одно фото */}
            <div>
              <Card {...items[0]} />
            </div>

            {/* 2 ряд — 70 / 30 */}
            <div className="grid grid-cols-[7fr_3fr] gap-4 h-[200px]">
              <div className="min-h-0">
                <Card {...items[1]} fillCell />
              </div>
              <div className="min-h-0">
                <Card {...items[2]} fillCell />
              </div>
            </div>

            {/* 3 ряд — одно */}
            <div>
              <Card {...items[3]} />
            </div>

            {/* 4 ряд — одно */}
            <div>
              <Card {...items[4]} />
            </div>
          </div>

          {/* DESKTOP — НЕ ТРОГАЕМ */}
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
