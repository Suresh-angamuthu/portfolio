<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { profile } from '../data/profile'

const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
]

const open = ref(false)
const scrolled = ref(false)
const dark = ref(false)

const onScroll = () => (scrolled.value = window.scrollY > 10)
// solid bar once scrolled or while the mobile menu is open; transparent over the dark hero otherwise
const solid = computed(() => scrolled.value || open.value)

function toggleTheme() {
  dark.value = !dark.value
  document.documentElement.classList.toggle('dark', dark.value)
  try { localStorage.setItem('theme', dark.value ? 'dark' : 'light') } catch (e) { /* storage blocked */ }
}

onMounted(() => {
  dark.value = document.documentElement.classList.contains('dark')
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
})
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <header
    class="fixed inset-x-0 top-0 z-40 transition-colors"
    :class="solid ? 'border-b border-slate-200 bg-white/90 backdrop-blur dark:border-white/10 dark:bg-navy-950/90' : ''"
  >
    <nav class="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
      <a href="#top" class="flex items-center gap-2 font-extrabold dark:text-white" :class="solid ? 'text-navy-900' : 'text-white'">
        <span class="grid h-8 w-8 place-items-center rounded-lg bg-navy-900 text-sm text-brand-300 dark:bg-brand-500/15">SA</span>
        <span class="hidden sm:inline">{{ profile.name }}</span>
      </a>

      <div class="hidden items-center gap-7 md:flex">
        <a v-for="l in links" :key="l.href" :href="l.href"
           class="text-sm font-medium dark:text-slate-300 dark:hover:text-brand-300"
           :class="solid ? 'text-slate-600 hover:text-brand-700' : 'text-slate-200 hover:text-brand-300'">{{ l.label }}</a>
      </div>

      <div class="flex items-center gap-2">
        <button @click="toggleTheme" :aria-label="dark ? 'Switch to light theme' : 'Switch to dark theme'"
                class="grid h-9 w-9 place-items-center rounded-lg dark:text-slate-300 dark:hover:bg-white/10"
                :class="solid ? 'text-slate-600 hover:bg-slate-100' : 'text-slate-200 hover:bg-white/10'">
          <svg v-if="dark" class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M2 12h2m16 0h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>
          <svg v-else class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>
        </button>
        <button @click="open = !open" class="grid h-9 w-9 place-items-center rounded-lg md:hidden dark:text-slate-300 dark:hover:bg-white/10"
                :class="solid ? 'text-slate-600 hover:bg-slate-100' : 'text-slate-200 hover:bg-white/10'"
                :aria-expanded="open" aria-label="Toggle menu">
          <svg class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path v-if="open" d="M6 6l12 12M18 6 6 18"/><path v-else d="M4 7h16M4 12h16M4 17h16"/>
          </svg>
        </button>
      </div>
    </nav>

    <div v-if="open" class="border-t border-slate-200 px-4 pb-4 md:hidden dark:border-white/10">
      <a v-for="l in links" :key="l.href" :href="l.href" @click="open = false"
         class="block py-3 font-medium text-slate-700 dark:text-slate-200">{{ l.label }}</a>
    </div>
  </header>
</template>
