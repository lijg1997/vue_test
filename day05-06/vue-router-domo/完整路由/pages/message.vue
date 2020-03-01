<template>
  <div data-v-c3f82132="" data-v-957c9522="">
    <ul data-v-c3f82132="">
      <!-- <li data-v-c3f82132="">
        <router-link to="/home/message/message_detail/1">
          message01
          <input data-v-c3f82132="" type="button" value="push"  />
          <input data-v-c3f82132="" type="button" value="replace" />
        </router-link>
      </li>
      <li data-v-c3f82132="">
        <router-link to="/home/message/message_detail/2">
          message02
          <input data-v-c3f82132="" type="button" value="push" />
          <input data-v-c3f82132="" type="button" value="replace" />
        </router-link>
      </li>
      <li data-v-c3f82132="">
        <router-link to="/home/message/message_detail/3">
          message03
          <input data-v-c3f82132="" type="button" value="push" />
          <input data-v-c3f82132="" type="button" value="replace" />
        </router-link>
      </li>
      <li data-v-c3f82132="">
        <router-link to="/home/message/message_detail/4">
          message04
          <input data-v-c3f82132="" type="button" value="push" />
          <input data-v-c3f82132="" type="button" value="replace" />
        </router-link>
      </li>
      <li data-v-c3f82132="">
        <router-link to="/home/message/message_detail/5">
          message05
          <input data-v-c3f82132="" type="button" value="push" />
          <input data-v-c3f82132="" type="button" value="replace" />
        </router-link>
      </li>
      <li data-v-c3f82132="">
        <router-link to="/home/message/message_detail/6">
          message06
          <input data-v-c3f82132="" type="button" value="push" />
          <input data-v-c3f82132="" type="button" value="replace" />
        </router-link>
      </li> -->

      <!-- *********************************************************** -->

      <li v-for="item in news" :key="item.id">
        <router-link :to="`/home/message/message_detail/${item.id}`">
          message0{{ item.id }}
          <input data-v-c3f82132="" type="button" value="push" />
          <input data-v-c3f82132="" type="button" value="replace" />
        </router-link>
      </li>
      <!-- *********************************************************** -->
    </ul>
    <input data-v-c3f82132="" type="button" value="back" @click="goBack" />
    <router-view :news="news"></router-view>
  </div>
</template>
<script>
export default {
  data() {
    return {
      news: [
        { id: 1, message: "重大新闻1", detail: "i love you soo much and 1314" },
        { id: 2, message: "重大新闻2", detail: "i love you soo much and 2314" },
        { id: 3, message: "重大新闻3", detail: "i love you soo much and 3314" },
        { id: 4, message: "重大新闻4", detail: "i love you soo much and 4314" },
        { id: 5, message: "重大新闻5", detail: "i love you soo much and 5314" },
        { id: 6, message: "重大新闻6", detail: "i love you soo much and 6314" },
        { id: 7, message: "重大新闻7", detail: "i love you soo much and 7314" },
        { id: 8, message: "重大新闻8", detail: "i love you soo much and 8314" },
        { id: 9, message: "重大新闻9", detail: "i love you soo much and 9314" }
      ]
    };
  },
  methods: {
    goBack() {}
  }
};
</script>

<style scoped></style>
