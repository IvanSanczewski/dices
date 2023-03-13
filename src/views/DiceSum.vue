<template>
    <!-- <div class="container-grid-dices"> -->
    <div class="container-dices">
        
        <div class="dices-title">
            <h1>This is the SUM DICES GAME</h1>
            <h3>Prepare your dice set, roll'em and sum up!!</h3>
        </div>

        <div class="dices-total">
            How many dices do you want to use?
            <div class="dices-total__select">
                <button class="dices-btn" @click="storeDices.dicesCount(6)">Six</button>
                <button class="dices-btn" @click="storeDices.dicesCount(10)">Ten</button>
                <button class="dices-btn" @click="storeDices.dicesCount(12)">Twelve</button>
            </div>
        </div>

        <h3>Pick up your dices:</h3>
        <div class="dice-type">
            <div class="dice dices-btn" @click="storeDices.addDice('tetrahedron')">
                <img class="dice-img" src="../assets/images/dice4.png" alt="dice">
                <div class="dice-txt">
                    <p>Tetrahedron</p>
                    <p>(4 faces)</p>
                </div>
            </div>

            <div class="dice dices-btn" @click="storeDices.addDice('cube')">
                <img class="dice-img" src="../assets/images/dice6.png" alt="dice">
                <div class="dice-txt">
                    <p>Cube</p>
                    <p>(6 faces)</p>
                </div>
            </div>

            <div class="dice dices-btn" @click="storeDices.addDice('decahedron')">
                <img class="dice-img" src="../assets/images/dice10.png" alt="dice">
                <div class="dice-txt">
                    <p>Decahedron</p>
                    <p>(10 faces)</p>
                </div>
            </div>
            
            <div class="dice dices-btn" @click="storeDices.addDice('dodecahedron')">
                <img class="dice-img" src="../assets/images/dice12.png" alt="dice">
                <div class="dice-txt">
                    <p>Dodecahedron</p>
                    <p>(12 faces)</p>
                </div>
            </div>
            
            <div class="dice dices-btn" @click="storeDices.addDice('icosahedron')">
                <img class="dice-img" src="../assets/images/dice20.png" alt="dice">
                <div class="dice-txt">
                    <p>Icosahedron</p>
                    <p>(20 faces)</p>
                </div>
            </div>
        </div>

        <!-- <form @submit.prevent="storeDices.addDice(storeDices.diceType)" class="select-dices">
            <label>Next dice:</label>
                <select name="dice-type" v-model="storeDices.diceType">
                    <option value="tetrahedron">Tetrahedron(4 faces)</option>
                    <option value="cube">Cube(6 faces)</option>
                    <option value="decahedron">Decahedron(10 faces)</option>
                    <option value="dodecahedron">Dodecahedron(12 faces)</option>
                    <option value="icosahedron">Icosahedron(20 faces)</option>
            </select>
            <button class="dices-btn">Add dice</button>
            <p v-if="storeDices.sumReady">Your dice stack is full, press ROLL DICES or delete an amount of dices, then fill the stack again and press ROLL DICES.</p>
        </form> -->

        <div class="dice-set">
            <p>YOUR SET OF DICES: </p>
            <div v-for="item in storeDices.dices.set" :key="item">
                <span>{{ item }}</span>
            </div>
            <button @click="storeDices.deleteDice" class="dices-btn">Delete last dice</button>
            <button @click="
                goToFirstPlay()"
                
                v-if="storeDices.sumReady">
                Roll dices
            </button>
        </div>

            <!-- storeDices.rollDices, -->


        <div class="score">
            <div v-for="play, index in storeDices.dices.plays" :key="play.index">
                Play {{ index + 1 }} :{{ play.join(' + ') }} =
            
                    <!-- $event.target.parentElement.nextSibling.children[1].focus()" -->
                            <!-- , -->
                    <input @keyup.enter="
                        storeDices.answerVsResult(storeDices.userPlay.userSum[index], storeDices.dices.playsTotal[index], index),
                        nextPlay(index)"
                        v-model="storeDices.userPlay.userSum[index]"
                        :class="{'filled' : storeDices.userPlay.answered[index]}"
                        type="number"
                        :disabled="storeDices.userPlay.answered[index]"
                        class="user-answer">
            </div>
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
    }, 3000)
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