<script setup>
import { profile, education } from '../data/profile'

const strengths = [
  { t: 'End-to-end ownership', d: 'From the first client call to data model, API, UI and production release.' },
  { t: 'Payments done right', d: 'Signed callbacks, idempotent updates and automatic reconciliation.' },
  { t: 'Multi-tenant SaaS', d: 'Schema-per-tenant designs that onboard new clients without new deployments.' },
  { t: 'Clean data pipelines', d: 'Bulk imports with row-level validation and clear error reports.' },
]
</script>

<template>
  <section id="about" class="section">
    <div class="grid gap-12 lg:grid-cols-5">
      <div v-reveal class="lg:col-span-3">
        <p class="eyebrow">01 / About</p>
        <h2 class="heading">Six years of shipping software that businesses run on.</h2>
        <p v-for="(para, i) in profile.about" :key="i" class="mt-5 leading-relaxed text-slate-600 dark:text-slate-300">{{ para }}</p>
        <p class="mt-6 text-sm text-slate-500 dark:text-slate-400">
          <span class="font-semibold text-slate-700 dark:text-slate-200">{{ education.degree }}</span> &middot; {{ education.school }}
        </p>
      </div>
      <div v-reveal class="grid gap-4 self-start sm:grid-cols-2 lg:col-span-2 lg:grid-cols-1">
        <div v-for="s in strengths" :key="s.t" class="card p-5">
          <h3 class="font-bold text-navy-900 dark:text-white">{{ s.t }}</h3>
          <p class="mt-1 text-sm text-slate-600 dark:text-slate-300">{{ s.d }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
