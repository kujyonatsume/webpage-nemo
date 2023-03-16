<script setup>
import mainform from "./components/main.vue";
</script>
<template>
  <div id="preloader" class="position-fixed d-flex justify-content-center">
    <div id="load" class="progress">
      <div id="load-bar" class="progress-bar progress-bar-striped progress-bar-animated"
        style="width: 0%; background-color: pink; color: crimson; text-align:left"></div>
    </div>
  </div>
  <mainform />
</template>
<style lang="scss">
#preloader {
  height: 100%;
  width: 100%;
  background: #000e;
  z-index: 9999;
  #load {
    height: 40px;
    width: 30%;
    position: fixed;
    top: 70%;
  }
}</style>