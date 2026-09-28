<script setup>
import { ref } from 'vue'
import { skills } from '../data/profile'

const tab = ref(0)
</script>

<template>
  <section id="skills" class="band bg-alt">
    <div class="wrap">
      <div v-reveal class="text-center">
        <p class="eyebrow">Skills</p>
        <h2 class="headline mt-2">The toolkit I use in production.</h2>
      </div>

      <div v-reveal="100" class="mt-10 flex justify-center">
        <div class="rail flex max-w-full gap-1 overflow-x-auto rounded-full bg-tile p-1 shadow-sm ring-1 ring-line" role="tablist" aria-label="Skill groups">
          <button v-for="(g, i) in skills" :key="g.group" @click="tab = i" role="tab" :aria-selected="tab === i"
                  class="whitespace-nowrap rounded-full px-4 py-2 text-[14px] font-medium transition"
                  :class="tab === i ? 'bg-ink text-page' : 'text-mute hover:text-ink'">{{ g.group }}</button>
        </div>
      </div>

      <Transition mode="out-in" enter-from-class="opacity-0 translate-y-2" leave-to-class="opacity-0 -translate-y-2" enter-active-class="transition duration-300" leave-active-class="transition duration-200">
        <ul :key="tab" class="mt-10 flex flex-wrap justify-center gap-3" role="tabpanel">
          <li v-for="s in skills[tab].items" :key="s"
              class="rounded-2xl bg-tile px-5 py-3.5 text-[19px] font-semibold tracking-tight shadow-sm ring-1 ring-line">{{ s }}</li>
        </ul>
      </Transition>

      <!-- everything at once, for skimmers -->
      <div v-reveal class="mt-16 grid gap-px overflow-hidden rounded-[28px] bg-line sm:grid-cols-2 lg:grid-cols-3">
        <div v-for="g in skills" :key="g.group" class="bg-tile p-6">
          <h3 class="text-[13px] font-medium uppercase tracking-wider text-mute">{{ g.group }}</h3>
          <p class="mt-2 text-[15px] leading-relaxed">{{ g.items.join(' · ') }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
