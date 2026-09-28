<script setup>
// Minimal stroke icon set (24px grid, currentColor) so the site needs no icon library.
defineProps({ name: { type: String, required: true } })

const paths = {
  search: 'M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14zm9 16-4.3-4.3',
  sun: 'M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM12 2v2m0 16v2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M2 12h2m16 0h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4',
  moon: 'M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z',
  menu: 'M4 8h16M4 16h16',
  close: 'M6 6l12 12M18 6 6 18',
  arrow: 'M5 12h14m-6-6 6 6-6 6',
  chevronL: 'm15 18-6-6 6-6',
  chevronR: 'm9 18 6-6-6-6',
  download: 'M12 4v11m-5-5 5 5 5-5M5 20h14',
  mail: 'M4 6h16v12H4zm0 0 8 7 8-7',
  copy: 'M9 9h11v11H9zM5 15H4V4h11v1',
  phone: 'M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2',
  pin: 'M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21zm0-9a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z',
  linkedin: 'M4 9h4v11H4zM6 4a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm5 5h3.8v1.6c.6-1 1.9-1.9 3.7-1.9 3.3 0 4.5 2 4.5 5.2V20h-4v-5.4c0-1.5-.3-2.8-1.9-2.8s-2.1 1.2-2.1 2.8V20h-4z',
  check: 'm5 12 5 5L20 7',
  doc: 'M7 3h7l5 5v13H7zM14 3v5h5M10 13h6m-6 4h6',
  briefcase: 'M4 8h16v11H4zM9 8V5h6v3M4 13h16',
  route: 'M6 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM18 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM6 15V9a4 4 0 0 1 4-4h6M18 9v6a4 4 0 0 1-4 4H8',
  card: 'M3 6h18v12H3zM3 10h18M7 15h3',
  layers: 'm12 3 9 5-9 5-9-5 9-5zm-9 9 9 5 9-5M3 16l9 5 9-5',
  shield: 'M12 3 4 6v6c0 5 3.4 8.4 8 9 4.6-.6 8-4 8-9V6l-8-3zm-3 9 2 2 4-4',
  table: 'M3 5h18v14H3zM3 10h18M3 15h18M9 5v14',
  bolt: 'M13 2 4 14h7l-1 8 9-12h-7l1-8z',
  grad: 'm2 9 10-5 10 5-10 5L2 9zm4 2v5c3 2.5 9 2.5 12 0v-5M22 9v6',
  building: 'M4 21V4h10v17M14 9h6v12M8 8h2m-2 4h2m-2 4h2M3 21h18',
  leaf: 'M5 19C5 10 11 4 20 4c0 9-6 15-15 15zm0 0 8-8',
  bag: 'M5 8h14l-1 13H6L5 8zm4 0V6a3 3 0 0 1 6 0v2',
  gem: 'M6 3h12l4 6-10 12L2 9l4-6zM2 9h20M9 3l3 18 3-18',
  sprout: 'M12 21v-9m0 0C12 7 8 5 4 5c0 4 3 7 8 7zm0 0c0-4 3-7 8-7 0 4-3 7-8 7',
  spark: 'M12 3v4m0 10v4M3 12h4m10 0h4M6 6l2.5 2.5M15.5 15.5 18 18M6 18l2.5-2.5M15.5 8.5 18 6',
}
</script>

<template>
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path :d="paths[name]" />
  </svg>
</template>
