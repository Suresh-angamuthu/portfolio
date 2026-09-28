<script setup>
import { experience } from '../data/profile'
</script>

<template>
  <section id="experience" class="bg-slate-50 dark:bg-navy-900/40">
    <div class="section">
      <div v-reveal>
        <p class="eyebrow">04 / Experience</p>
        <h2 class="heading">Where I've worked.</h2>
      </div>
      <ol class="relative mt-10 space-y-10 border-l-2 border-slate-200 pl-6 sm:pl-8 dark:border-white/10">
        <li v-for="job in experience" :key="job.company" v-reveal class="relative">
          <span class="absolute -left-[33px] top-1.5 h-4 w-4 rounded-full border-4 border-slate-50 bg-brand-500 sm:-left-[41px] dark:border-navy-950"></span>
          <p class="font-mono text-sm text-brand-700 dark:text-brand-300">{{ job.period }}</p>
          <h3 class="mt-1 text-xl font-bold text-navy-900 dark:text-white">{{ job.role }}</h3>
          <p class="text-slate-500 dark:text-slate-400">{{ job.company }} &middot; {{ job.place }}</p>
          <ul class="mt-4 space-y-2">
            <li v-for="pt in job.points" :key="pt" class="flex gap-2 text-slate-700 dark:text-slate-300">
              <span class="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-brand-500"></span><span>{{ pt }}</span>
            </li>
          </ul>
        </li>
      </ol>
    </div>
  </section>
</template>
