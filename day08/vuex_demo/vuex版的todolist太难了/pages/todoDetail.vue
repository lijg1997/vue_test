<template>
  <div>
    <h2>您是第【{{id}}】位来到本站的用户</h2>
    <h2>我想对您说的是【{{name}}】：</h2>
    <h1>i love you soo much</h1>
  </div>
</template>

<script>
export default {
  props: ["id", "name"]
};
</script>

<style scoped>
</style>