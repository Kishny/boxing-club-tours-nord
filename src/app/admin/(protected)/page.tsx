"use client";

import { useEffect, useState, useMemo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Pencil,
  Trash2,
  Plus,
  Save,
  X,
  BarChart3,
  BookOpen,
  Building2,
  CalendarDays,
} from "lucide-react";

// ──────────────────────────────────────────────
// TYPES
// ──────────────────────────────────────────────

type Day =
  | "Lundi"
  | "Mardi"
  | "Mercredi"
  | "Jeudi"
  | "Vendredi"
  | "Samedi"
  | "Dimanche";

type PlanningItem = {
  _id?: string;
  club: string;
  discipline: string;
  category: string;
  color: string;
  day: Day;
  time: string;
  audience: string;
  level: string;
  coach?: string;
};

// ──────────────────────────────────────────────
// CONSTANTS
// ──────────────────────────────────────────────

const DAYS: Day[] = [
  "Lundi",
  "Mardi",
  "Mercredi",
  "Jeudi",
  "Vendredi",
  "Samedi",
  "Dimanche",
];

const CLUBS = ["Tours Nord", "Tours Métropole", "La Riche"];

const DAY_INDEX = [
  "Dimanche",
  "Lundi",
  "Mardi",
  "Mercredi",
  "Jeudi",
  "Vendredi",
  "Samedi",
];

const EMPTY: PlanningItem = {
  club: "Tours Nord",
  discipline: "",
  category: "Combat",
  color: "#ef4444",
  day: "Lundi",
  time: "",
  audience: "",
  level: "",
  coach: "",
};

// ──────────────────────────────────────────────
// SHARED FORM
// ──────────────────────────────────────────────

const inp =
  "rounded-xl bg-white/10 px-4 py-3 text-white outline-none placeholder:text-white/30 focus:ring-2 focus:ring-red-500/30 w-full";
const sel =
  "rounded-xl bg-[#1a1a1a] px-4 py-3 text-white outline-none border border-white/10 focus:ring-2 focus:ring-red-500/30 w-full";

function Label({ children }: { children: React.ReactNode }) {
  return (
    <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-white/40">
      {children}
    </label>
  );
}

function PlanningFormFields({
  data,
  onChange,
}: {
  data: PlanningItem;
  onChange: (d: PlanningItem) => void;
}) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <div>
        <Label>Club</Label>
        <select
          value={data.club}
          onChange={(e) => onChange({ ...data, club: e.target.value })}
          className={sel}
        >
          {CLUBS.map((c) => (
            <option key={c}>{c}</option>
          ))}
        </select>
      </div>

      <div>
        <Label>Discipline</Label>
        <input
          type="text"
          value={data.discipline ?? ""}
          onChange={(e) => onChange({ ...data, discipline: e.target.value })}
          placeholder="ex: Boxe Anglaise"
          className={inp}
        />
      </div>

      <div>
        <Label>Jour</Label>
        <select
          value={data.day}
          onChange={(e) => onChange({ ...data, day: e.target.value as Day })}
          className={sel}
        >
          {DAYS.map((d) => (
            <option key={d}>{d}</option>
          ))}
        </select>
      </div>

      <div>
        <Label>Horaire</Label>
        <input
          type="text"
          value={data.time ?? ""}
          onChange={(e) => onChange({ ...data, time: e.target.value })}
          placeholder="18:30–19:30"
          className={inp}
        />
      </div>

      <div>
        <Label>Public</Label>
        <input
          type="text"
          value={data.audience ?? ""}
          onChange={(e) => onChange({ ...data, audience: e.target.value })}
          placeholder="ex: Adultes"
          className={inp}
        />
      </div>

      <div>
        <Label>Niveau</Label>
        <input
          type="text"
          value={data.level ?? ""}
          onChange={(e) => onChange({ ...data, level: e.target.value })}
          placeholder="ex: Tous niveaux"
          className={inp}
        />
      </div>

      <div>
        <Label>Coach</Label>
        <input
          type="text"
          value={data.coach ?? ""}
          onChange={(e) => onChange({ ...data, coach: e.target.value })}
          placeholder="ex: Brenda"
          className={inp}
        />
      </div>

      <div>
        <Label>Catégorie</Label>
        <input
          type="text"
          value={data.category ?? ""}
          onChange={(e) => onChange({ ...data, category: e.target.value })}
          placeholder="ex: Combat"
          className={inp}
        />
      </div>

      <div>
        <Label>Couleur</Label>
        <div className="flex items-center gap-3">
          <input
            type="color"
            value={data.color}
            onChange={(e) => onChange({ ...data, color: e.target.value })}
            className="h-12 w-14 cursor-pointer rounded-xl border border-white/10 bg-white/10 p-1"
          />
          <span
            className="rounded-xl px-3 py-2 text-sm font-mono font-semibold"
            style={{
              background: data.color + "22",
              color: data.color,
              border: `1px solid ${data.color}44`,
            }}
          >
            {data.color}
          </span>
        </div>
      </div>
    </div>
  );
}

// ──────────────────────────────────────────────
// PAGE
// ──────────────────────────────────────────────

export default function PlanningAdminPage() {
  const [planning, setPlanning] = useState<PlanningItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [form, setForm] = useState<PlanningItem>(EMPTY);
  const [showAdd, setShowAdd] = useState(false);
  const [editingItem, setEditingItem] = useState<PlanningItem | null>(null);

  const today = DAY_INDEX[new Date().getDay()];

  // ── STATS ──────────────────────────────────

  const stats = useMemo(() => {
    const disciplines = new Set(planning.map((p) => p.discipline)).size;
    const todayCours = planning.filter((p) => p.day === today).length;
    const clubCounts = planning.reduce<Record<string, number>>(
      (acc, p) => ({ ...acc, [p.club]: (acc[p.club] ?? 0) + 1 }),
      {},
    );
    const topClub =
      Object.entries(clubCounts).sort((a, b) => b[1] - a[1])[0]?.[0] ?? "—";
    return { total: planning.length, disciplines, todayCours, topClub };
  }, [planning, today]);

  // ── FETCH ──────────────────────────────────

  const fetchPlanning = async () => {
    try {
      const res = await fetch("/api/planning");
      const data = await res.json();
      setPlanning(Array.isArray(data) ? data : []);
    } catch {
      setPlanning([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPlanning();
  }, []);

  // ── CRUD ───────────────────────────────────

  const handleAdd = async () => {
    if (!form.discipline || !form.time || !form.audience || !form.level) {
      alert("Merci de remplir tous les champs.");
      return;
    }
    setSaving(true);
    try {
      const res = await fetch("/api/planning", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const err = await res.json().catch(() => null);
        alert(err?.error ?? "Erreur lors de l'ajout du créneau.");
        return;
      }
      setForm(EMPTY);
      setShowAdd(false);
      await fetchPlanning();
    } finally {
      setSaving(false);
    }
  };

  const handleUpdate = async () => {
    if (!editingItem) return;
    setSaving(true);
    try {
      const res = await fetch("/api/planning", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: editingItem._id, ...editingItem }),
      });
      if (!res.ok) {
        const err = await res.json().catch(() => null);
        alert(err?.error ?? "Erreur lors de la modification du créneau.");
        return;
      }
      setEditingItem(null);
      await fetchPlanning();
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id?: string) => {
    if (!id || !confirm("Supprimer ce créneau ?")) return;
    await fetch(`/api/planning?id=${id}`, { method: "DELETE" });
    await fetchPlanning();
  };

  // ── LOADER ─────────────────────────────────

  if (loading) {
    return (
      <div className="flex h-64 items-center justify-center">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-red-500 border-t-transparent" />
      </div>
    );
  }

  // ── RENDER ─────────────────────────────────

  return (
    <>
      <div className="p-6 md:p-8">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-black uppercase tracking-wide">
              Planning
            </h1>
            <p className="mt-1 text-sm text-white/40">
              Gestion des cours et horaires
            </p>
          </div>

          <button
            onClick={() => setShowAdd(true)}
            className="flex items-center gap-2 rounded-2xl bg-red-500 px-5 py-3 font-bold text-white transition hover:bg-red-600"
          >
            <Plus size={16} />
            <span className="hidden sm:inline">Nouveau</span>
          </button>
        </div>

        {/* Stats */}
        <div className="mb-8 grid grid-cols-2 gap-3 lg:grid-cols-4">
          {[
            { icon: BarChart3, label: "Créneaux", value: stats.total, accent: "#ef4444" },
            { icon: BookOpen, label: "Disciplines", value: stats.disciplines, accent: "#f59e0b" },
            { icon: Building2, label: "Club actif", value: stats.topClub, accent: "#60a5fa" },
            {
              icon: CalendarDays,
              label: "Aujourd'hui",
              value: stats.todayCours > 0 ? `${stats.todayCours} cours` : "Aucun",
              accent: "#22c55e",
            },
          ].map(({ icon: Icon, label, value, accent }) => (
            <div
              key={label}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-5"
            >
              <Icon size={16} className="mb-3" style={{ color: accent }} />
              <p className="truncate text-xl font-black">{value}</p>
              <p className="mt-1 text-xs text-white/40">{label}</p>
            </div>
          ))}
        </div>

        {/* Add Form (collapsible) */}
        <AnimatePresence>
          {showAdd && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="mb-8 rounded-3xl border border-white/10 bg-white/[0.04] p-6"
            >
              <div className="mb-5 flex items-center justify-between">
                <h2 className="font-black">Nouveau créneau</h2>
                <button
                  onClick={() => setShowAdd(false)}
                  className="rounded-xl bg-white/10 p-2 transition hover:bg-white/20"
                >
                  <X size={15} />
                </button>
              </div>

              <PlanningFormFields data={form} onChange={setForm} />

              <div className="mt-5 flex gap-3">
                <button
                  onClick={handleAdd}
                  disabled={saving}
                  className="flex items-center gap-2 rounded-2xl bg-red-500 px-6 py-3 font-bold text-white transition hover:bg-red-600 disabled:opacity-50"
                >
                  <Plus size={16} />
                  {saving ? "Ajout..." : "Ajouter"}
                </button>
                <button
                  onClick={() => setShowAdd(false)}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] px-6 py-3 font-bold transition hover:bg-white/10"
                >
                  Annuler
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* List */}
        <div>
          <h2 className="mb-4 font-bold text-white/50">
            Tous les créneaux{" "}
            <span className="text-white">({planning.length})</span>
          </h2>

          {planning.length === 0 ? (
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-10 text-center">
              <p className="text-white/40">Aucun créneau enregistré.</p>
            </div>
          ) : (
            <div className="space-y-2">
              {planning.map((item) => (
                <div
                  key={item._id}
                  className="flex items-center justify-between gap-4 rounded-2xl border border-white/[0.07] bg-white/[0.03] px-5 py-4 transition hover:bg-white/[0.06]"
                >
                  <div className="flex min-w-0 items-center gap-4">
                    <div
                      className="h-10 w-1 flex-shrink-0 rounded-full"
                      style={{ background: item.color ?? "#ef4444" }}
                    />
                    <div className="min-w-0">
                      <p className="truncate font-black uppercase">
                        {item.discipline}
                      </p>
                      <p className="truncate text-sm text-white/50">
                        {item.club} · {item.day} · {item.time}
                      </p>
                      <p className="truncate text-xs text-white/30">
                        {item.audience} · {item.level}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-shrink-0 gap-2">
                    <button
                      onClick={() => setEditingItem({ ...item })}
                      className="rounded-xl bg-amber-500/10 p-2.5 transition hover:bg-amber-500/20"
                    >
                      <Pencil size={14} className="text-amber-400" />
                    </button>
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="rounded-xl bg-red-500/10 p-2.5 transition hover:bg-red-500/20"
                    >
                      <Trash2 size={14} className="text-red-400" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Edit Modal */}
      <AnimatePresence>
        {editingItem && (
          <>
            <motion.div
              key="bd"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setEditingItem(null)}
              className="fixed inset-0 z-40 bg-black/75 backdrop-blur-sm"
            />
            <motion.div
              key="modal"
              initial={{ opacity: 0, scale: 0.95, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 24 }}
              transition={{ type: "spring", damping: 28, stiffness: 320 }}
              className="fixed inset-x-4 top-1/2 z-50 mx-auto max-h-[90vh] max-w-2xl -translate-y-1/2 overflow-y-auto rounded-3xl border border-white/10 bg-[#0d0d0d] p-6 shadow-2xl md:inset-x-auto md:left-1/2 md:-translate-x-1/2 md:p-8"
            >
              <div className="mb-6 flex items-center justify-between">
                <h2 className="flex items-center gap-2 text-lg font-black">
                  <Pencil size={17} className="text-amber-400" />
                  Modifier le créneau
                </h2>
                <button
                  onClick={() => setEditingItem(null)}
                  className="rounded-xl bg-white/10 p-2 transition hover:bg-white/20"
                >
                  <X size={15} />
                </button>
              </div>

              <PlanningFormFields
                data={editingItem}
                onChange={setEditingItem}
              />

              <div className="mt-6 flex gap-3">
                <button
                  onClick={handleUpdate}
                  disabled={saving}
                  className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-red-500 py-3.5 font-bold text-white transition hover:bg-red-600 disabled:opacity-50"
                >
                  <Save size={16} />
                  {saving ? "Sauvegarde..." : "Sauvegarder"}
                </button>
                <button
                  onClick={() => setEditingItem(null)}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] px-6 py-3.5 font-bold transition hover:bg-white/10"
                >
                  Annuler
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
