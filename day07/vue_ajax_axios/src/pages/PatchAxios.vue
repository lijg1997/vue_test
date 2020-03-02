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
    const body = await axios(
      "https://api.github.com/repos/lijg1997/vue_test/issues/15",
      {
        method: "patch",
        data: {
          title: "axios常用api",
          body: "get、post、patch、put、delete"
        },
        headers: {
          Authorization: "token 02294afcc85bc774497ed5eb20131ad2e5a52e2f"
        }
      }
    );
    console.log(body);
  }
};
</script>

<style scoped></style>
