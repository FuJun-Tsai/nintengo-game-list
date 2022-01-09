<template>
  <banner></banner>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h1 class="mb-2 ps-2 name">
          {{name}}
        </h1>
      </div>
      <div class="col-12 mb-4 ps-3">
        <span v-for="item, index in attr"
              :key="item">
          <span v-if="index > 0">／</span>
          <span class="color-red">
            {{item}}
          </span>
        </span>
      </div>
      <div v-for="item,index in content.length"
           :key="index"
           class="col-12 mb-5">
           <h3 class="mb-1 letter-space-1">
             {{content.title[index]}}
           </h3>
           <hr class="mt-0">
           <p v-html="content.description[index]" class="mb-3 letter-space-1"></p>
           <img :src="require(`../assets/imgs/${name.split(' ').join('-')}/${index + 1}.jpg`)"
                class="m-auto col-md-8 d-block"
                alt="圖片不完整或者沒有圖片">
      </div>
      <div class="col-12 mb-5 text-center">
        <span class="btn" @click="goList()">返回列表</span>
      </div>
    </div>
  </div>
</template>

<script>
import banner from '../components/banner.vue';

export default {
  components: {
    banner,
  },
  data() {
    return {
      name: '',
      attr: '',
      content: {
        title: [],
        description: [],
        length: 0,
      },
    };
  },
  methods: {
    getData() {
      const [name] = [this.$route.params.name];
      const source = `https://sheets.googleapis.com/v4/spreadsheets/1ZAFezd3cItauJwNMB4mRqTHOck_8usjE5RFcgzowiso/values/${name}?alt=json&key=AIzaSyA1tZh-XNAsEOc4sxWjyGoFznw-JlITBpE`;
      this.$http.get(source)
        .then((res) => {
          // const regExp = new RegExp(/\n/, 'gi');
          const regExp = /\n/gi;
          [this.name, this.attr] = [res.data.values[0][0], res.data.values[1]];
          res.data.values.splice(0, 2);
          res.data.values.forEach((item, index) => {
            if (index % 2 === 1) {
              let word = '';
              word = item[0].replace(regExp, '<br>');
              this.content.description.push(word);
            } else {
              this.content.title.push(item[0]);
              this.content.length += 1;
            }
          });
        })
        .catch(() => {
          this.$router.replace({
            name: 'Error',
          });
        });
    },
    goList() {
      this.$router.back();
    },
  },
  created() {
    this.getData();
  },
};
</script>

<style lang="scss">
  .name{
    background: linear-gradient(90deg,#e60012 70%,transparent 90%);
    transform: skew(-20deg);
    color: #fff;
  }
  hr{
    background: #e60012;
    height: 2px !important;
  }
  .color-red{
    color: #e60012;
  }
</style>
