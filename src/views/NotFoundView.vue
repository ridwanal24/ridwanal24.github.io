<template>
  <main class="min-h-screen flex items-center justify-center px-6">
    <div class="text-center">
      <p class="font-mono text-xs text-muted mb-4 animate-fade-in" style="animation-fill-mode:forwards">// 404</p>
      <h1
        class="font-serif text-7xl md:text-9xl text-ink mb-4 animate-fade-up"
        style="animation-fill-mode:forwards; animation-delay:0.1s; opacity:0"
      >
        Nyasar?
      </h1>
      <p
        class="font-sans text-ink/50 mb-10 animate-fade-up"
        style="animation-fill-mode:forwards; animation-delay:0.2s; opacity:0"
      >
        Halaman yang kamu cari tidak ada.
      </p>
      <RouterLink
        to="/"
        class="inline-flex items-center gap-2 font-mono text-sm px-6 py-3 rounded bg-ink text-paper hover:bg-accent transition-colors duration-300 animate-fade-up"
        style="animation-fill-mode:forwards; animation-delay:0.3s; opacity:0"
      >
        ← Balik ke beranda
      </RouterLink>
    </div>
  </main>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>
