<template>
  <div>
    <p>您是第【{{ id }}】访问本站的用户</p>
    <p>欢迎用户名为【{{ name }}】的到来</p>
  </div>
</template>

<script>
export default {
  props: ["id", "name"]
};
</script>

<style scoped></style>
