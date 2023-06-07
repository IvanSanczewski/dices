<template>
  <h2>This is the HIGH SCORES page</h2>
  <div v-for="game in storeScores.gameHighScores" :key="game.game" class="high__score__games">
    <h3>{{ game.game }}</h3>
    <div v-for="score in game.scores" :key="score.name">
      <p>{{ score.name }} - {{ score.score }}</p>
    </div>
  </div>  
</template>

<script setup>
import { useScoresStore } from '@/stores/scores'

const storeScores = useScoresStore()
// fetchHighScores is perforemed on App load in order to have them available from the very beginning
// storeScores.fetchHighScores()

</script>