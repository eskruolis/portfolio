#!/usr/bin/env bash
# Regenerates the downloadable CV PDFs from the /[lang]/cv route, so the PDF
# always matches the site's data (src/lib/data.*.ts).
#
#   1. Start the site with the phone number in its environment (it is printed
#      on the PDF but kept out of the repo and off the public page):
#        CV_PHONE='+00 000 000 000' pnpm build && CV_PHONE='...' pnpm start
#   2. Run:  pnpm cv:pdf
#
# Override BASE_URL or CHROME if the server or browser live elsewhere.
set -euo pipefail

BASE_URL="${BASE_URL:-http://localhost:3000}"
CHROME="${CHROME:-/Applications/Google Chrome.app/Contents/MacOS/Google Chrome}"

cd "$(dirname "$0")/.."

for lang in en lt; do
  if [ "$lang" = "en" ]; then out="public/cv.pdf"; else out="public/cv-$lang.pdf"; fi
  "$CHROME" --headless=new --disable-gpu --no-pdf-header-footer \
    --print-to-pdf="$out" "$BASE_URL/$lang/cv" >/dev/null 2>&1
  echo "wrote $out"
done
