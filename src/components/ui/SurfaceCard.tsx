// =====================================================
// IMPORTS
// =====================================================
import * as React from "react";
import { cn } from "@/lib/utils";

// =====================================================
// TYPES
// =====================================================
type Props = React.HTMLAttributes<HTMLDivElement> & {
  accentLine?: boolean;
};

// =====================================================
// COMPOSANT
// =====================================================
export default function SurfaceCard({
  className,
  accentLine = false,
  children,
  ...props
}: Props) {
  return (
    <div
      className={cn(
        `
        relative overflow-hidden rounded-[24px]
        border border-white/10 bg-white/[0.05]
        p-5 shadow-[0_16px_34px_rgba(0,0,0,0.18)]
        backdrop-blur-xl
        md:rounded-[32px] md:p-8
      `,
        className
      )}
      {...props}
    >
      {accentLine ? (
        <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-red-500 via-amber-400 to-transparent opacity-80" />
      ) : null}

      {children}
    </div>
  );
}