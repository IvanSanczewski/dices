<template>
    <div class="container">
        <div class="menu">
            <RouterLink to='/'>LOGO | </RouterLink>
            <RouterLink to="/">Home | </RouterLink>
            <RouterLink to="DiceSum">SUM DICES | </RouterLink>
            <RouterLink to="Colors">COLORS | </RouterLink>
            <RouterLink to="Scores">SCORES</RouterLink>
        </div>
        <div class="user">
            <span>LOGIN // </span>
            <span>User: // </span>
            <span>SIGNIN //</span>
            <span>SIGNOUT</span>
        </div>
    </div>

</template>

<script setup>
import {RouterLink} from 'vue-router'

</script>