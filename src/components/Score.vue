<template>
    <p>Score: {{ storeDices.userPlay.actualScore }}</p>
    <div class="new--game">
        <button @click="storeDices.playAgain" class="dices-btn">PLAY AGAIN</button>
        <button @click="storeDices.newDicesGame" class="dices-btn">SELECT DICES & PLAY AGAIN</button>
    </div>
</template>

<script setup>
import { useDicesStore } from '@/stores/dices'
import { useScoresStore } from '@/stores/scores'
import { useUsersStore } from '@/stores/users'


const storeDices = useDicesStore()
const storeScores = useScoresStore()
const storeUsers = useUsersStore()

if (storeUsers.user.name) {
    console.log('dices', storeUsers.user.name, storeUsers.user.id, storeDices.userPlay.actualScore)
    storeScores.isHighscore('dices', storeUsers.user.name, storeUsers.user.id, storeDices.userPlay.actualScore)
}



</script>
    