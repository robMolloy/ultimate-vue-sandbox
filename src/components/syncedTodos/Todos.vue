<template>
  <q-btn @click="() => addTodoInput.clearValue()">clear</q-btn>
  <q-btn @click="() => createTodoFromInput()">create</q-btn>
  <AddTodoInput label="Todo" @create="onCreateTodo" ref="addTodoInput" />
  <DisplayTodos />
</template>

<script setup>
import { ref } from "vue";
import DisplayTodos from "./DisplayTodos.vue";
import AddTodoInput from "./AddTodoInput.vue";

const addTodoInput = ref();
const onCreateTodo = (newTodo) => {
  // eslint-disable-next-line
  console.log(JSON.stringify(newTodo));
};
const createTodoFromInput = (val) => addTodoInput.value.createTodo(val);
</script>
