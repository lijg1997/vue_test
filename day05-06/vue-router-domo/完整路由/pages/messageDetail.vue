<template>
  <div>
    <p>进日消息：【{{ msg.message }}】</p>
    <p>详细报道：</p>
    <p>【{{ msg.detail }}】</p>
  </div>
</template>

<script>
export default {
  props: ["id", "news"],
  computed: {
    msg() {
      // let obj = this.data.find(item => item.id === this.id * 1);
      // console.log(obj);
      // return obj;
      return this.news.find(item => item.id === this.id * 1);
    }
  },
  mounted() {
    console.log(this.news);
    console.log(this.id);
  }
};
</script>

<style scoped></style>
