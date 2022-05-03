<template>
  <div style="border: 1px solid red; padding: 20px">
    <span style="max-width: 35vw">
      <h1>Parent</h1>
      <h2>I tell you what to do</h2>

      <div class="child">
        <p>
          <b>&lt;Child v-model:text="text" /&gt;</b>
        </p>
        <div class="q-pa-md">
          <span style="max-width: 35%">
            <span>Parent: {{ text }}</span>
            <input v-model="text" />
          </span>
          <span style="max-width: 35%">
            <Child v-model:text="text" />
          </span>
        </div>
      </div>

      <div class="child">
        <p>
          <b>&lt;Child2 v-model="anyVar" /&gt;</b>
        </p>
        <div>
          Parent: <input v-model="anyVar" />
          {{ anyVar }}
        </div>
        <Child2 v-model="anyVar" />
      </div>

      <div class="child">
        <p><b>&lt;Child3 v-model="anotherVar" /&gt;</b></p>
        <div class="row">
          Parent:
          <q-input v-model="anotherVar" />
          {{ anotherVar || " " }}
        </div>
        <br />
        <Child3 v-model="anotherVar" />
      </div>

      <div class="child">
        <p><b>&lt;Child4 v-model:text="moreVar" /&gt;</b></p>
        <div class="row no-wrap">
          Parent:
          <q-input v-model="moreVar"/>
          {{ moreVar }}
        </div>
        <Child4 v-model:text="moreVar" />
      </div>
    </span>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Child from "./Child.vue";
import Child2 from "./Child2.vue";
import Child3 from "./Child3.vue";
import Child4 from "./Child4.vue";

const text = ref("");
const anyVar = ref("");
const anotherVar = ref("");
const moreVar = ref("");
</script>

<style scoped>
div.child {
  border: 1px solid gray;
  padding: 5px;
  margin-bottom: 20px;
}
</style>
