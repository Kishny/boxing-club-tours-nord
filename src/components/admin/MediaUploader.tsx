"use client";

import { useRef, useState } from "react";
import { ImagePlus, Loader2, X } from "lucide-react";

type Props = {
  value: string;
  onChange: (url: string) => void;
  folder?: string;
};

export default function MediaUploader({
  value,
  onChange,
  folder = "boxing-club",
}: Props) {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [dragging, setDragging] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const upload = async (file: File) => {
    setUploading(true);
    setError(null);
    try {
      const fd = new FormData();
      fd.append("file", file);
      fd.append("folder", folder);
      const res = await fetch("/api/media/upload", { method: "POST", body: fd });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Erreur upload");
      onChange(data.url as string);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Erreur inconnue");
    } finally {
      setUploading(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) upload(file);
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) upload(file);
    e.target.value = "";
  };

  return (
    <div className="space-y-2">
      {/* Drop zone */}
      <div
        onDragOver={(e) => {
          e.preventDefault();
          setDragging(true);
        }}
        onDragLeave={() => setDragging(false)}
        onDrop={handleDrop}
        onClick={() => !uploading && inputRef.current?.click()}
        className={`flex min-h-[72px] cursor-pointer flex-col items-center justify-center gap-1.5 rounded-xl border-2 border-dashed transition ${
          dragging
            ? "border-red-400/60 bg-red-500/10"
            : "border-white/20 bg-white/5 hover:border-white/40 hover:bg-white/10"
        }`}
      >
        {uploading ? (
          <Loader2 size={18} className="animate-spin text-white/50" />
        ) : (
          <>
            <ImagePlus size={18} className="text-white/35" />
            <p className="text-[0.7rem] text-white/35">
              Cliquer ou déposer · max 5 Mo
            </p>
          </>
        )}
      </div>

      <input
        ref={inputRef}
        type="file"
        accept="image/jpeg,image/png,image/webp,image/gif"
        onChange={handleInput}
        className="hidden"
      />

      {error && <p className="text-xs font-medium text-red-400">{error}</p>}

      {/* Preview + remove */}
      {value && !uploading && (
        <div className="relative inline-block">
          <div className="h-20 w-20 overflow-hidden rounded-xl border border-white/10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={value}
              alt="preview"
              className="h-full w-full object-cover"
              onError={(e) =>
                ((e.target as HTMLImageElement).style.display = "none")
              }
            />
          </div>
          <button
            type="button"
            onClick={() => onChange("")}
            className="absolute -right-1.5 -top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-white shadow transition hover:bg-red-600"
          >
            <X size={10} />
          </button>
        </div>
      )}
    </div>
  );
}
