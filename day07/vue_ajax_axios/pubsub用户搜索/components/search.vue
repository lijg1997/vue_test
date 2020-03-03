<template>
  <div>
    <input type="text" placeholder="请输入关键字" v-model.trim="keyWord" @keyup.enter="searchUser" />
    <button @click="searchUser">Search</button>
  </div>
</template>

<script>
import PubSub from "pubsub-js";
export default {
  data() {
    return {
      keyWord: ""
    };
  },
  methods: {
    searchUser() {
      if (!this.keyWord) return;
      PubSub.publish("searchUser", this.keyWord);
      this.keyWord = "";
    }
  }
};
</script>

<style scoped>
</style>