<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <TodoHeader @addTodo="addTodo" />
        <TodoList :listArr="listArr" />
        <TodoFooter :listArr="listArr" @clear="clear" @allFinish="allFinish" />
      </div>
    </div>
  </div>
</template>

<script>
import TodoHeader from "./components/todoHeader";
import TodoList from "./components/todoList";
import TodoFooter from "./components/todoFooter";
import { v4 as uuidv4 } from "uuid";
export default {
  data() {
    return {
      listArr: [
        { id: uuidv4(), content: "i love you", checked: false },
        { id: uuidv4(), content: "i love you too", checked: false },
        { id: uuidv4(), content: "i love you soo much", checked: false }
      ]
    };
  },
  components: {
    TodoHeader,
    TodoList,
    TodoFooter
  },
  methods: {
    addTodo(todoObj) {
      this.listArr.unshift(todoObj);
    },
    allFinish(checked) {
      this.listArr.map(item => (item.checked = checked));
    },
    clear() {
      this.listArr = this.listArr.filter(item => !item.checked);
    }
  },
  mounted() {
    let oldListArr = JSON.parse(localStorage.getItem("listArr"));
    if (!oldListArr)
      localStorage.setItem("listArr", JSON.stringify(this.listArr));
    this.listArr = oldListArr;
    this.bus.$on("change", (id, checked) => {
      this.listArr.forEach(item => {
        if (item.id === id) item.checked = checked;
      });
    });

    this.bus.$on("delTodo", id => {
      this.listArr = this.listArr.filter(item => item.id !== id);
    });
  },
  beforeUpdate() {
    localStorage.setItem("listArr", JSON.stringify(this.listArr));
  }
};
</script>

<style scoped>
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