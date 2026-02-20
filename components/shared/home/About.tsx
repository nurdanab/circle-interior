"use client";

import { useDictionary } from "@/providers/DictionaryProvider";

export default function About() {
  const dict = useDictionary();

  return (
    <section className="w-full px-4 py-16 sm:px-6 lg:px-[120px] lg:py-[160px]">
      <div className="mx-auto flex max-w-[1440px] flex-col items-start gap-8 lg:flex-row lg:gap-20">
        <span className="text-[clamp(32px,5vw,40px)] lg:text-[64px] font-black text-[#191918]">
          {dict.about.title}
        </span>
        <div className="flex w-full flex-col gap-6 text-[clamp(10px,5vw,16px)] lg:w-[65%] lg:text-[24px]">
          <p className="text-[#191918]">{dict.about.paragraph1}</p>
          <p className="text-[#191918]">{dict.about.paragraph2}</p>
        </div>
      </div>
    </section>
  );
}
