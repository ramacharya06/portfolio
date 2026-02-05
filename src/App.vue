<script setup>
import Navbar from './components/NavBar.vue'
import { RouterView } from 'vue-router'
import Footer from './components/Footer.vue'
import { SpeedInsights } from '@vercel/speed-insights/vue'
import Lenis from 'lenis'
import { onMounted, onUnmounted } from 'vue'

import 'lenis/dist/lenis.css'

let lenis

onMounted(() => {
  lenis = new Lenis()

  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }

  requestAnimationFrame(raf)
})

onUnmounted(() => {
  lenis.destroy()
})
</script>

<template>
  <div id="app">
    <Navbar class="sticky top-0 z-100" />
    <main class="container-fluid p-0 transition-all transition-[0.5s]">
      <RouterView />
    </main>
  </div>
  <Footer />
  <SpeedInsights />
</template>

<style scoped></style>
