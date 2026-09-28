import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

const app = createApp(App)

// v-reveal: fade sections in as they scroll into view
app.directive('reveal', {
  mounted(el) {
    el.classList.add('reveal')
    if (!('IntersectionObserver' in window)) return el.classList.add('shown')
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { el.classList.add('shown'); io.disconnect() }
    }, { threshold: 0.12 })
    io.observe(el)
  },
})

app.mount('#app')
