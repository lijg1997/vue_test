import { ALLFINISH, CLEAR, TODO, ADDTODO, DELTODO } from "./mutation-types";
export default {
  [ALLFINISH]({ commit }, checked) {
    commit(ALLFINISH, checked);
  },
  [CLEAR]({ commit }) {
    commit(CLEAR);
  },
  [TODO]({ commit }, todo) {
    commit(TODO, todo);
  },
  [ADDTODO]({ commit }, todoObj) {
    commit(ADDTODO, todoObj);
    commit(TODO, "");
  },
  [DELTODO]({ commit }, id) {
    commit(DELTODO, id);
  }
};
