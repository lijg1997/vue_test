<template>
  <div data-v-c3f82132="" data-v-957c9522="">
    <ul data-v-c3f82132="">
      <li data-v-c3f82132="" v-for="item in list" :key="item.id">
        <!-- <router-link :to="`/home/message/${item.id}`"> -->
        <span>{{ item.title }}</span>
        <input
          data-v-c3f82132=""
          type="button"
          value="push"
          @click="push(`/home/message/${item.id}`)"
        />
        <input
          data-v-c3f82132=""
          type="button"
          value="replace"
          @click="replace(`/home/message/${item.id}`)"
        />
        <!-- </router-link> -->
      </li>
    </ul>
    <input data-v-c3f82132="" type="button" value="back" @click="back" />
    <hr />
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        { id: 1, title: "message1" },
        { id: 2, title: "message2" },
        { id: 3, title: "message3" },
        { id: 4, title: "message4" },
        { id: 5, title: "message5" }
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

<style scoped></style>
