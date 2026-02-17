import Image from "next/image";
import Link from "next/link";
import { nav } from "@/lib/constants";

export default function Header() {
  return (
    <header className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1440px] flex items-center justify-between px-20 py-5 bg-[#19191833]/20 border border-[#F3F3F3] backdrop-blur-sm text-[16px]">
      <Link href="/">
        <Image
          src="/logo.svg"
          alt="Circle Interior"
          width={60}
          height={52}
          priority
        />
      </Link>

      <nav>
        <ul className="flex items-center gap-8">
          {nav.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="hover:opacity-70 transition">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="flex items-center gap-2 text-[20px]">
        <button className="opacity-100">ru</button>
        <button className="opacity-50 hover:opacity-100">en</button>
        <button className="opacity-50 hover:opacity-100">kz</button>
      </div>
    </header>
  );
}
