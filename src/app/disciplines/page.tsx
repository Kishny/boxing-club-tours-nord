// =====================================================
// IMPORTS
// =====================================================
import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import {
  ArrowRight,
  Flame,
  Shield,
  Trophy,
  Sparkles,
  Zap,
  Target,
  ChevronRight,
  Swords,
  Dumbbell,
} from "lucide-react";

// =====================================================
// MÉTADONNÉES SEO DE LA PAGE
// =====================================================
export const metadata: Metadata = {
  title: "Disciplines de boxe et fitness à Tours",
  description:
    "Découvrez les disciplines du Boxing Club Tours Nord à Tours : Kickboxing, Muaythai, Pancrace, Boxe anglaise, Savate Boxe Française, Aérokick et Cardio Step.",
  alternates: {
    canonical: "https://boxingclub-tours.fr/disciplines",
  },
};

// =====================================================
// TYPE DES DISCIPLINES
// =====================================================
type Discipline = {
  slug: string;
  title: string;
  category: string;
  description: string;
  details: string;
  profile: string;
  image: string;
  icon: "flame" | "shield" | "trophy" | "swords" | "dumbbell";
  accent: string;
  glow: string;
  panel: string;
  keywords: string[];
};

// =====================================================
// DONNÉES DES DISCIPLINES
// =====================================================
const disciplines: Discipline[] = [
  {
    slug: "kickboxing",
    title: "Kickboxing",
    category: "Puissance • Vitesse • Polyvalence",
    description:
      "Discipline pieds-poings complète regroupant plusieurs formes de combat debout.",
    details:
      "Le kickboxing est un terme générique qui regroupe plusieurs disciplines de boxes pieds-poings, comme le Low Kick, le K1 Style, le Full Contact ou encore le Point Fighting. Il mélange héritages du Muay Thai, du karaté et de la boxe anglaise. Cette pratique développe les déplacements, le cardio, la précision, les enchaînements et la lecture du combat, sur ring ou sur tatami selon les formats.",
    profile:
      "Convient aux pratiquants qui recherchent une discipline complète pour progresser techniquement, physiquement et mentalement.",
    image: "/images/disciplines/kickboxing.jpg",
    icon: "flame",
    accent: "#ef4444",
    glow: "rgba(239,68,68,0.22)",
    panel: "from-red-500/18 via-red-500/6 to-transparent",
    keywords: ["Explosivité", "Cardio", "Technique"],
  },
  {
    slug: "muaythai",
    title: "Muaythai",
    category: "Impact • Tradition • Complétude",
    description:
      "Art martial thaïlandais utilisant poings, coudes, genoux et pieds.",
    details:
      "Le Muaythai, aussi appelé boxe thaïlandaise, est souvent surnommé l’art des huit membres. Hérité du Muay Boran, il était historiquement utilisé par les soldats thaïlandais avant de devenir un sport national puis international. Très complet, il permet un travail puissant du corps, de l’équilibre, du rythme, de la résistance et du mental, avec une forte identité martiale.",
    profile:
      "Idéal pour celles et ceux qui cherchent une pratique exigeante, complète et fortement ancrée dans la tradition des sports de combat.",
    image: "/images/disciplines/muaytai.png",
    icon: "swords",
    accent: "#f97316",
    glow: "rgba(249,115,22,0.22)",
    panel: "from-orange-400/18 via-orange-400/6 to-transparent",
    keywords: ["8 armes", "Puissance", "Tradition"],
  },
  {
    slug: "pancrace",
    title: "Pancrace",
    category: "Frappe • Projection • Sol",
    description:
      "Discipline complète mêlant frappes contrôlées, lutte, projections et combat au sol.",
    details:
      "Le pancrace, issu du pankration grec antique, est l’un des plus anciens sports de combat connus. Il combine techniques de poings, pieds, genoux, coudes, projections et contrôle au sol. Dans sa version moderne réglementée, il offre une pratique structurée et sécurisée, très riche techniquement, proche dans son esprit des disciplines de combat mixtes.",
    profile:
      "Très intéressant pour les pratiquants attirés par une approche globale du combat, alliant percussion, contrôle et polyvalence technique.",
    image: "/images/disciplines/pancrace.png",
    icon: "shield",
    accent: "#22c55e",
    glow: "rgba(34,197,94,0.22)",
    panel: "from-green-400/18 via-green-400/6 to-transparent",
    keywords: ["Polyvalence", "Contrôle", "Projection"],
  },
  {
    slug: "boxe-anglaise",
    title: "Boxe Anglaise",
    category: "Poings • Esquives • Précision",
    description:
      "Sport de combat centré exclusivement sur le travail des poings.",
    details:
      "La boxe anglaise oppose deux combattants sur ring en utilisant uniquement les poings. Structurée par les règles modernes introduites au XIXe siècle, elle développe le jab, le cross, le crochet, l’uppercut, mais aussi les esquives, le placement, la garde et la lecture tactique de l’opposition. C’est une discipline de précision, de rythme et de timing.",
    profile:
      "Parfaite pour développer la qualité de boxe, le sens du timing, la mobilité et la propreté du travail en percussion.",
    image: "/images/disciplines/boxe-anglaise.png",
    icon: "trophy",
    accent: "#60a5fa",
    glow: "rgba(96,165,250,0.22)",
    panel: "from-sky-400/18 via-sky-400/6 to-transparent",
    keywords: ["Précision", "Timing", "Déplacements"],
  },
  {
    slug: "boxe-francaise",
    title: "Savate Boxe Française",
    category: "Précision • Tactique • Élégance",
    description:
      "Discipline française mêlant coups de pied et coups de poing avec précision et contrôle.",
    details:
      "La Savate Boxe Française est un sport de combat développé en France, combinant techniques de pieds et de poings dans une logique très tactique. Les combattants portent gants et chaussures spécifiques, ce qui donne une identité technique très forte à la discipline. Elle intègre aussi déplacements, feintes, contrôle et gestion stratégique de l’espace. Elle peut également exister dans des approches forme ou défense.",
    profile:
      "Adaptée aux pratiquants qui aiment les disciplines techniques, tactiques et très propres dans leur exécution.",
    image: "/images/disciplines/savate.png",
    icon: "shield",
    accent: "#ffffff",
    glow: "rgba(255,255,255,0.18)",
    panel: "from-white/12 via-white/4 to-transparent",
    keywords: ["Tactique", "Contrôle", "Précision"],
  },
  {
    slug: "aerokick",
    title: "Aérokick",
    category: "Cardio • Fitness • Énergie",
    description:
      "Activité fitness inspirée du kickboxing, pratiquée sans opposition.",
    details:
      "L’aérokick mélange mouvements de kickboxing et logique fitness en musique. Ici, il ne s’agit pas de combat, mais d’une activité collective dynamique visant la remise en forme, le cardio, la tonicité et le défoulement. Apparue avec l’essor du fitness moderne, cette pratique rend l’univers des sports de combat plus accessible, plus ludique et très efficace physiquement.",
    profile:
      "Idéal pour les personnes qui veulent bouger, se tonifier, brûler des calories et retrouver de l’énergie dans une ambiance dynamique.",
    image: "/images/disciplines/aerokick.png",
    icon: "dumbbell",
    accent: "#eab308",
    glow: "rgba(234,179,8,0.22)",
    panel: "from-yellow-400/18 via-yellow-400/6 to-transparent",
    keywords: ["Fitness", "Cardio", "Énergie"],
  },
  {
    slug: "cardio-step",
    title: "Cardio Step",
    category: "Endurance • Coordination • Tonus",
    description:
      "Cours dynamique de fitness basé sur des enchaînements réalisés sur step.",
    details:
      "Le cardio step consiste à enchaîner des mouvements rythmés en montant et descendant d’une plateforme, souvent en musique. Cette discipline travaille l’endurance, la coordination, la tonicité du bas du corps et la dépense énergétique. Née à partir d’exercices de rééducation puis popularisée dans les salles de sport, elle est devenue un classique des cours cardio collectifs.",
    profile:
      "Parfait pour améliorer l’endurance, brûler des calories et renforcer jambes et coordination dans une ambiance rythmée.",
    image: "/images/disciplines/cardio-step.png",
    icon: "dumbbell",
    accent: "#a855f7",
    glow: "rgba(168,85,247,0.22)",
    panel: "from-violet-400/18 via-violet-400/6 to-transparent",
    keywords: ["Coordination", "Endurance", "Tonicité"],
  },
];

// =====================================================
// FONCTION UTILITAIRE POUR AFFICHER L’ICÔNE
// =====================================================
function renderIcon(icon: Discipline["icon"]) {
  switch (icon) {
    case "flame":
      return <Flame size={18} />;
    case "shield":
      return <Shield size={18} />;
    case "trophy":
      return <Trophy size={18} />;
    case "swords":
      return <Swords size={18} />;
    case "dumbbell":
      return <Dumbbell size={18} />;
    default:
      return <Flame size={18} />;
  }
}

// =====================================================
// PAGE DÉDIÉE DISCIPLINES
// VERSION PREMIUM + MOBILE ULTRA COMPACTE + IMAGES
// =====================================================
export default function DisciplinesPage() {
  return (
    <>
      <Navbar />

      <main className="bg-[#070707] text-white">
        {/* =============================================
            HERO IMMERSIF
            VERSION MOBILE ULTRA COMPACTE
        ============================================= */}
        <section className="relative overflow-hidden border-b border-white/10 pt-[120px] pb-7 md:pt-[185px] md:pb-20 lg:pb-24">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -left-20 top-6 h-40 w-40 rounded-full bg-red-600/16 blur-3xl md:top-10 md:h-72 md:w-72 md:bg-red-600/18" />
            <div className="absolute right-0 top-0 h-44 w-44 rounded-full bg-amber-400/12 blur-3xl md:h-80 md:w-80 md:bg-amber-400/14" />
            <div className="absolute bottom-0 left-1/3 h-36 w-36 rounded-full bg-white/5 blur-3xl md:h-72 md:w-72 md:bg-white/6" />

            <div className="absolute inset-0 bg-gradient-to-b from-[#111111] via-[#0a0a0a] to-[#050505]" />
            <div className="absolute inset-0 opacity-[0.04] [background-image:linear-gradient(rgba(255,255,255,0.26)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.26)_1px,transparent_1px)] [background-size:28px_28px] md:opacity-[0.05] md:[background-size:34px_34px]" />
            <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(135deg,rgba(255,255,255,0.30)_1px,transparent_1px)] [background-size:24px_24px] md:opacity-[0.08] md:[background-size:30px_30px]" />

            <div className="absolute inset-0 hidden items-center justify-center md:flex">
              <div className="relative h-[420px] w-[420px]">
                <div className="absolute inset-0 rounded-full border border-white/8" />
                <div className="absolute inset-[34px] rounded-full border border-red-500/10" />
                <div className="absolute inset-[68px] rounded-full border border-amber-300/12" />
                <div className="absolute inset-[114px] rounded-full border border-white/8 bg-white/[0.02]" />
              </div>
            </div>

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent_40%)]" />
          </div>

          <div className="container-custom relative z-10">
            <div className="mx-auto max-w-5xl text-center">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.06] px-2.5 py-1 text-[0.56rem] font-bold uppercase tracking-[0.12em] text-amber-300 shadow-[0_8px_20px_rgba(0,0,0,0.16)] backdrop-blur-md sm:px-3 sm:py-1.5 sm:text-[0.62rem] md:px-4 md:py-2 md:text-[0.72rem] md:tracking-[0.18em]">
                <Sparkles size={11} className="md:h-[14px] md:w-[14px]" />
                Univers des disciplines
              </span>

              <h1 className="mt-3 text-[2rem] font-black uppercase leading-[0.9] tracking-[0.025em] text-white sm:text-[2.5rem] md:mt-5 md:text-6xl md:tracking-[0.04em] xl:text-7xl">
                Les disciplines
                <br className="hidden sm:block" />
                <span className="block bg-gradient-to-r from-red-500 via-white to-amber-300 bg-clip-text text-transparent">
                  qui façonnent le club
                </span>
              </h1>

              <p className="mx-auto mt-3 max-w-[23rem] text-[0.88rem] leading-5 text-white/68 sm:max-w-[30rem] sm:text-[0.94rem] sm:leading-6 md:mt-5 md:max-w-3xl md:text-lg md:leading-7">
                Combat, technique, cardio et fitness : un univers complet pour
                progresser et trouver la discipline qui correspond à ton
                énergie.
              </p>

              <div className="mt-4 flex flex-wrap items-center justify-center gap-2 md:mt-8 md:gap-3">
                <span className="rounded-full border border-white/10 bg-white/[0.06] px-2.5 py-1 text-[0.66rem] font-semibold text-white/78 sm:px-3 sm:py-1.5 sm:text-[0.72rem] md:px-4 md:py-2 md:text-xs">
                  Combat
                </span>
                <span className="rounded-full border border-white/10 bg-white/[0.06] px-2.5 py-1 text-[0.66rem] font-semibold text-white/78 sm:px-3 sm:py-1.5 sm:text-[0.72rem] md:px-4 md:py-2 md:text-xs">
                  Technique
                </span>
                <span className="rounded-full border border-white/10 bg-white/[0.06] px-2.5 py-1 text-[0.66rem] font-semibold text-white/78 sm:px-3 sm:py-1.5 sm:text-[0.72rem] md:px-4 md:py-2 md:text-xs">
                  Fitness
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* =============================================
            NAVIGATION STICKY PREMIUM
            VERSION MOBILE ULTRA COMPACTE
        ============================================= */}
        <section className="sticky top-[78px] z-30 border-y border-white/10 bg-black/75 py-2 backdrop-blur-xl md:top-[100px] md:py-4 xl:top-[120px]">
          <div className="container-custom">
            <div className="-mx-1 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
              <div className="flex w-max min-w-full gap-1.5 px-1 md:w-auto md:min-w-0 md:flex-wrap md:justify-center md:gap-3">
                {disciplines.map((discipline) => (
                  <Link
                    key={discipline.slug}
                    href={`/disciplines#${discipline.slug}`}
                    className="
                      group inline-flex shrink-0 items-center gap-1.5
                      rounded-full border border-white/10 bg-white/[0.05]
                      px-2.5 py-1.5
                      text-[0.74rem] font-semibold text-white/72
                      transition-all duration-300
                      hover:-translate-y-[1px]
                      hover:border-white/20
                      hover:bg-white/[0.10]
                      hover:text-white
                      md:gap-2 md:px-4 md:py-2 md:text-sm
                    "
                  >
                    <span
                      className="h-1.5 w-1.5 rounded-full transition-all duration-300 md:h-2 md:w-2"
                      style={{
                        backgroundColor: discipline.accent,
                        boxShadow: `0 0 10px ${discipline.glow}`,
                      }}
                    />
                    <span className="whitespace-nowrap">
                      {discipline.title}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =============================================
            VERSION MOBILE ULTRA COMPACTE (AVEC IMAGES)
        ============================================= */}
        <section className="relative overflow-hidden py-6 md:hidden">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-[-4rem] top-8 h-40 w-40 rounded-full bg-red-600/10 blur-3xl" />
            <div className="absolute right-[-4rem] bottom-0 h-40 w-40 rounded-full bg-amber-400/10 blur-3xl" />
          </div>

          <div className="container-custom relative z-10 space-y-3">
            {disciplines.map((discipline, index) => (
              <details
                key={discipline.slug}
                id={discipline.slug}
                className="group overflow-hidden rounded-[22px] border border-white/10 bg-white/[0.05] shadow-[0_14px_32px_rgba(0,0,0,0.18)] backdrop-blur-xl scroll-mt-[140px]"
              >
                <summary className="relative cursor-pointer list-none px-4 py-4">
                  <div
                    className="absolute inset-x-0 top-0 h-[2px] opacity-90"
                    style={{
                      background: `linear-gradient(to right, ${discipline.accent}, rgba(255,255,255,0.55), transparent)`,
                    }}
                  />

                  <div
                    className="pointer-events-none absolute inset-0 opacity-80"
                    style={{
                      background: `radial-gradient(circle at top right, ${discipline.glow} 0%, transparent 42%)`,
                    }}
                  />

                  <div className="relative z-10 flex items-start gap-3">
                    <div
                      className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.08]"
                      style={{ color: discipline.accent }}
                    >
                      {renderIcon(discipline.icon)}
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p
                            className="text-[0.62rem] font-bold uppercase tracking-[0.14em]"
                            style={{ color: discipline.accent }}
                          >
                            {discipline.category}
                          </p>

                          <h2 className="mt-1 text-[1.05rem] font-black uppercase leading-5 text-white">
                            {discipline.title}
                          </h2>
                        </div>

                        <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.08] text-[0.72rem] font-bold text-white/85">
                          {String(index + 1).padStart(2, "0")}
                        </div>
                      </div>

                      <p className="mt-2 pr-6 text-[0.84rem] leading-5 text-white/66">
                        {discipline.description}
                      </p>

                      <div className="mt-3 flex flex-wrap gap-2">
                        {discipline.keywords.map((keyword) => (
                          <span
                            key={keyword}
                            className="rounded-full border border-white/10 bg-white/[0.06] px-2.5 py-1 text-[0.66rem] font-semibold text-white/78"
                          >
                            {keyword}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-white/45 transition-transform duration-300 group-open:rotate-90">
                    <ChevronRight size={18} />
                  </div>
                </summary>

                <div className="border-t border-white/10 px-4 pb-4 pt-3">
                  {/* --- IMAGE PREMIUM MOBILE --- */}
                  <div className="relative mb-4 h-40 w-full overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: `url(${discipline.image})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    <div className="absolute bottom-2 left-3 text-sm font-bold text-white/90 drop-shadow">
                      {discipline.title}
                    </div>
                  </div>
                  {/* --- FIN IMAGE --- */}

                  <div className="rounded-[18px] border border-white/10 bg-black/20 p-4">
                    <p className="text-[0.68rem] font-bold uppercase tracking-[0.14em] text-white/50">
                      Détails
                    </p>
                    <p className="mt-2 text-[0.88rem] leading-6 text-white/70">
                      {discipline.details}
                    </p>
                  </div>

                  <div className="mt-3 rounded-[18px] border border-white/10 bg-white/[0.04] p-4">
                    <p
                      className="text-[0.68rem] font-bold uppercase tracking-[0.14em]"
                      style={{ color: discipline.accent }}
                    >
                      Profil recommandé
                    </p>
                    <p className="mt-2 text-[0.88rem] leading-6 text-white/70">
                      {discipline.profile}
                    </p>
                  </div>

                  <div className="mt-4 flex flex-col gap-2">
                    <Link
                      href="/contact"
                      className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-white/10 bg-white/[0.06] px-4 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:border-white/20 hover:bg-white/[0.12]"
                    >
                      Demander des infos
                    </Link>

                    <Link
                      href={`/inscription?discipline=${discipline.slug}`}
                      className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-black transition-all duration-300 hover:bg-red-600 hover:text-white"
                    >
                      S’inscrire
                      <ArrowRight size={15} />
                    </Link>
                  </div>
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* =============================================
            VERSION DESKTOP / TABLETTE LARGE (AVEC IMAGES)
        ============================================= */}
        <section className="relative hidden overflow-hidden py-14 md:block md:py-16 lg:py-20">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-[-4rem] top-16 h-56 w-56 rounded-full bg-red-600/10 blur-3xl" />
            <div className="absolute right-[-4rem] bottom-10 h-56 w-56 rounded-full bg-amber-400/10 blur-3xl" />
          </div>

          <div className="container-custom relative z-10 flex flex-col gap-10 md:gap-12">
            {disciplines.map((discipline, index) => {
              const isEven = index % 2 === 0;

              return (
                <article
                  key={discipline.slug}
                  id={discipline.slug}
                  className="scroll-mt-[170px]"
                >
                  <div
                    className={`grid gap-6 xl:grid-cols-[1.05fr_0.95fr] xl:items-stretch ${
                      isEven ? "" : "xl:grid-cols-[0.95fr_1.05fr]"
                    }`}
                  >
                    {/* PANNEAU PRINCIPAL TEXTE */}
                    <div
                      className={`relative overflow-hidden rounded-[34px] border border-white/10 bg-white/[0.05] p-7 shadow-[0_18px_44px_rgba(0,0,0,0.22)] backdrop-blur-xl md:p-8 lg:p-10 ${
                        isEven ? "xl:order-1" : "xl:order-2"
                      }`}
                    >
                      <div
                        className="absolute inset-x-0 top-0 h-[2px] opacity-90"
                        style={{
                          background: `linear-gradient(to right, ${discipline.accent}, rgba(255,255,255,0.65), transparent)`,
                        }}
                      />

                      <div
                        className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${discipline.panel} opacity-90`}
                      />

                      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_28%)]" />

                      <div className="relative z-10">
                        <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
                          <div className="max-w-3xl">
                            <span
                              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.08] px-3 py-1.5 text-[0.72rem] font-bold uppercase tracking-[0.16em] text-white/85"
                              style={{
                                boxShadow: `0 0 24px ${discipline.glow}`,
                              }}
                            >
                              {renderIcon(discipline.icon)}
                              {discipline.category}
                            </span>

                            <h2 className="mt-5 text-3xl font-black uppercase tracking-[0.04em] text-white md:text-4xl xl:text-5xl">
                              {discipline.title}
                            </h2>

                            <p className="mt-4 text-base font-semibold text-white/88 md:text-lg">
                              {discipline.description}
                            </p>
                          </div>

                          <div className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/[0.08] text-sm font-bold text-white shadow-[0_0_24px_rgba(255,255,255,0.08)]">
                            {String(index + 1).padStart(2, "0")}
                          </div>
                        </div>

                        <div className="mt-7 grid gap-6 lg:grid-cols-[1fr_0.84fr]">
                          <div>
                            <p className="text-sm leading-8 text-white/68 md:text-base">
                              {discipline.details}
                            </p>
                          </div>

                          <div className="rounded-[26px] border border-white/10 bg-black/25 p-5 backdrop-blur-md">
                            <p
                              className="text-xs font-bold uppercase tracking-[0.16em]"
                              style={{ color: discipline.accent }}
                            >
                              Profil recommandé
                            </p>
                            <p className="mt-3 text-sm leading-7 text-white/70 md:text-base">
                              {discipline.profile}
                            </p>
                          </div>
                        </div>

                        <div className="mt-6 flex flex-wrap gap-3">
                          {discipline.keywords.map((keyword) => (
                            <span
                              key={keyword}
                              className="rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-xs font-semibold text-white/80"
                            >
                              {keyword}
                            </span>
                          ))}
                        </div>

                        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                          <Link
                            href="/contact"
                            className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.06] px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-white/20 hover:bg-white/[0.12]"
                          >
                            Demander des infos
                          </Link>

                          <Link
                            href={`/inscription?discipline=${discipline.slug}`}
                            className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition-all duration-300 hover:-translate-y-[1px] hover:bg-red-600 hover:text-white"
                          >
                            S’inscrire à cette dynamique
                            <ArrowRight size={16} />
                          </Link>
                        </div>
                      </div>
                    </div>

                    {/* PANNEAU VISUEL / IMPACT (AVEC IMAGE À LA PLACE DU CERCLE) */}
                    <div
                      className={`relative overflow-hidden rounded-[34px] border border-white/10 bg-gradient-to-b from-[#111111] to-[#090909] p-7 shadow-[0_18px_44px_rgba(0,0,0,0.24)] ${
                        isEven ? "xl:order-2" : "xl:order-1"
                      }`}
                    >
                      <div
                        className="absolute inset-0 opacity-90"
                        style={{
                          background: `radial-gradient(circle at top right, ${discipline.glow} 0%, transparent 38%)`,
                        }}
                      />

                      <div className="pointer-events-none absolute inset-0 opacity-[0.08] [background-image:linear-gradient(135deg,rgba(255,255,255,0.45)_1px,transparent_1px)] [background-size:26px_26px]" />

                      <div className="relative z-10 flex h-full flex-col">
                        <div className="flex items-center justify-between">
                          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 text-[0.7rem] font-bold uppercase tracking-[0.16em] text-white/80">
                            <Zap size={14} />
                            Impact club
                          </span>

                          <div
                            className="h-3 w-3 rounded-full"
                            style={{
                              backgroundColor: discipline.accent,
                              boxShadow: `0 0 18px ${discipline.glow}`,
                            }}
                          />
                        </div>

                        {/* --- IMAGE PREMIUM DESKTOP (remplace le cercle) --- */}
                        <div className="relative mt-8 flex flex-1 items-center justify-center">
                          <div className="relative h-[300px] w-[300px] overflow-hidden rounded-full border-2 border-white/20 shadow-2xl">
                            {/* Image de fond */}
                            <div
                              className="absolute inset-0 bg-cover bg-center"
                              style={{ backgroundImage: `url(${discipline.image})` }}
                            />
                            {/* Superpositions décoratives */}
                            <div className="absolute inset-0 rounded-full border border-white/10" />
                            <div className="absolute inset-[26px] rounded-full border border-white/8" />
                            <div
                              className="absolute inset-[54px] rounded-full border"
                              style={{
                                borderColor: discipline.accent,
                                boxShadow: `0 0 30px ${discipline.glow}`,
                              }}
                            />
                            <div className="absolute inset-[92px] rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-sm" />

                            {/* Icône au centre (conservée pour l'identité) */}
                            <div
                              className="absolute left-1/2 top-1/2 z-20 inline-flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/40 text-white shadow-[0_0_38px_rgba(0,0,0,0.5)] backdrop-blur-sm"
                              style={{
                                boxShadow: `0 0 38px ${discipline.glow}`,
                              }}
                            >
                              {renderIcon(discipline.icon)}
                            </div>
                          </div>
                        </div>
                        {/* --- FIN IMAGE --- */}

                        <div className="mt-2 rounded-[24px] border border-white/10 bg-white/[0.04] p-5">
                          <div className="flex items-start gap-3">
                            <div
                              className="mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.06]"
                              style={{ color: discipline.accent }}
                            >
                              <Target size={18} />
                            </div>

                            <div>
                              <p className="text-sm font-semibold text-white">
                                Esprit de la discipline
                              </p>
                              <p className="mt-2 text-sm leading-7 text-white/62">
                                Une identité forte, une logique propre et une
                                énergie spécifique au service de la progression.
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="mt-5">
                          <Link
                            href={`/inscription?discipline=${discipline.slug}`}
                            className="inline-flex items-center gap-2 text-sm font-semibold transition-all duration-300 hover:translate-x-1"
                            style={{ color: discipline.accent }}
                          >
                            Rejoindre cette discipline
                            <ChevronRight size={16} />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}