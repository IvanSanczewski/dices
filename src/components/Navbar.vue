<template>
    <div class="container-nav">
        <div class="menu-games">
            <RouterLink to='/'>
                <font-awesome-icon icon="fa-solid fa-gamepad" /> games
            </RouterLink>
            <RouterLink to="/">HOME</RouterLink>
            <RouterLink to="DiceSum">SUM DICES</RouterLink>
            <RouterLink to="Numbers">NUMBERS</RouterLink>
            <RouterLink to="Colors">COLORS</RouterLink>
            <RouterLink to="HighScores">SCORES</RouterLink>
            <RouterLink to="HighScores">RULES</RouterLink>
        </div>
        <div class="menu-user">
            <div v-if="!storeUsers.isLogged" class="not--logged">
                <RouterLink to="Login">LOG IN ||</RouterLink>
                <RouterLink to="Signin">SIGN IN</RouterLink>
            </div>
            
            <div v-else class="logged">
                <RouterLink to="User">
                    <font-awesome-icon icon="fa-solid fa-user" /> {{ storeUsers.user.name }} 
                </RouterLink>
                <RouterLink to="/" @click="storeUsers.logOut">LOG OUT</RouterLink>
            </div>
        </div>
    </div>
</template>

<script setup>
import {RouterLink} from 'vue-router'
import { useUsersStore } from '@/stores/users.js'

const storeUsers = useUsersStore()

</script>

<style scoped>
span {
    cursor: pointer
}
</style>
