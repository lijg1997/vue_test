<template>
  <div>
    <p v-show="detail.id">{{ detail.id }}</p>
    <p v-show="detail.title">{{ detail.title }}</p>
    <p v-show="detail.content">{{ detail.content }}</p>
  </div>
</template>

<script>
const list = [
  { id: 1, title: "message1", content: "i lvoe you soo much and 1314" },
  { id: 2, title: "message2", content: "i lvoe you soo much and 2314" },
  { id: 3, title: "message3", content: "i lvoe you soo much and 3314" },
  { id: 4, title: "message4", content: "i lvoe you soo much and 4314" },
  { id: 5, title: "message5", content: "i lvoe you soo much and 5314" }
];
export default {
  props: ["id"],
  data() {
    return {
      detail: {}
    };
  },
  methods: {
    getDetail() {
      setTimeout(() => {
        this.detail = list.find(item => +this.id === item.id);
      }, 1000);
    }
  },
  mounted() {
    this.getDetail();
    console.log(this.detail);
  },
  watch: {
    $route() {
      this.getDetail();
    }
  }
};
</script>

<style scoped></style>
