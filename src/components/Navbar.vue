<template>
    <div class="container-nav">
        <div class="menu-games">
            <RouterLink to='/'>
                <font-awesome-icon icon="fa-solid fa-gamepad" /> games
            </RouterLink>
            <RouterLink to="/">HOME</RouterLink>
            <RouterLink to="DiceSum">SUM DICES</RouterLink>
            <RouterLink to="Colors">COLORS</RouterLink>
            <RouterLink to="HighScores">SCORES</RouterLink>
            <RouterLink to="HighScores">RULES</RouterLink>
        </div>
        <div class="menu-user">
            <div v-if="!storeUsers.isLogged" class="user-logged">
                <span @click="storeUsers.toggleLogged">LOG IN // </span>
                <span @click="storeUsers.toggleLogged">SIGN IN</span>
            </div>
            <div v-else class="user-not-logged">
                <RouterLink to="/" @click="storeUsers.toggleLogged">
                        <font-awesome-icon icon="fa-solid fa-user" />
                </RouterLink>
                <RouterLink to="/" @click="storeUsers.toggleLogged">
                    <font-awesome-icon icon="fa-solid fa-arrow-right-from-bracket" />
                </RouterLink>
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
