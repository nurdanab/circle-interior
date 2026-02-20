import "server-only";

export const dictionaries = {
  ru: () => import("../dictionaries/ru.json").then((m) => m.default),
  en: () => import("../dictionaries/en.json").then((m) => m.default),
  kz: () => import("../dictionaries/kz.json").then((m) => m.default),
};

export type Locale = keyof typeof dictionaries;

export const hasLocale = (locale: string): locale is Locale =>
  locale in dictionaries;

export async function getDictionary(locale: Locale) {
  return dictionaries[locale]();
}
