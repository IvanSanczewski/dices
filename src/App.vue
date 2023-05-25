<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue'
import Navbar from '@/components/Navbar.vue'
import NavbarIcons from '@/components/NavbarIcons.vue'
import Footer from '@/components/Footer.vue'
import { useUsersStore } from './stores/users.js'
import { useScoresStore } from './stores/scores.js'

const storeUsers = useUsersStore()
const storeScores = useScoresStore()

const mobile = ref(false)
console.log(mobile.value)

function toggleMobileMenu(mobile) {
  mobile.value = (window.innerWidth <= 680) ? true : false
}
toggleMobileMenu(mobile)

storeUsers.getUser()
storeScores.getHighScores()


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