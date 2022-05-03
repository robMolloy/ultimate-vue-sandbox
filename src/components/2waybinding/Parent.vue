<template>
  <div>
    <span style="max-width: 35vw">
      <h1>Parent</h1>
      <h2>I tell you what to do</h2>

      <div class="child">
        <p class="flex flex-center"><b>&lt;Child v-model:text="text" /&gt;</b></p>
        <div class="row">
          Parent:
          <input v-model="text" />
          {{ text }}
        </div>
        <Child v-model:text="text" />
      </div>

      <div class="child">
        <p class="flex flex-center"><b>&lt;Child2 v-model="anyVar" /&gt;</b></p>
        <div class="row">
          Parent:
          <input v-model="anyVar" />
          {{ anyVar }}
        </div>
        <Child2 v-model="anyVar" />
      </div>

      <div class="child">
        <p class="flex flex-center"><b>&lt;Child3 v-model="anotherVar" /&gt;</b></p>
        <div class="row">
          Parent:
          <q-input v-model="anotherVar" />
          {{ anotherVar }}
        </div>
        <br />
        <Child3 v-model="anotherVar" />
      </div>

      <div class="child">
        <p class="flex flex-center"><b>&lt;Child4 v-model:text="moreVar" /&gt;</b></p>
        <div class="row">
          Parent:
          <q-input v-model="moreVar" />
          {{ moreVar }}
        </div>
        <Child4 v-model:text="moreVar" />
      </div>
      <div class="child">
        <p class="flex flex-center"><b>Semi-one-way binding</b></p>
        <p class="flex flex-center"><b>&lt;Child5 ref="child5Element" /&gt;</b></p>
        <q-input v-model="child5Var" ref="parent5Element" />
        <q-btn @click="() => child5Element.changeValue('blah')"> change to blah </q-btn>
        <q-btn @click="() => parent5Element.focus()"> focus parent </q-btn>
        <q-btn @click="() => child5Element.focus()"> focus child </q-btn>

        <Child5 ref="child5Element" v-model="child5Var" />
      </div>
    </span>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import Child from "./Child.vue";
import Child2 from "./Child2.vue";
import Child3 from "./Child3.vue";
import Child4 from "./Child4.vue";
import Child5 from "./Child5.vue";

const text = ref("");
const anyVar = ref("");
const anotherVar = ref("");
const moreVar = ref("");
const child5Var = ref("");

const parent5Element = ref();
const child5Element = ref();

watch(child5Var, (newValue) => {
  console.log(123);
  child5Element.value.changeValue(newValue);
});
// const con = console;
</script>

<style scoped>
div.child {
  border: 1px solid gray;
  padding: 5px;
  margin-bottom: 20px;
}
</style>
