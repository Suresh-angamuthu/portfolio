<script setup>
import { ref } from 'vue'
import { profile, recruiter } from '../data/profile'
import AppIcon from './AppIcon.vue'

const copied = ref(false)
async function copyEmail() {
  try {
    await navigator.clipboard.writeText(profile.email)
    copied.value = true
    setTimeout(() => (copied.value = false), 2000)
  } catch (e) {
    window.location.href = `mailto:${profile.email}`
  }
}
</script>

<template>
  <section id="recruiters" class="band bg-alt">
    <div class="wrap">
      <div v-reveal class="text-center">
        <p class="eyebrow">For recruiters</p>
        <h2 class="headline mt-2">The 30-second version.</h2>
      </div>

      <div v-reveal="100" class="card mt-12 grid overflow-hidden lg:grid-cols-5">
        <dl class="grid gap-px bg-line sm:grid-cols-2 lg:col-span-3">
          <div v-for="f in recruiter.facts" :key="f.k" class="bg-tile p-6 sm:p-7">
            <dt class="text-[13px] font-medium uppercase tracking-wider text-mute">{{ f.k }}</dt>
            <dd class="mt-1.5 text-[19px] font-semibold leading-snug tracking-tight">{{ f.v }}</dd>
          </div>
        </dl>

        <div class="flex flex-col justify-between gap-8 bg-black p-7 text-white sm:p-9 lg:col-span-2">
          <div>
            <p class="inline-flex items-center gap-2 text-[13px] text-emerald-400">
              <span class="h-2 w-2 rounded-full bg-emerald-400"></span> {{ recruiter.availability }}
            </p>
            <p class="mt-4 text-[24px] font-semibold leading-tight tracking-tight">{{ recruiter.summary }}</p>
          </div>
          <div class="space-y-3">
            <a :href="profile.resume" :download="profile.resumeName" class="btn btn-primary w-full py-3">
              <AppIcon name="download" class="h-4 w-4" /> Download résumé (PDF)
            </a>
            <div class="grid grid-cols-2 gap-3">
              <button @click="copyEmail" class="btn w-full bg-white/10 py-3 text-white hover:bg-white/20">
                <AppIcon :name="copied ? 'check' : 'copy'" class="h-4 w-4" /> {{ copied ? 'Copied' : 'Copy email' }}
              </button>
              <a :href="profile.linkedin" target="_blank" rel="noopener" class="btn w-full bg-white/10 py-3 text-white hover:bg-white/20">
                <AppIcon name="linkedin" class="h-4 w-4" /> LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
