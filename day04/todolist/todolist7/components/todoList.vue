<template>
  <ul class="todo-main">
    <TodoItem
      v-for="(item, index) in listArr"
      :key="item.id"
      :item="item"
      :index="index"
    >
      <template slot="inputSlot" slot-scope="{ index }">
        <slot name="inputSlot" :index="index"></slot>
      </template>
      <template slot="spanSlot" slot-scope="{ content }">
        <slot name="spanSlot" :content="content"></slot>
      </template>
    </TodoItem>
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
