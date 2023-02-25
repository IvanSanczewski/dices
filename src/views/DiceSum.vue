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
        <form @submit.prevent="storeDices.addDice(value)" class="select-dices">
            <label>Next dice:</label>
                <select name="dice-type">
                    <option value="tetrahedron">Tetrahedron(4 faces)</option>
                    <option value="cube">Cube(6 faces)</option>
                    <option value="decahedron">Decahedron(10 faces)</option>
                    <option value="dodecahedron">Dodecahedron(12 faces)</option>
                    <option value="icosahedron">Icosahedron(20 faces)</option>
            </select>
            <button>Add dice</button>
        </form>
        <span>--------------</span>
        <p>Your dices: </p>
        <div v-for="item in storeDices.dicesSet" :key="item.index">
            <span>{{ item }}</span>
        </div>
        <button @click="storeDices.deleteDice">Delete last dice</button>
    </div>
</template>

<script setup>
import { useDicesStore } from '@/stores/dices'

const storeDices = useDicesStore()

</script>