<template>
  <li>
    <label>
      <input type="checkbox" v-model="checked" @change="change" />
      <span>{{ item.content }}</span>
    </label>
    <button class="btn btn-danger" style="display:none">删除</button>
  </li>
</template>

<script>
export default {
  props: {
    item: Object
  },
  data() {
    return {
      checked: this.item.checked
    };
  },
  methods: {
    change() {
      this.bus.$emit("change", this.item.id, this.checked);
    }
  }
};
</script>

<style scoped>
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
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
</style>
