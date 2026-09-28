<script setup>
import { profile, recruiter, marquee } from '../data/profile'
import AppIcon from './AppIcon.vue'

// Illustrative snippet of the supervised payment-reconciliation pattern described in the case studies.
const code = [
  ['k', 'defmodule'], [' ', ' '], ['t', 'Payments.Reconciler'], [' ', ' '], ['k', 'do'], ['n', ''],
  [' ', '  '], ['k', 'use'], [' ', ' GenServer, '], ['a', 'restart:'], [' ', ' '], ['s', ':permanent'], ['n', ''],
  ['n', ''],
  [' ', '  '], ['c', '# every few minutes, re-check pending gateway transactions'], ['n', ''],
  [' ', '  '], ['k', 'def'], [' ', ' handle_info('], ['s', ':sweep'], [' ', ', state) '], ['k', 'do'], ['n', ''],
  [' ', '    Payments.pending_older_than('], ['s', '~M[15]'], [' ', ')'], ['n', ''],
  [' ', '    |> Enum.each(&verify_and_admit/1)'], ['n', ''],
  ['n', ''],
  [' ', '    Process.send_after(self(), '], ['s', ':sweep'], [' ', ', @interval)'], ['n', ''],
  [' ', '    {'], ['s', ':noreply'], [' ', ', state}'], ['n', ''],
  [' ', '  '], ['k', 'end'], ['n', ''],
  ['k', 'end'],
]
const tone = { k: 'text-[#c678dd]', t: 'text-[#e5c07b]', s: 'text-[#98c379]', a: 'text-[#61afef]', c: 'text-[#7f848e] italic', ' ': 'text-[#d7dae0]' }
</script>

<template>
  <section id="top" class="relative overflow-hidden bg-page pt-28 sm:pt-36">
    <div class="wrap text-center">
      <p v-reveal class="inline-flex items-center gap-2 rounded-full border border-line px-3.5 py-1.5 text-[13px] text-mute">
        <span class="relative flex h-2 w-2"><span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60"></span><span class="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span></span>
        {{ recruiter.availability }}
      </p>

      <h1 v-reveal="80" class="display mt-6">
        {{ profile.name }}.<br />
        <span class="gradient-text">Software that businesses run on.</span>
      </h1>

      <p v-reveal="160" class="lede mx-auto mt-6 max-w-2xl">
        {{ profile.role }} in {{ profile.location.split(',')[0] }} with six years of shipping multi-tenant SaaS on
        <span class="text-ink">Elixir, Phoenix, PostgreSQL</span> and <span class="text-ink">Vue&nbsp;3</span>.
      </p>

      <div v-reveal="240" class="mt-9 flex flex-wrap items-center justify-center gap-4">
        <a href="#work" class="btn btn-primary px-6 py-3 text-[17px]">See my work</a>
        <a :href="profile.resume" :download="profile.resumeName" class="btn btn-ghost px-6 py-3 text-[17px]">
          <AppIcon name="download" class="h-4 w-4" /> Download résumé
        </a>
      </div>
    </div>

    <!-- tech strip -->
    <div v-reveal="320" class="marquee mt-16 overflow-hidden" aria-label="Technologies I use">
      <div class="marquee-track flex w-max gap-3">
        <span v-for="(t, i) in [...marquee, ...marquee]" :key="i" :aria-hidden="i >= marquee.length"
              class="whitespace-nowrap rounded-full bg-alt px-4 py-2 text-[15px] font-medium text-ink/80">{{ t }}</span>
      </div>
    </div>

    <!-- code window -->
    <div class="wrap mt-14 pb-20 sm:mt-20 sm:pb-28">
      <div v-reveal class="relative mx-auto max-w-3xl">
        <div class="pointer-events-none absolute -inset-10 -z-0 rounded-[48px] bg-gradient-to-tr from-[#0071e3]/25 via-[#7a5af8]/20 to-[#e5484d]/20 blur-3xl"></div>
        <figure class="relative overflow-hidden rounded-2xl bg-[#1e2127] text-left shadow-2xl ring-1 ring-black/10">
          <div class="flex items-center gap-2 border-b border-white/10 px-4 py-3">
            <span class="h-3 w-3 rounded-full bg-[#ff5f57]"></span><span class="h-3 w-3 rounded-full bg-[#febc2e]"></span><span class="h-3 w-3 rounded-full bg-[#28c840]"></span>
            <span class="ml-3 font-mono text-[12px] text-[#7f848e]">lib/payments/reconciler.ex</span>
          </div>
          <pre class="overflow-x-auto p-5 font-mono text-[12.5px] leading-6 sm:p-6 sm:text-[13.5px]"><code><template v-for="(tok, i) in code" :key="i"><br v-if="tok[0] === 'n'" /><span v-else :class="tone[tok[0]]">{{ tok[1] }}</span></template></code></pre>
        </figure>
        <p class="mt-5 text-center text-[14px] text-mute">A pattern from my payment work: a supervised process that reconciles pending transactions, so no paid customer is left waiting.</p>
      </div>
    </div>
  </section>
</template>
