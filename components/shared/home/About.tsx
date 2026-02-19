import React from "react";

export default function About() {
  return (
    <div className="flex px-[120px] py-[160px] items-start gap-20">
      <span className="text-[64px] font-black text-[#191918]">О студии</span>
      <div className="flex flex-col gap-6 w-[65%]">
        <p className="text-[24px] font-normal text-[#191918]">
          CIRCLE — студия дизайна и реализации интерьеров. Мы создаём
          продуманные жилые и коммерческие пространства — от концепции до
          полного воплощения под ключ.
        </p>
        <p className="text-[24px] font-normal text-[#191918]">
          Над каждым проектом работает команда профессионалов, для которых
          дизайн — не просто работа, а постоянный процесс поиска, развития и
          точности в деталях.
        </p>
      </div>
    </div>
  );
}
