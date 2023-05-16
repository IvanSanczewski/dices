<template>
  <h2>This is the HIGH SCORES page</h2>
    <div v-for="game in storeScores.gameHighScore" :key="game.game" class="high__score__games">
      <p style="fontWeight: 900">{{ game.game }}</p>
      <div v-for="score in game.scores" :key="score.name">
        <p>{{ score.name }} - {{ score.score }}</p>
      </div>
    </div>  
</template>

<script setup>
import { useScoresStore } from '@/stores/scores'

const storeScores = useScoresStore()
</script>