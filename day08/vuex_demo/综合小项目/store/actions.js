import axios from "axios";
import {
  SEARCHNAME,
  SEARCH,
  REQING,
  REQSUCCESSHASDATA,
  REQSUCCESSNODATA,
  ERROR
} from "./mutation-type";
export default {
  [SEARCHNAME]({ commit }, val) {
    commit(SEARCHNAME, val);
  },
  async [SEARCH](store) {
    if (!store.state.searchName) {
      alert("信息不能为空");
      store.commit(SEARCHNAME, "");
      return;
    }
    store.commit(REQING);

    try {
      const body = await axios.get("https://api.github.com/search/users", {
        params: { q: store.state.searchName }
      });
      store.commit(SEARCHNAME, "");
      let users = body.data.items.map(item => ({
        name: item.login,
        href: item.html_url,
        src: item.avatar_url
      }));
      if (users.length) {
        store.commit(REQSUCCESSHASDATA);
        store.commit(SEARCH, users);
      } else {
        store.commit(REQSUCCESSNODATA);
      }
    } catch (error) {
      store.commit(ERROR);
    }
  }
};
