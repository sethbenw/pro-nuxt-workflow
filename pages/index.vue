<script setup>
const { data } = await useFetch('/api/snorlax')
</script>

<template>
    <p>{{ data.id }}</p>
    <p>{{ data.name }}</p>
    <img :src="data.sprite" alt="pokemon sprite" />
</template>