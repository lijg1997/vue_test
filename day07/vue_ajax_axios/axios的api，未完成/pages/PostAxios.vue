<template>
  <div>
    <h2>PostAxios</h2>
  </div>
</template>

<script>
import axios from "axios";
import { BASE_URL } from "../config";
export default {
  async mounted() {
    const body = await axios(
      "https://api.github.com/repos/lijg1997/vue_test/issues",
      {
        method: "POST",
        data: {
          title: "vue的路由器有哪些属性",
          body: "routes、mode、linkActiveClass"
        },
        headers: {
          // Authorization: "token 02294afcc85bc774497ed5eb20131ad2e5a52e2f"
        }
      }
    );
    console.log(body);
  }
};
</script>

<style scoped></style>
