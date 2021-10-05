<template>
    <div id="nav" class="d-flex justify-content-between align-items-center">
      <h1 class="ms-2">Chi 遊戲評測</h1>
      <div class="links">
        <router-link class="fs-4 me-3" to="/">首頁</router-link>
        <router-link class="fs-4 me-3" to="/about">列表</router-link>
      </div>
    </div>
  <router-view/>
</template>

<style lang="scss">
@import './assets/scss/main.scss';

#nav{
  background: $color-main;
  h1{
    color: $color-back;
  }
}

.links{
  a{
    color: $color-back;
    text-decoration: none;
  }
}
</style>
