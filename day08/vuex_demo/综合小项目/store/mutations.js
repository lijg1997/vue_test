import {
  SEARCHNAME,
  SEARCH,
  REQING,
  REQSUCCESSHASDATA,
  REQSUCCESSNODATA,
  ERROR
} from "./mutation-type";
export default {
  [SEARCHNAME](state, val) {
    state.searchName = val;
  },
  [SEARCH](state, users) {
    state.users = users;
  },
  [REQING](state) {
    state.isFirst = false;
    state.isLoading = true;
    state.noData = false;
    state.error = false;
  },
  [REQSUCCESSHASDATA](state) {
    state.isFirst = false;
    state.isLoading = false;
    state.noData = false;
    state.error = false;
  },
  [REQSUCCESSNODATA](state) {
    state.isFirst = false;
    state.isLoading = false;
    state.noData = true;
    state.error = false;
  },
  [ERROR](state) {
    state.isFirst = false;
    state.isLoading = false;
    state.noData = false;
    state.error = true;
  }
};
