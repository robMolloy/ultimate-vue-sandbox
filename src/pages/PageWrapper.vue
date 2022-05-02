<template>
  <Wrapped />

  <RmInput v-model="val1" />

</template>

<script setup>
import { ref } from "vue";

import Wrapped from "../components/wrapInject/Wrapped.vue";
import RmInput from "../components/wrapInject/RmInput.vue";

const val1 = ref("asd");
</script>
