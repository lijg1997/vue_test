<template>
  <div>
    <input
      type="text"
      placeholder="enter the name you search"
      v-model="keyWord"
      @keyup.enter="searchUser"
    />
    <button @click="searchUser">Search</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      keyWord: ""
    };
  },
  methods: {
    async searchUser() {
      if (!this.keyWord.trim()) return;
      this.bus.$emit("searchUser", { isFirst: false, isLoading: true });
      try {
        const body = await axios.get("https://api.github.com/search/users", {
          params: { q: this.keyWord }
        });
        this.bus.$emit("searchUser", {
          isLoading: false,
          users: body.data.items
        });
        // console.log(body.data.items);
      } catch (error) {
        this.bus.$emit("searchUser", { isLoading: false, error });
      }
    }
  }
};
</script>

<style scoped>
</style>