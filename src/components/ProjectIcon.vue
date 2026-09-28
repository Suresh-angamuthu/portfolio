<script setup>
import { looks } from '../looks'
import AppIcon from './AppIcon.vue'

defineProps({ id: String })
</script>

<template>
  <div class="grid place-items-center rounded-[22%] text-white shadow-lg shadow-black/10"
       :style="{ backgroundImage: `linear-gradient(145deg, ${looks[id].from}, ${looks[id].to})` }">
    <AppIcon :name="looks[id].icon" class="h-1/2 w-1/2" />
  </div>
</template>
