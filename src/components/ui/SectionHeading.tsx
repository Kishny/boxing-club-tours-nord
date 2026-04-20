// =====================================================
// IMPORTS
// =====================================================
import * as React from "react";
import { cn } from "@/lib/utils";

// =====================================================
// TYPES
// =====================================================
type Props = {
  badge?: React.ReactNode;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
};

// =====================================================
// COMPOSANT
// =====================================================
export default function SectionHeading({
  badge,
  title,
  description,
  align = "center",
  className,
}: Props) {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={cn("max-w-4xl", alignment, className)}>
      {badge ? <div>{badge}</div> : null}

      <h2
        className="
          mt-3 text-[2rem] font-black uppercase leading-[0.9]
          tracking-[0.025em] text-white
          sm:text-[2.5rem]
          md:mt-5 md:text-6xl md:tracking-[0.04em]
          xl:text-7xl
        "
      >
        {title}
      </h2>

      {description ? (
        <p
          className="
            mx-auto mt-3 max-w-[24rem]
            text-[0.9rem] leading-6 text-white/68
            sm:max-w-[34rem] sm:text-[0.96rem]
            md:mt-5 md:max-w-3xl md:text-lg md:leading-7
          "
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}