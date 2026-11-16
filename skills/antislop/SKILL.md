---
name: antislop
description: "Anti-AI-Slop filter for UI, copywriting, mobile layout, and human accessibility (R-01 to R-40, Purpose-Gate, Liveliness Toolkit, Delivery Gate). Always active in During Mode under design.md."
---

# antislop

> Anti-AI-Slop Filter for UI, Copywriting, Mobile Layout, and Human Accessibility.
> Eliminates generic machine-generated aesthetics and lifeless sterile templates while enforcing intentional craftsmanship, liveliness, and rigorous accessibility.

---

## 1. Operating Grounding & Supremacy of `design.md`

- **Supremacy of `design.md`:** `~/.gemini/config/md/design.md` is the supreme law. `antislop` is a quality filter applied strictly underneath `design.md`. It never dictates brand colors, fonts, or aesthetic soul—it filters out unpurposed AI defaults and enforces liveliness. If any tension arises between a deliberate brand directive in `design.md` and this filter, `design.md` wins.
- **Always Active in During Mode:** This skill operates continuously in **During Mode** (applied proactively while planning, designing, and coding). No interactive mode selection dialogs, no `%APPDATA%\antislop\settings.json`, and no audit Markdown file clutter.
- **The Core Question:** Before considering any UI complete, verify:
  > *"If the logo and product name were swapped out, would this design still feel unique and have its own character?"*
  If the answer is **no**, the design is generic AI slop. Rework it with deliberate character.

---

## 2. The Craftsmanship Standard

- **C-1 Intentionality:** Every visual, layout, and copy decision must have an articulable reason. If the only justification is "it's the AI default", reject it.
- **C-2 Functional Completeness (Haram Tombol/Handler Mati):** Every interactive control (button, link, toggle, input, modal) must work with real logic, or it must not exist in the UI.
- **C-3 Content-Driven Composition:** Layout structures must emerge from real product narrative, not from template checklists (e.g., compulsory 3-step "How It Works" or bento grids).
- **C-4 Resilience:** UI must hold up across all states (empty, loading, error), all themes (light & dark), all screen widths (phone to 4K), and full keyboard navigation.
- **C-5 Evidence Over Claims:** Any data, metrics, compliance claims, or testimonials must be real and verifiable, or omitted completely.

---

## 3. AI Slop Warning Signs (Diagnostic Scan)

Scan outputs for clusters of these tells. A single technique is fine if it serves a clear purpose, but stacking them without reason flags immediate AI slop:

| Domain | AI Slop Tells & Warning Signs |
| :--- | :--- |
| **Visual & Color** | Generic blue-purple/cyan gradients; neon glow on everything; full-page backdrop-blur; excessive pill radius on all components; soft floating shadows everywhere; background blueprint/dot grids; dark mode applied blindly without branding reason; sterile lifeless flat-white default. |
| **Layout & Grid** | Monotonous hero → 3 cards → fake stats → bento grid → 3 pricing tiers → 4-column footer; copy-paste identical feature cards; fake terminal window hero; broken mobile layout with horizontal scroll leaks. |
| **Copywriting** | Em dash (`—`) in agent prose; buzzword soup (*seamless, revolutionary, cutting-edge, elevate, unlock, delve*); significance inflation (*"ushering in a new era"*); fake metrics (*"10K+ users, 99.9% uptime"*); fake testimonials; chatbot artifacts (*"Hope this helps!"*); fake-candid openers (*"Honestly?"*). |
| **Decorative** | Sparkle, star, magic, robot, diamond icons; default Lucide thin-stroke aesthetic with no content relevance; decorative arrows (`→`/`↗`) on every button; capsule badges parked above H1; generic 3D blob or unDraw illustrations. |
| **Functional** | Non-functional buttons, dummy handlers, dead links (`href="#"`), navbar items to non-existent sections, missing empty/loading/error states. |
| **Accessibility** | Low-contrast grey-on-grey text, removed focus rings (`outline: none`), hover-only interactions on mobile touchscreens, tap targets < 48px, lack of keyboard navigation. |

---

## 4. The 40 Mandatory Rules (R-01 to R-40)

### Group 1: Hard Gate (Absolute, No Exceptions — Zero Tolerance)

- **R-02 Copywriting (Anti-Em-Dash):** **FORBIDDEN** em dash character (`—`) in agent-written copy. Use comma (`,`), period (`.`), colon (`:`), or parentheses `()` instead. Keep tone human and direct.
- **R-03 Mobile Responsiveness:** **REQUIRED** perfect mobile reflow. Zero horizontal scroll leak. Text never clips. Tap targets must be **>= 48px** with thumb-clearance spacing.
- **R-17 Data & Numbers:** **FORBIDDEN** numbers or statistics without a verifiable source. If real data is unavailable, omit numbers entirely.
- **R-18 Testimonials:** **FORBIDDEN** AI avatars, fictional names, fabricated job titles, or invented reviews. No real reviews = no testimonials section.
- **R-23 Clarification & Visual Assets:** Confirm logos, avatars, and numbers with the user before generating, or use honest placeholders (`[LOGO]`, `[REAL DATA]`, `"Coming soon"`). Never fake final assets.
- **R-24 Navigation:** **FORBIDDEN** navbar links pointing to non-existent sections or pages. Every link must have a real destination.
- **R-25 Color Contrast:** **REQUIRED** WCAG AA minimum: **4.5:1** for normal text, **3:1** for large text (>= 18px) and non-text UI borders/states. Never eyeball grey pairs; test across the entire gradient/scrim.
- **R-26 Interactive Elements:** Every button, link, and control must have real behavior (scroll to real section, toggle state, open modal, submit form, or external link). Zero dead controls.
- **R-27 UI States:** Every data-driven UI must provide: (1) Empty state, (2) Loading state, (3) Error state. Ideal-path-only design is prohibited.
- **R-28 FAQ:** **FORBIDDEN** generic template FAQ questions (*"Is my data secure?"*). Only address real, product-specific user concerns.
- **R-32 Keyboard Accessibility:** All interactive elements must be reachable and operable via keyboard (`Tab`, `Shift+Tab`, `Enter`, `Space`, `Escape`). Focus indicator must be clearly visible (contrast >= 3:1). **FORBIDDEN:** `outline: none` without a custom focus replacement.
- **R-33 No File/CSS Patching via Scripts:** Features must be built directly in source code. Running external string-replacement scripts on CSS/source files is strictly prohibited.
- **R-34 Every Theme You Ship Must Work:** If a theme toggle exists, both light and dark modes must be fully styled, readable, and verified.
- **R-35 Verify Before You Deliver:** Build and run the app before delivering. Inspect console for errors. Click through every interactive element and record evidence.
- **R-36 No Fabricated Claims:** **FORBIDDEN** inventing compliance (SOC 2, ISO 27001), speed improvements (*"300% faster"*), or security badges without proof.
- **R-37 Design Direction Required:** Load `design.md` or user brand instructions first. If building without direction, explicitly label output *"draft without direction"* and use honest calm dials (ENERGY 1 / RHYTHM 1 / MOTION 1).
- **R-38 Real Content or Honest Placeholder:** Content must come from real information or explicit markers (`[REAL DATA]`, "Coming soon"). Never disguise mock data as final production copy.
- **R-39 Accessible Semantics & Interaction Affordances:**
  - Enabled interactive elements must show `cursor: pointer` in base CSS; disabled show `cursor: not-allowed`.
  - Actions must use `<button>`, navigation must use `<a href="...">`. No clickable `div`/`span` without full ARIA/keyboard roles.
  - Icon-only buttons must have `aria-label` or visually hidden text; icons need `aria-hidden="true"`.
  - Images must have `alt` (empty `alt=""` if purely decorative). Form inputs must have visible `<label>`.
  - Respect `prefers-reduced-motion: reduce`. Provide pause controls for animations running > 5s.
  - Complete documents require `<html lang>`, unique `<title>`, landmark tags (`header`, `nav`, `main`, `footer`), single `h1`, and no viewport zoom blocking (`user-scalable=no` is forbidden).
- **R-40 Performance Mechanisms:**
  - `<img>`, `<video>`, `<iframe>` must declare explicit `width`/`height` or CSS `aspect-ratio` to prevent CLS.
  - Hero image must be in HTML, with `fetchpriority="high"` and **never** `loading="lazy"`.
  - No render-blocking third-party scripts in `<head>`.
  - Never fabricate unmeasured Lighthouse scores or Web Vitals.

---

### Group 2: Purpose-Gate (Technique Allowed, Stated Purpose Required)

Each technique below is permitted only when serving hierarchy or brand identity, and the reason is articulable in one line:

- **R-01 Color & Gradients:** Allowed when part of brand identity or hierarchy separation. Banned as an unpurposed default covering the entire canvas.
- **R-04 Icons:** Icons must have direct, relevant meaning to their content. Banned: sparkle/magic/orb glyphs or using generic icon libraries purely as decoration.
- **R-06 Typography:** Typeface must reflect brand character and enhance readability. Banned: unpurposed large monospace or extreme letter-spacing.
- **R-07 Background:** Textures/grids allowed only when supporting visual identity. Banned: default blueprint/dot grids to fake "tech" vibes.
- **R-08 Button Arrows:** Arrows (`→`/`↗`) allowed only when indicating directional progression. Banned on every CTA as pure decoration.
- **R-09 Badges:** Allowed for real status/tags. Banned: unpurposed pill capsules ("AI Powered", "Beta") or pills parked right above the H1.
- **R-10 Glassmorphism:** Accent only. Dose cap: maximum 1–2 elements. Banned across navbar, cards, modals, and sidebar simultaneously.
- **R-12 Shadow:** Used strictly as an elevation marker. Banned: soft blurred shadows making every card float.
- **R-13 Glow:** Focus accent on maximum 1–2 elements. Banned across cards, buttons, badges, and borders at once.
- **R-14 Feature Cards:** Differentiate card sizes, layouts, and treatments based on content weight. Banned: monotonous grids of identical cards.
- **R-19 Animations:** Must serve UX orientation matching the declared MOTION dial. Banned: stacking Fade-Up + Floating + Scale on every section.
- **R-22 Illustrations:** Must directly relate to product function. Banned: generic unDraw/Storyset or 3D blob characters.

---

### Group 3: Quality Locks (Consistency & Integrity)

- **R-05 Layout & Page Structure:** Layout must follow product story and RHYTHM dial. Banned: standard template checklists (Hero + 3 cards + 3-step process + bento grid + 3 pricing tiers + 4-col footer).
- **R-11 Border Radius:** Apply consistent scale from design system. Banned: making every button, input, card, and modal pill-shaped.
- **R-15 CTA Copy:** CTAs must describe the exact action (*"Start Free 14-Day Trial"*, *"Deploy to Production"*). Banned: generic *"Get Started"*, *"Learn More"*.
- **R-16 Copywriting & Buzzwords:** Use plain language explaining real value. Banned: *"AI-powered"*, *"revolutionary"*, *"seamless"*, *"next-generation"*.
- **R-20 Visual Identity:** Establish a memorable palette, clear hierarchy, and distinct motif that survives a logo swap.
- **R-21 Dark Mode:** Deliberate choice based on product type. If themes are supported, build a fully functional light/dark toggle.
- **R-29 Color Palette:** Maximum 2–3 core colors + 1 deliberate accent (+ neutral base). Banned: 5+ scattered accent colors.
- **R-30 Do Not Clone Popular Products:** Never clone Linear, Vercel, Stripe, or Notion aesthetics unprompted. Create identity tailored to this product.
- **R-31 Every Decision Must Have a Reason:** Articulate a 1-line rationale for major decisions (color, typography, layout, spacing, cards). If no reason exists, remove or rework.

---

## 5. Liveliness Toolkit

Removing slop leaves a void that must be filled with deliberate positive energy, not sterile emptiness.

### The Three Dials

Declare and hold these three dials consistently across the entire experience:

| Dial | Level 1 (Calm) | Level 2 (Balanced) | Level 3 (Bold) | Core Meaning |
| :--- | :--- | :--- | :--- | :--- |
| **ENERGY** | Clean, restrained, utilitarian (Linear, GOV.UK) | Polished, approachable, modern (Stripe, Vercel) | Expressive, high-impact (Awwwards, Studio) | How boldly does this interface announce itself? |
| **RHYTHM** | Predictable, structured, uniform grids | Structured base with deliberate section breaks | Asymmetric, dynamic, varied compositions | How much do sections vary in structure and pace? |
| **MOTION** | Hover & focus states only; zero autoplay | Micro-interactions, smooth scroll reveal | Choreographed entry, parallax, spring physics | How much movement exists, and what does it guide? |

### Levers of Liveliness
1. **One Focal Point per Screen:** Exactly one element dominates visually on any given viewport; secondary items defer to it.
2. **Hierarchical Contrast:** Pronounced deliberate differences in scale, font weight, and contrast.
3. **Whitespace as Structure:** Active whitespace that groups content and establishes pace, not accidental empty space.
4. **One Deliberate Accent:** A singular, punchy accent color reserved for key conversion/focus moments.
5. **Identity Motif:** One recurring visual gesture, typography nuance, or graphic device unique to the product.

### The Design Read
Before building, declare a 1-line grounding:
> *"Reading this as: `<page kind>` for `<audience>`, in a `<visual language>` style, dial ENERGY `<1-3>` / RHYTHM `<1-3>` / MOTION `<1-3>`."*

---

## 6. Domain-Specific Distillations

### A. Copywriting & Content
- Eliminate **Significance Inflation**: Replace *"ushering in a new era of productivity"* with concrete facts: *"cuts weekly status meetings by half"*.
- Strip **Weasel Attributions**: Banish *"experts say"* or *"trusted by thousands"*. Name real entities or omit the claim.
- Remove **Chatbot Residue**: Strip out *"I hope this helps!"*, conversational greetings, and tutorial signposting (*"Let's dive in!"*).

### B. Mobile Layout & Responsive Reflow
- **Reflow is Redesign:** Mobile is not desktop scaled down. Stack columns, resize type with fluid scales (`clamp()`), and reduce desktop-sized padding.
- **Zero Horizontal Overflow:** Set `max-width: 100%`, use `min-width: 0` on flex/grid children, and contain wide tables/code blocks.
- **Tap Targets:** Every button, tab, and link must have a hit area of **>= 48px** with adequate finger spacing.
- **Viewport Dynamic Units:** Use `dvh` or content-sized heights; avoid `100vh` which causes mobile browser chrome overflow.
- **Safe-Area Navigation:** Fixed bottom navs must respect `env(safe-area-inset-bottom)` and add scroll-padding so content is never obscured.

### C. Human Accessibility & Standards
- **Color Independence:** Never communicate status with color alone. Pair color with text labels, icons, or patterns.
- **Contrast Calculations:** Never assume grey-on-grey passes. Verify against WCAG AA standards (4.5:1 text, 3:1 non-text).
- **Visible Focus:** Retain high-contrast focus rings (`:focus-visible`) for all interactive elements.
- **Zoom Resilience:** Ensure typography and containers reflow cleanly up to 200% zoom without clipping or forcing horizontal scroll.

---

## 7. Delivery Gate Checklist (Mandatory Pre-Flight)

Before completing any UI task, run this gate and output the verification status:

- [ ] **Hard Gate:** Zero em dashes (`—`) in copy; zero mobile horizontal overflow; zero fake stats, testimonials, or claims; navbar links point to real pages; WCAG AA contrast verified; zero dead buttons/controls; empty/loading/error states present; full keyboard navigation verified; both themes functional if toggle exists; verified via actual run/click-through.
- [ ] **Purpose-Gate:** Every gradient, badge, shadow, card, and animation has an articulable 1-line reason; glassmorphism <= 2 elements; no unpurposed Lucide/sparkle icons.
- [ ] **Liveliness:** Design Read declared; output matches declared dials; exactly one focal point per screen; structural whitespace; one deliberate accent; distinct identity motif present.
- [ ] **Craftsmanship:** C-1 Intentionality verified; C-2 Functional completeness verified; C-3 Content-driven composition verified; C-4 Resilience verified; C-5 Evidence over claims verified.

If any item fails, fix it immediately before declaring the task done.
