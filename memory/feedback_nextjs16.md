---
name: Next.js 16 — conventions importantes
description: Breaking changes Next.js 16 à respecter impérativement dans ce projet
type: feedback
---

Next.js 16.2.3 a des breaking changes par rapport aux versions précédentes.

**Why:** AGENTS.md l'indique explicitement — lire les docs dans `node_modules/next/dist/docs/` avant d'écrire du code.

**How to apply:** Appliquer systématiquement ces règles dans ce projet.

## Règles

1. **`middleware.ts` → `proxy.ts`** : le fichier middleware est déprécié. Utiliser `src/proxy.ts` avec une fonction nommée `proxy` (pas `middleware`). Sinon build warning + peut ne pas fonctionner correctement.

2. **Lire les docs locaux** : `node_modules/next/dist/docs/01-app/` contient les guides et API references pour Next.js 16. Toujours vérifier avant d'écrire des conventions de fichiers.

3. **Tailwind CSS 4** : configuration différente de v3. Pas de `tailwind.config.js` classique — utiliser `@tailwindcss/postcss`.
