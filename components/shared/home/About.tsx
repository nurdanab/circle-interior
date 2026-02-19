import React from "react";

export default function About() {
  return (
    <section className="w-full px-4 py-16 sm:px-6 lg:px-[120px] lg:py-[160px]">
      <div className="mx-auto flex max-w-[1440px] flex-col items-start gap-8 lg:flex-row lg:gap-20">
        <span className="text-[40px] sm:text-[48px] lg:text-[64px] font-black text-[#191918]">
          О студии
        </span>
        <div className="flex w-full flex-col gap-4 text-[16px] sm:text-[18px] lg:w-[65%] lg:text-[24px]">
          <p className="text-[#191918]">
            CIRCLE — студия дизайна и реализации интерьеров. Мы создаём
            продуманные жилые и коммерческие пространства — от концепции до
            полного воплощения под ключ.
          </p>
          <p className="text-[#191918]">
            Над каждым проектом работает команда профессионалов, для которых
            дизайн — не просто работа, а постоянный процесс поиска, развития и
            точности в деталях.
          </p>
        </div>
      </div>
    </section>
  );
}
