import { cn } from "@/lib/utils";
import React from "react";

type Variant = "primary";

type InputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> & {
  variant?: Variant;
};

export function Input({
  variant = "primary",
  className,
  ...props
}: InputProps) {
  const base = "w-full px-4 lg:px-8 py-4";

  const variants = {
    primary: "text-[#191918] text-[#191918] border border-[#191918]",
  };

  return (
    <input
      className={cn(base, variants[variant], className)}
      {...(props as Omit<
        React.InputHTMLAttributes<HTMLInputElement>,
        "size" | "variant"
      >)}
    />
  );
}
