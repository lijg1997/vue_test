<template>
  <li :class="{line:item.checked}">
    <label>
      <slot name="inputSlot" :index="index"></slot>
      <slot name="spanSlot" :content="item.content"></slot>
    </label>
    <button class="btn btn-danger" @click="delTodo(item.id)">删除</button>
  </li>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: { item: Object, index: Number },
  methods: {
    ...mapActions(["delTodo"])
  }
};
</script>

<style scoped>
li:hover {
  background-color: skyblue;
}
li:hover button {
  display: block;
}
.line {
  position: relative;
}
.line::before {
  content: "";
  position: absolute;
  left: 0;
  top: 50%;
  width: 97%;
  height: 1px;
  background-color: red;
}
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
  position: relative;
  z-index: 9;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
</style>