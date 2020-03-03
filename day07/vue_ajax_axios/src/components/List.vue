<template>
  <div class="row">
    <h2 v-if="showTip">请输入关键字搜索相关用户</h2>
    <h2 v-else-if="showLoading">Loading....</h2>
    <h2 v-else-if="noData">没有找到相关用户</h2>
    <div
      class="card"
      v-else
      v-for="(item, index) in users"
      :key="index"
      :item="item"
    >
      <a :href="item.html" target="_blank">
        <img :src="item.avatar" style="width: 100px" />
      </a>
      <p class="card-text">{{ item.name }}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      showTip: true,
      showLoading: false,
      noData: false,
      users: []
    };
  },
  mounted() {
    this.$bus.$on("search", async keyWord => {
      this.showTip = false;
      this.showLoading = true;
      const body = await axios({
        baseURL: "https://api.github.com",
        url: "/search/users",
        method: "get",
        params: { q: keyWord }
      });
      console.log(body);
      if (body) {
        this.showLoading = false;
        this.noData = false;
      } else {
        this.showLoading = false;
        this.noData = true;
      }
      this.users = body.data.items.map(item => ({
        name: item.login,
        avatar: item.avatar_url,
        html: item.html_url
      }));
    });
  }
};
</script>

<style scoped>
.card {
  float: left;
  width: 33.333%;
  padding: 0.75rem;
  margin-bottom: 2rem;
  border: 1px solid #efefef;
  text-align: center;
}

.card > img {
  margin-bottom: 0.75rem;
  border-radius: 100px;
}

.card-text {
  font-size: 85%;
}
</style>
