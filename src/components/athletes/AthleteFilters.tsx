"use client";

// =====================================================
// IMPORTS
// =====================================================
import { motion } from "framer-motion";

// =====================================================
// TYPES DU COMPOSANT
// =====================================================
type Props = {
  disciplines: string[];
  active: string;
  onChange: (discipline: string) => void;
};

// =====================================================
// COMPOSANT FILTRES ATHLÈTES
// Version premium animée avec Framer Motion
// =====================================================
export default function AthleteFilters({
  disciplines,
  active,
  onChange,
}: Props) {
  return (
    <motion.div
      className="mb-10 flex flex-wrap justify-center gap-3"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* ---------------------------------------------
          FILTRE TOUS
      --------------------------------------------- */}
      <motion.button
        type="button"
        onClick={() => onChange("Tous")}
        whileHover={{ y: -2, scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
          active === "Tous"
            ? "bg-red-600 text-white shadow-[0_12px_24px_rgba(220,38,38,0.22)]"
            : "bg-white/10 text-white hover:bg-white/20"
        }`}
      >
        Tous
      </motion.button>

      {/* ---------------------------------------------
          FILTRES PAR DISCIPLINE
      --------------------------------------------- */}
      {disciplines.map((discipline) => (
        <motion.button
          key={discipline}
          type="button"
          onClick={() => onChange(discipline)}
          whileHover={{ y: -2, scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
            active === discipline
              ? "bg-red-600 text-white shadow-[0_12px_24px_rgba(220,38,38,0.22)]"
              : "bg-white/10 text-white hover:bg-white/20"
          }`}
        >
          {discipline}
        </motion.button>
      ))}
    </motion.div>
  );
}