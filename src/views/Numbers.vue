<template>
    <div class="numbers-game">
        <div class="container">
            <h1 class="game__title">NUMBERS</h1>
        </div>
        <div class="choose-level">
            <h2 class="game__choice">How many squares do you want to play?</h2>
                <button class="numbers-btn" @click="storeNumbers.setSquare(3)">3<sup>2</sup></button>
                <button class="numbers-btn" @click="storeNumbers.setSquare(5)">5<sup>2</sup></button>
                <button class="numbers-btn" @click="storeNumbers.setSquare(7)">7<sup>2</sup></button>
        </div>
        <div v-if="storeNumbers.squareSize !== null" class="play-numbers">
            <button @click="storeNumbers.generateSquare" class="numbers-btn">PLAY NUMBERS!</button>
        </div>

        <!-- use the stored value  -->

        <div class="square" :style="{'--square--side': storeNumbers.squareSide}">
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