"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { useState } from "react";
import MobileMenu from "./MobileMenu";
import { useDictionary } from "@/providers/DictionaryProvider";

const locales = ["ru", "en", "kz"] as const;

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dict = useDictionary();
  const params = useParams();
  const pathname = usePathname();
  const currentLang = params.lang as string;

  const nav = [
    { href: "#about", label: dict.nav.about },
    { href: "#projects", label: dict.nav.projects },
    { href: "#process", label: dict.nav.process },
    { href: "#services", label: dict.nav.services },
    { href: "#contacts", label: dict.nav.contacts },
  ];

  const scrollToSection = (href: string) => {
    const id = href.replace("#", "");
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const getLocalePath = (locale: string) => {
    const segments = pathname.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50">
        <div className="mx-auto max-w-[1440px] flex items-center justify-between px-6 lg:px-20 py-5 bg-[#19191833]/20 backdrop-blur-sm border border-white/20 text-[16px]">
          <Link href={`/${currentLang}`}>
            <Image
              src="/logo.svg"
              alt="Circle Interior"
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
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-6 lg:gap-2 text-[16px] lg:text-[20px] text-[#F3F3F3]">
            {locales.map((locale) => (
              <Link
                key={locale}
                href={getLocalePath(locale)}
                className={`${currentLang === locale ? "font-bold" : "font-normal opacity-70"}`}
              >
                {locale}
              </Link>
            ))}
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
