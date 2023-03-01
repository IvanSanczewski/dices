<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'


</script>

<template>
  <Navbar/>
  <h1>let's get started!</h1>
  <main>
    <RouterView />
  </main>
  <Footer />
</template>

<style>
</style>
