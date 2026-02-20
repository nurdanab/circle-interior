import Image from "next/image";

type Item = {
  src: string;
  alt: string;
  aspectRatio: string;
};

const items: Item[] = [
  { src: "/projects-pages/homeBank/1.webp", alt: "Home Bank 1", aspectRatio: "4/3" },
  { src: "/projects-pages/homeBank/2.webp", alt: "Home Bank 2", aspectRatio: "4/3" },
  { src: "/projects-pages/homeBank/3.webp", alt: "Home Bank 3", aspectRatio: "4/3" },
  { src: "/projects-pages/homeBank/4.webp", alt: "Home Bank 4", aspectRatio: "4/3" },
  { src: "/projects-pages/homeBank/5.webp", alt: "Home Bank 5", aspectRatio: "16/9" },
  { src: "/projects-pages/homeBank/6.webp", alt: "Home Bank 6", aspectRatio: "4/3" },
  { src: "/projects-pages/homeBank/7.webp", alt: "Home Bank 7", aspectRatio: "4/3" },
  { src: "/projects-pages/homeBank/8.webp", alt: "Home Bank 8", aspectRatio: "16/9" },
  { src: "/projects-pages/homeBank/9.webp", alt: "Home Bank 9", aspectRatio: "4/3" },
  { src: "/projects-pages/homeBank/10.webp", alt: "Home Bank 10", aspectRatio: "4/3" },
  { src: "/projects-pages/homeBank/11.webp", alt: "Home Bank 11", aspectRatio: "16/9" },
];

function Card({
  src,
  alt,
  aspectRatio,
  fillCell,
  priority = false,
}: Item & { fillCell?: boolean; priority?: boolean }) {
  return (
    <div
      className={`relative w-full overflow-hidden rounded-[8px] bg-neutral-800 ${
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

export default function HomeBankProject() {
  return (
    <section className="mx-auto w-full max-w-[1440px]">
      {/* HERO VIDEO */}
      <div className="relative h-screen">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          src="/projects-pages/homeBank/homeBank-hero.mp4"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 flex items-start pt-[120px] pl-[20px] lg:items-center lg:pt-0 lg:pl-[120px]">
          <h1 className="text-[32px] sm:text-[48px] lg:text-[64px] font-black text-white uppercase">
            Home Bank
          </h1>
        </div>
      </div>

      <div className="px-4 pt-[40px] pb-[45px] sm:px-6 lg:px-0 lg:pt-[60px]">
        <div className="mx-auto max-w-[1440px]">
          {/* MOBILE */}
          <div className="flex flex-col gap-4 lg:hidden">
            {/* 1 */}
            <Card {...items[0]} />

            {/* 2 — сложный ряд */}
            <div className="grid grid-cols-2 gap-4 h-[280px]">
              {/* левая половина — две картинки вертикально */}
              <div className="flex flex-col gap-4 min-h-0">
                <div className="flex-1 min-h-0">
                  <Card {...items[1]} fillCell />
                </div>
                <div className="flex-1 min-h-0">
                  <Card {...items[2]} fillCell />
                </div>
              </div>

              {/* правая половина */}
              <div className="min-h-0">
                <Card {...items[3]} fillCell />
              </div>
            </div>

            {/* 3 */}
            <Card {...items[4]} />

            {/* 4 */}
            <Card {...items[5]} />

            {/* 5 — 70 / 30 */}
            <div className="grid grid-cols-[7fr_3fr] gap-4 h-[180px]">
              <div className="min-h-0">
                <Card {...items[6]} fillCell />
              </div>
              <div className="min-h-0">
                <Card {...items[7]} fillCell />
              </div>
            </div>

            {/* 6 — 30 / 70 */}
            <div className="grid grid-cols-[3fr_7fr] gap-4 h-[180px]">
              <div className="min-h-0">
                <Card {...items[8]} fillCell />
              </div>
              <div className="min-h-0">
                <Card {...items[9]} fillCell />
              </div>
            </div>

            {/* 7 */}
            <Card {...items[10]} />
          </div>

          {/* DESKTOP */}
          <div className="hidden lg:grid grid-cols-12 gap-5 lg:auto-rows-[200px] xl:auto-rows-[240px]">
            {/* ROW 1 */}
            <div className="col-span-12 lg:col-span-4 lg:row-span-2">
              <Card {...items[0]} fillCell />
            </div>

            <div className="col-span-12 lg:col-span-8 lg:row-span-2">
              <Card {...items[1]} fillCell />
            </div>

            {/* ROW 2 */}
            <div className="col-span-12 lg:col-span-6 lg:row-span-2">
              <Card {...items[2]} fillCell />
            </div>

            <div className="col-span-12 lg:col-span-6 lg:row-span-2">
              <Card {...items[3]} fillCell />
            </div>

            {/* ROW 3 */}
            <div className="col-span-12 lg:row-span-3">
              <Card {...items[4]} fillCell />
            </div>

            {/* ROW 4 */}
            <div className="col-span-12 lg:col-span-6 lg:row-span-2">
              <Card {...items[5]} fillCell />
            </div>

            <div className="col-span-12 lg:col-span-6 lg:row-span-2">
              <Card {...items[6]} fillCell />
            </div>

            {/* ROW 5 */}
            <div className="col-span-12 lg:col-span-6 lg:row-span-2">
              <Card {...items[7]} fillCell />
            </div>

            <div className="col-span-12 lg:col-span-6 lg:row-span-2">
              <Card {...items[8]} fillCell />
            </div>

            {/* ROW 6 */}
            <div className="col-span-12 lg:row-span-3">
              <Card {...items[9]} fillCell />
            </div>

            {/* ROW 7 */}
            <div className="col-span-12 lg:row-span-3">
              <Card {...items[10]} fillCell />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
