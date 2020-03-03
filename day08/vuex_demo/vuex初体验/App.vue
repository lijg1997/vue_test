<template>
  <div id="app">
    <span @click="add" style="font-size:35px;">
      {{ count }}
    </span>
    <p style="font-size:35px;">{{ firstName }} -- {{ lastName }}</p>
    <p style="font-size:35px;">{{ fullName }}</p>
    <p style="font-size:20px;">
      当前的数字为【{{ count }}】，它是一个<span style="color:red;"
        >【{{ flag }}】</span
      >数
    </p>
    <button @click="asyncAdd">点我</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
export default {
  name: "App",
  // data() {
  //   return {
  //     count: this.$store.state.count
  //   };
  // },
  computed: {
    ...mapState(["count", "firstName", "lastName"]),
    ...mapGetters(["fullName", "flag"])
  },
  methods: {
    // ...mapMutations(["add", "i love you", "i love you too"]),
    // ...mapActions(["asyncAdd", "i love you soo much", "i love you yi wan nian"])
    add() {
      this.$store.commit("add", { msg1: "i love you", msg2: "i love you too" });
    },
    asyncAdd() {
      this.$store.dispatch("asyncAdd", {
        msg1: "i love you soo much",
        msg2: "i love you yi wan nian"
      });
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
