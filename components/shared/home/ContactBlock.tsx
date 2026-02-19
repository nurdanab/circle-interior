import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import Image from "next/image";

export default function ContactBlock() {
  return (
    <section className="bg-[#E7E7E7] mt-[80px] w-full px-4 py-12 sm:px-6 lg:mt-[120px] lg:flex lg:items-center lg:gap-6 lg:px-[120px] lg:py-[60px]">
      <div className="flex flex-col gap-8 items-start w-full lg:w-1/2">
        <div className="flex flex-col text-start">
          <span className="text-[32px] sm:text-[40px] lg:text-[48px] font-black text-[#191918]">
            Остались вопросы?
          </span>
          <span className="mt-2 text-[16px] sm:text-[18px] lg:text-[24px] text-[#191918]">
            Оставьте заявку, и мы свяжемся с вами!
          </span>
        </div>
        <form className="flex w-full flex-col gap-4 sm:gap-[17px]">
          <Input
            variant="primary"
            placeholder="Имя"
            className="h-[56px] rounded-[50px] backdrop-blur-xs text-[18px] sm:h-[65px] sm:text-[24px]"
          />
          <Input
            variant="primary"
            placeholder="Телефон"
            type="tel"
            className="h-[56px] rounded-[50px] backdrop-blur-xs text-[18px] sm:h-[65px] sm:text-[24px]"
          />
          <Button
            variant="primary"
            className="h-[56px] rounded-[50px] backdrop-blur-xs text-[18px] sm:h-[65px] sm:text-[24px]"
          >
            Обсудить проект
          </Button>
        </form>

        <div className="mt-6 flex w-full flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div className="flex flex-col gap-1">
            <span className="text-[20px] text-[#191918]">Наши контакты:</span>
            <span className="text-[20px] text-[#191918]">+7 777 777 77 77</span>
          </div>
          <div className="flex items-center gap-[20px]">
            <Image
              src="/icons/whatsapp.svg"
              alt="whatsapp-icon"
              width={32}
              height={32}
            />
            <Image
              src="/icons/instagram.svg"
              alt="instagram-icon"
              width={32}
              height={32}
            />
          </div>
        </div>
      </div>

      <div className="mt-8 w-full lg:mt-0 lg:w-1/2">
        <Image
          src="/main/Map.png"
          alt="Map almaty"
          width={587}
          height={492}
          className="w-full h-full object-cover rounded-[20px] border border-[#3A4731]"
        />
      </div>
    </section>
  );
}
