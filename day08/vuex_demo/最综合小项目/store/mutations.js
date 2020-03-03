import {
  KEYWORD,
  GETUSERS,
  REQING,
  REQSUCCESSSHASDATA,
  REQSUCCESSSNODATA
} from "./mutation-type";
export default {
  [KEYWORD](state, val) {
    state.keyWord = val;
  },
  [GETUSERS](state, users) {
    state.users = users;
  },
  [REQING](state) {
    state.showTip = false;
    state.showLoading = true;
    state.showNoBody = false;
  },
  [REQSUCCESSSHASDATA](state) {
    state.showTip = false;
    state.showLoading = false;
    state.showNoBody = false;
  },
  [REQSUCCESSSNODATA](state) {
    state.showTip = false;
    state.showLoading = false;
    state.showNoBody = true;
  }
};
