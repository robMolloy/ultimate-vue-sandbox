<template>
  <q-input
    bottom-slots
    label="Add new Todo"
    v-bind="$attrs"
    @keyup="onInput"
    v-model="inputValue"
    :rules="[
      allRules.stringDoesNotContainX('a'),
      allRules.stringMustContainX('b'),
      allRules.stringMustContainXandY('x', 'y'),
    ]"
  >
    <template v-slot:append>
      <q-btn round dense flat icon="send" @click="createTodo" />
    </template>
  </q-input>
</template>

<script setup>
import { ref } from "vue";
import { useSyncedTodosStore } from "src/stores/useSyncedTodosStore";
import { allRules } from "src/rules/allRules";

const emit = defineEmits(["create"]);

const inputValue = ref("");
const changeValue = (value) => {
  inputValue.value = value;
};

const todosStore = useSyncedTodosStore();
const createTodo = () => {
  const newTodo = { task: inputValue.value, isComplete: false };
  emit("create", newTodo);
  todosStore.create(newTodo);
  changeValue("");
};

const onInput = (e) => {
  if (e.keyCode === 13) createTodo();
};

defineExpose({ changeValue, createTodo });
</script>
