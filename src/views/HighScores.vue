<template>
  <h2>This is the HIGH SCORES page</h2>
    <div v-for="score, index in storeScores.gameHighScore" :key="index" class="high__score__games">
      <p>{{ score.game }}</p>
      <p style="color: black">{{ score.scores }}</p>
    </div>
    <button @click="storeScores.addNewHighScore('dices', 'Tula', 1250)">send high score</button>

</template>

<script setup>
import { useScoresStore } from '@/stores/scores'

const storeScores = useScoresStore()
</script>