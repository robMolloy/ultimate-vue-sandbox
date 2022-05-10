<template>
  <div>
    <q-input
      v-model="input1Value"
      ref="input1"
      label="rule: wait1SecondAndError()"
      :rules="[wait1SecondAndError()]"
    />
    input1hasError: {{ input1hasError }}
    <br />
    <q-input
      ref="input2"
      v-model="input2Value"
      label="rule: stringMustContainXandY('c', 'ass')"
      :rules="[stringMustContainXandY('c', 'ass')]"
    />
    input2hasError: {{ input2hasError }}
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useStringRules } from "src/rules";

const { wait1SecondAndError, stringMustContainXandY } = useStringRules();

const input1 = ref();
const input2 = ref();

const input1Value = ref("");
const input2Value = ref("");

const input1hasError = computed(() => input1?.value?.hasError);
const input2hasError = computed(() => input2?.value?.hasError);
</script>
