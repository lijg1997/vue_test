<template>
  <div class="row">
    <Item
      v-show="users"
      v-for="(item, index) in users"
      :key="index"
      :item="item"
    ></Item>
    <div v-show="isFirst"><h2>请输入搜索关键字</h2></div>
    <div v-show="isLoding"><h1>Loding...</h1></div>
    <div v-show="error"><h2>搜索出错，请联系管理员</h2></div>
  </div>
</template>

<script>
import Item from "./item";
export default {
  data() {
    return {
      users: [],
      isFirst: true,
      isLoding: false,
      error: ""
    };
  },
  components: { Item },
  mounted() {
    this.bus.$on("clickSearch", obj => {
      this.isFirst = obj.isFirst;
      this.isLoding = obj.isLoding;
    });
    this.bus.$on("searchUser", obj => {
      this.users = obj.users;
      this.isLoding = obj.isLoding;
      this.error = obj.error;
      // console.log(this.users);
    });
  }
};
</script>

<style scoped></style>
