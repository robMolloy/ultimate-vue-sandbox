<template>
  <AddTodoInput v-model="newTask" label="Todo" @create="onCreateTask" />
  <DisplayTodos />
</template>

<script setup>
import { ref } from "vue";
import DisplayTodos from "./DisplayTodos.vue";
import AddTodoInput from "./AddTodoInput.vue";

const newTask = ref("");
const onCreateTask = (newTodo) => {
  console.log(JSON.stringify(newTodo));
  // window.alert(JSON.stringify(newTodo));
};
</script>
