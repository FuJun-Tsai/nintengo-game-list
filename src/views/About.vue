<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p v-for="(item, index) in games" :key='index'>{{item}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      games: [],
    };
  },
  methods: {
    getData() {
      const source = 'https://sheets.googleapis.com/v4/spreadsheets/1ZAFezd3cItauJwNMB4mRqTHOck_8usjE5RFcgzowiso/values/遊戲列表?alt=json&key=AIzaSyA1tZh-XNAsEOc4sxWjyGoFznw-JlITBpE';
      this.$http.get(source)
        .then((res) => {
          this.games = res.data.values;
        });
    },
  },
  created() {
    this.getData();
  },
};
</script>
