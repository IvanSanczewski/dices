<template>
    <p>Score: {{ storeDices.userPlay.actualScore }}</p>
</template>

<script setup>
import { useDicesStore } from "@/stores/dices"
import { useScoresStore } from "@/stores/scores";

const storeDices = useDicesStore()
const storeScores = useScoresStore()

storeScores.addNewHighScore('dices', 'Mika', storeDices.userPlay.actualScore)

</script>
