<template>
  <div @click="handleClick">
    {{ msg }}
  </div>
</template>

<script>
import PubSub from "pubsub-js";
export default {
  data() {
    return {
      msg: "i love you one one one"
    };
  },
  methods: {
    handleClick() {
      // this.bus.$on('changeText', this.msg)
      PubSub.publish("changeText", this.msg);
    }
  }
};
</script>

<style scoped>
div {
  font-size: 50px;
  color: yellowgreen;
}
</style>
