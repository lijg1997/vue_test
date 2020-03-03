import {
  KEYWORD,
  GETUSERS,
  REQING,
  REQSUCCESSSHASDATA,
  REQSUCCESSSNODATA
} from "./mutation-type";
import axios from "axios";
export default {
  [KEYWORD]({ commit }, val) {
    commit(KEYWORD, val);
  },
  async [GETUSERS](store) {
    store.commit(REQING);
    const body = await axios({
      baseURL: "https://api.github.com",
      url: "/search/users",
      method: "get",
      params: { q: store.state.keyWord }
    });
    let list = body.data.items.map(item => ({
      name: item.login,
      href: item.html_url,
      src: item.avatar_url
    }));
    if (list.length) store.commit(REQSUCCESSSHASDATA);
    else store.commit(REQSUCCESSSHASDATA);
    store.commit(KEYWORD, "");
    store.commit(GETUSERS, list);
  }
};
