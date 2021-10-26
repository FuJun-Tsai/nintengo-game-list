<template>
  <div id="nav" ref="nav"
       class="d-flex flex-wrap justify-content-between align-items-center
              position-fixed top-0 w-100 p-2 shadow-lg">
    <h1 class="mb-0">任天堂遊戲評測</h1>
    <div @click="open = !open"
          id="toggle"
          class="me-2 border border-2 rounded position-relative d-md-none"
          :class="{active:open===true}">
      <span id="top"></span>
      <span id="middle"></span>
      <span id="bottom"></span>
    </div>
    <div :class="{'active':open===true}"
          ref="list"
          class="flex-column d-md-flex flex-md-row links">
      <router-link @click="open=false"
                    class="fs-4 ms-md-2 me-md-2 my-1 ps-2 ps-md-0" to="/">首頁</router-link>
      <router-link @click="open=false"
                    class="fs-4 ms-md-2 me-md-2 my-1 ps-2 ps-md-0" to="/about">列表</router-link>
    </div>
  </div>
  <router-view class="mb-5" />
  <footer>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <p class="mb-0">圖片版權皆為 任天堂 所有，網站無任何金流交易。</p>
          <p class="mb-0">Copyright © {{year}} Chi. All rights reserved.</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      open: false,
      year: 0,
      list: {
        items: 0,
        height: 0,
      },
    };
  },
  methods: {
    navHeight() {
      const navHeight = this.$refs.nav.getBoundingClientRect().height;
      document.querySelector('#app').style.marginTop = `${navHeight}px`;
    },
    getHeight() {
      this.list.height = this.$refs.list.querySelector('a').getBoundingClientRect().height + 8;
      this.list.items = this.$refs.list.querySelectorAll('a').length;
    },
    getTime() {
      this.year = new Date().getFullYear();
    },
  },
  mounted() {
    this.navHeight();
    this.getHeight();
    this.getTime();
  },
};
</script>

<style lang="scss">
@import './assets/scss/main.scss';

#nav{
  background: $color-main;
  z-index: 1;
  h1{
    color: $color-back;
  }
  #toggle{
    width: 40px;
    height: 30px;
    transition-duration: .3s;
    $size: 50%;
    $width: 2px;
    $color: #fff;
    #middle{
      position: absolute;
      transition-duration: .3s;
      width: $size;
      height: $width;
      background: $color;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
    }
    #top{
      position: absolute;
      transition-duration: .3s;
      width: $size;
      height: $width;
      background: $color;
      top: 25%;
      left: 50%;
      transform: translate(-50%,-50%);
    }
    #bottom{
      position: absolute;
      transition-duration: .3s;
      width: $size;
      height: $width;
      background: $color;
      top: 75%;
      left: 50%;
      transform: translate(-50%,-50%);
    }
  }
  #toggle.active{
    $size: 50%;
    $width: 2px;
    $color: #fff;
    #middle{
      position: absolute;
      width: $size / 2;
      height: $width;
      background: $color;
      top: 40%;
      left: 50%;
      transform: translate(-50%,-50%) rotate(90deg);
    }
    #top{
      position: absolute;
      width: $size / 2;
      height: $width;
      background: $color;
      top: 75%;
      left: 60%;
      transform-origin: center left;
      transform: translate(-50%,-50%) rotate(-45deg);
    }
    #bottom{
      position: absolute;
      width: $size / 2;
      height: $width;
      background: $color;
      top: 75%;
      left: 65%;
      transform-origin: center left;
      transform: translate(-50%,-50%) rotate(-135deg);
    }
  }
}

.links{
  transition-duration: .3s;
  display: flex;
  @media (max-width:768px) {
    height: 0;
    flex-basis: 100%;
    overflow: hidden;
    &.active{
      height: auto;
    }
  }
  a{
    color: $color-back;
    text-decoration: none;
    &.active{
      border-bottom: 2px solid #fff;
      box-sizing: border-box;
      display: inline;
      @media (max-width:768px) {
        border-bottom: 0px solid #fff;
        background: #fff;
        color: #e60012;
      }
    }
  }
}

footer{
  padding: 20px 0;
  color: #fff;
  background: #e60012;
}
</style>
