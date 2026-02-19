"use client";

import { motion } from "framer-motion";

const rows = [
  {
    title: "КОМПЛЕКСНЫЙ\nПОДХОД",
    text: "Ведем проект от чертежей и эскизов до готового интерьера и комплектации.",
  },
  {
    title: "УДОБСТВО\nИ СТИЛЬ",
    text: "Не рисуем «картинки», а создаем жилые пространства под ваши сценарии жизни.",
  },
  {
    title: "ТОЧНАЯ\nТЕХНИЧЕСКАЯ\nДОКУМЕНТАЦИЯ",
    text: "Мы предоставляем полный пакет понятных, точных и профессиональных технических чертежей для строителей",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

export default function BenefitsGrid() {
  return (
    <section className="relative">
      <div className="relative mx-auto max-w-[1440px] px-20 py-28">
        {/* LINES */}
        <div className="pointer-events-none absolute inset-0">
          {/* top */}
          <div className="absolute left-0 right-0 top-0 h-px bg-[#3E4A37]/30" />

          {/* vertical */}
          <div className="absolute left-[38%] top-0 bottom-0 w-px bg-[#3E4A37]/30" />

          {/* horizontals */}
          <div className="absolute left-0 right-0 top-1/3 h-px bg-[#3E4A37]/30" />
          <div className="absolute left-0 right-0 top-2/3 h-px bg-[#3E4A37]/30" />
          <div className="absolute left-0 right-0 bottom-0 h-px bg-[#3E4A37]/30" />
        </div>

        {/* CONTENT */}
        <div className="relative grid grid-cols-[38%_62%] gap-30">
          {rows.map((r, idx) => (
            <div key={idx} className="contents">
              {/* LEFT */}
              <div className="">
                <motion.h3
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ amount: 0.5 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="whitespace-pre-line text-[50px] leading-[0.95] font-semibold text-[#3E4A37]"
                >
                  {r.title}
                </motion.h3>
              </div>

              {/* RIGHT */}
              <div className="p-10">
                <motion.p
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ amount: 0.5 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.06 }}
                  className="max-w-[640px] text-[20px] leading-relaxed text-[#2B2B2B]"
                >
                  {r.text}
                </motion.p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
