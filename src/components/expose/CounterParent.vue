<template>
  <div>
    <CounterChild ref="child" />
    <q-btn @click="() => $refs.child.increment()">increment from parent</q-btn>
    <q-btn @click="() => child.increment()">increment from parent (composition value)</q-btn>
    <!-- <q-btn @click="$refs.child.increment">this increment from parent fails</q-btn> -->
    <br />
    <br />
    This works: &lt;q-btn @click="() => $refs.child.increment()">increment passes&lt;/q-btn>
    <br />
    <br />
    This errors: &lt;q-btn @click="$refs.child.increment">increment fails&lt;/q-btn>
    <br />
    <br />
    or leverage an isMounted boolean [rubbish idea] - didn't realise about;
    <br />
    &emsp; - `const child = ref()`
  </div>
</template>

<script setup>
import { ref } from "vue";
import CounterChild from "./CounterChild.vue";

const child = ref();
</script>
