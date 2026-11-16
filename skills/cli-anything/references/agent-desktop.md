# Vercel Labs `agent-desktop` — OS Native Accessibility Desktop Automation

> **Repository**: `https://github.com/vercel-labs/agent-desktop`
> **Stack**: Rust CLI + C Library (Cross-Platform: Windows, macOS, Linux — x64 & ARM64)
> **Fungsi Utama**: Memberikan kemampuan *computer-use* deterministik bagi AI coding/shell agent melalui **OS Native Accessibility Tree** (bukan tebak koordinat screenshot vision yang lambat dan boros token).

---

## 1. Kapan Menggunakan `agent-desktop` vs `cli-hub` (`cli-anything`) vs `playwright-mcp`?

| Target Aplikasi | Tool Utama | Alasan Teknis |
| :--- | :--- | :--- |
| **Web / Browser / Localhost UI** | `playwright-mcp` | DOM inspection langsung, console logs, network tab, dan screenshot Look-First. |
| **Aplikasi Kreatif/Teknis dengan Adapter (`OBS`, `Blender`, `GIMP`, `Docker`, `LibreOffice`)** | `cli-hub` (`cli-anything`) | Memiliki command CLI spesifik domain (scene switching, render pipeline, layer manipulation) dengan output `--json`. |
| **Aplikasi Desktop Native / Electron / Windows GUI Umum (tanpa CLI khusus)** | **`agent-desktop`** | Membaca pohon elemen **Windows UI Automation (UIA)** secara langsung menjadi JSON + `refs` tanpa perlu vision/screenshot koordinat. |

---

## 2. Arsitektur Native Accessibility per OS

Alih-alih mengirim screenshot beresolusi tinggi ke model vision setiap langkah, `agent-desktop` mengekstrak hierarki elemen interaktif langsung dari API aksesibilitas bawaan sistem operasi:
- **Windows**: **UI Automation (UIA)** API
- **macOS**: **Accessibility (AX)** API
- **Linux**: **AT-SPI**

---

## 3. Alur Kerja Deterministik (`Snapshot` ➔ `Ref` ➔ `Action`)

1. **Ambil Snapshot Struktur UI (`JSON + Refs`)**:
   - Agent meminta snapshot jendela aplikasi yang sedang aktif.
   - `agent-desktop` mengembalikan payload JSON ringkas yang berisi daftar elemen UI (tombol, input teks, menu, tab) beserta **ID referensi pendek (`ref`)** untuk masing-masing elemen.
2. **Interaksi Langsung via `ref` (Zero Coordinate Guessing)**:
   - Agent menargetkan `ref` spesifik untuk melakukan aksi:
     - Klik tombol (`click <ref>`)
     - Ketik teks ke field input (`type <ref> "<text>"`)
     - Fokus / pilih elemen (`focus <ref>`, `select <ref>`)
3. **Verifikasi State Baru**:
   - Ambil snapshot JSON berikutnya untuk memastikan perubahan state UI berhasil (jauh lebih hemat token dibanding memproses gambar berulang kali, terutama pada aplikasi Electron yang padat).
