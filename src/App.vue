<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import RecruiterSection from './components/RecruiterSection.vue'
import StatsSection from './components/StatsSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import ProcessSection from './components/ProcessSection.vue'
import AboutSection from './components/AboutSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import ContactSection from './components/ContactSection.vue'
import SiteFooter from './components/SiteFooter.vue'
import ProjectModal from './components/ProjectModal.vue'
import CommandPalette from './components/CommandPalette.vue'
import { activeProject } from './store'

// thin reading-progress bar under the nav
const progress = ref(0)
const onScroll = () => {
  const h = document.documentElement
  progress.value = h.scrollTop / Math.max(1, h.scrollHeight - h.clientHeight)
}
onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <div class="fixed inset-x-0 top-0 z-50 h-0.5 origin-left bg-accent" :style="{ transform: `scaleX(${progress})` }" aria-hidden="true"></div>
  <NavBar />
  <main>
    <HeroSection />
    <RecruiterSection />
    <StatsSection />
    <ProjectsSection />
    <ProcessSection />
    <AboutSection />
    <SkillsSection />
    <ExperienceSection />
    <ContactSection />
  </main>
  <SiteFooter />
  <ProjectModal :project="activeProject" @close="activeProject = null" />
  <CommandPalette />
</template>
