<script setup>
import { ref, computed } from 'vue'
import { projects } from '../data/profile'
import ProjectModal from './ProjectModal.vue'

const domains = ['All', ...new Set(projects.map((p) => p.domain))]
const filter = ref('All')
const active = ref(null)

const shown = computed(() => (filter.value === 'All' ? projects : projects.filter((p) => p.domain === filter.value)))
</script>

<template>
  <section id="projects" class="section">
    <div v-reveal class="flex flex-wrap items-end justify-between gap-6">
      <div>
        <p class="eyebrow">03 / Projects</p>
        <h2 class="heading">Six products, six industries.</h2>
        <p class="mt-3 max-w-xl text-slate-600 dark:text-slate-300">Client projects built at Ardhika Software Technologies. Open a project for the problem, what I built and the engineering behind it.</p>
      </div>
      <div class="flex flex-wrap gap-2" role="tablist" aria-label="Filter projects by industry">
        <button v-for="d in domains" :key="d" @click="filter = d" role="tab" :aria-selected="filter === d"
                class="rounded-full border px-3.5 py-1.5 text-sm font-medium transition"
                :class="filter === d
                  ? 'border-navy-900 bg-navy-900 text-white dark:border-brand-300 dark:bg-brand-300 dark:text-navy-950'
                  : 'border-slate-300 text-slate-600 hover:border-slate-400 dark:border-white/15 dark:text-slate-300'">{{ d }}</button>
      </div>
    </div>

    <div class="mt-10 grid gap-6 md:grid-cols-2">
      <article v-for="p in shown" :key="p.id" v-reveal
               class="card group flex flex-col p-6 transition hover:-translate-y-1 hover:border-brand-500/50 hover:shadow-lg sm:p-7">
        <div class="flex items-center justify-between">
          <span class="chip">{{ p.domain }}</span>
          <span class="font-mono text-xs text-slate-400">{{ p.name }}</span>
        </div>
        <h3 class="mt-4 text-xl font-bold text-navy-900 dark:text-white">{{ p.title }}</h3>
        <p class="mt-2 text-slate-600 dark:text-slate-300">{{ p.summary }}</p>
        <ul class="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300">
          <li v-for="h in p.highlights" :key="h" class="flex gap-2">
            <svg class="mt-0.5 h-4 w-4 flex-none text-brand-600 dark:text-brand-300" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path d="m5 12 5 5L20 7"/></svg>
            <span>{{ h }}</span>
          </li>
        </ul>
        <div class="mt-5 flex flex-wrap gap-1.5">
          <span v-for="t in p.stack" :key="t" class="rounded-md bg-slate-100 px-2 py-0.5 font-mono text-[11px] text-slate-600 dark:bg-white/5 dark:text-slate-400">{{ t }}</span>
        </div>
        <button @click="active = p" class="mt-6 self-start font-semibold text-brand-700 hover:underline dark:text-brand-300">
          Read the case study &rarr;
        </button>
      </article>
    </div>

    <ProjectModal :project="active" @close="active = null" />
  </section>
</template>
