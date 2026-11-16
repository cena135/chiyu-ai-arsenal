---
name: apple-design
description: Official Apple WWDC, Human Interface Guidelines (HIG), macOS/iOS/visionOS spatial design, Liquid Glass, and fluid spring motion principles.
---

# Apple Design & Human Interface Guidelines (HIG)

When designing interfaces, spatial glass cards, or reviewing animations:
1. **Fluidity & Spring Physics**: Use spring animations instead of linear easing; ensure 60fps transitions.
2. **Direct Manipulation & Spatial Depth**: Use layered specular highlights, translucent materials (Liquid Glass / visionOS), and subtle drop shadows.
3. **Zero AI Slop**: No generic dashboard templates, no random neon purple on dark, maintain strict 4px/8px grid & safe-area symmetry.


# Apple Human Interface Guidelines — Design Checklist

Reference: https://developer.apple.com/design/human-interface-guidelines

## Core Principles (apply to ALL designs)

1. **Clarity** — text legible, icons precise, ornamentation subtle
2. **Deference** — UI helps, doesn't compete with content
3. **Depth** — layering + motion convey hierarchy

## Typography Tokens

```css
/* Font: SF Pro Text (≤19pt), SF Pro Display (≥20pt). Web fallback: -apple-system, system-ui, 'Inter', 'Montserrat' */
--type-display:   34pt;  /* Page hero */
--type-title1:    28pt;
--type-title2:    22pt;  /* Section headers */
--type-title3:    20pt;
--type-headline:  17pt;  /* Default body emphasis */
--type-body:      17pt;  /* Default body text */
--type-callout:   16pt;
--type-subhead:   15pt;
--type-footnote:  13pt;
--type-caption:   12pt;
--type-caption2:  11pt;

--fw-regular:  400;
--fw-medium:   500;
--fw-semibold: 600;  /* prefer for emphasis */
--fw-bold:     700;

/* Line-height: 1.2 untuk display/title, 1.4-1.5 untuk body, 1.6 untuk relaxed read */
```

**Rules:**
- Single font family (SF/system). Diferensiasi pakai weight + size, BUKAN font kedua.
- Tighter letter-spacing (`-0.02em`) untuk display. Wider (`0.04em`) untuk all-caps tags.
- Respect Dynamic Type — relative sizes (rem) lebih baik daripada absolute.

## Color Semantics

```css
/* Always semantic — never named */
--label:           #000000;  /* primary text */
--label-secondary: rgba(60,60,67,0.6);
--label-tertiary:  rgba(60,60,67,0.3);
--label-quaternary:rgba(60,60,67,0.18);

--bg-primary:    #FFFFFF;
--bg-secondary:  #F2F2F7;  /* grouped content */
--bg-tertiary:   #FFFFFF;

--separator:           rgba(60,60,67,0.36);
--separator-opaque:    #C6C6C8;

/* Tints (semantic over named) */
--tint-blue:   #007AFF;
--tint-green:  #34C759;
--tint-red:    #FF3B30;
--tint-orange: #FF9500;
--tint-yellow: #FFCC00;
--tint-purple: #AF52DE;
```

**Rules:**
- Pakai semantic colors yang adapt ke light/dark mode.
- WCAG AA minimum: 4.5:1 normal text, 3:1 large text.
- Color tidak pernah jadi satu-satunya signal (pair dengan icon/text).
- App brand color jadi `--tint-accent` — Havanna pakai `#9B66A4` (purple).

## Spacing — 8pt Grid

```css
--sp-1:   4px;
--sp-2:   8px;   /* base unit */
--sp-3:  12px;
--sp-4:  16px;   /* default padding */
--sp-5:  20px;
--sp-6:  24px;   /* section gap */
--sp-8:  32px;
--sp-10: 40px;
--sp-12: 48px;
--sp-16: 64px;
```

**Rules:**
- Setiap padding/margin = kelipatan 8pt (atau 4pt untuk fine-tune).
- Default container padding: 16px mobile, 20-24px tablet/desktop.
- Vertical rhythm: section gap 24-32pt, item gap 8-16pt.

## Touch Targets

- **Minimum: 44×44pt** untuk semua interactive primary.
- Secondary nav: 36×36pt acceptable (tighter contexts).
- 8pt minimum spacing antar tombol biar gak salah klik.
- Hit area > visual area kalau perlu (icon kecil pakai `padding` invisible).

## Motion

```css
/* Standard easing — Apple house curve */
--ease-out:    cubic-bezier(0.0, 0.0, 0.2, 1);
--ease-in:     cubic-bezier(0.4, 0.0, 1.0, 1);
--ease-in-out: cubic-bezier(0.4, 0.0, 0.2, 1);
--spring:      cubic-bezier(0.17, 0.67, 0.83, 0.67);

/* Durations */
--dur-fast:    150ms;  /* hover, focus */
--dur-base:    250ms;  /* UI state changes */
--dur-slow:    350ms;  /* navigation, modals */
```

**Rules:**
- Motion harus bertujuan (status, hubungan, feedback). Hapus jika dekoratif.
- Ease-out untuk masuk, ease-in untuk keluar.
- `@media (prefers-reduced-motion: reduce) { transition-duration: 0ms; }`

## Materials (Liquid Glass — iOS 17+)

```css
.glass {
  background: rgba(255, 255, 255, 0.72);
  backdrop-filter: blur(28px) saturate(200%) brightness(1.02);
  -webkit-backdrop-filter: blur(28px) saturate(200%) brightness(1.02);
  border: 1px solid rgba(255, 255, 255, 0.75);
  border-radius: 18px;
  box-shadow:
    inset 0 1.5px 0 rgba(255,255,255,0.95),  /* specular top edge */
    inset 0 0 0 0.5px rgba(255,255,255,0.5),
    0 2px 12px rgba(9,30,66,0.06),
    0 0 0 0.5px rgba(9,30,66,0.04);
}
.glass:hover {
  transform: translateY(-1px);
  box-shadow: ...stronger shadow...;
}
```

**Rules:**
- Glass effect: floating panels, sidebars, modals, hover cards. JANGAN body bg.
- Border subtle (rgba alpha < 0.8). Bright top edge mimics light hitting glass.
- Selalu test fallback browser (no `backdrop-filter` support).

## Shadows

```css
--shadow-1: 0 1px 2px rgba(0,0,0,0.08);              /* hairline */
--shadow-2: 0 2px 8px rgba(0,0,0,0.10);              /* subtle elevation */
--shadow-3: 0 4px 16px rgba(0,0,0,0.12);             /* card hover */
--shadow-4: 0 8px 32px rgba(0,0,0,0.16);             /* modal */
--shadow-5: 0 16px 48px rgba(0,0,0,0.20);            /* drag */
```

Pakai untuk depth, BUKAN emphasis. Subtle > dramatic.

## Radius

```css
--radius-sm:  4px;   /* tags, pills */
--radius-md:  8px;   /* buttons, inputs */
--radius-lg:  12px;  /* cards */
--radius-xl:  18px;  /* glass panels, large cards */
--radius-full: 9999px;  /* avatars, circular buttons */
```

iOS 17+ trend: lebih rounded (16-22px), bukan sharp 4-8px.

## Component Patterns

- **Buttons**: 36-44pt height, `--radius-md`, semantic color (tint = primary, gray = secondary, transparent = tertiary).
- **Inputs**: 36-44pt height, `--radius-md`, border 1px `--separator`, focus state border accent + 1px box-shadow ring.
- **Cards**: `--radius-lg` or `--radius-xl`, padding 16-24pt, shadow `--shadow-2` default + `--shadow-3` hover.
- **Modals**: glass material, `--radius-xl`, dim overlay rgba(0,0,0,0.4), entry from bottom or scale.
- **Tabs**: pills `--radius-full` for segmented, underline for content tabs. Active = tint color + bold.
- **Toasts**: top-right, slide-in from right, auto-dismiss 4s, `--radius-md`.

## Accessibility Checklist

- [ ] Contrast: 4.5:1 normal text, 3:1 large/UI components
- [ ] Touch targets ≥ 44×44pt
- [ ] Focus indicators visible (don't kill `:focus-visible`)
- [ ] All buttons/links have descriptive labels (no "Click here")
- [ ] Icons have `aria-label` or accompanying text
- [ ] Forms have `<label for="">` properly linked
- [ ] Color isn't sole signal (icon + text always)
- [ ] `prefers-reduced-motion` respected
- [ ] Keyboard navigation: Tab → all interactive in logical order
- [ ] Screen reader: semantic HTML (`<button>` not `<div onclick>`)

## Layout Patterns

- **Bottom tabs (mobile)**: thumb-friendly primary nav, 3-5 items.
- **Sidebar (tablet/desktop)**: persistent secondary nav, collapsible.
- **Inspector / detail panel**: 320-400pt wide, slide from right.
- **Sheet / modal**: focused task, dismissible by tap-outside or swipe-down.
- **Pull-to-refresh**: standard gesture, NEVER tombol "refresh" duplikat.
- **Search**: top bar atau dedicated overlay (Cmd+K), persistent placeholder.

## Anti-Patterns (Hindari)

- ❌ Multiple font families — pakai weight/size buat hierarchy
- ❌ Pure black `#000` text — pakai `#1D1D1F` atau dark-gray (less harsh)
- ❌ Pure white `#FFF` background — `#F2F2F7` for grouped (warmer, less glare)
- ❌ Sharp shadows (offset > blur) — selalu blur ≥ 2× offset
- ❌ Saturated brand colors as fill — pakai tint (alpha 8-12%) sebagai bg, brand sebagai accent
- ❌ Border 2px+ — selalu 0.5-1px untuk separator, 1.5-2px hanya untuk focus state
- ❌ Touch target < 44pt
- ❌ Animation > 500ms tanpa alasan
- ❌ Color sebagai satu-satunya signal status

## Workflow Saat Implementasi

1. Identifikasi component type (button/card/modal/etc.)
2. Pilih radius, padding, shadow dari token di atas
3. Pastikan semantic color (gak hardcode hex)
4. Cek touch target (min 44pt) + contrast (min 4.5:1)
5. Tambah hover/focus/active states (transition 150-250ms)
6. Test reduced-motion + keyboard nav
7. Apply Liquid Glass material kalau component "floating" (sidebar, modal, dropdown)

## When Reviewing Existing UI

Run cepat audit:
- Spacing pakai 8pt grid? (kalau ada 7px/13px/15px → fix)
- Font weight cuma 1-2? (kalau ada 4+ → simplify)
- Color hardcoded? (kalau ada `#FF0000` → ganti `var(--tint-red)`)
- Shadow harsh? (kalau offset 0 8px tapi blur 2px → soften)
- Touch target kecil? (kalau <44pt → expand)
- Brand color jadi solid bg? (kalau bg purple #9B66A4 100% → ganti tint 10%)
