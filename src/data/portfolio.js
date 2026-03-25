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
    "Saya sudah berkecimpung dengan dunia web development selama beberapa tahun, tapi sebagian besar pengalaman saya datang dari mengerjakan project-project dari teman atau kenalan. Dari situ saya belajar banyak hal, mulai dari menyusun database sampai mengubah desain jadi kode yang fungsional. Bagi saya, kode yang baik itu yang tetap bisa dibaca dan dipahami, bahkan oleh diri sendiri beberapa bulan ke depan.",
    "Di luar itu, saya juga suka mencoba hal-hal baru jika membuat saya penasaran. Entah itu framework, bahasa baru, atau tools tertentu—kalau menarik, biasanya langsung saya coba dan eksplor lebih jauh.",
  ],
  skills: [
    {
      label: "Frontend",
      items: ["Vue 3", "React", "Tailwind CSS", "TypeScript"],
    },
    {
      label: "Backend",
      items: ["Laravel", "Node.js", "Express", "Go", "MySQL"],
    },
    {
      label: "DevOps",
      items: ["Docker", "Nginx", "Linux", "Git"],
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
    slug: "si-distan",
    title: "SI DISTAN (Sistem Informasi Distribusi Anggaran)",
    year: "2025",
    status: "Live",
    excerpt:
      "Aplikasi internal Polresta Yogyakarta untuk mengelola dan mendistribusikan dokumen anggaran secara efisien dan terpusat.",
    cover: "",
    coverColor: "#d4e5f7",
    stack: [
      "Laravel 11",
      "Vue 3",
      "Vite",
      "MySQL",
      "TailwindCSS",
      "Sanctum",
      "Axios",
      "Pinia",
    ],
    demo: null,
    github: null,

    description: [
      "SI DISTAN adalah aplikasi berbasis web yang dikembangkan untuk Polresta Yogyakarta guna meningkatkan efisiensi dalam pertukaran dokumen internal. Sebelumnya, proses distribusi dokumen dilakukan secara manual melalui WhatsApp, email, atau flashdisk yang berisiko tidak terorganisir dan kurang aman.",
      "Aplikasi ini menyediakan sistem terpusat untuk upload, pencarian, pengelolaan, serta keamanan dokumen berbasis role (admin dan user). Selain itu, sistem juga mendukung histori file, proteksi password dokumen, dan mekanisme penghapusan bertahap untuk menjaga integritas data.",
    ],
    sections: [
      {
        heading: "Fitur Utama",
        body:
          "Sistem memiliki dua role utama yaitu admin dan user. Admin memiliki kontrol penuh seperti mengelola user (reset password, nonaktifkan akun), upload dokumen ke berbagai kategori (kertas kerja, realisasi, perjanjian kinerja), serta menghapus dan memulihkan dokumen dari tempat sampah. User hanya dapat mengelola dokumen miliknya sendiri dengan kategori terbatas (renbut).\n\n" +
          "Dokumen dapat berupa PDF atau XLSX dengan batas ukuran 10MB. Setiap dokumen mendukung multi-file (history), sehingga versi lama tetap tersimpan saat ada update. Sistem pencarian mendukung filter berdasarkan nama, kategori, dan tahun.\n\n" +
          "Keamanan ditingkatkan dengan fitur password pada setiap dokumen, yang harus dimasukkan oleh user lain atau publik saat ingin mengakses isi dokumen. Publik tetap dapat melihat daftar dokumen dan statistik, namun tidak dapat membuka file tanpa password.",
      },
      {
        heading: "Tantangan Teknis",
        body:
          "Salah satu tantangan utama adalah implementasi preview file PDF yang sempat mengalami konflik dengan layout, terutama karena adanya tambahan fitur tombol download di dalam preview tersebut. Selain itu, pengaturan scheduler di Laravel untuk menghapus dokumen secara permanen setelah 6 bulan juga menjadi tantangan tersendiri.\n\n" +
          "Solusi yang diterapkan adalah menggunakan Laravel Scheduler yang berjalan setiap hari pada tengah malam untuk melakukan scanning terhadap dokumen di tempat sampah, lalu menghapus secara otomatis jika melewati batas waktu.",
      },
      {
        heading: "Apa yang Saya Pelajari",
        body:
          "Project ini memberikan pengalaman end-to-end development mulai dari backend, frontend, database design, hingga deployment ke server sendiri. Saya juga jadi lebih paham implementasi role-based access control, manajemen file dengan versioning, serta pengamanan dokumen berbasis password.\n\n" +
          "Selain itu, saya belajar bagaimana merancang sistem yang benar-benar dipakai oleh instansi, jadi harus stabil, jelas alurnya, dan minim error. Penggunaan Laravel Scheduler dan integrasi Vue dengan API juga jadi poin pembelajaran penting.",
      },
    ],
    highlights: [
      "Menggantikan proses distribusi dokumen manual (WA, email, flashdisk)",
      "Role-based access (admin & user) dengan kontrol yang jelas",
      "Dokumen mendukung versioning (history file)",
      "Proteksi dokumen dengan password per dokumen",
      "Auto cleanup dokumen terhapus dengan Laravel Scheduler (6 bulan)",
      "Dikerjakan fullstack + deployment ke server sendiri",
    ],
    images: [],
  },

  {
    slug: "ire-database-bumdesa",
    title: "IRE Database BUM Desa",
    year: "2024",
    status: "Archived",
    excerpt:
      "Platform untuk mengelola data dan dokumen BUM Desa agar lebih terstruktur dan mudah diakses.",
    cover: "",
    coverColor: "#e8f0fe",
    stack: ["Laravel", "React JS", "MySQL", "TailwindCSS"],
    demo: null,
    github: null,

    description: [
      "IRE Database BUM Desa adalah aplikasi berbasis web yang saya kembangkan untuk membantu pengelolaan data dan dokumen BUM Desa secara lebih terpusat dan rapi. Sebelumnya, data dan dokumen belum terorganisir dengan baik, sehingga cukup sulit untuk dicari dan dipantau.",
      "Melalui aplikasi ini, admin bisa memantau seluruh BUM Desa dari berbagai wilayah, sementara setiap BUM Desa bisa mengelola data dan dokumen mereka sendiri dengan sistem akses yang sudah dibagi berdasarkan role.",
    ],

    sections: [
      {
        heading: "Fitur Utama",
        body:
          "Sistem ini memiliki tiga role utama: admin, BUM Desa, dan view-only. Admin bisa mengelola seluruh akun BUM Desa, mulai dari menambah, mengedit, menonaktifkan, sampai menghapus akun. Admin juga bisa melihat statistik seperti jumlah BUM Desa, jumlah dokumen, file, dan total penggunaan storage.\n\n" +
          "BUM Desa dapat mengelola profilnya sendiri, mengisi data seperti kemitraan dan unit usaha, serta mengupload dan mengelola dokumen. Dokumen juga mendukung update file tanpa menghapus file lama (jadi tetap ada histori).\n\n" +
          "Selain itu, BUM Desa bisa membuat akun tambahan dengan role view-only untuk orang lain yang hanya perlu melihat dan mengunduh dokumen.\n\n" +
          "Sistem juga dilengkapi filter wilayah bertingkat (provinsi sampai desa) yang saling terhubung, serta fitur recycle bin untuk dokumen yang dihapus.",
      },
      {
        heading: "Tantangan Teknis",
        body:
          "Tantangan yang paling terasa ada di bagian form dinamis, seperti data kemitraan dan unit usaha. Form ini bisa ditambah dan dikurangi, dan di dalamnya ada kombinasi input dan select yang cukup kompleks.\n\n" +
          "Karena saat itu belum menggunakan tools seperti React Hook Form atau TanStack Query, saya menangani semuanya secara manual, baik dari sisi frontend maupun backend. Ini membuat prosesnya cukup tricky, terutama untuk menjaga data tetap konsisten.",
      },
      {
        heading: "Apa yang Saya Pelajari",
        body:
          "Dari project ini, saya jadi lebih memahami bagaimana membangun sistem dengan banyak role dan data yang cukup kompleks.\n\n" +
          "Saya juga belajar mengelola state di React secara manual tanpa bantuan library tambahan, sekaligus merancang API backend yang bisa menangani data dinamis.\n\n" +
          "Selain itu, saya jadi lebih sadar pentingnya perencanaan struktur form dan state sejak awal agar tidak terlalu kompleks di tengah pengerjaan.",
      },
    ],

    highlights: [
      "Sistem multi-role: admin, BUM Desa, dan view-only",
      "Filter wilayah bertingkat yang saling terhubung",
      "Form dinamis untuk data kemitraan & unit usaha",
      "Manajemen dokumen dengan histori file",
      "Fitur recycle bin untuk dokumen",
      "Dikerjakan fullstack hingga deployment",
    ],

    images: [],
  },

  {
    slug: "cms-ire-yogyakarta",
    title: "CMS Website IRE Yogyakarta",
    year: "2024",
    status: "Archived",
    excerpt:
      "CMS custom untuk mengelola konten website IRE Yogyakarta, mulai dari artikel, publikasi, hingga galeri dengan struktur halaman yang fleksibel.",
    cover: "",
    coverColor: "#f5e6ff",
    stack: ["React JS", "Chakra UI", "CKEditor 5", "Laravel", "Redis"],
    demo: null,
    github: null,

    description: [
      "CMS Website IRE Yogyakarta adalah aplikasi yang dikembangkan untuk memenuhi kebutuhan klien akan sistem manajemen konten yang fleksibel dan sesuai dengan alur kerja mereka.",
      "Melalui CMS ini, admin dapat dengan mudah mengelola berbagai jenis konten seperti artikel, publikasi (PDF), galeri foto, video, serta struktur halaman website secara dinamis tanpa perlu bergantung pada developer.",
    ],

    sections: [
      {
        heading: "Fitur Utama",
        body:
          "CMS ini memiliki dua bagian utama: pengguna umum dan admin. Pengguna umum dapat melihat artikel, informasi organisasi, program, serta publikasi dalam bentuk PDF yang bisa langsung dibaca di website.\n\n" +
          "Di sisi admin, tersedia dashboard dengan statistik seperti jumlah post, jumlah publikasi, dan jumlah unduhan file. Admin dapat mengelola banner homepage, artikel (termasuk fitur pin, visibilitas, dan penulis), serta berbagai jenis konten lain.\n\n" +
          "Salah satu fitur utama adalah sistem halaman dinamis, di mana admin bisa membuat halaman baru dan menentukan jenisnya (post, publikasi, galeri foto, atau video). Setiap halaman juga bisa diatur posisinya di navbar hingga 3 level.\n\n" +
          "Untuk publikasi, admin bisa mengunggah file PDF yang kemudian bisa dibaca langsung oleh pengguna melalui PDF viewer. Sistem juga mencatat data pengguna yang mengunduh file.\n\n" +
          "Selain itu, tersedia fitur galeri foto, video (berbasis embed YouTube), komentar pengguna, serta berbagai modul tambahan seperti program dan training center.",
      },
      {
        heading: "Tantangan Teknis",
        body:
          "Tantangan terbesar ada di integrasi CKEditor 5 dengan React, terutama karena harus menggunakan custom build. Saya perlu memilih fitur editor secara manual, build sendiri, lalu mengintegrasikannya ke dalam project.\n\n" +
          "Selain itu, proses upload gambar di dalam editor juga cukup membingungkan di awal, terutama dalam menentukan format request (JSON atau multipart). Ada juga kendala styling yang tidak konsisten antara editor dan landing page, sehingga perlu penyesuaian manual berdasarkan dokumentasi resmi CKEditor.\n\n" +
          "Di sisi lain, karena menggunakan Create React App, waktu build juga terasa cukup lama sehingga sedikit memperlambat proses development.",
      },
      {
        heading: "Apa yang Saya Pelajari",
        body:
          "Dari project ini, saya belajar banyak tentang membangun CMS yang fleksibel dan scalable, terutama dalam mengelola berbagai jenis konten dalam satu sistem.\n\n" +
          "Saya juga jadi lebih paham cara integrasi rich text editor seperti CKEditor 5 secara custom, termasuk mengatur fitur dan menangani upload file di dalam editor.\n\n" +
          "Selain itu, saya belajar pentingnya menjaga konsistensi UI dan styling antara editor dan tampilan frontend agar hasil konten tetap sesuai dengan yang diharapkan.",
      },
    ],

    highlights: [
      "CMS custom sesuai kebutuhan klien (bukan template)",
      "Sistem halaman dinamis dengan hingga 3 level navbar",
      "Manajemen konten lengkap: artikel, PDF, galeri, video",
      "Integrasi CKEditor 5 custom build",
      "Tracking download publikasi (dengan input user)",
      "Belasan halaman aktif dengan banyak konten",
    ],

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
