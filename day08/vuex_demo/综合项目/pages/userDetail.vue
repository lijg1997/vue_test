<template>
  <div>
    <h3>您是第【{{id}}】位访问本站的用户</h3>
    <h3>欢迎您【{{name}}】的到来</h3>
  </div>
</template>

<script>
export default {
  props: ["id", "name"]
};
</script>

<style scoped>
</style>