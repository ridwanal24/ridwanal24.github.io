<template>
  <main>

    <!-- ═══ HERO ═══ -->
    <section id="home" class="min-h-screen flex flex-col justify-center pt-20 pb-16 px-6">
      <div class="max-w-5xl mx-auto w-full">

        <!-- Available tag -->
        <div class="flex items-center gap-3 mb-10 animate-fade-in"
          style="animation-delay: 0.1s; opacity: 0; animation-fill-mode: forwards;">
          <span class="font-mono text-xs text-muted tracking-widest uppercase">Available for work</span>
          <span class="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
        </div>

        <!-- Headline -->
        <h1 class="font-serif text-6xl md:text-8xl leading-none text-ink mb-2 animate-fade-up"
          style="animation-delay: 0.2s; opacity: 0; animation-fill-mode: forwards;">
          Fullstack
        </h1>
        <h1 class="font-serif italic text-6xl md:text-8xl leading-none text-accent mb-10 animate-fade-up"
          style="animation-delay: 0.3s; opacity: 0; animation-fill-mode: forwards;">
          Web Developer.
        </h1>

        <!-- Bio + tags -->
        <div class="grid md:grid-cols-2 gap-12 items-end">
          <p class="font-sans text-lg text-ink/60 leading-relaxed max-w-md animate-fade-up"
            style="animation-delay: 0.4s; opacity: 0; animation-fill-mode: forwards;">
            Hei, nama saya <strong class="text-ink font-medium">{{ config.name }}</strong> — developer yang suka ngulik
            dan mencoba memahami bagaimana teknologi
            backend maupun frontend bekerja. Selalu mencoba bikin sesuatu yang scalable dan bisa dipake sendiri maupun
            orang
            lain.
          </p>

          <div class="flex flex-col gap-3 animate-fade-up"
            style="animation-delay: 0.5s; opacity: 0; animation-fill-mode: forwards;">
            <div class="flex flex-wrap gap-2">
              <span v-for="t in hero.tags" :key="t"
                class="tag font-mono text-xs px-3 py-1.5 rounded-full border border-ink/20 text-ink/60 cursor-default">{{
                  t }}</span>
            </div>
            <div class="flex gap-4 mt-2">
              <a v-for="s in socials" :key="s.label" :href="s.url" target="_blank" rel="noopener"
                class="link-underline font-mono text-xs text-muted hover:text-ink transition-colors">{{ s.label }}</a>
            </div>
          </div>
        </div>

        <!-- Scroll hint -->
        <div class="mt-20 flex items-center gap-3 animate-fade-in"
          style="animation-delay: 1s; opacity: 0; animation-fill-mode: forwards;">
          <div class="h-px w-12 bg-muted"></div>
          <span class="font-mono text-xs text-muted">scroll untuk lihat hasil saya ngulik
          </span>
        </div>

      </div>
    </section>

    <!-- ═══ ABOUT ═══ -->
    <section id="about" class="py-24 px-6 bg-ink text-paper">
      <div class="max-w-5xl mx-auto">
        <div class="grid md:grid-cols-3 gap-12">

          <div class="md:col-span-2">
            <p class="font-mono text-xs text-accent mb-6 reveal">// tentang saya</p>
            <h2 class="font-serif text-4xl md:text-5xl leading-tight mb-8 reveal reveal-delay-1">
              Memahami sesuatu bekerja adalah kepuasan tersendiri,<br />
              <span class="italic text-paper/50">termasuk dengan error dan bug nya.</span>
            </h2>
            <div class="space-y-4 text-paper/70 leading-relaxed font-sans font-light">
              <p v-for="(para, i) in about.bio" :key="i" class="reveal" :class="'reveal-delay-' + (i + 2)">
                {{ para }}
              </p>
            </div>
          </div>

          <div class="space-y-8 reveal reveal-delay-2">
            <div v-for="group in about.skills" :key="group.label">
              <p class="font-mono text-xs text-accent/60 mb-3 uppercase tracking-widest">{{ group.label }}</p>
              <div class="flex flex-wrap gap-2">
                <span v-for="s in group.items" :key="s"
                  class="font-mono text-xs px-2.5 py-1 rounded border border-paper/10 text-paper/60">{{ s }}</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- ═══ PROJECTS ═══ -->
    <section id="projects" class="py-24 px-6">
      <div class="max-w-5xl mx-auto">

        <!-- Section header -->
        <div class="flex items-end justify-between mb-16 reveal">
          <div>
            <p class="font-mono text-xs text-muted mb-3">// proyek</p>
            <h2 class="font-serif text-4xl md:text-5xl text-ink">
              Yang pernah<br /><em>gue bikin</em>
            </h2>
          </div>
          <span class="font-mono text-sm text-muted hidden md:block">
            {{ projects.length }} projects
          </span>
        </div>

        <!-- Cards -->
        <div class="space-y-px">
          <ProjectCard v-for="(p, i) in projects" :key="p.slug" :project="p" :index="i" class="reveal"
            :class="'reveal-delay-' + Math.min(i + 1, 4)" />
        </div>

        <!-- Coming soon note -->
        <div class="mt-8 flex items-center gap-4 reveal">
          <span class="font-mono text-xs text-muted">lebih banyak segera hadir</span>
          <span class="font-mono text-xs text-accent animate-blink">_</span>
        </div>

      </div>
    </section>

    <!-- ═══ CONTACT ═══ -->
    <section id="contact" class="py-24 px-6 border-t border-ink/10">
      <div class="max-w-5xl mx-auto">
        <div class="grid md:grid-cols-2 gap-16 items-center">

          <div class="reveal">
            <p class="font-mono text-xs text-muted mb-4">// kontak</p>
            <h2 class="font-serif text-4xl md:text-5xl text-ink mb-6">
              Ada project<br />menarik?
            </h2>
            <p class="font-sans text-ink/55 leading-relaxed mb-8">
              Gue terbuka buat kolaborasi, freelance, atau sekadar ngobrol soal tech. Jangan ragu kirim pesan.
            </p>
            <a :href="'mailto:' + config.email"
              class="inline-flex items-center gap-3 font-mono text-sm px-6 py-3.5 rounded bg-ink text-paper hover:bg-accent transition-colors duration-300">
              {{ config.email }}
              <span>→</span>
            </a>
          </div>

          <div class="reveal reveal-delay-2 space-y-6">
            <div v-for="s in socials" :key="s.label"
              class="flex items-center justify-between py-4 border-b border-ink/10 group">
              <span class="font-mono text-sm text-muted group-hover:text-ink transition-colors">
                {{ s.label }}
              </span>
              <a :href="s.url" target="_blank" rel="noopener"
                class="link-underline font-sans text-sm text-ink/60 hover:text-ink transition-colors">
                {{ s.handle }}
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>

    <AppFooter />
  </main>
</template>

<script setup>
import { config, hero, socials, about, projects } from '@/data/portfolio.js'
import ProjectCard from '@/components/ProjectCard.vue'
import AppFooter from '@/components/AppFooter.vue'
import { useReveal } from '@/composables/useReveal.js'

useReveal()
</script>
