<template>
  <q-input ref="el"></q-input>
  <q-btn @click="log(1, Object.assign({}, el))">log elm</q-btn>
  <q-btn @click="() => el.focus()">focus</q-btn>
</template>

<script setup>
import { ref } from "vue";

const el = ref();
const { log } = console;
</script>
