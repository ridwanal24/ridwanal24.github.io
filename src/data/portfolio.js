// ═══════════════════════════════════════════════════════
//  DATA PORTFOLIO — edit file ini untuk update konten
// ═══════════════════════════════════════════════════════

export const config = {
  name: "Ridwan Al Akhyar Aunurrohim",
  handle: "welcome to my website",
  email: "ridwanalakhyar1999@gmail.com",
  tagline: "Fullstack Developer | Laravel | React & Vue",
};

export const socials = [
  {
    label: "GitHub",
    handle: "github.com/ridwanal24",
    url: "https://github.com/ridwanal24",
  },
  {
    label: "LinkedIn",
    handle: "linkedin.com/in/ridwan-al-akhyar",
    url: "https://linkedin.com/in/ridwan-al-akhyar",
  },
  {
    label: "Twitter",
    handle: "@ridwanal1999",
    url: "https://twitter.com/ridwanal1999",
  },
];

export const hero = {
  tags: [
    "PHP",
    "Laravel",
    "Javascript",
    "React",
    "Vue.js",
    "Node.js",
    "MySQL",
    "Tailwind CSS",
    "Docker",
    "REST API",
  ],
};

export const about = {
  bio: [
    "Saya web developer yang sudah beberapa tahun ngulik web, tapi sebagian besar pengalaman saya datang dari ngerjain project-project dari teman atau kenalan. Dari situ saya belajar banyak hal, mulai dari menyusun database sampai mengubah desain jadi kode yang fungsional. Buat saya, kode yang baik itu yang tetap bisa dibaca dan dipahami, bahkan oleh diri sendiri beberapa bulan ke depan.",
    "Di luar itu, saya juga suka ngulik hal-hal baru kalau memang ada yang bikin penasaran. Entah itu framework, bahasa baru, atau tools tertentu—kalau menarik, biasanya langsung saya coba dan eksplor lebih jauh.",
  ],
  skills: [
    {
      label: "Frontend",
      items: ["Vue 3", "React", "Tailwind CSS", "TypeScript"],
    },
    {
      label: "Backend",
      items: ["Laravel", "Node.js", "Express", "MySQL"],
    },
    {
      label: "DevOps",
      items: ["Docker", "Nginx", "Linux", "GitHub Actions", "VPS"],
    },
  ],
};

// ─── PROJECTS ──────────────────────────────────────────
// Tambah/hapus project di array ini.
// Setiap project akan otomatis dapat halaman detail di /project/:slug
//
// Field:
//   slug       — URL-safe ID, harus unik  (contoh: 'my-cool-app')
//   title      — Nama project
//   year       — Tahun rilis/selesai
//   status     — 'Live' | 'In Progress' | 'Archived'
//   excerpt    — Satu kalimat untuk card di halaman utama
//   cover      — Path gambar cover (taruh di /public/images/, atau URL eksternal)
//               Kalau kosong (''), akan tampil placeholder warna
//   coverColor — Warna placeholder kalau cover kosong (hex)
//   stack      — Array teknologi yang dipakai
//   demo       — URL live demo (null kalau tidak ada)
//   github     — URL repo (null kalau tidak ada)
//
//   // Konten halaman detail — tulis bebas, bisa panjang:
//   description — Paragraf pembuka (string atau array of strings)
//   sections    — Array { heading, body } untuk konten panjang
//   images      — Array URL/path gambar tambahan di halaman detail
//   highlights  — Array string bullet-point (opsional, muncul sebagai key highlights)

export const projects = [
  {
    slug: "project-satu",
    title: "Nama Project Pertama",
    year: "2024",
    status: "Live",
    excerpt: "Deskripsi singkat satu kalimat yang bikin orang penasaran.",
    cover: "",
    coverColor: "#d4e5f7",
    stack: ["Vue 3", "Laravel", "PostgreSQL", "Docker"],
    demo: null,
    github: null,

    description: [
      "Paragraf pertama — ceritain konteks project ini. Kenapa dibuat? Masalah apa yang diselesaikan? Siapa penggunanya?",
      "Paragraf kedua — lebih dalam soal approach teknis atau desain keputusan yang menarik.",
    ],
    sections: [
      {
        heading: "Tantangan Teknis",
        body: "Ceritain satu atau dua tantangan paling berkesan. Ini bagian yang paling menarik buat developer lain yang baca. Bisa sepanjang yang kamu mau — ini halaman detail kamu.",
      },
      {
        heading: "Apa yang Gue Pelajari",
        body: "Refleksi jujur selalu bagus. Apa yang bakal kamu lakuin beda kalau mengulang project ini? Apa skill baru yang kamu kuasai?",
      },
    ],
    highlights: [
      "Fitur atau capaian pertama yang menonjol",
      'Angka konkret kalau ada — misal: "Handle 10k request/hari"',
      "Keputusan arsitektur yang paling bangga",
    ],
    images: [],
  },

  {
    slug: "project-dua",
    title: "Project Kedua Kamu",
    year: "2024",
    status: "In Progress",
    excerpt: "Satu kalimat deskripsi yang jelas dan menarik untuk project ini.",
    cover: "",
    coverColor: "#f7e6d4",
    stack: ["Next.js", "Node.js", "Redis", "Stripe"],
    demo: null,
    github: "https://github.com",

    description: ["Ceritain project ini. Bisa sepanjang yang kamu mau."],
    sections: [
      {
        heading: "Latar Belakang",
        body: "Isi konten lengkap di sini.",
      },
    ],
    highlights: ["Highlight pertama", "Highlight kedua"],
    images: [],
  },

  {
    slug: "project-tiga",
    title: "Project Ketiga",
    year: "2023",
    status: "Archived",
    excerpt:
      "Deskripsikan dengan singkat apa yang membuat project ini spesial.",
    cover: "",
    coverColor: "#e8d4f7",
    stack: ["React", "Express", "MySQL", "AWS S3"],
    demo: null,
    github: null,

    description: ["Isi deskripsi lengkap project ketiga di sini."],
    sections: [],
    highlights: [],
    images: [],
  },
];

// ─── Helper ───────────────────────────────────────────
export function getProjectBySlug(slug) {
  return projects.find((p) => p.slug === slug) ?? null;
}

export function statusStyle(status) {
  const map = {
    Live: { bg: "#d1fae5", text: "#065f46" },
    "In Progress": { bg: "#fef3c7", text: "#92400e" },
    Archived: { bg: "#f3f4f6", text: "#6b7280" },
  };
  return map[status] ?? map["Archived"];
}
