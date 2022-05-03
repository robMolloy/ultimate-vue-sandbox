<template>
  <q-input
    bottom-slots
    :model-value="modelValue"
    @update:modelValue="(e) => $emit('update:modelValue', e)"
    label="Add new Todo"
    @keyup="onInput"
    v-bind="$attrs"
  >
    <template v-slot:append>
      <q-btn round dense flat icon="send" @click="createTodo" />
    </template>
  </q-input>
  <div>
    {{ modelValue }}
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useSyncedTodosStore } from "src/stores/useSyncedTodosStore";

const emit = defineEmits(["create", "update:modelValue"]);

const props = defineProps({
  modelValue: {
    type: String,
    default: () => "hellp",
  },
});

const changeValue = (value) => {
  emit("update:modelValue", value);
};

const todosStore = useSyncedTodosStore();
const newTodo = computed(() => ({ task: props.modelValue, isComplete: false }));

const createTodo = () => {
  todosStore.create(newTodo.value);
  emit("create", newTodo.value);
  changeValue("");
};

const onInput = (e) => {
  if (e.keyCode === 13) createTodo();
};
</script>
