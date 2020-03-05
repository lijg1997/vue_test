<template>
  <div>
    <h2>{{$store.state.msg}}</h2>
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

<style scoped>
</style>