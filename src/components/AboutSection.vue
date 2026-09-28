<script setup>
import { ref } from 'vue'
import { profile, education, strengths } from '../data/profile'
import AppIcon from './AppIcon.vue'

const rail = ref(null)
const scroll = (dir) => rail.value?.scrollBy({ left: dir * rail.value.clientWidth * 0.8, behavior: 'smooth' })
</script>

<template>
  <section id="about" class="band overflow-hidden bg-page">
    <div class="wrap">
      <div v-reveal class="max-w-3xl">
        <p class="eyebrow">About</p>
        <h2 class="headline mt-2">Six years of end-to-end ownership.</h2>
      </div>
      <div class="mt-10 grid gap-8 md:grid-cols-3">
        <p v-for="(para, i) in profile.about" :key="i" v-reveal="i * 100" class="text-[17px] leading-relaxed text-mute">{{ para }}</p>
      </div>
      <p v-reveal class="mt-8 text-[15px] text-mute">
        <span class="font-semibold text-ink">{{ education.degree }}</span> · {{ education.school }}
      </p>

      <div v-reveal class="mt-20 flex items-end justify-between gap-4">
        <h3 class="title">Why teams hire me.</h3>
        <div class="hidden gap-2 sm:flex">
          <button @click="scroll(-1)" class="grid h-10 w-10 place-items-center rounded-full bg-alt text-mute transition hover:text-ink" aria-label="Scroll left"><AppIcon name="chevronL" class="h-5 w-5" /></button>
          <button @click="scroll(1)" class="grid h-10 w-10 place-items-center rounded-full bg-alt text-mute transition hover:text-ink" aria-label="Scroll right"><AppIcon name="chevronR" class="h-5 w-5" /></button>
        </div>
      </div>
    </div>

    <!-- full-bleed card rail, aligned to the content column -->
    <div ref="rail" class="rail mt-8 flex gap-5 overflow-x-auto pb-6"
         style="padding-inline: max(1rem, calc((100vw - 1024px) / 2 + 1.5rem)); scroll-padding-inline: max(1rem, calc((100vw - 1024px) / 2 + 1.5rem))">
      <article v-for="(s, i) in strengths" :key="s.t" v-reveal="i * 80"
               class="flex min-h-[340px] w-[78vw] flex-none flex-col justify-between rounded-[28px] bg-alt p-8 transition duration-500 hover:scale-[1.015] sm:w-[340px]">
        <div class="grid h-14 w-14 place-items-center rounded-2xl bg-tile text-link shadow-sm">
          <AppIcon :name="s.icon" class="h-7 w-7" />
        </div>
        <div>
          <h4 class="text-[28px] font-semibold leading-tight tracking-tight">{{ s.t }}</h4>
          <p class="mt-3 text-[17px] leading-relaxed text-mute">{{ s.d }}</p>
        </div>
      </article>
    </div>
  </section>
</template>
