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

export default function WorkProcessMobile() {
  const offsets = ["ml-0", "ml-6", "ml-12", "ml-20", "ml-28", "ml-36"];

  return (
    <section className="w-full bg-[#F3F3F3] px-6 py-16 lg:hidden">
      <div className="mx-auto max-w-[420px]">
        <h2 className="mb-14 text-center text-[32px] font-black text-[#3A4731]">
          ПРОЦЕСС РАБОТЫ
        </h2>

        <div className="space-y-16">
          {steps.map((step, index) => (
            <div key={step.stage}>
              {/* Этап */}
              <p className="mb-2 text-[16px] font-bold text-[#3A4731]">
                {step.stage}
              </p>

              {/* Линия */}
              <div className="h-[1px] w-full bg-[#3A4731]" />

              {/* Плашка */}
              <div
                className={`mt-4 w-fit rounded-[28px] bg-[#3A4731] px-6 py-5 text-[#F3F3F3] ${offsets[index]}`}
              >
                <p className="text-[15px] font-bold leading-snug">
                  {step.titleTop}
                  {step.titleBottom && (
                    <>
                      <br />
                      {step.titleBottom}
                    </>
                  )}
                </p>

                <p className="mt-3 text-[11px] opacity-80">СРОК:</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
