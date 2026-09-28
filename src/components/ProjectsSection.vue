<script setup>
import { ref, computed } from 'vue'
import { projects } from '../data/profile'
import { activeProject } from '../store'
import ProjectIcon from './ProjectIcon.vue'
import AppIcon from './AppIcon.vue'

const domains = ['All', ...new Set(projects.map((p) => p.domain))]
const filter = ref('All')
const shown = computed(() => (filter.value === 'All' ? projects : projects.filter((p) => p.domain === filter.value)))
// the first tile is a wide black "featured" tile when more than one project is shown
const feat = (i) => i === 0 && shown.value.length > 1
// a single project, or an unpaired last tile, spans the full row
const wide = (i) => shown.value.length === 1 || (i === shown.value.length - 1 && shown.value.length % 2 === 0)
</script>

<template>
  <section id="work" class="band bg-alt">
    <div class="wrap-wide">
      <div v-reveal class="text-center">
        <p class="eyebrow">Selected work</p>
        <h2 class="headline mt-2">Six products. Six industries.</h2>
        <p class="lede mx-auto mt-4 max-w-2xl">Client products I built end to end at Ardhika Software Technologies. Open any one for the problem, what I built and the engineering behind it.</p>
      </div>

      <!-- segmented control -->
      <div v-reveal="100" class="mt-10 flex justify-center">
        <div class="rail flex max-w-full gap-1 overflow-x-auto rounded-full bg-tile p-1 shadow-sm ring-1 ring-line" role="tablist" aria-label="Filter projects by industry">
          <button v-for="d in domains" :key="d" @click="filter = d" role="tab" :aria-selected="filter === d"
                  class="whitespace-nowrap rounded-full px-4 py-2 text-[14px] font-medium transition"
                  :class="filter === d ? 'bg-ink text-page' : 'text-mute hover:text-ink'">{{ d }}</button>
        </div>
      </div>

      <TransitionGroup tag="div" class="mt-10 grid gap-4 lg:grid-cols-2"
                       enter-from-class="opacity-0 scale-[0.98]" enter-active-class="transition duration-500" leave-active-class="hidden">
        <article v-for="(p, i) in shown" :key="p.id"
                 class="group relative flex flex-col overflow-hidden rounded-[28px] p-8 transition duration-500 hover:shadow-2xl sm:p-12"
                 :class="[feat(i) ? 'bg-black text-white ring-line lg:col-span-2 dark:ring-1' : 'bg-tile',
                          wide(i) ? 'lg:col-span-2' : '']">
          <div :class="feat(i) ? 'lg:grid lg:grid-cols-2 lg:items-center lg:gap-12' : ''">
            <div class="flex flex-col items-center text-center" :class="feat(i) ? 'lg:items-start lg:text-left' : ''">
              <ProjectIcon :id="p.id" class="h-20 w-20 transition duration-500 group-hover:scale-105 sm:h-24 sm:w-24" />
              <p class="mt-6 text-[14px] font-semibold uppercase tracking-wider" :class="feat(i) ? 'text-white/60' : 'text-mute'">{{ p.domain }}</p>
              <h3 class="mt-1 text-[40px] font-semibold leading-none tracking-[-0.03em] sm:text-[48px]">{{ p.name }}</h3>
              <p class="mt-3 text-[19px] leading-snug tracking-tight sm:text-[21px]" :class="feat(i) ? 'text-white/80' : 'text-mute'">{{ p.title }}</p>
              <div class="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
                <button @click="activeProject = p" class="more" :class="feat(i) ? 'text-[#2997ff]' : ''">Read case study</button>
              </div>
            </div>

            <ul class="mt-8 space-y-3 text-left text-[15px] leading-relaxed" :class="feat(i) ? 'text-white/80 lg:mt-0' : 'text-mute'">
              <li v-for="h in p.highlights" :key="h" class="flex gap-3">
                <AppIcon name="check" class="mt-1 h-4 w-4 flex-none" :class="feat(i) ? 'text-[#2997ff]' : 'text-link'" />
                <span>{{ h }}</span>
              </li>
            </ul>
          </div>

          <div class="mt-8 flex flex-wrap justify-center gap-1.5" :class="feat(i) ? 'lg:justify-start' : ''">
            <span v-for="t in p.stack" :key="t" class="rounded-full px-3 py-1 text-[12px] font-medium"
                  :class="feat(i) ? 'bg-white/10 text-white/80' : 'bg-alt text-mute'">{{ t }}</span>
          </div>
        </article>
      </TransitionGroup>
    </div>
  </section>
</template>
