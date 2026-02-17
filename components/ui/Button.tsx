import { cn } from "@/lib/utils";
import React from "react";

type Variant = "primary" | "secondary" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

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
        variant === "secondary" && "",

        size === "sm" && "",
        size === "md" && "w-[355px] h-[65px] text-[24px]",

        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
