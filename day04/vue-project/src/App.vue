<template>
  <div>
    <div class="center">
      <img src="./assets/nvdi.jpg" alt="nvdi" />
      <p>{{ msg.toUpperCase() }}</p>
    </div>
    <NameTest />
    <FatherToChild :num="num" @handleAdd="handleAdd" />
    <FatherToChild :num="num" @handleAdd="handleAdd" />
    <i class="arc">{{ num }}</i>
    <NotFatherChildOne />
    <NotFatherChildTwo />
  </div>
</template>

<script>
import NameTest from "./components/NameTest";
import FatherToChild from "./components/FatherToChild";
import NotFatherChildOne from "./components/NotFatherChildOne";
import NotFatherChildTwo from "./components/NotFatherChildTwo";

export default {
  data() {
    return {
      msg: "i love you soo soo much to wuruichao",
      num: 0
    };
  },
  methods: {
    handleAdd(value) {
      this.num += value;
    }
  },
  components: {
    NameTest,
    FatherToChild,
    NotFatherChildOne,
    NotFatherChildTwo
  }
};
</script>

<style scoped>
.center {
  margin: 0 auto;
  font-size: 30px;
  color: pink;
  text-align: center;
}
.arc {
  display: inline-block;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: skyblue;
  text-align: center;
  line-height: 100px;
}
</style>
