"use client";

import Image from "next/image";
import { nav } from "@/lib/constants";
import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Link, useRouter, usePathname } from "@/i18n/navigation";
import MobileMenu from "./MobileMenu";
import type { Locale } from "@/i18n/routing";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = useTranslations("common");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const scrollToSection = (href: string) => {
    const id = href.replace("#", "");
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const changeLocale = (newLocale: Locale) => {
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50">
        <div className="mx-auto max-w-[1440px] flex items-center justify-between px-6 lg:px-20 py-5 bg-[#19191833]/20 backdrop-blur-sm border border-white/20 text-[16px]">
          <Link href="/">
            <Image
              src="/logo.svg"
              alt={t("logoAlt")}
              width={60}
              height={52}
              priority
            />
          </Link>

          <nav className="hidden lg:block">
            <ul className="flex items-center gap-8 text-[#F3F3F3]">
              {nav.map((item) => (
                <li key={item.href}>
                  <button
                    onClick={() => scrollToSection(item.href)}
                    className="hover:opacity-70 transition cursor-pointer"
                  >
                    {t(item.labelKey)}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden lg:flex items-center gap-2 text-[20px] text-[#F3F3F3]">
            <button
              onClick={() => changeLocale("ru")}
              className={`text-[20px] ${locale === "ru" ? "font-black" : "font-normal"}`}
            >
              ru
            </button>
            <button
              onClick={() => changeLocale("en")}
              className={`text-[20px] ${locale === "en" ? "font-black" : "font-normal"}`}
            >
              en
            </button>
            <button
              onClick={() => changeLocale("kz")}
              className={`text-[20px] ${locale === "kz" ? "font-black" : "font-normal"}`}
            >
              kz
            </button>
          </div>

          <button
            className="block lg:hidden"
            onClick={() => setIsMenuOpen(true)}
          >
            <Image
              src="/icons/menu.svg"
              alt="Menu"
              width={32}
              height={32}
              priority
            />
          </button>
        </div>
      </header>

      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}
