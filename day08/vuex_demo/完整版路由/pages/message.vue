<template>
  <div data-v-c3f82132 data-v-957c9522>
    <ul data-v-c3f82132>
      <li data-v-c3f82132 v-for="item in listArr" :key="item.id">
        <router-link data-v-c3f82132 :to="`/home/message/${item.id}`" class>{{item.title}}</router-link>
        <input data-v-c3f82132 type="button" value="push" @click="push(`/home/message/${item.id}`)" />
        <input
          data-v-c3f82132
          type="button"
          value="replace"
          @click="replace(`/home/message/${item.id}`)"
        />
      </li>
    </ul>
    <input data-v-c3f82132 type="button" value="back" @click="back" />
    <hr />
    <router-view :listArr="listArr"></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      listArr: [
        { id: 1, title: "message 1", content: "i love you 1314" },
        { id: 2, title: "message 2", content: "i love you 2314" },
        { id: 3, title: "message 3", content: "i love you 3314" },
        { id: 4, title: "message 4", content: "i love you 4314" },
        { id: 5, title: "message 5", content: "i love you 5314" }
      ]
    };
  },
  methods: {
    back() {
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

<style scoped>
</style>