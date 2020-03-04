<template>
  <div class="row">
    <h2 v-if="isFirst">请输入关键字查询相关用户</h2>
    <h2 v-else-if="isLoading">Loading....</h2>
    <h2 v-else-if="noData">没有查询到相关用户</h2>
    <Item v-else v-for="(item,index) in users" :key="index" :item="item" />
  </div>
</template>

<script>
import axios from "axios";
import Item from "./item";
export default {
  data() {
    return {
      isFirst: true,
      isLoading: false,
      noData: false,
      users: []
    };
  },
  components: { Item },
  mounted() {
    this.$bus.$on("search", async name => {
      this.isFirst = false;
      this.isLoading = true;
      const body = await axios.get("/search/users", {
        baseURL: "https://api.github.com",
        params: { q: name }
      });
      if (body.data.items.length) {
        this.users = body.data.items.map(item => ({
          href: item.html_url,
          src: item.avatar_url,
          name: item.login
        }));
        this.isLoading = false;
        this.noData = false;
      } else {
        this.isLoading = false;
        this.noData = true;
      }
    });
  }
};
</script>

<style scoped>
</style>