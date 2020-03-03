<template>
  <div class="row">
    <h2 v-if="isFirst">请输入关键字搜索相关用户</h2>
    <h2 v-else-if="isLoading">Loading......</h2>
    <h2 v-else-if="error">搜索出错，请联系管理员</h2>
    <Item v-else v-for="(item, index) in users" :key="index" :item="item" />
  </div>
</template>

<script>
import PubSub from "pubsub-js";
import axios from "axios";
import Item from "./item";
export default {
  data() {
    return {
      isFirst: true,
      isLoading: false,
      error: "",
      users: []
    };
  },
  components: { Item },
  mounted() {
    PubSub.subscribe("searchUser", async (name, keyWord) => {
      this.isFirst = false;
      this.isLoading = true;
      this.error = "";
      try {
        const body = await axios({
          baseURL: "https://api.github.com",
          url: "/search/users",
          method: "get",
          params: { q: keyWord },
          timeout: 8000
        });
        // console.log(body);
        this.isLoading = false;
        this.users = body.data.items.map(item => ({
          rep: item.html_url,
          avatar: item.avatar_url,
          userName: item.login
        }));
      } catch (error) {
        this.isLoading = false;
        this.error = error;
      }
    });
  }
};
</script>

<style scoped>
</style>