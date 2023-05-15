<template>
  <h2>This is the HIGH SCORES page</h2>
    <div v-for="item, index in storeScores.gameHighScore" :key="index" class="high__score__games">
      <p>{{ index }} {{ item.game }}</p>
       <div v-for="score, index in item" :key="index" class="high__score__games">
        <p>{{ score }}</p>

       </div>

      
      <!-- <p>{{ item.scores }}</p> -->
    </div>

    <!-- <button @click="storeScores.addNewHighScore('dices', 'Tula', 1250)">send high score</button -->

</template>

<script setup>
import { useScoresStore } from '@/stores/scores'

const storeScores = useScoresStore()
</script>