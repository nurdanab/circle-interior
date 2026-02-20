"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const steps = [
  {
    stage: "ЭТАП 1",
    titleTop: "СОСТАВЛЕНИЕ",
    titleBottom: "ТЕХ. ЗАДАНИЯ",
  },
  {
    stage: "ЭТАП 2",
    titleTop: "ЭСКИЗНЫЙ",
    titleBottom: "ПРОЕКТ",
  },
  {
    stage: "ЭТАП 3",
    titleTop: "ВИЗУАЛИЗАЦИЯ",
  },
  {
    stage: "ЭТАП 4",
    titleTop: "РАБОЧИЙ",
    titleBottom: "ПРОЕКТ",
  },
  {
    stage: "ЭТАП 5",
    titleTop: "АВТОРСКИЙ",
    titleBottom: "НАДЗОР",
  },
  {
    stage: "ЭТАП 6",
    titleTop: "КАПИТАЛЬНЫЙ",
    titleBottom: "РЕМОНТ",
  },
];

export default function WorkProcessMobile() {
  const offsets = [0, 12, 24, 36, 48, 65];

  return (
    <section className="w-full bg-[#F3F3F3] px-6 py-16 lg:hidden">
      <div className="mx-auto max-w-[420px]">
        <h2 className="mb-10 text-center text-[32px] font-black text-[#3A4731]">
          ПРОЦЕСС РАБОТЫ
        </h2>

        <div className="space-y-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.stage}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 0.4, ease: "easeOut", delay: index * 0.05 }}
            >
              {/* Этап */}
              <p className="mb-1 text-[16px] font-bold text-[#3A4731]">
                {step.stage}
              </p>

              {/* Линия */}
              <div className="h-[1px] w-full bg-[#3A4731]" />

              {/* Плашка */}
              <div
                className={cn(
                  "mt-0.5 w-fit rounded-[16px] bg-[#3A4731] text-[#F3F3F3]",
                  step.stage === "ЭТАП 1"
                    ? "p-3"
                    : step.stage === "ЭТАП 2"
                      ? "pl-3 pr-11 py-3"
                      : step.stage === "ЭТАП 3"
                        ? "p-3"
                        : step.stage === "ЭТАП 4"
                          ? "pl-3 pr-15 py-3"
                          : step.stage === "ЭТАП 5"
                            ? "pl-3 pr-12 py-3"
                            : step.stage === "ЭТАП 6"
                              ? "p-3"
                              : "p-3",
                )}
                style={{ marginLeft: `${offsets[index]}%` }}
              >
                <p className="text-[12px] font-bold leading-snug">
                  {step.titleTop}
                  {step.titleBottom && (
                    <>
                      <br />
                      {step.titleBottom}
                    </>
                  )}
                </p>

                <p className="mt-1 text-[8px] opacity-80">СРОК:</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
