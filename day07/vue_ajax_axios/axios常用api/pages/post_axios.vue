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
    const body = await axios({
      baseURL: BASE_URL,
      url: "/repos/lijg1997/vue_test/issues",
      method: "POST",
      data: {
        title: "vue的四大特征是什么？",
        body: "声明式编程，响应式数据，数据双向流，数据驱动"
      },
      headers: {
        Authorization: "token f64cea721c10c0d5b3345b46a349e3d4cae6fa63"
      }
    });
    console.log(BASE_URL);
  }
  // f64cea721c10c0d5b3345b46a349e3d4cae6fa63
};
</script>

<style scoped></style>
