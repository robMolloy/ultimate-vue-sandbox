<template>
  <div>ParentText: {{ modelValue }}</div>
  <q-input
    :model-value="modelValue"
    @update:modelValue="(e) => $emit('update:modelValue', e)"
  />
</template>

<script setup>
defineProps({
  modelValue: {
    type: String,
    default: () => "hellp",
  },
});

defineEmits(["update:modelValue"]);

</script>
