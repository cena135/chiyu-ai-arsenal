---
name: progress-update
description: 'Laporan progress sebagai halaman web interaktif Before/Now/After per fitur (bukan PPT). Trigger: "progress", "update meeting", "laporan fitur", "before after", "status fitur".'
---

# Progress Update Skill

Skill ini menghasilkan **mockup web interaktif** untuk progress update meeting — tampil profesional, mudah dibaca, dan bisa langsung dibagikan ke tim atau klien.

## Format Output

Selalu buat file HTML single-file yang bisa dibuka di browser. Tidak perlu PPT, tidak perlu teks panjang.

## Struktur Laporan

Laporan terdiri dari **2 bagian utama**:

### Bagian 1 — Progress Per Fitur
Setiap fitur ditampilkan dalam kartu dengan 3 kolom:

| Before | Now | After |
|--------|-----|-------|
| Kondisi atau masalah sebelumnya | Yang sudah dikerjakan sampai sekarang | Rencana pengembangan / arah selanjutnya |

- **Before** — seperti apa kondisinya sebelum dikerjakan, masalah apa yang ada
- **Now** — apa saja yang sudah selesai dikerjakan hingga saat ini
- **After** — mau dikembangkan ke mana, fitur apa yang akan ditambah, roadmap singkat

Di atas kartu: nama fitur, tanggal update, status badge (Done / In Progress / Blocked).

### Bagian 2 — Post-Meeting Timeline
Setelah kartu fitur, tampilkan section **"Rencana Setelah Meeting"** berupa timeline:

| Waktu | Target Selesai |
|-------|---------------|
| H+1 (besok) | Apa yang harus selesai 1 hari setelah meeting |
| H+3 | Apa yang harus selesai 3 hari setelah meeting |
| H+7 | Apa yang harus selesai 1 minggu setelah meeting |

Timeline ini ditampilkan sebagai **visual timeline horizontal atau vertikal** — bukan tabel biasa. Tiap milestone punya:
- Ikon atau nomor hari
- Daftar task yang harus selesai
- Status: Upcoming / Done / Missed

## Cara Kerja

### Step 1 — Kumpulkan Info
Tanyakan ke user (kalau belum ada di konteks):
- Nama project/website
- Daftar fitur yang mau dilaporkan
- Per fitur: kondisi before, progress sekarang, target after
- Status tiap fitur: Done / In Progress / Blocked
- Tanggal meeting / tanggal laporan
- Target H+1: apa yang harus selesai besok
- Target H+3: apa yang harus selesai 3 hari lagi
- Target H+7: apa yang harus selesai 1 minggu lagi

### Step 2 — Desain & Estetika
Gunakan desain yang **profesional tapi tidak membosankan**:
- Warna: gelap elegan (navy, slate) atau bersih modern (putih + aksen bold)
- Font: pilih yang berkarakter, hindari Inter/Arial
- Kartu per fitur dengan shadow subtle
- Badge status berwarna: hijau (Done), kuning (In Progress), merah (Blocked)
- Header dengan nama project + tanggal laporan
- Animasi masuk yang halus saat load

### Step 3 — Buat HTML
Buat single-file HTML dengan:
- CSS inline (tidak ada file terpisah)
- Responsive (bisa dibuka di HP maupun laptop)
- Tiap fitur = 1 kartu, 3 kolom (Before / Now / After)
- Summary bar di atas: total fitur, berapa done, berapa in progress, berapa blocked
- Section Post-Meeting Timeline di bawah kartu fitur (H+1, H+3, H+7)

### Step 4 — Simpan & Present
Simpan ke `/mnt/user-data/outputs/progress-update.html` dan gunakan `present_files` tool.

## Contoh Struktur HTML

```html
<!DOCTYPE html>
<html>
<head>
  <title>Progress Update — [Nama Project]</title>
  <style>
    /* Semua styling inline */
    /* Gunakan CSS variables untuk konsistensi warna */
    :root {
      --bg: #0f172a;
      --card: #1e293b;
      --accent: #38bdf8;
      --done: #22c55e;
      --progress: #f59e0b;
      --blocked: #ef4444;
      --text: #f1f5f9;
      --muted: #94a3b8;
    }
  </style>
</head>
<body>
  <!-- Header: nama project + tanggal meeting -->
  <!-- Summary bar: total, done, in progress, blocked -->
  <!-- Grid kartu per fitur (Before / Now / After) -->
  <!-- Section: Post-Meeting Timeline (H+1, H+3, H+7) -->
  <!-- Footer: nama pembuat -->
</body>
</html>
```

## Aturan Penting

- **Selalu HTML** — bukan markdown, bukan PPT
- **Single file** — semua CSS dan JS inline
- **Satu kartu per fitur** — jangan campur semua dalam satu tabel panjang
- **Status badge wajib** — user harus bisa lihat status sekilas
- **Tanggal wajib** — selalu tampilkan kapan laporan dibuat
- Kalau user tidak kasih info lengkap, **tanyakan dulu** sebelum generate
- Kalau user kasih info singkat, **elaborasi** dengan wajar — jangan terlalu kering

## Variasi Tambahan (Opsional)

Kalau user minta:
- **Timeline view** — tampilkan per sprint/minggu
- **Dark/Light toggle** — tambahkan tombol switch tema
- **Export button** — tambahkan tombol print/save PDF
- **Foto/screenshot** — sediakan slot image di tiap kartu
