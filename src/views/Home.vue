<template>
  <!-- FIXME: MAKE A UNIQUE container-grid-games INCLUDING games-title -->
    <div class="container-games">
      <div class="games-title">
        <h1>MOUNTAIN GAMES</h1>
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
            <h3 class="card--content__game--name">{{ game.name }}</h3>
            <p>{{ game.description }}</p>
            <input class="see-more-btn" type="checkbox">
            
            <!-- TODO: USE THE ORDERED GETTER ACCORDING TO THE GAME -->
            <!-- <h4 v-if="storeScores.dicesHighscoresOrdered.length > 0">HIGH SCORE:</h4> -->
            <h4 v-if="storeScores.gameHighScores.length > 0">HIGH SCORE:</h4>
              <h3 class="card--content__game--highscore">
                {{ storeScores.dicesHighscoresOrdered[0].score }} -
                {{ storeScores.dicesHighscoresOrdered[0].name }}
              </h3>
          </div>
        </div>
      </div>
    </div>
</template>

<script setup>
import { useGamesStore } from '@/stores/games.js'
import { useScoresStore } from '@/stores/scores.js'


const storeGames = useGamesStore()
const storeScores = useScoresStore()




// storeGames.gamesLinks()
</script>