<template>
    <div class="container-nav">
        <div class="menu-games">
            <RouterLink to='/'>LOGO</RouterLink>
            <RouterLink to="/">HOME</RouterLink>
            <RouterLink to="DiceSum">SUM DICES</RouterLink>
            <RouterLink to="Colors">COLORS</RouterLink>
            <RouterLink to="Scores">SCORES</RouterLink>
        </div>
        <div class="menu-user">
            <span>LOG IN</span>
            <span>User:</span>
            <span>SIGN IN</span>
            <span>SIGN OUT</span>
        </div>
    </div>

</template>

<script setup>
import {RouterLink} from 'vue-router'

</script>