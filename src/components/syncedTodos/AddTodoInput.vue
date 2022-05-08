<template>
  <q-input
    bottom-slots
    label="Add new Todo"
    v-bind="$attrs"
    @keyup="onInput"
    v-model="inputValue"
    :rules="[stringMustContainXandY('x', 'y')]"
  >
    <template v-slot:append>
      <q-btn round dense flat icon="close" @click="clearValue" />
    </template>
    <template v-slot:after>
      <q-btn round dense flat icon="send" @click="createTodo" />
    </template>
  </q-input>
</template>

<script setup>
import { ref } from "vue";
import { useSyncedTodosStore } from "src/stores/useSyncedTodosStore";
// import { rules } from "src/boot/ruleBook";
import { useRules } from "src/boot/ruleBook";

const { stringMustContainXandY } = useRules("stringMustContainXandY");

const emit = defineEmits(["create"]);

const inputValue = ref("");

const changeValue = (value) => { inputValue.value = value; };
const clearValue = () => changeValue("");

const todosStore = useSyncedTodosStore();
const createTodo = () => {
  const newTodo = { task: inputValue.value, isComplete: false };
  emit("create", newTodo);
  todosStore.create(newTodo);
  clearValue();
};

const onInput = (e) => {
  if (e.keyCode === 13) createTodo();
};

defineExpose({ changeValue, createTodo, clearValue });
</script>
