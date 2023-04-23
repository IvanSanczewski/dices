<template>
    <div class="container">
        <h1>This is NUMBERS game</h1>
    </div>

    <div class="choose-level">
        <h2>How many squares you want to play?</h2>
        <p>3<sup>2</sup></p>
        <p>5<sup>2</sup></p>
        <p>7<sup>2</sup></p>
        
    </div>
</template>

<script setup>
import { useNumbersStore} from '../stores/numbers'
import Score from '../components/Score.vue'

const storeNumbers = useNumbersStore()

</script>