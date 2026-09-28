<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { process } from '../data/profile'

// the step crossing the middle of the viewport is "active"
const active = ref(0)
const items = ref([])
let io

onMounted(() => {
  if (!('IntersectionObserver' in window)) return
  io = new IntersectionObserver((entries) => {
    entries.forEach((e) => { if (e.isIntersecting) active.value = Number(e.target.dataset.i) })
  }, { rootMargin: '-45% 0px -45% 0px' })
  items.value.forEach((el) => io.observe(el))
})
onUnmounted(() => io?.disconnect())
</script>

<template>
  <section id="process" class="band bg-black text-white">
    <div class="wrap grid gap-12 lg:grid-cols-2 lg:gap-20">
      <div class="lg:sticky lg:top-32 lg:self-start">
        <p class="eyebrow text-white/60">How I build</p>
        <h2 class="headline mt-2">From first call<br />to production.</h2>
        <p class="lede mt-5 text-white/60">The same path on every product, whether it is a university ERP or a shop-floor tracker.</p>
        <p class="mt-10 hidden font-semibold leading-none tracking-[-0.05em] text-white/10 lg:block" style="font-size: 160px">
          0{{ active + 1 }}
        </p>
      </div>

      <ol class="space-y-4">
        <li v-for="(s, i) in process" :key="s.step" ref="items" :data-i="i"
            class="rounded-[28px] p-7 transition duration-500 sm:p-9"
            :class="active === i ? 'bg-white/10' : 'bg-white/[0.03] lg:opacity-40'">
          <p class="text-[14px] font-semibold text-[#2997ff]">Step {{ i + 1 }}</p>
          <h3 class="mt-2 text-[28px] font-semibold tracking-tight sm:text-[32px]">{{ s.step }}</h3>
          <p class="mt-3 text-[17px] leading-relaxed text-white/70">{{ s.d }}</p>
        </li>
      </ol>
    </div>
  </section>
</template>
