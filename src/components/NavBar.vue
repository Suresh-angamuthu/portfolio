<script setup>
import { ref } from 'vue'
import { profile } from '../data/profile'
import { dark, toggleTheme, paletteOpen } from '../store'
import AppIcon from './AppIcon.vue'

const links = [
  { href: '#work', label: 'Work' },
  { href: '#process', label: 'Process' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
]

const open = ref(false)
const isMac = /Mac|iPhone|iPad/.test(navigator.platform || navigator.userAgent)
</script>

<template>
  <header class="fixed inset-x-0 top-0 z-40 border-b border-line bg-glass backdrop-blur-xl backdrop-saturate-150">
    <nav class="wrap-wide flex h-12 items-center justify-between gap-4 text-[13px]">
      <a href="#top" class="font-semibold tracking-tight text-ink" aria-label="Back to top">{{ profile.name }}</a>

      <div class="hidden items-center gap-8 md:flex">
        <a v-for="l in links" :key="l.href" :href="l.href" class="text-ink/80 transition hover:text-ink">{{ l.label }}</a>
      </div>

      <div class="flex items-center gap-1">
        <button @click="paletteOpen = true" class="flex items-center gap-2 rounded-full px-2.5 py-1.5 text-ink/80 transition hover:bg-alt hover:text-ink" aria-label="Open quick search">
          <AppIcon name="search" class="h-4 w-4" />
          <kbd class="hidden rounded border border-line px-1.5 font-sans text-[11px] text-mute lg:inline">{{ isMac ? '⌘' : 'Ctrl' }} K</kbd>
        </button>
        <button @click="toggleTheme" class="grid h-8 w-8 place-items-center rounded-full text-ink/80 transition hover:bg-alt hover:text-ink"
                :aria-label="dark ? 'Switch to light theme' : 'Switch to dark theme'">
          <AppIcon :name="dark ? 'sun' : 'moon'" class="h-4 w-4" />
        </button>
        <a :href="profile.resume" :download="profile.resumeName" class="btn btn-primary ml-1 hidden px-3.5 py-1 text-[12px] sm:inline-flex">Résumé</a>
        <button @click="open = !open" class="grid h-8 w-8 place-items-center rounded-full text-ink/80 md:hidden" :aria-expanded="open" aria-label="Toggle menu">
          <AppIcon :name="open ? 'close' : 'menu'" class="h-4 w-4" />
        </button>
      </div>
    </nav>

    <Transition enter-from-class="opacity-0 -translate-y-2" leave-to-class="opacity-0 -translate-y-2" enter-active-class="transition duration-200" leave-active-class="transition duration-150">
      <div v-if="open" class="wrap-wide pb-6 pt-2 md:hidden">
        <a v-for="l in links" :key="l.href" :href="l.href" @click="open = false"
           class="block border-b border-line py-3 text-[22px] font-semibold tracking-tight text-ink">{{ l.label }}</a>
        <a :href="profile.resume" :download="profile.resumeName" class="btn btn-primary mt-5 w-full">Download résumé</a>
      </div>
    </Transition>
  </header>
</template>
