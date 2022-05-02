<template>
  <div>
    <h1 @click="logtitle" ref="title">title</h1>
    <div @click="logdiv" ref="div">div</div>
    <span @click="logspan" ref="span">span</span>
    <input @click="loginput" ref="input" />
  </div>
  <div>
    <q-btn @click="logthisqbtn" ref="qbtn">logthisqbtn</q-btn>
    <q-btn @click="logtitle">logtitle</q-btn>
    <q-btn @click="logdiv">logdiv</q-btn>
    <q-btn @click="logspan">logspan</q-btn>
    <q-btn @click="loginput">loginput</q-btn>
  </div>
</template>

<script setup>
import { ref } from "vue";

const title = ref();
const div = ref();
const span = ref();
const input = ref();
const qbtn = ref();

const logtitle = () => console.log(title);
const logdiv = () => console.log(div);
const logspan = () => console.log(span);
const loginput = () => console.log(input);
const logthisqbtn = () => console.log(qbtn);
</script>
