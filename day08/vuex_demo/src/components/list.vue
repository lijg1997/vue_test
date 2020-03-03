<template>
  <div class="row">
    <h2 v-if="isFirst">请输入关键字以获取相关用户</h2>
    <h2 v-else-if="isLoading">Loading...</h2>
    <h2 v-else-if="noData">没有相关用户</h2>
    <Item v-else v-for="(item, index) in users" :key="index" :item="item" />
  </div>
</template>

<script>
import Item from "./item";
import { mapState } from "vuex";
export default {
  components: { Item },
  computed: {
    isFirst() {
      return this.$store.state.isFirst;
    },
    ...mapState(["isLoading", "noData", "users"])
  }
};
</script>

<style scoped></style>
