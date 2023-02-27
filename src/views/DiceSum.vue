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
        <form @submit.prevent="storeDices.addDice(diceType)" class="select-dices">
            <label>Next dice:</label>
                <select name="dice-type" v-model="diceType">
                    <option value="tetrahedron">Tetrahedron(4 faces)</option>
                    <option value="cube">Cube(6 faces)</option>
                    <option value="decahedron">Decahedron(10 faces)</option>
                    <option value="dodecahedron">Dodecahedron(12 faces)</option>
                    <option value="icosahedron">Icosahedron(20 faces)</option>
            </select>
            <button>Add dice</button>
            <p v-if="storeDices.sumReady">Your dice stack is full, press START or delete an amount of dices, then fill the stack again and press START.</p>
        </form>
        <span>--------------</span>
        <p>Your dices: </p>
        <div v-for="item in storeDices.dicesSet" :key="item">
            <span>{{ item }}</span>
        </div>
        <button @click="storeDices.deleteDice">Delete last dice</button>
        <button v-if="storeDices.sumReady" @click="storeDices.startGame">Roll dices</button>

        <div>--------------</div>

        <div v-for="play in storeDices.plays" :key="play.index"> Play {{ storeDices.plays[index] }} {{ play.join(' + ') }}

        </div>


        <!-- <div v-for="item in storeDices.plays" :key="item.index" class="sums"> Play 1:
            <span> {{ item[0] }} + </span>
            <span> {{ item[1] }} + </span>
            <span> {{ item[2] }} + </span>
            <span> {{ item[3] }} + </span>
            <span> {{ item[4] }} + </span>
            <span> {{ item[5] }} = </span>
        </div> -->


    </div>
</template>

<script setup>
import { useDicesStore } from '@/stores/dices'

const storeDices = useDicesStore()

</script>