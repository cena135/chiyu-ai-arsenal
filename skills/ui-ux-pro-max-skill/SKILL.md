---
name: ui-ux-pro-max-skill
description: "UI/UX design intelligence for web, mobile, and desktop — searchable styles, product palettes, font pairings, UX guidelines, icons, charts, 22 stacks. Use when designing, building, reviewing, or fixing interfaces."
---

# UI/UX Pro Max (compact)

Pencarian data desain lokal via Python. Full docs: `SKILL-full.md`. Data CSV: `src/ui-ux-pro-max/data/` (styles, colors, typography, ux-guidelines, icons, charts, landing, motion, app-interface, products, react-performance, `stacks/<stack>.csv`).

## Perintah inti
```
python src/ui-ux-pro-max/scripts/search.py "<query>" --domain <domain> [-n max]
  --design-system [-p "Nama Proyek"] [--variance 1-10 --motion 1-10 --density 1-10]
  [--persist --output-dir "<project-root>"]
  --stack <stack>
```
Python 3.x, tanpa dependency. `python` gagal → coba `python3`, lalu `py -3`.

## Catatan
- Skip untuk pekerjaan non-visual (backend/API, DevOps, skrip tanpa UI) kecuali mengubah look/feel/interaksi.
- Domain: styles (~79), colors (192 palettes), typography (74 pairing), ux (119 guidelines), icons (105), charts (25), motion, landing, app-interface, products, react-performance, stacks (22).
