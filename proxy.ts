import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

const locales = ["en", "ru"];
const defaultLocale = "en";

function getLocale(request: NextRequest) {
  const headers = {
    "accept-language": request.headers.get("accept-language") ?? "",
  };
  const languages = new Negotiator({ headers }).languages();
  return match(languages, locales, defaultLocale);
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/favicon") ||
    pathname.startsWith("/images") ||
    pathname.startsWith("/icons") ||
    pathname.match(/\.(.*)$/)
  ) {
    return NextResponse.next();
  }

  // 2️⃣ если язык уже есть
  if (/^\/(en|ru)(\/|$)/.test(pathname)) {
    return NextResponse.next();
  }

  // 3️⃣ редирект только для страниц
  const locale = getLocale(request);
  return NextResponse.redirect(new URL(`/${locale}${pathname}`, request.url));
}

export const config = {
  matcher: ["/:path*"],
};
