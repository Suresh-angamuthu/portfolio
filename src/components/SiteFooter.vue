<script setup>
import { profile, projects } from '../data/profile'
import { activeProject } from '../store'

const year = new Date().getFullYear()
</script>

<template>
  <footer class="bg-alt text-[12px] text-mute">
    <div class="wrap py-10">
      <div class="grid gap-8 border-b border-line pb-8 sm:grid-cols-3">
        <div>
          <p class="font-semibold text-ink">Work</p>
          <ul class="mt-3 space-y-2">
            <li v-for="p in projects" :key="p.id"><button @click="activeProject = p" class="hover:text-ink hover:underline">{{ p.name }} · {{ p.domain }}</button></li>
          </ul>
        </div>
        <div>
          <p class="font-semibold text-ink">Explore</p>
          <ul class="mt-3 space-y-2">
            <li><a href="#recruiters" class="hover:text-ink hover:underline">For recruiters</a></li>
            <li><a href="#process" class="hover:text-ink hover:underline">How I build</a></li>
            <li><a href="#skills" class="hover:text-ink hover:underline">Skills</a></li>
            <li><a href="#experience" class="hover:text-ink hover:underline">Experience</a></li>
          </ul>
        </div>
        <div>
          <p class="font-semibold text-ink">Contact</p>
          <ul class="mt-3 space-y-2">
            <li><a :href="`mailto:${profile.email}`" class="hover:text-ink hover:underline">{{ profile.email }}</a></li>
            <li><a :href="profile.linkedin" target="_blank" rel="noopener" class="hover:text-ink hover:underline">LinkedIn</a></li>
            <li><a :href="profile.resume" :download="profile.resumeName" class="hover:text-ink hover:underline">Download résumé</a></li>
          </ul>
        </div>
      </div>
      <div class="flex flex-wrap justify-between gap-2 pt-5">
        <p>© {{ year }} {{ profile.name }}. Built with Vue 3, Vite and Tailwind CSS.</p>
        <p>Tip: press <kbd class="rounded border border-line px-1">Ctrl</kbd> + <kbd class="rounded border border-line px-1">K</kbd> to jump anywhere.</p>
      </div>
    </div>
  </footer>
</template>
