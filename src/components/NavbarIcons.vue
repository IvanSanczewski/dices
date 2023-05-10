<template>
    <div class="container-nav">
        <div class="menu-games">
            <RouterLink to='/'>
                <font-awesome-icon icon="fa-solid fa-gamepad" /> games
            </RouterLink>
            <RouterLink to="/">
                <font-awesome-icon icon="fa-solid fa-house" />
            </RouterLink>
            <RouterLink to="DiceSum">
                <font-awesome-icon icon="fa-solid fa-dice" />
            </RouterLink>
            <RouterLink to="Colors">
                <font-awesome-icon icon="fa-solid fa-palette" />
            </RouterLink>
            <RouterLink to="HighScores">
                <font-awesome-icon icon="fa-solid fa-trophy" />
            </RouterLink>
            <!-- FIXME: MAKE IT COMPONENT -->
            <RouterLink to="Rules">
                <font-awesome-icon icon="fa-solid fa-ruler" />
            </RouterLink>
        </div>
        <div class="menu-user">
            <div v-if="!storeUsers.isLogged" class="not--logged">
                <RouterLink to="Login">
                    <font-awesome-icon icon="fa-solid fa-arrow-right-to-bracket" />
                </RouterLink>
                <RouterLink to="Signin">
                    <font-awesome-icon icon="fa-solid fa-arrow-down-short-wide" />
                </RouterLink>
            </div>
            <div v-else class="logged">
                <RouterLink to="User">
                        <font-awesome-icon icon="fa-solid fa-user" /> {{ storeUsers.user.name }}
                </RouterLink>
                <RouterLink to="/" @click="storeUsers.toggleLogged">
                    <!-- <font-awesome-icon icon="fa-solid fa-arrow-right-from-bracket" /> -->
                    <!-- <font-awesome-icon icon="fa-solid fa-user-xmark" /> -->
                    <font-awesome-icon icon="fa-solid fa-user-slash" />
                </RouterLink>
            </div>
        </div>
    </div>
                    
         <!-- TODO: USE TO LOG OUT USER -->
    <!-- <font-awesome-icon icon="fa-solid fa-arrow-up-right-from-square" /> -->


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