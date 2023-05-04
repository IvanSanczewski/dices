<template>
    <p>This is the Sign In Component</p>

    <form @submit.prevent="storeUsers.signin">
        <input type="name" placeholder="Name" v-model="displayName" required>
        <input type="email" placeholder="Email" v-model="email" required>
        <input type="password" placeholder="Password" v-model="password" required>
        
        
        <!-- <input type="name" placeholder="Name" v-model="storeUsers.user.name" required>
        <input type="email" placeholder="Email" v-model="storeUsers.user.email" required>
        <input type="password" placeholder="Password" v-model="storeUsers.user.password" required> -->
        <button>SIGN IN</button>
    </form>
</template>

<script setup>
// import { useDicesStore } from "@/stores/dices"
import { useUsersStore } from "@/stores/users";
import { ref } from "vue";

// refs
const displayName = ref('')
const email = ref('')
const password = ref('')

// TODO: CALL FUNCTION WITH THE REFS AS PARAMETERS

// const storeDices = useDicesStore()
const storeUsers = useUsersStore()

</script>
