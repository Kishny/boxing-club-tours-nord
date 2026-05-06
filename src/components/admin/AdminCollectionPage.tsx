"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus, Pencil, Trash2, X, Save } from "lucide-react";
import AdminForm from "./AdminForm";
import type { FieldDef, ColumnDef } from "@/lib/cms-schemas";

// ──────────────────────────────────────────────
// MODAL
// ──────────────────────────────────────────────

function Modal({
  title,
  onClose,
  children,
}: {
  title: string;
  onClose: () => void;
  children: React.ReactNode;
}) {
  return (
    <>
      <motion.div
        key="backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-40 bg-black/75 backdrop-blur-sm"
      />
      <motion.div
        key="panel"
        initial={{ opacity: 0, scale: 0.95, y: 24 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 24 }}
        transition={{ type: "spring", damping: 28, stiffness: 320 }}
        className="fixed inset-x-4 top-1/2 z-50 mx-auto max-h-[88vh] max-w-2xl -translate-y-1/2 overflow-y-auto rounded-3xl border border-white/10 bg-[#0d0d0d] p-6 shadow-2xl md:inset-x-auto md:left-1/2 md:-translate-x-1/2 md:p-8"
      >
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-lg font-black">{title}</h2>
          <button
            onClick={onClose}
            className="rounded-xl bg-white/10 p-2 transition hover:bg-white/20"
          >
            <X size={16} />
          </button>
        </div>
        {children}
      </motion.div>
    </>
  );
}

// ──────────────────────────────────────────────
// CELL RENDERER
// ──────────────────────────────────────────────

function CellValue({
  col,
  item,
}: {
  col: ColumnDef;
  item: Record<string, unknown>;
}) {
  if (col.render) return <>{col.render(item)}</>;

  const val = item[col.key];

  // Image column
  if (
    col.key === "photo" ||
    col.key === "image" ||
    col.key === "poster"
  ) {
    return val ? (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={String(val)}
        alt=""
        className="h-10 w-10 rounded-xl object-cover"
        onError={(e) => {
          (e.target as HTMLImageElement).style.display = "none";
        }}
      />
    ) : (
      <div className="h-10 w-10 rounded-xl bg-white/10" />
    );
  }

  // Color column
  if (col.key === "color") {
    return (
      <div
        className="h-6 w-6 rounded-full border border-white/20"
        style={{ background: String(val ?? "#888") }}
      />
    );
  }

  // Boolean column
  if (typeof val === "boolean") {
    return (
      <span
        className={`rounded-full px-2.5 py-1 text-xs font-bold ${
          val ? "bg-green-500/15 text-green-400" : "bg-white/5 text-white/30"
        }`}
      >
        {val ? "Oui" : "Non"}
      </span>
    );
  }

  // Tags / arrays
  if (Array.isArray(val)) {
    return <span className="text-sm text-white/50">{val.length} entrée(s)</span>;
  }

  return <span className="text-sm text-white/80">{String(val ?? "—")}</span>;
}

// ──────────────────────────────────────────────
// ADMIN COLLECTION PAGE
// ──────────────────────────────────────────────

type Props = {
  collection: string;
  title: string;
  singular: string;
  fields: FieldDef[];
  columns: ColumnDef[];
  defaultValue: Record<string, unknown>;
};

export default function AdminCollectionPage({
  collection,
  title,
  singular,
  fields,
  columns,
  defaultValue,
}: Props) {
  const [items, setItems] = useState<Record<string, unknown>[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [formData, setFormData] =
    useState<Record<string, unknown>>(defaultValue);
  const [modalMode, setModalMode] = useState<"add" | "edit" | null>(null);

  const API = `/api/cms/${collection}`;

  // ── FETCH ────────────────────────────────────

  const fetchItems = async () => {
    try {
      const res = await fetch(API);
      const data = await res.json();
      setItems(Array.isArray(data) ? data : []);
    } catch {
      setItems([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchItems();
  }, [collection]); // eslint-disable-line react-hooks/exhaustive-deps

  // ── OPEN MODALS ──────────────────────────────

  const openAdd = () => {
    setFormData({ ...defaultValue });
    setModalMode("add");
  };

  const openEdit = (item: Record<string, unknown>) => {
    setFormData({ ...item });
    setModalMode("edit");
  };

  const closeModal = () => setModalMode(null);

  // ── CRUD ─────────────────────────────────────

  const handleAdd = async () => {
    setSaving(true);
    try {
      await fetch(API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      closeModal();
      await fetchItems();
    } finally {
      setSaving(false);
    }
  };

  const handleUpdate = async () => {
    setSaving(true);
    try {
      await fetch(API, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: formData._id, ...formData }),
      });
      closeModal();
      await fetchItems();
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: unknown) => {
    if (!confirm(`Supprimer ce ${singular} définitivement ?`)) return;
    await fetch(`${API}?id=${String(id)}`, { method: "DELETE" });
    await fetchItems();
  };

  // ── LOADING ──────────────────────────────────

  if (loading) {
    return (
      <div className="flex h-64 items-center justify-center">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-red-500 border-t-transparent" />
      </div>
    );
  }

  // ── RENDER ───────────────────────────────────

  return (
    <>
      <div className="p-6 md:p-8">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-black uppercase tracking-wide">
              {title}
            </h1>
            <p className="mt-1 text-sm text-white/40">
              {items.length} entrée{items.length !== 1 ? "s" : ""}
            </p>
          </div>

          <button
            onClick={openAdd}
            className="flex items-center gap-2 rounded-2xl bg-red-500 px-5 py-3 font-bold text-white transition hover:bg-red-600"
          >
            <Plus size={16} />
            <span className="hidden sm:inline">Ajouter</span>
          </button>
        </div>

        {/* Table */}
        {items.length === 0 ? (
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-12 text-center">
            <p className="text-white/40">
              Aucun {singular}. Cliquez sur &laquo; Ajouter &raquo; pour
              commencer.
            </p>
          </div>
        ) : (
          <div className="space-y-2">
            {items.map((item) => (
              <div
                key={String(item._id)}
                className="flex items-center justify-between gap-4 rounded-2xl border border-white/[0.07] bg-white/[0.03] px-5 py-3.5 transition hover:bg-white/[0.06]"
              >
                {/* Columns */}
                <div className="flex min-w-0 flex-1 items-center gap-5 overflow-hidden">
                  {columns.map((col) => (
                    <div
                      key={col.key}
                      className="flex min-w-0 flex-shrink-0 flex-col"
                    >
                      <span className="mb-0.5 text-[10px] font-semibold uppercase tracking-wider text-white/25">
                        {col.label}
                      </span>
                      <CellValue col={col} item={item} />
                    </div>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex flex-shrink-0 gap-2">
                  <button
                    onClick={() => openEdit(item)}
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

      {/* Modals */}
      <AnimatePresence>
        {modalMode === "add" && (
          <Modal title={`Ajouter un ${singular}`} onClose={closeModal}>
            <AdminForm fields={fields} data={formData} onChange={setFormData} />
            <div className="mt-6 flex gap-3">
              <button
                onClick={handleAdd}
                disabled={saving}
                className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-red-500 py-3.5 font-bold text-white transition hover:bg-red-600 disabled:opacity-50"
              >
                <Plus size={16} />
                {saving ? "Ajout..." : "Ajouter"}
              </button>
              <button
                onClick={closeModal}
                className="rounded-2xl border border-white/10 bg-white/[0.04] px-6 py-3.5 font-bold transition hover:bg-white/10"
              >
                Annuler
              </button>
            </div>
          </Modal>
        )}

        {modalMode === "edit" && (
          <Modal title={`Modifier ${singular}`} onClose={closeModal}>
            <AdminForm fields={fields} data={formData} onChange={setFormData} />
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
                onClick={closeModal}
                className="rounded-2xl border border-white/10 bg-white/[0.04] px-6 py-3.5 font-bold transition hover:bg-white/10"
              >
                Annuler
              </button>
            </div>
          </Modal>
        )}
      </AnimatePresence>
    </>
  );
}
