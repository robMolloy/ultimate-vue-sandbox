<template>
  <q-input bottom-slots v-model="task" label="Add new Todo" @keyup="onInput">
    <template v-slot:append>
      <q-btn round dense flat icon="send" @click="createTodo" />
    </template>
  </q-input>

</template>

<script setup>
import { computed, ref } from "vue";
import { useSyncedTodosStore } from "src/store/useSyncedTodosStore";

const todosStore = useSyncedTodosStore();
const task = ref("");
const newTodo = computed(() => ({ task: task.value, isComplete: false }));

const createTodo = () => {
  todosStore.create(newTodo.value);
  task.value = "";
};

const onInput = (e) => {
  if (e.keyCode === 13) createTodo();
};
</script>
