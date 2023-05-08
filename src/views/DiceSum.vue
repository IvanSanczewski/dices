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
            <div class="dice dices-btn" @click="storeDices.addDice(storeDices.dices.type[0])">
                <img class="dice-img" src="../assets/images/dice4.png" alt="dice">
                <div class="dice-txt">
                    <p>Tetrahedron</p>
                    <p>(4 faces)</p>
                </div>
            </div>

            <!-- <div class="dice dices-btn" @click="storeDices.addDice('../assets/images/dice6.png')"> -->
            <div class="dice dices-btn" @click="storeDices.addDice(storeDices.dices.type[1])">
                <img class="dice-img" src="../assets/images/dice6.png" alt="dice">
                <div class="dice-txt">
                    <p>Cube</p>
                    <p>(6 faces)</p>
                </div>
            </div>

            <div class="dice dices-btn" @click="storeDices.addDice(storeDices.dices.type[2])">
                <img class="dice-img" src="../assets/images/dice10.png" alt="dice">
                <div class="dice-txt">
                    <p>Decahedron</p>
                    <p>(10 faces)</p>
                </div>
            </div>
            
            <div class="dice dices-btn" @click="storeDices.addDice(storeDices.dices.type[3])">
                <img class="dice-img" src="../assets/images/dice12.png" alt="dice">
                <div class="dice-txt">
                    <p>Dodecahedron</p>
                    <p>(12 faces)</p>
                </div>
            </div>
            
            <!-- <div class="dice dices-btn" @click="storeDices.addDice('icosahedron')"> -->
            <div class="dice dices-btn" @click="storeDices.addDice(storeDices.dices.type[4])">
                <img class="dice-img" src="../assets/images/dice20.png" alt="dice">
                <div class="dice-txt">
                    <p>Icosahedron</p>
                    <p>(20 faces)</p>
                </div>
            </div>
        </div>

        <div class="dice-set">
            <!-- <div v-for="item in storeDices.dices.set" :key="item"> -->
            <p>YOUR SET OF DICES: </p>
            <div class="display-dice-set">
                <div v-for="item, index in storeDices.dices.set" :key="item.idex">
                    <img @click="storeDices.deleteDice(index)" class="dice-set-img" :src="item.img" alt="dice">
                    <!-- <font-awesome-icon class="dice-set-img--overlay-icon" icon="fa-solid fa-trash" /> -->
                </div>
            </div>
           


            <!-- <button @click="goToFirstPlay()" -->
            <button @click="storeDices.goToFirstPlay()"
                v-if="storeDices.sumReady && !storeDices.nowPlaying"
                class="dices-btn ">
                ROLL'EM!!
            </button>
            <div v-if="storeDices.nowPlaying" class="dices-btn">NOW PLAYING!!</div>
        </div>

        <!-- FIXME: PLAYS SHOULD APPEAR ONLY WHEN totalDices & dices.set ARE NOT UNDEFINED -->
        <div class="plays--results">
            <div class="dice--play" v-for="play, index in storeDices.dices.plays" :key="play.index">
                Play {{ index + 1 }} :{{ play.join(' + ') }} =
            
                    <input @keyup.enter="
                        storeDices.answerVsResult(storeDices.userPlay.userSum[index], storeDices.dices.playsTotal[index], index),
                        nextPlay(index)"
                        v-model="storeDices.userPlay.userSum[index]"
                        :class="{'filled' : storeDices.userPlay.answered[index]}"
                        type="number"
                        :disabled="storeDices.userPlay.answered[index]"
                        class="user-answer"
                        required>
                    <div v-if="storeDices.displayScore">  
                        <div v-if="storeDices.userPlay.answersAreCorrect[index]" class="dice--play__correct"> 
                            <font-awesome-icon icon="fa-solid fa-check" />
                        </div>
                        <div v-if="!storeDices.userPlay.answersAreCorrect[index]" class="dice--play__wrong">
                            <font-awesome-icon icon="fa-solid fa-circle-xmark" class="dice--play__wrong"/> - {{ storeDices.userPlay.differencePenalty[index] }}
                        </div>
                    </div>
            </div>
        </div>
        <Score class="score" v-if="storeDices.displayScore" />
    </div>
</template>

<script setup>
import Score from '../components/Score.vue'
import { useDicesStore } from '@/stores/dices'
// import { useScoresStore } from '@/stores/scores';

const storeDices = useDicesStore()
// const storeScores = useScoresStore()



// restart game when acces to avoid last play to be displayed
storeDices.totalDices = 0
storeDices.dices.set = []
storeDices.sumReady = false
storeDices.nowPlaying = false
storeDices.displayScore = false
storeDices.dices.plays = []
storeDices.dices.playsTotal = []
storeDices.userPlay.userSum = []
storeDices.userPlay.answersAreCorrect = []
storeDices.userPlay.differencePenalty = []                            
storeDices.userPlay.actualScore = 0 






// controls focus on each answer input area so it can be played without the mouse
const nextPlay = index => {
    console.log(index)
    if (index < 9) {
        console.log(index)
        const nextInput = document.querySelectorAll('.user-answer')[index+1]
        nextInput.focus()
    }
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