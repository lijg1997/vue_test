import {
  SEARCHNAME,
  SEARCH,
  REQING,
  REQSUCCESSHASDATA,
  REQSUCCESSNODATA
} from "./mutation-types";
import axios from "axios";
export default {
  [SEARCHNAME]({ commit }, val) {
    commit(SEARCHNAME, val);
  },
  async [SEARCH](store) {
    store.commit(REQING);
    const body = await axios.get("/search/users", {
      baseURL: "https://api.github.com",
      params: { q: store.state.searchName }
    });
    store.commit(SEARCHNAME, "");
    if (body.data.items.length) {
      let users = body.data.items.map(item => ({
        href: item.html_url,
        src: item.avatar_url,
        name: item.login
      }));
      store.commit(SEARCH, users);
      store.commit(REQSUCCESSHASDATA);
    } else store.commit(REQSUCCESSNODATA);
  }
};
