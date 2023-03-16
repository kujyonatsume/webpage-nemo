<script setup>
import tabbar from "./tabbar.vue";
</script>
<template>
  <div id="main">
    <tabbar />
    <section id="main-body" class="">
      <div class="bg-img">
        <img src="../../public/assets/img/bg/nemo.png" alt="" style="width: 100%;"><br><br>
        <router-view />
      </div>
      <footer class="footer p-y-3 text-right">
        <div class="container">
          <strong> 網頁設計 : 夏目#2001 <br>開源 : <a href="https://github.com/kujyonatsume/webpage-nemo">GitHub</a></strong>
        </div>
      </footer>
    </section>
  </div>
</template>
<style lang="scss"></style>