<script setup>
import { ref } from 'vue'
import { profile } from '../data/profile'

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
  <section id="contact" class="section">
    <div v-reveal class="relative overflow-hidden rounded-3xl bg-navy-950 px-6 py-14 text-center text-white sm:px-12">
      <div class="pointer-events-none absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-brand-500/20 blur-3xl"></div>
      <p class="relative font-mono text-sm text-brand-300">05 / Contact</p>
      <h2 class="relative mt-2 text-3xl font-extrabold sm:text-4xl">Let's build something reliable.</h2>
      <p class="relative mx-auto mt-4 max-w-xl text-slate-300">I'm open to senior full-stack and backend roles. The fastest way to reach me is email.</p>

      <div class="relative mt-8 flex flex-wrap justify-center gap-3">
        <a :href="`mailto:${profile.email}`" class="rounded-xl bg-brand-500 px-5 py-3 font-semibold text-navy-950 hover:bg-brand-300">{{ profile.email }}</a>
        <button @click="copyEmail" class="rounded-xl border border-white/20 px-5 py-3 font-semibold hover:bg-white/10">
          {{ copied ? 'Copied!' : 'Copy email' }}
        </button>
      </div>
      <div class="relative mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-slate-300">
        <a :href="profile.linkedin" target="_blank" rel="noopener" class="hover:text-white">LinkedIn</a>
        <a :href="`tel:${profile.phone.replace(/\s/g, '')}`" class="hover:text-white">{{ profile.phone }}</a>
        <span>{{ profile.location }}</span>
      </div>
    </div>
  </section>
</template>
