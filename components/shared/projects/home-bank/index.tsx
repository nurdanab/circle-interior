import Image from "next/image";

type Item = {
  src: string;
  alt: string;
  aspectRatio: string;
};

const items: Item[] = [
  { src: "/projects-pages/homeBank/1.webp", alt: "1", aspectRatio: "4/3" },
  { src: "/projects-pages/homeBank/2.webp", alt: "2", aspectRatio: "4/3" },
  { src: "/projects-pages/homeBank/3.webp", alt: "3", aspectRatio: "4/3" },
  { src: "/projects-pages/homeBank/4.webp", alt: "4", aspectRatio: "4/3" },
  { src: "/projects-pages/homeBank/5.webp", alt: "5", aspectRatio: "16/9" },
  { src: "/projects-pages/homeBank/6.webp", alt: "6", aspectRatio: "4/3" },
  { src: "/projects-pages/homeBank/7.webp", alt: "7", aspectRatio: "4/3" },
  { src: "/projects-pages/homeBank/8.webp", alt: "8", aspectRatio: "16/9" },
  { src: "/projects-pages/homeBank/9.webp", alt: "9", aspectRatio: "4/3" },
  { src: "/projects-pages/homeBank/10.webp", alt: "10", aspectRatio: "4/3" },
  { src: "/projects-pages/homeBank/11.webp", alt: "11", aspectRatio: "16/9" },
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

export default function HomeBankProject() {
  return (
    <section className="mx-auto w-full max-w-[1440px]">
      {/* HERO VIDEO */}
      <div>
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          src="/projects-pages/homeBank/homeBank-hero.mp4"
          className="h-full w-full object-cover"
        />
      </div>

      <div className="px-4 pt-[40px] pb-[45px] sm:px-6 lg:px-0 lg:pt-[60px]">
        <div className="mx-auto max-w-[1440px]">
          {/* MOBILE */}
          <div className="grid grid-cols-1 gap-4 lg:hidden">
            {items.map((item, i) => (
              <Card key={i} {...item} />
            ))}
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
