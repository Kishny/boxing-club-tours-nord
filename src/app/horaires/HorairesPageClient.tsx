"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  X,
  ChevronLeft,
  ChevronRight,
  Download,
  Printer,
  FileText,
  MapPin,
  Maximize2,
  Info,
} from "lucide-react";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

// ──────────────────────────────────────────────────────
// TYPES
// ──────────────────────────────────────────────────────

type DayKey =
  | "Lundi"
  | "Mardi"
  | "Mercredi"
  | "Jeudi"
  | "Vendredi"
  | "Samedi"
  | "Dimanche";

export type PlanningItem = {
  _id?: string;
  club: string;
  discipline: string;
  category?: string;
  color?: string;
  day: DayKey;
  time: string;
  audience: string;
  coach?: string;
  level: string;
  updatedAt?: string;
};

type ScheduleCell = {
  day: DayKey;
  time: string;
  audience: string;
  level: string;
  coach?: string;
};

type DisciplineRow = {
  discipline: string;
  category: string;
  color: string;
  slots: ScheduleCell[];
};

type Club = {
  id: number;
  name: string;
  cityLabel: string;
  address: string;
  phone: string;
  accent: string;
  glow: string;
  age: string;
  rows: DisciplineRow[];
};

type DayBlock = {
  discipline: string;
  category: string;
  color: string;
  time: string;
  audience: string;
  level: string;
  coach?: string;
};


// ──────────────────────────────────────────────────────
// AFFICHES DES PLANNINGS (public/documents/)
// Nouvelle saison : remplacer le PDF et le libellé.
// ──────────────────────────────────────────────────────

// Date des affiches fournies par le club. À changer en même temps que
// les PDF et les images de public/images/plannings/.
const AFFICHES_UPDATED_AT = "29 août 2026";

// Date de la dernière saisie manuelle du planning en base. Sert de repli
// tant qu'aucun créneau n'a été modifié depuis l'admin (les modifications
// faites ensuite sont horodatées automatiquement).
const GRILLE_UPDATED_AT = "29 août 2026";

type PlanningFile = {
  clubId: number;
  slug: string;
  short: string;
  name: string;
  venue: string;
  file: string;
  image: string;
  accent: string;
};

const PLANNING_FILES: PlanningFile[] = [
  {
    clubId: 1,
    slug: "bctn",
    short: "BCTN",
    name: "Boxing Club Tours Nord",
    venue: "Salle Georges Carpentier · 81 avenue de l’Europe, 37100 Tours",
    file: "/documents/planning-bctn-2026-2027.pdf",
    image: "/images/plannings/planning-bctn-2026-2027.webp",
    accent: "#f59e0b",
  },
  {
    clubId: 3,
    slug: "bclr",
    short: "BCLR",
    name: "Boxing Club La Riche",
    venue: "Salle Jean-Marie Bialy · 6 rue du Petit Plessis, 37520 La Riche",
    file: "/documents/planning-bclr-2026-2027.pdf",
    image: "/images/plannings/planning-bclr-2026-2027.webp",
    accent: "#ef4444",
  },
  {
    clubId: 2,
    slug: "bctm",
    short: "BCTM",
    name: "Boxing Club Tours Métropole",
    venue: "Complexe sportif Hallebardier · allée Yvon Gilbert, 37000 Tours",
    file: "/documents/planning-bctm-2026-2027.pdf",
    image: "/images/plannings/planning-bctm-2026-2027.webp",
    accent: "#ffffff",
  },
];

// ──────────────────────────────────────────────────────
// CONSTANTS
// ──────────────────────────────────────────────────────

const days: DayKey[] = [
  "Lundi",
  "Mardi",
  "Mercredi",
  "Jeudi",
  "Vendredi",
  "Samedi",
  "Dimanche",
];

const shortDayLabels: Record<DayKey, string> = {
  Lundi: "LUN",
  Mardi: "MAR",
  Mercredi: "MER",
  Jeudi: "JEU",
  Vendredi: "VEN",
  Samedi: "SAM",
  Dimanche: "DIM",
};

// ──────────────────────────────────────────────────────
// HELPERS
// ──────────────────────────────────────────────────────

function formatUpdatedAt(items: PlanningItem[]): string {
  const dates = items
    .map((i) => (i.updatedAt ? new Date(i.updatedAt) : null))
    .filter((d): d is Date => d instanceof Date && !Number.isNaN(d.getTime()));

  if (dates.length === 0) return GRILLE_UPDATED_AT;

  const latest = new Date(Math.max(...dates.map((d) => d.getTime())));
  return latest.toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function parseStartMinutes(time: string) {
  // Accepte « 18h30 », « 18H30 » et « 18:30 »
  const start = time.split(/[-–]/)[0].trim();
  const [h, m] = start.split(/[h:H]/).map(Number);
  if (Number.isNaN(h)) return 0;
  return h * 60 + (m || 0);
}

function buildClubsFromAPI(data: PlanningItem[]): Club[] {
  const baseClubs: Record<string, Club> = {
    "Tours Nord": {
      id: 1,
      name: "Boxing Club Tours Nord",
      cityLabel: "Tours Nord",
      address: "Salle Georges Carpentier · 81 av. de l’Europe, 37100 Tours",
      phone: "06 08 95 66 66",
      accent: "#ef4444",
      glow: "rgba(239,68,68,0.25)",
      age: "Enfants à partir de 6 ans",
      rows: [],
    },
    "Tours Métropole": {
      id: 2,
      name: "Boxing Club Tours Métropole",
      cityLabel: "Tours Métropole",
      address: "Complexe Hallebardier · allée Yvon Gilbert, 37000 Tours",
      phone: "06 08 95 66 66",
      accent: "#f59e0b",
      glow: "rgba(245,158,11,0.25)",
      age: "Enfants à partir de 6 ans",
      rows: [],
    },
    "La Riche": {
      id: 3,
      name: "Boxing Club La Riche",
      cityLabel: "La Riche",
      address: "Salle Jean-Marie Bialy · 6 rue du Petit Plessis, 37520 La Riche",
      phone: "06 08 95 66 66",
      accent: "#22c55e",
      glow: "rgba(34,197,94,0.25)",
      age: "Enfants à partir de 6 ans",
      rows: [],
    },
  };

  data.forEach((item) => {
    const club = baseClubs[item.club];
    if (!club) return;

    let row = club.rows.find((r) => r.discipline === item.discipline);
    if (!row) {
      row = {
        discipline: item.discipline,
        category: item.category ?? "Club",
        color: item.color ?? "#ffffff",
        slots: [],
      };
      club.rows.push(row);
    }

    row.slots.push({
      day: item.day,
      coach: item.coach,
      time: item.time,
      audience: item.audience,
      level: item.level,
    });
  });

  return Object.values(baseClubs);
}

function groupSlotsByDay(club: Club): Record<DayKey, DayBlock[]> {
  const map = Object.fromEntries(
    days.map((d) => [d, [] as DayBlock[]]),
  ) as Record<DayKey, DayBlock[]>;

  club.rows.forEach((row) => {
    row.slots.forEach((slot) => {
      map[slot.day].push({
        discipline: row.discipline,
        category: row.category,
        color: row.color,
        time: slot.time,
        audience: slot.audience,
        level: slot.level,
        coach: slot.coach,
      });
    });
  });

  days.forEach((day) => {
    map[day].sort(
      (a, b) => parseStartMinutes(a.time) - parseStartMinutes(b.time),
    );
  });

  return map;
}

function activeDaysForClub(club: Club): DayKey[] {
  const grouped = groupSlotsByDay(club);
  return days.filter((d) => grouped[d].length > 0);
}

// ──────────────────────────────────────────────────────
// COURSE CARD
// ──────────────────────────────────────────────────────

function CourseCard({ slot }: { slot: DayBlock }) {
  return (
    <div
      className="rounded-[24px] border border-white/10 bg-black/50 p-5 transition-all duration-300 hover:scale-[1.02] hover:border-white/20"
      style={{ borderLeftColor: slot.color + "66", borderLeftWidth: 3 }}
    >
      <p className="text-sm text-white/40">{slot.time}</p>
      <h3 className="mt-2 text-lg font-black uppercase leading-tight text-white">
        {slot.discipline}
      </h3>
      <p className="mt-3 text-sm text-white/60">{slot.audience}</p>
      <p className="mt-0.5 text-xs text-white/35">{slot.level}</p>
      {slot.coach ? (
        <p className="mt-2 text-xs font-semibold text-white/45">
          Avec {slot.coach}
        </p>
      ) : null}
    </div>
  );
}

// ──────────────────────────────────────────────────────
// PAGE
// ──────────────────────────────────────────────────────

export default function HorairesPageClient({
  initialPlanning,
}: {
  initialPlanning: PlanningItem[];
}) {
  const [planningData] = useState<PlanningItem[]>(initialPlanning);

  // Filters
  const [search, setSearch] = useState("");
  const [audienceFilter, setAudienceFilter] = useState("Tous");

  // Club selector
  const [activeClubId, setActiveClubId] = useState(1);

  // Mobile day navigation
  const [pickedDay, setPickedDay] = useState<DayKey | null>(null);

  // ── FILTER DATA ──────────────────────────────

  const filteredData = useMemo(() => {
    return planningData.filter((item) => {
      const matchSearch =
        !search ||
        item.discipline.toLowerCase().includes(search.toLowerCase());
      const matchAudience =
        audienceFilter === "Tous" ||
        item.audience.toLowerCase().includes(audienceFilter.toLowerCase());
      return matchSearch && matchAudience;
    });
  }, [planningData, search, audienceFilter]);

  // ── CLUBS + ACTIVE CLUB ──────────────────────

  const clubs = useMemo(
    () => buildClubsFromAPI(filteredData),
    [filteredData],
  );

  const grilleUpdatedAt = useMemo(
    () => formatUpdatedAt(planningData),
    [planningData],
  );

  const activePlanning = useMemo(
    () => PLANNING_FILES.find((p) => p.clubId === activeClubId),
    [activeClubId],
  );

  const activeClub = useMemo(
    () => clubs.find((c) => c.id === activeClubId) ?? clubs[0],
    [clubs, activeClubId],
  );

  // ── GROUPING ─────────────────────────────────

  const grouped = useMemo<Record<DayKey, DayBlock[]>>(
    () =>
      activeClub
        ? groupSlotsByDay(activeClub)
        : days.reduce<Record<DayKey, DayBlock[]>>(
            (acc, d) => ({ ...acc, [d]: [] }),
            {} as Record<DayKey, DayBlock[]>,
          ),
    [activeClub],
  );

  const shownDays = useMemo(
    () => (activeClub ? activeDaysForClub(activeClub) : []),
    [activeClub],
  );

  // ── JOUR AFFICHÉ SUR MOBILE ──────────────────
  // Valeur dérivée : le jour choisi s'il appartient au club actif, sinon le
  // premier jour disponible. Évite un setState dans un effet.

  const selectedDay: DayKey | null =
    pickedDay && shownDays.includes(pickedDay) ? pickedDay : (shownDays[0] ?? null);

  // ── UNIQUE AUDIENCES ─────────────────────────

  const audiences = useMemo(() => {
    const raw = [
      ...new Set(planningData.map((p) => p.audience.split("/")[0].trim())),
    ].filter(Boolean);
    return ["Tous", ...raw];
  }, [planningData]);

  // ── MOBILE DAY NAVIGATION ────────────────────

  const selectedDayIndex = selectedDay ? shownDays.indexOf(selectedDay) : 0;

  const goPrev = () => {
    if (selectedDayIndex > 0)
      setPickedDay(shownDays[selectedDayIndex - 1]);
  };

  const goNext = () => {
    if (selectedDayIndex < shownDays.length - 1)
      setPickedDay(shownDays[selectedDayIndex + 1]);
  };

  // ── RENDER ───────────────────────────────────

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#050505] pt-28 text-white md:pt-32">
        {/* ── HERO ───────────────────────────── */}

        <section className="border-b border-white/10 bg-gradient-to-b from-[#111] to-[#050505] py-14">
          <div className="mx-auto max-w-7xl px-6">
            <h1 className="text-4xl font-black uppercase tracking-wide">
              Horaires des clubs
            </h1>
            <p className="mt-4 max-w-2xl text-white/50">
              Retrouvez tous les créneaux des clubs Boxing Club Tours
              Métropole.
            </p>
          </div>
        </section>

        {/* =================================================
            PROGRAMMES DE LA SAISON — AFFICHES VISIBLES
        ================================================= */}
        <section className="relative overflow-hidden border-b border-white/10 py-8 md:py-14">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-[-4rem] top-12 h-40 w-40 rounded-full bg-amber-300/10 blur-3xl md:h-56 md:w-56" />
            <div className="absolute right-[-4rem] bottom-10 h-40 w-40 rounded-full bg-red-500/10 blur-3xl md:h-56 md:w-56" />
          </div>

          <div className="relative z-10 mx-auto max-w-7xl px-6">
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[0.62rem] font-bold uppercase tracking-[0.14em] text-amber-300 backdrop-blur-md md:px-4 md:py-2 md:text-[0.72rem] md:tracking-[0.18em]">
                <FileText size={13} />
                Programme 2026 - 2027
              </span>

              <h2 className="mt-4 text-[1.7rem] font-black uppercase leading-[0.96] tracking-[0.02em] text-white sm:text-[2rem] md:mt-5 md:text-4xl">
                Le planning de la saison
              </h2>

              <p className="mt-3 text-[0.9rem] leading-6 text-white/70 md:mt-4 md:text-base md:leading-7">
                Reprise des cours le 7 septembre 2026. Choisissez votre salle :
                le programme complet s’affiche, avec les tarifs, le matériel à
                prévoir et les temps forts de la saison.
              </p>
            </div>

            {/* Sélecteur de salle */}
            <div className="mt-6 flex flex-wrap justify-center gap-2.5 md:mt-8 md:gap-3">
              {PLANNING_FILES.map((item) => {
                const isActive = item.clubId === activeClubId;

                return (
                  <button
                    key={item.slug}
                    type="button"
                    onClick={() => setActiveClubId(item.clubId)}
                    aria-pressed={isActive}
                    className={`rounded-full border px-4 py-2.5 text-sm font-bold uppercase tracking-[0.1em] transition-all duration-300 md:px-6 md:py-3 ${
                      isActive
                        ? "border-white/20 bg-white/10 text-white"
                        : "border-white/10 bg-white/[0.03] text-white/50 hover:border-white/20 hover:text-white/80"
                    }`}
                    style={
                      isActive
                        ? { boxShadow: `0 0 26px ${item.accent}33` }
                        : undefined
                    }
                  >
                    <span style={{ color: isActive ? item.accent : undefined }}>
                      {item.short}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Affiche */}
            {activePlanning ? (
              <div className="mt-6 md:mt-10">
                <p className="text-center text-[0.84rem] leading-5 text-white/55 md:text-[0.9rem]">
                  <MapPin size={13} className="mr-1.5 inline align-[-2px]" />
                  {activePlanning.venue}
                </p>

                <a
                  href={activePlanning.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-4 block overflow-hidden rounded-[20px] border border-white/10 bg-white/[0.04] p-2 shadow-[0_18px_40px_rgba(0,0,0,0.28)] transition-colors duration-300 hover:border-white/25 md:mt-6 md:rounded-[28px] md:p-3"
                >
                  <Image
                    src={activePlanning.image}
                    alt={`Programme ${activePlanning.name} — saison 2026-2027`}
                    width={2200}
                    height={1556}
                    priority
                    sizes="(max-width: 1280px) 100vw, 1200px"
                    className="h-auto w-full rounded-[14px] md:rounded-[20px]"
                  />
                </a>

                <p className="mt-3 text-center text-[0.78rem] text-white/40">
                  <Maximize2 size={12} className="mr-1.5 inline align-[-1px]" />
                  Touchez l’affiche pour l’agrandir · la grille détaillée et les
                  filtres se trouvent juste en dessous
                </p>

                <p className="mt-1.5 text-center text-[0.74rem] text-white/30">
                  Affiche du club · mise à jour le {AFFICHES_UPDATED_AT}
                </p>

                <div className="mt-5 flex flex-col items-center justify-center gap-2.5 sm:flex-row md:mt-7 md:gap-3">
                  <a
                    href={activePlanning.file}
                    download
                    className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-red-600 px-5 py-3 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(220,38,38,0.24)] transition-all duration-300 hover:bg-red-700 md:px-6"
                  >
                    <Download size={16} />
                    Télécharger le PDF
                  </a>

                  <a
                    href={activePlanning.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-white/20 hover:bg-white/10 md:px-6"
                  >
                    <Printer size={16} />
                    Imprimer
                  </a>
                </div>
              </div>
            ) : null}
          </div>
        </section>

        {/* ── CONTENT ────────────────────────── */}

        <section className="py-10">
          <div className="mx-auto max-w-7xl px-6">
            {/* ── EN-TÊTE DE LA GRILLE ──────────── */}

            <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 className="text-[1.4rem] font-black uppercase tracking-[0.02em] text-white md:text-2xl">
                  La grille détaillée
                </h2>
                <p className="mt-1.5 text-[0.86rem] leading-5 text-white/50">
                  Recherchez une discipline, filtrez par public, naviguez jour
                  par jour.
                </p>
              </div>

              <p className="shrink-0 text-[0.74rem] text-white/30 sm:text-right">
                Grille · mise à jour le {grilleUpdatedAt}
              </p>
            </div>

            {/* ── CLUB SELECTOR ──────────────── */}

            <div className="mb-8 flex flex-wrap gap-3">
              {clubs.map((club) => (
                <button
                  key={club.id}
                  onClick={() => setActiveClubId(club.id)}
                  className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                    activeClubId === club.id
                      ? "scale-105 text-white"
                      : "bg-white/5 text-white/60 hover:bg-white/10"
                  }`}
                  style={
                    activeClubId === club.id
                      ? {
                          background: club.accent,
                          boxShadow: `0 8px 20px ${club.glow}`,
                        }
                      : {}
                  }
                >
                  {club.cityLabel}
                </button>
              ))}
            </div>

            {/* ── FILTERS ────────────────────── */}

            <div className="mb-8 flex flex-wrap items-center gap-3">
              {/* Search */}
              <div className="relative">
                <Search
                  size={14}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/30"
                />
                <input
                  type="text"
                  placeholder="Rechercher une discipline..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="h-10 rounded-full bg-white/10 pl-9 pr-9 text-sm text-white outline-none placeholder:text-white/30 focus:ring-2 focus:ring-white/20"
                />
                {search && (
                  <button
                    onClick={() => setSearch("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/60"
                  >
                    <X size={13} />
                  </button>
                )}
              </div>

              {/* Audience chips */}
              <div className="flex flex-wrap gap-2">
                {audiences.map((aud) => (
                  <button
                    key={aud}
                    onClick={() => setAudienceFilter(aud)}
                    className={`rounded-full px-4 py-2 text-xs font-semibold transition-all ${
                      audienceFilter === aud
                        ? "bg-white text-black"
                        : "bg-white/10 text-white/60 hover:bg-white/15"
                    }`}
                  >
                    {aud}
                  </button>
                ))}
              </div>
            </div>

            {/* ── EMPTY STATE ────────────────── */}

            {shownDays.length === 0 && (
              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-12 text-center">
                <p className="text-xl font-bold">Aucun cours disponible</p>
                <p className="mt-3 text-white/40">
                  {search || audienceFilter !== "Tous"
                    ? "Essayez d'autres filtres."
                    : "Ajoutez des créneaux depuis l'admin."}
                </p>
              </div>
            )}

            {shownDays.length > 0 && (
              <>
                {/* ── MOBILE: Day tabs + single column ── */}

                <div className="md:hidden">
                  {/* Day tabs */}
                  <div className="mb-5 flex items-center gap-2">
                    <button
                      onClick={goPrev}
                      disabled={selectedDayIndex === 0}
                      className="flex-shrink-0 rounded-xl bg-white/10 p-2 disabled:opacity-30"
                    >
                      <ChevronLeft size={16} />
                    </button>

                    <div className="flex flex-1 gap-2 overflow-x-auto pb-1 scrollbar-none">
                      {shownDays.map((day) => (
                        <button
                          key={day}
                          onClick={() => setPickedDay(day)}
                          className={`flex-shrink-0 rounded-full px-4 py-2 text-xs font-bold transition-all ${
                            selectedDay === day
                              ? "text-white"
                              : "bg-white/10 text-white/50"
                          }`}
                          style={
                            selectedDay === day
                              ? {
                                  background: activeClub?.accent,
                                  boxShadow: `0 4px 12px ${activeClub?.glow}`,
                                }
                              : {}
                          }
                        >
                          {shortDayLabels[day]}
                        </button>
                      ))}
                    </div>

                    <button
                      onClick={goNext}
                      disabled={
                        selectedDayIndex === shownDays.length - 1
                      }
                      className="flex-shrink-0 rounded-xl bg-white/10 p-2 disabled:opacity-30"
                    >
                      <ChevronRight size={16} />
                    </button>
                  </div>

                  {/* Day header */}
                  {selectedDay && (
                    <div
                      className="mb-4 rounded-2xl p-4 text-center text-xl font-black uppercase tracking-wide"
                      style={{
                        background: activeClub?.accent,
                        boxShadow: `0 10px 25px ${activeClub?.glow}`,
                      }}
                    >
                      {selectedDay}
                    </div>
                  )}

                  {/* Courses for selected day */}
                  <AnimatePresence mode="wait">
                    {selectedDay && (
                      <motion.div
                        key={selectedDay}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.2 }}
                        className="space-y-3"
                      >
                        {grouped[selectedDay].length === 0 ? (
                          <p className="py-8 text-center text-white/40">
                            Aucun cours ce jour.
                          </p>
                        ) : (
                          grouped[selectedDay].map((slot, i) => (
                            <CourseCard
                              key={`${slot.discipline}-${i}`}
                              slot={slot}
                            />
                          ))
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* ── DESKTOP: All days grid ── */}

                <div className="hidden md:grid md:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
                  {shownDays.map((day) => (
                    <div
                      key={day}
                      className="rounded-[32px] border border-white/10 bg-white/[0.03] p-5"
                    >
                      {/* Day header */}
                      <div
                        className="rounded-2xl p-4 text-center text-xl font-black uppercase tracking-wide"
                        style={{
                          background: activeClub?.accent,
                          boxShadow: `0 10px 25px ${activeClub?.glow}`,
                        }}
                      >
                        {shortDayLabels[day]}
                      </div>

                      {/* Courses */}
                      <div className="mt-5 space-y-4">
                        {grouped[day].map((slot, i) => (
                          <CourseCard
                            key={`${slot.discipline}-${i}`}
                            slot={slot}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}

            {/* ── MENTION EN CAS DE DIVERGENCE ──── */}

            <div className="mt-8 flex items-start gap-3 rounded-[18px] border border-white/10 bg-white/[0.03] p-4 md:mt-12 md:p-5">
              <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-amber-300/20 bg-amber-300/10 text-amber-300">
                <Info size={15} />
              </span>

              <p className="text-[0.84rem] leading-6 text-white/55 md:text-[0.88rem]">
                Cette grille reprend le programme affiché dans les salles. En
                cas de différence, <strong className="font-semibold text-white/75">l’affiche officielle du club fait
                foi</strong> — et en période de compétition, certains cours du samedi
                peuvent ne pas être assurés : voir avec l’entraîneur.
              </p>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
