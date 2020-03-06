<template>
  <div id="app">
    <h2>亲爱的用户【i love you】<router-view></router-view></h2>
    <div class="container">
      <Search />
      <List />
    </div>
  </div>
</template>

<script>
import Search from "components/search";
import List from "components/list";
export default {
  data() {
    return {};
  },
  components: { Search, List }
};
</script>

<style scoped></style>
