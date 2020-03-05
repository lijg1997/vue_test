<template>
  <div class="row">
    <h2 v-if="showTip">请输入您要查询的用户</h2>
    <h2 v-else-if="showLoading">Loading....</h2>
    <h2 v-else-if="noData">没有查询到相关用户</h2>
    <Item v-else v-for="(item, index) in users" :key="index" :item="item" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import Item from "./item";
export default {
  components: { Item },
  computed: {
    ...mapState(["showTip", "showLoading", "noData", "users"])
  }
};
</script>

<style scoped>
</style>