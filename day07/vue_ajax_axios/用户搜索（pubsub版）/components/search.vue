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
import PubSub from "pubsub-js";
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
    async searchUser() {
      if (!this.keyWord.trim()) return;
      PubSub.publish("searchUser", { isFirst: false, isLoding: true });
      try {
        const body = await axios({
          baseURL: BASE_URL,
          url: "/search/users",
          methods: "get",
          params: { q: this.keyWord }
        });
        console.log(body);
        PubSub.publish("searchUser", {
          isLoding: false,
          users: body.data.items
        });
      } catch (error) {
        PubSub.publish("searchUser", { isLoding: false, error });
      }
    }
  }
};
</script>

<style scoped></style>
