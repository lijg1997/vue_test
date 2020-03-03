<template>
  <div class="row">
    <h2 v-if="isFirst">请输入关键字搜索相关用户</h2>
    <h2 v-else-if="isLoading">Loading....</h2>
    <h2 v-else-if="noData">搜索用户不存在</h2>
    <h2 v-else-if="error">访问出错，请联系管理员</h2>
    <Item v-else v-for="(item, index) in users" :key="index" :item="item" />
  </div>
</template>

<script>
import Item from "./Item";
import { mapState } from "vuex";
export default {
  components: { Item },
  computed: {
    ...mapState(["isFirst", "isLoading", "noData", "error", "users"])
  }
};
</script>

<style scoped></style>
