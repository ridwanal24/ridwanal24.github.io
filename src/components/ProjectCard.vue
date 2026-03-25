<template>
  <article class="project-card border border-dust" style="background: #f5f2ec;">
    <div class="p-8 md:p-10 grid md:grid-cols-3 gap-6 items-start">

      <!-- Left: index + meta + desc -->
      <div class="md:col-span-2">
        <div class="flex items-center gap-4 mb-4">
          <span class="font-mono text-xs text-muted">{{ String(index + 1).padStart(2, '0') }}</span>
          <hr class="h-px flex-1 bg-ink/10 border-none" />
          <span
            class="font-mono text-xs px-2 py-0.5 rounded"
            :style="{ background: style.bg, color: style.text }"
          >
            {{ project.status }}
          </span>
        </div>

        <h3 class="font-serif text-2xl md:text-3xl text-ink mb-2">{{ project.title }}</h3>
        <p class="font-sans text-sm text-ink/55 leading-relaxed mb-6">{{ project.excerpt }}</p>

        <div class="flex flex-wrap gap-2">
          <span
            v-for="t in project.stack"
            :key="t"
            class="tag font-mono text-xs px-2.5 py-1 rounded border border-ink/15 text-ink/50"
          >
            {{ t }}
          </span>
        </div>
      </div>

      <!-- Right: year + CTAs -->
      <div class="flex flex-col items-start md:items-end gap-3 justify-between h-full">
        <p class="font-mono text-xs text-muted hidden md:block">{{ project.year }}</p>

        <div class="flex gap-3 flex-wrap md:flex-col md:items-end">
          <a
            v-if="project.demo"
            :href="project.demo"
            target="_blank"
            rel="noopener"
            class="inline-flex items-center gap-2 font-mono text-xs px-4 py-2 rounded bg-accent text-paper hover:bg-accent/90 transition-colors"
          >
            Live Demo ↗
          </a>

          <RouterLink
            :to="{ name: 'project', params: { slug: project.slug } }"
            class="inline-flex items-center gap-2 font-mono text-xs px-4 py-2 rounded border border-ink/20 text-ink/60 hover:border-ink hover:text-ink transition-colors"
          >
            Baca lebih →
          </RouterLink>

          <a
            v-if="project.github"
            :href="project.github"
            target="_blank"
            rel="noopener"
            class="inline-flex items-center gap-2 font-mono text-xs px-4 py-2 rounded border border-ink/20 text-ink/60 hover:border-ink hover:text-ink transition-colors"
          >
            GitHub ↗
          </a>
        </div>
      </div>

    </div>
  </article>
</template>

<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { statusStyle } from '@/data/portfolio.js'

const props = defineProps({
  project: { type: Object, required: true },
  index:   { type: Number, default: 0 },
})

const style = computed(() => statusStyle(props.project.status))
</script>
