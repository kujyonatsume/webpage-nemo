<script setup>
import preloader from "./components/preloader.vue";
import tab_bar from "./components/tab-bar.vue";
import floor from "./components/floor.vue";
</script>
<template>
  <preloader />
  <tab_bar />
  <main id="main">
    <img src="../public/assets/img/bg/nemo.png" alt="" style="width: 100%;">
    <div id="view"><router-view /></div>
    
  </main>
  <floor />
</template>
<style lang="scss">

#main {
  padding-bottom: 10px;

  #view {
    padding-top: 10px;
    padding-bottom: 10px;
  
  }
}

</style>