<template>
  <div data-v-c3f82132="" data-v-957c9522="">
    <ul data-v-c3f82132="">
      <li data-v-c3f82132="" v-for="item in list" :key="item.id">
        <a :href="`#/home/message/${item.id}`">{{ item.title }}</a>
        <input data-v-c3f82132="" type="button" value="push" />
        <input data-v-c3f82132="" type="button" value="replace" />
      </li>
    </ul>
    <input data-v-c3f82132="" type="button" value="back" />
    <hr />
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        { id: 1, title: "message 1" },
        { id: 2, title: "message 2" },
        { id: 3, title: "message 3" },
        { id: 4, title: "message 4" },
        { id: 5, title: "message 5" }
      ]
    };
  }
};
</script>

<style scoped></style>
