<template>
  <ul class="todo-main">
    <TodoItem v-for="(item, index) in listArr" :key="item.id" :item="item" :index="index">
      <template #inputSlot="{index}">
        <slot name="inputSlot" :index="index"></slot>
      </template>
      <template #spanSlot="{content}">
        <slot name="spanSlot" :content="content"></slot>
      </template>
    </TodoItem>
  </ul>
</template>

<script>
import { mapState } from "vuex";
import TodoItem from "./todoItem";
export default {
  data() {
    return {};
  },
  components: { TodoItem },
  computed: {
    ...mapState(["listArr"])
  }
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