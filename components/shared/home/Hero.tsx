import Image from "next/image";
import { Button } from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative flex flex-col lg:flex-row justify-center h-screen w-full lg:items-center px-[20px] py-20 sm:px-8 lg:px-[120px] lg:py-[250px]">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/main/hero-main.png"
          alt="Circle Interior"
          fill
          priority
          className="object-cover"
        />
      </div>

      <h1 className="text-[36px] sm:text-[56px] lg:text-[96px] font-bold text-[#F3F3F3]">
        Студия дизайна <br /> интерьера <br /> CIRCLE
      </h1>

      <div className="mt-6 flex flex-col gap-4 sm:mt-10 sm:max-w-sm lg:mt-[150px] lg:-ml-[100px]">
        <p className="text-[16px] sm:text-[16px] font-normal text-[#F3F3F3] leading-tight">
          Современные жилые и коммерческие интерьеры. Авторский подход,
          сопровождение и реализация под ключ.
        </p>
        <Button
          variant="ghost"
          className="h-[60px] text-[16px] font-bold sm:h-[54px] sm:text-[16px]"
        >
          Посмотреть проекты
        </Button>
      </div>
    </section>
  );
}
