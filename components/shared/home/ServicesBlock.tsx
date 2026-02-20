"use client";

import { Button } from "@/components/ui/Button";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { useDictionary } from "@/providers/DictionaryProvider";

export default function ServicesBlock() {
  const dict = useDictionary();
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<"private" | "commercial">(
    "private"
  );

  const services = [
    {
      name: dict.services.econom.name,
      priceLabel: dict.services.price,
      description: dict.services.econom.description,
      details: dict.services.econom.details,
    },
    {
      name: dict.services.business.name,
      priceLabel: dict.services.price,
      description: dict.services.business.description,
      details: dict.services.business.details,
    },
    {
      name: dict.services.premium.name,
      priceLabel: dict.services.price,
      description: dict.services.premium.description,
      details: dict.services.premium.details,
    },
  ];

  return (
    <section className="w-full bg-[#F3F3F3] px-4 py-16 sm:px-6 lg:px-[100px] lg:py-[160px]">
      <div className="mx-auto max-w-[1440px]">
        <h2 className="text-[32px] lg:text-[64px] font-black text-[#3A4731]">
          {dict.services.title}
        </h2>

        {/* Desktop */}
        <div className="hidden lg:flex mt-[40px] gap-2">
          <button
            onClick={() => setActiveTab("private")}
            className={cn(
              "rounded-[8px] px-8 py-3 text-[20px] font-medium transition-all duration-300 ease-in-out",
              activeTab === "private"
                ? "bg-[#3A4731] text-[#F3F3F3]"
                : "bg-transparent border border-[#3A4731] text-[#3A4731]"
            )}
          >
            {dict.services.private}
          </button>
          <button
            onClick={() => setActiveTab("commercial")}
            className={cn(
              "rounded-[8px] px-8 py-3 text-[20px] font-medium transition-all duration-300 ease-in-out",
              activeTab === "commercial"
                ? "bg-[#3A4731] text-[#F3F3F3]"
                : "bg-transparent border border-[#3A4731] text-[#3A4731]"
            )}
          >
            {dict.services.commercial}
          </button>
        </div>

        {/* Mobile */}
        <div className="lg:hidden mt-[40px] flex gap-2 w-full">
          <button
            onClick={() => setActiveTab("private")}
            className={cn(
              "w-1/2 h-[30px] rounded-[8px] text-[14px] font-medium transition-all duration-300 ease-in-out",
              activeTab === "private"
                ? "bg-[#3A4731] text-[#F3F3F3]"
                : "bg-transparent border border-[#3A4731] text-[#3A4731]"
            )}
          >
            {dict.services.private}
          </button>
          <button
            onClick={() => setActiveTab("commercial")}
            className={cn(
              "w-1/2 h-[30px] rounded-[8px] text-[14px] font-medium transition-all duration-300 ease-in-out",
              activeTab === "commercial"
                ? "bg-[#3A4731] text-[#F3F3F3]"
                : "bg-transparent border border-[#3A4731] text-[#3A4731]"
            )}
          >
            {dict.services.commercial}
          </button>
        </div>

        <div className="mt-[8px] lg:mt-[32px] grid grid-cols-1 gap-[20px] md:grid-cols-3 items-start">
          {services.map((service, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={service.name}
                className="flex flex-col rounded-[8px] lg:rounded-[24px] bg-[#E7E7E7] px-[8px] py-[16px] lg:px-[32px] lg:py-[32px]"
              >
                <h3 className="text-[clamp(16px,4.5vw,24px)] lg:text-[40px] font-bold text-[#191918]">
                  {service.name}
                </h3>
                <p className="mt-3 text-[clamp(16px,4.5vw,24px)] lg:text-[24px] text-[#191918]">
                  {service.priceLabel}
                </p>

                <p className="mt-4 lg:mt-10 text-[clamp(10px,3.5vw,18px)] lg:text-[24px] text-[#191918]">
                  {service.description}
                </p>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.ul
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden list-disc pl-3 text-[clamp(10px,3.5vw,16px)] leading-tight text-[#191918] space-y-1"
                    >
                      <div className="pt-4">
                        {service.details.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </div>
                    </motion.ul>
                  )}
                </AnimatePresence>

                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="mt-4 flex w-full items-center justify-between border-b border-[#3A4731] pt-4 pb-1 cursor-pointer"
                >
                  <span className="text-[clamp(10px,3.5vw,20px)] lg:text-[20px] text-[#191918]">
                    {isOpen
                      ? dict.services.hideDescription
                      : dict.services.openDescription}
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

                <div className="mt-5 lg:mt-10 text-[#F3F3F3]">
                  <Button
                    variant="primary"
                    className="w-full h-[38px] lg:h-[56px] text-[clamp(12px,4.5vw,16px)] lg:text-[20px] rounded-[8px] lg:rounded-[40px]"
                  >
                    {dict.services.orderButton}
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
