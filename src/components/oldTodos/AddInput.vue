<template>
  <q-input
    :model-value="modelValue"
    @update:modelValue="changeValue"
    @keydown="addIfEnterKey"
    ref="theInput"
  >
    <template v-slot:append>
      <q-btn round dense flat :icon="icon" @click="add" />
    </template>
  </q-input>
</template>

<script>
export default {
  expose: ["focusInput"],
  methods: {
    focusInput() {
      this.$refs.theInput.focus();
    },
  },
};
</script>

<script setup>

const emit = defineEmits(["update:modelValue", "press:enter", "ready"]);
const props = defineProps({
  icon: {
    type: String,
    default: () => "send",
  },
  modelValue: {
    type: String,
    default: () => "",
  },
  clearAfterAdd: {
    type: Boolean,
    default: true,
  },
});

const changeValue = (value) => emit("update:modelValue", value);

const add = () => {
  emit("press:enter", props.modelValue);
  if (props.clearAfterAdd) emit("update:modelValue", "");
};
const addIfEnterKey = (e) => {
  if (e.keyCode === 13) add();
};
</script>
