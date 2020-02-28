<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <TodoHeader @addTodo="addTodo" />
        <!-- ****************************** -->
        <TodoList :listArr="listArr" style="color:skyblue;">
          <!-- <template slot="inputSlot" slot-scope="{ index }">
            ლ(′◉❥◉｀ლ)<input type="checkbox" v-model="listArr[index].checked" />
          </template> -->
          <template #inputSlot="{index}">
            --ლ(′◉❥◉｀ლ)--<input
              type="checkbox"
              v-model="listArr[index].checked"
            />
          </template>
          <!-- <template slot-scope="{ content }" slot="spanSlot">
            <slot>{{ content }}</slot>
          </template> -->
          <template #spanSlot="{content}">
            <span>--{{ content }}--</span>
          </template>
        </TodoList>
        <TodoFooter :listArr="listArr" @clear="clear" @allFinish="allFinish" />

        <!-- ****************************** -->
        <!-- <TodoList :listArr="listArr" style="color:pink;">
          <template slot="inputSlot" slot-scope="{ index }">
            ლ(′◉❥◉｀ლ)<input type="checkbox" v-model="listArr[index].checked" />
          </template>
          <template slot-scope="{ content }" slot="spanSlot">
            <slot>{{ content }}</slot>
          </template>
        </TodoList> -->
        <!-- ****************************** -->
      </div>
    </div>
  </div>
</template>

<script>
import TodoHeader from "./components/todoHeader";
import TodoList from "./components/todoList";
import TodoFooter from "./components/todoFooter";
import util from "./util";
// import { v4 as uuidv4 } from "uuid";
export default {
  data() {
    return {
      listArr: []
      /* 
      { id: uuidv4(), content: "i love you", checked: false },
      { id: uuidv4(), content: "i love you too", checked: false },
      { id: uuidv4(), content: "i love you soo much", checked: false } 
      */
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
    this.bus.$on("change", (id, checked) => {
      this.listArr.forEach(item => {
        if (item.id === id) item.checked = checked;
      });
    });

    this.bus.$on("delTodo", id => {
      this.listArr = this.listArr.filter(item => item.id !== id);
    });
  },
  watch: {
    listArr: {
      handler: function(val) {
        util.set("listArr", val);
      },
      deep: true
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
