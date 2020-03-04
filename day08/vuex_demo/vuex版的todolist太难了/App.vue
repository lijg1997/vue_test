<template>
  <div>
    <h2 id="center">{{$store.state.test}}</h2>
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#center {
  text-align: center;
}
</style>