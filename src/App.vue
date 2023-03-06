<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue'
import Navbar from '@/components/Navbar.vue'
import NavbarIcons from '@/components/NavbarIcons.vue'
import Footer from '@/components/Footer.vue'


const mobile = ref(false)
console.log(mobile.value)

function toggleMobileMenu(mobile) {
  mobile.value = (window.innerWidth <= 680) ? true : false
}
toggleMobileMenu(mobile)

</script>

<template>

  <header>
    <component :is="mobile ? NavbarIcons : Navbar"/>
  </header>
<!-- 
    <div v-if="!mobile">
      <Navbar/>
    </div>
    <div v-else>
      <NavbarIcons/>
    </div> -->

  <main>
    <RouterView />
  </main>
  <footer>
    <Footer />
</footer>
</template>