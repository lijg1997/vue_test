<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="allFinish" />
    </label>
    <span>
      <span>已完成{{finishCount}}</span>
      / 全部{{listArr.length}}
    </span>
    <button class="btn btn-danger" @click="clear">清除已完成任务</button>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(["listArr"]),
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
      set(checked) {
        console.log(checked);
        this.$store.dispatch("allFinish", checked);
      }
    }
  },
  methods: {
    ...mapActions(["clear"])
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