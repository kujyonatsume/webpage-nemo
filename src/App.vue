<script setup>

</script>
<template>
  <section class="fixed-top">
    <div class="tab-bar position-absolute container-fluid bg-pink">
      <h1 id="top-title" class="d-flex justify-content-center" style="padding-top: 10px;">測試版企劃網站</h1>
      <nav class="navbar navbar-expand justify-content-center">
        <ul class="navbar-nav navbar-nav-scroll">
          <li class="nav-item">
            <router-link class="nav-link" to="/intro">生日企劃</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/message">絆星留言版</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link disabled" to="/action">以往的企畫</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about">關於我們</router-link>
          </li>
        </ul>
      </nav>
    </div>
  </section>
  <section class="main position-absolute">
    <div class="bg-img">
      <img src="../public/assets/img/bg/nemo.png" alt="" style="width: 100%;">
      <router-view />
    </div>
    <footer class="footer p-y-3 text-right">
      <div class="container">
        <p>制作者 : 夏目#2001</p>
      </div>
    </footer>
  </section>
</template>
<style lang="scss"></style>