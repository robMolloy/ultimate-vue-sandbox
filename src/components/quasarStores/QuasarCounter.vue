<template>
    <h3>default stores</h3>
    <div>count: {{ counterStore.counter }}</div>
    <q-btn @click="counterStore.increment" >increment by 1</q-btn>
</template>

<script setup>
import { useCounterStore } from "src/stores/example-store";

const counterStore = useCounterStore();
</script>
