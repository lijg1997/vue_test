<template>
  <div>
    <h2>欢迎新用户登录</h2>
    <router-view></router-view>
    <div id="app">
      <div class="container">
        <Search />
        <List />
      </div>
    </div>
  </div>
</template>

<script>
import Search from "../components/search";
import List from "../components/list";
export default {
  data() {
    return {};
  },
  components: { Search, List }
};
</script>

<style scoped>
</style>