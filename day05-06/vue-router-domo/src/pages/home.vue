<template>
  <div msg="atguigu">
    <h2>home组件</h2>
    <div>
      <ul class="nav nav-tabs">
        <li>
          <router-link to="/home/news" class="router-link-exact-active">
            News
          </router-link>
        </li>
        <li>
          <router-link to="/home/message" class="router-link-exact-active">
            Message
          </router-link>
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
