<template>
    <p>This is the Sign In Component</p>

    <form @submit.prevent="signinTry">
        <input type="name" placeholder="Name" v-model="displayName" required>
        <input type="email" placeholder="Email" v-model="email" required>
        <input type="password" placeholder="Password" v-model="password" required>
        <button>SIGN IN</button>
    </form>
</template>

<script setup>
import { useUsersStore } from "@/stores/users";
import { ref } from "vue";

const storeUsers = useUsersStore()


// refs
const displayName = ref('')
const email = ref('')
const password = ref('')

const signinTry = async () => {
    await storeUsers.signin(email.value, password.value, displayName.value)
}

</script>
