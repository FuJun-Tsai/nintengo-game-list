<template>
    <div id="nav" class="d-flex flex-wrap justify-content-between align-items-center p-2">
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
           class="d-flex flex-column d-md-flex flex-md-row links">
        <router-link @click="open=false"
                     class="fs-4 me-3 my-1 ps-2 ps-md-0" to="/">首頁</router-link>
        <router-link @click="open=false"
                     class="fs-4 me-3 my-1 ps-2 ps-md-0" to="/about">列表</router-link>
      </div>
    </div>
  <router-view/>
</template>

<script>
export default {
  data() {
    return {
      open: false,
    };
  },
  methods: {
    getHeight() {
      // const itemHeight = this.$refs.list.querySelector('a').getBoundingClientRect().height;
      // const count = this.$refs.list.querySelectorAll('a').length;
      console.log(document.querySelector('.links.active'));
      // document.querySelector('.links.active').style.height = `${itemHeight * count}px`;
    },
    listToggle() {
    },
  },
  mounted() {
    this.getHeight();
  },
};
</script>

<style lang="scss">
@import './assets/scss/main.scss';

#nav{
  background: $color-main;
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
  @media (max-width:768px) {
    flex-basis: 100%;
    overflow: hidden;
    height: 0px;
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
</style>
