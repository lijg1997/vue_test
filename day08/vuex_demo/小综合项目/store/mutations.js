import {
  SEARCHNAME,
  SEARCHUSER,
  REQING,
  REQSUCCESSHASDATA,
  REQSUCCESSNODATA
} from "./mutation-type";

export default {
  [SEARCHNAME](state, val) {
    state.searchName = val;
  },
  [SEARCHUSER](state, users) {
    state.users = users;
  },
  [REQING](state) {
    state.isFirst = false;
    state.isLoading = true;
    state.noData = false;
  },
  [REQSUCCESSHASDATA](state) {
    state.isFirst = false;
    state.isLoading = false;
    state.noData = false;
  },
  [REQSUCCESSNODATA](state) {
    state.isFirst = false;
    state.isLoading = false;
    state.noData = true;
  }
};
