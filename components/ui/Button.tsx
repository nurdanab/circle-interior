import { cn } from "@/lib/utils";
import React from "react";

type Variant = "primary" | "secondary" | "ghost";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
};

export function Button({
  variant = "primary",
  className,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex justify-center items-center rounded-[50px] transition active:scale-[0.98] text-sm w-full";

  const variants = {
    primary: "bg-[#3A4731] text-[#F3F3F3]",
    secondary:
      "border border-[#3A4731] text-[#3A4731] bg-transparent hover:bg-[#3A4731]/5",
    ghost:
      "text-[#F3F3F3] bg-[#F3F3F333]/20 hover:bg-[#F3F3F333]/100 border border-[#F3F3F3] backdrop-blur",
  };

  return (
    <button className={cn(base, variants[variant], className)} {...props} />
  );
}
