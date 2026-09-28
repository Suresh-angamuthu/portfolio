<script setup>
import { profile, stats } from '../data/profile'
</script>

<template>
  <section id="top" class="relative overflow-hidden bg-navy-950 text-white">
    <!-- subtle grid backdrop -->
    <div class="pointer-events-none absolute inset-0 opacity-[0.07]"
         style="background-image: linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px); background-size: 44px 44px;"></div>
    <div class="pointer-events-none absolute -right-40 -top-40 h-[28rem] w-[28rem] rounded-full bg-brand-500/20 blur-3xl"></div>

    <div class="relative mx-auto max-w-6xl px-4 pb-16 pt-32 sm:px-6 lg:pb-24 lg:pt-40">
      <p class="font-mono text-sm text-brand-300">Hi, I'm {{ profile.name }} &mdash; based in {{ profile.location }}</p>
      <h1 class="mt-4 max-w-3xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
        {{ profile.role }} building <span class="text-brand-300">reliable SaaS</span> end to end.
      </h1>
      <p class="mt-6 max-w-2xl text-lg text-slate-300">{{ profile.tagline }}</p>

      <div class="mt-9 flex flex-wrap gap-3">
        <a href="#projects" class="rounded-xl bg-brand-500 px-5 py-3 font-semibold text-navy-950 transition hover:bg-brand-300">View my work</a>
        <a :href="profile.resume" :download="profile.resumeName" class="rounded-xl border border-white/20 px-5 py-3 font-semibold transition hover:bg-white/10">Download resume</a>
        <a :href="`mailto:${profile.email}`" class="rounded-xl px-5 py-3 font-semibold text-slate-300 transition hover:text-white">Get in touch &rarr;</a>
      </div>

      <dl class="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 lg:grid-cols-4">
        <div v-for="s in stats" :key="s.label" class="bg-navy-950/80 p-5 sm:p-6">
          <dt class="text-sm text-slate-400">{{ s.label }}</dt>
          <dd class="mt-1 text-3xl font-extrabold text-white sm:text-4xl">{{ s.value }}</dd>
        </div>
      </dl>
    </div>
  </section>
</template>
