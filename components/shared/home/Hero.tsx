import Image from "next/image";
import { Button } from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative flex h-screen max-h-[870px] w-full items-center px-4 py-20 sm:px-8 lg:px-[120px] lg:py-[250px]">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/main/hero-main.png"
          alt="Circle Interior"
          fill
          priority
          className="object-cover"
        />
      </div>

      <h1 className="text-[40px] sm:text-[56px] lg:text-[96px] font-bold text-[#F3F3F3] max-w-[280px] sm:max-w-none">
        Студия дизайна <br /> интерьера <br /> CIRCLE
      </h1>

      <div className="mt-6 flex max-w-xs flex-col gap-4 sm:mt-10 sm:max-w-sm lg:mt-[150px] lg:-ml-[100px]">
        <p className="text-[14px] sm:text-[16px] font-normal text-[#F3F3F3] leading-tight">
          Современные жилые и коммерческие интерьеры. Авторский подход,
          сопровождение и реализация под ключ.
        </p>
        <Button
          variant="ghost"
          className="h-[48px] text-[14px] font-bold sm:h-[54px] sm:text-[16px]"
        >
          Посмотреть проекты
        </Button>
      </div>
    </section>
  );
}
