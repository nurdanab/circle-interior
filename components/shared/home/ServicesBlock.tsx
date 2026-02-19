import { Button } from "@/components/ui/Button";

const services = [
  {
    name: "Econom",
    priceLabel: "цена",
    description: "Концепция интерьера + чертежи, без 3D",
  },
  {
    name: "Business",
    priceLabel: "цена",
    description: "Индивидуальный проект + чертежи",
  },
  {
    name: "Premium",
    priceLabel: "цена",
    description: "От стройки до готового интерьера",
  },
];

export default function ServicesBlock() {
  return (
    <section className="w-full bg-[#F3F3F3] px-[100px]">
      <div className="mx-auto max-w-[1440px]">
        <h2 className="text-[64px] font-black text-[#3A4731]">Услуги</h2>

        <div className="mt-[40px] flex gap-2">
          <button className="rounded-[8px] bg-[#3A4731] px-8 py-3 text-[20px] font-medium text-[#F3F3F3]">
            Частные
          </button>
          <button className="rounded-[8px] border border-[#3A4731] px-8 py-3 text-[20px] font-medium text-[#3A4731] bg-transparent">
            Коммерческие интерьеры
          </button>
        </div>

        <div className="mt-[32px] grid grid-cols-1 gap-[20px] md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.name}
              className="flex h-full flex-col rounded-[24px] bg-[#E7E7E7] px-[32px] py-[32px]"
            >
              <h3 className="text-[28px] font-semibold text-[#191918]">
                {service.name}
              </h3>
              <p className="mt-2 text-[16px] text-[#191918] opacity-80">
                {service.priceLabel}
              </p>

              <p className="mt-6 text-[16px] text-[#191918]">
                {service.description}
              </p>

              <div className="mt-10 border-t border-[#C4C4C4] pt-4 text-[16px] text-[#191918] flex items-center justify-between cursor-pointer">
                <span>Открыть описание тарифа</span>
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-[#191918]">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-[#191918]"
                  >
                    <path d="M4 6l4 4 4-4H4z" />
                  </svg>
                </span>
              </div>

              <div className="mt-8">
                <Button
                  variant="primary"
                  size="md"
                  className="w-full !h-[56px] text-[20px] rounded-[40px]"
                >
                  Заказать дизайн
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
