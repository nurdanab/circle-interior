import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "../styles/globals.css";
import Header from "@/components/ui/Header";

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Circle Interior",
  description: "Circle Interior",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${notoSans.variable} antialiased`}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
