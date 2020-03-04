import { ALLFINISH, CLEAR, TODO, ADDTODO, DELTODO } from "./mutation-types";
export default {
  [ALLFINISH](state, checked) {
    state.listArr.map(item => (item.checked = checked));
  },
  [CLEAR](state) {
    state.listArr = state.listArr.filter(item => !item.checked);
  },
  [TODO](state, todo) {
    state.todo = todo;
  },
  [ADDTODO](state, todoObj) {
    state.listArr.unshift(todoObj);
  },
  [DELTODO](state, id) {
    state.listArr = state.listArr.filter(item => item.id !== id);
  }
};
