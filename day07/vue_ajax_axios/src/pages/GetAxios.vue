<template>
  <div>
    <h2>GetAxios</h2>
    <input type="text" v-model="keyWord" @keyup.enter="search" />
    <h3 v-show="user.login">
      <a :href="user.html_url">当前用户：【{{ user.login }}】</a>
    </h3>
    <img
      v-show="user.login"
      :src="user.avatar_url"
      alt="user"
      style="width:100px;"
    />
  </div>
</template>

<script>
import axios from "axios";
import { BASE_URL } from "../config";
export default {
  data() {
    return {
      keyWord: "",
      user: {}
    };
  },
  methods: {
    async search() {
      const body = await axios("/search/users", {
        baseURL: BASE_URL,
        methods: "get",
        params: { q: this.keyWord }
      });
      console.log(body);
      this.user = body.data.items[0];
    }
  }
};
</script>

<style scoped></style>
