"use client";

import { useState } from "react";
import { Plus, X } from "lucide-react";
import type { FieldDef } from "@/lib/cms-schemas";
import MediaUploader from "@/components/admin/MediaUploader";

// ──────────────────────────────────────────────
// STYLES
// ──────────────────────────────────────────────

const inputCls =
  "w-full rounded-xl bg-white/10 px-4 py-3 text-white outline-none placeholder:text-white/30 focus:ring-2 focus:ring-red-500/30";

const selectCls =
  "w-full rounded-xl bg-[#1a1a1a] px-4 py-3 text-white outline-none border border-white/10 focus:ring-2 focus:ring-red-500/30";

// ──────────────────────────────────────────────
// TAGS INPUT
// ──────────────────────────────────────────────

function TagsInput({
  value,
  onChange,
  placeholder,
}: {
  value: string[];
  onChange: (v: string[]) => void;
  placeholder?: string;
}) {
  const [input, setInput] = useState("");

  const add = () => {
    const trimmed = input.trim();
    if (trimmed && !value.includes(trimmed)) {
      onChange([...value, trimmed]);
    }
    setInput("");
  };

  const remove = (tag: string) => onChange(value.filter((t) => t !== tag));

  return (
    <div className="space-y-2">
      {value.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {value.map((tag) => (
            <span
              key={tag}
              className="flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-sm text-white"
            >
              {tag}
              <button
                type="button"
                onClick={() => remove(tag)}
                className="text-white/40 hover:text-white"
              >
                <X size={12} />
              </button>
            </span>
          ))}
        </div>
      )}
      <div className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), add())}
          placeholder={placeholder ?? "Ajouter... puis Entrée"}
          className={inputCls + " flex-1"}
        />
        <button
          type="button"
          onClick={add}
          className="rounded-xl bg-white/10 px-3 py-2 transition hover:bg-white/20"
        >
          <Plus size={16} />
        </button>
      </div>
    </div>
  );
}


// ──────────────────────────────────────────────
// TOGGLE
// ──────────────────────────────────────────────

function Toggle({
  value,
  onChange,
  label,
}: {
  value: boolean;
  onChange: (v: boolean) => void;
  label: string;
}) {
  return (
    <button
      type="button"
      onClick={() => onChange(!value)}
      className={`flex h-12 items-center gap-3 rounded-xl px-4 text-sm font-semibold transition ${
        value
          ? "bg-red-500/15 text-red-400 ring-1 ring-red-500/30"
          : "bg-white/5 text-white/50 ring-1 ring-white/10"
      }`}
    >
      <div
        className={`h-5 w-9 rounded-full transition-all ${value ? "bg-red-500" : "bg-white/20"}`}
      >
        <div
          className={`h-5 w-5 rounded-full bg-white shadow transition-all ${value ? "translate-x-4" : "translate-x-0"}`}
        />
      </div>
      {value ? "Oui" : "Non"}
    </button>
  );
}

// ──────────────────────────────────────────────
// FIELD WRAPPER
// ──────────────────────────────────────────────

function FieldWrapper({
  label,
  span,
  children,
}: {
  label: string;
  span?: "full";
  children: React.ReactNode;
}) {
  return (
    <div className={span === "full" ? "sm:col-span-2" : ""}>
      <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-white/40">
        {label}
      </label>
      {children}
    </div>
  );
}

// ──────────────────────────────────────────────
// ADMIN FORM
// ──────────────────────────────────────────────

type Props = {
  fields: FieldDef[];
  data: Record<string, unknown>;
  onChange: (data: Record<string, unknown>) => void;
};

export default function AdminForm({ fields, data, onChange }: Props) {
  const set = (key: string, value: unknown) => onChange({ ...data, [key]: value });

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {fields.map((field) => (
        <FieldWrapper key={field.key} label={field.label} span={field.span}>
          {field.type === "text" && (
            <input
              type="text"
              value={String(data[field.key] ?? "")}
              onChange={(e) => set(field.key, e.target.value)}
              placeholder={field.placeholder}
              className={inputCls}
            />
          )}

          {field.type === "textarea" && (
            <textarea
              value={String(data[field.key] ?? "")}
              onChange={(e) => set(field.key, e.target.value)}
              placeholder={field.placeholder}
              rows={4}
              className={inputCls + " resize-none"}
            />
          )}

          {field.type === "number" && (
            <input
              type="number"
              value={String(data[field.key] ?? "")}
              onChange={(e) =>
                set(field.key, e.target.value === "" ? "" : Number(e.target.value))
              }
              placeholder={field.placeholder}
              className={inputCls}
            />
          )}

          {field.type === "select" && (
            <select
              value={String(data[field.key] ?? "")}
              onChange={(e) => set(field.key, e.target.value)}
              className={selectCls}
            >
              {field.options?.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          )}

          {field.type === "color" && (
            <div className="flex items-center gap-3">
              <input
                type="color"
                value={String(data[field.key] ?? "#ffffff")}
                onChange={(e) => set(field.key, e.target.value)}
                className="h-12 w-16 cursor-pointer rounded-xl border border-white/10 bg-white/10 p-1"
              />
              <span
                className="rounded-xl px-3 py-2 text-sm font-mono font-semibold"
                style={{
                  background: String(data[field.key] ?? "#ffffff") + "22",
                  color: String(data[field.key] ?? "#ffffff"),
                  border: `1px solid ${String(data[field.key] ?? "#ffffff")}44`,
                }}
              >
                {String(data[field.key] ?? "#ffffff")}
              </span>
            </div>
          )}

          {field.type === "date" && (
            <input
              type="date"
              value={String(data[field.key] ?? "")}
              onChange={(e) => set(field.key, e.target.value)}
              className={inputCls}
            />
          )}

          {field.type === "image" && (
            <MediaUploader
              value={String(data[field.key] ?? "")}
              onChange={(v) => set(field.key, v)}
            />
          )}

          {field.type === "tags" && (
            <TagsInput
              value={(data[field.key] as string[]) ?? []}
              onChange={(v) => set(field.key, v)}
              placeholder={field.placeholder}
            />
          )}

          {field.type === "boolean" && (
            <Toggle
              value={Boolean(data[field.key])}
              onChange={(v) => set(field.key, v)}
              label={field.label}
            />
          )}
        </FieldWrapper>
      ))}
    </div>
  );
}
