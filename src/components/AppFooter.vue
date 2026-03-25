<template>
  <footer class="py-8 px-6 border-t border-ink/10">
    <div class="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
      <span class="font-mono text-xs text-muted">© {{ year }} {{ config.name }}</span>
      <span class="font-mono text-xs text-muted">Built with Vue 3 + Tailwind CSS</span>
    </div>
  </footer>
</template>

<script setup>
import { config } from '@/data/portfolio.js'
const year = new Date().getFullYear()
</script>
