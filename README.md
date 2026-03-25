# Portfolio — Vue 3 + Tailwind

Portfolio personal untuk fullstack developer. Dibangun dengan Vue 3, Vue Router, dan Tailwind CSS. (Pake claude gratisan, ku minta bikinin template nya, jadi tinggal edit-edit aja)

## Tech Stack

- **Vue 3** (Composition API + `<script setup>`)
- **Vue Router 4** — client-side routing dengan page transitions
- **Tailwind CSS 3** — utility-first styling
- **Vite 5** — build tool

---

## Cara Setup

### 1. Install dependencies

```bash
npm install
```

### 2. Jalankan dev server

```bash
npm run dev
```

Buka http://localhost:5173

### 3. Build untuk produksi

```bash
npm run build
```

Output ada di folder `dist/`.

---

## Struktur Project

```
src/
├── assets/
│   └── main.css          ← Global styles + Tailwind directives
├── components/
│   ├── AppNav.vue         ← Navbar (fixed, blur, mobile hamburger)
│   ├── AppFooter.vue      ← Footer
│   └── ProjectCard.vue    ← Card component di halaman utama
├── composables/
│   └── useReveal.js       ← IntersectionObserver untuk animasi scroll
├── data/
│   └── portfolio.js       ← ⭐ EDIT FILE INI untuk update konten
├── router/
│   └── index.js           ← Route definitions
└── views/
    ├── HomeView.vue        ← Halaman utama (Hero, About, Projects, Contact)
    ├── ProjectView.vue     ← Halaman detail per project
    └── NotFoundView.vue    ← 404 page
```

---

## Cara Update Konten

**Semua konten ada di satu file: `src/data/portfolio.js`**

### Update info pribadi

```js
export const config = {
  name: "Nama Kamu",
  handle: "@namahandle",
  email: "halo@email.com",
};
```

### Tambah / edit project

```js
export const projects = [
  {
    slug: "nama-project", // URL: /project/nama-project
    title: "Nama Project",
    year: "2024",
    status: "Live", // 'Live' | 'In Progress' | 'Archived'
    excerpt: "Satu kalimat singkat.",
    cover: "/images/cover.jpg", // taruh file di /public/images/
    coverColor: "#d4e5f7", // warna placeholder kalau cover kosong
    stack: ["Vue 3", "Laravel"],
    demo: "https://...", // atau null
    github: "https://...", // atau null

    // Konten halaman detail:
    description: ["Paragraf pertama.", "Paragraf kedua."],
    sections: [{ heading: "Judul Bagian", body: "Isi panjang..." }],
    highlights: ["Fitur atau capaian penting"],
    images: ["/images/ss1.jpg"], // screenshot tambahan
  },
];
```

### Tambah gambar project

Taruh file gambar di folder `public/images/`, lalu referensikan sebagai:

```js
cover: "/images/nama-file.jpg";
```

---

## Routes

| Path             | View         | Deskripsi      |
| ---------------- | ------------ | -------------- |
| `/`              | HomeView     | Halaman utama  |
| `/project/:slug` | ProjectView  | Detail project |
| `/*`             | NotFoundView | 404            |

---

## Deploy

### Vercel / Netlify

Untuk SPA routing, buat file konfigurasi rewrite:

**Netlify** — buat `public/_redirects`:

```
/*  /index.html  200
```

**Vercel** — buat `vercel.json`:

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

### VPS / Nginx

```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```
