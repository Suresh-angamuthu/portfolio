<script setup>
import { skills } from '../data/profile'
</script>

<template>
  <section id="skills" class="bg-slate-50 dark:bg-navy-900/40">
    <div class="section">
      <div v-reveal>
        <p class="eyebrow">02 / Skills</p>
        <h2 class="heading">The toolkit I use in production.</h2>
      </div>
      <div class="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <div v-for="g in skills" :key="g.group" v-reveal class="card p-6">
          <h3 class="font-bold text-navy-900 dark:text-white">{{ g.group }}</h3>
          <ul class="mt-4 flex flex-wrap gap-2">
            <li v-for="s in g.items" :key="s" class="chip">{{ s }}</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
