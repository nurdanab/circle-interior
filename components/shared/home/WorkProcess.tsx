"use client";
import { motion } from "framer-motion";

type Step = {
  stage: string;
  titleTop: string;
  titleBottom?: string;
};

const steps: Step[] = [
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
    titleTop: "РАБОЧИЙ ПРОЕКТ",
  },
  {
    stage: "ЭТАП 5",
    titleTop: "АВТОРСКИЙ НАДЗОР",
  },
  {
    stage: "ЭТАП 6",
    titleTop: "КАПИТАЛЬНЫЙ",
    titleBottom: "РЕМОНТ",
  },
];

export default function WorkProcess() {
  return (
    <section className="hidden w-full bg-[#F3F3F3] py-[160px] px-[100px] lg:block">
      <div className="mx-auto max-w-[1440px]">
        <h2 className="mb-8 text-start text-[64px] font-black text-[#3A4731]">
          ПРОЦЕСС РАБОТЫ
        </h2>

        <div className="relative h-[800px]">
          <div className="grid h-full grid-cols-6 gap-0">
            {steps.map((step, index) => {
              const baseOffset = 80;
              const gap = 100;
              const correction =
                index === 0
                  ? 0
                  : index === 1
                    ? 25
                    : index === 2
                      ? 50
                      : index === 3
                        ? 50
                        : index === 4
                          ? 50
                          : index === 5
                            ? 50
                            : 0;
              const offset = baseOffset + index * gap + correction;

              return (
                <motion.div
                  key={step.stage}
                  className="relative flex flex-col"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.05 }}
                >
                  <span className="mt-0 text-[24px] font-bold text-[#3A4731] text-center">
                    {step.stage}
                  </span>

                  <div className="pointer-events-none absolute left-0 top-0 h-full border-l-2 border-[#3A4731]" />

                  <div
                    className={`
                    relative z-10 inline-flex w-max flex-col rounded-[20px] bg-[#3A4731] py-[16px] text-left text-[#F3F3F3]
                    ${
                      step.stage === "ЭТАП 1"
                        ? "px-[16px]"
                        : step.stage === "ЭТАП 2"
                          ? "px-[40px]"
                          : "px-[8px]"
                    }
                  `}
                    style={{ marginTop: offset }}
                  >
                    <p className="text-[24px] font-bold leading-snug">
                      {step.titleTop}
                      {step.titleBottom && (
                        <>
                          <br />
                          {step.titleBottom}
                        </>
                      )}
                    </p>
                    <p className="mt-2 text-[16px]">СРОК:</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
