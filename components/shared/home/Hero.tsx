"use client";

import { Button } from "@/components/ui/Button";
import { useDictionary } from "@/providers/DictionaryProvider";
import { cdnUrl } from "@/lib/cdn";

export default function Hero() {
  const dict = useDictionary();

  return (
    <section className="relative flex flex-col lg:flex-row justify-center h-screen w-full lg:items-center px-[20px] py-20 sm:px-8 lg:px-[120px] lg:py-[250px]">
      <div className="absolute inset-0 -z-10">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster={cdnUrl("/main/hero-main.webp")}
          src={cdnUrl("/main/hero-main.webm")}
          className="h-full w-full object-cover"
        />
      </div>

      <h1 className="text-[36px] sm:text-[56px] lg:text-[96px] font-bold text-[#F3F3F3]">
        {dict.hero.title1} <br /> {dict.hero.title2} <br /> {dict.hero.title3}
      </h1>

      <div className="mt-6 flex flex-col gap-4 sm:mt-10 sm:max-w-sm lg:mt-[150px] lg:-ml-[100px]">
        <p className="text-[16px] sm:text-[16px] font-normal text-[#F3F3F3] leading-tight">
          {dict.hero.description}
        </p>
        <Button
          variant="ghost"
          className="h-[60px] text-[16px] font-bold sm:h-[54px] sm:text-[16px]"
        >
          {dict.hero.button}
        </Button>
      </div>
    </section>
  );
}
