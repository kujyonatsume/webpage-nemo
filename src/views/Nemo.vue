<script setup>
import preloader from '../components/preloader.vue'
import tab_bar from '../components/tab-bar.vue'
</script>
<template>
  <div id="nemo">
    <preloader />
    <tab_bar />
    <main id="main">
      <img src="../../public/assets/img/bg/nemo.png" alt="" style="width: 100%;">
      <div id="view"><router-view /></div>
    </main>
  </div>
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