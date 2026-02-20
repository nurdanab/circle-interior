"use client";

import { cn } from "@/lib/utils";
import { useDictionary } from "@/providers/DictionaryProvider";

export default function WorkProcessMobile() {
  const dict = useDictionary();
  const offsets = [0, 12, 24, 36, 48, 65];

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
    <section className="w-full bg-[#F3F3F3] px-6 py-16 lg:hidden">
      <div className="mx-auto max-w-[420px]">
        <h2 className="mb-10 text-center text-[32px] font-black text-[#3A4731]">
          {dict.workProcess.title}
        </h2>

        <div className="space-y-6">
          {steps.map((step, index) => (
            <div key={step.stage}>
              <p className="mb-1 text-[16px] font-bold text-[#3A4731]">
                {step.stage}
              </p>

              <div className="h-[1px] w-full bg-[#3A4731]" />

              <div
                className={cn(
                  "mt-0.5 w-fit rounded-[16px] bg-[#3A4731] text-[#F3F3F3]",
                  index === 0
                    ? "p-3"
                    : index === 1
                      ? "pl-3 pr-11 py-3"
                      : index === 2
                        ? "p-3"
                        : index === 3
                          ? "pl-3 pr-15 py-3"
                          : index === 4
                            ? "pl-3 pr-12 py-3"
                            : "p-3"
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

                <p className="mt-1 text-[8px] opacity-80">
                  {dict.workProcess.deadline}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
