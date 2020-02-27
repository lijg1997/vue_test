<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <TodoHeader @addTodo="addTodo" />
        <TodoList :listArr="listArr" />
        <TodoFooter
          :listArr="listArr"
          @allComplete="allComplete"
          @clear="clear"
        />
      </div>
    </div>
  </div>
</template>

<script>
import TodoHeader from "./components/TodoHeader";
import TodoList from "./components/TodoList";
import TodoFooter from "./components/TodoFooter";
export default {
  name: "App",
  data() {
    return {
      listArr: [
        { id: "0", content: "i love you", checked: false },
        { id: "1", content: "i love you", checked: false },
        { id: "2", content: "i love you", checked: false }
      ]
    };
  },
  methods: {
    addTodo(todoObj) {
      this.listArr.unshift(todoObj);
    },
    allComplete(checked) {
      this.listArr.map(item => (item.checked = checked));
    },
    clear() {
      this.listArr = this.listArr.filter(item => !item.checked);
    }
  },
  components: {
    TodoHeader,
    TodoList,
    TodoFooter
  },
  mounted() {
    this.bus.$on("change", (id, checked) => {
      this.listArr.forEach(item => {
        if (item.id === id) {
          item.checked = checked;
        }
      });
    });

    this.bus.$on("delTodo", id => {
      this.listArr = this.listArr.filter(item => item.id !== id);
    });
  }
};
</script>

<style>
.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
