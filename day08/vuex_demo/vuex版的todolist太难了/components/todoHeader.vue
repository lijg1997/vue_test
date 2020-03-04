<template>
  <div class="todo-header">
    <input
      type="text"
      placeholder="请输入你的任务名称，按回车键确认"
      v-model.lazy.trim="todo"
      @keyup.enter="addTodo"
    />
  </div>
</template>

<script>
let id = 4;
export default {
  data() {
    return {};
  },
  computed: {
    todo: {
      get() {
        return this.$store.state.todo;
      },
      set(val) {
        this.$store.dispatch("todo", val);
      }
    }
  },
  methods: {
    addTodo() {
      if (!this.todo) return;
      id++;
      let todoObj = {
        id,
        content: this.todo,
        checked: false
      };
      this.$store.dispatch("addTodo", todoObj);
    }
  }
};
</script>

<style scoped>
.todo-header input {
  width: 560px;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
}

.todo-header input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 8px rgba(82, 168, 236, 0.6);
}
</style>