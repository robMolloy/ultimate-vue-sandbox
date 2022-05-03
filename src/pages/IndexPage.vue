<template>
  <q-page padding>
    <div>
      <q-btn
        class="full-width"
        v-for="{path} of routes"
        :to="`/${path}`"
        :key="path"
      >
        {{ path || 'home' }}
      </q-btn>
    </div>
  </q-page>
</template>

<script setup>
import router from "src/router/routes";

const routes = router[0].children;
</script>
