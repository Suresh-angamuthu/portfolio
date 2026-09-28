<script setup>
import { watch, onUnmounted, ref, nextTick, computed } from 'vue'
import { projects } from '../data/profile'
import { activeProject } from '../store'
import ProjectIcon from './ProjectIcon.vue'
import AppIcon from './AppIcon.vue'

const props = defineProps({ project: Object })
const emit = defineEmits(['close'])
const closeBtn = ref(null)
const sheet = ref(null)

const index = computed(() => projects.findIndex((p) => p.id === props.project?.id))
function go(step) {
  activeProject.value = projects[(index.value + step + projects.length) % projects.length]
  sheet.value?.scrollTo({ top: 0 })
}

const onKey = (e) => {
  if (e.key === 'Escape') emit('close')
  if (e.key === 'ArrowRight') go(1)
  if (e.key === 'ArrowLeft') go(-1)
}

watch(() => props.project, async (p, prev) => {
  document.body.style.overflow = p ? 'hidden' : ''
  if (p && !prev) {
    window.addEventListener('keydown', onKey)
    await nextTick()
    closeBtn.value?.focus()
  } else if (!p) {
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
    <Transition enter-from-class="opacity-0" leave-to-class="opacity-0" enter-active-class="transition duration-300" leave-active-class="transition duration-200">
      <div v-if="project" class="fixed inset-0 z-50 flex items-end justify-center bg-black/50 backdrop-blur-md sm:items-center sm:p-6"
           @click.self="emit('close')">
        <div ref="sheet" role="dialog" aria-modal="true" :aria-label="`${project.name} case study`"
             class="max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-t-[28px] bg-page shadow-2xl sm:rounded-[28px]">
          <div class="sticky top-0 z-10 flex items-center justify-between border-b border-line bg-glass px-5 py-3 backdrop-blur-xl sm:px-8">
            <div class="flex items-center gap-1">
              <button @click="go(-1)" class="grid h-9 w-9 place-items-center rounded-full text-mute hover:bg-alt hover:text-ink" aria-label="Previous project"><AppIcon name="chevronL" class="h-5 w-5" /></button>
              <button @click="go(1)" class="grid h-9 w-9 place-items-center rounded-full text-mute hover:bg-alt hover:text-ink" aria-label="Next project"><AppIcon name="chevronR" class="h-5 w-5" /></button>
              <span class="ml-2 text-[13px] text-mute">{{ index + 1 }} of {{ projects.length }}</span>
            </div>
            <button ref="closeBtn" @click="emit('close')" aria-label="Close"
                    class="grid h-9 w-9 place-items-center rounded-full bg-alt text-mute hover:text-ink">
              <AppIcon name="close" class="h-4 w-4" />
            </button>
          </div>

          <div class="px-6 pb-10 pt-8 sm:px-12 sm:pt-12">
            <div class="flex flex-col items-center text-center">
              <ProjectIcon :id="project.id" class="h-20 w-20" />
              <p class="mt-5 text-[14px] font-semibold uppercase tracking-wider text-mute">{{ project.domain }}</p>
              <h3 class="mt-1 text-[40px] font-semibold leading-none tracking-[-0.03em] sm:text-[56px]">{{ project.name }}</h3>
              <p class="mt-3 text-[19px] tracking-tight text-mute sm:text-[21px]">{{ project.title }}</p>
              <p class="mt-6 max-w-2xl text-[17px] leading-relaxed">{{ project.summary }}</p>
            </div>

            <div class="mt-10 grid gap-4">
              <section v-for="d in project.details" :key="d.h" class="rounded-[22px] bg-alt p-6 sm:p-8">
                <h4 class="text-[21px] font-semibold tracking-tight">{{ d.h }}</h4>
                <p v-if="d.p" class="mt-3 text-[17px] leading-relaxed text-mute">{{ d.p }}</p>
                <ul v-if="d.list" class="mt-4 space-y-3">
                  <li v-for="item in d.list" :key="item" class="flex gap-3 text-[17px] leading-relaxed text-mute">
                    <AppIcon name="check" class="mt-1.5 h-4 w-4 flex-none text-link" /><span>{{ item }}</span>
                  </li>
                </ul>
              </section>
            </div>

            <div class="mt-8">
              <p class="text-[13px] font-medium uppercase tracking-wider text-mute">Built with</p>
              <div class="mt-3 flex flex-wrap gap-2">
                <span v-for="t in project.stack" :key="t" class="pill">{{ t }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>
