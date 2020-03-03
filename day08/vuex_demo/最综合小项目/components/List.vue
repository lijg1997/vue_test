<template>
  <div class="row">
    <p v-if="showTip">请输入要查询的用户</p>
    <p v-else-if="showLoading">Loading......</p>
    <p v-else-if="showNoBody">查询失败，请联系管理员</p>
    <Item v-else v-for="(item, index) in users" :key="index" :item="item" />
  </div>
</template>

<script>
import Item from "./Item";
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  components: { Item },
  computed: {
    ...mapState(["showTip", "showLoading", "showNoBody", "users"])
  }
};
</script>

<style scoped>
p {
  font-size: 35px;
}
</style>
