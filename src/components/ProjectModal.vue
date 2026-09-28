<script setup>
import { watch, onUnmounted, ref, nextTick } from 'vue'

const props = defineProps({ project: Object })
const emit = defineEmits(['close'])
const closeBtn = ref(null)

const onKey = (e) => e.key === 'Escape' && emit('close')

watch(() => props.project, async (p) => {
  document.body.style.overflow = p ? 'hidden' : ''
  if (p) {
    window.addEventListener('keydown', onKey)
    await nextTick()
    closeBtn.value?.focus()
  } else {
    window.removeEventListener('keydown', onKey)
  }
})

onUnmounted(() => {
  document.body.style.overflow = ''
  window.removeEventListener('keydown', onKey)
})
</script>

<template>
  <Teleport to="body">
    <Transition enter-from-class="opacity-0" leave-to-class="opacity-0" enter-active-class="transition" leave-active-class="transition">
      <div v-if="project" class="fixed inset-0 z-50 flex items-end justify-center bg-navy-950/70 p-0 backdrop-blur-sm sm:items-center sm:p-6"
           @click.self="emit('close')">
        <div role="dialog" aria-modal="true" :aria-label="project.title"
             class="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-t-2xl bg-white p-6 shadow-2xl sm:rounded-2xl sm:p-8 dark:bg-navy-900">
          <div class="flex items-start justify-between gap-4">
            <div>
              <span class="chip">{{ project.domain }}</span>
              <h3 class="mt-3 text-2xl font-extrabold text-navy-900 dark:text-white">{{ project.name }}</h3>
              <p class="text-slate-500 dark:text-slate-400">{{ project.title }}</p>
            </div>
            <button ref="closeBtn" @click="emit('close')" aria-label="Close"
                    class="grid h-9 w-9 flex-none place-items-center rounded-lg text-slate-500 hover:bg-slate-100 dark:hover:bg-white/10">
              <svg class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M6 6l12 12M18 6 6 18"/></svg>
            </button>
          </div>

          <div v-for="d in project.details" :key="d.h" class="mt-6">
            <h4 class="font-mono text-sm text-brand-700 dark:text-brand-300">{{ d.h }}</h4>
            <p v-if="d.p" class="mt-2 leading-relaxed text-slate-700 dark:text-slate-300">{{ d.p }}</p>
            <ul v-if="d.list" class="mt-2 space-y-2">
              <li v-for="item in d.list" :key="item" class="flex gap-2 text-slate-700 dark:text-slate-300">
                <span class="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-brand-500"></span><span>{{ item }}</span>
              </li>
            </ul>
          </div>

          <div class="mt-6 flex flex-wrap gap-1.5 border-t border-slate-200 pt-5 dark:border-white/10">
            <span v-for="t in project.stack" :key="t" class="rounded-md bg-slate-100 px-2 py-0.5 font-mono text-xs text-slate-600 dark:bg-white/5 dark:text-slate-400">{{ t }}</span>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>
