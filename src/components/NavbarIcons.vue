<template>
    <div class="container-nav">
        <div class="menu-games">
            <RouterLink to='/'>L</RouterLink>
            <RouterLink to="/">H</RouterLink>
            <RouterLink to="DiceSum">S</RouterLink>
            <RouterLink to="Colors">C</RouterLink>
            <RouterLink to="Scores">S</RouterLink>
            <RouterLink to="Scores">R</RouterLink>
        </div>
        <div class="menu-user">
            <div v-if="!storeUsers.isLogged" class="user-logged">
                <span @click="storeUsers.toggleLogged">LOG IN</span>
                <span @click="storeUsers.toggleLogged">SIGN IN</span>
            </div>
            <div v-else class="user-not-logged">
                <span @click="storeUsers.toggleLogged">User:</span>
                <span @click="storeUsers.toggleLogged">LOG OUT</span>
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