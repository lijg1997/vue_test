<template>
  <ul class="todo-main">
    <TodoItem v-for="item in listArr" :key="item.id" :item="item" />
  </ul>
</template>

<script>
import TodoItem from "./todoItem";
export default {
  props: {
    listArr: Array
  },
  components: { TodoItem }
};
</script>

<style scoped>
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>
