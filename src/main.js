import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

const app = createApp(App)

// Fire once when an element scrolls into view; falls back to "visible now" without IntersectionObserver.
function onVisible(el, cb, threshold = 0.15) {
  if (!('IntersectionObserver' in window)) return cb()
  const io = new IntersectionObserver(([e]) => {
    if (e.isIntersecting) { cb(); io.disconnect() }
  }, { threshold })
  io.observe(el)
}

// v-reveal: fade and lift into view. v-reveal="120" adds a 120ms stagger delay.
app.directive('reveal', {
  mounted(el, { value }) {
    el.classList.add('reveal')
    if (value) el.style.setProperty('--d', `${value}ms`)
    onVisible(el, () => el.classList.add('shown'))
  },
})

// v-count: count a stat such as "5,000+" or "40%" up from zero when it scrolls into view.
app.directive('count', {
  mounted(el, { value }) {
    const m = String(value).match(/^(\D*)([\d,]+)(.*)$/)
    el.textContent = value
    if (!m || matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const [, pre, num, post] = m
    const target = Number(num.replace(/,/g, ''))
    const fmt = (n) => pre + n.toLocaleString('en-US') + post
    el.textContent = fmt(0)
    onVisible(el, () => {
      const start = performance.now()
      const tick = (t) => {
        const p = Math.min((t - start) / 1400, 1)
        el.textContent = fmt(Math.round(target * (1 - Math.pow(1 - p, 3))))
        if (p < 1) requestAnimationFrame(tick)
      }
      requestAnimationFrame(tick)
    }, 0.5)
  },
})

app.mount('#app')
