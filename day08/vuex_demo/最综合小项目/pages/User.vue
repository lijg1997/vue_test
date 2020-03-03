<template>
  <div id="app">
    <div class="container">
      <Search />
      <list />
    </div>
  </div>
</template>

<script>
import Search from "../components/Search";
import List from "../components/List";
export default {
  data() {
    return {};
  },
  components: { Search, List }
};
</script>

<style scoped></style>
