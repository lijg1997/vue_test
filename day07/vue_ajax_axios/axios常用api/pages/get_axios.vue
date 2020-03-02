<template>
  <div style="margin: 100px auto;">
    <h2>GetAxios</h2>
    <div>
      <p>用户名：【{{ user1.login }}】</p>
      <img :src="user1.avatar_url" alt="user1" />
    </div>
    <div>
      <p>用户名：【{{ user2.login }}】</p>
      <img :src="user2.avatar_url" alt="user1" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { BASE_URL } from "../config";
export default {
  data() {
    return {
      user1: {},
      user2: {}
    };
  },
  async mounted() {
    const lijg = axios({
      baseURL: BASE_URL,
      url: "/search/users",
      params: { q: "lijg1997" }
    });
    const shark = axios({
      baseURL: BASE_URL,
      url: "/search/users",
      params: { q: "sharkCC" }
    });
    // const body = await Promise.all([lijg, shark]);
    // console.log(body);
    axios.all([lijg, shark]).then(
      axios.spread((a, b) => {
        console.log(this);
        console.log("a", a);
        this.user1 = a.data.items[0];
        console.log("b", b);
        this.user2 = b.data.items[0];
      })
    );
  }
};
</script>

<style scoped></style>
