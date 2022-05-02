<template>
  <PassPropsWrapper
    configPropsName="Wrapped"
    v-slot="slotProps"
    :style="{ border: '1px solid black' }"
  >
    <div v-bind="slotProps">some div</div>
  </PassPropsWrapper>
</template>

<script setup>
import PassPropsWrapper from "./PassPropsWrapper.vue";
</script>
