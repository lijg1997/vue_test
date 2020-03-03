<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input
        type="text"
        placeholder="enter the name you search"
        v-model.lazy.trim="keyWord"
        @keyup.enter="getUsers"
      />
      <button @click="getUsers">Search</button>
    </div>
  </section>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    // ...mapState(["keyWord"]),
    keyWord: {
      get() {
        return this.$store.state.keyWord;
      },
      set(val) {
        this.$store.dispatch("keyWord", val);
      }
    }
  },
  methods: {
    ...mapActions(["getUsers"])
  }
};
</script>

<style scoped></style>
