<template>
<div class="container">
    <div class="row">
        <div class="col-12 text-center p-5">
            <h3>
                此頁面尚未完成或者路徑錯誤
            </h3>
            <h3>
                讀秒結束回到上一頁面
            </h3>
            <h4>
                {{now}}
            </h4>
            <a @click="btnGoBack()"
                class="btn border-2 shadow">回上一頁</a>
        </div>
    </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      now: 5,
      counter: '',
    };
  },
  methods: {
    btnGoBack() {
      clearInterval(this.counter);
      this.$router.go(-1);
    },
    countDown() {
      this.counter = setInterval(() => {
        this.now -= 1;
        if (this.now === 0) {
          clearInterval(this.counter);
          this.$router.go(-1);
        }
      }, 1000);
    },
  },
  mounted() {
    this.countDown();
  },
};
</script>

<style lang="scss">
.btn{
  background: #e60012;
  color: #fff;
}
</style>
