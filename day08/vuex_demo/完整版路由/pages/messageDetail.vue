<template>
  <div>
    <p>i love you 第【{{id}}】位用户</p>
    <p>今日消息：{{msg.title}}</p>
    <p>详情：</p>
    <p>{{msg.content}}</p>
  </div>
</template>

<script>
export default {
  props: ["id", "listArr"],
  computed: {
    msg() {
      return this.listArr.find(item => +this.id === item.id);
    }
  }
};
</script>

<style scoped>
</style>