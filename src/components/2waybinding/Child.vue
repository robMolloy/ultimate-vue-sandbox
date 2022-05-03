<template>
  <div>
    Child:
    <input :value="text" @input="(e) => $emit('update:text', e.target.value)" />
  </div>
  {{ text }}
</template>

<script setup>
defineProps({
  text: {
    type: String,
    default: () => "hellp",
  },
});

defineEmits(["update:text"]);
</script>
