"use client";

// =====================================================
// IMPORTS
// =====================================================
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

// =====================================================
// TYPES
// =====================================================
type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "gold"
  | "ghost"
  | "dark";

type ButtonSize = "sm" | "md" | "lg" | "icon";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean;
  variant?: ButtonVariant;
  size?: ButtonSize;
};

// =====================================================
// STYLES
// =====================================================
const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 disabled:pointer-events-none disabled:opacity-50";

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-red-600 text-white shadow-[0_14px_30px_rgba(220,38,38,0.24)] hover:-translate-y-[1px] hover:bg-red-700",
  secondary:
    "border border-white/10 bg-white/[0.06] text-white hover:border-white/20 hover:bg-white/[0.12]",
  outline:
    "border border-white/20 bg-transparent text-white hover:bg-white/10",
  gold:
    "bg-gradient-to-r from-amber-300 via-amber-400 to-red-500 text-black shadow-[0_16px_36px_rgba(251,191,36,0.18)] hover:-translate-y-[1px] hover:shadow-[0_20px_42px_rgba(251,191,36,0.24)]",
  ghost: "bg-transparent text-white/80 hover:bg-white/8 hover:text-white",
  dark: "bg-black text-white hover:bg-zinc-900",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "min-h-[40px] px-4 py-2 text-sm",
  md: "min-h-[46px] px-5 py-2.5 text-sm md:min-h-[50px]",
  lg: "min-h-[52px] px-6 py-3 text-sm md:px-7 md:py-3.5 md:text-base",
  icon: "h-10 w-10 rounded-full",
};

// =====================================================
// COMPOSANT
// =====================================================
export default function Button({
  asChild = false,
  variant = "primary",
  size = "md",
  className,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      className={cn(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    />
  );
}