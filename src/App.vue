<script setup>
  import Navbar from './components/NavBar.vue'
  import { RouterView } from 'vue-router'
  import Footer from './components/Footer.vue'
</script>

<template>
  <div id="app">
    <Navbar class="sticky top-0 z-100"/>
    <main class="container-fluid p-0">
      <RouterView />
    </main>
  </div>
<Footer />
</template>

<style scoped></style>
