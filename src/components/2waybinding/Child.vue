<template>
  <div>ParentText: {{text}}</div>
  <input :value="text" @input="(e)=>$emit('update:text', e.target.value)"/>
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
