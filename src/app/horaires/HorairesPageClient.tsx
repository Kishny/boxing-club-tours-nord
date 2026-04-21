"use client";

// =====================================================
// IMPORTS
// =====================================================
import { useMemo, useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import {
  CalendarDays,
  MapPin,
  Phone,
  Sparkles,
  ChevronRight,
  ShieldCheck,
  ChevronDown,
  Clock3,
} from "lucide-react";

// =====================================================
// TYPES
// =====================================================
type DayKey =
  | "Lundi"
  | "Mardi"
  | "Mercredi"
  | "Jeudi"
  | "Vendredi"
  | "Samedi"
  | "Dimanche";

type ScheduleCell = {
  day: DayKey;
  time: string;
  audience: string;
  level: string;
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
  notes: string;
  rows: DisciplineRow[];
};

type DayBlock = {
  discipline: string;
  category: string;
  color: string;
  time: string;
  audience: string;
  level: string;
};

// =====================================================
// JOURS
// =====================================================
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

// =====================================================
// DONNÉES CLUBS
// =====================================================
const clubs: Club[] = [
  {
    id: 1,
    name: "Boxing Club Tours Nord",
    cityLabel: "Tours Nord",
    address: "81 Av. de l'Europe, 37100 Tours",
    phone: "06 08 95 66 66",
    accent: "#ef4444",
    glow: "rgba(239,68,68,0.18)",
    age: "Enfants à partir de 6 ans",
    notes:
      "Créneaux fictifs temporaires. Les disciplines et horaires pourront être remplacés facilement dès validation finale.",
    rows: [
      {
        discipline: "Kickboxing",
        category: "Combat",
        color: "#ef4444",
        slots: [
          {
            day: "Lundi",
            time: "18:30–19:30",
            audience: "Enfants / Ados",
            level: "Initiation",
          },
          {
            day: "Mercredi",
            time: "19:15–21:30",
            audience: "Adultes",
            level: "Confirmé",
          },
          {
            day: "Vendredi",
            time: "18:15–19:30",
            audience: "Ados / Adultes",
            level: "Tous niveaux",
          },
        ],
      },
      {
        discipline: "K1 Rules",
        category: "Combat",
        color: "#f97316",
        slots: [
          {
            day: "Lundi",
            time: "19:30–21:00",
            audience: "Ados / Adultes",
            level: "Tous niveaux",
          },
          {
            day: "Jeudi",
            time: "19:30–21:00",
            audience: "Adultes",
            level: "Intermédiaire",
          },
        ],
      },
      {
        discipline: "Boxe anglaise",
        category: "Technique",
        color: "#60a5fa",
        slots: [
          {
            day: "Mardi",
            time: "18:30–19:30",
            audience: "Enfants / Ados",
            level: "Débutant",
          },
        ],
      },
      {
        discipline: "Muaythai",
        category: "Combat",
        color: "#f59e0b",
        slots: [
          {
            day: "Jeudi",
            time: "19:30–21:00",
            audience: "Adultes",
            level: "Tous niveaux",
          },
        ],
      },
      {
        discipline: "Pancrace",
        category: "Mixte",
        color: "#22c55e",
        slots: [
          {
            day: "Mercredi",
            time: "18:00–19:15",
            audience: "Ados / Adultes",
            level: "Initiation",
          },
        ],
      },
      {
        discipline: "Savate",
        category: "Technique",
        color: "#ffffff",
        slots: [
          {
            day: "Jeudi",
            time: "18:30–19:30",
            audience: "Enfants / Ados",
            level: "Débutant",
          },
        ],
      },
      {
        discipline: "Aérokick",
        category: "Fitness",
        color: "#eab308",
        slots: [
          {
            day: "Mercredi",
            time: "15:00–16:15",
            audience: "Ados / Adultes",
            level: "Tous niveaux",
          },
        ],
      },
      {
        discipline: "Cardio Step",
        category: "Fitness",
        color: "#a855f7",
        slots: [
          {
            day: "Mercredi",
            time: "16:15–17:30",
            audience: "Ados / Adultes",
            level: "Tous niveaux",
          },
          {
            day: "Vendredi",
            time: "17:15–18:15",
            audience: "Ados / Adultes",
            level: "Tous niveaux",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "Boxing Club Tours Métropole",
    cityLabel: "Tours Métropole",
    address: "65 Av. du Général de Gaulle, 37000 Tours",
    phone: "06 08 95 66 66",
    accent: "#f59e0b",
    glow: "rgba(245,158,11,0.18)",
    age: "Enfants à partir de 6 ans",
    notes:
      "Planning provisoire pensé pour structurer la page. Les vrais créneaux pourront être injectés ensuite sans refaire le design.",
    rows: [
      {
        discipline: "Aérokick",
        category: "Fitness",
        color: "#eab308",
        slots: [
          {
            day: "Lundi",
            time: "10:30–12:00",
            audience: "Adultes",
            level: "Tous niveaux",
          },
          {
            day: "Mercredi",
            time: "14:15–15:30",
            audience: "Ados / Adultes",
            level: "Tous niveaux",
          },
          {
            day: "Vendredi",
            time: "10:30–12:00",
            audience: "Adultes",
            level: "Tous niveaux",
          },
        ],
      },
      {
        discipline: "Cardio Step",
        category: "Fitness",
        color: "#a855f7",
        slots: [
          {
            day: "Mardi",
            time: "10:30–12:00",
            audience: "Adultes",
            level: "Tous niveaux",
          },
          {
            day: "Jeudi",
            time: "10:30–12:00",
            audience: "Adultes",
            level: "Tous niveaux",
          },
        ],
      },
      {
        discipline: "Boxe anglaise",
        category: "Technique",
        color: "#60a5fa",
        slots: [
          {
            day: "Lundi",
            time: "18:00–19:15",
            audience: "Ados / Adultes",
            level: "Débutant",
          },
          {
            day: "Vendredi",
            time: "18:00–19:15",
            audience: "Ados / Adultes",
            level: "Intermédiaire",
          },
        ],
      },
      {
        discipline: "Kickboxing",
        category: "Combat",
        color: "#ef4444",
        slots: [
          {
            day: "Mardi",
            time: "18:00–19:15",
            audience: "Enfants / Ados",
            level: "Initiation",
          },
          {
            day: "Jeudi",
            time: "19:15–21:30",
            audience: "Adultes",
            level: "Tous niveaux",
          },
        ],
      },
      {
        discipline: "Pancrace",
        category: "Mixte",
        color: "#22c55e",
        slots: [
          {
            day: "Mardi",
            time: "19:15–21:30",
            audience: "Adultes",
            level: "Intermédiaire",
          },
        ],
      },
      {
        discipline: "Muaythai",
        category: "Combat",
        color: "#f97316",
        slots: [
          {
            day: "Mercredi",
            time: "18:00–19:15",
            audience: "Ados / Adultes",
            level: "Débutant / intermédiaire",
          },
        ],
      },
      {
        discipline: "K1 Rules",
        category: "Combat",
        color: "#f59e0b",
        slots: [
          {
            day: "Lundi",
            time: "19:15–21:30",
            audience: "Adultes",
            level: "Confirmé / compétition",
          },
          {
            day: "Mercredi",
            time: "19:15–21:30",
            audience: "Adultes",
            level: "Confirmé",
          },
        ],
      },
      {
        discipline: "Savate",
        category: "Technique",
        color: "#ffffff",
        slots: [
          {
            day: "Jeudi",
            time: "18:00–19:15",
            audience: "Ados / Adultes",
            level: "Initiation",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    name: "Boxing Club La Riche",
    cityLabel: "La Riche",
    address: "1 Rue du Petit Plessis, 37520 La Riche",
    phone: "02 47 55 51 61",
    accent: "#22c55e",
    glow: "rgba(34,197,94,0.18)",
    age: "Enfants à partir de 6 ans",
    notes:
      "Version structurée et compacte pensée pour un remplacement rapide des données par les vraies informations du club.",
    rows: [
      {
        discipline: "Kickboxing",
        category: "Combat",
        color: "#ef4444",
        slots: [
          {
            day: "Lundi",
            time: "18:30–19:30",
            audience: "Enfants / Ados",
            level: "Initiation",
          },
          {
            day: "Mardi",
            time: "19:30–21:30",
            audience: "Adultes",
            level: "Intermédiaire",
          },
          {
            day: "Mercredi",
            time: "19:15–21:30",
            audience: "Adultes",
            level: "Confirmé",
          },
        ],
      },
      {
        discipline: "Muaythai",
        category: "Combat",
        color: "#f59e0b",
        slots: [
          {
            day: "Lundi",
            time: "19:30–21:30",
            audience: "Adultes",
            level: "Tous niveaux",
          },
          {
            day: "Jeudi",
            time: "19:30–21:30",
            audience: "Adultes",
            level: "Intermédiaire",
          },
        ],
      },
      {
        discipline: "Savate",
        category: "Technique",
        color: "#ffffff",
        slots: [
          {
            day: "Mardi",
            time: "18:30–19:30",
            audience: "Enfants / Ados",
            level: "Débutant",
          },
        ],
      },
      {
        discipline: "Pancrace",
        category: "Mixte",
        color: "#22c55e",
        slots: [
          {
            day: "Mercredi",
            time: "18:00–19:15",
            audience: "Ados / Adultes",
            level: "Initiation",
          },
        ],
      },
      {
        discipline: "Boxe anglaise",
        category: "Technique",
        color: "#60a5fa",
        slots: [
          {
            day: "Jeudi",
            time: "18:30–19:30",
            audience: "Enfants / Ados",
            level: "Débutant",
          },
        ],
      },
      {
        discipline: "Aérokick / Cardio Combat",
        category: "Fitness",
        color: "#eab308",
        slots: [
          {
            day: "Vendredi",
            time: "18:30–20:00",
            audience: "Ados / Adultes",
            level: "Tous niveaux",
          },
        ],
      },
      {
        discipline: "Cardio Step",
        category: "Fitness",
        color: "#a855f7",
        slots: [
          {
            day: "Mercredi",
            time: "14:15–15:30",
            audience: "Ados / Adultes",
            level: "Tous niveaux",
          },
        ],
      },
      {
        discipline: "Séance technique club",
        category: "Club",
        color: "#14b8a6",
        slots: [
          {
            day: "Samedi",
            time: "10:30–12:00",
            audience: "Ados / Adultes",
            level: "Tous niveaux",
          },
        ],
      },
    ],
  },
];

// =====================================================
// HELPERS
// =====================================================
function shortAudience(audience: string) {
  return audience
    .replace("Enfants / Ados", "Enf./Ados")
    .replace("Ados / Adultes", "Ados/Adultes")
    .replace("Débutant / intermédiaire", "Déb./Inter.")
    .replace("Confirmé / compétition", "Conf./Comp.");
}

function parseStartMinutes(time: string) {
  const start = time.split("–")[0].trim();
  const [h, m] = start.split(":").map(Number);
  return h * 60 + m;
}

function groupSlotsByDay(club: Club) {
  const map: Record<DayKey, DayBlock[]> = {
    Lundi: [],
    Mardi: [],
    Mercredi: [],
    Jeudi: [],
    Vendredi: [],
    Samedi: [],
    Dimanche: [],
  };

  club.rows.forEach((row) => {
    row.slots.forEach((slot) => {
      map[slot.day].push({
        discipline: row.discipline,
        category: row.category,
        color: row.color,
        time: slot.time,
        audience: slot.audience,
        level: slot.level,
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

function activeDaysForClub(club: Club) {
  const grouped = groupSlotsByDay(club);
  return days.filter((day) => grouped[day].length > 0);
}

function getDayHeaderStyle(club: Club) {
  const accent = club.accent;

  return {
    background: `linear-gradient(180deg, ${accent} 0%, ${accent}dd 55%, ${accent}c4 100%)`,
    boxShadow: `
      0 12px 30px ${club.glow},
      inset 0 1px 0 rgba(255,255,255,0.18),
      inset 0 -10px 18px rgba(0,0,0,0.18)
    `,
  };
}

// =====================================================
// MOBILE
// =====================================================
function MobileDayAccordion({ club }: { club: Club }) {
  const [openDay, setOpenDay] = useState<DayKey | null>(null);
  const grouped = useMemo(() => groupSlotsByDay(club), [club]);
  const shownDays = useMemo(() => activeDaysForClub(club), [club]);

  return (
    <div className="mt-6 space-y-2 md:hidden">
      {shownDays.map((day) => {
        const slots = grouped[day];
        const isOpen = openDay === day;

        return (
          <div
            key={day}
            className="overflow-hidden rounded-[18px] border border-white/10 bg-black/35 backdrop-blur-xl"
          >
            <button
              type="button"
              onClick={() => setOpenDay(isOpen ? null : day)}
              className="flex w-full items-center justify-between px-4 py-3.5 text-left"
            >
              <div className="flex items-center gap-2.5">
                <span
                  className="rounded-full px-3 py-1 text-[0.72rem] font-black uppercase tracking-[0.12em] text-white"
                  style={getDayHeaderStyle(club)}
                >
                  {shortDayLabels[day]}
                </span>
                <span className="text-[0.8rem] font-semibold text-white/72">
                  {slots.length} créneau{slots.length > 1 ? "x" : ""}
                </span>
              </div>

              <ChevronDown
                size={18}
                className={`text-white/50 transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {isOpen && (
              <div className="border-t border-white/10 px-3 pb-3 pt-3">
                <div className="space-y-2.5">
                  {slots.map((item, index) => (
                    <div
                      key={`${day}-${item.discipline}-${index}`}
                      className="rounded-[16px] border bg-black/60 p-3"
                      style={{
                        borderColor: `${item.color}88`,
                        boxShadow: `0 0 16px ${item.color}20`,
                      }}
                    >
                      <p className="text-[0.72rem] font-semibold uppercase tracking-[0.08em] text-white/78">
                        {item.time}
                      </p>
                      <p className="mt-1 text-[0.95rem] font-black uppercase leading-5 text-white">
                        {item.discipline}
                      </p>
                      <p className="mt-1 text-[0.78rem] text-white/68">
                        {shortAudience(item.audience)}
                      </p>
                      <p
                        className="mt-2 text-[0.66rem] font-bold uppercase tracking-[0.1em]"
                        style={{ color: item.color }}
                      >
                        {item.level}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

// =====================================================
// PAGE
// =====================================================
export default function HorairesPageClient() {
  const [activeClubId, setActiveClubId] = useState<number>(clubs[0].id);

  const activeClub = useMemo(
    () => clubs.find((club) => club.id === activeClubId) ?? clubs[0],
    [activeClubId],
  );

  const grouped = useMemo(() => groupSlotsByDay(activeClub), [activeClub]);
  const shownDays = useMemo(() => activeDaysForClub(activeClub), [activeClub]);

  return (
    <>
      <Navbar />

      <main className="bg-[#070707] text-white">
        {/* HERO */}
        <section className="relative overflow-hidden border-b border-white/10 pt-[120px] pb-8 md:pt-[185px] md:pb-20 lg:pb-24">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -left-20 top-6 h-40 w-40 rounded-full bg-red-600/16 blur-3xl md:top-10 md:h-72 md:w-72 md:bg-red-600/18" />
            <div className="absolute right-0 top-0 h-44 w-44 rounded-full bg-amber-400/12 blur-3xl md:h-80 md:w-80 md:bg-amber-400/14" />
            <div className="absolute bottom-0 left-1/3 h-36 w-36 rounded-full bg-white/5 blur-3xl md:h-72 md:w-72 md:bg-white/6" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#111111] via-[#0a0a0a] to-[#050505]" />
            <div className="absolute inset-0 opacity-[0.04] [background-image:linear-gradient(rgba(255,255,255,0.26)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.26)_1px,transparent_1px)] [background-size:28px_28px] md:opacity-[0.05] md:[background-size:34px_34px]" />
          </div>

          <div className="container-custom relative z-10">
            <div className="mx-auto max-w-5xl text-center">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.06] px-2.5 py-1 text-[0.56rem] font-bold uppercase tracking-[0.12em] text-amber-300 shadow-[0_8px_20px_rgba(0,0,0,0.16)] backdrop-blur-md sm:px-3 sm:py-1.5 sm:text-[0.62rem] md:px-4 md:py-2 md:text-[0.72rem] md:tracking-[0.18em]">
                <CalendarDays size={11} className="md:h-[14px] md:w-[14px]" />
                Organisation des clubs
              </span>

              <h1 className="mt-3 text-[2rem] font-black uppercase leading-[0.9] tracking-[0.025em] text-white sm:text-[2.5rem] md:mt-5 md:text-6xl md:tracking-[0.04em] xl:text-7xl">
                Le planning
                <br className="hidden sm:block" />
                <span className="block bg-gradient-to-r from-red-500 via-white to-amber-300 bg-clip-text text-transparent">
                  des clubs
                </span>
              </h1>

              <p className="mx-auto mt-3 max-w-[23rem] text-[0.88rem] leading-5 text-white/68 sm:max-w-[30rem] sm:text-[0.94rem] sm:leading-6 md:mt-5 md:max-w-3xl md:text-lg md:leading-7">
                Un rendu plus immersif, plus sportif et plus premium, inspiré
                d’un vrai planning de salle haut de gamme.
              </p>
            </div>
          </div>
        </section>

        {/* CONTENT */}
        <section className="relative overflow-hidden py-8 md:py-14 lg:py-18">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-[-4rem] top-16 h-56 w-56 rounded-full bg-red-600/10 blur-3xl" />
            <div className="absolute right-[-4rem] bottom-10 h-56 w-56 rounded-full bg-amber-400/10 blur-3xl" />
          </div>

          <div className="container-custom relative z-10">
            {/* SWITCH CLUB */}
            <div className="mb-6 md:mb-8">
              <div className="inline-flex rounded-[22px] border border-white/10 bg-white/[0.05] p-1.5 backdrop-blur-xl">
                <div className="flex flex-wrap gap-1.5">
                  {clubs.map((club) => {
                    const isActive = activeClub.id === club.id;

                    return (
                      <button
                        key={club.id}
                        type="button"
                        onClick={() => setActiveClubId(club.id)}
                        className={`inline-flex items-center gap-2 rounded-[16px] px-3 py-2 text-[0.72rem] font-bold uppercase tracking-[0.12em] transition-all duration-300 md:px-4 md:py-2.5 md:text-[0.76rem] ${
                          isActive
                            ? "bg-white text-black shadow-[0_10px_26px_rgba(255,255,255,0.12)]"
                            : "text-white/72 hover:bg-white/[0.08] hover:text-white"
                        }`}
                      >
                        <span
                          className="h-2 w-2 rounded-full"
                          style={{
                            backgroundColor: club.accent,
                            boxShadow: `0 0 12px ${club.glow}`,
                          }}
                        />
                        {club.cityLabel}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* INFOS CLUB */}
            <article className="relative overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.04] p-4 shadow-[0_16px_34px_rgba(0,0,0,0.18)] backdrop-blur-xl md:rounded-[34px] md:p-8">
              <div
                className="absolute inset-x-0 top-0 h-[2px]"
                style={{
                  background: `linear-gradient(to right, ${activeClub.accent}, rgba(255,255,255,0.5), transparent)`,
                }}
              />

              <div
                className="pointer-events-none absolute inset-0 opacity-90"
                style={{
                  background: `radial-gradient(circle at top right, ${activeClub.glow} 0%, transparent 34%)`,
                }}
              />

              <div className="relative z-10">
                <div className="flex flex-col gap-4 xl:flex-row xl:items-start xl:justify-between">
                  <div className="max-w-4xl">
                    <span
                      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.08] px-3 py-1.5 text-[0.68rem] font-bold uppercase tracking-[0.16em] text-white/85 md:text-[0.72rem]"
                      style={{ boxShadow: `0 0 24px ${activeClub.glow}` }}
                    >
                      <Sparkles size={13} />
                      {activeClub.cityLabel}
                    </span>

                    <h2 className="mt-4 text-[1.5rem] font-black uppercase leading-[0.96] text-white sm:text-[1.8rem] md:text-4xl xl:text-5xl">
                      {activeClub.name}
                    </h2>

                    <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
                      <div className="rounded-[16px] border border-white/10 bg-white/[0.04] p-3.5">
                        <p className="text-[0.62rem] font-bold uppercase tracking-[0.14em] text-white/50">
                          Adresse
                        </p>
                        <p className="mt-2 flex items-start gap-2 text-[0.84rem] leading-6 text-white/76 md:text-[0.9rem]">
                          <MapPin size={15} className="mt-1 shrink-0" />
                          <span>{activeClub.address}</span>
                        </p>
                      </div>

                      <div className="rounded-[16px] border border-white/10 bg-white/[0.04] p-3.5">
                        <p className="text-[0.62rem] font-bold uppercase tracking-[0.14em] text-white/50">
                          Téléphone
                        </p>
                        <p className="mt-2 flex items-center gap-2 text-[0.84rem] leading-6 text-white/76 md:text-[0.9rem]">
                          <Phone size={15} className="shrink-0" />
                          <span>{activeClub.phone}</span>
                        </p>
                      </div>

                      <div className="rounded-[16px] border border-white/10 bg-white/[0.04] p-3.5 md:col-span-2 xl:col-span-1">
                        <p className="text-[0.62rem] font-bold uppercase tracking-[0.14em] text-white/50">
                          Public
                        </p>
                        <p className="mt-2 flex items-center gap-2 text-[0.84rem] leading-6 text-white/76 md:text-[0.9rem]">
                          <ShieldCheck size={15} className="shrink-0" />
                          <span>{activeClub.age}</span>
                        </p>
                      </div>
                    </div>

                    <p className="mt-4 max-w-3xl text-[0.8rem] leading-6 text-white/45 md:text-sm">
                      {activeClub.notes}
                    </p>
                  </div>

                  <div className="flex flex-col gap-2 sm:flex-row xl:flex-col xl:items-end">
                    <Link
                      href="/contact"
                      className="inline-flex min-h-[44px] items-center justify-center rounded-full border border-white/10 bg-white/[0.06] px-4 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:border-white/20 hover:bg-white/[0.12]"
                    >
                      Demander des infos
                    </Link>

                    <Link
                      href="/inscription"
                      className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-black transition-all duration-300 hover:bg-red-600 hover:text-white"
                    >
                      Rejoindre le club
                      <ChevronRight size={16} />
                    </Link>
                  </div>
                </div>

                {/* LEGENDE */}
                <div className="mt-6 md:mt-8">
                  <p className="text-[0.68rem] font-bold uppercase tracking-[0.14em] text-amber-300 md:text-[0.72rem]">
                    Légende des disciplines
                  </p>

                  <div className="mt-3 flex flex-wrap gap-2.5">
                    {activeClub.rows.map((row) => (
                      <div
                        key={row.discipline}
                        className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-[0.68rem] font-semibold text-white/76 md:text-[0.72rem]"
                      >
                        <span
                          className="h-2.5 w-2.5 rounded-full"
                          style={{
                            backgroundColor: row.color,
                            boxShadow: `0 0 12px ${row.color}`,
                          }}
                        />
                        {row.discipline}
                      </div>
                    ))}
                  </div>
                </div>

                {/* DESKTOP PLANNING POSTER STYLE */}
                <div className="mt-8 hidden md:block">
                  <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-black/55 px-5 py-6 shadow-[0_18px_40px_rgba(0,0,0,0.32)] backdrop-blur-xl lg:px-6 lg:py-8">
                    <div className="pointer-events-none absolute inset-0">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03),transparent_45%)]" />
                      <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(rgba(255,255,255,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.18)_1px,transparent_1px)] [background-size:26px_26px]" />
                    </div>

                    <div className="relative z-10">
                      <div className="mb-6 text-center">
                        <p className="text-[3rem] font-black uppercase leading-none tracking-[0.03em] text-white lg:text-[4.2rem]">
                          PLANNING
                        </p>
                        <p className="mt-2 inline-flex items-center gap-2 text-[0.72rem] font-bold uppercase tracking-[0.16em] text-white/48">
                          <Clock3 size={14} />
                          {activeClub.cityLabel} • semaine type
                        </p>
                      </div>

                      <div
                        className={`grid gap-4 ${
                          shownDays.length <= 5
                            ? "grid-cols-5"
                            : shownDays.length === 6
                              ? "grid-cols-6"
                              : "grid-cols-7"
                        }`}
                      >
                        {shownDays.map((day) => {
                          const slots = grouped[day];

                          return (
                            <div key={day} className="flex flex-col gap-4">
                              <div
                                className="rounded-[22px] px-3 py-3 text-center"
                                style={getDayHeaderStyle(activeClub)}
                              >
                                <span className="text-[1.45rem] font-black uppercase tracking-[0.08em] text-white lg:text-[1.7rem]">
                                  {shortDayLabels[day]}
                                </span>
                              </div>

                              <div className="flex flex-col gap-3">
                                {slots.map((slot, index) => (
                                  <div
                                    key={`${day}-${slot.discipline}-${index}`}
                                    className="rounded-[22px] border bg-black/85 px-4 py-4 shadow-[0_10px_24px_rgba(0,0,0,0.25)] transition-all duration-300 hover:-translate-y-[2px]"
                                    style={{
                                      borderColor: `${slot.color}cc`,
                                      boxShadow: `0 0 0 1px ${slot.color}44, 0 0 18px ${slot.color}18`,
                                    }}
                                  >
                                    <p className="text-[0.92rem] font-medium uppercase tracking-[0.04em] text-white/88 lg:text-[1rem]">
                                      {slot.time}
                                    </p>

                                    <p className="mt-2 text-[1.1rem] font-black uppercase leading-[1.1] text-white lg:text-[1.28rem]">
                                      {slot.discipline}
                                    </p>

                                    <p className="mt-2 text-[0.92rem] uppercase tracking-[0.05em] text-white/84 lg:text-[0.98rem]">
                                      {slot.audience}
                                    </p>

                                    <p
                                      className="mt-2 text-[0.76rem] font-bold uppercase tracking-[0.12em] lg:text-[0.82rem]"
                                      style={{ color: slot.color }}
                                    >
                                      {slot.level}
                                    </p>
                                  </div>
                                ))}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  <p className="mt-4 text-[0.74rem] leading-6 text-white/38 xl:text-sm">
                    Rendu inspiré d’un visuel de planning de salle, retravaillé
                    pour le web avec la palette du site.
                  </p>
                </div>

                {/* MOBILE */}
                <MobileDayAccordion club={activeClub} />

                {/* MINI BLOCS */}
                <div className="mt-5 grid gap-2.5 md:mt-7 md:grid-cols-3">
                  <div className="rounded-[16px] border border-emerald-400/15 bg-emerald-400/8 px-3.5 py-3">
                    <p className="text-[0.66rem] font-bold uppercase tracking-[0.12em] text-emerald-300">
                      Lecture rapide
                    </p>
                    <p className="mt-1 text-[0.78rem] leading-5 text-white/70">
                      Un seul club affiché pour alléger la page.
                    </p>
                  </div>

                  <div className="rounded-[16px] border border-amber-300/15 bg-amber-300/8 px-3.5 py-3">
                    <p className="text-[0.66rem] font-bold uppercase tracking-[0.12em] text-amber-300">
                      Style immersif
                    </p>
                    <p className="mt-1 text-[0.78rem] leading-5 text-white/70">
                      Une lecture façon planning mural premium.
                    </p>
                  </div>

                  <div className="rounded-[16px] border border-white/10 bg-white/[0.04] px-3.5 py-3">
                    <p className="text-[0.66rem] font-bold uppercase tracking-[0.12em] text-white/70">
                      Données évolutives
                    </p>
                    <p className="mt-1 text-[0.78rem] leading-5 text-white/70">
                      Remplacement simple quand tu auras les vrais créneaux.
                    </p>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
