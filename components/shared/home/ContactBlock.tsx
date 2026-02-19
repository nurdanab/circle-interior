import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import Image from "next/image";

export default function ContactBlock() {
  return (
    <section className="bg-[#E7E7E7] py-[60px] px-[120px] flex items-center gap-6 w-full mt-[120px]">
      <div className="flex flex-col gap-[60px] items-start w-1/2">
        <div className="flex flex-col text-start">
          <span className="text-[48px] font-black text-[#191918]">
            Остались вопросы?
          </span>
          <span className="text-[24px] text-[#191918]">
            Оставьте заявку, и мы свяжемся с вами!
          </span>
        </div>
        <form className="flex flex-col gap-[17px] w-full">
          <Input
            variant="primary"
            placeholder="Имя"
            className="h-[65px] rounded-[50px] backdrop-blur-xs text-[24px]"
          />
          <Input
            variant="primary"
            placeholder="Телефон"
            type="tel"
            className="h-[65px] rounded-[50px] backdrop-blur-xs text-[24px]"
          />
          <Button
            variant="primary"
            className="h-[65px] rounded-[50px] backdrop-blur-xs text-[24px]"
          >
            Обсудить проект
          </Button>
        </form>

        <div className="flex justify-between items-center w-full">
          <div className="flex flex-col">
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

      <div className="w-1/2">
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
