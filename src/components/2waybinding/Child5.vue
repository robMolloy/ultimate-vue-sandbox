<template>
  <q-input v-model="inputValue" @update:model-value="changeValue" ref="inputElement" />
</template>

<script setup>
import { ref } from "vue";

const emit = defineEmits(["update:modelValue"]);

const inputValue = ref("");
const inputElement = ref();

const changeValue = (value) => emit("update:modelValue", value);

const focus = () => inputElement.value.focus();

defineExpose({ inputValue, changeValue, focus });
</script>
