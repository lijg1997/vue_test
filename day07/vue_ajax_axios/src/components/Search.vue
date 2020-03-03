<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input
        type="text"
        placeholder="enter the name you search"
        v-model.trim="keyWord"
        @keyup.enter="search"
      />
      <button @click="search">Search</button>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      keyWord: ""
    };
  },
  methods: {
    search() {
      if (!this.keyWord) return;
      this.$bus.$emit("search", this.keyWord);
    }
  }
};
</script>

<style scoped></style>
