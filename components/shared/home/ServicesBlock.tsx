"use client";

import { Button } from "@/components/ui/Button";
import Image from "next/image";
import { useState } from "react";

type Service = {
  name: string;
  priceLabel: string;
  description: string;
  details: string[];
};

const ECONOM_DETAILS: string[] = [
  "Обмерный план (выезд на замер)",
  "Планировочное решение с расстановкой мебели до 3 вариантов",
  "Планы полов, потолков и розеток",
  "Чертежи для строителей",
];

const BUSINESS_DETAILS: string[] = [
  "Обмерный план (выезд на замер)",
  "Планировочное решение с расстановкой мебели до 10 вариантов",
  "Детальный дизайн каждого помещения в 3D",
  "План демонтажа и монтажа стен",
  "План электрики (розетки, выключатели, освещение)",
  "Разработка сценариев освещения",
  "Планы полов/ потолков",
  "Раскладки керамогранита",
  "Ведомость отделочных материалов и мебели",
];

const PREMIUM_DETAILS: string[] = [
  "Подбор строителей под ваш бюджет",
  "Смета по проекту с ценами и поставщиками",
  "Тендер мебельных компаний",
  "Контроль меблировочного проекта",
  "Ведение бюджета и графика закупки материалов",
  "Проверка счетов и контроль поставки материалов",
  "Выезд в магазины для подбора материалов",
  "Регулярный выезд на стройку (1–2 раза в неделю)",
  "Ведение журнала авторского надзора",
  "Фото/видео отчёты о ходе работ на стройке",
];

const services: Service[] = [
  {
    name: "Econom",
    priceLabel: "цена",
    description: "Концепция интерьера + чертежи, без 3D",
    details: ECONOM_DETAILS,
  },
  {
    name: "Business",
    priceLabel: "цена",
    description: "Индивидуальный проект + чертежи",
    details: BUSINESS_DETAILS,
  },
  {
    name: "Premium",
    priceLabel: "цена",
    description: "От стройки до готового интерьера",
    details: PREMIUM_DETAILS,
  },
];

export default function ServicesBlock() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="w-full bg-[#F3F3F3] px-[100px]">
      <div className="mx-auto max-w-[1440px]">
        <h2 className="text-[64px] font-black text-[#3A4731]">услуги</h2>

        <div className="mt-[40px] flex gap-2">
          <button className="rounded-[8px] bg-[#3A4731] px-8 py-3 text-[20px] font-medium text-[#F3F3F3]">
            Частные
          </button>
          <button className="rounded-[8px] border border-[#3A4731] px-8 py-3 text-[20px] font-medium text-[#3A4731] bg-transparent">
            Коммерческие интерьеры
          </button>
        </div>

        <div className="mt-[32px] grid grid-cols-1 gap-[20px] md:grid-cols-3">
          {services.map((service, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={service.name}
                className="flex h-full flex-col rounded-[24px] bg-[#E7E7E7] px-[32px] py-[32px]"
              >
                <h3 className="text-[40px] font-bold text-[#191918]">
                  {service.name}
                </h3>
                <p className="mt-3 text-[24px] text-[#191918]">
                  {service.priceLabel}
                </p>

                <p className="mt-10 text-[24px] text-[#191918]">
                  {service.description}
                </p>

                {isOpen && (
                  <ul className="mt-4 list-disc pl-5 text-[16px] leading-tight text-[#191918] space-y-1">
                    {service.details.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}

                <button
                  type="button"
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  className="mt-10 flex w-full items-center justify-between border-b border-[#3A4731] pt-4 pb-1 cursor-pointer"
                >
                  <span className="text-[20px] text-[#191918]">
                    {isOpen ? "Скрыть описание тарифа" : "Открыть описание тарифа"}
                  </span>
                  <Image
                    src="/icons/arrow-down.svg"
                    alt="Arrow down"
                    width={12}
                    height={12}
                    className={`transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div className="mt-10 text-[#F3F3F3]">
                  <Button
                    variant="primary"
                    className="w-full h-[56px] text-[20px] rounded-[40px]"
                  >
                    Заказать дизайн
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
