<template>
  <q-input
    bottom-slots
    label="Add new Todo"
    v-bind="$attrs"
    @keyup="onInput"
    v-model="inputValue"
    :rules="[stringMustContainXandY('x','terry')]"
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
import { ref, computed } from "vue";
import { useSyncedTodosStore } from "src/stores/useSyncedTodosStore";
import { useStringRules } from "src/rules";

const emit = defineEmits(["create"]);

const { stringMustContainXandY } = useStringRules();
const inputValue = ref("");

const changeValue = (value) => { inputValue.value = value; };
const clearValue = () => changeValue("");

const todosStore = useSyncedTodosStore();
const newTodo = computed(() => ({ task: inputValue.value, isComplete: false }));
const createTodo = () => {
  emit("create", newTodo.value);
  todosStore.create(newTodo.value);
  clearValue();
};

const onInput = (e) => {
  if (e.keyCode === 13) createTodo();
};

defineExpose({ changeValue, createTodo, clearValue });
</script>
