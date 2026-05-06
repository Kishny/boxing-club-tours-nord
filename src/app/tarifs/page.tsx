// =====================================================
// IMPORTS
// =====================================================
import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { fetchCollection } from "@/lib/db-fetch";
import Link from "next/link";
import {
  BadgeEuro,
  Check,
  CreditCard,
  ShieldCheck,
  Sparkles,
  ChevronRight,
  Wallet,
  Receipt,
} from "lucide-react";

// =====================================================
// SEO PAGE TARIFS
// =====================================================
export const metadata: Metadata = {
  title: "Tarifs des clubs",
  description:
    "Consultez les tarifs du Boxing Club Tours Nord, Tours Métropole et La Riche : adhésion, formules, séance d’essai et informations pratiques.",
  alternates: {
    canonical: "https://boxingclub-tours.fr/tarifs",
  },
};

// =====================================================
// TYPES
// =====================================================
type PricingPlan = {
  id: number;
  name: string;
  audience: string;
  price: string;
  frequency: string;
  accent: string;
  glow: string;
  description: string;
  features: string[];
  badge?: string;
};

const ACCENT_PALETTE = ["#22c55e", "#ef4444", "#f59e0b", "#60a5fa", "#a855f7"];
const GLOW_PALETTE = [
  "rgba(34,197,94,0.20)",
  "rgba(239,68,68,0.22)",
  "rgba(245,158,11,0.22)",
  "rgba(96,165,250,0.22)",
  "rgba(168,85,247,0.22)",
];

const hardcodedPricingPlans: PricingPlan[] = [
  {
    id: 1,
    name: "Formule Découverte",
    audience: "Enfants 6+ / Débutants",
    price: "29€",
    frequency: "/ mois",
    accent: "#22c55e",
    glow: "rgba(34,197,94,0.20)",
    description:
      "Une formule pensée pour démarrer sereinement, découvrir l’univers du club et intégrer un premier rythme d’entraînement.",
    features: [
      "Accès à 1 à 2 créneaux par semaine",
      "Encadrement initiation",
      "Suivi progressif",
      "Accès aux clubs selon créneaux disponibles",
    ],
  },
  {
    id: 2,
    name: "Formule Club",
    audience: "Ados / Adultes",
    price: "49€",
    frequency: "/ mois",
    accent: "#ef4444",
    glow: "rgba(239,68,68,0.22)",
    description:
      "La formule centrale du club, pensée pour une pratique régulière avec un vrai rythme de progression.",
    features: [
      "Accès à plusieurs créneaux hebdomadaires",
      "Travail technique et physique",
      "Accès multi-disciplines selon planning",
      "Formule idéale pour progression continue",
    ],
    badge: "La plus choisie",
  },
  {
    id: 3,
    name: "Formule Performance",
    audience: "Confirmés / Compétition",
    price: "69€",
    frequency: "/ mois",
    accent: "#f59e0b",
    glow: "rgba(245,158,11,0.22)",
    description:
      "Pour les pratiquants qui veulent un engagement plus poussé, plus de volume, plus d’intensité et un vrai cadre d’évolution.",
    features: [
      "Accès prioritaire aux créneaux avancés",
      "Séances intensité / préparation",
      "Approche orientée performance",
      "Idéal pour compétiteurs ou profils engagés",
    ],
    badge: "Engagement fort",
  },
];

// =====================================================
// PAGE TARIFS
// =====================================================
export default async function TarifsPage() {
  const dbPricing = await fetchCollection<Record<string, unknown>>("pricing", {
    order: 1,
  });

  const pricingPlans: PricingPlan[] =
    dbPricing && dbPricing.length > 0
      ? dbPricing.map((doc, i) => ({
          id: i + 1,
          name: (doc.title as string) || "",
          audience: (doc.category as string) || "",
          price: `${doc.price ?? ""}€`,
          frequency: `/ ${(doc.period as string) || "mois"}`,
          accent: ACCENT_PALETTE[i % ACCENT_PALETTE.length],
          glow: GLOW_PALETTE[i % GLOW_PALETTE.length],
          description: (doc.description as string) || "",
          features: Array.isArray(doc.features)
            ? (doc.features as string[])
            : [],
          badge: (doc.promo as string) || undefined,
        }))
      : hardcodedPricingPlans;

  return (
    <>
      <Navbar />

      <main className="bg-[#070707] text-white">
        {/* =================================================
            HERO
        ================================================= */}
        <section className="relative overflow-hidden border-b border-white/10 pt-[120px] pb-8 md:pt-[185px] md:pb-20 lg:pb-24">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -left-20 top-6 h-40 w-40 rounded-full bg-red-600/16 blur-3xl md:top-10 md:h-72 md:w-72 md:bg-red-600/18" />
            <div className="absolute right-0 top-0 h-44 w-44 rounded-full bg-amber-400/12 blur-3xl md:h-80 md:w-80 md:bg-amber-400/14" />
            <div className="absolute bottom-0 left-1/3 h-36 w-36 rounded-full bg-white/5 blur-3xl md:h-72 md:w-72 md:bg-white/6" />

            <div className="absolute inset-0 bg-gradient-to-b from-[#111111] via-[#0a0a0a] to-[#050505]" />
            <div className="absolute inset-0 opacity-[0.04] [background-image:linear-gradient(rgba(255,255,255,0.26)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.26)_1px,transparent_1px)] [background-size:28px_28px] md:opacity-[0.05] md:[background-size:34px_34px]" />
            <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(135deg,rgba(255,255,255,0.30)_1px,transparent_1px)] [background-size:24px_24px] md:opacity-[0.08] md:[background-size:30px_30px]" />
          </div>

          <div className="container-custom relative z-10">
            <div className="mx-auto max-w-5xl text-center">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.06] px-2.5 py-1 text-[0.56rem] font-bold uppercase tracking-[0.12em] text-amber-300 shadow-[0_8px_20px_rgba(0,0,0,0.16)] backdrop-blur-md sm:px-3 sm:py-1.5 sm:text-[0.62rem] md:px-4 md:py-2 md:text-[0.72rem] md:tracking-[0.18em]">
                <BadgeEuro size={11} className="md:h-[14px] md:w-[14px]" />
                Formules du club
              </span>

              <h1 className="mt-3 text-[2rem] font-black uppercase leading-[0.9] tracking-[0.025em] text-white sm:text-[2.5rem] md:mt-5 md:text-6xl md:tracking-[0.04em] xl:text-7xl">
                Les tarifs
                <br className="hidden sm:block" />
                <span className="block bg-gradient-to-r from-red-500 via-white to-amber-300 bg-clip-text text-transparent">
                  du Boxing Club
                </span>
              </h1>

              <p className="mx-auto mt-3 max-w-[23rem] text-[0.88rem] leading-5 text-white/68 sm:max-w-[30rem] sm:text-[0.94rem] sm:leading-6 md:mt-5 md:max-w-3xl md:text-lg md:leading-7">
                Une structure simple, lisible et évolutive pour présenter les
                formules du club. Les montants affichés ici sont provisoires et
                pourront être ajustés facilement.
              </p>

              <div className="mt-4 flex flex-wrap items-center justify-center gap-2 md:mt-8 md:gap-3">
                <span className="rounded-full border border-white/10 bg-white/[0.06] px-2.5 py-1 text-[0.66rem] font-semibold text-white/78 sm:px-3 sm:py-1.5 sm:text-[0.72rem] md:px-4 md:py-2 md:text-xs">
                  Infos provisoires
                </span>
                <span className="rounded-full border border-white/10 bg-white/[0.06] px-2.5 py-1 text-[0.66rem] font-semibold text-white/78 sm:px-3 sm:py-1.5 sm:text-[0.72rem] md:px-4 md:py-2 md:text-xs">
                  Remplaçables facilement
                </span>
                <span className="rounded-full border border-white/10 bg-white/[0.06] px-2.5 py-1 text-[0.66rem] font-semibold text-white/78 sm:px-3 sm:py-1.5 sm:text-[0.72rem] md:px-4 md:py-2 md:text-xs">
                  Mobile-first
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* =================================================
            CARDS TARIFS
        ================================================= */}
        <section className="relative overflow-hidden py-8 md:py-16 lg:py-20">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-[-4rem] top-16 h-56 w-56 rounded-full bg-red-600/10 blur-3xl" />
            <div className="absolute right-[-4rem] bottom-10 h-56 w-56 rounded-full bg-amber-400/10 blur-3xl" />
          </div>

          <div className="container-custom relative z-10">
            <div className="grid gap-4 md:gap-6 xl:grid-cols-3">
              {pricingPlans.map((plan) => (
                <article
                  key={plan.id}
                  className="relative overflow-hidden rounded-[26px] border border-white/10 bg-white/[0.05] p-5 shadow-[0_16px_34px_rgba(0,0,0,0.18)] backdrop-blur-xl md:rounded-[34px] md:p-7 md:shadow-[0_20px_50px_rgba(0,0,0,0.22)]"
                >
                  <div
                    className="absolute inset-x-0 top-0 h-[2px]"
                    style={{
                      background: `linear-gradient(to right, ${plan.accent}, rgba(255,255,255,0.5), transparent)`,
                    }}
                  />

                  <div
                    className="pointer-events-none absolute inset-0 opacity-90"
                    style={{
                      background: `radial-gradient(circle at top right, ${plan.glow} 0%, transparent 34%)`,
                    }}
                  />

                  <div className="relative z-10 flex h-full flex-col">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p
                          className="text-[0.68rem] font-bold uppercase tracking-[0.16em]"
                          style={{ color: plan.accent }}
                        >
                          {plan.audience}
                        </p>

                        <h2 className="mt-2 text-[1.55rem] font-black uppercase leading-[0.96] text-white md:text-[2rem]">
                          {plan.name}
                        </h2>
                      </div>

                      {plan.badge ? (
                        <span
                          className="rounded-full px-3 py-1 text-[0.62rem] font-bold uppercase tracking-[0.14em]"
                          style={{
                            backgroundColor: `${plan.accent}18`,
                            color: plan.accent,
                            border: `1px solid ${plan.accent}35`,
                          }}
                        >
                          {plan.badge}
                        </span>
                      ) : null}
                    </div>

                    <div className="mt-5">
                      <div className="flex items-end gap-2">
                        <span className="text-[2.5rem] font-black leading-none text-white md:text-[3rem]">
                          {plan.price}
                        </span>
                        <span className="pb-1 text-sm font-semibold text-white/55 md:text-base">
                          {plan.frequency}
                        </span>
                      </div>

                      <p className="mt-4 text-[0.9rem] leading-6 text-white/68 md:text-base md:leading-7">
                        {plan.description}
                      </p>
                    </div>

                    <div className="mt-5 rounded-[20px] border border-white/10 bg-black/20 p-4 md:rounded-[24px]">
                      <p className="text-[0.68rem] font-bold uppercase tracking-[0.14em] text-white/55">
                        Ce qui est inclus
                      </p>

                      <ul className="mt-4 space-y-3">
                        {plan.features.map((feature) => (
                          <li
                            key={feature}
                            className="flex items-start gap-3 text-[0.88rem] leading-6 text-white/74 md:text-sm md:leading-7"
                          >
                            <span
                              className="mt-1.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full"
                              style={{
                                backgroundColor: `${plan.accent}18`,
                                color: plan.accent,
                                border: `1px solid ${plan.accent}35`,
                              }}
                            >
                              <Check size={12} />
                            </span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-auto flex flex-col gap-2.5 pt-5 sm:flex-row xl:flex-col">
                      <Link
                        href="/inscription"
                        className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition-all duration-300 hover:bg-red-600 hover:text-white"
                      >
                        Rejoindre cette formule
                        <ChevronRight size={16} />
                      </Link>

                      <Link
                        href="/contact"
                        className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-white/10 bg-white/[0.06] px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-white/20 hover:bg-white/[0.12]"
                      >
                        Poser une question
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* =================================================
            CE QUE COMPREND L’ADHÉSION
        ================================================= */}
        <section className="relative overflow-hidden border-t border-white/10 py-8 md:py-16 lg:py-20">
          <div className="container-custom">
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 text-[0.62rem] font-bold uppercase tracking-[0.14em] text-amber-300 md:px-4 md:py-2 md:text-[0.72rem] md:tracking-[0.18em]">
                <Receipt size={13} className="md:h-[14px] md:w-[14px]" />
                Informations utiles
              </span>

              <h2 className="mt-4 text-[1.7rem] font-black uppercase leading-[0.96] text-white sm:text-[2rem] md:mt-5 md:text-5xl">
                Ce que comprend l’adhésion
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-[0.9rem] leading-6 text-white/68 md:text-base md:leading-8">
                Cette section est également prévue pour être facilement
                modifiable lorsque tu auras les informations définitives.
              </p>
            </div>

            <div className="mt-6 grid gap-4 md:mt-10 md:grid-cols-2 xl:grid-cols-4">
              <div className="rounded-[22px] border border-white/10 bg-white/[0.05] p-5 backdrop-blur-xl md:rounded-[28px]">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.08] text-amber-300">
                  <ShieldCheck size={20} />
                </div>
                <h3 className="mt-4 text-lg font-black uppercase text-white">
                  Encadrement
                </h3>
                <p className="mt-3 text-sm leading-7 text-white/66">
                  Accès à un cadre structuré avec suivi, discipline et logique
                  de progression.
                </p>
              </div>

              <div className="rounded-[22px] border border-white/10 bg-white/[0.05] p-5 backdrop-blur-xl md:rounded-[28px]">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.08] text-amber-300">
                  <CreditCard size={20} />
                </div>
                <h3 className="mt-4 text-lg font-black uppercase text-white">
                  Paiement
                </h3>
                <p className="mt-3 text-sm leading-7 text-white/66">
                  Paiement mensuel, trimestriel ou annuel selon la formule
                  définitive retenue plus tard.
                </p>
              </div>

              <div className="rounded-[22px] border border-white/10 bg-white/[0.05] p-5 backdrop-blur-xl md:rounded-[28px]">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.08] text-amber-300">
                  <Wallet size={20} />
                </div>
                <h3 className="mt-4 text-lg font-black uppercase text-white">
                  Séance d’essai
                </h3>
                <p className="mt-3 text-sm leading-7 text-white/66">
                  Une séance d’essai pourra être affichée ici avec tarif,
                  gratuité éventuelle ou conditions.
                </p>
              </div>

              <div className="rounded-[22px] border border-white/10 bg-white/[0.05] p-5 backdrop-blur-xl md:rounded-[28px]">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.08] text-amber-300">
                  <BadgeEuro size={20} />
                </div>
                <h3 className="mt-4 text-lg font-black uppercase text-white">
                  Licence / frais
                </h3>
                <p className="mt-3 text-sm leading-7 text-white/66">
                  La licence, les frais annexes ou les conditions d’inscription
                  seront faciles à remplacer ici.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =================================================
            BLOC FINAL
        ================================================= */}
        <section className="relative overflow-hidden border-t border-white/10 py-8 md:py-16 lg:py-20">
          <div className="container-custom">
            <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.05] p-6 text-center shadow-[0_16px_34px_rgba(0,0,0,0.20)] backdrop-blur-xl md:rounded-[36px] md:p-10">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_38%)]" />

              <div className="relative z-10 mx-auto max-w-3xl">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 text-[0.62rem] font-bold uppercase tracking-[0.14em] text-amber-300 md:px-4 md:py-2 md:text-[0.72rem] md:tracking-[0.18em]">
                  <Sparkles size={13} className="md:h-[14px] md:w-[14px]" />
                  Base provisoire
                </span>

                <h2 className="mt-4 text-[1.7rem] font-black uppercase leading-[0.96] text-white sm:text-[2rem] md:mt-5 md:text-5xl">
                  Une structure prête à évoluer
                </h2>

                <p className="mx-auto mt-4 max-w-2xl text-[0.9rem] leading-6 text-white/68 md:text-base md:leading-8">
                  Cette page est volontairement pensée pour accueillir tes vrais
                  tarifs plus tard sans casser le design ni toute la structure.
                </p>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
                  <Link
                    href="/inscription"
                    className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-red-600 px-5 py-3 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(220,38,38,0.24)] transition-all duration-300 hover:-translate-y-[1px] hover:bg-red-700"
                  >
                    Commencer une inscription
                    <ChevronRight size={16} />
                  </Link>

                  <Link
                    href="/contact"
                    className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-white/10 bg-white/[0.06] px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-white/20 hover:bg-white/[0.12]"
                  >
                    Nous contacter
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}