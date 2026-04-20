// =====================================================
// IMPORTS
// =====================================================
import * as React from "react";
import { cn } from "@/lib/utils";

// =====================================================
// COMPOSANT
// =====================================================
type Props = React.SelectHTMLAttributes<HTMLSelectElement>;

export default function Select({ className, children, ...props }: Props) {
  return (
    <select
      className={cn(
        `
        min-h-[48px] w-full rounded-2xl border border-white/10 bg-white
        px-4 py-3.5 text-black outline-none transition-all duration-300
        appearance-none
        placeholder:text-zinc-500
        focus:border-amber-300 focus:ring-2 focus:ring-amber-300/20
        disabled:cursor-not-allowed disabled:opacity-60
      `,
        className
      )}
      {...props}
    >
      {children}
    </select>
  );
}