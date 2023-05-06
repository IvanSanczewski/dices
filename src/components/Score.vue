<template>
    <p>Score: {{ storeDices.userPlay.actualScore }}</p>
    <div class="new--game">
        <button @click="storeDices.playAgain" class="dices-btn">PLAY AGAIN</button>
        <button @click="storeDices.newDicesGame" class="dices-btn">SELECT DICES & PLAY AGAIN</button>
    </div>
</template>

<script setup>
import { useDicesStore } from "@/stores/dices"
import { useScoresStore } from "@/stores/scores";

const storeDices = useDicesStore()
const storeScores = useScoresStore()

storeScores.addNewHighScore('dices', 'Mika', storeDices.userPlay.actualScore)

</script>
