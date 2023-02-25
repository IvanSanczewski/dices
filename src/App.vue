<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
// import Home from '@/views/Home.vue'
// import DiceSum from '@/views/DiceSum.vue'
// import Colors from '@/views/Colors.vue'
// import Scores from '@/views/Scores.vue'

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
