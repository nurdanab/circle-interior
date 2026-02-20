"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter, useParams, usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useDictionary } from "@/providers/DictionaryProvider";

const locales = ["ru", "en", "kz"] as const;

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
  isProjectPage?: boolean;
};

export default function MobileMenu({
  isOpen,
  onClose,
  isProjectPage,
}: MobileMenuProps) {
  const router = useRouter();
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

  const handleNavClick = (href: string) => {
    onClose();

    if (isProjectPage) {
      router.push(`/${currentLang}${href}`);
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

  const getLocalePath = (locale: string) => {
    const segments = pathname.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-60 bg-black/60"
            onClick={onClose}
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed top-0 right-0 z-70 h-full w-full bg-white px-6 py-8"
          >
            {/* Close Button */}
            <button onClick={onClose} className="absolute top-6 right-6">
              <Image
                src="/icons/close.svg"
                alt="Close"
                width={24}
                height={24}
              />
            </button>

            {/* Navigation */}
            <nav className="mt-16">
              <ul className="flex flex-col gap-6">
                {nav.map((item) => (
                  <li key={item.href}>
                    <button
                      onClick={() => handleNavClick(item.href)}
                      className="text-[24px] font-bold text-[#191918] uppercase hover:opacity-70 transition"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="mt-10 flex items-center gap-4 text-[24px] text-[#191918]">
              {locales.map((locale) => (
                <Link
                  key={locale}
                  href={getLocalePath(locale)}
                  onClick={onClose}
                  className={
                    currentLang === locale ? "font-bold" : "font-normal opacity-70"
                  }
                >
                  {locale.toUpperCase()}
                </Link>
              ))}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
