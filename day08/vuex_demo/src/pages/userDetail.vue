<template>
  <span>亲爱的第【{{ id }}】用户【{{ name }}】，i love you</span>
</template>

<script>
export default {
  props: ["id", "name"]
};
</script>

<style scoped></style>
