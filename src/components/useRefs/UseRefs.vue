<template>
  <div>
    <h1 @click="logtitle" ref="title">title</h1>
    <div @click="logdiv" ref="div">div</div>
    <span @click="logspan" ref="span">span</span>
    <input @click="loginput" ref="input" />
  </div>
  <div>
    <q-btn class="full-width" @click="logthisqbtn" ref="qbtn">logthisqbtn</q-btn>
    <q-btn class="full-width" @click="logtitle">logtitle</q-btn>
    <q-btn class="full-width" @click="logdiv">logdiv</q-btn>
    <q-btn class="full-width" @click="logspan">logspan</q-btn>
    <q-btn class="full-width" @click="loginput">loginput</q-btn>
    <br />
    <br />
    <br />
    <q-btn class="full-width" @click="() => log(qbtn)">logthatqbtnagain</q-btn>
  </div>
</template>

<script setup>
import { ref } from "vue";

const { log } = console;

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
