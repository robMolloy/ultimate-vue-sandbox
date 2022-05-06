<template>
  <q-btn @click="()=>changeInputValue('')">clear</q-btn>
  <q-btn @click="()=>createTodoFromInput()">create</q-btn>
  <AddTodoInput
    label="Todo"
    @create="onCreateTodo"
    ref="addTodoInput"
  />
  <DisplayTodos />
</template>

<script setup>
import { ref } from "vue";
import DisplayTodos from "./DisplayTodos.vue";
import AddTodoInput from "./AddTodoInput.vue";

const addTodoInput = ref();
const onCreateTodo = (newTodo) => {
  console.log(JSON.stringify(newTodo));
};

const changeInputValue = (val) => (addTodoInput.value.changeValue(val));
const createTodoFromInput = (val) => (addTodoInput.value.createTodo(val));

</script>
