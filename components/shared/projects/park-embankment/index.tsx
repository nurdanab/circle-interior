import Image from "next/image";

type Item = {
  src: string;
  alt: string;
  aspectRatio: string;
};

const items: Item[] = [
  {
    src: "/projects-pages/park-embankment/1.png",
    alt: "1",
    aspectRatio: "16/9",
  },
  {
    src: "/projects-pages/park-embankment/2.png",
    alt: "2",
    aspectRatio: "16/9",
  },
  {
    src: "/projects-pages/park-embankment/3.png",
    alt: "3",
    aspectRatio: "16/9",
  },
  {
    src: "/projects-pages/park-embankment/4.png",
    alt: "4",
    aspectRatio: "16/9",
  },
  {
    src: "/projects-pages/park-embankment/5.png",
    alt: "5",
    aspectRatio: "16/9",
  },
  {
    src: "/projects-pages/park-embankment/6.png",
    alt: "6",
    aspectRatio: "16/9",
  },
  {
    src: "/projects-pages/park-embankment/7.png",
    alt: "7",
    aspectRatio: "16/9",
  },
  {
    src: "/projects-pages/park-embankment/8.png",
    alt: "8",
    aspectRatio: "16/9",
  },
  {
    src: "/projects-pages/park-embankment/9.png",
    alt: "9",
    aspectRatio: "16/9",
  },
  {
    src: "/projects-pages/park-embankment/10.png",
    alt: "10",
    aspectRatio: "16/9",
  },
  {
    src: "/projects-pages/park-embankment/11.png",
    alt: "11",
    aspectRatio: "16/9",
  },
  {
    src: "/projects-pages/park-embankment/12.png",
    alt: "12",
    aspectRatio: "16/9",
  },
  {
    src: "/projects-pages/park-embankment/13.png",
    alt: "13",
    aspectRatio: "16/9",
  },
  {
    src: "/projects-pages/park-embankment/14.png",
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

export default function ParkEmbankmentProject() {
  return (
    <section className="mx-auto h-full w-full max-w-[1440px]">
      {/* HERO — фото как на других страницах */}
      <div className="relative h-screen">
        <Image
          src="/projects-pages/park-embankment/hero-park.png"
          alt="Park embankment"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 flex items-start pt-[120px] pl-[20px] lg:items-center lg:pt-0 lg:pl-[120px]">
          <h1 className="text-[32px] sm:text-[48px] lg:text-[64px] font-black text-white uppercase">
            Park Embankment
          </h1>
        </div>
      </div>

      <div className="px-4 pt-[40px] pb-[45px] sm:px-6 lg:px-0 lg:pt-[60px]">
        {/* MOBILE */}
        <div className="flex flex-col gap-4 lg:hidden">
          {/* 1 */}
          <Card {...items[0]} />

          {/* 2 — 50/50 */}
          <div className="grid grid-cols-2 gap-4 h-[150px]">
            <div className="min-h-0">
              <Card {...items[1]} fillCell />
            </div>
            <div className="min-h-0">
              <Card {...items[2]} fillCell />
            </div>
          </div>

          {/* 3 */}
          <Card {...items[3]} />

          {/* 4 — 70/30 */}
          <div className="grid grid-cols-[7fr_3fr] gap-4 h-[180px]">
            <div className="min-h-0">
              <Card {...items[4]} fillCell />
            </div>
            <div className="min-h-0">
              <Card {...items[5]} fillCell />
            </div>
          </div>

          {/* 5 — 30/70 */}
          <div className="grid grid-cols-[3fr_7fr] gap-4 h-[180px]">
            <div className="min-h-0">
              <Card {...items[6]} fillCell />
            </div>
            <div className="min-h-0">
              <Card {...items[7]} fillCell />
            </div>
          </div>

          {/* 6 */}
          <Card {...items[8]} />

          {/* 7 — 50/50 */}
          <div className="grid grid-cols-2 gap-4 h-[150px]">
            <div className="min-h-0">
              <Card {...items[9]} fillCell />
            </div>
            <div className="min-h-0">
              <Card {...items[10]} fillCell />
            </div>
          </div>

          {/* 8 — 70/30 */}
          <div className="grid grid-cols-[7fr_3fr] gap-4 h-[180px]">
            <div className="min-h-0">
              <Card {...items[11]} fillCell />
            </div>
            <div className="min-h-0">
              <Card {...items[12]} fillCell />
            </div>
          </div>

          {/* 9 */}
          <Card {...items[13]} />
        </div>

        {/* DESKTOP */}
        <div className="hidden w-full min-w-0 lg:flex flex-col gap-5">
          {/* Row 1 — фиксированная высота для одинаковых карточек */}
          <div className="grid min-w-0 grid-cols-[3fr_2fr] gap-5 h-[500px]">
            <div className="min-h-0 w-full">
              <Card {...items[0]} fillCell />
            </div>
            <div className="min-h-0 w-full">
              <Card {...items[1]} fillCell />
            </div>
          </div>

          {/* Row 2 — фиксированная высота для одинаковых карточек */}
          <div className="grid min-w-0 grid-cols-[7fr_13fr] gap-5 h-[500px]">
            <div className="min-h-0 w-full">
              <Card {...items[2]} fillCell />
            </div>
            <div className="min-h-0 w-full">
              <Card {...items[3]} fillCell />
            </div>
          </div>

          {/* Row 3 */}
          <div className="min-w-0">
            <Card {...items[4]} />
          </div>

          {/* Row 4 */}
          <div className="grid min-w-0 grid-cols-2 gap-5">
            <Card {...items[5]} />
            <Card {...items[6]} />
          </div>

          {/* Row 5 — фиксированная высота для одинаковых карточек */}
          <div className="grid min-w-0 grid-cols-[7fr_13fr] gap-5 h-[500px]">
            <div className="min-h-0 w-full">
              <Card {...items[7]} fillCell />
            </div>
            <div className="min-h-0 w-full">
              <Card {...items[8]} fillCell />
            </div>
          </div>

          {/* Row 6 — фиксированная высота, карточки заполняют ячейку */}
          <div className="grid min-w-0 grid-cols-[13fr_7fr] gap-5 h-[clamp(200px,25vw,320px)]">
            <div className="min-h-0 w-full">
              <Card {...items[9]} fillCell />
            </div>
            <div className="min-h-0 w-full">
              <Card {...items[10]} fillCell />
            </div>
          </div>

          {/* Row 7 — фиксированная высота для одинаковых карточек */}
          <div className="grid min-w-0 grid-cols-[7fr_13fr] gap-5 h-[500px]">
            <div className="min-h-0 w-full">
              <Card {...items[11]} fillCell />
            </div>
            <div className="min-h-0 w-full">
              <Card {...items[12]} fillCell />
            </div>
          </div>

          {/* Row 8 */}
          <div className="min-w-0">
            <Card {...items[13]} />
          </div>
        </div>
      </div>
    </section>
  );
}
