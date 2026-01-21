<script setup>
import Navbar from './components/NavBar.vue'
import { RouterView } from 'vue-router'
import Footer from './components/Footer.vue'
import { SpeedInsights } from '@vercel/speed-insights/vue'
import { Analytics } from '@vercel/analytics/vue'
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
    <Analytics />
</template>

<style scoped></style>
