<template>
  <header class="fixed top-0 left-0 right-0 z-50 nav-blur">
    <nav class="max-w-5xl mx-auto px-6 py-5 flex items-center justify-between">
      <!-- Logo / handle -->
      <RouterLink to="/" class="font-mono text-sm text-accent font-medium tracking-tight hover:opacity-70 transition-opacity">
        {{ config.handle }}
      </RouterLink>

      <!-- Desktop links -->
      <ul class="hidden md:flex gap-8">
        <li v-for="link in navLinks" :key="link.to + link.hash">
          <component
            :is="link.hash ? 'a' : RouterLink"
            v-bind="link.hash ? { href: link.href } : { to: link.to }"
            class="nav-link font-sans text-sm text-ink/70 hover:text-ink transition-colors"
          >
            {{ link.label }}
          </component>
        </li>
      </ul>

      <!-- Mobile hamburger -->
      <button
        class="md:hidden flex flex-col gap-1.5 p-1"
        @click="menuOpen = !menuOpen"
        aria-label="Toggle menu"
      >
        <span
          class="block h-px w-6 bg-ink transition-transform duration-300"
          :class="menuOpen ? 'rotate-45 translate-y-2' : ''"
        />
        <span
          class="block h-px w-6 bg-ink transition-opacity duration-300"
          :class="menuOpen ? 'opacity-0' : ''"
        />
        <span
          class="block h-px w-6 bg-ink transition-transform duration-300"
          :class="menuOpen ? '-rotate-45 -translate-y-2' : ''"
        />
      </button>
    </nav>

    <!-- Mobile menu -->
    <Transition name="mobile-menu">
      <div
        v-if="menuOpen"
        class="md:hidden border-t border-ink/10 bg-paper/95"
        style="backdrop-filter: blur(12px)"
      >
        <ul class="max-w-5xl mx-auto px-6 py-4 flex flex-col gap-4">
          <li v-for="link in navLinks" :key="link.label">
            <component
              :is="link.hash ? 'a' : RouterLink"
              v-bind="link.hash ? { href: link.href } : { to: link.to }"
              class="font-sans text-base text-ink/70 hover:text-ink transition-colors"
              @click="menuOpen = false"
            >
              {{ link.label }}
            </component>
          </li>
        </ul>
      </div>
    </Transition>
  </header>
</template>

<script setup>
import { ref, computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { config } from '@/data/portfolio.js'

const menuOpen = ref(false)
const route = useRoute()

const navLinks = computed(() => {
  const onHome = route.name === 'home'
  return [
    { label: 'About',    to: '/', href: onHome ? '#about'    : '/#about',    hash: true },
    { label: 'Projects', to: '/', href: onHome ? '#projects' : '/#projects', hash: true },
    { label: 'Contact',  to: '/', href: onHome ? '#contact'  : '/#contact',  hash: true },
  ]
})
</script>

<style scoped>
.nav-blur {
  background: rgba(245, 242, 236, 0.88);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}

.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
