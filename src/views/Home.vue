<template>
  <!-- FIXME: MAKE A UNIQUE container-grid-games INCLUDING games-title -->
    <div class="container-games">
      <div class="games-title">
        <h1>MOUNTAIN GAMES</h1>
        <h2>Choose a game</h2>
      </div>

      <div class="games-display">
        <div v-for="game in storeGames.games" :key="game.id" class="card">
          <div class="card-img">
            <!-- <a href=`${game.link}`> -->
            <!-- <a href="{{ game }}"> -->

            <!-- <a :href="game.id - 1"> -->
            <a :href="game.link">
              <img :src="`src/assets/images/${game.image}.jpg`" alt="photo">
            </a>
          </div>
          <div class="card-content">
            <h3>{{ game.name }}</h3>
            <p>{{ game.description }}</p>
            <input class="see-more-btn" type="checkbox">
            <h4>High Score: {{ game.highScore }} - {{ game.highScoreUser }}</h4>
          </div>
        </div>
      </div>
    </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { useGamesStore } from '@/stores/games.js'
import { useScoresStore} from '@/stores/scores.js'
// import { useUsersStore} from '@/stores/users.js'

const storeGames = useGamesStore()
const storeScores = useScoresStore()
// const storeUsers = useUsersStore()




// storeGames.gamesLinks()
</script>