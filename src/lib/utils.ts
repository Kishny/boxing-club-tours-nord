// =====================================================
// UTILS GLOBAUX
// =====================================================

export function cn(...classes: Array<string | false | null | undefined>) {
    return classes.filter(Boolean).join(" ");
  }
  
  export function formatPhone(phone: string) {
    return phone.replace(/(\d{2})(?=\d)/g, "$1 ").trim();
  }
  
  export function slugify(value: string) {
    return value
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)+/g, "");
  }