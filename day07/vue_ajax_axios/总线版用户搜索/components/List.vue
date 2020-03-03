<template>
  <div class="row">
    <h2 v-if="isFirst">请输入关键字搜索相关用户</h2>
    <h2 v-else-if="isLoading">Loading......</h2>
    <h2 v-else-if="error">搜索失败，请联系管理员</h2>
    <Item v-else v-for="(item, index) in users" :key="index" :item="item" />
  </div>
</template>

<script>
import Item from "./Item";
export default {
  data() {
    return {
      isFirst: true,
      isLoading: false,
      users: [],
      error: ""
    };
  },
  components: { Item },
  mounted() {
    this.bus.$on("searchUser", obj => {
      this.isFirst = obj.isFirst;
      this.isLoading = obj.isLoading;
      this.users = obj.users;
      this.error = obj.error;
      console.log("isFirst", this.isFirst);
      console.log("isLoading", this.isLoading);
      console.log("users", this.users);
      console.log("error", this.error);
    });
  }
};
</script>

<style scoped>
</style>