<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <TodoHeader @addTodo="addTodo"></TodoHeader>
        <TodoList :listArr="listArr" style="color:hotpink;">
          <template v-slot:inputSlot="{index}">
            ლ(′◉❥◉｀ლ)
            <input type="checkbox" v-model="listArr[index].checked" />
          </template>
          <template v-slot:spanSlot="{content}">
            <span>{{content}}</span>
          </template>
        </TodoList>
        <TodoFooter :listArr="listArr">
          <template #allFinish>
            ლ(′◉❥◉｀ლ)
            <input type="checkbox" v-model="allFinish" />
          </template>
        </TodoFooter>
      </div>
    </div>
  </div>
</template>

<script>
import TodoHeader from "./components/todoHeader";
import TodoList from "./components/todoList";
import TodoFooter from "./components/todoFooter";
export default {
  data() {
    return {
      listArr: [
        { id: 0, content: "you love me", checked: false },
        { id: 1, content: "you love me soo much", checked: false },
        { id: 2, content: "you love me very much", checked: false }
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
    }
  },
  mounted() {
    this.bus.$on("delTodo", id => {
      this.listArr = this.listArr.filter(item => item.id !== id);
    });
  },
  computed: {
    allFinish: {
      get() {
        return this.listArr.map(item => {
          if (item.checked === false) return;
          else return true;
        });
      },
      set(val) {
        console.log(val);
        this.listArr.map(item => (item.checked = val));
      }
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