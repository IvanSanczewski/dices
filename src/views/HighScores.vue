<template>
  <h2 class="high__score--title">HIGH SCORES</h2>
  <div v-for="game in storeScores.gameHighScores" :key="game.game" class="high__score__games">
    <h3>{{ game.game }}</h3>
    <div v-for="score in game.scores" :key="score.name">
      <p> {{ score.name }} - {{ score.score }}</p>
    </div>
  </div>  
</template>

<script setup>
import { useScoresStore } from '@/stores/scores'

const storeScores = useScoresStore()
</script>