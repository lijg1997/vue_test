<template>
  <div>
    <h2>{{ msg }}</h2>
  </div>
</template>

<script>
export default {
  name: "hello",
  data() {
    return {
      msg: "i love you",
      user: {}
    };
  },
  async mounted() {
    const body = await this.$http.get("");
  }
};
</script>

<style scoped></style>
