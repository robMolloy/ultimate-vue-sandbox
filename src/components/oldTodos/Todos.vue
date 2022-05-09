<template>
  <q-btn @click="changeToBlah">change to blah</q-btn>
  <q-btn @click="createTask">create task</q-btn>
  <q-btn @click="focus2">focus2</q-btn>
  <AddInput
    @press:enter="createTask"
    v-model="newTask"
    label="Todo"
    ref="theInput"
  />
  <Todo v-for="todo of todosStore.$state.local" :todo="todo" :key="todo.id" />
</template>

<script>
export default {
  methods: {
    focus2() {
      this.$refs.theInput.focusInput();
    },
  },
};
</script>

<script setup>
import { ref } from "vue";
import { useSyncedTodosStore } from "src/stores/useSyncedTodosStore.js";
import Todo from "./Todo.vue";
import AddInput from "./AddInput.vue";

const todosStore = useSyncedTodosStore();

const newTask = ref("");

const createTask = () => {
  todosStore.create({ task: newTask.value, isComplete: false });
  newTask.value = "";
};
const changeToBlah = () => {
  newTask.value = "blah";
};

</script>
