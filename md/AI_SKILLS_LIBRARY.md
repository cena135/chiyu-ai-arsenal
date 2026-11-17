# AI SKILLS LIBRARY (ACTIVE & VERIFIED — 2026)

Dokumen ini mencatat katalog **27 Active Skills + Built-in Platform Skills** yang terpasang di `~/.gemini/config/skills/` (dan repo **AI Arsenal**) beserta **4 Server MCP** dan pemetaan **7-Agent Studio** di sistem Gemini (Antigravity) dan OpenCode.

> **Aturan Strict Lazy-Load (Anti-Context Bloat):** Seluruh daftar skill di bawah ini adalah **Katalog Skill**. Untuk setiap task, Planner & setiap Subagent hanya boleh me-load **maksimal 1–2 `SKILL.md` paling relevan** dengan tugas yang sedang dikerjakan agar *context window* tetap ramping dan tajam.

---

## 1. ACTIVE MCP SERVERS (`mcp_config.json`)
1. **`playwright` (`@playwright/mcp@latest`)**: Browser automation nyata untuk protokol **Look-First** (buka URL, ambil & lihat foto screenshot sebelum dan sesudah ngoding, klik/ketik interaktif, dan cek console error).
2. **`shadcn` (`npx -y shadcn@latest mcp`)**: Integrasi langsung dengan katalog komponen UI (`@react-bits`, `@magicui`, `@aceternity`, `@kokonutui`, `shadcn/ui`) agar AI bisa mencari dan menginstal komponen secara otomatis tanpa user harus copy-paste manual dari web.
3. **`rea` (`cmd.exe /d /c npx -y rea-agents@6.7.0 mcp` / `npx -y rea-agents`)**: *Reverse Engineer Anything* — membongkar dan menganalisis cara kerja website tertutup, aplikasi desktop Electron (`app.asar`), ekstensi browser, hingga file binary (`.exe`/`.dll`/`.apk`).
4. **`graphify` (`graphify-mcp.exe`)**: Mesin CodeGraph (`graphify-out/graph.json`) untuk membaca peta arsitektur dan relasi antar-file dengan penghematan token hingga 70x.

---

## 2. PEMETAAN KATALOG SKILL KE 7-AGENT STUDIO

### 🔵 Agent 1: `Planner` (Lead Architect — Model Built-in: `pro` / `inherit`)
1. **`graphify`**: Pemetaan dan kueri *CodeGraph* (`graph.json`) untuk memahami struktur arsitektur repositori besar tanpa boros token.
2. **`ponytail`**: Mindset solusi paling ringkas & minimalis (YAGNI, anti-overengineering, no fluff).
3. **`wrap-up`**: Prosedur penutupan sesi bersih (update memori, bersihkan file debug/temp, git commit).
4. **`agy-customizations`** *(Antigravity Built-in)*: Konfigurasi lifecycle hooks (`hooks.json`), rules, subagents, dan sidecars Antigravity.

### 🕵️ Agent 2: `Scout` (Research & Reverse Engineering Specialist — Model Built-in: `flash`)
5. **`rea`** *(`morluto/rea` MCP + Skill)*: *Reverse Engineer Anything* untuk membongkar bundle JS web, aplikasi desktop Electron (`app.asar`), APK, atau file binary tanpa refusal/sensor.
6. **`agent-reach`** *(CLI `agent-reach`)*: Ekstraksi cepat konten web (Markdown), thread Twitter/X & Reddit, repo GitHub, serta transkrip video YouTube/TikTok dengan $0 biaya API.
7. **`cli-anything`** *(CLI `cli-hub`)*: Mengontrol aplikasi desktop & software kreatif (Docker, OBS, Blender, GIMP, dll.) secara deterministik via JSON CLI; bungkus *network/API contract* berulang menjadi Skill/CLI deterministik.

### 🟢 Agent 3: `Builder` (Full-Stack Engineer — Model Built-in: `flash`)
8. **`karpathy-minimal-diff`**: **Hukum Besi Minimal Surgical Diff** — dilarang keras menulis ulang seluruh file jika hanya mengubah sebagian. Patch presisi hemat token.
9. **`antislop-code`**: Higiene komentar kode (strip komentar robotik AI-slop, eliminasi narasi step-by-step & divider dekoratif) & penegakan **C-2 Functional Completeness** (haram tombol/handler mati).
10. **`frontend-patterns`**: Best practices arsitektur React, Next.js App Router, state management, dan optimasi performa UI.
11. **`backend-patterns`**: Best practices arsitektur API, query database optimization, caching, dan server-side patterns.
12. **`managing-python-dependencies`**: Disiplin dependensi Python (anti-global pip, pakai venv/uv).
13. **`android-cli`** *(Official Plugin)*: Pembuatan proyek Android, build APK, dan manajemen SDK via CLI.
14. **`android-device-hub`** *(Official Plugin)*: Manajemen Android Virtual Devices (AVD) & perangkat fisik ADB (`android layout`, `android screen`, `adb`).
15. **`agy-customizations`** *(Antigravity Built-in)*: Referensi resmi pembuatan & pengujian **Antigravity Hooks (`hooks.json`)** serta **Sidecars** ringan RAM.

### 🩷 Agent 4: `Designer` (UI / UX Engineer — Model Built-in: `flash`)
16. **`apple-design`**: Standar desain Apple WWDC, Human Interface Guidelines (HIG), macOS/visionOS Liquid Glass, spring physics 60fps, dan **anti-neon slop**.
17. **`ui-ux-pro-max-skill`**: Database desain profesional (79 gaya UI, 192 palet warna terkurasi, 74 pasangan font, 119 UX guidelines).
18. **`genjutsu`**: *Creative coding*, micro-interactions, GSAP ScrollTrigger, Three.js/WebGL, dan visual identity kelas Silicon Valley.
19. **`design-dna`**: Ekstraksi token sistem desain 3-dimensi dari referensi/URL menjadi profil JSON terstruktur.
20. **`antislop`**: **Filter Anti-AI-Slop & Liveliness Bar** untuk UI, copywriting, mobile reflow, dan aksesibilitas manusia (R-01 s/d R-40, Three Dials, Purpose-Gate, Delivery Gate). Selalu aktif di bawah `design.md`.
21. **`compose-preview`** *(Official Plugin)*: Rendering dan inspeksi visual Jetpack Compose `@Preview` (`android preview render`).
22. **`generative_ui`** *(Antigravity Built-in)*: Arsitektur **A2UI ("UI as Data, Not Code")** — merender antarmuka dinamis dari payload JSON terstruktur menggunakan komponen native (bukan raw HTML/JS/CSS bebas dari LLM).

### 🟡 Agent 5: `Tester` (QA & Visual Verifier — Model Built-in: `flash_lite`)
23. **`playwright-mcp`**: **Protokol Wajib Look-First** (buka halaman & lihat foto screenshot vision sebelum dan sesudah menyentuh kode, uji klik interaktif, audit console log bebas error, dan **wajib auto `browser_close`**).
24. **`antislop`** *(Delivery Gate Verification)*: Audit kepatuhan pra-delivery (WCAG AA contrast, touch target >= 48px, zero mobile horizontal overflow, zero dead buttons, audit checklist R-01..R-40).

### 🛡️ Agent 6: `Auditor` (Security & Data Safety Gatekeeper — Model Built-in: `flash`)
25. **`security-audit`**: Audit menyeluruh kerentanan kode (*trust boundary analysis*, reproduksi/verifikasi PoC pola CodeMender, dan remediation).
26. **`claude-code-owasp`**: Standar keamanan live-coding OWASP Top 10 (2025/2026), ASVS 5.0, dan LLM Top 10 vulnerabilities.
27. **`secure-claude-skills`**: Kontrol keamanan tingkat enterprise khusus untuk Next.js App Router, Clerk Auth, CSRF protection, validasi Zod, dan rate limiting.
28. **`accidental-data-loss-prevention`**: **Gerbang Keamanan Besi** untuk mencegah penghapusan volume Docker (`down -v`, `volume rm`), reset ORM (`prisma migrate reset`), atau `DROP/TRUNCATE` tanpa audit isolasi dan izin eksplisit CEO.

### 🟣 Agent 7: `Deployer` (DevOps & Server Infrastructure — Model Built-in: `flash_lite`)
29. **`cloudflare`** *(Cloudflare Official)*: Arsitektur & manajemen Cloudflare Tunnels, Zero Trust, WAF, dan snapshot backup ke Cloudflare R2 (egress gratis).
30. **`progress-update`**: Generator laporan progress proyek Before/Now/After yang rapi untuk review.
31. **`skill-repair`**: Utilitas perbaikan struktur `SKILL.md` dan `manifest.json` skill jika corrupt.

---

## 3. ANTIGRAVITY EXECUTION HOOKS (`hooks.json`) & GEAP ZERO-TRUST GOVERNANCE
- **Out-of-Band Execution Hooks (`~/.gemini/config/hooks.json` + `./hooks/safety-gate.mjs`):**
  Menegakkan aturan deterministik di luar kendali prompt LLM pada `PreToolUse` (`invoke_subagent|run_command`) secara fail-safe:
  1. **Argon/Pro Quota Shield:** Memblokir `invoke_subagent` jika `Model` bukan `"flash"` atau `"flash_lite"` (strict allowlist).
  2. **Chiyu Zero-Trust Safety Gate:** Memblokir eksekusi perintah destruktif volume/DB (`docker compose ... down -v`, `docker volume rm/prune`, `docker system prune`, `prisma migrate reset`, `prisma db push --force-reset`, `drizzle-kit drop`) serta elevasi UAC Windows (`Start-Process -Verb RunAs`, `Shell.Application`), termasuk yang dibungkus sub-shell (`powershell`/`pwsh`/`cmd`/`bash`), tanpa memicu *false positive* pada string teks di `git commit -m`, `rg`, atau `Set-Content`.
- **GEAP Zero-Trust Governance (4 Pilar):**
  1. **Agent Identity:** Identitas unik per agent (nol *shared admin account*), meneruskan identitas user (*OAuth/IAM Propagation*) sampai ke *Row-Level Security (RLS)*.
  2. **Agent & Tool Registry:** Hanya tool terverifikasi yang terdaftar di gateway (pisahkan tool *Read* vs *Write* + `Idempotency-Key` + *Human Approval/Mandate* di atas ambang risiko).
  3. **Agent Gateway (Ingress/Egress):** Seluruh trafik agent/MCP melewati gateway terpusat; cegah *toxic combination* (agent pembaca data PII dilarang punya egress HTTP POST bebas).
  4. **Out-of-Band AuthZ & Two-Way Guardrail:** Penegakan kebijakan bisnis di kode/gateway + filter Input (anti-*Crescendo* & *indirect prompt injection*) dan Output (masking PII/secret).

---

## 4. ARSIP SKILLS NON-AKTIF (`~/.gemini/config/disabled_skills/`)
Skill yang duplikat, terlalu mikro (placeholder 3-4 baris), atau tidak relevan (seperti skill duplikat BigQuery dan stub `claude-audit`, `superdesign`, `superpowers`, `task-observer`, `stop-slop`, `i-have-adhd`, `system_prompts_leaks`) disimpan di direktori arsip non-aktif agar tidak membebani konteks AI (*Zero Over-Engineering*).
