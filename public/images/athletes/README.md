# Photos des athlètes

Deux fichiers par athlète :

- `<slug>.png` — le portrait complet, utilisé sur la page de profil `/athletes/<slug>`.
- `<slug>-card.webp` — la vignette utilisée sur les cartes de la page Athlètes.

## Pourquoi une vignette séparée

Les cartes affichent l'image dans un conteneur carré, bien plus court que le
portrait. En recadrant à la volée avec `object-position`, les têtes se
retrouvaient coupées sur les photos en pied — le cadrage utile dépend de la
position du visage, qui change d'une photo à l'autre.

La vignette est donc recadrée en amont : format 4/5 (720 × 900), cadrage
buste centré sur le visage, avec de la marge au-dessus de la tête. La carte
l'affiche en `object-cover` ancré en haut (`50% 0%`), ce qui garantit qu'aucun
visage n'est coupé, quelle que soit la largeur d'écran.

## Ajouter un athlète

1. Placer le portrait en `<slug>.png`, hauteur 1200 px.
2. Générer la vignette : recadrer un rectangle 4/5 allant d'un peu au-dessus
   de la tête jusqu'au milieu du torse (la tête doit occuper environ 30 % de
   la hauteur), redimensionner en 720 × 900 et enregistrer en WebP qualité 86
   sous `<slug>-card.webp`.

Sans vignette, la carte retombe automatiquement sur le portrait complet
(`cardImage()` dans `src/data/athletes.ts`) : rien ne casse, mais le cadrage
sera moins bon.
