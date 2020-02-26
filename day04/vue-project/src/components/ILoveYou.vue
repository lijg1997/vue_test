<template>
  <div class="love">
    {{ msg }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "i love you soo much"
    };
  }
};
</script>

<style scoped>
.love {
  font-size: 30px;
  color: skyblue;
}
</style>
