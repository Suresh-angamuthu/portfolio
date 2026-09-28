<script setup>
import { stats, projects } from '../data/profile'

const domains = projects.map((p) => p.domain)
</script>

<template>
  <section class="band bg-page">
    <div class="wrap">
      <div v-reveal class="text-center">
        <p class="eyebrow">By the numbers</p>
        <h2 class="headline mt-2">Six years. Real results.</h2>
      </div>

      <div class="mt-12 grid auto-rows-[minmax(190px,auto)] gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <!-- hero stat -->
        <div v-reveal class="flex flex-col justify-between rounded-[28px] bg-black p-8 text-white ring-line sm:col-span-2 sm:row-span-2 dark:ring-1">
          <p class="text-[17px] font-semibold text-white/60">Experience</p>
          <div>
            <p v-count="stats[0].value" class="gradient-text text-[120px] font-bold leading-none tracking-[-0.05em] sm:text-[180px]"></p>
            <p class="mt-2 text-[21px] font-semibold tracking-tight">{{ stats[0].label }}.</p>
          </div>
        </div>

        <div v-for="(s, i) in stats.slice(1)" :key="s.label" v-reveal="(i + 1) * 90"
             class="flex flex-col justify-between rounded-[28px] bg-alt p-7" :class="i === 2 ? 'sm:col-span-2' : ''">
          <p v-count="s.value" class="text-[48px] font-bold leading-none tracking-[-0.04em] lg:text-[44px]"></p>
          <p class="mt-4 text-[17px] font-medium leading-snug text-mute">{{ s.label }}</p>
        </div>

        <div v-reveal="360" class="flex flex-col justify-center gap-5 rounded-[28px] bg-alt p-7 sm:col-span-2 lg:col-span-4">
          <p class="text-[17px] font-semibold text-mute">Six industries</p>
          <div class="flex flex-wrap gap-2">
            <span v-for="d in domains" :key="d" class="rounded-full bg-tile px-4 py-2 text-[17px] font-medium tracking-tight">{{ d }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
