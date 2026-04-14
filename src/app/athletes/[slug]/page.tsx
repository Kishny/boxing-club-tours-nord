// =====================================================
// IMPORTS
// =====================================================
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { athletes } from "@/data/athletes";
import {
  ArrowLeft,
  ArrowRight,
  Medal,
  ShieldCheck,
  Trophy,
  Zap,
} from "lucide-react";

// =====================================================
// PARAMÈTRES STATIQUES
// Permet à Next de générer les pages dynamiques
// =====================================================
export function generateStaticParams() {
  return athletes.map((athlete) => ({
    slug: athlete.slug,
  }));
}

// =====================================================
// SEO DYNAMIQUE
// Métadonnées spécifiques à chaque athlète
// =====================================================
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const athlete = athletes.find((item) => item.slug === slug);

  if (!athlete) {
    return {
      title: "Athlète introuvable",
      description: "Le profil demandé n'existe pas.",
    };
  }

  return {
    title: `${athlete.name} - Athlète du club`,
    description: `${athlete.name}, athlète du Boxing Club Tours Nord à Tours. Discipline : ${athlete.discipline}. Niveau : ${athlete.level}. Record : ${athlete.record}.`,
    alternates: {
      canonical: `https://boxingclub-tours.fr/athletes/${athlete.slug}`,
    },
    openGraph: {
      title: `${athlete.name} - Boxing Club Tours Nord`,
      description: `${athlete.name}, profil athlète du Boxing Club Tours Nord.`,
      url: `https://boxingclub-tours.fr/athletes/${athlete.slug}`,
      siteName: "Boxing Club Tours Nord",
      locale: "fr_FR",
      type: "profile",
      images: [
        {
          url: athlete.image,
          width: 1200,
          height: 630,
          alt: athlete.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${athlete.name} - Boxing Club Tours Nord`,
      description: `${athlete.name}, ${athlete.discipline}, ${athlete.level}.`,
      images: [athlete.image],
    },
  };
}

// =====================================================
// PAGE PROFIL ATHLÈTE
// =====================================================
export default async function AthleteProfilePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const athlete = athletes.find((item) => item.slug === slug);

  if (!athlete) {
    notFound();
  }

  // ---------------------------------------------------
  // ATHLÈTES LIÉS
  // Même discipline si possible, sinon autres profils
  // ---------------------------------------------------
  const relatedAthletes = athletes
    .filter((item) => item.slug !== athlete.slug)
    .sort((a, b) => {
      if (a.discipline === athlete.discipline && b.discipline !== athlete.discipline) {
        return -1;
      }
      if (a.discipline !== athlete.discipline && b.discipline === athlete.discipline) {
        return 1;
      }
      return 0;
    })
    .slice(0, 3);

  return (
    <>
      {/* =================================
          NAVBAR
      ================================= */}
      <Navbar />

      {/* =================================
          CONTENU PRINCIPAL
      ================================= */}
      <main className="bg-[#070707] text-white">
        {/* ---------------------------------
            HERO / INTRO PROFIL
        --------------------------------- */}
        <section className="relative overflow-hidden border-b border-white/10 pt-[145px] pb-14 md:pt-[180px] md:pb-18 lg:pb-20">
          {/* Décors de fond */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -left-20 top-10 h-72 w-72 rounded-full blur-3xl" style={{ backgroundColor: athlete.glow }} />
            <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-amber-400/10 blur-3xl" />
            <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-white/5 blur-3xl" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#111111] via-[#0a0a0a] to-[#050505]" />
            <div className="absolute inset-0 opacity-[0.05] [background-image:linear-gradient(rgba(255,255,255,0.28)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.28)_1px,transparent_1px)] [background-size:34px_34px]" />
          </div>

          <div className="container-custom relative z-10">
            {/* Retour */}
            <div>
              <Link
                href="/athletes"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-sm font-semibold text-white/80 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.10] hover:text-white"
              >
                <ArrowLeft size={16} />
                Retour aux athlètes
              </Link>
            </div>

            {/* Grille hero */}
            <div className="mt-8 grid items-center gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:gap-12">
              {/* Image */}
              <div className="relative overflow-hidden rounded-[34px] border border-white/10 bg-white/[0.05] shadow-[0_20px_50px_rgba(0,0,0,0.24)] backdrop-blur-xl">
                <div
                  className="absolute inset-x-0 top-0 z-10 h-[2px]"
                  style={{
                    background: `linear-gradient(to right, ${athlete.accent}, rgba(255,255,255,0.45), transparent)`,
                  }}
                />

                <div className="relative h-[420px] w-full md:h-[520px] lg:h-[580px]">
                  <Image
                    src={athlete.image}
                    alt={athlete.name}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/15 to-transparent" />
                </div>
              </div>

              {/* Texte */}
              <div>
                <span
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-[0.72rem] font-bold uppercase tracking-[0.18em] text-white/85 shadow-[0_0_24px_rgba(255,255,255,0.05)]"
                  style={{ boxShadow: `0 0 24px ${athlete.glow}` }}
                >
                  <Trophy size={14} />
                  {athlete.discipline}
                </span>

                <h1 className="mt-5 text-4xl font-black uppercase leading-[0.95] tracking-[0.04em] text-white md:text-6xl xl:text-7xl">
                  {athlete.name}
                </h1>

                <p
                  className="mt-3 text-xs font-bold uppercase tracking-[0.18em]"
                  style={{ color: athlete.accent }}
                >
                  {athlete.level}
                </p>

                <p className="mt-6 max-w-2xl text-sm leading-8 text-white/70 md:text-base">
                  {athlete.description}
                </p>

                {/* Stats */}
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-[24px] border border-white/10 bg-white/[0.05] p-5 backdrop-blur-xl">
                    <p className="text-[0.72rem] font-bold uppercase tracking-[0.16em] text-white/55">
                      Discipline
                    </p>
                    <p className="mt-2 text-base font-semibold text-white">
                      {athlete.discipline}
                    </p>
                  </div>

                  <div className="rounded-[24px] border border-white/10 bg-white/[0.05] p-5 backdrop-blur-xl">
                    <p className="text-[0.72rem] font-bold uppercase tracking-[0.16em] text-white/55">
                      Record
                    </p>
                    <p className="mt-2 text-base font-semibold text-white">
                      {athlete.record}
                    </p>
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/inscription"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-red-600 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(220,38,38,0.24)] transition-all duration-300 hover:-translate-y-[1px] hover:bg-red-700"
                  >
                    Rejoindre le club
                    <ArrowRight size={16} />
                  </Link>

                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:border-white/20 hover:bg-white/[0.12]"
                  >
                    Contacter le club
                    <ShieldCheck size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---------------------------------
            SECTION DÉTAILS
        --------------------------------- */}
        <section className="relative overflow-hidden py-14 md:py-16 lg:py-20">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-[-4rem] top-12 h-56 w-56 rounded-full bg-red-600/8 blur-3xl" />
            <div className="absolute right-[-4rem] bottom-8 h-56 w-56 rounded-full bg-amber-400/8 blur-3xl" />
          </div>

          <div className="container-custom relative z-10">
            <div className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
              {/* Bloc palmarès */}
              <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.05] p-7 shadow-[0_18px_40px_rgba(0,0,0,0.22)] backdrop-blur-xl md:p-8 lg:p-10">
                <div
                  className="absolute inset-x-0 top-0 h-[2px]"
                  style={{
                    background: `linear-gradient(to right, ${athlete.accent}, rgba(255,255,255,0.55), transparent)`,
                  }}
                />

                <div className="relative z-10">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.08] px-3 py-1.5 text-[0.72rem] font-bold uppercase tracking-[0.16em] text-white/85">
                    <Medal size={14} />
                    Palmarès
                  </span>

                  <h2 className="mt-5 text-3xl font-black uppercase tracking-[0.03em] text-white md:text-4xl">
                    Un parcours construit
                  </h2>

                  <p className="mt-4 max-w-2xl text-sm leading-8 text-white/68 md:text-base">
                    Chaque résultat reflète un engagement, une discipline et un
                    travail constant au sein du Boxing Club Tours Nord.
                  </p>

                  <ul className="mt-8 space-y-4">
                    {athlete.achievements.map((item, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 rounded-[22px] border border-white/10 bg-white/[0.04] p-4"
                      >
                        <span
                          className="mt-2 h-2 w-2 shrink-0 rounded-full"
                          style={{
                            backgroundColor: athlete.accent,
                            boxShadow: `0 0 14px ${athlete.glow}`,
                          }}
                        />
                        <span className="text-sm leading-7 text-white/72 md:text-base">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bloc identité */}
              <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-b from-[#111111] to-[#090909] p-7 shadow-[0_18px_40px_rgba(0,0,0,0.24)] md:p-8 lg:p-10">
                <div
                  className="absolute inset-0 opacity-90"
                  style={{
                    background: `radial-gradient(circle at top right, ${athlete.glow} 0%, transparent 38%)`,
                  }}
                />

                <div className="relative z-10">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 text-[0.72rem] font-bold uppercase tracking-[0.16em] text-white/82">
                    <Zap size={14} />
                    Identité sportive
                  </span>

                  <h2 className="mt-5 text-3xl font-black uppercase tracking-[0.03em] text-white md:text-4xl">
                    Profil du combattant
                  </h2>

                  <div className="mt-8 grid gap-4">
                    <div className="rounded-[24px] border border-white/10 bg-white/[0.04] p-5">
                      <p className="text-[0.72rem] font-bold uppercase tracking-[0.16em] text-white/55">
                        Nom
                      </p>
                      <p className="mt-2 text-base font-semibold text-white">
                        {athlete.name}
                      </p>
                    </div>

                    <div className="rounded-[24px] border border-white/10 bg-white/[0.04] p-5">
                      <p className="text-[0.72rem] font-bold uppercase tracking-[0.16em] text-white/55">
                        Discipline
                      </p>
                      <p className="mt-2 text-base font-semibold text-white">
                        {athlete.discipline}
                      </p>
                    </div>

                    <div className="rounded-[24px] border border-white/10 bg-white/[0.04] p-5">
                      <p className="text-[0.72rem] font-bold uppercase tracking-[0.16em] text-white/55">
                        Niveau
                      </p>
                      <p className="mt-2 text-base font-semibold text-white">
                        {athlete.level}
                      </p>
                    </div>

                    <div className="rounded-[24px] border border-white/10 bg-white/[0.04] p-5">
                      <p className="text-[0.72rem] font-bold uppercase tracking-[0.16em] text-white/55">
                        Record
                      </p>
                      <p className="mt-2 text-base font-semibold text-white">
                        {athlete.record}
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 rounded-[24px] border border-white/10 bg-white/[0.04] p-5">
                    <p className="text-[0.72rem] font-bold uppercase tracking-[0.16em] text-white/55">
                      Vision club
                    </p>
                    <p className="mt-3 text-sm leading-7 text-white/68 md:text-base">
                      Un athlète du club représente plus qu’un niveau ou un
                      palmarès : il incarne la régularité, l’exigence, le cadre
                      et la progression dans la durée.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---------------------------------
            ATHLÈTES LIÉS
        --------------------------------- */}
        <section className="relative overflow-hidden border-t border-white/10 py-14 md:py-16 lg:py-20">
          <div className="container-custom">
            <div className="mb-8 text-center md:mb-10">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-[0.72rem] font-bold uppercase tracking-[0.18em] text-amber-300">
                <Trophy size={14} />
                Autres profils
              </span>

              <h2 className="mt-5 text-3xl font-black uppercase leading-[0.96] text-white md:text-5xl">
                Découvrir d’autres athlètes
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {relatedAthletes.map((item) => (
                <article
                  key={item.slug}
                  className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.05] p-5 shadow-[0_18px_40px_rgba(0,0,0,0.20)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-[3px]"
                >
                  <div
                    className="absolute inset-x-0 top-0 h-[2px]"
                    style={{
                      background: `linear-gradient(to right, ${item.accent}, rgba(255,255,255,0.45), transparent)`,
                    }}
                  />

                  <div className="relative h-52 overflow-hidden rounded-[22px]">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                  </div>

                  <div className="relative z-10 mt-5">
                    <p
                      className="text-[0.72rem] font-bold uppercase tracking-[0.16em]"
                      style={{ color: item.accent }}
                    >
                      {item.discipline}
                    </p>

                    <h3 className="mt-2 text-xl font-black uppercase text-white">
                      {item.name}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-white/66">
                      {item.description}
                    </p>

                    <div className="mt-5">
                      <Link
                        href={`/athletes/${item.slug}`}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-white transition-all duration-300 hover:translate-x-1"
                      >
                        Voir le profil
                        <ArrowRight size={16} />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* =================================
          FOOTER
      ================================= */}
      <Footer />
    </>
  );
}