// =====================================================
// IMPORTS
// =====================================================
import * as React from "react";
import { cn } from "@/lib/utils";

// =====================================================
// COMPOSANT
// =====================================================
type Props = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export default function Textarea({ className, ...props }: Props) {
  return (
    <textarea
      className={cn(
        `
        min-h-[140px] w-full rounded-2xl border border-white/10 bg-white
        px-4 py-3.5 text-black outline-none transition-all duration-300
        placeholder:text-zinc-500
        focus:border-amber-300 focus:ring-2 focus:ring-amber-300/20
      `,
        className
      )}
      {...props}
    />
  );
}