# Premium Micro-Interactions & Aesthetic Craft Guide

> **Context**: Standard resep interaksi web premium, prinsip tipografi presisi, dan checklist kualitas anti-AI-slop untuk desainer & frontend engineer di pipeline `genjutsu`.

---

## 1. 6 Resep Interaksi Website Premium Siap Pakai

### Resep 1: Magnetic Button (Cursor Attraction Physics)
Tombol tertarik halus ke arah cursor saat cursor mendekat ke dalam radius aktivasi, lalu kembali ke posisi awal dengan spring dampening saat cursor keluar.

```javascript
// Vanilla JS / Web Component / Hook logic
const button = document.querySelector('.magnetic-btn');
const BOUND = 40; // Max displacement in px
const STRENGTH = 0.35; // Pull factor

button.addEventListener('mousemove', (e) => {
  const rect = button.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;
  const deltaX = (e.clientX - centerX) * STRENGTH;
  const deltaY = (e.clientY - centerY) * STRENGTH;

  const clampX = Math.max(-BOUND, Math.min(BOUND, deltaX));
  const clampY = Math.max(-BOUND, Math.min(BOUND, deltaY));

  button.style.transform = `translate3d(${clampX}px, ${clampY}px, 0)`;
});

button.addEventListener('mouseleave', () => {
  button.style.transition = 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)';
  button.style.transform = 'translate3d(0, 0, 0)';
  setTimeout(() => { button.style.transition = ''; }, 500);
});
```

### Resep 2: Staggered Roll Text / List
Karakter atau kata terbungkus dalam overflow container masked (`overflow: hidden`), muncul bergantian ke atas dengan easing eksponensial (`cubic-bezier(0.16, 1, 0.3, 1)`).

```html
<!-- HTML Structure -->
<span class="roll-wrapper">
  <span class="roll-inner" style="--delay: 0.05s;">A</span>
  <span class="roll-inner" style="--delay: 0.10s;">w</span>
  <span class="roll-inner" style="--delay: 0.15s;">a</span>
  <span class="roll-inner" style="--delay: 0.20s;">r</span>
  <span class="roll-inner" style="--delay: 0.25s;">d</span>
</span>
```
```css
.roll-wrapper {
  display: inline-flex;
  overflow: hidden;
  vertical-align: bottom;
}
.roll-inner {
  display: inline-block;
  transform: translate3d(0, 100%, 0);
  opacity: 0;
  animation: rollUp 0.65s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  animation-delay: var(--delay, 0s);
  will-change: transform, opacity;
}
@keyframes rollUp {
  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}
```

### Resep 3: Controlled Parallax Layers
Elemen background/aksen bergerak lambat relatif terhadap scroll atau mouse cursor dengan batas pergeseran ketat (`clamp`) agar tidak memusingkan pengguna.

```javascript
// Lightweight scroll/mouse parallax with requestAnimationFrame
let targetY = 0, currentY = 0;
const layers = document.querySelectorAll('[data-parallax-speed]');

window.addEventListener('scroll', () => {
  targetY = window.scrollY;
}, { passive: true });

function renderParallax() {
  currentY += (targetY - currentY) * 0.1; // Smooth interpolation (lerp)
  layers.forEach((el) => {
    const speed = parseFloat(el.dataset.parallaxSpeed) || 0.1;
    const offset = (currentY * speed).toFixed(2);
    el.style.transform = `translate3d(0, ${offset}px, 0)`;
  });
  requestAnimationFrame(renderParallax);
}
requestAnimationFrame(renderParallax);
```

### Resep 4: Contextual Cursor (Custom Follower)
Cursor custom yang secara cerdas mengubah wujud (membesar, teks preview "VIEW", inverted color mix-blend) saat mengarah ke elemen tertentu.

```css
/* Custom Cursor Element */
.custom-cursor {
  position: fixed;
  top: 0;
  left: 0;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  pointer-events: none;
  background: currentColor;
  mix-blend-mode: difference;
  transform: translate(-50%, -50%);
  transition: width 0.3s ease, height 0.3s ease, border-radius 0.3s ease;
  z-index: 9999;
}
/* State: Hovering Link / Card */
body:has(a:hover) .custom-cursor,
body:has([data-cursor="expand"]:hover) .custom-cursor {
  width: 64px;
  height: 64px;
  opacity: 0.85;
}
```

### Resep 5: Smooth Page Transitions via View Transitions API
Transisi antar halaman atau antar view native browser tanpa library berat luar.

```javascript
// SPA / Client-side routing trigger
function navigateTo(url) {
  if (!document.startViewTransition) {
    window.location.href = url;
    return;
  }
  document.startViewTransition(async () => {
    // 1. Fetch data / update DOM
    await updatePageContent(url);
  });
}
```
```css
/* CSS View Transition Root Rules */
@view-transition {
  navigation: auto;
}
::view-transition-old(root),
::view-transition-new(root) {
  animation-duration: 0.35s;
  animation-timing-function: cubic-bezier(0.2, 0, 0, 1);
}
/* Shared element morphing */
.hero-image {
  view-transition-name: hero-banner;
}
```

### Resep 6: Subtle Easter Eggs
Interaksi kejutan tak bersuara keras yang meningkatkan kesenangan pengguna tanpa mengganggu flow fungsional.
- **Konami Code Listener**: Sequence keyboard `↑ ↑ ↓ ↓ ← → ← → B A` yang memicu tema retro, particle burst singkat, atau watermark kreatif.
- **Micro Haptic / Physics Ripple**: Double-click cepat pada logo memicu rotasi 360 derajat elastis dengan confetti/canvas burst 1 detik.
- **Curiosity Hover Tag**: Badge status yang ketika di-hover lama (>2s) menampilkan pesan humanis rahasia ("Built with caffeine & craft").

---

## 2. Aturan Better Typography

Standar tipografi kelas atas agar teks terlihat dibuat oleh desainer berpengalaman, bukan template AI:

1. **Optical Sizing (`font-optical-sizing: auto`)**:
   - Selalu aktifkan saat menggunakan variable font modern (Inter, Roboto Flex, SF Pro, Geist).
   - Memastikan ketebalan stroke dan counter-forms disesuaikan otomatis dengan ukuran teks rendered.
2. **Tabular Numerals (`font-variant-numeric: tabular-nums`)**:
   - Wajib untuk semua metrik finansial, jam/timer, nomor urut tabel, dashboard analytics, dan data komparasi.
   - Mencegah layout jitter/goyang saat angka berganti.
3. **Uppercase Tracking (Letter-Spacing)**:
   - Teks ALL-CAPS wajib memiliki tracking positif: `letter-spacing: 0.05em` s/d `0.1em`.
   - **Haram**: Memberikan wide tracking pada lowercase body text.
4. **Text Wrapping Modern**:
   - **Headings (H1-H3)**: `text-wrap: balance;` untuk mencegah judul timpang atau hanya menyisakan satu kata di baris terakhir.
   - **Body Copy**: `text-wrap: pretty;` untuk mengeliminasi typographic orphans pada paragraf panjang.
5. **Measure (Panjang Baris Optimal)**:
   - Jaga panjang baris teks artikel/bacaan antara **60–75 karakter** (`max-width: 65ch` atau `70ch`).
   - Line height proporsional: 1.05–1.15 untuk display besar, 1.5–1.65 untuk body copy.

---

## 3. Impeccable Pre-Flight Taste Checklist (`pbakaus/impeccable`)

Checklist kualitas craft floor sebelum deliver UI agar terbebas dari stereotip AI slop (Inter standar, gradient ungu-biru generic, card bertumpuk tanpa hirarki):

- [ ] **Contrast & Color Guard**:
  - Kontras body text $\ge 4.5:1$, display besar $\ge 3:1$.
  - Secondary/muted text di atas permukaan berwarna wajib **ditinting dari warna dasar/hue tersebut**, HARAM memakai abu-abu generik (`#888` / `#9ca3af`) di atas background bertinta.
- [ ] **Depth & Elevation Authenticity**:
  - Shadow wajib memiliki offset aksial terarah dan natural soft blur (`box-shadow: 0 4px 20px -2px rgba(0,0,0,0.06)`).
  - Banned: Glow halo simetris tanpa offset (zero-offset 0 0 15px) yang hanya dijadikan dekorasi murah.
- [ ] **Spacing & Spatial Rhythm**:
  - Semantic grouping ketat: jarak di **atas heading** harus selalu lebih besar daripada jarak di **bawah heading** ke kontennya.
  - Spacing step konsisten (kelipatan 4px atau 8px).
- [ ] **Display Typography Rules**:
  - Judul display ekstra besar (>48px) wajib menerapkan negative tracking floor (misal `-0.02em` s/d `-0.04em`) dan line-height ketat (1.05–1.1).
- [ ] **Motion Restraint (One Authored Moment)**:
  - Maksimal **satu** momen authored animation yang menonjol per view.
  - Jangan menganimasikan semua elemen masuk sekaligus dengan fade-up seragam. Prioritaskan exponential ease-out dari kondisi default yang sudah terbaca.
- [ ] **Browser Surface Styling**:
  - Teks selection styled: `::selection { background: ...; color: ...; }`.
  - Link underline offset disesuaikan: `text-underline-offset: 4px; text-decoration-thickness: 1.5px;`.
  - Focus ring kustom: `focus-visible` jelas tanpa merusak estetika mouse user.
  - Scrollbar diselaraskan dengan palet tema.
- [ ] **Comprehensive Component States**:
  - Lengkapi semua status komponen: `hover`, `active`, `focus-visible`, `disabled`, `loading skeleton`, `empty state`, dan handling string overflow (`truncate` / `break-words`).

---

## 4. Referensi Prompt 3D / WebGL: 3DSS

Untuk hero section imersif, efek filmis, dan interaksi canvas 3D:
- **Katalog Resmi**: `https://3dss.w-nest.net` (**3D Site Studio / 3DSS**)
- **Fungsi**: Repositori prompt siap pakai untuk Three.js, React Three Fiber (R3F), WebGL shaders, camera orbit paths, dan motion landing pages.
- **Pemanfaatan Agent**:
  1. Akses pola kamera dan lighting dari 3DSS untuk prompt model Three.js.
  2. Implementasikan shader noise, chromatic aberration, partikel interaktif, atau float model 3D glTF dengan lazy-loading dan fallback CSS performan.
