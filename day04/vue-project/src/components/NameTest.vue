<template>
  <div>
    <span>firstName: </span><input type="text" v-model="firstName" /><br />
    <span>lastName: </span><input type="text" v-model="lastName" /><br />
    <span>fullName1: </span><input type="text" v-model="fullName1" /><br />
    <span>fullName2: </span><input type="text" v-model="fullName2" /><br />
    <span>fullName3: </span><input type="text" v-model="fullName3" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstName: "Wu",
      lastName: "RuiChao",
      fullName2: "Wu-RuiChao"
    };
  },
  computed: {
    fullName1() {
      return `${this.firstName}-${this.lastName}`;
    },
    fullName3: {
      get() {
        return `${this.firstName}-${this.lastName}`;
      },
      set(value) {
        const names = value.split("-");
        this.firstName = names[0];
        this.lastName = names[1];
      }
    }
  },
  watch: {
    firstName(newVal, oldVal) {
      console.log(newVal, oldVal);
      this.fullName2 = `${newVal}-${this.lastName}`;
    },
    lastName(newVal, oldVal) {
      this.fullName2 = `${this.firstName}-${newVal}`;
    }
  }
};
</script>

<style scoped></style>
