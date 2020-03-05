import {
  SEARCHNAME,
  SEARCH,
  REQING,
  REQSUCCESSHASDATA,
  REQSUCCESSNODATA
} from "./mutation-types";

export default {
  [SEARCHNAME](state, val) {
    state.searchName = val;
  },
  [SEARCH](state, users) {
    state.users = users;
  },
  [REQING](state) {
    state.showTip = false;
    state.showLoading = true;
    state.noData = false;
  },
  [REQSUCCESSHASDATA](state) {
    state.showTip = false;
    state.showLoading = false;
    state.noData = false;
  },
  [REQSUCCESSNODATA](state) {
    state.showTip = false;
    state.showLoading = false;
    state.noData = true;
  }
};
