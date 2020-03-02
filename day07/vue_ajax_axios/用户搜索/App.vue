<template>
  <div id="app">
    <div class="container">
      <section class="jumbotron">
        <h3 class="jumbotron-heading">Search Github Users</h3>
        <Search></Search>
      </section>
      <List></List>
    </div>
  </div>
</template>

<script>
import Search from "./components/search";
import List from "./components/list";
export default {
  data() {
    return {};
  },
  components: {
    Search,
    List
  }
};
</script>

<style scoped></style>
