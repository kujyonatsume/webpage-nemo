<template>
  <header class="fixed-top">
    <strong id="tab-bar" class="position-absolute container-fluid">
      <h1 id="top-title" class="d-flex justify-content-center">測試版企劃網站</h1>
      <nav class="navbar navbar-expand justify-content-center">
        <ul class="navbar-nav navbar-nav-scroll1">
          <li class="nav-item"><router-link class="nav-link" to="/nemo/intro">企劃</router-link></li>
          <li class="nav-item"><router-link class="nav-link" to="/nemo/message">留言版</router-link></li>
          <li class="nav-item"><router-link class="nav-link disabled" to="/nemo/action">以往的企畫</router-link></li>
          <li class="nav-item"><router-link class="nav-link" to="/nemo/about">關於我們</router-link></li>
        </ul>
      </nav>
    </strong>
  </header>
</template>
<style lang="scss">
#tab-bar {
  background-color: #0004;

  #top-title {
    padding-top: 10px;
    color: #fc5b5b;
  }
}
</style>