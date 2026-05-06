"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import AthleteCard from "./AthleteCard";
import AthleteFilters from "./AthleteFilters";
import { athletes as hardcodedAthletes } from "@/data/athletes";
import type { Athlete } from "@/data/athletes";

function hexToRgba(hex: string, alpha: number): string {
  try {
    const h = hex.replace("#", "");
    const r = parseInt(h.slice(0, 2), 16);
    const g = parseInt(h.slice(2, 4), 16);
    const b = parseInt(h.slice(4, 6), 16);
    return `rgba(${r},${g},${b},${alpha})`;
  } catch {
    return `rgba(239,68,68,${alpha})`;
  }
}

const VALID_ICONS = ["flame", "trophy", "shield"] as const;

export default function AthletesGrid() {
  const [athletes, setAthletes] = useState<Athlete[]>(hardcodedAthletes);
  const [filter, setFilter] = useState("Tous");

  useEffect(() => {
    fetch("/api/cms/athletes")
      .then((r) => r.json())
      .then((docs) => {
        if (!Array.isArray(docs) || docs.length === 0) return;
        const mapped: Athlete[] = (docs as Record<string, unknown>[]).map(
          (doc, i) => {
            const accent = (doc.accent as string) || "#ef4444";
            const icon = VALID_ICONS.includes(doc.icon as typeof VALID_ICONS[number])
              ? (doc.icon as Athlete["icon"])
              : "flame";
            return {
              id: i + 1,
              slug: (doc.slug as string) || `athlete-${i + 1}`,
              name: (doc.name as string) || "",
              discipline: (doc.discipline as string) || (doc.category as string) || "",
              level: (doc.level as string) || "Confirmé",
              record: (doc.record as string) || "",
              image: (doc.photo as string) || "",
              imagePosition: "50% 18%",
              description: (doc.description as string) || "",
              achievements: Array.isArray(doc.palmares) ? (doc.palmares as string[]) : [],
              accent,
              glow: hexToRgba(accent, 0.2),
              icon,
            };
          },
        );
        setAthletes(mapped);
      })
      .catch(() => {});
  }, []);

  const disciplines = useMemo(
    () => Array.from(new Set(athletes.map((a) => a.discipline))),
    [athletes],
  );

  const filteredAthletes = useMemo(() => {
    if (filter === "Tous") return athletes;
    return athletes.filter((a) => a.discipline === filter);
  }, [filter, athletes]);

  return (
    <section className="container-custom py-8 pb-16 md:py-16 md:pb-32 lg:pb-36">
      <AthleteFilters
        disciplines={disciplines}
        active={filter}
        onChange={setFilter}
      />

      <div className="mb-4 flex items-center justify-between md:mb-6">
        <p className="text-[0.72rem] font-bold uppercase tracking-[0.14em] text-white/45 md:text-[0.78rem] md:tracking-[0.16em]">
          {filteredAthletes.length} profil
          {filteredAthletes.length > 1 ? "s" : ""}
        </p>

        <p className="text-[0.78rem] text-white/42 md:text-sm">
          {filter === "Tous" ? "Toutes disciplines" : filter}
        </p>
      </div>

      <motion.div
        layout
        className="grid gap-4 md:grid-cols-2 md:gap-7 xl:grid-cols-3 xl:gap-8"
      >
        <AnimatePresence mode="popLayout">
          {filteredAthletes.map((athlete, index) => (
            <motion.div
              key={athlete.slug}
              layout
              initial={{ opacity: 0, y: 20, scale: 0.985 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 14, scale: 0.97 }}
              transition={{
                duration: 0.38,
                delay: index * 0.04,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="h-full"
            >
              <AthleteCard athlete={athlete} index={index} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
