<template>
  <div msg="atguigu">
    <h2>home组件</h2>
    <div>
      <ul class="nav nav-tabs">
        <li>
          <a href="#/home/news" class="">News</a>
        </li>
        <li>
          <a href="#/home/message" class="router-link-exact-active active">
            Message
          </a>
        </li>
      </ul>
      <router-view></router-view>
    </div>
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
