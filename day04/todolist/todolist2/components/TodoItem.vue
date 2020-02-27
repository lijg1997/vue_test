<template>
  <li :class="{highLight,line:checked}">
    <label>
      <input type="checkbox" v-model="checked" />
      <span>{{item.content}}</span>
    </label>
    <button class="btn btn-danger" @click="delTodo">删除</button>
  </li>
</template>

<script>
export default {
  props: {
    item: Object
  },
  data() {
    return {
      highLight: false
    };
  },
  computed: {
    checked: {
      get() {
        return this.item.checked;
      },
      set(val) {
        // console.log(val, "---item");
        this.bus.$emit("changeCheck", this.item.id, val);
      }
    }
  },
  methods: {
    delTodo() {
      this.bus.$emit("delTodo", this.item.id);
    }
  }
};
</script>

<style scoped>
.line {
  position: relative;
}
.line::before {
  content: "";
  width: 98%;
  height: 1px;
  position: absolute;
  top: 50%;
  background-color: red;
}

li:hover {
  background-color: pink;
}
li:hover button {
  display: block;
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