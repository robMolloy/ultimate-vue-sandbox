<template>
  <div style="border: 1px solid red; padding: 20px">
    <span style="max-width: 35vw">
      <h1>Parent</h1>
      <h2>I tell you what to do</h2>
      <div class="row">
        <span class="col">
          <div>ParentText: {{ text }}</div>
          <input v-model="text" />
        </span>
        <span class="col">
          <Child v-model:text="text" />
          &lt;Child v-model:text="text" />
        </span>
      </div>

      <br />
      <div class="row">
        <span class="col">
          <div>ParentText: {{ anyVar }}</div>
          <input v-model="anyVar" />
        </span>
        <span class="col">
          <Child2 v-model="anyVar" />
          &lt;Child2 v-model="anyVar" />
        </span>
      </div>
      <br />

      <div class="row">
        <span class="col">
          <div>ParentText: {{ anotherVar }}</div>
          <q-input v-model="anotherVar" />
        </span>
        <span class="col">
          <Child3 v-model="anotherVar" />
          &lt;Child3 v-model="anotherVar" />
        </span>
      </div>
      <br />
      <div class="row">
        <span class="col">
          <div>ParentText: {{ moreVar }}</div>
          <q-input v-model="moreVar" />
        </span>
        <span class="col">
          <Child4 v-model:text="moreVar" />
          &lt;Child4 v-model:text="moreVar" />
        </span>
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
