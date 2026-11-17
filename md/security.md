# BUKU SAKTI: WEB SECURITY PROTOCOL (STANDAR PRO MAX)

Dokumen ini adalah pedoman mutlak untuk mengamankan aplikasi web. AI **DIHARAMKAN** merancang arsitektur atau menulis kode backend yang melanggar prinsip-prinsip di bawah ini.

---

## PRINSIP UTAMA: ZERO TRUST CLIENT
Jangan pernah mempercayai apapun yang datang dari *browser* (Frontend). 
Menonaktifkan "Klik Kanan" atau mencegah *user* membuka *Inspect Element* adalah praktik usang dan sia-sia. *Hacker* sejati beroperasi melalui cURL, Postman, atau *script* otomatis. Biarkan *user* memanipulasi DOM di *browser* mereka, namun pastikan **Backend bertindak sebagai benteng baja yang menolak semua manipulasi tersebut.**

---

## 1. PROTEKSI MANIPULASI DATA (ZOD VALIDATION)
Setiap *payload* atau data yang masuk dari Frontend ke Backend (via POST/PUT/PATCH) **WAJIB** divalidasi ulang di Backend.
- **Standar:** Gunakan **Zod** (atau library *schema validation* sejenis) untuk memverifikasi tipe data, panjang string, dan format.
- **Skenario:** Jika *user* iseng menggunakan *Inspect Element* untuk mengubah `price: 100000` menjadi `price: 1` di HTML, Backend wajib menolaknya (menghasilkan respons `400 Bad Request`) karena *schema* Zod di server akan mendeteksi ketidaksesuaian data asli.

## 2. AUTENTIKASI & MANAJEMEN SESI (JWT + HTTPONLY)
Penyimpanan kredensial/token pengguna di Frontend adalah titik paling rawan.
- **Standar JWT:** Jika menggunakan *JSON Web Token* (JWT), token **HARAM** disimpan di `localStorage` atau `sessionStorage`. Menyimpan token di sana sama dengan menyerahkan kunci rumah kepada *hacker* jika web terkena serangan XSS.
- **Implementasi:** JWT **WAJIB** disimpan dalam **HttpOnly, Secure, SameSite=Strict Cookies**. Dengan cara ini, *JavaScript* di *browser* (termasuk *script* jahat) sama sekali tidak bisa membaca atau mencuri token tersebut.

## 3. ANTI-DDOS & RATE LIMITING
Aplikasi tidak boleh dibiarkan telanjang menerima ribuan *request* tanpa batas.
- **Standar:** Implementasikan *Rate Limiting* di level *Edge* atau Middleware.
- **Tools:** Gunakan **Upstash Redis** (untuk Next.js/Vercel) atau setelan bawaan **Cloudflare WAF**.
- **Aturan:** Batasi *endpoint* sensitif (seperti `/api/login` atau `/api/register`) maksimal 5-10 *request* per menit per IP. Jika melebihi batas, kembalikan respons `429 Too Many Requests`.

## 4. PROTEKSI XSS (CROSS-SITE SCRIPTING) & CSRF
Mencegah injeksi *script* jahat dari pengguna.
- **XSS (Sanitasi Input):** Jika web menerima *input rich-text* (komentar, deskripsi) dari pengguna yang akan di-*render* ulang ke HTML, **WAJIB** gunakan **DOMPurify** di Backend sebelum menyimpan ke *database*.
- **CSP (Content Security Policy):** Pasang header CSP yang ketat untuk memastikan *browser* hanya mengeksekusi *script* dari *domain* yang kita izinkan.
- **CSRF (Cross-Site Request Forgery):** Jika menggunakan *Cookies* untuk sesi, wajib pasang mekanisme perlindungan CSRF Token atau pastikan atribut `SameSite=Strict` pada *cookie* sudah aktif.

## 5. NETWORK & CORS STRICT ORIGIN
Jangan biarkan *website* antah berantah menembak API kita.
- **CORS:** Konfigurasi *Cross-Origin Resource Sharing* di Backend **HARAM** disetel ke `Access-Control-Allow-Origin: *` di *environment* produksi. Wajib secara eksplisit mendaftarkan *domain* resmi (misal: `https://app.example.com`).
- **HTTPS Mutlak:** Paksa semua lalu lintas melalui HTTPS (Gunakan header HSTS - *Strict-Transport-Security*).

## 6. SECRETS MANAGEMENT (ENV VARIABLES)
- **Haram Ekspos Kunci Rahasia:** Jangan pernah meletakkan API Key rahasia (seperti kunci *database*, kunci *payment gateway*) dengan *prefix* publik (seperti `NEXT_PUBLIC_` atau `VITE_`) di file `.env`. Semua rahasia tingkat tinggi HANYA boleh dieksekusi dan dibaca di lingkungan server/backend.

---

## 7. CHECKLIST 20 ATURAN ANTI-HACKED (PRE-DEPLOY GATE)
Wajib diverifikasi dan dicentang sebelum kode dirilis (*deploy*) ke *production*:

1. **[ ] Hide API Keys:** Pastikan seluruh API key rahasia tersembunyi dan tidak pernah bocor ke sisi client (*frontend bundle*).
2. **[ ] Env Vars:** Pisahkan konfigurasi server dan client; environment variables sensitif hanya boleh diakses di runtime server.
3. **[ ] Admin Routes:** Kunci dan proteksi semua rute admin dengan *middleware guard*, autentikasi berlapis, dan validasi izin ketat.
4. **[ ] Auth:** Terapkan sistem autentikasi yang kuat, aman dari serangan brute-force, dan manajemen sesi yang tahan manipulasi.
5. **[ ] Access Control:** Implementasikan *Role-Based Access Control* (RBAC) pada setiap data/resource untuk mencegah *IDOR* dan *privilege escalation*.
6. **[ ] Sanitize Forms:** Validasi dan sanitasi seluruh input form baik di sisi client maupun wajib divalidasi ulang di backend.
7. **[ ] XSS Prevention:** Cegah *Cross-Site Scripting* dengan sanitasi output (DOMPurify) dan penerapan *Content Security Policy* (CSP).
8. **[ ] Rate Limit:** Pasang pembatasan laju (*rate limiting*) pada endpoint login, registrasi, dan API publik untuk menahan DoS & abuse.
9. **[ ] API Endpoints:** Amankan semua endpoint API dengan verifikasi token/sesi yang sah dan batasi metode HTTP yang diizinkan.
10. **[ ] CORS:** Konfigurasikan CORS origin secara ketat dan eksplisit ke domain resmi; haram wildcard `*` di production.
11. **[ ] Security Headers:** Pasang header keamanan HTTP esensial (*HSTS, X-Frame-Options, X-Content-Type-Options, CSP, Referrer-Policy*).
12. **[ ] Debug Mode Off:** Nonaktifkan debug mode, verbose error logs, dan stack trace detail di environment production.
13. **[ ] Update Deps:** Rutin perbarui dependensi & library pihak ketiga serta jalankan audit kerentanan (`npm audit`).
14. **[ ] Remove Unused:** Hapus kode mati, rute uji coba (*mock/test endpoints*), dan dependencies yang tidak terpakai.
15. **[ ] Exposed Files:** Blokir akses publik ke file sensitif (`.env`, `.git`, dump database, log file, file backup).
16. **[ ] Secure DB:** Gunakan koneksi database terenkripsi (SSL/TLS), user dengan *least privilege*, dan jangan buka port DB ke publik.
17. **[ ] Hash Password:** Simpan password hanya dalam bentuk hash menggunakan algoritma kuat (Argon2id atau Bcrypt + salt).
18. **[ ] Git Secrets:** Pindai repositori Git dari kunci rahasia (*hardcoded secrets/tokens*) sebelum commit dan push ke remote repository.
19. **[ ] Full Security Audit:** Lakukan pengujian penetrasi (*penetration test*) dan audit keamanan kode menyeluruh sebelum perilisan.
20. **[ ] SQL Injection Prevention:** Gunakan *parameterized queries* atau ORM teruji; haram menggabungkan string SQL mentah secara langsung.

---

## 8. AGENTIC AI, BOT & MCP ZERO-TRUST (STANDAR GEAP 2026)

### 8.1. 4 Pilar Kontrol Aksi Agent (GEAP Paradigm)
Fokus keamanan AI bergeser dari sekadar *"model apa yang di-approve"* menjadi **"aksi apa yang boleh dilakukan agent"**:
1. **Agent Identity:** Setiap agent wajib memiliki identitas unik tersendiri (haram memakai *shared account* atau kredensial manusia).
2. **Agent & Tool Registry:** Daftar resmi agent, MCP server, dan tool beserta metadata izin dan status *compliance*.
3. **Agent Gateway (Ingress & Egress):** Gerbang terpusat untuk menginspeksi seluruh trafik masuk dan keluar dari agent/MCP.
4. **Out-of-Band AuthZ Policy:** Aturan otorisasi bisnis ditegakkan di layer kode/gateway di luar kendali prompt LLM.
- Hindari *uniform governance* pukul rata; sesuaikan ketatnya level kontrol dengan risiko aksi agent.

### 8.2. Read vs Write Separation, `Idempotency-Key`, & Threshold Escalation
- Pisahkan tegas tool **Read** (bisa dieksekusi otomatis setelah validasi izin) dan tool **Write/Mutasi** (wajib menyertakan `Idempotency-Key` untuk mencegah duplikasi transaksi akibat retry).
- Setiap aksi *Write* yang melewati ambang batas risiko atau nominal (contoh: diskon >10% atau *checkout* pembayaran) **WAJIB** memicu eskalasi *Human Approval* atau *Cryptographic Mandate* serta memakai *scoped single-use payment token*.

### 8.3. Parameterized DB Tools (`tools.yaml`) & IAM Propagation + RLS
- **HARAM** membuka *Prebuilt Generic Tools* atau akses raw SQL bebas dari LLM ke database production.
- Wajib gunakan **Parameterized SQL Tools** (`$1, $2` ala *MCP Toolbox for Databases*) dan *Verified Queries* yang dijalankan oleh akun database *least-privilege*.
- Aplikasi agent haram memakai 1 *shared admin service account* untuk seluruh user—wajib teruskan identitas asli user (*OAuth/IAM Propagation*) sampai ke *Row-Level Security (RLS)* database, dan arahkan agent ke *Masked Analytics Views* untuk data ber-tag PII.

### 8.4. Anti-Toxic Combinations & Egress Control
- Cegah **toxic combination**: agent yang memiliki akses baca ke tabel atau dokumen sensitif (PII, keuangan, personalia) **DILARANG KERAS** diberi tool *egress/HTTP POST* bebas ke URL eksternal yang tidak terdaftar di *Registry*.

### 8.5. Two-Way Out-of-Band Guardrail (Anti-Crescendo & Indirect Prompt Injection)
- Filter bawaan LLM dapat jebol oleh eskalasi multi-turn (*Crescendo attack*), model open-weight tanpa filter, atau *indirect prompt injection* dari data eksternal (chat bot WA/Telegram, scraping web, deskripsi produk / *Agentic SEO*).
- Wajib pasang guardrail independen di kode aplikasi pada sisi **Input** (deteksi *prompt injection* dan anomali instruksi) dan **Output** (redaksi/masking PII seperti NIK, no. HP, nomor rekening/kartu, serta *secret* sebelum dikirim ke user/log).

### 8.6. CodeMender Security Loop (`Scan -> Verify PoC -> Plan -> Fix -> MR`)
- Audit keamanan tidak boleh berhenti pada analisis statis teori:
  1. **Scan:** Deteksi kandidat celah pada kode/konfigurasi.
  2. **Verify PoC:** Uji simulasi atau reproduksi *payload* secara lokal/sandbox untuk mengeliminasi *false positive*.
  3. **Plan:** Susun rencana perbaikan terukur sesuai root cause.
  4. **Fix:** Terapkan patch minimal diff, pastikan *exploit* gagal dan seluruh test hijau.
  5. **MR:** Ajukan diff/PR beserta bukti verifikasi.

### 8.7. Self-Hosted Bot & Agent Hardening (Standar Bot WA / Telegram)
1. **Strict Allowlist & Offboarding:** Kunci allowlist ke *numeric User ID* atau nomor WA resmi; cabut akses seketika saat user *offboard* (ikat ke SSO/OAuth bila memungkinkan).
2. **Container Isolation:** Jalankan bot di container Docker rootless/non-root tanpa akses shell host dan tanpa membuka port publik (wajib melalui VPN/Tailscale/Cloudflare Tunnel).
3. **Isolated Runtime:** Pisahkan eksekusi script Python atau tool berat ke container/MCP terisolasi agar bebas *OS drift*.
4. **Secrets Hygiene:** Simpan kredensial di Secret Manager atau `.env` terisolasi (`chmod 600`, zero *static key* di kode sumber).
5. **Zero Data Retention:** Wajib gunakan endpoint provider model dengan jaminan *Zero Data Retention* untuk data internal/pribadi (haram pakai *free-tier*/wrapper tak jelas).

