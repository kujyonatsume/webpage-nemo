<script setup>
import tab_bar from "./components/tab-bar.vue";
import preloader from "./components/preloader.vue";
</script>
<template>
  <preloader />
  <div id="main">
    <tab_bar />
    <section id="main-body">
      <div class="bg-img">
        <img src="../public/assets/img/bg/nemo.png" alt="" style="width: 100%;"><br><br>
        <router-view />
      </div>
    </section>
  </div>
</template>
<style lang="scss"></style>