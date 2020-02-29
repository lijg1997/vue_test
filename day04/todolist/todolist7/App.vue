<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <TodoHeader @addTodo="addTodo"></TodoHeader>
        <TodoList :listArr="listArr" style="color:hotpink;">
          <template slot="inputSlot" slot-scope="{ index }">
            <input type="checkbox" v-model="listArr[index].checked" />
          </template>
          <template slot="spanSlot" slot-scope="{ content }">
            <span>{{ content }}</span>
          </template>
        </TodoList>
        <TodoFooter
          :listArr="listArr"
          @allFinish="allFinish"
          @clear="clear"
        ></TodoFooter>
      </div>
    </div>
  </div>
</template>

<script>
import TodoHeader from "./components/todoHeader";
import TodoList from "./components/todoList";
import TodoFooter from "./components/todoFooter";
import util from "./util";
export default {
  data() {
    return {
      listArr: []
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
    this.listArr = util.get("listArr", []);
    this.bus.$on("delTodo", id => {
      this.listArr = this.listArr.filter(item => item.id !== id);
    });
  },
  watch: {
    listArr(val) {
      util.set("listArr", val);
    }
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
