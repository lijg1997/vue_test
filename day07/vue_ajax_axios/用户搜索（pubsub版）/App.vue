<template>
  <div id="app">
    <div class="container">
      <section class="jumbotron">
        <h3 class="jumbotron-heading">Search Github Users</h3>
        <Search />
      </section>
      <List />
    </div>
  </div>
</template>

<script>
import Search from "./components/search";
import List from "./components/list";
export default {
  components: {
    Search,
    List
  }
};
</script>

<style scoped></style>
