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
  <section id="contact" class="relative overflow-hidden bg-black py-28 text-center text-white sm:py-36">
    <div class="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-[#0071e3]/30 via-[#7a5af8]/25 to-[#e5484d]/20 blur-3xl"></div>
    <div class="wrap relative">
      <p v-reveal class="eyebrow text-white/60">{{ recruiter.availability }}</p>
      <h2 v-reveal="80" class="display mt-3">Let's build<br /><span class="gradient-text">something reliable.</span></h2>
      <p v-reveal="160" class="lede mx-auto mt-6 max-w-xl text-white/60">The fastest way to reach me is email.</p>

      <div v-reveal="240" class="mt-10 flex flex-wrap justify-center gap-4">
        <a :href="`mailto:${profile.email}`" class="btn btn-primary px-6 py-3 text-[17px]"><AppIcon name="mail" class="h-4 w-4" /> Email me</a>
        <button @click="copyEmail" class="btn border border-white/25 px-6 py-3 text-[17px] text-white hover:bg-white/10">
          <AppIcon :name="copied ? 'check' : 'copy'" class="h-4 w-4" /> {{ copied ? 'Copied' : profile.email }}
        </button>
      </div>

      <div v-reveal="320" class="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-3 text-[15px] text-white/60">
        <a :href="profile.linkedin" target="_blank" rel="noopener" class="inline-flex items-center gap-2 hover:text-white"><AppIcon name="linkedin" class="h-4 w-4" /> LinkedIn</a>
        <a :href="`tel:${profile.phone.replace(/\s/g, '')}`" class="inline-flex items-center gap-2 hover:text-white"><AppIcon name="phone" class="h-4 w-4" /> {{ profile.phone }}</a>
        <span class="inline-flex items-center gap-2"><AppIcon name="pin" class="h-4 w-4" /> {{ profile.location }}</span>
      </div>
    </div>
  </section>
</template>
