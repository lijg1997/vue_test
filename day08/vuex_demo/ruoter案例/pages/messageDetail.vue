<template>
  <div>
    <p>{{ msg.id }}</p>
    <p>{{ msg.title }}</p>
    <p>{{ msg.content }}</p>
  </div>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      list: [
        { id: 1, title: "message 1", content: "i lvoe you 1314" },
        { id: 2, title: "message 2", content: "i lvoe you 2314" },
        { id: 3, title: "message 3", content: "i lvoe you 3314" },
        { id: 4, title: "message 4", content: "i lvoe you 4314" },
        { id: 5, title: "message 5", content: "i lvoe you 5314" }
      ],
      msg: {}
    };
  },
  mounted() {
    this.msg = this.list.find(item => +this.id === item.id);
  },
  watch: {
    msg() {
      return this.list.find(item => +this.id === item.id);
    }
  }
};
</script>

<style scoped></style>
