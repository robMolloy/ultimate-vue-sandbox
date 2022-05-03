<template>
  <div class="row">
    Child:
    <q-input
      :model-value="modelValue"
      @update:modelValue="(e) => $emit('update:modelValue', e)"
    />
    {{ modelValue }}
  </div>
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
