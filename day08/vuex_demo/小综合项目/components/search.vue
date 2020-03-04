<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input
        type="text"
        placeholder="enter the name you search"
        v-model.lazy.trim="searchName"
        @keyup.enter="searchUser(searchName)"
      />
      <button @click="searchUser(searchName)">Search</button>
    </div>
  </section>
</template>

<script>
import { mapActions } from "vuex";
export default {
  computed: {
    searchName: {
      get() {
        return this.$store.state.searchName;
      },
      set(val) {
        this.$store.dispatch("searchName", val);
      }
    }
  },
  methods: {
    ...mapActions(["searchUser"])
  }
};
</script>

<style scoped></style>
