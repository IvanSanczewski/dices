<script setup>
import { RouterView } from 'vue-router'
import { ref } from 'vue'
import Navbar from '@/components/Navbar.vue'
import NavbarIcons from '@/components/NavbarIcons.vue'
import Footer from '@/components/Footer.vue'
import { useUsersStore } from './stores/users.js'
import { useScoresStore } from './stores/scores.js'
import { useGamesStore } from './stores/games.js'

const storeUsers = useUsersStore()
const storeScores = useScoresStore()
// const storeGames = useGamesStore()

const mobile = ref(false)
console.log(mobile.value)

function toggleMobileMenu(mobile) {
  mobile.value = (window.innerWidth <= 680) ? true : false
}
toggleMobileMenu(mobile)

storeUsers.getUser()
storeScores.fetchHighScores()



</script>

<template>

  <header>
    <component :is="mobile ? NavbarIcons : Navbar"/>
  </header>

  <main>
    <RouterView />
  </main>

  <footer>
    <Footer />
  </footer>
</template>