<template>
  <div class="about">
    <banner class="mb-5"></banner>
    <div class="container">
      <div class="row">
        <div class="col-md-2 col-12">
          {{basic}}
        </div>
        <div class="col-md-10 col-12">
          <table>
            <thead>
              <tr>
                <th>
                  {{title.name}}
                </th>
                <th colspan="3">
                  {{title.attr}}
                </th>
                <th class="text-center">
                  {{title.dev}}
                </th>
                <th class="text-center">
                  {{title.price}}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in games" :key='index'>
                <td class="name">{{item.name}}</td>
                <td class="attr" v-for="(item,index) in item.attr" :key="item">
                  <span class="pe-3 ps-3 me-2">
                    {{basic[index][item]}}
                  </span>
                </td>
                <td class="dev text-end">{{item.dev}}</td>
                <td class="price text-end" width="100">{{item.price}}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import banner from '../components/banner.vue';

export default {
  data() {
    return {
      title: {},
      games: [],
      basic: [],
    };
  },
  components: {
    banner,
  },
  methods: {
    getGames() {
      const games = 'https://sheets.googleapis.com/v4/spreadsheets/1ZAFezd3cItauJwNMB4mRqTHOck_8usjE5RFcgzowiso/values/遊戲列表?alt=json&key=AIzaSyA1tZh-XNAsEOc4sxWjyGoFznw-JlITBpE';
      this.$http.get(games)
        .then((res) => {
          res.data.values.forEach((item, index) => {
            const [name, price, dev] = [item[0], item[1], item[2]];
            let attr = item[3];
            if (index) {
              attr = attr.split('');
              this.games.push({
                name, price, dev, attr,
              });
              return;
            }
            this.title.name = name;
            this.title.price = price;
            this.title.dev = dev;
          });
        });
    },
    getAttr() {
      const attr = 'https://sheets.googleapis.com/v4/spreadsheets/1ZAFezd3cItauJwNMB4mRqTHOck_8usjE5RFcgzowiso/values/共用類型表?alt=json&key=AIzaSyA1tZh-XNAsEOc4sxWjyGoFznw-JlITBpE';
      this.$http.get(attr)
        .then((res) => {
          res.data.values.forEach((item) => {
            this.basic.push(item);
          });
        });
    },
  },
  created() {
    this.getGames();
    this.getAttr();
  },
};
</script>

<style lang="scss">
  table{
    width: 100%;
    .attr{
      span{
        border: 1px solid #111;
        border-radius: 16px;
        line-height: 1;
      }
    }
    th{
      color: #fff;
      background: #e60012;
      line-height: 2;
      border: 2px solid #fff;
    }
    td{
      line-height: 2.5;
      border: 1px solid #fff;
      border-bottom: 1px solid #111;
    }
  }
</style>
