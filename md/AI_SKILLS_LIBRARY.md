# AI SKILLS LIBRARY (ACTIVE & VERIFIED — 2026)

Dokumen ini mencatat daftar **24 Core Skills + 3 Android Official Plugin Skills (Total 27 Active Skills)** yang terpasang di `~/.gemini/config/skills/` (dan repo **AI Arsenal**) beserta **4 Server MCP** dan pemetaan **7-Agent Studio** di sistem Gemini (Antigravity) dan OpenCode.

---

## 1. ACTIVE MCP SERVERS (`mcp_config.json`)
1. **`playwright` (`@playwright/mcp@latest`)**: Browser automation nyata untuk protokol **Look-First** (buka URL, ambil & lihat foto screenshot sebelum dan sesudah ngoding, klik/ketik interaktif, dan cek console error).
2. **`shadcn` (`npx -y shadcn@latest mcp`)**: Integrasi langsung dengan katalog komponen UI (`@react-bits`, `@magicui`, `@aceternity`, `@kokonutui`, `shadcn/ui`) agar AI bisa mencari dan menginstal komponen secara otomatis tanpa user harus copy-paste manual dari web.
3. **`rea` (`cmd.exe /d /c npx -y rea-agents@6.7.0 mcp` / `npx -y rea-agents`)**: *Reverse Engineer Anything* — membongkar dan menganalisis cara kerja website tertutup, aplikasi desktop Electron (`app.asar`), ekstensi browser, hingga file binary (`.exe`/`.dll`/`.apk`).
4. **`graphify` (`graphify-mcp.exe`)**: Mesin CodeGraph (`graphify-out/graph.json`) untuk membaca peta arsitektur dan relasi antar-file dengan penghematan token hingga 70x.

---

## 2. PEMETAAN 26 ACTIVE SKILLS KE 7-AGENT STUDIO

### 🔵 Agent 1: `Planner` (Lead Architect — Model Built-in: `pro` / `inherit`)
1. **`graphify`**: Pemetaan dan kueri *CodeGraph* (`graph.json`) untuk memahami struktur arsitektur repositori besar tanpa boros token.
2. **`ponytail`**: Mindset solusi paling ringkas & minimalis (YAGNI, anti-overengineering, no fluff).
3. **`wrap-up`**: Prosedur penutupan sesi bersih (update memori, bersihkan file debug/temp, git commit).

### 🕵️ Agent 2: `Scout` (Research & Reverse Engineering Specialist — Model Built-in: `flash`)
4. **`rea`** *(`morluto/rea` MCP + Skill)*: *Reverse Engineer Anything* untuk membongkar bundle JS web, aplikasi desktop Electron (`app.asar`), APK, atau file binary tanpa refusal/sensor.
5. **`agent-reach`** *(CLI `agent-reach`)*: Ekstraksi cepat konten web (Markdown), thread Twitter/X & Reddit, repo GitHub, serta transkrip video YouTube/TikTok dengan $0 biaya API.
6. **`cli-anything`** *(CLI `cli-hub`)*: Mengontrol aplikasi desktop & software kreatif (Docker, OBS, Blender, GIMP, dll.) secara deterministik via JSON CLI.

### 🟢 Agent 3: `Builder` (Full-Stack Engineer — Model Built-in: `flash`)
7. **`karpathy-minimal-diff`**: **Hukum Besi Minimal Surgical Diff** — dilarang keras menulis ulang seluruh file jika hanya mengubah sebagian. Patch presisi hemat token.
8. **`antislop-code`**: Higiene komentar kode (strip komentar robotik AI-slop, eliminasi narasi step-by-step & divider dekoratif) & penegakan **C-2 Functional Completeness** (haram tombol/handler mati).
9. **`frontend-patterns`**: Best practices arsitektur React, Next.js App Router, state management, dan optimasi performa UI.
10. **`backend-patterns`**: Best practices arsitektur API, query database optimization, caching, dan server-side patterns.
11. **`managing-python-dependencies`**: Disiplin dependensi Python (anti-global pip, pakai venv/uv).
12. **`android-cli`** *(Official Plugin)*: Pembuatan proyek Android, build APK, dan manajemen SDK via CLI.
13. **`android-device-hub`** *(Official Plugin)*: Manajemen Android Virtual Devices (AVD) & perangkat fisik ADB (`android layout`, `android screen`, `adb`).

### 🩷 Agent 4: `Designer` (UI / UX Engineer — Model Built-in: `flash`)
14. **`apple-design`**: Standar desain Apple WWDC, Human Interface Guidelines (HIG), macOS/visionOS Liquid Glass, spring physics 60fps, dan **anti-neon slop**.
15. **`ui-ux-pro-max-skill`**: Database desain profesional (79 gaya UI, 192 palet warna terkurasi, 74 pasangan font, 119 UX guidelines).
16. **`genjutsu`**: *Creative coding*, micro-interactions, GSAP ScrollTrigger, Three.js/WebGL, dan visual identity kelas Silicon Valley.
17. **`design-dna`**: Ekstraksi token sistem desain 3-dimensi dari referensi/URL menjadi profil JSON terstruktur.
18. **`antislop`**: **Filter Anti-AI-Slop & Liveliness Bar** untuk UI, copywriting, mobile reflow, dan aksesibilitas manusia (R-01 s/d R-40, Three Dials, Purpose-Gate, Delivery Gate). Selalu aktif di bawah `design.md`.
19. **`compose-preview`** *(Official Plugin)*: Rendering dan inspeksi visual Jetpack Compose `@Preview` (`android preview render`).

### 🟡 Agent 5: `Tester` (QA & Visual Verifier — Model Built-in: `flash_lite`)
20. **`playwright-mcp`**: **Protokol Wajib Look-First** (buka halaman & lihat foto screenshot vision sebelum dan sesudah menyentuh kode, uji klik interaktif, audit console log bebas error, dan **wajib auto `browser_close`**).
21. **`antislop`** *(Delivery Gate Verification)*: Audit kepatuhan pra-delivery (WCAG AA contrast, touch target >= 48px, zero mobile horizontal overflow, zero dead buttons, audit checklist R-01..R-40).

### 🛡️ Agent 6: `Auditor` (Security & Data Safety Gatekeeper — Model Built-in: `flash`)
22. **`security-audit`**: Audit menyeluruh kerentanan kode (*trust boundary analysis*, reproduksi aman, dan remediation).
23. **`claude-code-owasp`**: Standar keamanan live-coding OWASP Top 10 (2025/2026), ASVS 5.0, dan LLM Top 10 vulnerabilities.
24. **`secure-claude-skills`**: Kontrol keamanan tingkat enterprise khusus untuk Next.js App Router, Clerk Auth, CSRF protection, validasi Zod, dan rate limiting.
25. **`accidental-data-loss-prevention`**: **Gerbang Keamanan Besi** untuk mencegah penghapusan volume Docker (`down -v`, `volume rm`), reset ORM (`prisma migrate reset`), atau `DROP/TRUNCATE` tanpa audit isolasi dan izin eksplisit CEO.

### 🟣 Agent 7: `Deployer` (DevOps & Server Infrastructure — Model Built-in: `flash_lite`)
26. **`cloudflare`** *(Cloudflare Official)*: Arsitektur & manajemen Cloudflare Tunnels, Zero Trust, WAF, dan snapshot backup ke Cloudflare R2 (egress gratis).
27. **`progress-update`**: Generator laporan progress proyek Before/Now/After yang rapi untuk review.
28. **`skill-repair`**: Utilitas perbaikan struktur `SKILL.md` dan `manifest.json` skill jika corrupt.

---

## 3. ARSIP SKILLS NON-AKTIF (`~/.gemini/config/disabled_skills/`)
Skill yang duplikat, terlalu mikro (placeholder 3-4 baris), atau tidak relevan (seperti 30 skill GCP BigQuery dan stub `claude-audit`, `superdesign`, `superpowers`, `task-observer`, `stop-slop`, `i-have-adhd`, `system_prompts_leaks`) disimpan di direktori arsip non-aktif agar tidak membebani konteks AI (*Zero Over-Engineering*).
