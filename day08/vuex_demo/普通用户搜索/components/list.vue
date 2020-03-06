<template>
  <div class="row">
    <h2 v-if="showTip">请输入您要搜索的用户</h2>
    <h2 v-else-if="showLoading">Loading....</h2>
    <h2 v-else-if="noData">没有搜索到相关的用户</h2>
    <Item v-else v-for="(item, index) in users" :item="item" :key="index" />
  </div>
</template>

<script>
import axios from "axios";
import Item from "./item";
export default {
  data() {
    return {
      showTip: true,
      showLoading: false,
      noData: false,
      users: []
    };
  },
  components: { Item },
  mounted() {
    this.$bus.$on("search", async searchName => {
      this.showTip = false;
      this.showLoading = true;
      const body = await axios.get("https://api.github.com/search/users", {
        params: { q: searchName }
      });
      if (body.data.items.length) {
        this.showLoading = false;
        this.noData = false;
        this.users = body.data.items.map(item => ({
          href: item.html_url,
          src: item.avatar_url,
          name: item.login
        }));
      } else {
        this.showLoading = false;
        this.noData = true;
      }
    });
  }
};
</script>

<style scoped></style>
