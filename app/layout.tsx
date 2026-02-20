import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "../styles/globals.css";

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: "Circle Interior",
  description: "Circle Interior — студия дизайна интерьера",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body className={`${notoSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
