import type React from "react";
import Header from "@/components/ui/Header";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <Header />
      {children}
    </main>
  );
}
