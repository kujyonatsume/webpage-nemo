<script setup>
import { ref } from 'vue';
import floor from './components/floor.vue';
const ishome = ref(location.pathname === '/')
console.log(location.pathname);
</script>

<template>
  <div id="list" v-if="ishome"><router-link class="nav-link" to="/nemo">企劃</router-link></div>
  <router-view />
  <floor />
</template>
<style lang="scss">
</style>