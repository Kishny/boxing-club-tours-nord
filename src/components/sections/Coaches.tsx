"use client";

// =====================================================
// IMPORTS
// =====================================================
import Link from "next/link";
import Image from "next/image";
import { Award, ArrowRight, ShieldCheck, Dumbbell } from "lucide-react";

// =====================================================
// TYPE DES COACHS
// =====================================================
type Coach = {
  id: number;
  name: string;
  role: string;
  specialty: string;
  experience: string;
  description: string;
  image: string;
  badge: string;
  icon: "award" | "shield" | "training";
};

// =====================================================
// DONNÉES DES COACHS
// Tu pourras remplacer facilement ces données plus tard
// avec les vraies infos du club
// =====================================================
const coaches: Coach[] = [
  {
    id: 1,
    name: "Coach Principal",
    role: "Encadrement général",
    specialty: "Kickboxing • K1 • Full Contact",
    experience: "Expérience terrain & accompagnement technique",
    description:
      "Un encadrement exigeant et structuré pour faire progresser chaque pratiquant, du débutant au compétiteur, dans un cadre sérieux et motivant.",
    image: "/images/coach-1.png",
    badge: "Technique & leadership",
    icon: "award",
  },
  {
    id: 2,
    name: "Coach Combat",
    role: "Préparation & stratégie",
    specialty: "Travail tactique • Intensité • Mise en situation",
    experience: "Approche orientée performance et progression",
    description:
      "Un suivi précis sur le rythme, les enchaînements, le mental et la lecture du combat pour développer une boxe plus propre, plus lucide et plus efficace.",
    image: "/images/coach-2.png",
    badge: "Vision & intensité",
    icon: "shield",
  },
  {
    id: 3,
    name: "Coach Préparation",
    role: "Condition physique",
    specialty: "Cardio • Renforcement • Mobilité",
    experience: "Développement global et préparation ciblée",
    description:
      "Un accompagnement physique complet pour améliorer endurance, résistance, explosivité et récupération, avec une base de travail adaptée au niveau de chacun.",
    image: "/images/coach-3.png",
    badge: "Condition & rigueur",
    icon: "training",
  },
];

// =====================================================
// FONCTION UTILITAIRE POUR L’ICÔNE
// =====================================================
function renderCoachIcon(icon: Coach["icon"]) {
  switch (icon) {
    case "award":
      return <Award size={18} />;
    case "shield":
      return <ShieldCheck size={18} />;
    case "training":
      return <Dumbbell size={18} />;
    default:
      return <Award size={18} />;
  }
}

// =====================================================
// COMPOSANT SECTION COACHS
// =====================================================
export default function Coaches() {
  return (
    <section
      id="coachs"
      className="
        relative overflow-hidden
        bg-[#0f0f10]
        py-20 text-white md:py-24 lg:py-28
      "
    >
      {/* =================================================
          DÉCORS DE FOND PREMIUM
      ================================================= */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-20 h-56 w-56 rounded-full bg-red-500/10 blur-3xl" />
        <div className="absolute right-0 top-28 h-64 w-64 rounded-full bg-amber-400/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-60 w-60 rounded-full bg-white/5 blur-3xl" />
      </div>

      {/* =================================================
          CONTENEUR PRINCIPAL
      ================================================= */}
      <div className="container-custom relative z-10">
        {/* =============================================
            ENTÊTE DE SECTION
        ============================================= */}
        <div className="mx-auto max-w-3xl text-center">
          {/* Label premium */}
          <span
            className="
              inline-flex items-center rounded-full
              border border-white/10 bg-white/5
              px-4 py-2 text-[0.72rem] font-bold uppercase
              tracking-[0.18em] text-amber-300
              shadow-[0_8px_25px_rgba(0,0,0,0.12)]
              backdrop-blur-md
            "
          >
            L’équipe du club
          </span>

          {/* Titre principal */}
          <h2
            className="
              mt-5 text-4xl font-black uppercase leading-[0.95]
              tracking-[0.05em] text-white
              sm:text-5xl md:text-6xl
            "
          >
            Des coachs engagés,
            <br className="hidden sm:block" /> une progression encadrée
          </h2>

          {/* Texte d’introduction */}
          <p
            className="
              mx-auto mt-5 max-w-2xl
              text-sm leading-7 text-zinc-300
              sm:text-base md:text-lg
            "
          >
            Le club s’appuie sur un encadrement structuré, exigeant et humain,
            pour accompagner chaque pratiquant dans sa progression technique,
            physique et mentale.
          </p>
        </div>

        {/* =============================================
            GRILLE DES CARTES COACHS
        ============================================= */}
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {coaches.map((coach) => (
            <article
              key={coach.id}
              className="
                group relative overflow-hidden
                rounded-[30px] border border-white/10
                bg-white/[0.05] p-5
                shadow-[0_16px_40px_rgba(0,0,0,0.18)]
                backdrop-blur-xl
                transition-all duration-500
                hover:-translate-y-1.5
                hover:border-white/15
                hover:bg-white/[0.07]
                hover:shadow-[0_22px_55px_rgba(0,0,0,0.22)]
              "
            >
              {/* Accent visuel discret en fond */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-red-500/10 via-transparent to-amber-300/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              {/* Ligne décorative en haut */}
              <div className="absolute inset-x-6 top-0 h-[2px] bg-gradient-to-r from-red-500 via-amber-400 to-transparent opacity-80" />

              {/* =========================================
                  VISUEL DU COACH
              ========================================= */}
              <div className="relative z-10 overflow-hidden rounded-[24px] border border-white/10 bg-black/20">
                <div className="relative aspect-[4/4.6] w-full">
                  <Image
                    src={coach.image}
                    alt={coach.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="
                      object-cover object-center
                      transition-transform duration-700
                      group-hover:scale-[1.04]
                    "
                  />
                </div>

                {/* Overlay subtil sur l'image */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />

                {/* Badge sur l’image */}
                <div className="absolute left-4 top-4">
                  <span
                    className="
                      inline-flex items-center gap-2 rounded-full
                      border border-white/15 bg-black/35
                      px-3 py-1.5 text-[0.68rem] font-bold uppercase
                      tracking-[0.14em] text-white
                      backdrop-blur-md
                    "
                  >
                    {renderCoachIcon(coach.icon)}
                    {coach.badge}
                  </span>
                </div>
              </div>

              {/* =========================================
                  CONTENU DE LA CARTE
              ========================================= */}
              <div className="relative z-10 mt-5">
                {/* Nom + rôle */}
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-extrabold text-white">
                      {coach.name}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-red-300">
                      {coach.role}
                    </p>
                  </div>

                  {/* Numéro premium */}
                  <span
                    className="
                      inline-flex h-10 w-10 shrink-0 items-center justify-center
                      rounded-full border border-white/10
                      bg-white/8 text-sm font-bold text-white
                    "
                  >
                    {String(coach.id).padStart(2, "0")}
                  </span>
                </div>

                {/* Bloc spécialité */}
                <div className="mt-5 rounded-2xl border border-white/8 bg-white/[0.04] p-4">
                  <p className="text-xs font-bold uppercase tracking-[0.15em] text-white/45">
                    Spécialité
                  </p>
                  <p className="mt-2 text-sm font-semibold text-white/90">
                    {coach.specialty}
                  </p>
                </div>

                {/* Expérience */}
                <div className="mt-4 rounded-2xl border border-white/8 bg-white/[0.04] p-4">
                  <p className="text-xs font-bold uppercase tracking-[0.15em] text-white/45">
                    Expérience
                  </p>
                  <p className="mt-2 text-sm font-semibold text-white/85">
                    {coach.experience}
                  </p>
                </div>

                {/* Description */}
                <p className="mt-5 text-sm leading-7 text-zinc-300 md:text-[0.98rem]">
                  {coach.description}
                </p>

                {/* Footer CTA */}
                <div className="mt-7 flex items-center justify-between gap-4">
                  <span className="text-sm font-medium text-white/55">
                    Découvrir le parcours
                  </span>

                  <Link
                    href="#contact"
                    className="
                      inline-flex items-center gap-2 rounded-full
                      bg-white px-4 py-2.5 text-sm font-semibold text-black
                      transition-all duration-300
                      hover:bg-red-600 hover:text-white
                    "
                  >
                    Voir plus
                    <ArrowRight
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* =============================================
            BLOC BAS DE SECTION
        ============================================= */}
        <div
          className="
            mt-14 flex flex-col items-center justify-between gap-5
            rounded-[30px] border border-white/10
            bg-white/[0.05] px-6 py-6 text-center
            shadow-[0_14px_34px_rgba(0,0,0,0.14)]
            backdrop-blur-xl
            md:flex-row md:text-left
          "
        >
          {/* Texte bas */}
          <div className="max-w-2xl">
            <h3 className="text-xl font-extrabold text-white md:text-2xl">
              Un encadrement sérieux fait toute la différence
            </h3>
            <p className="mt-2 text-sm leading-7 text-zinc-300 md:text-base">
              Le club met l’accent sur la qualité de l’accompagnement, la
              progression durable et le respect du niveau de chacun, avec une
              vraie exigence sportive et humaine.
            </p>
          </div>

          {/* CTA global */}
          <Link
            href="#contact"
            className="
              inline-flex shrink-0 items-center justify-center
              rounded-full bg-red-600 px-6 py-3.5
              text-sm font-semibold text-white
              shadow-[0_12px_30px_rgba(220,38,38,0.22)]
              transition-all duration-300
              hover:-translate-y-[1px]
              hover:bg-red-700
              md:text-base
            "
          >
            Contacter l’équipe
          </Link>
        </div>
      </div>
    </section>
  );
}