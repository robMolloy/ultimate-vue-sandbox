<template>
  <PassPropsWrapper configPropsName="RmInput" v-slot="slotProps">
    <q-input v-bind="slotProps" />
  </PassPropsWrapper>
</template>

<script setup>
import PassPropsWrapper from "./PassPropsWrapper.vue";
</script>
