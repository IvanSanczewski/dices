<template>
    <p>Score: {{ storeDices.userPlay.actualScore }}</p>
</template>

<script setup>
import { useDicesStore } from "@/stores/dices"

const storeDices = useDicesStore ()


</script>
