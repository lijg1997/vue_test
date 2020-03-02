<template>
  <div>
    <p>{{ msg.message }}</p>
    <p>详细信息</p>
    <p>{{ msg.detail }}</p>
  </div>
</template>

<script>
export default {
  props: ["id", "listArr"],
  computed: {
    msg() {
      return this.listArr.find(item => item.id === this.id * 1);
    }
  }
};
</script>

<style scoped></style>
