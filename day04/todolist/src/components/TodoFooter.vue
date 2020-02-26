<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="allFinish" @click="allComplete" />
    </label>
    <span>
      <span>已完成{{ finishCount }}</span> / 全部{{ listArr.length }}
    </span>
    <button class="btn btn-danger" @click="clear">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  props: {
    listArr: Array
  },
  data() {
    return {};
  },
  computed: {
    finishCount() {
      return this.listArr.reduce((adder, item) => {
        return (adder += item.checked ? 1 : 0);
      }, 0);
    },
    allFinish: {
      get() {
        let flag = this.finishCount !== 0 && this.listArr.length !== 0;
        return this.finishCount === this.listArr.length && flag;
      },
      set() {}
    }
  },
  methods: {
    allComplete() {
      // console.log(this.allFinish);
      // this.allFinish = !this.allFinish;
      this.$emit("allComplete", !this.allFinish);
    },
    clear() {
      this.$emit("clear");
    }
  }
};
</script>

<style scoped>
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>
