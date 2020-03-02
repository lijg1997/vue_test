<template>
  <ul class="row">
    <h2 v-if="isFirst">请输入关键字搜索相关用户</h2>
    <h2 v-else-if="isLoding">Loding...</h2>
    <h2 v-else-if="error">搜索出错，请联系管理员</h2>
    <Item v-else v-for="(item, index) in users" :key="index" :item="item" />
  </ul>
</template>

<script>
import PubSub from "pubsub-js";
import Item from "./item";
export default {
  data() {
    return {
      isFirst: true,
      isLoding: false,
      users: [],
      error: ""
    };
  },
  components: { Item },
  mounted() {
    PubSub.subscribe("searchUser", (name, obj) => {
      this.isFirst = obj.isFirst;
      this.isLoding = obj.isLoding;
      this.users = obj.users;
      this.error = obj.error;
    });
  }
};
</script>

<style scoped>
ul {
  list-style: none;
}
</style>
