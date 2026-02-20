import Image from "next/image";

type Item = {
  src: string;
  alt: string;
  aspectRatio: string;
};

const items: Item[] = [
  {
    src: "/projects-pages/sports-ground/1.webp",
    alt: "1",
    aspectRatio: "16/9",
  },
  { src: "/projects-pages/sports-ground/2.webp", alt: "2", aspectRatio: "4/3" },
  { src: "/projects-pages/sports-ground/3.webp", alt: "3", aspectRatio: "4/3" },
  {
    src: "/projects-pages/sports-ground/4.webp",
    alt: "4",
    aspectRatio: "16/9",
  },
  {
    src: "/projects-pages/sports-ground/5.webp",
    alt: "5",
    aspectRatio: "16/9",
  },
  {
    src: "/projects-pages/sports-ground/6.webp",
    alt: "6",
    aspectRatio: "16/9",
  },
  {
    src: "/projects-pages/sports-ground/7.webp",
    alt: "7",
    aspectRatio: "16/9",
  },
  {
    src: "/projects-pages/sports-ground/8.webp",
    alt: "8",
    aspectRatio: "16/9",
  },
  {
    src: "/projects-pages/sports-ground/9.webp",
    alt: "9",
    aspectRatio: "16/9",
  },
  {
    src: "/projects-pages/sports-ground/10.webp",
    alt: "10",
    aspectRatio: "16/9",
  },
  {
    src: "/projects-pages/sports-ground/11.webp",
    alt: "11",
    aspectRatio: "16/9",
  },
  {
    src: "/projects-pages/sports-ground/12.webp",
    alt: "12",
    aspectRatio: "16/9",
  },
  {
    src: "/projects-pages/sports-ground/13.webp",
    alt: "13",
    aspectRatio: "16/9",
  },
  {
    src: "/projects-pages/sports-ground/14.webp",
    alt: "14",
    aspectRatio: "16/9",
  },
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

export default function SportsGroundProject() {
  return (
    <section className="mx-auto h-full w-full max-w-[1440px]">
      <div className="relative h-screen">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          src="/projects-pages/sports-ground/site-hero.mp4"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 flex items-start pt-[120px] pl-[20px] lg:items-center lg:pt-0 lg:pl-[120px]">
          <h1 className="text-[32px] sm:text-[48px] lg:text-[64px] font-black text-white uppercase">
            Sports Ground
          </h1>
        </div>
      </div>

      <div className="px-4 pt-[40px] pb-[45px] sm:px-6 lg:px-0 lg:pt-[60px]">
        <div className="mx-auto max-w-[1440px]">
          {/* MOBILE */}
          <div className="flex flex-col gap-4 lg:hidden">
            {/* 1 — 70/30 */}
            <div className="grid grid-cols-[7fr_3fr] gap-4 h-[180px]">
              <div className="min-h-0">
                <Card {...items[0]} fillCell />
              </div>
              <div className="min-h-0">
                <Card {...items[1]} fillCell />
              </div>
            </div>

            {/* 2 — 50/50 */}
            <div className="grid grid-cols-2 gap-4 h-[150px]">
              <div className="min-h-0">
                <Card {...items[2]} fillCell />
              </div>
              <div className="min-h-0">
                <Card {...items[3]} fillCell />
              </div>
            </div>

            {/* 3 — full */}
            <Card {...items[4]} />

            {/* 4 — 70/30 */}
            <div className="grid grid-cols-[7fr_3fr] gap-4 h-[180px]">
              <div className="min-h-0">
                <Card {...items[5]} fillCell />
              </div>
              <div className="min-h-0">
                <Card {...items[6]} fillCell />
              </div>
            </div>

            {/* 5 — full */}
            <Card {...items[7]} />

            {/* 6 — 30/70 */}
            <div className="grid grid-cols-[3fr_7fr] gap-4 h-[180px]">
              <div className="min-h-0">
                <Card {...items[8]} fillCell />
              </div>
              <div className="min-h-0">
                <Card {...items[9]} fillCell />
              </div>
            </div>

            {/* 7 — 50/50 */}
            <div className="grid grid-cols-2 gap-4 h-[150px]">
              <div className="min-h-0">
                <Card {...items[10]} fillCell />
              </div>
              <div className="min-h-0">
                <Card {...items[11]} fillCell />
              </div>
            </div>

            {/* 8 — full */}
            <Card {...items[12]} />

            {/* 9 — full */}
            <Card {...items[13]} />
          </div>

          {/* DESKTOP */}
          <div className="hidden w-full lg:flex flex-col gap-5">
            {/* ROW 1 — 65 / 35 */}
            <div className="grid grid-cols-[13fr_7fr] gap-5 h-[500px]">
              <div className="min-h-0">
                <Card {...items[0]} fillCell />
              </div>
              <div className="min-h-0">
                <Card {...items[1]} fillCell />
              </div>
            </div>

            {/* ROW 2 — (50/50 in column) + 1 */}
            <div className="grid grid-cols-[1fr_1fr] gap-5 h-[500px]">
              <div className="grid grid-rows-2 gap-5 min-h-0">
                <div className="min-h-0">
                  <Card {...items[2]} fillCell />
                </div>
                <div className="min-h-0">
                  <Card {...items[3]} fillCell />
                </div>
              </div>
              <div className="min-h-0">
                <Card {...items[4]} fillCell />
              </div>
            </div>

            {/* ROW 3 — 60 / 40 */}
            <div className="grid grid-cols-[3fr_2fr] gap-5 h-[500px]">
              <div className="min-h-0">
                <Card {...items[5]} fillCell />
              </div>
              <div className="min-h-0">
                <Card {...items[6]} fillCell />
              </div>
            </div>

            {/* ROW 4 — 35 / 65 */}
            <div className="grid grid-cols-[7fr_13fr] gap-5 h-[500px]">
              <div className="min-h-0">
                <Card {...items[7]} fillCell />
              </div>
              <div className="min-h-0">
                <Card {...items[8]} fillCell />
              </div>
            </div>

            {/* ROW 5 — 65 / 35 */}
            <div className="grid grid-cols-[13fr_7fr] gap-5 h-[500px]">
              <div className="min-h-0">
                <Card {...items[9]} fillCell />
              </div>
              <div className="min-h-0">
                <Card {...items[10]} fillCell />
              </div>
            </div>

            {/* ROW 6 — 100% */}
            <div className="h-[500px]">
              <Card {...items[11]} fillCell />
            </div>

            {/* ROW 7 — 50 / 50 */}
            <div className="grid grid-cols-2 gap-5 h-[500px]">
              <div className="min-h-0">
                <Card {...items[12]} fillCell />
              </div>
              <div className="min-h-0">
                <Card {...items[13]} fillCell />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
