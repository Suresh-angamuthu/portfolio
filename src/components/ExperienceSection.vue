<script setup>
import { experience } from '../data/profile'
</script>

<template>
  <section id="experience" class="band bg-page">
    <div class="wrap">
      <div v-reveal class="text-center">
        <p class="eyebrow">Experience</p>
        <h2 class="headline mt-2">Where I've worked.</h2>
      </div>

      <ol class="mt-14 space-y-4">
        <li v-for="(job, i) in experience" :key="job.company" v-reveal="i * 100"
            class="grid gap-6 rounded-[28px] bg-alt p-7 sm:p-10 md:grid-cols-[220px_1fr] md:gap-10">
          <div>
            <p class="text-[15px] font-semibold text-link">{{ job.period }}</p>
            <p class="mt-1 text-[15px] text-mute">{{ job.place }}</p>
          </div>
          <div>
            <h3 class="text-[28px] font-semibold leading-tight tracking-tight">{{ job.role }}</h3>
            <p class="mt-1 text-[17px] text-mute">{{ job.company }}</p>
            <ul class="mt-6 space-y-3">
              <li v-for="pt in job.points" :key="pt" class="flex gap-3 text-[17px] leading-relaxed">
                <span class="mt-2.5 h-1.5 w-1.5 flex-none rounded-full bg-ink/40"></span><span>{{ pt }}</span>
              </li>
            </ul>
          </div>
        </li>
      </ol>
    </div>
  </section>
</template>
