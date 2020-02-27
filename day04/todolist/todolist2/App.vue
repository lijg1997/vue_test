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
import TodoHeader from "./components/TodoHeader";
import TodoList from "./components/TodoList";
import TodoFooter from "./components/TodoFooter";

export default {
  data() {
    return {
      listArr: [
        { id: 0, content: "i love you", checked: false },
        { id: 1, content: "i love you too", checked: false },
        { id: 2, content: "i love you soo much", checked: false },
        { id: 3, content: "i love you soo soo much", checked: false }
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
      localStorage.setItem("listArr", JSON.stringify(this.listArr));
    },
    clear() {
      this.listArr = this.listArr.filter(item => !item.checked);
      localStorage.setItem("listArr", JSON.stringify(this.listArr));
    },
    allFinish(checked) {
      // this.listArr.forEach(item => {
      //   item.checked = checked;
      // });
      this.listArr.map(item => {
        item.checked = checked;
        localStorage.setItem("listArr", JSON.stringify(this.listArr));
      });
    }
  },
  mounted() {
    let listArr = JSON.parse(localStorage.getItem("listArr"));
    if (!listArr) {
      localStorage.setItem("listArr", JSON.stringify(this.listArr));
    }
    this.listArr = listArr;
    this.bus.$on("changeCheck", (id, checked) => {
      // console.log(id, checked, "---app");
      this.listArr.forEach(item => {
        if (item.id === id) item.checked = checked;
        localStorage.setItem("listArr", JSON.stringify(this.listArr));
      });
    });

    this.bus.$on("delTodo", id => {
      this.listArr = this.listArr.filter(item => item.id !== id);
      localStorage.setItem("listArr", JSON.stringify(this.listArr));
    });
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
