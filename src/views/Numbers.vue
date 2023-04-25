<template>
    <div class="numbers-game">
        <div class="container">
            <h1>This is NUMBERS game</h1>
        </div>
        <div class="choose-level">
            <h2>How many squares you want to play?</h2>
                <button class="numbers-btn" @click="storeNumbers.setSquare(3)">3<sup>2</sup></button>
                <button class="numbers-btn" @click="storeNumbers.setSquare(5)">5<sup>2</sup></button>
                <button class="numbers-btn" @click="storeNumbers.setSquare(7)">7<sup>2</sup></button>
        </div>
        <div v-if="storeNumbers.squareSize !== null" class="play-numbers">
            <button @click="storeNumbers.generateSquare" class="numbers-btn">PLAY NUMBERS!</button>
        </div>

        <div class="square">
            <div v-for="cell, index in storeNumbers.squareValues" :key="index" class="cell">
                <div class="cell--content">{{ cell }}</div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useNumbersStore} from '../stores/numbers'
import Score from '../components/Score.vue'

const storeNumbers = useNumbersStore()

</script>