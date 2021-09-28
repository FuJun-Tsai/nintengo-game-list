<template>
  <div id="nav">
    <div class="links">
      <router-link to="/">首頁</router-link>
      <router-link to="/about">列表</router-link>
    </div>
  </div>
  <router-view/>
</template>

<style lang="scss">
@for $i from 1 to 7 {
  h#{$i}{
    margin: 0;
    font-size: ( 7 - $i ) * 0.25em + 1em;
  }
}

body{
  margin: 0;
}

#nav{
  background: #e61911;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.links{
  a{
    font-size: 20px;
    color: #fff;
    margin-right: 12px;
    padding: 4px;
    text-decoration: none;
  }
}

</style>
