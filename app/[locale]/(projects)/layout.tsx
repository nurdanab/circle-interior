import type React from "react";
import HeaderProject from "@/components/ui/HeaderProject";

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <HeaderProject />
      {children}
    </main>
  );
}
