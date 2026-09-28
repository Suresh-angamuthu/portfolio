import { ref } from 'vue'

// Small shared UI state: which case study is open, the command palette, and the theme.
export const activeProject = ref(null)
export const paletteOpen = ref(false)
export const dark = ref(document.documentElement.classList.contains('dark'))

export function toggleTheme() {
  dark.value = !dark.value
  document.documentElement.classList.toggle('dark', dark.value)
  try { localStorage.setItem('theme', dark.value ? 'dark' : 'light') } catch (e) { /* storage blocked */ }
}
