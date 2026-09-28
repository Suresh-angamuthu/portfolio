<script setup>
import { ref, computed, watch, nextTick, onMounted, onUnmounted } from 'vue'
import { profile, projects } from '../data/profile'
import { paletteOpen, activeProject, toggleTheme } from '../store'
import ProjectIcon from './ProjectIcon.vue'
import AppIcon from './AppIcon.vue'

const query = ref('')
const cursor = ref(0)
const input = ref(null)

const go = (hash) => () => document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' })
const download = () => {
  const a = Object.assign(document.createElement('a'), { href: profile.resume, download: profile.resumeName })
  a.click()
}

const commands = [
  { group: 'Actions', label: 'Download résumé', icon: 'download', run: download },
  { group: 'Actions', label: `Email ${profile.name}`, icon: 'mail', run: () => (location.href = `mailto:${profile.email}`) },
  { group: 'Actions', label: 'Copy email address', icon: 'copy', run: () => navigator.clipboard?.writeText(profile.email) },
  { group: 'Actions', label: 'Open LinkedIn', icon: 'linkedin', run: () => window.open(profile.linkedin, '_blank', 'noopener') },
  { group: 'Actions', label: 'Toggle dark mode', icon: 'moon', run: toggleTheme },
  ...projects.map((p) => ({
    group: 'Case studies', label: `${p.name}: ${p.title}`, project: p.id, run: () => (activeProject.value = p),
    // search the whole project, so "payments" or "LiveView" finds the right case study
    keywords: [p.domain, p.summary, ...p.stack, ...p.highlights].join(' '),
  })),
  { group: 'Jump to', label: 'For recruiters', icon: 'briefcase', run: go('#recruiters') },
  { group: 'Jump to', label: 'Selected work', icon: 'layers', run: go('#work') },
  { group: 'Jump to', label: 'How I build', icon: 'route', run: go('#process') },
  { group: 'Jump to', label: 'About', icon: 'spark', run: go('#about') },
  { group: 'Jump to', label: 'Skills', icon: 'table', run: go('#skills') },
  { group: 'Jump to', label: 'Experience', icon: 'doc', run: go('#experience') },
  { group: 'Jump to', label: 'Contact', icon: 'mail', run: go('#contact') },
]

const results = computed(() => {
  const q = query.value.trim().toLowerCase()
  return q ? commands.filter((c) => `${c.group} ${c.label} ${c.keywords || ''}`.toLowerCase().includes(q)) : commands
})
const grouped = computed(() => {
  const out = []
  results.value.forEach((c, i) => {
    if (!out.length || out[out.length - 1].group !== c.group) out.push({ group: c.group, items: [] })
    out[out.length - 1].items.push({ ...c, i })
  })
  return out
})

function run(c) {
  paletteOpen.value = false
  nextTick(c.run)
}

function onKey(e) {
  if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
    e.preventDefault()
    paletteOpen.value = !paletteOpen.value
    return
  }
  if (!paletteOpen.value) return
  if (e.key === 'Escape') paletteOpen.value = false
  else if (e.key === 'ArrowDown') { e.preventDefault(); cursor.value = (cursor.value + 1) % results.value.length }
  else if (e.key === 'ArrowUp') { e.preventDefault(); cursor.value = (cursor.value - 1 + results.value.length) % results.value.length }
  else if (e.key === 'Enter' && results.value[cursor.value]) run(results.value[cursor.value])
}

watch(query, () => (cursor.value = 0))
watch(cursor, () => nextTick(() => document.querySelector('[data-active="true"]')?.scrollIntoView({ block: 'nearest' })))
watch(paletteOpen, async (open) => {
  if (!open) return
  query.value = ''
  cursor.value = 0
  await nextTick()
  input.value?.focus()
})

onMounted(() => window.addEventListener('keydown', onKey))
onUnmounted(() => window.removeEventListener('keydown', onKey))
</script>

<template>
  <Teleport to="body">
    <Transition enter-from-class="opacity-0" leave-to-class="opacity-0" enter-active-class="transition duration-200" leave-active-class="transition duration-150">
      <div v-if="paletteOpen" class="fixed inset-0 z-[60] flex items-start justify-center bg-black/40 p-4 pt-[12vh] backdrop-blur-sm" @click.self="paletteOpen = false">
        <div role="dialog" aria-modal="true" aria-label="Quick search" class="w-full max-w-xl overflow-hidden rounded-2xl bg-page shadow-2xl ring-1 ring-line">
          <div class="flex items-center gap-3 border-b border-line px-4">
            <AppIcon name="search" class="h-5 w-5 flex-none text-mute" />
            <input ref="input" v-model="query" type="text" placeholder="Search projects, sections, actions…"
                   class="h-14 w-full bg-transparent text-[17px] text-ink outline-none placeholder:text-mute" aria-label="Search" />
            <kbd class="rounded border border-line px-1.5 text-[11px] text-mute">Esc</kbd>
          </div>

          <div class="max-h-[55vh] overflow-y-auto p-2">
            <p v-if="!results.length" class="px-3 py-8 text-center text-[15px] text-mute">No results for “{{ query }}”.</p>
            <div v-for="g in grouped" :key="g.group" class="mb-1">
              <p class="px-3 pb-1 pt-3 text-[12px] font-medium text-mute">{{ g.group }}</p>
              <button v-for="c in g.items" :key="c.label" @click="run(c)" @mousemove="cursor = c.i" :data-active="cursor === c.i"
                      class="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-[15px] transition"
                      :class="cursor === c.i ? 'bg-accent text-white' : 'text-ink'">
                <ProjectIcon v-if="c.project" :id="c.project" class="h-7 w-7 flex-none shadow-none" />
                <span v-else class="grid h-7 w-7 flex-none place-items-center rounded-lg" :class="cursor === c.i ? 'bg-white/20' : 'bg-alt'">
                  <AppIcon :name="c.icon" class="h-4 w-4" />
                </span>
                <span class="truncate">{{ c.label }}</span>
                <AppIcon v-if="cursor === c.i" name="arrow" class="ml-auto h-4 w-4 flex-none" />
              </button>
            </div>
          </div>

          <div class="flex gap-4 border-t border-line px-4 py-2.5 text-[12px] text-mute">
            <span>↑↓ to move</span><span>↵ to open</span><span>Esc to close</span>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>
