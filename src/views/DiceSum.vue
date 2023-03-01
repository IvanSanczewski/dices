<template>
    <div class="container">
        <h1>This is the SUM DICES GAME</h1>
        <h3>Choose your dices</h3>
        <span>--------------</span>

        <form class="select-dices">
            <label>How many dices do you want to sum?</label>
                <input @click="storeDices.dicesCount(6)" type="radio" name="dices" value=6/> Six
                <input @click="storeDices.dicesCount(10)" type="radio" name="dices" value=10/> Ten
                <input @click="storeDices.dicesCount(12)" type="radio" name="dices" value=12/>Twelve
        </form>
        <form @submit.prevent="storeDices.addDice(storeDices.diceType)" class="select-dices">
            <label>Next dice:</label>
                <select name="dice-type" v-model="storeDices.diceType">
                    <option value="tetrahedron">Tetrahedron(4 faces)</option>
                    <option value="cube">Cube(6 faces)</option>
                    <option value="decahedron">Decahedron(10 faces)</option>
                    <option value="dodecahedron">Dodecahedron(12 faces)</option>
                    <option value="icosahedron">Icosahedron(20 faces)</option>
            </select>
            <button>Add dice</button>
            <p v-if="storeDices.sumReady">Your dice stack is full, press ROLL DICES or delete an amount of dices, then fill the stack again and press ROLL DICES.</p>
        </form>
        <span>--------------</span>
        <p>Your dices: </p>
        <div v-for="item in storeDices.dices.set" :key="item">
            <span>{{ item }}</span>
        </div>
        <button @click="storeDices.deleteDice">Delete last dice</button>
        <button @click="
            goToFirstPlay()"
            v-if="storeDices.sumReady">
            Roll dices
        </button>

            <!-- storeDices.rollDices, -->
        <div>--------------</div>

        <div v-for="play, index in storeDices.dices.plays" :key="play.index"> 
            Play {{ index + 1 }} :{{ play.join(' + ') }} =
                        
                <!-- $event.target.parentElement.nextSibling.children[1].focus()" -->
                        <!-- , -->
                <input @keyup.enter=" 
                    storeDices.sumVsResult(storeDices.userPlay.userSum[index], storeDices.dices.playsTotal[index], index),
                    nextPlay(index)"
                    v-model="storeDices.userPlay.userSum[index]"
                    :class="{'filled' : storeDices.userPlay.answered[index]}"
                    type="number"
                    :disabled="storeDices.userPlay.answered[index]"
                    class="user-answer">
        </div>
    </div>
</template>

<script setup>
import { useDicesStore } from '@/stores/dices'

const storeDices = useDicesStore()

const nextPlay = index => {
    console.log(index)
    if (index < 9) {
        console.log(index)
        const nextInput = document.querySelectorAll('.user-answer')[index+1]
        nextInput.focus()
    }
}

const goToFirstPlay = () => {
    storeDices.rollDices()
    setTimeout(() => {
        const firstInput = document.querySelector('.user-answer')
        if (firstInput) {
            firstInput.focus()
        }
    }, 1500)
}


</script>

<style>
    .filled {
        /* background: rgb(201, 201, 201);
        pointer-events: none; */
        opacity: 0.5;
        cursor: not-allowed
    }
</style>