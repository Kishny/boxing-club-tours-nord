// =====================================================
// IMPORTS
// =====================================================
import * as React from "react";
import { cn } from "@/lib/utils";

// =====================================================
// TYPES
// =====================================================
type BadgeVariant = "default" | "gold" | "red" | "soft" | "dark";

type BadgeProps = React.HTMLAttributes<HTMLSpanElement> & {
  variant?: BadgeVariant;
};

// =====================================================
// STYLES
// =====================================================
const baseStyles =
  "inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-[0.62rem] font-bold uppercase tracking-[0.16em] backdrop-blur-md md:text-[0.72rem]";

const variantStyles: Record<BadgeVariant, string> = {
  default: "border-white/10 bg-white/[0.06] text-white/85",
  gold: "border-amber-300/20 bg-amber-300/10 text-amber-300",
  red: "border-red-400/20 bg-red-500/10 text-red-400",
  soft: "border-black/10 bg-white/80 text-zinc-900",
  dark: "border-white/10 bg-black/30 text-white/80",
};

// =====================================================
// COMPOSANT
// =====================================================
export default function Badge({
  variant = "default",
  className,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(baseStyles, variantStyles[variant], className)}
      {...props}
    />
  );
}