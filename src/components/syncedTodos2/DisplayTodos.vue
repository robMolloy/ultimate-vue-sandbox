<template>
  <Todo v-for="todo of todosStore.$state.local" :todo="todo" :key="todo.id" />
</template>

<script setup>
import { useSyncedTodosStore } from "src/stores/useSyncedTodosStore.js";
import Todo from "./Todo.vue";

const todosStore = useSyncedTodosStore();

</script>
