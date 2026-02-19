import { cn } from "@/lib/utils";
import React from "react";

type Variant = "primary" | "secondary" | "outline" | "ghost";
type Size = "sm" | "md" | "full";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  size?: Size;
};

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "flex items-center justify-center rounded-[50px]",
        variant === "primary" && "bg-[#3A4731]",
        variant === "secondary" &&
          "bg-[#F3F3F3]/20 border border-[#F3F3F3] shadow-sm",
        variant === "outline" &&
          "border border-[#3A4731] backdrop-blur-[10px] text-[#3A4731]",

        size === "sm" && "",
        size === "md" && "w-[355px] h-[65px] text-[24px]",
        size === "full" && "w-full h-auto ",

        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
