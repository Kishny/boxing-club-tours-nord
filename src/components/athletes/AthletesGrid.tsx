"use client";

// =====================================================
// IMPORTS
// =====================================================
import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import AthleteCard from "./AthleteCard";
import AthleteFilters from "./AthleteFilters";
import { athletes } from "@/data/athletes";

// =====================================================
// COMPOSANT GRILLE ATHLÈTES
// Version premium avec filtre animé
// + espacement corrigé en bas
// =====================================================
export default function AthletesGrid() {
  // ---------------------------------------------------
  // État du filtre actif
  // ---------------------------------------------------
  const [filter, setFilter] = useState("Tous");

  // ---------------------------------------------------
  // Liste unique des disciplines
  // ---------------------------------------------------
  const disciplines = useMemo(() => {
    return Array.from(new Set(athletes.map((athlete) => athlete.discipline)));
  }, []);

  // ---------------------------------------------------
  // Athlètes filtrés
  // ---------------------------------------------------
  const filteredAthletes = useMemo(() => {
    if (filter === "Tous") return athletes;
    return athletes.filter((athlete) => athlete.discipline === filter);
  }, [filter]);

  return (
    <section className="container-custom py-16 pb-28 md:pb-32 lg:pb-36">
      {/* ---------------------------------------------
          FILTRES
      --------------------------------------------- */}
      <AthleteFilters
        disciplines={disciplines}
        active={filter}
        onChange={setFilter}
      />

      {/* ---------------------------------------------
          GRILLE ANIMÉE
      --------------------------------------------- */}
      <motion.div
        layout
        className="grid gap-6 md:grid-cols-2 md:gap-7 xl:grid-cols-3 xl:gap-8"
      >
        <AnimatePresence mode="popLayout">
          {filteredAthletes.map((athlete, index) => (
            <motion.div
              key={athlete.slug}
              layout
              initial={{ opacity: 0, y: 26, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 18, scale: 0.96 }}
              transition={{
                duration: 0.4,
                delay: index * 0.05,
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