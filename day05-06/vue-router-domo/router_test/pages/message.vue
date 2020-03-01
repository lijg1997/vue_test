<template>
  <div>
    <ul>
      <li v-for="item in listArr" :key="item.id">
        <router-link :to="`/home/message/message_detail/${item.id}`">
          message：{{ item.id }}
          <input
            type="button"
            value="push"
            @click="push(`/home/message/message_detail/${item.id}`)"
          />
          <input
            type="button"
            value="replace"
            @click="replace(`/home/message/message_detail/${item.id}`)"
          />
        </router-link>
      </li>
    </ul>
    <input type="button" value="back" @click="goBack" />
    <router-view :listArr="listArr"></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      listArr: [
        { id: 1, message: "重大新闻1", detail: "i love you 1314" },
        { id: 2, message: "重大新闻2", detail: "i love you 2314" },
        { id: 3, message: "重大新闻3", detail: "i love you 3314" },
        { id: 4, message: "重大新闻4", detail: "i love you 4314" },
        { id: 5, message: "重大新闻5", detail: "i love you 5314" },
        { id: 6, message: "重大新闻6", detail: "i love you 6314" },
        { id: 7, message: "重大新闻7", detail: "i love you 7314" },
        { id: 8, message: "重大新闻8", detail: "i love you 8314" },
        { id: 9, message: "重大新闻9", detail: "i love you 9314" }
      ]
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    push(url) {
      this.$router.push(url);
    },
    replace(url) {
      this.$router.replace(url);
    }
  }
};
</script>

<style scoped></style>
