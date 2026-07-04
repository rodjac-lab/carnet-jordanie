# Carnet de Jordanie

Site photo personnel pour raconter un voyage familial en Jordanie, avec une home immersive, un album par moments, une page gastronomie et quelques lectures pour prolonger le voyage.

Site publié : https://rodjac-lab.github.io/carnet-jordanie/

## Stack

- React 18
- Vite
- TypeScript
- Tailwind CSS
- shadcn/ui pour les quelques primitives UI restantes
- GitHub Pages pour la publication

## Lancer en local

```bash
npm install
npm run dev
```

Scripts utiles :

```bash
npm run lint
npm run typecheck
npm run test
npm run ci
npm run build
npm run preview
```

## Publication

Le site est publié automatiquement par GitHub Actions à chaque push sur `main`.

Le build utilise la base Vite `/carnet-jordanie/`, nécessaire pour GitHub Pages :

```ts
base: "/carnet-jordanie/"
```

Les métadonnées de partage sont dans `index.html`, et l'image OpenGraph est `public/og-image.webp`.

## Contenu

Les photos optimisées WebP utilisées par le site sont dans :

```text
public/jordan/selected-v1/
```

Pour ajouter des photos : déposer les originaux dans `photos-inbox/` (non versionné) puis lancer :

```bash
./scripts/import-photos.sh
```

Le script redimensionne à 1600px max, convertit en WebP et supprime les métadonnées EXIF (dont le GPS — le site est public). Ensuite, référencer les nouveaux fichiers dans `src/data/moments.ts` ; `npm run test` vérifie que chaque image référencée existe.

Les moments de l'album sont définis dans :

```text
src/data/moments.ts
```

La gastronomie et les lectures sont définies dans :

```text
src/data/foodExperiences.ts
src/data/readingRecommendations.ts
```
