<template>
  <div data-v-957c9522 msg="atguigu">
    <h2 data-v-957c9522>home组件</h2>
    <div data-v-957c9522>
      <ul data-v-957c9522 class="nav nav-tabs">
        <li data-v-957c9522>
          <router-link to="/home/news">News</router-link>
        </li>
        <li data-v-957c9522>
          <router-link to="/home/message">Message</router-link>
        </li>
      </ul>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style scoped></style>
