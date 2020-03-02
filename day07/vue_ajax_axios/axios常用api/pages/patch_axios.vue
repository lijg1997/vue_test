<template>
  <div>
    <h2>PatchAxios</h2>
  </div>
</template>

<script>
import axios from "axios";
import { BASE_URL } from "../config";
export default {
  async mounted() {
    const body = await axios({
      baseURL: BASE_URL,
      // PATCH /repos/:owner/:repo/issues/:issue_number
      url: "/repos/lijg1997/vue_test/issues/10",
      method: "PATCH",
      data: {
        title: "vue的数据双向流API是什么",
        body: "v-model"
      },
      headers: {
        // Authorization: "token f64cea721c10c0d5b3345b46a349e3d4cae6fa63"
      }
    });
    console.log(body);
  }
  // f64cea721c10c0d5b3345b46a349e3d4cae6fa63
};
</script>

<style scoped></style>
