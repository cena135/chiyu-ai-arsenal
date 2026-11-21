# BUKU SAKTI: ENGINEERING & ARCHITECTURE (STANDAR PRO MAX)

Dokumen ini adalah pedoman rekayasa perangkat lunak (*Software Engineering*). AI **DIHARAMKAN** merancang atau menulis kode yang berantakan, *spaghetti*, atau melanggar konvensi di bawah ini.

---

## 1. ARSITEKTUR FOLDER & KONVENSI PENAMAAN
- **Ekosistem Utama:** Next.js App Router (`/app`).
- **Pemisahan Logika (Separation of Concerns):** 
  - `/components/ui`: Khusus untuk komponen *dumb/reusable* (contoh: tombol, input, *card* dari UI Library).
  - `/components/features`: Komponen spesifik yang memiliki logika bisnis.
  - `/lib`: Fungsi utilitas murni yang tidak memiliki *state* (contoh: kalkulasi, *formatter*).
  - `/hooks`: Custom React Hooks (`use...`).
  - `/store`: Penyimpanan *Global State*.
- **Konvensi Penamaan File:** 
  - Komponen React UI **WAJIB** `PascalCase.tsx` (contoh: `PaymentModal.tsx`).
  - Fungsi, *Hooks*, dan Utilitas **WAJIB** `camelCase.ts` (contoh: `formatCurrency.ts`, `useAuth.ts`).

## 2. STANDARISASI DATA & API
- **Universal API Response:** Semua *endpoint* API (Route Handlers) **WAJIB** membungkus respons data dengan format baku agar Frontend mudah menanganinya:
  ```typescript
  { 
    success: boolean; 
    data: any | null; 
    error: string | null; 
    meta?: any; // (opsional untuk pagination, dll)
  }
  ```
- **State Management:** 
  - **Global Client State:** Gunakan **Zustand** (Dilarang keras menggunakan Redux atau Context API yang lambat untuk state sederhana).
  - **Server State / Data Fetching:** Gunakan **TanStack React Query**.
- **Data Fetching Rule:** Jangan pernah memanggil `fetch` telanjang langsung di dalam komponen *Client*. Buat fungsi *wrapper* atau *service* di `/lib/api.ts` yang sudah dilengkapi penanganan *error*.

## 3. OTOMATISASI & QUALITY ASSURANCE (PIPELINE)
- **Pre-Commit Hook (Satpam Kode):** Proyek **WAJIB** dikonfigurasi dengan **Husky** dan **lint-staged**. Sebelum kode di-*commit* ke Git, sistem harus secara otomatis mengeksekusi Linter dan Prettier.
- **Strict TypeScript & Anti-Any:** 
  - AI **HARAM** menggunakan tipe data `any`. 
  - Semua struktur data yang melintasi *network* (API ke Frontend) harus divalidasi dan di-*infer* tipenya menggunakan **Zod**.

---

## 4. ARSITEKTUR MOBILE & APK (OTA FIRST & SILENT RELAUNCH)
- **Zero-Rebuild Workflow:** Setiap pembuatan APK mobile (React Native / Flutter / Capacitor) **WAJIB** dikonfigurasi dengan sistem Over-The-Air (OTA) Updates (contoh: Expo Updates, Shorebird, atau Capgo).
- **Silent Background Download (Anti-Popup):** Update OTA diunduh diam-diam di background. **HARAM** memunculkan dialog/popup update mengganggu. Perubahan aktif otomatis saat CEO menutup dan membuka kembali aplikasi (*Kill & Relaunch*).
- **Forced Update Restriction:** Dialog update HANYA diizinkan jika ada *breaking change* pada protokol API backend yang membuat aplikasi versi lama lumpuh total.
- **Isolasi Native vs JS:** Re-build native APK hanya dilakukan jika ada dependensi plugin C++/Java/Kotlin baru atau modifikasi `AndroidManifest.xml`.

---

## 5. REKAYASA PENGUJIAN & ARTIFAK SCREENSHOT
- **Folder Artifak Terpusat:** Semua file screenshot dari Playwright, ADB Android, atau automated UI testing **WAJIB** masuk ke direktori terisolasi: `tests/screenshots/{context}/`.
- **Anti-Pollution:** Dilarang keras menaruh screenshot pengujian di *root*, `src/`, atau folder publik aset aplikasi. Wajib tambahkan `tests/screenshots/` ke `.gitignore` jika berukuran besar atau merupakan hasil run temporer.

---

## 6. STANDAR MUTLAK .GITIGNORE (ZERO-LEAK & ZERO-BLOAT)
Setiap repositori proyek **WAJIB** memiliki `.gitignore` yang memuat 6 kelompok aturan besi ini:
1. **OpSec & Kredensial:** `.env*`, `config.json`, `md/` (SOP rahasia dilarang bocor ke Git).
2. **AI Internals & Cache:** `.coder*`, `scratch/`, `.gemini/`, `*.bak`
3. **Binary Besar & Media:** `*.apk`, `*.aab`, `*.mp4`, `*.mov`, `output/`, `dist/`, `build/`
4. **Artifak QA & Testing:** `tests/screenshots/`, `window_dump.xml`, `*.log`
5. **Runtime Dependencies:** `__pycache__/`, `*.py[cod]`, `venv/`, `.venv/`, `node_modules/`
6. **OS Junk:** `Thumbs.db`, `Desktop.ini`, `.DS_Store`

---

## 7. 6 ATURAN BESI ANTI-CRASH REACT, VITE & PLAYWRIGHT (ZERO-DEFECT GUARD)
Wajib dipatuhi oleh Builder, Designer, dan Tester agar aplikasi tidak pernah mengalami *White Screen of Death* (WSOD) atau gagal saat diuji Playwright:
1. **Haram Mendefinisikan Sub-Komponen di Dalam `App()`:** Jangan pernah menulis `const Header = () => (...)` atau `const ProductCard = () => (...)` di dalam fungsi `const App = () => { ... }`. Itu membuat setiap perubahan *state* me-*remount* DOM dari nol, menghilangkan fokus `<input>`, dan me-*reset* animasi Framer Motion menjadi `opacity: 0`. Deklarasikan sub-komponen di luar `App` atau render JSX secara langsung.
2. **Proteksi Vite SPA 200-HTML Fallback (`Array.isArray` Guard):** Pada Vite SPA, *endpoint* `/api/*` yang belum aktif akan mengembalikan string `<!DOCTYPE html>...` dengan status HTTP 200. **WAJIB** memvalidasi `if (Array.isArray(data)) setItems(data)` dan memakai `const safeList = Array.isArray(items) ? items : DEFAULT_ITEMS` sebelum memanggil `.filter()` atau `.map()`.
3. **Inisialisasi State dengan `DEFAULT_DATA`:** Jangan pernah menginisialisasi *state* utama dengan array kosong `useState([])` yang bergantung 100% pada backend. Selalu sediakan konstanta `DEFAULT_DATA` (minimal 6 item realistis) sebagai nilai awal `useState(DEFAULT_DATA)` agar UI langsung ter-render dalam 0ms baik saat backend menyala maupun saat diuji mandiri oleh Vite/Playwright.
4. **Haram Import Package Gaib:** Dilarang melakukan `import` library eksternal (seperti `uuid`, `axios`, `canvas-confetti`, `clsx`) kecuali sudah tertulis eksplisit di dalam `package.json`. Gunakan API bawaan browser (`fetch`, `crypto.randomUUID()`, `Intl.NumberFormat`).
5. **Playwright Headless Animation Safety:** Saat memakai Framer Motion `<motion.div>`, jangan gunakan `initial={{ opacity: 0 }}` dengan durasi panjang pada konten utama karena tangkapan layar (*screenshot*) Playwright headless akan terlihat pudar/transparan. Gunakan `initial={{ opacity: 0.9, y: 8 }}` dengan `transition={{ duration: 0.15 }}` atau CSS transisi ringan.
6. **Atribut `data-testid` Standar untuk STQA:** Pasang `data-testid` yang konsisten pada elemen interaktif utama (`data-testid="cart-btn"`, `data-testid="add-to-cart"`, `data-testid="checkout-btn"`, `data-testid="search-input"`, `data-testid="theme-toggle"`) agar Tester (Playwright) tidak pernah gagal mencari *locator*.

---

## 8. STRICT QA AUTOMATION & PLAYWRIGHT LOOK-FIRST STANDARD (TESTER)
1. **Interactive Testing Is Mandatory**: Tester DILARANG hanya memeriksa elemen ada di DOM (`toBeVisible`). Tester WAJIB mensimulasikan interaksi pengguna nyata:
   - Mengklik tombol aksi utama menggunakan `await page.click()` atau `await page.getByTestId().click()`.
   - Mengisi input jika ada form (`await page.fill()`).
   - Memvalidasi perubahan state di UI (misal: hasil kalkulasi berubah, counter bertambah, drawer terbuka) SEBELUM mengambil screenshot.
2. **Multi-Resolusi & Zero-Zombie Browser**: Uji layout pada multi-resolusi (`320x568`, `375x812`, `768x1024`, `1280x720`, `2560x1440`), wajib memanggil `browser_close` / `browser.close()` di blok `finally` (`0` proses Chrome tersisa), serta cek `getComputedStyle` CSS aktif dan `0` console/CSP error baik di lokal maupun Post-Deploy Live Production.
3. **Evidence Screenshot**: Screenshot wajib diambil setelah interaksi selesai di `tests/screenshots/playwright_audit.png`.

---

## 9. PRE-EXISTENCE & ANTI-DUPLICATION ENGINE
Untuk mencegah polusi file duplikat atau overwrite file yang sudah eksis di repo:
1. **RepoTree Pre-Scan**: Sebelum membuat file baru (`CREATE:` atau empty search block), engine memindai seluruh pohon repositori (`get_repo_file_tree`).
2. **Duplicate Candidate Detection**: Jika file dengan basename yang sama (non-generik) sudah ada di subdirektori manapun di dalam workspace, engine otomatis menolak pembuatan file baru dan memunculkan warning `DUPLICATE CANDIDATE DETECTED`.
3. **Anti-Overwrite Protection**: File yang sudah ada di disk (`>120B`) dilarang ditimpa dengan template kosong / raw `CREATE` blocks kecuali file tersebut secara eksplisit dimasukkan ke dalam target (`[Target File: ...]`).

---

## 10. STANDAR WAJIB `PROJECT_CONTEXT.md` (TERMASUK RED FLAGS), KERAPIAN FOLDER & AUTO GITHUB PUSH
Agar proyek selalu siap dilanjutkan secara mulus antara Gemini (Antigravity) dan OpenCode (tinggal *clone* dari GitHub langsung siap kerja tanpa kehilangan konteks), AI **WAJIB** menerapkan 3 aturan ini di setiap progres:

1. **Struktur Wajib `PROJECT_CONTEXT.md` di Root Proyek:**
   Setiap proyek wajib memiliki file `PROJECT_CONTEXT.md` yang selalu diperbarui setelah menyelesaikan fitur/bugfix, dengan 4 bagian wajib:
   - **1. Arsitektur & Peta Folder:** Stack yang dipakai dan lokasi spesifik file/komponen utama.
   - **2. Status Progres & Roadmap:** Daftar fitur yang sudah selesai (`[x]`), sedang dikerjakan (`[/]`), dan antrean berikutnya (`[ ]`).
   - **3. 🚨 RED FLAGS / SUDAH DICOBA TAPI GAGAL (JANGAN DICOBA LAGI!):** Daftar semua eksperimen, library, konfigurasi, atau pendekatan kode yang pernah dicoba namun gagal/error/merusak layout beserta alasan teknisnya, agar AI di sesi berikutnya **dilarang keras mengulangi kesalahan yang sama**.
   - **4. Cara Menjalankan & Deploy:** Perintah *dev/build/deploy* dan alokasi port server host/staging/production.
2. **Disiplin Kerapian Folder (Zero File Kececeran):**
   - Sebelum mengakhiri tugas atau melakukan *commit*, bersihkan root folder proyek dari script debug/patch sekali pakai (`fix_*.py`, `test_*.py`, `temp_*`, `*.bak`) dan pastikan semua screenshot pengujian tersimpan rapi hanya di dalam `tests/screenshots/` (yang diblokir oleh `.gitignore`).
3. **Auto Commit & Push ke GitHub (OpenCode Clone-Ready):**
   - Setelah progres terverifikasi dan `PROJECT_CONTEXT.md` ter-update, wajib lakukan `git add`, `git commit`, dan `git push` ke GitHub (atau buat private repo via `gh repo create <nama> --private --source=. --remote=origin --push` jika belum ada) sehingga kapan pun dibuka di OpenCode, tinggal *clone* dan langsung siap kerja.

---

## 11. ARSITEKTUR AGENTIC AI, DATA & INTEGRASI ENTERPRISE (STANDAR 2026)

### 11.1. Dedicated Specialist Agents vs 1 Mega-Agent & Telemetry
- Rancang sistem multi-agent dengan agent spesialis per domain yang memiliki skill & MCP terisolasi ketat (pola Google ADK) ketimbang 1 *general mega-agent*.
- Rekam *audit log / telemetry* terstruktur atas seluruh *prompt* dan *tool traces* untuk observabilitas dan debugging deterministik.

### 11.2. Agent Evaluation berbasis Golden Dataset
- Tahap wajib sebelum deploy fitur AI/Agent: jalankan evaluasi otomatis memakai **Golden Dataset** (daftar skenario input terhadap ekspektasi *function call*, parameter, dan query DB) untuk mencegah regresi perilaku agent.

### 11.3. A2A (Agent2Agent) vs MCP Architecture
- **MCP (Integrasi Vertikal):** Hubungkan 1 agent dengan tools, database, dan sistem eksternal (*Google Workspace MCP*, *Looker MCP*, *MCP Toolbox for Databases*).
- **A2A Protocol (Integrasi Horizontal):** Gunakan standar `/.well-known/agent-card.json`, JSON-RPC 2.0 over HTTP + SSE streaming, serta *task lifecycle* (`submitted` / `working` / `input-required` / `completed` / `failed`) untuk kolaborasi lintas agent/sistem dengan prinsip *opacity* (tanpa membocorkan prompt atau database internal).

### 11.4. Gemini Live API (Real-Time Voice & Multimodal)
- Untuk fitur asisten suara/video interaktif, gunakan **Native Audio via WebSocket dua arah** ketimbang arsitektur lama `STT -> LLM -> TTS`.
- Arsitektur ini wajib mendukung *barge-in* (memotong pembicaraan secara natural), *affective dialogue* (pembacaan intonasi/ekspresi visual), dan *asynchronous function calling* di background tanpa memutus alur obrolan.

### 11.5. Data Engineering & Analytics untuk AI (Star Schema, Knowledge Catalog, Dataform)
- Pisahkan **Fact Table** (angka transaksi) dan **Dimension Table** (`dim_product`, `dim_customer`, `dim_date`) agar query AI cepat, akurat, dan hemat biaya scan.
- Lengkapi model data dengan **Knowledge Catalog / Glossary** (definisi istilah bisnis internal) serta daftar bernomor **Verified Queries** yang ringkas tanpa komentar panjang.
- Gunakan alur `Plan -> Approve -> Generate Code + Unit Test -> Apply` untuk membangun dan memvalidasi pipeline transformasi data (pola Dataform).

### 11.6. Agentic Commerce Architecture
- **Read Layer:** Pencarian harga, stok, dan ongkir objektif dari *feed* terstruktur tanpa terpengaruh iklan *sponsored*, disertai validasi identitas resmi *Merchant of Record*.
- **Write Layer:** Pembuatan *cart* dan *order* wajib menggunakan `Idempotency-Key` serta *scoped single-use payment token*.

### 11.7. Antigravity Hooks, Sidecars, & Deterministic Skill Wrapping
- Gunakan **Hooks** di *execution loop* untuk menegakkan linter dan aturan keamanan secara otomatis tanpa membebani prompt.
- Gunakan **Sidecars** untuk menjalankan *background daemon* pendamping yang hemat RAM dan memiliki *auto-restart*.
- Bungkus alur API atau *network contract* yang berulang menjadi **Skill/CLI deterministik** agar eksekusi cepat dan stabil.

---

## 12. WINDOWS POWERSHELL ANTI-PIPE-HANG & SAFE SYNC STANDARD
1. **Anti-Pipe-Hang Local Server Spawn:** Haram spawn server lokal (`tsx`, `uvicorn`, `next`, `node`) lewat inherited PowerShell pipe karena menahan handle stdio sehingga background task tetap `RUNNING` permanen walau test selesai. Wajib pakai in-process `TestClient`/Docker, atau redirect `-RedirectStandardOutput`/`-RedirectStandardError` + `taskkill /F /T /PID` di blok `finally` + hard timeout.
2. **Anti-Binary-Pipe Sync (`tar | ssh`):** Haram mengalirkan binary pipe `tar | ssh` di Windows PowerShell (rawan corrupt/partial sync). Wajib buat arsip `.tar.gz` lokal -> `scp` -> ekstrak remote -> hapus arsip temp -> verifikasi eksistensi file & route hasil build di target.
