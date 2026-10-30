# 🌸 Sakura Birthday 3D — Web Experience

Aplikasi web 3D interaktif yang dibuat dengan **Three.js** dan **Vite** untuk merayakan ulang tahun orang tersayang dengan nuansa taman pohon sakura Jepang di waktu senja. Dilengkapi dengan jalur kamera sinematik, galeri polaroid 3D kenangan, mini-game *Tangkap Kelopak*, surat cinta interaktif dengan animasi pohon mekar via shader uniform, serta rahasia tersembunyi (*Easter Egg*).

---

## 🚀 Fitur Utama

- **Pohon Sakura Prosedural & Kanopi Bunga**: Batang dan dahan 3D mulus (*TubeGeometry*) dengan kanopi bunga sakura yang dapat mekar (*blossoming*) menggunakan uniform shader custom (`uBloom`).
- **2.500 Kelopak Bunga Berjatuhan**: Digerakkan dengan `THREE.InstancedMesh` dan GPU Vertex Shader untuk simulasi gravitasi, turbulensi angin, dan putaran 3D di 60 FPS hanya dalam **1 draw call**.
- **Jalur Kamera Sinematik (CatmullRomCurve3)**: Menavigasi pemandangan dari panorama depan, bawah kanopi, hingga puncak pohon lewat gulir mouse (*desktop*) atau usapan sentuh (*mobile swipe*).
- **Galeri Polaroid 3D & Lazy-Loading Foto**: Foto kenangan yang melayang lembut tertiup angin di dahan pohon. Dilengkapi sistem anti-bentrok tap vs scroll di layar sentuh HP dan *lazy-loading* gambar bertekstur sRGB.
- **Mini-Game Tangkap Kelopak**: Mini game retro-arcade dengan Web Audio API synth untuk mengumpulkan 15 kelopak dan memenangkan hadiah **Kelopak Emas** yang disimpan ke Hub.
- **Surat Cinta Akhir & Pohon Mekar**: Puncak perayaan dengan pembacaan surat penuh kehangatan yang memicu kanopi pohon sakura mekar memancarkan pendaran cahaya keemasan.
- **Secret Easter Egg**: Temukan rahasia tersembunyi dengan mengetik `LOVE` di keyboard atau mengetuk batang pohon sakura 3 kali berturut-turut!
- **Counter Hari**: Menghitung hari-hari indah yang telah dilewati bersama secara otomatis.
- **Penyimpanan Progres (localStorage)**: Semua pencapaian (kelopak emas, memori yang telah dibaca, surat cinta, dan easter egg) tersimpan otomatis di browser.

---

## 🛠️ Instalasi & Menjalankan di Lokal

### Prasyarat
- [Node.js](https://nodejs.org/) (versi 18 ke atas)
- NPM atau PNPM / Bun

### Langkah Menjalankan
```bash
# 1. Masuk ke folder project
cd birthday

# 2. Pasang dependensi
npm install

# 3. Jalankan development server
npm run dev
```
Buka browser di `http://localhost:5173/` untuk melihat tampilan aplikasi secara langsung.

### Build untuk Produksi
```bash
npm run build
```
File siap saji akan dibuat di dalam folder `dist/`.

---

## 🎨 Panduan Kustomisasi

### 1. Cara Mengganti Foto Polaroid
Semua data polaroid tersimpan di file [`public/memories.json`](public/memories.json):

1. Masukkan file foto kamu ke dalam folder `public/assets/photos/` (misal: `foto1.jpg`, `foto2.jpg`).
2. Buka file `public/memories.json` dan masukkan path foto pada properti `"image"`:
   ```json
   {
     "id": "first-date",
     "title": "Pertemuan Pertama",
     "date": "14 Februari",
     "location": "Kedai Kopi Sudut Kota",
     "tag": "First Date",
     "caption": "Hari pertama kita jalan bareng. Senyummu bikin duniaku berhenti ✨",
     "fullStory": "Masih teringat jelas rasa canggung di awal obrolan...",
     "position": [-1.75, 2.65, 2.1],
     "rotation": [0.08, 0.42, -0.06],
     "image": "/assets/photos/foto1.jpg"
   }
   ```
> **Catatan:** Jika properti `"image"` dibiarkan kosong `""`, aplikasi secara otomatis menggambar karya seni cat air pastel retro bertuliskan judul memori dan emoji bertema. Tidak akan pernah ada foto yang *broken link*!

---

### 2. Cara Mengubah Teks & Surat Cinta

#### Mengubah Judul & Cerita Polaroid
Edit langsung nilai `"title"`, `"date"`, `"caption"`, dan `"fullStory"` di dalam file [`public/memories.json`](public/memories.json).

#### Mengubah Surat Cinta Akhir (Finale Letter)
Buka file [`src/ui/LetterModal.js`](src/ui/LetterModal.js), lalu ubah isi objek `this.defaultLetter`:
```javascript
this.defaultLetter = {
  recipient: "Nama Panggilan Pacarmu",
  title: "Selamat Ulang Tahun yang Terindah ❤️",
  body: [
    "Paragraf pertama ucapanmu...",
    "Paragraf kedua doa dan harapanmu...",
    "Paragraf ketiga janjimu untuk selalu ada di sampingnya..."
  ],
  sender: "Namamu"
};
```

#### Mengubah Tanggal Awal Kenal / Jadian (Counter Hari)
Buka file [`src/utils/ProgressStore.js`](src/utils/ProgressStore.js) dan ubah tanggal pada `relationshipStartDate`:
```javascript
relationshipStartDate: '2023-01-01' // Format: YYYY-MM-DD
```
Counter di Hub atas akan otomatis menghitung jumlah hari hingga hari ini.

---

### 3. Cara Menambahkan Musik Latar (BGM)

Kamu bisa menambahkan lagu romantis favorit kalian:

1. Letakkan file audio kamu di dalam folder `public/` dengan nama `music.mp3` (misal: `public/music.mp3`).
2. Di dalam file [`index.html`](index.html), tambahkan tag audio sebelum penutup `</body>`:
   ```html
   <audio id="bgm" loop preload="auto">
     <source src="/music.mp3" type="audio/mpeg">
   </audio>
   ```
3. Di dalam file [`src/main.js`](src/main.js), mulai pemutaran audio pada interaksi pertama pengguna:
   ```javascript
   const bgm = document.getElementById('bgm');
   const startAudio = () => {
     if (bgm && bgm.paused) {
       bgm.volume = 0.6;
       bgm.play().catch(() => {});
     }
     window.removeEventListener('pointerdown', startAudio);
   };
   window.addEventListener('pointerdown', startAudio);
   ```

---

### 4. Cara Deploy ke Internet (Gratis)

Kamu bisa membagikan link website ini langsung ke pasanganmu menggunakan layanan hosting gratis berikut:

#### Opsi A: Deploy ke Vercel (Paling Direkomendasikan)
1. Buat akun di [Vercel](https://vercel.com).
2. Install Vercel CLI atau hubungkan repository GitHub kamu:
   ```bash
   npm i -g vercel
   vercel
   ```
3. Ikuti instruksi di terminal (Framework Preset: **Vite**, Output Directory: **dist**). Dalam hitungan detik website sudah online dengan link HTTPS!

#### Opsi B: Deploy ke Netlify
1. Jalankan `npm run build` di terminal untuk menghasilkan folder `dist/`.
2. Buka [Netlify Drop](https://app.netlify.com/drop).
3. Seret (*drag and drop*) folder `dist/` ke halaman Netlify. Website langsung aktif!

#### Opsi C: Deploy ke GitHub Pages
1. Pastikan file `vite.config.js` memiliki properti `base: './'`:
   ```javascript
   export default defineConfig({
     base: './',
     // ...
   });
   ```
2. Jalankan `npm run build` dan upload folder `dist/` ke branch `gh-pages` di repositori GitHub kamu.

---

## ⚡ Optimalisasi Performa & Standar Teknis

- **Penyelarasan DPR**: `renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))` menjamin ketajaman visual di layar Retina/OLED tanpa membebani GPU.
- **Auto Fallback Post-Processing**: Jika perangkat pengguna mendeteksi FPS turun di bawah 38 FPS selama 3 interval berturut-turut, composer bloom/vignette otomatis dimatikan ke direct WebGL render.
- **Freeze saat Tab Tidak Aktif**: `THREE.Timer.connect(document)` menghentikan perhitungan delta frame saat tab browser disembunyikan/di-minimize untuk menghemat baterai HP.
- **Zero Memory Leaks**: Setiap instance geometry, material, texture, render target, dan listener dibersihkan secara komprehensif pada siklus `dispose()`.

---

Dibuat dengan ❤️ untuk momen ulang tahun yang tak terlupakan.
