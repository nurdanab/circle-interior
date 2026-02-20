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

export default function BenefitsGridMobile() {
  return (
    <section className="relative block lg:hidden">
      <div className="mx-auto max-w-[1440px] px-4 py-10">
        {/* ROWS */}
        <div className="relative">
          {/* VERTICAL LINE */}
          <div className="pointer-events-none absolute left-1/2 top-0 bottom-0 w-px bg-[#191918]" />
          {rows.map((r, idx) => (
            <div
              key={idx}
              className="grid grid-cols-2 gap-4 border-t border-[#191918] py-8 last:border-b"
            >
              {/* LEFT - TITLE */}
              <div className="pr-4">
                <motion.h3
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ amount: 0.5 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="whitespace-pre-line text-[clamp(16px,4.5vw,24px)] font-black text-[#191918]"
                >
                  {r.title}
                </motion.h3>
              </div>

              {/* RIGHT - TEXT */}
              <div className="pl-4">
                <motion.p
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ amount: 0.5 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.06 }}
                  className="text-[clamp(12px,4vw,16px)] leading-relaxed text-[#191918]"
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
