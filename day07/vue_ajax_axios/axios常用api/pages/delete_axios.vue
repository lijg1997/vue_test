<template>
  <div>
    <h2>DeleteAxios</h2>
  </div>
</template>

<script>
import axios from "axios";
import { BASE_URL } from "../config";
export default {
  async mounted() {
    const body = await axios({
      baseURL: BASE_URL,
      url: "/repos/lijg1997/vue_test/issues/10/lock",
      method: "DELETE",
      headers: {
        Authorization: "token f64cea721c10c0d5b3345b46a349e3d4cae6fa63"
      }
    });
    console.log(body);
  }
  // f64cea721c10c0d5b3345b46a349e3d4cae6fa63
};
</script>

<style scoped></style>
