"use client";

import Image from "next/image";
import { nav } from "@/lib/constants";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
  isProjectPage?: boolean;
};

export default function MobileMenu({ isOpen, onClose, isProjectPage }: MobileMenuProps) {
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations("common");
  const locale = useLocale();

  const handleNavClick = (href: string) => {
    onClose();
    
    if (isProjectPage) {
      router.push("/" + href);
    } else {
      const id = href.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 300);
      }
    }
  };

  const changeLocale = (newLocale: Locale) => {
    router.replace(pathname, { locale: newLocale });
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-60 bg-black/60"
            onClick={onClose}
          />

          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed top-0 right-0 z-70 h-full w-full bg-white px-6 py-8"
          >
            <button onClick={onClose} className="absolute top-6 right-6">
              <Image
                src="/icons/close.svg"
                alt="Close"
                width={24}
                height={24}
              />
            </button>

            <nav className="mt-16">
              <ul className="flex flex-col gap-6">
                {nav.map((item) => (
                  <li key={item.href}>
                    <button
                      onClick={() => handleNavClick(item.href)}
                      className="text-[24px] font-bold text-[#191918] uppercase hover:opacity-70 transition"
                    >
                      {t(item.labelKey)}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="mt-10 flex items-center gap-4 text-[24px] text-[#191918]">
              <button
                onClick={() => changeLocale("ru")}
                className={locale === "ru" ? "font-black" : "font-normal"}
              >
                RU
              </button>
              <button
                onClick={() => changeLocale("en")}
                className={locale === "en" ? "font-black" : "font-normal"}
              >
                EN
              </button>
              <button
                onClick={() => changeLocale("kz")}
                className={locale === "kz" ? "font-black" : "font-normal"}
              >
                KZ
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
