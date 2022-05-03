<template>
  <div class="row">
    <span class="col-2">{{ props.todo.task }}</span>
    <span class="col">
      <q-btn @click="toggle" :icon="icon" />
    </span>
    <span class="col">
      <q-btn @click="deleteTodo" icon="delete" flat />
    </span>
  </div>
</template>

<script setup>
import { useSyncedTodosStore } from "src/stores/useSyncedTodosStore";
import { computed } from "vue";

const todosStore = useSyncedTodosStore();

const props = defineProps({
  todo: {
    default: () => ({}),
  },
});
const icon = computed(() => (props.todo.isComplete ? "done" : "close"));
const toggle = () => {
  const newTodo = { ...props.todo, isComplete: !props.todo.isComplete };
  todosStore.update(newTodo);
};
const deleteTodo = () => {
  todosStore.delete(props.todo);
};
</script>
