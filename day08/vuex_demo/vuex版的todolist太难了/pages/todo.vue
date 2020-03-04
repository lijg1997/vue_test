<template>
  <div id="root">
    <router-view></router-view>
    <div class="todo-container">
      <div class="todo-wrap">
        <TodoHeader></TodoHeader>
        <TodoList>
          <template #inputSlot="{index}">
            ლ(′◉❥◉｀ლ)
            <input type="checkbox" v-model="listArr[index].checked" />
            <!-- @change="change({index:listArr[index],checked:listArr[index].checked})" -->
          </template>
          <template #spanSlot="{content}">
            <span>{{content}}</span>
          </template>
        </TodoList>
        <TodoFooter></TodoFooter>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import TodoHeader from "../components/todoHeader";
import TodoList from "../components/todoList";
import TodoFooter from "../components/todoFooter";
export default {
  components: { TodoHeader, TodoList, TodoFooter },
  computed: {
    ...mapState(["listArr"])
  },
  methods: {
    // change(val) {
    //   console.log(val);
    // }
    // ...mapActions(["change"])
    change({ index, checked }) {
      console.log(index, checked);
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