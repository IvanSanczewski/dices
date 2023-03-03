<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'

</script>

<template>
  <header>
    <Navbar/>
  </header>
  <main>
    <h1>let's get started!</h1> 
    <RouterView />
  </main>
  <footer>
    <Footer />
  </footer>
</template>