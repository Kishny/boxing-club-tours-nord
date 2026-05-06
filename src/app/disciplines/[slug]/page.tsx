import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { fetchCollection, hexToRgba } from "@/lib/db-fetch";
import {
  ArrowLeft,
  ArrowRight,
  Dumbbell,
  Flame,
  Shield,
  Sparkles,
  Swords,
  Trophy,
  Users,
} from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────

type DisciplineDoc = {
  slug: string;
  title: string;
  category: string;
  description: string;
  details: string;
  profile: string;
  image?: string;
  icon: "flame" | "shield" | "trophy" | "swords" | "dumbbell";
  accent: string;
  keywords: string[];
};

// ─── Hardcoded fallback slugs (si MongoDB vide au build) ──────────────────────

const FALLBACK_SLUGS = [
  "kickboxing",
  "muaythai",
  "pancrace",
  "boxe-anglaise",
  "boxe-francaise",
  "aerokick",
  "cardio-step",
];

// ─── Data helpers ─────────────────────────────────────────────────────────────

const VALID_ICONS = [
  "flame",
  "shield",
  "trophy",
  "swords",
  "dumbbell",
] as const;

async function getAllDisciplines(): Promise<DisciplineDoc[]> {
  const docs = await fetchCollection<Record<string, unknown>>("disciplines", {
    order: 1,
  });
  if (!docs || docs.length === 0) return [];
  return docs.map((d) => {
    const accent = (d.color as string) || "#ef4444";
    return {
      slug: (d.slug as string) || "",
      title: (d.name as string) || "",
      category: (d.tagline as string) || "",
      description: (d.description as string) || "",
      details: (d.details as string) || "",
      profile: (d.profile as string) || "",
      image: (d.image as string) || undefined,
      icon: (
        VALID_ICONS.includes(d.icon as (typeof VALID_ICONS)[number])
          ? d.icon
          : "flame"
      ) as DisciplineDoc["icon"],
      accent,
      keywords: Array.isArray(d.levels) ? (d.levels as string[]) : [],
    };
  });
}

// ─── SEO ──────────────────────────────────────────────────────────────────────

export async function generateStaticParams() {
  const disciplines = await getAllDisciplines();
  if (disciplines.length > 0) return disciplines.map((d) => ({ slug: d.slug }));
  return FALLBACK_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const disciplines = await getAllDisciplines();
  const disc = disciplines.find((d) => d.slug === slug);

  if (!disc) {
    return { title: "Discipline introuvable" };
  }

  const description =
    disc.description ||
    `${disc.title} au Boxing Club Tours Nord à Tours — ${disc.category}.`;

  return {
    title: `${disc.title} - Discipline · Boxing Club Tours Nord`,
    description,
    alternates: {
      canonical: `https://boxingclub-tours.fr/disciplines/${disc.slug}`,
    },
    openGraph: {
      title: `${disc.title} — Boxing Club Tours Nord`,
      description,
      url: `https://boxingclub-tours.fr/disciplines/${disc.slug}`,
      siteName: "Boxing Club Tours Nord",
      locale: "fr_FR",
      type: "article",
      ...(disc.image
        ? {
            images: [
              { url: disc.image, width: 1200, height: 630, alt: disc.title },
            ],
          }
        : {}),
    },
    twitter: {
      card: disc.image ? "summary_large_image" : "summary",
      title: `${disc.title} — Boxing Club Tours Nord`,
      description,
      ...(disc.image ? { images: [disc.image] } : {}),
    },
  };
}

// ─── Icon renderer ────────────────────────────────────────────────────────────

function renderIcon(
  icon: DisciplineDoc["icon"],
  size = 22,
): React.ReactElement {
  switch (icon) {
    case "shield":
      return <Shield size={size} />;
    case "trophy":
      return <Trophy size={size} />;
    case "swords":
      return <Swords size={size} />;
    case "dumbbell":
      return <Dumbbell size={size} />;
    default:
      return <Flame size={size} />;
  }
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function DisciplineDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const disciplines = await getAllDisciplines();
  const disc = disciplines.find((d) => d.slug === slug);

  if (!disc) notFound();

  const others = disciplines.filter((d) => d.slug !== disc.slug).slice(0, 4);
  const panelStyle = `linear-gradient(135deg, ${hexToRgba(disc.accent, 0.18)}, ${hexToRgba(disc.accent, 0.06)}, transparent)`;

  return (
    <>
      <Navbar />

      <main className="bg-[#070707] text-white">
        {/* HERO */}
        <section className="relative overflow-hidden border-b border-white/10 pt-[120px] pb-10 md:pt-[185px] md:pb-20">
          <div className="pointer-events-none absolute inset-0">
            <div
              className="absolute -left-20 top-6 h-52 w-52 rounded-full blur-3xl md:h-80 md:w-80"
              style={{ backgroundColor: hexToRgba(disc.accent, 0.16) }}
            />
            <div className="absolute right-0 top-0 h-52 w-52 rounded-full bg-amber-400/10 blur-3xl md:h-80 md:w-80" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#111111] via-[#0a0a0a] to-[#050505]" />
            <div className="absolute inset-0 opacity-[0.04] [background-image:linear-gradient(rgba(255,255,255,0.26)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.26)_1px,transparent_1px)] [background-size:28px_28px]" />
          </div>

          <div className="container-custom relative z-10">
            <Link
              href="/disciplines"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-3 py-2 text-[0.8rem] font-semibold text-white/80 transition hover:border-white/20 hover:bg-white/[0.10] hover:text-white md:text-sm"
            >
              <ArrowLeft size={15} />
              Toutes les disciplines
            </Link>

            <div className="mt-6 max-w-3xl">
              <span
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.07] px-3 py-1.5 text-[0.68rem] font-bold uppercase tracking-[0.16em]"
                style={{ color: disc.accent }}
              >
                <Sparkles size={11} />
                {disc.category || "Discipline"}
              </span>

              <h1 className="mt-4 text-[2.5rem] font-black uppercase leading-[0.9] tracking-[0.02em] text-white md:text-6xl xl:text-7xl">
                {disc.title}
              </h1>

              {disc.description && (
                <p className="mt-5 text-lg leading-8 text-white/68 md:text-xl md:leading-9">
                  {disc.description}
                </p>
              )}

              {disc.keywords.length > 0 && (
                <div className="mt-5 flex flex-wrap gap-2">
                  {disc.keywords.map((kw) => (
                    <span
                      key={kw}
                      className="rounded-full border px-3 py-1.5 text-xs font-semibold"
                      style={{
                        borderColor: `${disc.accent}35`,
                        backgroundColor: `${disc.accent}12`,
                        color: disc.accent,
                      }}
                    >
                      {kw}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* CONTENT */}
        <section className="py-10 md:py-16">
          <div className="container-custom">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-14">
              {/* Détails */}
              {disc.details && (
                <div className="relative overflow-hidden rounded-[26px] border border-white/10 bg-white/[0.04] p-6 md:rounded-[32px] md:p-8">
                  <div
                    className="pointer-events-none absolute inset-0 opacity-80"
                    style={{ background: panelStyle }}
                  />
                  <div
                    className="absolute inset-x-0 top-0 h-[2px]"
                    style={{
                      background: `linear-gradient(to right, ${disc.accent}, rgba(255,255,255,0.3), transparent)`,
                    }}
                  />
                  <div className="relative z-10">
                    <div
                      className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.08]"
                      style={{ color: disc.accent }}
                    >
                      {renderIcon(disc.icon)}
                    </div>
                    <h2 className="mb-4 text-xl font-black uppercase text-white">
                      La discipline
                    </h2>
                    <p className="text-[0.95rem] leading-8 text-white/70">
                      {disc.details}
                    </p>
                  </div>
                </div>
              )}

              {/* Profil */}
              {disc.profile && (
                <div className="overflow-hidden rounded-[26px] border border-white/10 bg-white/[0.04] p-6 md:rounded-[32px] md:p-8">
                  <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.08] text-white/60">
                    <Users size={20} />
                  </div>
                  <h2 className="mb-4 text-xl font-black uppercase text-white">
                    Pour qui ?
                  </h2>
                  <p className="text-[0.95rem] leading-8 text-white/70">
                    {disc.profile}
                  </p>
                </div>
              )}
            </div>

            {/* CTAs */}
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/inscription"
                className="inline-flex items-center gap-2 rounded-full bg-red-600 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(220,38,38,0.24)] transition hover:-translate-y-[1px] hover:bg-red-700"
              >
                Rejoindre le club
                <ArrowRight size={15} />
              </Link>
              <Link
                href="/horaires"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-6 py-3.5 text-sm font-semibold text-white transition hover:border-white/20 hover:bg-white/[0.12]"
              >
                Voir le planning
              </Link>
            </div>
          </div>
        </section>

        {/* AUTRES DISCIPLINES */}
        {others.length > 0 && (
          <section className="border-t border-white/10 py-10 md:py-16">
            <div className="container-custom">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/40">
                Autres disciplines
              </p>

              <div className="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {others.map((d) => (
                  <Link
                    key={d.slug}
                    href={`/disciplines/${d.slug}`}
                    className="group relative overflow-hidden rounded-[20px] border border-white/10 bg-white/[0.05] p-5 transition hover:border-white/20 hover:bg-white/[0.08]"
                  >
                    <div
                      className="absolute inset-x-0 top-0 h-[2px]"
                      style={{
                        background: `linear-gradient(to right, ${d.accent}, transparent)`,
                      }}
                    />
                    <div
                      className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.06]"
                      style={{ color: d.accent }}
                    >
                      {renderIcon(d.icon, 16)}
                    </div>
                    <h3 className="text-base font-black text-white">
                      {d.title}
                    </h3>
                    {d.category && (
                      <p className="mt-1 text-xs text-white/45">{d.category}</p>
                    )}
                    <div className="mt-3 flex items-center gap-1 text-xs font-semibold text-white/40 transition group-hover:gap-2 group-hover:text-white/70">
                      Découvrir <ArrowRight size={11} />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </>
  );
}
