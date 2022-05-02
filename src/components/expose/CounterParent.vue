<template>
  <div>
    <CounterChild ref="child" />
    <q-btn @click="() => $refs.child.increment()">increment from parent</q-btn>
    <!-- <q-btn @click="$refs.child.increment">this increment from parent fails</q-btn> -->
    <br />
    {{ `This works
    <q-btn @click="() => $refs.child.increment()">increment passes</q-btn>`}}
    <br />
    {{ `This errors: <q-btn @click="$refs.child.increment">increment fails</q-btn>` }}
    <br />
    {{ `or leveragge an isMounted boolean` }}
  </div>
</template>

<script setup>
import CounterChild from "./CounterChild.vue";
</script>
