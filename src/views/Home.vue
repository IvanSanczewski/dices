<template>
    <div class="container-games">
      <div class="games-title">
        <h1>MOUNTAIN GAMES</h1>
        <h2>Choose a game</h2>
      </div>

      <div class="games-display">
        <div v-for="game in storeGames.games" :key="game.id" class="card">
          <div class="card-img">
            <!-- <div :style="{backgroundImage: 'url(' + game.image +')' }" class="game-img"></div> -->
            <img :src="`src/assets/images/${game.image}.jpg`" alt="photo">
            <!-- <img :src="`${game.image}`" alt="photo"> -->
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
// import { RouterLink } from 'vue-router'
import { useGamesStore } from '@/stores/games.js'


const storeGames = useGamesStore()
</script>