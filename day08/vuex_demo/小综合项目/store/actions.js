import axios from "axios";
import {
  SEARCHNAME,
  SEARCHUSER,
  REQING,
  REQSUCCESSHASDATA,
  REQSUCCESSNODATA
} from "./mutation-type";

export default {
  [SEARCHNAME]({ commit }, val) {
    commit(SEARCHNAME, val);
  },
  async [SEARCHUSER](store, val) {
    if (!val) {
      alert("输入不能为空");
      store.commit(SEARCHNAME, "");
      return;
    }
    store.commit(REQING);
    const body = await axios.get("/search/users", {
      baseURL: "https://api.github.com",
      params: { q: val }
    });
    store.commit(SEARCHNAME, "");
    let users = body.data.items.map(item => ({
      name: item.login,
      href: item.html_url,
      src: item.avatar_url
    }));
    if (users.length) {
      store.commit(SEARCHUSER, users);
      store.commit(REQSUCCESSHASDATA);
    } else store.commit(REQSUCCESSNODATA);
  }
};
