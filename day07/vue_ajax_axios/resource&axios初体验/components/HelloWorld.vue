<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p v-show="user">当前用户为【{{ user.login }}】</p>
    <img v-show="user" :src="user.avatar_url" alt="user" />
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      user: {}
    };
  },
  async mounted() {
    /* 
    const body = await this.$http.get(
      "https://api.github.com/search/users?q=lijg1997"
    );
    this.user = body.data.items[0]; 
    */
    const body = await axios.get(
      "https://api.github.com/search/users?q=sharkCC"
    );
    console.log(body);
    this.user = body.data.items[0];
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
</style>
