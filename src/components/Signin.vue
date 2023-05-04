<template>
    <p>This is the Sign In Component</p>

    <form @submit.prevent="storeUsers.signinTry">
        <!-- FIXME:  V-MODEL IS NOT NEEDED IF USING REFS-->
        <input type="name" placeholder="Name" v-model="storeUsers.user.name" required>
        <input type="email" placeholder="Email" v-model="storeUsers.user.email" required>
        <input type="password" placeholder="Password" v-model="storeUsers.user.password" required>
        <button>SIGN IN</button>
    </form>
</template>

<script setup>
//TODO: IMPORT REF
import { useUsersStore } from "@/stores/users";

// USE REFS
const storeUsers = useUsersStore()

</script>
