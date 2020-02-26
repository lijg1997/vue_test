<template>
  <div>
    {{ msg }}
  </div>
</template>

<script>
import PubSub from "pubsub-js";
export default {
  data() {
    return {
      msg: "i love you two two two"
    };
  },
  mounted() {
    // this.bus.$on("changeText", value => {
    //   this.msg = value;
    // });
    PubSub.subscribe("changeText", (name, msg) => {
      this.msg = msg;
    });
  }
};
</script>

<style scoped></style>
