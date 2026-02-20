import { notFound } from "next/navigation";
import { hasLocale, getDictionary, type Locale } from "@/lib/i18n";
import { DictionaryProvider } from "@/providers/DictionaryProvider";

export async function generateStaticParams() {
  return [{ lang: "ru" }, { lang: "en" }, { lang: "kz" }];
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  if (!hasLocale(lang)) {
    notFound();
  }

  const dict = await getDictionary(lang as Locale);

  return <DictionaryProvider dictionary={dict}>{children}</DictionaryProvider>;
}
