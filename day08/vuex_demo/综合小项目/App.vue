<template>
  <div>
    {{ $store.state.test }}
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
