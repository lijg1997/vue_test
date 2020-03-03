import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    count: 5201314,
    firstName: "li",
    lastName: "JinGui"
  },
  getters: {
    fullName(state) {
      return state.firstName + " - " + state.lastName;
    },
    flag(state) {
      return state.count % 2 === 0 ? "偶" : "奇";
    }
  },
  // vuex 的工具
  mutations: {
    add(state, { msg1, msg2 }) {
      state.count++;
      console.log(msg1, msg2);
    }
  },
  actions: {
    asyncAdd({ commit }, { msg1, msg2 }) {
      setTimeout(() => {
        commit("add", { msg1, msg2 });
      }, 1000);
    }
  }
});
