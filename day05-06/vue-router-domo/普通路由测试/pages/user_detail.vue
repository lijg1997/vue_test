<template>
  <div>
    <p>第【{{id}}】位用户</p>
    <p>欢迎【{{name}}】到来</p>
  </div>
</template>

<script>
export default {
  props: ["id", "name"]
};
</script>

<style scoped>
</style>