<template>
  <div id="preloader" class="position-fixed d-flex justify-content-center">
    <div id="load" class="progress">
      <div id="load-bar" class="progress-bar progress-bar-striped progress-bar-animated"></div>
    </div>
  </div>
  <header class="fixed-top">
    <strong id="tab-bar" class="position-absolute container-fluid">
      <h1 id="top-title" class="d-flex justify-content-center">測試版企劃網站</h1>
      <nav class="navbar navbar-expand justify-content-center">
        <ul class="navbar-nav navbar-nav-scroll1">
          <li class="nav-item"><router-link class="nav-link" to="/intro">企劃</router-link></li>
          <li class="nav-item"><router-link class="nav-link" to="/message">留言版</router-link></li>
          <li class="nav-item"><router-link class="nav-link disabled" to="/action">以往的企畫</router-link></li>
          <li class="nav-item"><router-link class="nav-link" to="/about">關於我們</router-link></li>
        </ul>
      </nav>
    </strong>
  </header>
  <main id="main">
    <img src="../public/assets/img/bg/nemo.png" alt="" style="width: 100%;">
    <div id="view"><router-view /></div>
  </main>
  <footer id="floor" class="text-center card-footer bg-danger">
    <strong> Copyright© 2023 九条夏目 保留著作權</strong>
  </footer>
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

    #load-bar {
      width: 0%;
      background-color: pink;
      color: crimson;
      text-align: left
    }
  }
}

#main {
  padding-bottom: 10px;

  #view {
    padding-top: 10px;
    padding-bottom: 10px;

  }
}

#floor {
  padding: 10px;
}
</style>