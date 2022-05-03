<template>
  <div>
    Child:
    <input
      :value="modelValue"
      @input="(e) => $emit('update:modelValue', e.target.value)"
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
