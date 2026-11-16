# BUKU SAKTI: UI/UX & DESIGN RESOURCES

Dokumen ini adalah ringkasan dari semua pustaka desain, *rules*, dan *tools* tingkat atas yang dikurasi khusus untuk menciptakan antarmuka (UI/UX) sekelas *startup* triliunan di Silicon Valley.

---

## 1. THE GOLDEN RULES: 7 ATURAN EMAS UI PROFESIONAL
Untuk membuat aplikasi terasa *legit* (bukan seperti tugas akhir mahasiswa), terapkan 7 aturan Vibe-Coding ini:
1. **Skeleton Loaders:** Haram menggunakan *loading spinner* (roda berputar). Wajib gunakan kotak abu-abu berkedip (*skeleton*) sesuai struktur *layout* saat memuat data.
2. **Caching API Data:** Data API wajib di-*cache* secara lokal. Jika user berpindah tab/halaman, data harus muncul instan dalam 0 detik tanpa menunggu *network request*.
3. **Optimistic Rendering:** Jika *user* menekan tombol aksi (misal: Like/Follow), langsung ubah UI menjadi sukses seketika itu juga di latar depan. Biarkan proses ke server berjalan diam-diam di latar belakang.
4. **Tooltips on Icon Buttons:** Jika ada tombol yang hanya berupa ikon (tanpa teks), **wajib** tambahkan pesan *hover* (*tooltip*) kecil untuk menjelaskan fungsi tombol tersebut tanpa membuat desain berantakan.
5. **Anti-Gimmick Copywriting:** **Haram** menyelipkan teks *cringe*, copywriting norak, atau slogan AI generik. Gunakan teks profesional, bersih, padat, dan langsung ke fungsi.
6. **Pixel-Perfect & Simetris:** Dilarang meletakkan elemen *offset*, miring, jomplang, atau terlalu mepet ke ujung layar/bezel. Wajib menjaga *padding/margin* seimbang dan konsisten (4px/8px grid system).
7. **Safe-Area Aware:** Pada aplikasi mobile/web responsif, wajib memperhitungkan *notch* kamera, *dynamic island*, dan *navigation bar* bawah (`env(safe-area-inset-*)`). Jangan biarkan tombol atau header tertutup notch.


---

## 2. GUDANG SENJATA: 13 LIBRARY DEWA (UI COMPONENTS)
Ini adalah kumpulan *library open-source* 100% gratis dengan filosofi "Copy-Paste". Dilarang koding dari nol jika komponen ini bisa memecahkan masalah.

| No | Nama Library | Deskripsi / Fungsi Utama | Link Referensi |
|---|---|---|---|
| 1 | **Aceternity UI** | *Hero Section*, paralaks, dan efek 3D "Wow Factor" yang mencolok. | [ui.aceternity.com](https://ui.aceternity.com) |
| 2 | **Magic UI** | Komponen elemen *marketing*, *Marquee*, dan gaya SaaS. | [magicui.design](https://magicui.design) |
| 3 | **Motion Primitives** | Menghidupkan elemen dasar (tombol, *tabs*) dengan *physics* dan pegas (*spring*) yang *smooth*. | [motion-primitives.com](https://motion-primitives.com) |
| 4 | **Spell UI** | Komponen berbasis animasi instan (efek *hover* mewah, *background*). | [spellui.com](https://spellui.com) |
| 5 | **Lenis (SmoothScroll)** | **Wajib** untuk *smooth velocity scroll* (menghilangkan *scroll* patah-patah). Dipakai 90% web Awwwards. | [lenis.darkroom.engineering](https://lenis.darkroom.engineering/) |
| 6 | **Vanta.js** | Animasi *background* 3D interaktif (awan, burung, ombak) dengan efek WebGL/Three.js secara kilat. | [vantajs.com](https://www.vantajs.com/) |
| 7 | **Kokonut UI** | Ratusan komponen *ready-made* dengan animasi transisi yang sudah disetel matang. | [kokonutui.com](https://kokonutui.com/) |
| 8 | **Motion.dev** | *Library* tingkat tinggi untuk transisi *layout*, animasi *drag*, dan efek visual rumit. | [motion.dev](https://motion.dev/) |
| 9 | **Origin UI** | Ekstensi gaya *shadcn/ui* yang sangat lengkap (form rumit, navigasi, widget) murni *copy-paste*. | [originui.com](https://originui.com/) |
| 10| **ShaderGradient** | Membuat *background* gradasi 3D bergerak yang organik dan sangat estetik. | [github.com/ruucm/shadergradient](https://github.com/ruucm/shadergradient) |
| 11| **liquid-logo** | Efek animasi logo/elemen yang terlihat mencair (*fluid/liquid*). | [github.com/paper-design/liquid-logo](https://github.com/paper-design/liquid-logo) |
| 12| **liquid-glass-js** | Senjata utama untuk efek **Liquid Glass** (kaca berair dengan refraksi & distorsi cahaya *real-time*). | [github.com/dashersw/liquid-glass-js](https://github.com/dashersw/liquid-glass-js) |
| 13| **React Three Fiber** | *Wrapper* wajib Three.js untuk React. Untuk membuat adegan 3D interaktif yang kompleks di *browser*. | [github.com/pmndrs/react-three-fiber](https://github.com/pmndrs/react-three-fiber) |
| 14| **drei (ScrollControls)** | Utilitas resmi R3F. Wajib dipakai untuk *scroll-linked 3D camera/object animation*. | [github.com/pmndrs/drei](https://github.com/pmndrs/drei) |
| 15| **r3f-scroll-rig** | *Framework* khusus untuk menyinkronkan 3D WebGL dengan *scroll* HTML (Standar Awwwards). | [github.com/14islands/r3f-scroll-rig](https://github.com/14islands/r3f-scroll-rig) |
| 16| **shapes.gallery** | Koleksi bentuk geometris SVG gratis (langsung *copy-paste*) untuk aset grafis dan ornamen abstrak. | [shapes.gallery](https://shapes.gallery/) |
| 17| **RandomA11y** | Generator palet warna yang dijamin aman dan tembus standar aksesibilitas kontras tinggi (WCAG). | [randoma11y.com](https://randoma11y.com/) |
| 18| **DotMatrix (zzzshawn)** | Komponen spesifik untuk menciptakan efek layar *Dot Matrix* (LED jadul ala stasiun/papan skor). | [dotmatrix.zzzshawn.cloud](https://dotmatrix.zzzshawn.cloud/) |
| 19| **Haikei.app** | *Generator* web gratis untuk aset desain SVG (*blobs*, *waves*, *gradients*) secara instan. | [haikei.app](https://haikei.app/) |

---

## 3. SUNTIKAN OTAK: AI AGENT SKILLS UNTUK CLAUDE & GEMINI
Jika kamu menggunakan Claude Code / Gemini, disarankan untuk menginstal *skill* berikut (`npx skills add <nama-repo>`) agar AI memiliki pengetahuan desain kelas atas:
- **`CloudAI-X/hreejs-skills`**: Menjadikan AI spesialis Three.js, *lighting*, dan model 3D WebGL.
- **`greensock/gsap-skills`**: Dokumentasi mutlak *best-practice* GSAP dan ScrollTrigger.
- **`zanwei/design-dna`**: Mengekstrak "Design DNA" (token warna, bayangan) dari referensi.
- **`lottiefiles/motion-design-skill`**: Teori animasi (*timing*, *easing*) ala Disney.
- **`Athevon/genjutsu`**: Skill *"Finishing Pass"* untuk *polishing* standar Silicon Valley.
- **`Leonxlnx/taste-skill`**: Memberikan "selera" desain *(Good Taste)* pada AI agar tidak menghasilkan *UI Slop* (Desain kaku).
- **`vercel-labs/agent-skills/tree/main/skills/web-design-guidelines`**: Aturan resmi Web Design Vercel agar aplikasi terlihat modern dan terstruktur.
- **`voltagent/awesome-design-md`**: Koleksi `DESIGN.md` untuk menyuntikkan *Design System* populer (Apple/Linear/dll) langsung ke *project*!
- **`Framer Motion / Lenis`**: Jika ada *skill* khusus untuk ini, gunakan untuk *smooth scroll* (Lenis) dan animasi interaktif (Framer Motion).

---

## 4. ENSIKLOPEDIA GAYA DESAIN SUPER LENGKAP
AI **WAJIB** memahami 15+ spesifikasi visual di bawah ini. Secara default (jika user tidak meminta gaya khusus), gunakan **Vercel / Linear App Style** (bersih, high-contrast, minimal). Ketika CEO meminta gaya tertentu, AI harus mengimplementasikan CSS/Tailwind dengan akurat sesuai definisi berikut agar tidak terlihat seperti *template* AI murahan.

### 4.1. Liquid Glass
- **Karakteristik:** Ilusi cairan tebal, refraksi cahaya, dan distorsi lingkungan sekitar. Memiliki efek cembung seperti tetesan air (*water droplet*).
- **Teknis:** Wajib menggunakan *library* WebGL (`liquid-glass-js`). CSS biasa tidak mampu membuat efek bias cahaya *real-time* ini.

### 4.2. Neo-Brutalism (Brutalism 2.0)
- **Karakteristik:** Melawan minimalis. Berani, *stand-out*, kaku tapi ceria.
- **Teknis:** Garis tepi (*border*) tebal hitam pekat (`border-4 border-black`), *hard shadow* tanpa blur (`box-shadow: 8px 8px 0px #000`), palet warna kontras (Kuning, Merah Muda, Hijau Neon), tipografi *bold*.

### 4.3. Linear App Style (B2B SaaS Standard)
- **Karakteristik:** Super rapi, gelap elegan, kepadatan tinggi (*high-density*). Gaya standar aplikasi elit seperti Linear atau Vercel. Sangat minim gangguan visual.
- **Teknis:** Latar belakang sangat gelap (bukan hitam murni, misal `#0A0A0A`), garis tepi (border) sangat tipis nyaris tak terlihat (`border-white/5` atau `#222`), efek *glow* halus saat *hover*, tipografi sangat rapi dan agak kecil (*Inter* atau monospace).

### 4.4. Aurora UI (Mesh Gradients)
- **Karakteristik:** *Background* kosmik, membaur secara organik dan bergerak perlahan layaknya Aurora Borealis.
- **Teknis:** Hindari *linear-gradient*. Gunakan *CSS Radial Gradients* berlapis-lapis (minimal 3 titik cahaya) atau library `ShaderGradient` WebGL. Wajib dianimasikan agar menyebar perlahan.

### 4.5. Bento Grid / Bento Box
- **Karakteristik:** *Layout* terstruktur seperti kotak bekal Jepang.
- **Teknis:** Layar dipotong menggunakan `display: grid`. Konten dimasukkan ke dalam kartu berujung melengkung (*rounded-3xl*), jarak (`gap`) yang sangat konsisten, mematikan ruang kosong yang tidak perlu tapi menjaga padding internal tetap luas.

### 4.6. Claymorphism
- **Karakteristik:** Menggembung (*puffy*), lembut, 3D halus, seperti mainan Play-Doh.
- **Teknis:** Wajib menggabungkan **TIGA layer `box-shadow`**: 1 *outer drop-shadow* lembut (`8px 8px 16px rgba(0,0,0,0.12)`), 1 bayangan `inset` terang di kiri-atas (`inset 4px 4px 8px rgba(255,255,255,0.8)`), dan 1 bayangan `inset` gelap di kanan-bawah (`inset -4px -4px 8px rgba(0,0,0,0.15)`). Border radius besar (`24px`–`32px`). Pada komponen CSS Grid (seperti keypad/kalkulator) yang memiliki `grid-column: span 2`, **HARAM** menggunakan `aspect-ratio: 1` pada tombol (gunakan `height` eksplisit seperti `height: 64px` dan `grid-template-columns: repeat(4, minmax(0, 1fr))` agar grid tidak meledak di Chromium).

### 4.7. Neumorphism (Soft UI)
- **Karakteristik:** Elemen UI seolah-olah "tercetak" atau "ditekan" dari latar belakang yang sama (satu warna dominan). Terlihat elegan tapi punya risiko *accessibility* tinggi karena kontras rendah.
- **Teknis:** Latar belakang harus sewarna dengan elemen. Gunakan `box-shadow` terang (putih) di sudut berlawanan dengan cahaya, dan bayangan gelap di sudut arah bayangan, tanpa batas (border) yang jelas.

### 4.8. Frutiger Aero (The 2000s Glossy Nostalgia)
- **Karakteristik:** Optimisme masa depan ala tahun 2004-2013 (seperti Windows 7/Aero). Didominasi gelembung air, langit cerah, pantulan kaca yang mengilap, dan warna biru-hijau yang segar.
- **Teknis:** Gradasi linier dari biru ke putih/hijau, bayangan reflektif di bagian bawah tombol, efek kilauan kaca (*glossy highlight*), *drop shadow* tebal.

### 4.9. Y2K Aesthetic (Cyber-Futurism)
- **Karakteristik:** Nostalgia era milenium (1998-2003). Bernuansa *liquid metal* (logam cair), warna perak, merah muda sintetis, hijau matriks, *glitch*, dan nuansa *techno*.
- **Teknis:** Penggunaan *font* sci-fi atau pixel, tekstur gradasi metalik abu-abu/putih/hitam kencang, elemen antarmuka asimetris atau bernuansa mekanik.

### 4.10. Holographic / Iridescent UI
- **Karakteristik:** Efek warna-warni pelangi yang halus seperti CD (Compact Disc) atau gelembung sabun. Memberikan kesan magis dan futuristik premium.
- **Teknis:** Menggunakan *background-clip: text* dengan CSS *mesh-gradient* pelangi yang bergerak mulus. Efek ini sering dipadukan pada panel Glassmorphism untuk menciptakan distorsi warna.

### 4.11. Minimalism / Swiss Design
- **Karakteristik:** Objektif, rasional, dan fungsional. Sangat murni tanpa hiasan dekoratif.
- **Teknis:** Disiplin *Grid* yang kaku (12-column), tipografi besar (*Helvetica/Inter*), hierarki ukuran *font* ekstrem (sangat besar dan sangat kecil), dan pemanfaatan *Negative Space* (ruang kosong putih) dalam jumlah raksasa. Warna biasanya monokromatik dengan satu *accent color*.

### 4.12. Maximalism
- **Karakteristik:** Antitesis dari minimalis. Penuh sesak, berani, tumpang-tindih (*overlapping*), dan meriah.
- **Teknis:** Menggunakan *z-index* untuk menumpuk elemen tak beraturan, kombinasi font tebal/eksentrik yang bertabrakan, palet warna neon berlimpah, *marquee* berkecepatan tinggi, tanpa ruang kosong (*zero whitespace*).

### 4.13. Cyberpunk / Sci-Fi HUD
- **Karakteristik:** Gelap, neon, terinspirasi *Head-Up Display* (HUD) militer atau video game fiksi ilmiah.
- **Teknis:** *Background* hitam (`#000`), *font* monospace, warna *accent* Neon Pink/Cyan/Yellow, garis tepi bersudut patah (menggunakan `clip-path`), efek *scanline* atau *glitch animation*, *box-shadow glow*.

### 4.14. Glassmorphism
- **Karakteristik:** Gaya klasik panel kaca buram ala macOS/iOS.
- **Teknis:** `backdrop-filter: blur(10px)` hingga `blur(24px)`, *background* semi-transparan `rgba(255,255,255,0.05)`, batas *border* putih transparan sangat tipis (`1px solid rgba(255,255,255,0.1)`) untuk simulasi pantulan ujung kaca.

### 4.15. Skeuomorphism
- **Karakteristik:** Meniru benda nyata secara realistis (tekstur kulit, tombol mekanik, tuas).
- **Teknis:** Membutuhkan tekstur *image/SVG noise*, bayangan *drop-shadow* jatuh (seakan ada lampu dari sudut pandang 90 derajat), *inner-shadow* ekstrem untuk kedalaman 3D tombol.

### 4.16. High-Fashion Editorial
- **Karakteristik:** Sangat elegan, lambat, dan mewah seperti halaman cetak majalah elit (Vogue/GQ). Sangat cocok untuk *brand* mahal atau portofolio fotografi.
- **Teknis:** Warna latar *beige* hangat, putih gading, atau hitam pekat. Wajib menggunakan tipografi *Serif* klasik berukuran sangat besar sebagai dekorasi. Nyaris tidak ada batas kotak (border), gambar menjadi fokus mutlak.

### 4.17. True Brutalism (Web 1.0)
- **Karakteristik:** Mentah, jujur, dan "jelek secara sengaja". Sangat digemari oleh aplikasi khusus *developer hardcore* atau *hacker*.
- **Teknis:** Latar belakang abu-abu terang murni, teks *Times New Roman*, tautan berwarna biru laut `text-blue-700` dengan garis bawah mutlak `underline`, struktur kaku seperti menggunakan tabel HTML 1995.

---

## 5. PANDUAN ANTI-AI SLOP (MENCEGAH DESAIN TERLIHAT MURAHAN)
Banyak *website* hasil *generate* AI (v0, ChatGPT) terlihat sangat kaku, pasaran, tanpa jiwa (AI Slop). **AI WAJIB menerapkan 4 Aturan "Anti-AI Slop" ini:**

> [!CAUTION]
> **CIRI-CIRI AI SLOP YANG HARAM DILAKUKAN:**
> - Margin/Padding yang berantakan (tidak menggunakan kelipatan 4px atau 8px secara disiplin).
> - Animasi *default* yang kaku (hanya mengubah *opacity* dari 0 ke 100% tanpa *easing*).
> - Kombinasi warna biru *default* Tailwind (`bg-blue-500`) yang membosankan.
> - Kepadatan informasi yang buruk (semua teks seukuran, tidak ada hierarki).

1. **Disiplin Spacing Keras:** Jarak antar elemen (*margin/padding*) TIDAK BOLEH dikira-kira. Wajib gunakan kelipatan 4 atau 8. Jika satu kotak punya *padding* `p-6` (24px), kotak sejenis harus konsisten. Jarak antar *section* raksasa (*whitespace*) harus berani lebar (minimal `py-24` atau `py-32`).
2. **Koreografi Animasi (Motion Design):** Jangan biarkan elemen muncul begitu saja atau memudar kaku. Gunakan kurva *easing* kustom (misal: `cubic-bezier(0.16, 1, 0.3, 1)`) atau *spring physics*. Elemen berjejer (kartu, *list*) wajib dianimasikan berurutan (*Staggered Animation*).
3. **Ketidaksempurnaan Manusia (Wabi-Sabi):** Desain AI sering terlalu simetris. Tambahkan elemen asimetris, rotasi tipis pada *badge* (misal: `rotate(-2deg)`), letak elemen melayang (*floating*) yang *overlap*, atau tekstur *noise* (berbintik halus) pada *background* polos agar UI terasa "disentuh manusia".
4. **Tipografi Ekstrem:** AI selalu bermain aman dengan ukuran teks menengah. Kita harus **berani kontras**. Judul utama (*Hero Title*) harus berani RAKSASA dan di-*kerning* (jarak antar huruf) ketat (contoh: `tracking-tighter`), sedangkan *subtitle* dibuat kecil namun dengan jarak huruf renggang (`tracking-widest`).

---

## 6. JURUS RAHASIA: 3D SCROLL ANIMATION
Jika User meminta efek *scroll* 3D, AI WAJIB menentukan apakah User ingin menggunakan video statis (Flipbook) atau objek 3D asli (`.glb`).

### 6.1. Opsi A: Image Sequence Flipbook (Statik - Apple Style)
Gunakan trik ini jika asetnya berupa hasil *render* AI Video. Gemini IDE WAJIB melakukan 2 tahap ini:

**Tahap 1 (Panduan Detail untuk User):** Gemini IDE wajib memberikan instruksi DETAIL SEBELUM koding dimulai:
> "Bos, sebelum kita eksekusi kodenya, siapkan asetnya: 
> 1. Buka AI Video Gratis: **Hailuo AI / MiniMax**, **PixVerse AI**, atau **Haiper AI**.
> 2. Masukkan *prompt* 3D Cinematic (Contoh: *'A sleek, cinematic 3D macro shot of [OBJEK], floating in a dark void. Elegant volumetric lighting, smooth 360-degree seamless rotation, high-end Apple product commercial style, 4k.'*)
> 3. **SETTINGAN:** Aspect Ratio **16:9**, Centang **'Loop'**, Matikan **'Enhance Prompt'**.
> 4. Download video (.mp4).
> 5. Buka **ezgif.com/video-to-jpg**. Ubah 'Size' ke 'Original', 'FPS' ke **30**, Convert -> Download frames ZIP.
> 6. Ekstrak ke folder `public/sequence/`. Kabari kalau sudah!"

**Tahap 2 (Spesifikasi Implementasi untuk `Designer` / `Builder` Agent):** 
> *"Using this folder of image frames, build a scroll-linked image sequence on an HTML canvas. Preload all the frames first, then map the scroll position to the frame index so the animation plays frame by frame as the user scrolls, the same technique Apple uses on the AirPods page. Use GSAP and ScrollTrigger. Pin the canvas while the sequence plays, scrub it smoothly to the user's scroll so there's no stutter, keep it sharp and centered on mobile."*

### 6.2. Opsi B: True Interactive 3D Scroll (WebGL/React Three Fiber)
Gunakan opsi ini JIKA User sudah memiliki file objek 3D (seperti `.glb` atau `.gltf`) berukuran ringan (di bawah 3MB) dan ingin objek tersebut bisa diputar/diinteraksikan murni dengan kode.
**SOP Kodingan untuk AI:**
1. Wajib install `@react-three/fiber`, `@react-three/drei`, dan `three`.
2. Gunakan komponen `<ScrollControls>` dari `drei`.
3. Ikat (`bind`) posisi guliran pengguna (*scroll offset* dari 0 ke 1) dengan rotasi Y/Z dari *mesh* 3D tersebut menggunakan `useScroll()` dan `useFrame()`.
4. Jika ingin sinkronisasi DOM yang ekstrem dengan teks HTML, gunakan pustaka ekstra `14islands/r3f-scroll-rig`.
5. Wajib digabungkan dengan **Lenis** agar guliran (*mouse wheel*) tidak patah-patah.

---

## 7. MUSEUM REFERENSI DEWA (VISUAL BENCHMARK)
Jika ragu dengan standar kualitas "Premium", silakan pelajari mahakarya dari *Creative Developer* Awwwards Winners ini:
1. [Pacome Pertant](https://pacomepertant.com/): Master WebGL & Shader.
2. [Kenichi Aikawa](https://aikawakenichi.com/): Master transisi mulus dan 3D interaktif.
3. [Podium Studios](https://www.podium-studios.com/services): Standar agensi digital elit untuk efek *scroll* sinematik.
4. [Hiroto Sato](https://hirotosato0127.github.io/): Master manipulasi *canvas* dan tipografi.
5. [Viacheslav (vshslv)](https://vshslv.com/): Standar mutlak untuk tipografi berkelas, *spacing* sempurna, dan *physics-based animation*.

### 7.1. Single-File Code Magic (Meng To / Design+Code)
Jika membutuhkan inspirasi UI modern yang rumit namun bisa dipahami dengan cepat, cek repo mahakarya *single-file* (satu file saja) dari Meng To berikut ini. **Perintah untuk AI:** Berikan *link URL* kode mentah (*raw*) Github-nya kepada Claude Code sebagai bahan sontekan/referensi cara kerjanya:
- **[Kage](https://github.com/MengTo/kage):** Eksperimen UI animasi tingkat dewa.
- **[Towers](https://github.com/MengTo/towers):** Susunan 3D/tumpukan kartu interaktif.
- **[Complete Shelf](https://github.com/MengTo/complete-shelf):** Efek guliran (*scroll/hover*) rak buku interaktif.
*(Video pembedahan trik kodenya bisa dipelajari di [YouTube](https://youtu.be/G-F5Qvy-7KM))*

---

## 8. MODERN WEB ESSENTIALS (PRO MAX CHECKLIST)
Sebelum sebuah website dilepas ke publik (Production), AI WAJIB memastikan 7 elemen krusial ini sudah terpasang rapi. Web tanpa elemen ini belum layak disebut "Pro Max":

1. **Halaman 404 (Not Found) & 500 (Error):**
   - Jangan pernah biarkan *user* melihat halaman *error default* dari *browser* atau Next.js/Vite.
   - Buat halaman 404 khusus yang interaktif (misal: ada mini-game, animasi lucu, atau tombol besar "Kembali ke Beranda" dengan efek *hover* mewah).

2. **Mobile-First & PWA Safe Area:**
   - Navigasi atas (Header) sering sulit dijangkau jari di HP. Pertimbangkan **Bottom Navigation Bar** berkonsep *floating glass* untuk versi *mobile*.
   - Wajib perhatikan *safe-area-inset* (CSS) agar UI tidak tertutup "poni" (Notch) iPhone atau tombol navigasi bawah Android.
   - Jangan pernah biarkan teks kekecilan atau tombol terlalu dempet. Ukuran area klik (Touch Target) minimal `48x48px` standar Apple.

3. **Meta Tags & Social Cards (Open Graph):**
   - Web yang dibagikan (*share*) ke WhatsApp/Twitter **WAJIB** memunculkan gambar *thumbnail* (Preview), Judul, dan Deskripsi.
   - AI harus menyetel tag `<meta property="og:image">`, `twitter:card`, dan favicon/SVG berkualitas tinggi.

4. **Feedback UI (Toast & Empty States):**
   - **Toast Notifications:** Jika *user* berhasil menyimpan data, munculkan notifikasi kecil yang melayang cantik (*toast*) di pojok bawah, alih-alih `alert()` bawaan browser yang jelek.
   - **Empty States:** Jika sebuah halaman kosong (belum ada data/keranjang kosong), jangan biarkan layarnya putih kosong. Berikan ilustrasi SVG raksasa yang estetik dan satu tombol Call-to-Action (CTA).

5. **Theme Toggle (Dark/Light Mode):**
   - Jangan paksa mata *user* terbakar di malam hari. Wajib pasang *Dark Mode* sebagai opsi standar dengan transisi warna yang lembut (CSS `transition-colors duration-300`).

6. **Image Optimization & Lazy Loading:**
   - Haram menggunakan gambar format `.png` atau `.jpg` raksasa tanpa dioptimasi. Gunakan format WebP/AVIF.
   - Tambahkan atribut `loading="lazy"` atau gunakan komponen `<Image>` Next.js agar *website* tidak berat saat baru dibuka.

7. **Error Boundaries & Graceful Degradation:**
   - Jika satu komponen/fitur *error* (gagal memuat data API), pastikan hanya komponen itu saja yang hancur, BUKAN mematikan (memutihkan) seluruh layar aplikasi.

8. **Konsistensi Ikonografi UI:**
   - **Haram menggunakan PNG/JPG untuk ikon tombol/menu.** Wajib menggunakan format **SVG** murni agar tidak pecah saat di-*zoom* dan warnanya bisa diubah via CSS (`currentColor`).
   - Gunakan *library* modern kelas atas seperti **Lucide React**, **Phosphor Icons**, atau **Radix Icons** (bawaan shadcn/ui).
   - Jaga konsistensi ketebalan garis ikon (*stroke-width* umumnya 1.5px atau 2px) di seluruh aplikasi.

9. **Web Icon & Favicon Architecture:**
   - Ikon utama website (di tab browser) tidak boleh sembarangan. Wajib menyiapkan 3 lapisan ikon ini untuk standar "Pro Max":
   - **Layer 1 (Modern):** Gunakan `favicon.svg`. Keunggulan SVG adalah kamu bisa memasukkan *Dark Mode* CSS ke dalam file SVG-nya. Jadi ikon tab *browser* bisa otomatis berubah warna (hitam/putih) mengikuti tema OS *user*.
   - **Layer 2 (Apple/iOS):** Wajib sediakan `apple-touch-icon.png` (resolusi 180x180px). Ini memastikan ikon webmu tidak terlihat buram atau terpotong saat *user* iPhone menyimpan web-mu ke *Home Screen*.
   - **Layer 3 (Android/PWA):** Siapkan `manifest.json` beserta ikon berukuran 192x192px dan 512x512px agar web bisa di-*install* selayaknya aplikasi Android (PWA).
   - **Layer 4 (Legacy):** Sediakan `favicon.ico` (32x32px) murni sebagai *fallback* untuk *browser* purba.





## ARSENAL UI PRO MAX (WAJIB UNTUK ANIMASI)
Jika CEO meminta UI yang canggih, interaktif, atau beranimasi (Awwwards level), Prompter WAJIB meracik kombinasi ini:
1. **Lenis:** Untuk Smooth Scrolling.
2. **GSAP (ScrollTrigger):** Untuk animasi elemen berbasis scroll.
3. **Vanta.js:** Untuk efek background 3D instan (jika diminta).
4. **React-bits (`@react-bits`):** Untuk komponen UI siap pakai yang sudah dianimasi.

### PROTOKOL AUTO-FETCH KOMPONEN UI (TANPA COPY-PASTE MANUAL USER)
CEO **TIDAK PERLU** membuka website ReactBits, Magic UI, Aceternity, atau Kokonut UI secara manual untuk copy-paste prompt. AI (Antigravity / OpenCode) **WAJIB** mengambil dan memasang komponen secara mandiri menggunakan 2 jalur berikut:
1. **Jalur 1 — Shadcn MCP & Remote Registry (`components.json`):**
   Pastikan `components.json` di proyek memiliki blok `registries` berikut:
   ```json
   "registries": {
     "@react-bits": "https://reactbits.dev/r/{name}.json",
     "@magicui": "https://magicui.design/r/{name}.json",
     "@aceternity": "https://ui.aceternity.com/registry/{name}.json",
     "@kokonutui": "https://kokonutui.com/r/{name}.json"
   }
   ```
   Gunakan MCP `shadcn` untuk mencari katalog komponen yang cocok dengan kebutuhan desain, lalu jalankan perintah instalasi langsung (contoh: `npx shadcn@latest add @react-bits/SplitText-TS-TW` atau `@magicui/marquee`).
2. **Jalur 2 — Playwright / Agent-Reach (Untuk Katalog Non-Registry seperti `21st.dev`, `Skiper UI`, `Uiverse`):**
   Jika komponen belum tersedia di CLI registry, AI wajib membuka halaman katalog terkait menggunakan `agent-reach` atau `playwright`, memilih komponen yang paling sesuai dengan tema proyek, menyalin kodenya, dan mengintegrasikannya langsung.


## IMMERSIVE & SPATIAL WEB UX (THE OPUS STANDARD)
Jika CEO meminta website yang 'immersive', 'mewah', 'interaktif tingkat tinggi', atau 'sekelas Awwwards', Prompter WAJIB merancang arsitektur yang menggabungkan DOM dan Canvas:
1. **Layer WebGL/Canvas:** Wajib gunakan React Three Fiber (R3F) atau Three.js untuk elemen background yang reaktif (seperti partikel, fluid simulation, atau objek 3D).
2. **GLSL Shaders:** Gunakan custom shaders untuk efek distorsi kursor, efek hover pada gambar (magnetic/liquid hover).
3. **Koreografi Scroll:** Wajib gunakan GSAP ScrollTrigger dan Lenis. Elemen 3D di layer Canvas harus bereaksi terhadap posisi scroll dari DOM.
4. **Mindset:** Jangan rancang ini sebagai 'dokumen web', rancang ini sebagai 'ruang interaktif digital'.


## EKSPANSI ARSENAL MICRO-INTERACTIONS & DATA VIZ
Selain WebGL dan GSAP, Prompter WAJIB mempertimbangkan stack berikut untuk UI/UX tingkat dewa:
1. **Motion.dev (Framer Motion):** Engine utama untuk micro-interactions (spring physics, layout transitions, exit animations). Jangan pakai CSS statis untuk state perubahan DOM.
2. **Skiper UI (skiper-ui.com):** Referensi utama untuk komponen shadcn/ui yang memiliki animasi kompleks dan 'uncommon' (cocok untuk SaaS/AI landing page).
3. **Bklit UI (bklit.com):** Referensi mutlak untuk Visualisasi Data dan Chart. Jangan gunakan library chart standar, gunakan Bklit yang berbasis shadcn untuk konsistensi desain yang elegan.

---

## 9. ARSITEKTUR LAYOUT SISTEM & MATRIKS TOKEN (ANTI-SALAH PAHAM MODEL)
Model AI sering salah paham dengan mencampuradukkan palet warna antar gaya (misal: warna kuning/pink Neo-Brutalism dipakai di Claymorphism) atau menaruh *grid* rata yang membosankan. Wajib patuhi blueprint struktural berikut:

### 9.1. Matriks Token Spesifik per Gaya Desain (HARAM DICAMPUR)
| Gaya Desain | Canvas / Background | Surface / Card | Border & Radius | Shadow / Depth | Accent Palette |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Claymorphism** | Pastel lembut (`#F4F6FC` / `#EEF2FF`) | Putih/Pastel (`#FFFFFF` / `#F8FAFC`) | `rounded-3xl` (`24px–32px`), border tipis `border-white/60` | **3-Layer Wajib:** `12px 16px 28px rgba(108,92,231,0.12), inset 4px 4px 8px rgba(255,255,255,0.9), inset -4px -4px 8px rgba(108,92,231,0.12)` | Indigo/Violet lembut (`#6C5CE7`, `#818CF8`), Mint (`#34D399`), Coral (`#FB7185`). **HARAM** border hitam tebal! |
| **Neo-Brutalism** | Cream hangat (`#FFFDF5`) | Warna solid kontras / Putih | `border-4 border-black`, `rounded-xl` atau `rounded-none` | Hard shadow `shadow-[8px_8px_0px_#000]` | Kuning (`#FFDE00`), Pink (`#FF90E8`), Cyan (`#23F0C7`), Red (`#FF5E5B`) |
| **Linear / Dark SaaS** | Obsidian (`#0A0A0C`) | Translucent (`bg-white/[0.03]`) | `border border-white/10`, `rounded-2xl` | Ambient glow `0 0 40px -10px rgba(99,102,241,0.25)` | Indigo (`#6366F1`), Emerald (`#10B981`), Zinc (`#A1A1AA`) |
| **Glassmorphism** | Mesh Gradient / Dark (`#0F172A`) | Frosted (`bg-white/10 backdrop-blur-xl`) | `border border-white/20`, `rounded-2xl` | `0 8px 32px rgba(0,0,0,0.25)` | Cyan/Sky (`#38BDF8`), Violet (`#A855F7`) |

### 9.2. Blueprint 4 Pola Layout Utama (Layout Systems)
| ArchetypeAplikasi | Struktur Layout Wajib (Top-to-Bottom / Left-to-Right) | Aturan Grid & Viewport |
| :--- | :--- | :--- |
| **1. E-Commerce / Storefront** | **Sticky Glass/Clay Navbar** (Logo + Status + Cart Badge) ➔ **Asymmetric Split Hero Bento** (`grid-cols-12`: 7-col Giant Headline & CTA + 5-col Spotlight Featured Card) ➔ **Sticky Filter & Search Bar** (Category Pills + Live Search Input) ➔ **Responsive Product Grid** (`grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`) ➔ **Slide-Over Cart Drawer** (`fixed inset-y-0 right-0 z-50 w-full max-w-md`). | Container `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`. |
| **2. SaaS Dashboard / Analytics** | **Collapsible Left Sidebar** (`w-64` desktop, bottom nav di mobile) + **Top Command Header** (Breadcrumbs + Search + Theme Toggle) + **Main Bento Workspace** (Row 1: 4 KPI Metric Cards `tabular-nums` ➔ Row 2: 8-col Main Chart + 4-col Live Activity Feed ➔ Row 3: Full-width Interactive Data Table/Filter). | Tinggi layar terkunci rapi atau scroll independen (`min-h-screen flex`). |
| **3. Interactive Tool / Utility (Calc/Converter)** | **Centered Spatial Stage** (`min-h-screen flex items-center justify-center p-4`) + **Split Workbench** (Panel Kiri: Main Interactive Control/Keypad dengan `grid-template-columns: repeat(4, minmax(0, 1fr))` dan tombol tinggi eksplisit `h-16` ➔ Panel Kanan: Live History Tape / Preset Memory). | **HARAM** menggabungkan `aspect-ratio: 1` dengan `col-span-2` pada CSS Grid. |
| **4. Editorial / Landing Page** | **Floating Pill Navbar** (`fixed top-6 inset-x-0 mx-auto max-w-fit`) ➔ **Full-Bleed Typographic Hero** ➔ **3-Card Bento Feature Showcase** (1 kartu lebar `md:col-span-2` + 1 kartu tinggi `md:row-span-2`) ➔ **Interactive Pricing/Comparison Matrix** ➔ **Minimalist Footer**. | Jarak antar seksi lega (`py-20 md:py-28`). |

### 9.3. Kurasi Foto Unsplash Berdasarkan Domain (HARAM SALAH KATEGORI)
Dilarang memakai foto sepatu untuk produk elektronik! Wajib pilih URL sesuai domain aplikasi:
- **Tech / Peripherals / Audio:**
  - Keyboard: `https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80`
  - Headphones: `https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80`
  - Desk Setup / Mat: `https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=800&q=80`
  - Lamp / Ambient: `https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80`
  - Mouse / Gear: `https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=800&q=80`
  - Monitor / Stand: `https://images.unsplash.com/photo-1593062096033-9a26b09da705?auto=format&fit=crop&w=800&q=80`
- **Sneakers / Streetwear / Fashion:**
  - `https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=800&q=80`, `https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80`, `https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?auto=format&fit=crop&w=800&q=80`
- **Coffee / Culinary / FnB:**
  - `https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80`, `https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80`



## 10. STRICT PERFORMANCE & ZERO-LAG INTERACTION DISCIPLINE
1. **Zero-Lag Button Press Physics**: HARAM menggunakan React useState (seperti setPressed, isActive) untuk menangani animasi tombol saat ditekan. WAJIB menggunakan CSS murni :active / Tailwind ctive:scale-95 active:translate-y-0.5 cursor-pointer untuk mendapatkan respon 0ms instan tanpa re-render komponen.
2. **120 FPS GPU Composited Animations**: Semua elemen latar belakang yang bergerak (blobs, floating shapes, particles) WAJIB memiliki properti CSS will-change: transform; transform: translate3d(0, 0, 0); agar dikomposisikan oleh GPU dan tidak memicu reflow/repaint CPU.
3. **Optimized Shadow Blurs**: Jangan gunakan filter blur SVG atau blur berantai berlebihan di atas 40px pada elemen yang terus bergerak.
