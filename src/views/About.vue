<template>
  <div class="about">
    <banner class="mb-5"></banner>
    <div class="container">
      <div class="row">
        <div class="col-lg-2 col-12 mb-4">
          <div class="card">
            <h4 class="text-center p-2 mb-3 title">標籤列表</h4>
            <div class="list">
              <div v-for="(list,key) in tags"
                   :key="list"
                   class="text-center mb-3 tag">
                <h5>{{key}}</h5>
                <ul class="list-group px-2">
                  <li v-for="item in list"
                      :key="item"
                      @click="gamesFilter(key,item)"
                      :class="{active:chosen.tag===item}"
                      class="list-group-item tag">{{item}}</li>
                </ul>
              </div>
              <div class="text-center mb-3">
                <span @click="
                        chosen={type:'',tag:''},
                        games=source.games"
                      v-if="chosen.type!==''"
                      class="d-inline-block m-auto text-center reset">列表還原</span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-10 col-12">
          <div class="card">
            <div class="row w-100 m-auto">
              <div class="title col-md-4 border-end border-bottom border-2
                          d-flex justify-content-center align-items-center col-5">
                <span>
                  {{source.title.name}}
                </span>
              </div>
              <div class="col-md-8 col-7">
                <div class="row">
                  <div class="title border-end border-bottom border-2 text-center col-md-8 col-7">
                    {{source.title.attr}}
                  </div>
                  <div class="col-md-4 col-5">
                    <div class="row">
                      <div class="title border-end border-bottom border-2 text-center col-md-6
                                  col-12 p-0 py-2 py-md-0">
                        {{source.title.dev}}
                      </div>
                      <div class="title border-bottom text-center border-2 col-md-6 py-md-0
                                  col-12 p-0 py-2">
                        {{source.title.price}}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div v-for="(item, index) in games" :key='index'
                 class="row w-100 m-auto border-bottom border-2">
              <div class="d-flex align-items-center col-md-4 col-5">
                <span>
                  {{item.name}}
                </span>
              </div>
              <div class="attr p-md-2 py-2 text-center col-md-8 col-7" >
                <div class="row">
                  <div class="d-flex
                              col-md-8 flex-md-row justify-content-md-evenly align-items-center
                              flex-column justify-content-center col-7 px-0">
                    <span v-for="(item, index) in item.attr" :key="index"
                          class="d-md-inline-block mb-md-0
                                 d-block p-1 mx-2 mb-2
                                 bg-white rounded-pill">
                          <!-- :key="item" -->
                      {{Object.entries(tags)[index][1][parseInt(item)]}}
                    </span>
                  </div>
                  <div class="col-md-4 col-5">
                    <div class="row h-100">
                      <div class="d-flex align-items-center justify-content-center
                                  col-md-6 col-12 p-0">
                        {{item.dev}}
                        </div>
                      <div class="d-flex align-items-center justify-content-center col-md-6 col-12">
                        {{item.price}}
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
      source: {
        title: {},
        games: [],
        attrs: [],
      },
      games: [],
      tags: {},
      chosen: {
        type: '',
        tag: '',
      },
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
              this.source.games.push({
                name, price, dev, attr,
              });
              if (index === res.data.values.length - 1) {
                this.games = JSON.parse(JSON.stringify(this.source.games));
              }
              return;
            }
            this.source.title.name = name;
            this.source.title.price = price;
            this.source.title.dev = dev;
          });
        });
    },
    getAttr() {
      const attr = 'https://sheets.googleapis.com/v4/spreadsheets/1ZAFezd3cItauJwNMB4mRqTHOck_8usjE5RFcgzowiso/values/共用類型表?alt=json&key=AIzaSyA1tZh-XNAsEOc4sxWjyGoFznw-JlITBpE';
      this.$http.get(attr)
        .then((res) => {
          res.data.values.forEach((list) => {
            let title = '';
            list.forEach((item, index) => {
              if (index === 0) {
                title = item;
                this.tags[title] = [];
                return;
              }
              this.tags[title].push(item);
            });
          });
        });
    },
    gamesFilter(type, tag) {
      this.chosen.type = type;
      this.chosen.tag = tag;
      Object.entries(this.tags).forEach((item, index) => {
        if (item[0] === type) {
          this.games = this.source.games
            .filter((game) => parseInt(game.attr[index], 10) === this.tags[type].indexOf(tag));
          // this.games = this.source.games.filter((game) => {
          //   return parseInt(game.attr[index], 10) === this.tags[type].indexOf(tag);
          // });
        }
      });
    },
  },
  watch: {
    chosen() {
    },
  },
  created() {
    this.getGames();
    this.getAttr();
  },
};
</script>

<style lang="scss">
  .attr{
    span{
      line-height: 1;
      cursor: pointer;
      min-width: 25%;
      height: 24px;
      @media (max-width:768px) {
        width: 100%;
      }
    }
  }

  .card{
    background: #eee;
    .title{
      background: #e60012;
      color: #fff;
    }
    .tag{
      cursor: pointer;
      span{
        background: #fff;
      }
    }
  }

  .title{
    background: #e60012 !important;
    color: #fff;
  }

  .tag.active{
    background: #e60012 !important;
    color: #fff;
  }

  .reset{
    text-decoration: underline;
    font-weight: bolder;
    color: #0077ff;
    cursor: pointer;
    &:hover{
      color: #111;
    }
  }
</style>
