<template>
  <i @click="handleClick" class="arc">
    {{ newNum }}
  </i>
</template>

<script>
export default {
  props: ["num"],
  data() {
    return {
      newNum: this.num,
      step: 5
    };
  },
  methods: {
    handleClick() {
      this.newNum += this.step;
      // this.handleAdd(this.step); 通过父组件主动传递一个方法，子组件通过props接收并检验该方法，
      //然后通过调用该方法传递参数的形式完成向父组件传递数据
      this.$emit("handleAdd", this.step);
    }
  }
};
</script>

<style scoped></style>
