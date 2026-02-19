import Image from "next/image";
import { Button } from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative h-screen max-h-[870px] w-full flex items-center px-[120px] py-[250px]">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/main/hero-main.png"
          alt="Circle Interior"
          fill
          priority
          className="object-cover"
        />
      </div>

      <h1 className="text-[96px] font-bold text-[#F3F3F3]">
        Студия дизайна <br /> интерьера <br /> CIRCLE
      </h1>

      <div className="flex flex-col gap-4 mt-[150px] -ml-[100px]">
        <p className="text-[16px] font-normal text-[#F3F3F3] max-w-[350] leading-tight">
          Современные жилые и коммерческие интерьеры. Авторский подход,
          сопровождение и реализация под ключ.
        </p>
        <Button variant="ghost" className="h-[54px] text-[16px] font-bold">
          Посмотреть проекты
        </Button>
      </div>
    </section>
  );
}
