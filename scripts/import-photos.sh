#!/usr/bin/env bash
# Importe des photos dans l'album : redimensionne à 1600px max, convertit en WebP
# et SUPPRIME les métadonnées EXIF (dont le GPS — le site est public).
#
# Usage :
#   1. Déposer les photos originales (jpg/png/webp) dans photos-inbox/
#   2. ./scripts/import-photos.sh
#   3. Référencer les nouveaux fichiers dans src/data/moments.ts (sans l'extension .webp)
#
# Le test `npm run test` vérifie que chaque image référencée existe.

set -euo pipefail

cd "$(dirname "$0")/.."

INBOX="photos-inbox"
DEST="public/jordan/selected-v1"
QUALITY=82
MAX_SIZE=1600

if ! command -v magick >/dev/null; then
  echo "ImageMagick (magick) est requis. Sur Fedora : sudo dnf install ImageMagick" >&2
  exit 1
fi

if [ ! -d "$INBOX" ] || [ -z "$(ls -A "$INBOX" 2>/dev/null)" ]; then
  echo "Rien à importer : déposer des photos dans $INBOX/ d'abord."
  exit 0
fi

count=0
for src in "$INBOX"/*.{jpg,jpeg,JPG,JPEG,png,PNG,webp,WEBP}; do
  [ -e "$src" ] || continue
  name="$(basename "$src")"
  out="$DEST/${name%.*}.webp"
  if [ -e "$out" ]; then
    echo "SKIP  $name (existe déjà dans $DEST)"
    continue
  fi
  magick "$src" -auto-orient -strip -resize "${MAX_SIZE}x${MAX_SIZE}>" -quality "$QUALITY" "$out"
  echo "OK    $name -> $out ($(du -h "$out" | cut -f1))"
  count=$((count + 1))
done

echo
echo "$count photo(s) importée(s). Prochaine étape : les référencer dans src/data/moments.ts"
