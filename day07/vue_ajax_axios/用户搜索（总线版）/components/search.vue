<template>
  <div>
    <input
      type="text"
      placeholder="enter the name you search"
      v-model="keyWord"
      @keyup.enter="search"
    />
    <button @click="search">Search</button>
  </div>
</template>

<script>
import axios from "axios";
import { BASE_URL } from "../config";
export default {
  data() {
    return {
      keyWord: "",
      isFirst: true,
      isLoding: false,
      users: [],
      error: ""
    };
  },
  methods: {
    async search() {
      this.bus.$emit("clickSearch", { isFirst: false, isLoding: true });
      try {
        const body = await axios.get("/search/users", {
          baseURL: BASE_URL,
          params: { q: this.keyWord }
        });
        this.bus.$emit("searchUser", {
          users: body.data.items,
          isLoding: false
        });
      } catch (error) {
        this.bus.$emit("searchUser", { error: error, isLoding: false });
        console.log(error);
      }
      this.keyWord = "";
    }
  }
};
</script>

<style scoped></style>
