<template>
  <div id="app">
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
  components: { Search, List }
};
</script>

<style scoped></style>
