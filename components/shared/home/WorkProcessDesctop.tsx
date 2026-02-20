"use client";

import { motion } from "framer-motion";
import { useDictionary } from "@/providers/DictionaryProvider";

export default function WorkProcessDesctop() {
  const dict = useDictionary();

  type Step = { stage: string; titleTop: string; titleBottom?: string };
  const steps: Step[] = [
    dict.workProcess.step1,
    dict.workProcess.step2,
    { ...dict.workProcess.step3, titleBottom: undefined },
    dict.workProcess.step4,
    dict.workProcess.step5,
    dict.workProcess.step6,
  ];

  return (
    <section className="hidden w-full bg-[#F3F3F3] py-[160px] px-[100px] lg:block">
      <div className="mx-auto max-w-[1440px]">
        <h2 className="mb-8 text-start text-[64px] font-black text-[#3A4731]">
          {dict.workProcess.title}
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
                          : 50;
              const offset = baseOffset + index * gap + correction;

              return (
                <motion.div
                  key={step.stage}
                  className="relative flex flex-col"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{
                    duration: 0.5,
                    ease: "easeOut",
                    delay: index * 0.05,
                  }}
                >
                  <span className="mt-0 text-[24px] font-bold text-[#3A4731] text-center">
                    {step.stage}
                  </span>

                  <div className="pointer-events-none absolute left-0 top-0 h-full border-l-2 border-[#3A4731]" />

                  <div
                    className={`
                    relative z-10 inline-flex w-max flex-col rounded-[20px] bg-[#3A4731] py-[16px] text-left text-[#F3F3F3]
                    ${index === 0 ? "px-[16px]" : index === 1 ? "px-[40px]" : "px-[8px]"}
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
                    <p className="mt-2 text-[16px]">{dict.workProcess.deadline}</p>
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
