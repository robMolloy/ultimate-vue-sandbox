<template>
  <div>ParentText: {{modelValue}}</div>
  <input :value="modelValue" @input="(e)=>$emit('update:modelValue', e.target.value)"/>
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
