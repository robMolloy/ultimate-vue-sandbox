<template>
  <slot v-bind="props"></slot>
</template>

<script>
export default {
  inheritAttrs: false,
};
</script>

<script setup>
import { useAttrs } from "vue";
import _ from "lodash";
import allConfigProps from "./configProps";

const oProps = defineProps({
  configPropsName: {
    required: true,
    type: String,
  },
});

const configProps = allConfigProps[oProps.configPropsName] || {};

const attrs = useAttrs();
const props = _.merge(configProps, attrs);
</script>
