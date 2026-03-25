<template>
  <main class="pt-28 pb-24 px-6">

    <!-- Not found -->
    <div v-if="!project" class="max-w-5xl mx-auto text-center py-32">
      <p class="font-mono text-xs text-muted mb-4">// 404</p>
      <h1 class="font-serif text-4xl text-ink mb-6">Project tidak ditemukan</h1>
      <RouterLink to="/" class="font-mono text-sm text-accent hover:underline">← Kembali ke beranda</RouterLink>
    </div>

    <template v-else>
      <div class="max-w-5xl mx-auto">

        <!-- ─── Back link ─── -->
        <RouterLink
          to="/#projects"
          class="inline-flex items-center gap-2 font-mono text-xs text-muted hover:text-ink transition-colors mb-12 group"
        >
          <span class="group-hover:-translate-x-1 transition-transform">←</span>
          Semua project
        </RouterLink>

        <!-- ─── Hero area ─── -->
        <div class="grid md:grid-cols-3 gap-10 mb-16">
          <div class="md:col-span-2">

            <!-- Status + year -->
            <div class="flex items-center gap-3 mb-5">
              <span
                class="font-mono text-xs px-2.5 py-1 rounded"
                :style="{ background: style.bg, color: style.text }"
              >{{ project.status }}</span>
              <span class="font-mono text-xs text-muted">{{ project.year }}</span>
            </div>

            <h1 class="font-serif text-5xl md:text-6xl leading-tight text-ink mb-6">
              {{ project.title }}
            </h1>

            <!-- Stack -->
            <div class="flex flex-wrap gap-2 mb-8">
              <span
                v-for="t in project.stack" :key="t"
                class="tag font-mono text-xs px-2.5 py-1 rounded border border-ink/15 text-ink/50"
              >{{ t }}</span>
            </div>

            <!-- CTAs -->
            <div class="flex flex-wrap gap-3">
              <a
                v-if="project.demo"
                :href="project.demo"
                target="_blank"
                rel="noopener"
                class="inline-flex items-center gap-2 font-mono text-sm px-5 py-2.5 rounded bg-accent text-paper hover:bg-accent/90 transition-colors"
              >
                Live Demo ↗
              </a>
              <a
                v-if="project.github"
                :href="project.github"
                target="_blank"
                rel="noopener"
                class="inline-flex items-center gap-2 font-mono text-sm px-5 py-2.5 rounded border border-ink/20 text-ink/60 hover:border-ink hover:text-ink transition-colors"
              >
                GitHub ↗
              </a>
            </div>
          </div>

          <!-- Key highlights -->
          <div v-if="project.highlights?.length" class="bg-dust/60 rounded-lg p-6">
            <p class="font-mono text-xs text-muted uppercase tracking-widest mb-4">Key highlights</p>
            <ul class="space-y-3">
              <li
                v-for="(h, i) in project.highlights" :key="i"
                class="flex items-start gap-3 font-sans text-sm text-ink/70 leading-relaxed"
              >
                <span class="text-accent mt-0.5 shrink-0">▸</span>
                {{ h }}
              </li>
            </ul>
          </div>
        </div>

        <!-- ─── Cover image ─── -->
        <div
          class="w-full rounded-xl mb-16 overflow-hidden"
          style="aspect-ratio: 16/7;"
        >
          <img
            v-if="project.cover"
            :src="project.cover"
            :alt="project.title"
            class="w-full h-full object-cover"
          />
          <div
            v-else
            class="w-full h-full flex items-center justify-center"
            :style="{ background: project.coverColor || '#e4dfd5' }"
          >
            <span class="font-mono text-6xl font-medium opacity-20 select-none">
              {{ project.title.charAt(0) }}
            </span>
          </div>
        </div>

        <!-- ─── Content ─── -->
        <div class="max-w-2xl">

          <!-- Description paragraphs -->
          <div class="space-y-5 mb-14">
            <p
              v-for="(para, i) in descriptionArray" :key="i"
              class="font-sans text-base text-ink/70 leading-relaxed reveal"
              :class="'reveal-delay-' + Math.min(i, 3)"
            >
              {{ para }}
            </p>
          </div>

          <!-- Sections (long-form content) -->
          <div
            v-for="(section, i) in project.sections" :key="i"
            class="mb-12 reveal"
            :class="'reveal-delay-' + Math.min(i + 1, 4)"
          >
            <h2 class="font-serif text-2xl md:text-3xl text-ink mb-4">{{ section.heading }}</h2>
            <hr class="hr-accent mb-6" />
            <p class="font-sans text-base text-ink/70 leading-relaxed whitespace-pre-line">
              {{ section.body }}
            </p>
          </div>

        </div>

        <!-- ─── Extra images ─── -->
        <div v-if="project.images?.length" class="grid md:grid-cols-2 gap-6 mt-16">
          <div
            v-for="(img, i) in project.images" :key="i"
            class="rounded-lg overflow-hidden reveal"
            :class="'reveal-delay-' + Math.min(i + 1, 4)"
            style="aspect-ratio: 16/9;"
          >
            <img :src="img" :alt="project.title + ' screenshot ' + (i + 1)" class="w-full h-full object-cover" />
          </div>
        </div>

        <!-- ─── Prev / Next navigation ─── -->
        <div class="mt-20 pt-10 border-t border-ink/10 grid grid-cols-2 gap-6">
          <RouterLink
            v-if="prevProject"
            :to="{ name: 'project', params: { slug: prevProject.slug } }"
            class="group flex flex-col gap-1"
          >
            <span class="font-mono text-xs text-muted group-hover:text-ink transition-colors">← Sebelumnya</span>
            <span class="font-serif text-xl text-ink group-hover:text-accent transition-colors">{{ prevProject.title }}</span>
          </RouterLink>
          <div v-else />

          <RouterLink
            v-if="nextProject"
            :to="{ name: 'project', params: { slug: nextProject.slug } }"
            class="group flex flex-col gap-1 text-right ml-auto"
          >
            <span class="font-mono text-xs text-muted group-hover:text-ink transition-colors">Berikutnya →</span>
            <span class="font-serif text-xl text-ink group-hover:text-accent transition-colors">{{ nextProject.title }}</span>
          </RouterLink>
          <div v-else />
        </div>

      </div>
    </template>

    <AppFooter />
  </main>
</template>

<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { projects, getProjectBySlug, statusStyle } from '@/data/portfolio.js'
import AppFooter from '@/components/AppFooter.vue'
import { useReveal } from '@/composables/useReveal.js'

const props = defineProps({
  slug: { type: String, required: true },
})

useReveal()

const project = computed(() => getProjectBySlug(props.slug))

const style = computed(() =>
  project.value ? statusStyle(project.value.status) : {}
)

// Support description as string or array
const descriptionArray = computed(() => {
  const d = project.value?.description
  if (!d) return []
  return Array.isArray(d) ? d : [d]
})

// Prev / Next
const currentIndex = computed(() =>
  projects.findIndex(p => p.slug === props.slug)
)
const prevProject = computed(() =>
  currentIndex.value > 0 ? projects[currentIndex.value - 1] : null
)
const nextProject = computed(() =>
  currentIndex.value < projects.length - 1 ? projects[currentIndex.value + 1] : null
)
</script>

<style scoped>
.hr-accent {
  height: 1px;
  background: linear-gradient(to right, #0f0e0d 60%, transparent);
  border: none;
}
</style>
