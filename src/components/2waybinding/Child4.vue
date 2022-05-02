<template>
  <div>ParentText: {{ text }}</div>
  <q-input
    :model-value="text"
    @update:modelValue="changeValue"
    @keydown="onKeyDown"
  />
</template>

<script setup>
defineProps({
  text: {
    type: String,
    default: () => "hellp",
  },
});

const emit = defineEmits(["update:text"]);
const changeValue = (value) => emit("update:text", value);
const onKeyDown = (e) => {
  if (e.keyCode === 13) changeValue("");
};
</script>
