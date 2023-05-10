<template>
    <p>This is the Log In Component</p>

    <form @submit.prevent="loginTry">
        <input type="email" placeholder="Email" v-model="email" required>
        <input type="password" placeholder="Password" v-model="password" required>
        <button>LOG IN</button>
    </form>
</template>

<script setup>
import { useUsersStore } from "@/stores/users";
import { ref } from 'vue'

const storeUsers = useUsersStore()

// refs
const email = ref('')
const password = ref('')

const loginTry = async () => {
    await storeUsers.login(email.value, password.value)
}

</script>