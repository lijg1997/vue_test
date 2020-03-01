<template>
  <div>
    <p>您是第【{{ id }}】位进入本站的用户</p>
    <p>欢迎【{{ name }}】的到来</p>
  </div>
</template>

<script>
export default {
  props: ["id", "name"],
  mounted() {
    console.log("---");
  }
};
</script>

<style scoped></style>
